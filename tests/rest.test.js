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
                    "id": "01",
                    "key": "01",
                    "value": {
                      "id": "01",
                      "name": "John",
                      "email": "john@demo.com",
                      "phone": "123-456-7890",
                      "address": "123 Street ABC"
                    }
                  },
                  {
                    "id": "02",
                    "key": "02",
                    "value": {
                      "id": "02",
                      "name": "Joe",
                      "email": "joe@demo.com",
                      "phone": "123-456-7777",
                      "address": "456 Street ABC"
                    }
                  },
                  {
                    "id": "03",
                    "key": "03",
                    "value": {
                      "id": "03",
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
    test("GET /users/01", async () => {
        const { body } = await request(app).get('/users/01')
        expect(body).toEqual(
            {
                "_id": "01",
                "_rev": "1-1a7e82e5c6d0e6aa49b818936700f779",
                "name": "John",
                "email": "john@demo.com",
                "phone": "123-456-7890",
                "address": "123 Street ABC"
            }
        )
    });
});

describe("POST /users", () => {
    test("POST /users", async() => {
        let userObj = 
        {
            "_id": "04",
            "name": "Mary",
            "email": "blank@email.com",
            "phone": "777-777-7777",
            "address": "Number Street"
        }
        const response = await request(app).post("/users").send(userObj)
        expect(response.statusCode).toBe(200)
    });
});

describe("DELETE /users/04/1-70c59e0dc49ea752064c7bc30c40fb1d", () => {
    test("DELETE /users/04/1-70c59e0dc49ea752064c7bc30c40fb1d", async() => {
        const response = await request(app).delete("/users/04/1-70c59e0dc49ea752064c7bc30c40fb1d")
        expect(response.statusCode).toBe(200)
    });
});