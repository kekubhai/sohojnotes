import { Request, Response } from 'express';
export declare const listNotes: (req: Request, res: Response) => Promise<void>;
export declare const createNote: (req: Request, res: Response) => Promise<void>;
export declare const getNote: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateNote: (req: Request, res: Response) => Promise<void>;
export declare const deleteNote: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=notes.controller.d.ts.map