import { test, expect } from '@playwright/test';

const API_KEY = process.env.TRELLO_KEY!;
const TOKEN = process.env.TRELLO_TOKEN!;

let boardId: string;

test.describe('Trello API CRUD Tests', () => {

  test.beforeEach(async ({ request }) => {
    const response = await request.post(
      `https://api.trello.com/1/boards/?name=PlaywrightTestBoard&key=${API_KEY}&token=${TOKEN}`
    );

    expect(response.status()).toBe(200);

    const body = await response.json();
    boardId = body.id;
  });

  test('POST - Create Board', async ({ request }) => {
    const response = await request.post(
      `https://api.trello.com/1/boards/?name=NewBoard&key=${API_KEY}&token=${TOKEN}`
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.name).toBe('NewBoard');
    expect(body.id).toBeTruthy();
  });

  test('GET - Existing Board', async ({ request }) => {
    const response = await request.get(
      `https://api.trello.com/1/boards/${boardId}?key=${API_KEY}&token=${TOKEN}`
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.id).toBe(boardId);
    expect(body.name).toContain('PlaywrightTestBoard');
  });

  test('PUT - Update Board Name', async ({ request }) => {
    const response = await request.put(
      `https://api.trello.com/1/boards/${boardId}?name=UpdatedBoard&key=${API_KEY}&token=${TOKEN}`
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.name).toBe('UpdatedBoard');
    expect(body.id).toBe(boardId);
  });

  test('DELETE - Board', async ({ request }) => {
    const response = await request.delete(
      `https://api.trello.com/1/boards/${boardId}?key=${API_KEY}&token=${TOKEN}`
    );

    expect(response.status()).toBe(200);
  });

  test('GET - Non-existent Board Returns 404', async ({ request }) => {
    const response = await request.get(
      `https://api.trello.com/1/boards/nonexistentboard123?key=${API_KEY}&token=${TOKEN}`
    );

    expect(response.status()).toBe(404);

    const body = await response.text();

    expect(body).toContain('The requested resource was not found');
  });

});