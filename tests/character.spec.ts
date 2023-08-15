import { test, expect } from "@playwright/test";

test("Validar a resposta do GET de /character", async ({ request }) => {
  const response = await request.get("/v2/character");
  const responseBody = await response.json();

  expect(response.status()).toBe(200);
  expect(Array.isArray(responseBody.docs)).toBe(true);
  expect(typeof responseBody.docs[0]._id).toBe("string");
  expect(typeof responseBody.docs[0].height).toBe("string");
  expect(typeof responseBody.docs[0].race).toBe("string");
  expect(typeof responseBody.docs[0].gender).toBe("string");
  expect(typeof responseBody.docs[0].birth).toBe("string");
  expect(typeof responseBody.docs[0].spouse).toBe("string");
  expect(typeof responseBody.docs[0].death).toBe("string");
  expect(typeof responseBody.docs[0].realm).toBe("string");
  expect(typeof responseBody.docs[0].hair).toBe("string");
  expect(typeof responseBody.docs[0].name).toBe("string");
  expect(typeof responseBody.docs[0].wikiUrl).toBe("string");
  expect(typeof responseBody.total).toBe("number");
  expect(typeof responseBody.limit).toBe("number");
  expect(typeof responseBody.offset).toBe("number");
  expect(typeof responseBody.page).toBe("number");
  expect(typeof responseBody.pages).toBe("number");
});