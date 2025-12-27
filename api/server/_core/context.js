import jwt from "jsonwebtoken";
import { COOKIE_NAME } from "../../shared/const.js";
import { getUserByOpenId } from "../db.js";
export async function createContext(opts) {
    const { req, res } = opts;
    let user = null;
    try {
        const token = req.cookies?.[COOKIE_NAME];
        if (token) {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const dbUser = await getUserByOpenId(decoded.sub);
            if (dbUser) {
                user = dbUser;
            }
        }
    }
    catch (error) {
        console.warn("[Auth] Invalid or missing session token");
    }
    return {
        req,
        res,
        user,
    };
}
