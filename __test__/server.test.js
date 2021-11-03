'use strict';

const { server } = require('../src/server'); 
const supertest = require('supertest');
const mockRequest = supertest(server);
const {db} = require('../src/models/index');

beforeAll(async () => {
  await db.sync();
});

// after all the tests are done
afterAll(async () => {
  await db.drop();
});

describe('TEST ALL', () => {
  test('/Root', async () => {

    const response = await mockRequest.get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello this is home root')

  });


  test('should check the Person works SUCCESS', async () => {

    const response = await mockRequest.get('/person?name=mohammad');
    expect(response.status).toBe(200);

  });

  // Check if 404 is handled 

test('Should respond with 404 status on an invalid method', async () => {

    const response = await mockRequest.get('/notfound');
    expect(response.status).toBe(404);

  });


  // Check if general error handling is working

  test('should respond with 500 on an error', async () => {

    const response = await mockRequest.get('/foo');
    expect(response.status).toBe(404);
  });

  
});

describe('TEST FOOD', () => {

let obj = {
  foodName: "mansaff",
 country: "jordan",
};
 let id=1;


it("food post test", async () => {
  console.log(obj);
  const response = await mockRequest.post(`/food`).send(obj)
  expect(response.status).toEqual(201);
});


 it("food get test", async () => {
    const response = await mockRequest.get(`/food`);
    expect(response.status).toEqual(200);
  });

  
  it("food delete test", async () => {
    const response = await mockRequest.delete(`/food/${id}`);
    expect(response.status).toEqual(204);
    
  });

  
  // it("food update test", async () => {
  //   const response = await mockRequest.put(`/food/${id}`).send(obj);
  //   expect(response.status).toEqual(200);
  // });


});


describe('TEST clothes', () => {

  let obj = {
    clothesName: "addidas",
    color: "red",
  };
   let id=1;
  
  
  it("clothes post test", async () => {
    console.log(obj);
    const response = await mockRequest.post(`/clothes`).send(obj)
    expect(response.status).toEqual(201);
  });
  
  
   it("clothes get test", async () => {
      const response = await mockRequest.get(`/clothes`);
      expect(response.status).toEqual(200);
    });
  
    
    it("clothes delete test", async () => {
      const response = await mockRequest.delete(`/clothes/${id}`);
      expect(response.status).toEqual(204);
      
    });
  
    
    // it("food update test", async () => {
    //   const response = await mockRequest.put(`/food/${id}`).send(obj);
    //   expect(response.status).toEqual(200);
    // });
  
  
  })