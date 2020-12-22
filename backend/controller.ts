const cron = require('node-cron');
const { google } = require('googleapis')
import { Request, Response, NextFunction } from 'express';
import { getSheetData, getStats } from './sheets';
import { PlayerData } from './types';

// 5秒更新
let players: PlayerData[] = null
let stats = {
    total_players: 0,
    total_events_played: 0
}
let last_refreshed = new Date().getTime()

async function update() {  
    //Stats
    stats = await getStats()

    //Players
    const sheet = await getSheetData()
    players = sheet.toPlayers()

    last_refreshed = new Date().getTime()
 }

cron.schedule('*/5 * * * * *', () => { update() });

module.exports.stats = async function (req: Request, res: Response, next: NextFunction ) {
    
    return res.json(stats)
}

module.exports.last_refreshed = async function (req: Request, res: Response, next: NextFunction ) {
    return res.json({last_refreshed: last_refreshed})
}

//プレイヤー検索
const findPlayer = (name: string): PlayerData => {
    return players.find(player => player.name && player.name.toUpperCase() === name.toUpperCase())
}


module.exports.players = async function (req: Request, res: Response, next: NextFunction ) {

   if(players == null) return res.status(500).json({
        message: 'Players is empty'
   });
   
   return res.json(players)
}

module.exports.getPlayer = async function (req: Request, res: Response, next: NextFunction) {
    var name = req.params.name;
    
    if(players == null) return res.status(500).json({
        message: 'Players is empty'
   });

    const player = findPlayer(name)

    if(player == undefined) return res.status(500).json({
        message: 'No found player'
    });

    return res.json(player)
}

module.exports.getTotalPageViews = async function (req: Request, res: Response, next: NextFunction) {
    const client = await google.auth.getClient({
        keyFile: './credentials/analytics-keys.json',
        scopes: 'https://www.googleapis.com/auth/analytics.readonly'
    })

    const analyticsreporting = google.analyticsreporting({
        version: 'v4',
        auth: client
    })

    const googleRes = await analyticsreporting.reports.batchGet({
        requestBody: {
            reportRequests: [
                {
                    viewId: '227567273',  // メモしたGoogle Analyticsの ビューIDを入力
                    dateRanges: [ // 過去30日を集計対象とする
                        {
                            startDate: '2009-01-01',
                            endDate: '1daysAgo'
                        }
                    ],
                    dimensions: [ // ページパスをディメンションにする
                        {
                            name: 'ga:pagePath',
                        }
                    ],
                    metrics: [ // 利用する指標
                        {
                            expression: 'ga:pageviews'  // ページビューを指標として利用
                        }
                    ],
                    orderBys: { // ソート順
                        fieldName: 'ga:pageviews', // ページビューでソート
                        sortOrder: 'DESCENDING'  // 降順でソートする設定
                    }
                }
            ]
        }
    })
    res.header('Content-Type', 'application/json; charset=utf-8')
    res.json(googleRes.data);
    res.end();
}

module.exports.getMonthPageViews = async function (req: Request, res: Response, next: NextFunction) {
    const client = await google.auth.getClient({
        keyFile: './credentials/analytics-keys.json',
        scopes: 'https://www.googleapis.com/auth/analytics.readonly'
    })

    const analyticsreporting = google.analyticsreporting({
        version: 'v4',
        auth: client
    })

    const googleRes = await analyticsreporting.reports.batchGet({
        requestBody: {
            reportRequests: [
                {
                    viewId: '227567273',  // メモしたGoogle Analyticsの ビューIDを入力
                    dateRanges: [ // 過去30日を集計対象とする
                        {
                            startDate: '30daysAgo',
                            endDate: '1daysAgo'
                        }
                    ],
                    dimensions: [ // ページパスをディメンションにする
                        {
                            name: 'ga:pagePath',
                        }
                    ],
                    metrics: [ // 利用する指標
                        {
                            expression: 'ga:pageviews'  // ページビューを指標として利用
                        }
                    ],
                    orderBys: { // ソート順
                        fieldName: 'ga:pageviews', // ページビューでソート
                        sortOrder: 'DESCENDING'  // 降順でソートする設定
                    }
                }
            ]
        }
    })
    res.header('Content-Type', 'application/json; charset=utf-8')
    res.json(googleRes.data);
    res.end();
}