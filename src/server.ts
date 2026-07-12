import express from 'express'

const app = express();

const PORT: number = 3000;

app.get("/",(req,res) => {
    res.send("Hello TS server !");
})

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});