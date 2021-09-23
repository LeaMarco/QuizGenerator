import app from "../app";
import request from "supertest";

let emptyData= {}
let completeData= {
    "name":"TestUser",
    "description": "dadasdasd",
    "questions": [{
        "question_type": "text",
        "text": "textttt",
        "options": [ "option 1", "option 2"]
        },
        {
        "question_type": "text",
        "text": "textttt",
        "options": [ "option 1", "option 2"]
        }
    ]
}


describe("/list endpoint", () => {
  it("GET request status should should be 200", async () => {
    const result = await request(app).get("/list");
    expect(result.statusCode).toEqual(200);
  });
  it("GET request should return an object", async () => {
    const result = await request(app).get("/list");
    expect(typeof result).toEqual('object');
  });
});

describe("/create endpoint", () => {
    it("POST request status without sending a complete data should be 500", async () => {
      const result = await request(app).post("/create").send(emptyData);
      expect(result.statusCode).toEqual(500);
    });
    it("POST request status sending a complete data should be 200", async () => {
        const result = await request(app).post("/create").send(completeData);
        expect(result.statusCode).toEqual(200);
        const postCreatedId = result.text
        await request(app).delete(`/delete/${parseInt(postCreatedId)}`);
    });
    it("GET request should return an object", async () => {
      const result = await request(app).get("/list");
      expect(typeof result).toEqual('object');
    });
  });


  describe("/delete endpoint", () => {
    // it("DELETE request status sending an id should be 200", async () => {
    //     const post = await request(app).post("/create").send(completeData);
    //     const postCreatedId = post.text
    //     console.log(postCreatedId, `/delete/${parseInt(postCreatedId)}`)
    //     await request(app).delete(`/delete/${parseInt(postCreatedId)}`);
    //   });
      it("DELETE request status without an id should be 404", async () => {
        const result = await request(app).delete("/delete").send(emptyData);
        expect(result.statusCode).toEqual(404);
      });
  });