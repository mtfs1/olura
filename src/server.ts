import express, { Application, Request, Response } from "express"


const app: Application = express()

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World")
})

const port = process.env.PORT || 3000
const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

export default server