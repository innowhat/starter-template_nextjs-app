import { test, expect } from '@playwright/test';
test.describe('Home Page Tests', () => {
    test('has title', async ({ page }) => {
        await page.goto('/');

        await expect(
            page.getByRole('heading', {
                name: 'NextJS App/Page Router Flexible/Customizable Starter Template',
            }),
        ).toBeVisible();
    });
});
