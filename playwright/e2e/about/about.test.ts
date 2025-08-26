import { test, expect } from '@playwright/test';

test.describe('About Page Tests', () => {
    test('has title', async ({ page }) => {
        await page.goto('/about');
        await expect(
            page.getByRole('heading', { name: 'About Us' }),
        ).toBeVisible();
    });
});
