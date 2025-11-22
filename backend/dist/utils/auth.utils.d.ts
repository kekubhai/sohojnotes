import { Request, Response, NextFunction } from 'express';
export declare const hashPassword: (password: string) => Promise<string>;
export declare const comparePassword: (password: string, hashedPassword: string) => Promise<boolean>;
export declare const generateToken: (userId: string) => string;
export declare const verifyToken: (token: string) => any;
export declare const authenticate: (req: Request, res: Response, next: NextFunction) => Promise<Response | void>;
export declare const authorizeAdmin: (req: Request, res: Response, next: NextFunction) => Response | void;
//# sourceMappingURL=auth.utils.d.ts.map