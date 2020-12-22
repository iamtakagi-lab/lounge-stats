import { GoogleSheetData } from './GoogleSheetData';
import GoogleSpreadSheets from "./GoogleSpreadSheets";

const id = '1IPGK_kCgdqSLwcFjzgeLsRW7qV3MLCgcSBABdZHtK4o'
const leaderboard_sheet_name = 'Leaderboard'
const strikes_sheet_name = 'Strikes'
const stats_sheet_name = 'Stats'

let leaderboard, strikes, stats

export function getLeaderboardSheets(): GoogleSpreadSheets {
    if (!leaderboard) leaderboard = new GoogleSpreadSheets(id, leaderboard_sheet_name)
    return leaderboard
}

export function getStrikesSheets(): GoogleSpreadSheets {
    if (!strikes) strikes = new GoogleSpreadSheets(id, strikes_sheet_name)
    return strikes
}

export function getStatsSheets(): GoogleSpreadSheets {
    if (!stats) stats = new GoogleSpreadSheets(id, stats_sheet_name)
    return stats
}

export async function getStats(): Promise<any> {
    const sheets = getStatsSheets()

    const data = {
        total_players: await (await sheets.fetchValueByCoords("N33", "N35")).values[0].toString(),
        total_events_played: await (await sheets.fetchValueByCoords("N36", "N38")).values[0].toString()
    }

    return data
}

export async function getSheetData(): Promise<GoogleSheetData> {
    return new GoogleSheetData(
        await getLeaderboardSheets().fetchValue(),
        await getStrikesSheets().fetchValue()
    )
}