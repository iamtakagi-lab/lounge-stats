import * as gapis from 'googleapis'

export default class GoogleSpreadSheets {

    private spreadsheetId: string
    private tabTitle: string

    constructor(spreadsheetId: string, tabTitle: string) {
        this.spreadsheetId = spreadsheetId
        this.tabTitle = tabTitle
    }

    private auth = async (): Promise<gapis.sheets_v4.Sheets> => {
        const client = await gapis.google.auth.getClient({
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
            keyFile: './spreadsheet-keys.json'
        });
        return new gapis.sheets_v4.Sheets({ auth: client });
    }

    fetchValue = async (): Promise<gapis.sheets_v4.Schema$ValueRange> => {
        const authed = await this.auth();
        const res = await authed.spreadsheets.values.get({ spreadsheetId: this.spreadsheetId, range: this.tabTitle });
        return res.data;
    }

    fetchValueRange = async (range: number): Promise<gapis.sheets_v4.Schema$ValueRange> => {
        const authed = await this.auth();
        const res = await authed.spreadsheets.values.get({ spreadsheetId: this.spreadsheetId, range: this.tabTitle+" !A2" + "K" + range + 2 });
        return res.data;
    }

    insert = async (values: string[], row: number) => {
        const authed = await this.auth();
        
        const param = {
            spreadsheetId: this.spreadsheetId,
            range: `${this.tabTitle}!A` + row,
            valueInputOption: "USER_ENTERED",
            insertDataOption: 'INSERT_ROWS',
            resource: {
                values : [values]
            }
        }

        await authed.spreadsheets.values.update(param)
    }

    overwrite = async (values: string[], row: number) => {
        const authed = await this.auth();
        
        const param = {
            spreadsheetId: this.spreadsheetId,
            range: `${this.tabTitle}!A` + row,
            valueInputOption: "USER_ENTERED",
            resource: {
                values : [values]
            }
        }

        await authed.spreadsheets.values.update(param)
    }
}   