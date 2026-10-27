import { test, expect } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

test('Environment variables are loaded', async () => {
  expect(process.env.TRELLO_KEY).toBeTruthy();
  expect(process.env.TRELLO_TOKEN).toBeTruthy();

  console.log('Environment variables loaded successfully');
});