import * as gapis from 'googleapis'
import { PlayerData } from '~/types';
import { notEmpty } from '../../utils';

export class GoogleSheetData {

    private sheet: gapis.sheets_v4.Schema$ValueRange;
    private rows: any[];

    constructor(sheet: gapis.sheets_v4.Schema$ValueRange) {
        this.sheet = sheet;
        // 先頭行を飛ばしてる
        this.rows = this.rowRange().slice(1).map(this.rowValuesAt);
    }


    toPlayers = (): PlayerData[] => {
        return this.rows.map(this.toPlayerData).filter(notEmpty)
    }

    findPlayer = (name: string): PlayerData => {
        return this.toPlayers().find(player => player.name.toLowerCase() === name.toLowerCase())
    }

    private toPlayerData = (row: any[]): PlayerData | undefined => {

        const data: PlayerData = {
            rank: row[1],
            name: row[2],
            mmr: row[3],
            peak_mmr: row[4],
            win_rate: row[5],
            wl_last10: row[6],
            gl_last10: row[7],
            events_played: row[8],
            largest_gain: row[9],
            largest_loss: row[10]
        }
    
        return data
    }

    private rowValuesAt = (i: number): any[] => {
        if (this.sheet.values === undefined || this.sheet.values === null) {
            return [];
        }
        return this.sheet.values[i];
    }

    private rowCount = (): number => {
        if (this.sheet.values === undefined || this.sheet.values === null) {
            return 0;
        }
        return this.sheet.values.length;
    }

    private rowRange = (): number[] => {
        return this.range(this.rowCount());
    }

    private range = (l: number): number[] => {
        return Array.from({ length: l }, (v, i) => i);
    };
}