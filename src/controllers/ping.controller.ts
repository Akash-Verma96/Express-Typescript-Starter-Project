import { NextFunction, Request, Response } from 'express';
import fs from 'fs/promises';
import { FileNotFound} from '../utils/errors/app.error';

export const pingHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await fs.readFile("sample");
        res.status(200);
    } catch (error) {
        // throw new InternalServerError("Interval Server Error");
        throw new FileNotFound("File Not Found!");
    }
}