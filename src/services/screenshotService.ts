
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

export class ScreenshotService {
  private static async callPlaywrightMCP(request: ScreenshotRequest): Promise<ScreenshotResponse> {
    try {
      // This would integrate with your Playwright MCP
      // For now, we'll simulate the response structure
      console.log(`Capturing screenshot for ${request.toolName} at ${request.url}`);
      
      // Simulate MCP call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Return simulated response - in real implementation, this would be the actual MCP response
      return {
        success: true,
        imagePath: `screenshots/${request.toolName.toLowerCase().replace(/\s+/g, '-')}-screenshot.png`
      };
    } catch (error) {
      console.error('Screenshot capture failed:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      };
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
