import server from "../src/server"
import request from "supertest"


describe("Test group for server API", () => {

    afterAll(() => {
        server.close()
    })

    it("should return hello world", async () => {
        expect.assertions(1)

        const res = await request(server).get("/")
        return expect(res.text).toEqual("Hello World")
    })
})