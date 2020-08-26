import { GoogleSheetData } from './GoogleSheetData';
import GoogleSpreadSheets from "./GoogleSpreadSheets";

export function getLeaderboardSheets() : GoogleSpreadSheets {
    return new GoogleSpreadSheets("1IPGK_kCgdqSLwcFjzgeLsRW7qV3MLCgcSBABdZHtK4o", "Leaderboard")
}

export async function getLeaderboardSheetData() : Promise<GoogleSheetData> {
    return new GoogleSheetData(await getLeaderboardSheets().fetchValue())
}

export async function getLeaderboardSheetDataRange(range: number) : Promise<GoogleSheetData> {
    return new GoogleSheetData(await getLeaderboardSheets().fetchValueRange(range))
}