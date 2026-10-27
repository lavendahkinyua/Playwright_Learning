import { test, expect } from '@playwright/test';

const API_KEY = process.env.TRELLO_KEY!;
const TOKEN = process.env.TRELLO_TOKEN!;
const BOARD_ID = process.env.TRELLO_BOARD_ID!;
const LIST_ID = process.env.TRELLO_LIST_ID!;

let cardName: string;

test.describe('Hybrid API + UI Test', () => {

  test.beforeEach(async ({ request }) => {

    cardName = `PlaywrightCard-${Date.now()}`;

    const response = await request.post(
      `https://api.trello.com/1/cards?idList=${LIST_ID}&name=${cardName}&key=${API_KEY}&token=${TOKEN}`
    );

    expect(response.ok()).toBeTruthy();

    const body = await response.json();

    expect(body.name).toBe(cardName);
  });

  test('Card created via API is visible in Trello UI', async ({ page }) => {

    await page.goto(`https://trello.com/b/${BOARD_ID}`);

    await expect(
      page.getByText(cardName)
    ).toBeVisible();

  });

});