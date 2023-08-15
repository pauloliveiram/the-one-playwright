import { test, expect } from "@playwright/test";

test("Validar a resposta do GET de /movie/{id}", async ({ request }) => {
  const response = await request.get("/v2/movie/5cd95395de30eff6ebccde56");
  const responseBody = await response.json();

  expect(response.status()).toBe(200);
  expect(Array.isArray(responseBody.docs)).toBe(true);
  expect(typeof responseBody.docs[0]._id).toBe("string");
  expect(typeof responseBody.docs[0].name).toBe("string");
  expect(typeof responseBody.docs[0].runtimeInMinutes).toBe("number");
  expect(typeof responseBody.docs[0].budgetInMillions).toBe("number");
  expect(typeof responseBody.docs[0].boxOfficeRevenueInMillions).toBe("number");
  expect(typeof responseBody.docs[0].academyAwardNominations).toBe("number");
  expect(typeof responseBody.docs[0].academyAwardWins).toBe("number");
  expect(typeof responseBody.docs[0].rottenTomatoesScore).toBe("number");
  expect(typeof responseBody.total).toBe("number");
  expect(typeof responseBody.limit).toBe("number");
  expect(typeof responseBody.offset).toBe("number");
  expect(typeof responseBody.page).toBe("number");
  expect(typeof responseBody.pages).toBe("number");
});
