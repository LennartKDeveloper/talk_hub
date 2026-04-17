import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

test.describe('GDG Talk Hub UI Verification', () => {

  test('Homepage successfully renders and filters work', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('text=GDG Talk Hub')).toBeVisible();
    
    // Check search functionality
    const searchInput = page.locator('input[placeholder="Titel oder Speaker..."]');
    await searchInput.fill('Flutter');
    
    // Check if the mock talk is rendered
    await expect(page.locator('text=Lennart Kosova').first()).toBeVisible();
  });

  test('Talk Details page respects layout constraints and PDF is displayed/downloadable', async ({ page }) => {
    // Navigate to the first available talk
    await page.goto('/');
    const firstTalkLink = page.locator('a[href^="/talks/"]').first();
    const href = await firstTalkLink.getAttribute('href');
    
    if (href) {
      await page.goto(href);
      
      // Verify long titles don't break layout by checking visibility and generic bounds
      const h1 = page.locator('h1');
      await expect(h1).toBeVisible();
      const bounds = await h1.boundingBox();
       if (bounds) {
        expect(bounds.width).toBeGreaterThan(0);
        // Ensure no wild overflows (max width of standard 1080p is ~1920)
        expect(bounds.width).toBeLessThan(1920);
      }
      
      // Check for PDF downloader button
      const downloadBtn = page.locator('a:has-text("PDF Herunterladen")');
      await expect(downloadBtn).toBeVisible();
      const downloadHref = await downloadBtn.getAttribute('href');
      expect(downloadHref).not.toBeNull();
      
      // Validate the PDF itself is returned successfully from the static server
      const response = await page.request.get(downloadHref!);
      expect(response.status()).toBe(200);
      expect(response.headers()['content-type']).toContain('pdf');
      
      // Object tag viewer works
      const pdfObject = page.locator('object[type="application/pdf"]');
      await expect(pdfObject).toBeVisible();
    }
  });

});
