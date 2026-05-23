import request from "supertest"
import app from "../app.js"

describe("Express App Testing", () => {

    test("GET / should return 200", async () => {
        const res = await request(app).get("/")

        expect(res.statusCode).toBe(200)
    })

    test("GET / should contain username", async () => {
        const res = await request(app).get("/")

        expect(res.text).toContain("ritam maty")
    })

    test("GET /about should return 200", async () => {
        const res = await request(app).get("/about")

        expect(res.statusCode).toBe(200)
    })

    

    test("GET /health should return success true", async () => {
        const res = await request(app).get("/health")

        expect(res.body.success).toBe(true)
    })

})