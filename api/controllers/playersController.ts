import { Request, Response, NextFunction } from 'express';
import { getLeaderboardSheetData, getLeaderboardSheetDataRange } from '../../modules/spreadsheet';


module.exports.players = async function (req: Request, res: Response, next: NextFunction ) {

    /**
    if(req.query.page == undefined || req.query.per_page == undefined) return res.status(500).json({
        message: 'No found query'
    });

    var page = Number(req.query.page);
    var per_page = Number(req.query.per_page);

    const sheet = await getLeaderboardSheetData()
    const players = sheet.toPlayers()
    const data = players.slice((page * per_page) - per_page, (page * per_page))
    const prev_page = page > 1 ? page - 1 : null
    const next_page = page < Math.ceil(players.length / per_page) ? page + 1 : null

    return res.json({players: data, current_page: page, prev_page: prev_page, next_page: next_page})
    **/
   const sheet = await getLeaderboardSheetData()
   const players = sheet.toPlayers()
   res.json(players)
}

module.exports.getPlayer = async function (req: Request, res: Response, next: NextFunction) {
    var name = req.params.name;
    const sheet = await getLeaderboardSheetData()

    const player = sheet.findPlayer(name)

    if(player == undefined) return res.status(500).json({
        message: 'No found player.'
    });

    return res.json(sheet.findPlayer(name))
}