import { test, expect } from '@playwright/test';

test('home carrega e exibe CTA', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /Mais leads qualificados/i })).toBeVisible();
  await expect(page.getByRole('button', { name: /Quero meu diagnóstico/i })).toBeVisible();
});

