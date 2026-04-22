import { test, expect } from '@playwright/test';

test('home carrega e exibe CTA', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /Um hub torna isso real/i })).toBeVisible();
  const hero = page.getByRole('region', { name: /Um hub torna isso real/i });
  await expect(hero.getByRole('link', { name: /Comece agora/i })).toBeVisible();
});

