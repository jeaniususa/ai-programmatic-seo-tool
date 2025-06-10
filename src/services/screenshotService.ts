
interface ScreenshotRequest {
  url: string;
  toolName: string;
  viewport?: {
    width: number;
    height: number;
  };
}

interface ScreenshotResponse {
  success: boolean;
  imagePath?: string;
  error?: string;
}

import { chromium } from 'playwright';

export class ScreenshotService {
  static async callPlaywrightMCP(request: ScreenshotRequest): Promise<ScreenshotResponse> {
    try {
      const browser = await chromium.launch();
      const page = await browser.newPage();
      await page.goto(request.url, { waitUntil: 'networkidle' });

      const sanitizedName = request.toolName.toLowerCase().replace(/\s+/g, '-');
      const imagePath = `public/screenshots/${sanitizedName}-screenshot.png`;

      await page.screenshot({ path: imagePath, fullPage: true });
      await browser.close();

      return {
        success: true,
        imagePath: `/screenshots/${sanitizedName}-screenshot.png`
      };
    } catch (error) {
      console.error('Screenshot capture failed:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      };
    }
  }
}
  static async captureToolScreenshot(toolName: string, url: string): Promise<ScreenshotResponse> {
    const request: ScreenshotRequest = {
      url,
      toolName,
      viewport: {
        width: 1200,
        height: 800
      }
    };

    return this.callPlaywrightMCP(request);
  }

  static async captureMultipleScreenshots(tools: Array<{name: string, url: string}>): Promise<Array<{toolName: string, result: ScreenshotResponse}>> {
    const results = await Promise.all(
      tools.map(async (tool) => ({
        toolName: tool.name,
        result: await this.captureToolScreenshot(tool.name, tool.url)
      }))
    );

    return results;
  }
}
