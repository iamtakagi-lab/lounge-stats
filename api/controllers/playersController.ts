import { Request, Response, NextFunction } from 'express';
import { getLeaderboardSheetData } from '../../modules/spreadsheet';

module.exports.players = async function (req: Request, res: Response, next: NextFunction ) {
    const sheet = await getLeaderboardSheetData()
    return res.json(sheet.toPlayers())
}

module.exports.player = async function (req: Request, res: Response, next: NextFunction) {
    var name = req.params.name;
    const sheet = await getLeaderboardSheetData()
    return res.json(sheet.findPlayer(name))
}