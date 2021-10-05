import Express from "express";

const app = Express();
const port = 3000;

app.get("/", (request, response) => {
    response.send("It's an express practice");
})

app.listen(port, () => console.log("listening on port" + port))