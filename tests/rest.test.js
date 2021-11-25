const request = require("supertest")
const app = require("../app")

describe("Test the root path", () => {
    test("It should response the GET method", async () => {
        const response = await request(app).get("/users")
        expect(response.statusCode).toBe(200);
    });
});

describe("Get json data", () => {
    test("GET /users", async() => {
        const { body } = await request(app).get("/users")
        expect(body).toEqual(
            {
                "total_rows": 3,
                "offset": 0,
                "rows": [
                  {
                    "id": "63adcbcce68957f00cf186991c000eeb",
                    "key": "63adcbcce68957f00cf186991c000eeb",
                    "value": {
                      "id": "63adcbcce68957f00cf186991c000eeb",
                      "name": "John",
                      "email": "john@demo.com",
                      "phone": "123-456-7890",
                      "address": "123 Street ABC"
                    }
                  },
                  {
                    "id": "63adcbcce68957f00cf186991c001339",
                    "key": "63adcbcce68957f00cf186991c001339",
                    "value": {
                      "id": "63adcbcce68957f00cf186991c001339",
                      "name": "Joe",
                      "email": "joe@demo.com",
                      "phone": "123-456-7777",
                      "address": "456 Street ABC"
                    }
                  },
                  {
                    "id": "63adcbcce68957f00cf186991c0022ea",
                    "key": "63adcbcce68957f00cf186991c0022ea",
                    "value": {
                      "id": "63adcbcce68957f00cf186991c0022ea",
                      "name": "Tess",
                      "email": "tess@demo.com",
                      "phone": "123-222-321",
                      "address": "789 Street"
                    }
                  }
                ]
              },
        );
    });
    test("GET /users/63adcbcce68957f00cf186991c000eeb", async () => {
        const { body } = await request(app).get('/users/63adcbcce68957f00cf186991c000eeb')
        expect(body).toEqual(
            {
                "_id": "63adcbcce68957f00cf186991c000eeb",
                "_rev": "1-1a7e82e5c6d0e6aa49b818936700f779",
                "name": "John",
                "email": "john@demo.com",
                "phone": "123-456-7890",
                "address": "123 Street ABC"
              }
        )
    });
});
