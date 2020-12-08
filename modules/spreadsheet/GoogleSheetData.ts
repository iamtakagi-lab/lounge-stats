import * as gapis from 'googleapis'
import { PlayerData } from '~/types';
import { StrikesData } from './../../types/index.d';
import { notEmpty } from '../../utils';

export class GoogleSheetData {

    private leaderboard_sheet: gapis.sheets_v4.Schema$ValueRange;
    private strikes_sheet: gapis.sheets_v4.Schema$ValueRange;

    private leaderboard_rows: any[];
    private strikes_rows: any[];

    constructor(
        leaderboard_sheet: gapis.sheets_v4.Schema$ValueRange,
        strikes_sheet: gapis.sheets_v4.Schema$ValueRange) {

        this.leaderboard_sheet = leaderboard_sheet;
        this.strikes_sheet = strikes_sheet;

        // 先頭行を飛ばしてる
        this.leaderboard_rows = this.rowRange(leaderboard_sheet).slice(1).map((i) => this.rowValuesAt(i, this.leaderboard_sheet));
        this.strikes_rows = this.rowRange(strikes_sheet).slice(1).map((i) => this.rowValuesAt(i, this.strikes_sheet));
    }

    toPlayers = (): PlayerData[] => {
        return this.leaderboard_rows.map(this.toPlayerData).filter(notEmpty)
    }
    

    toStrikes = (): StrikesData[] => {
        return this.strikes_rows.map(this.toStrikeData).filter(notEmpty)
    }

    private toPlayerData = (row: any[]): PlayerData | undefined => {
        const player_data: PlayerData = {
            rank: row[1],
            name: row[2],
            mmr: row[3],
            peak_mmr: row[4],
            win_rate: row[5],
            wl_last10: row[6],
            gl_last10: row[7],
            events_played: row[8],
            largest_gain: row[9],
            largest_loss: row[10],
            strikes_data: null
        }

        const strikes_data = this.toStrikes().find(v => v.name.toUpperCase() == player_data.name.toUpperCase())
        if (strikes_data) player_data.strikes_data = strikes_data

        return player_data
    }

    private toStrikeData = (row: any[]): StrikesData | undefined => {

        const dates = new Array<string | undefined | null>()

        for (let i = 3; i <= 5; i++) {
            const date = row[i]
            if (date) dates.push(date)
        }

        const data: StrikesData = {
            name: row[0],
            strikes: row[1],
            muted: row[2],
            dates: dates
        }

        return data
    }

    private rowValuesAt = (i: number, sheet: gapis.sheets_v4.Schema$ValueRange): any[] => {
        if (sheet.values === undefined || sheet.values === null) {
            return [];
        }
        return sheet.values[i];
    }

    private rowCount = (sheet: gapis.sheets_v4.Schema$ValueRange): number => {
        if (sheet.values === undefined || sheet.values === null) {
            return 0;
        }
        return sheet.values.length;
    }

    private rowRange = (sheet: gapis.sheets_v4.Schema$ValueRange): number[] => {
        return this.range(this.rowCount(sheet));
    }

    private range = (l: number): number[] => {
        return Array.from({ length: l }, (v, i) => i);
    };
}