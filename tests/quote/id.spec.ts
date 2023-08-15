import { test, expect } from "@playwright/test";

test("Validar a resposta do GET de /quote/{id}", async ({ request }) => {
  const response = await request.get("/v2/quote/5cd96e05de30eff6ebcce7e9");
  const responseBody = await response.json();

  expect(response.status()).toBe(200);
  expect(Array.isArray(responseBody.docs)).toBe(true);
  expect(typeof responseBody.docs[0]._id).toBe("string");
  expect(typeof responseBody.docs[0].dialog).toBe("string");
  expect(typeof responseBody.docs[0].movie).toBe("string");
  expect(typeof responseBody.docs[0].character).toBe("string");
  expect(typeof responseBody.docs[0].id).toBe("string");
  expect(typeof responseBody.total).toBe("number");
  expect(typeof responseBody.limit).toBe("number");
  expect(typeof responseBody.offset).toBe("number");
  expect(typeof responseBody.page).toBe("number");
  expect(typeof responseBody.pages).toBe("number");
});