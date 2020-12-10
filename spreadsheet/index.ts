import { GoogleSheetData } from './GoogleSheetData';
import GoogleSpreadSheets from "./GoogleSpreadSheets";

const id = '1IPGK_kCgdqSLwcFjzgeLsRW7qV3MLCgcSBABdZHtK4o'
const leaderboard_sheet_name = 'Leaderboard'
const strikes_sheet_name = 'Strikes'

let leaderboard, strikes

export function getLeaderboardSheets(): GoogleSpreadSheets {
    if (!leaderboard) leaderboard = new GoogleSpreadSheets(id, leaderboard_sheet_name)
    return leaderboard
}

export function getStrikesSheets(): GoogleSpreadSheets {
    if (!strikes) strikes = new GoogleSpreadSheets(id, strikes_sheet_name)
    return strikes
}

export async function getSheetData(): Promise<GoogleSheetData> {
    return new GoogleSheetData(
        await getLeaderboardSheets().fetchValue(),
        await getStrikesSheets().fetchValue()
    )
}