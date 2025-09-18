import type { jwtPayload } from "../utils/jwt";

declare global {
    namespace Express {
        interface Request {
            user: jwtPayload;
        }
    }
}