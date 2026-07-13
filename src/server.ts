import express from 'express'
import { serverConfig } from './config';
import v1Router from './routers/v1/index.router';
import v2Router from './routers/v2/index.router';

const app = express();

app.use("/api/v1", v1Router); // Registering all the routes from pingRouter to the app
app.use("/api/v2", v2Router); // Registering all the routes from pingRouter to the app


app.listen(serverConfig.PORT, () => {
    console.log(`server is running on http://localhost:${serverConfig.PORT}`);
});

