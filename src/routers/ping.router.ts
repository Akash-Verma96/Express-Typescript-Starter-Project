import express  from "express";
import { pingHandler } from "../controllers/ping.controller";
// import { validateQueryParam, validateRequestBody } from "../validators";
// import { pingSchema, querySchema } from "../validators/ping.validators.schema";



const pingRouter = express.Router();



// pingRouter.get("/ping",validateRequestBody(pingSchema), validateQueryParam(querySchema), pingHandler);
pingRouter.get("/ping", pingHandler);


export default pingRouter;