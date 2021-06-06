import { UserPayload } from "../../src/model/interfaces/user-payload";
declare global {
    namespace Express {

        interface Request {
            payload: UserPayload
        }
    }
}