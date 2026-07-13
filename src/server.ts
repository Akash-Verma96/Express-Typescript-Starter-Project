import express from 'express'
import { serverConfig } from './config';
import pingRouter from './routers/ping.router';

const app = express();

app.use("/", pingRouter); // Registering all the routes from pingRouter to the app


app.listen(serverConfig.PORT, () => {
    console.log(`server is running on http://localhost:${serverConfig.PORT}`);
});