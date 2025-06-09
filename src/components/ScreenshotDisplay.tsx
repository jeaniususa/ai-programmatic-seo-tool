
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Loader2, Camera, ExternalLink } from "lucide-react";

interface ScreenshotDisplayProps {
  toolName: string;
  websiteUrl?: string;
  screenshotPath?: string;
  isLoading?: boolean;
  onCaptureScreenshot?: () => void;
}

const ScreenshotDisplay = ({ 
  toolName, 
  websiteUrl, 
  screenshotPath, 
  isLoading = false,
  onCaptureScreenshot 
}: ScreenshotDisplayProps) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleVisitSite = () => {
    if (websiteUrl) {
      window.open(websiteUrl, '_blank', 'noopener,noreferrer');
    }
  };

  if (isLoading) {
    return (
      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="h-6 w-6 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground">Capturing screenshot...</p>
        </div>
      </div>
    );
  }

  if (imageError || !screenshotPath) {
    return (
      <div className="aspect-video bg-muted rounded-lg flex flex-col items-center justify-center gap-3 p-4">
        <Camera className="h-8 w-8 text-muted-foreground" />
        <p className="text-sm text-muted-foreground text-center">
          {imageError ? 'Failed to load screenshot' : 'No screenshot available'}
        </p>
        <div className="flex gap-2">
          {onCaptureScreenshot && (
            <Button size="sm" variant="outline" onClick={onCaptureScreenshot}>
              <Camera className="h-4 w-4 mr-2" />
              Capture
            </Button>
          )}
          {websiteUrl && (
            <Button size="sm" variant="outline" onClick={handleVisitSite}>
              <ExternalLink className="h-4 w-4 mr-2" />
              Visit Site
            </Button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <div className="relative aspect-video bg-muted rounded-lg overflow-hidden group">
        <img
          src={screenshotPath}
          alt={`${toolName} website screenshot`}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
          onError={handleImageError}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex gap-2">
            {onCaptureScreenshot && (
              <Button size="sm" variant="secondary" onClick={onCaptureScreenshot}>
                <Camera className="h-4 w-4 mr-2" />
                Refresh
              </Button>
            )}
            {websiteUrl && (
              <Button size="sm" variant="secondary" onClick={handleVisitSite}>
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Badge variant="secondary" className="text-xs">
          Live Preview
        </Badge>
        <p className="text-xs text-muted-foreground">
          {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default ScreenshotDisplay;
