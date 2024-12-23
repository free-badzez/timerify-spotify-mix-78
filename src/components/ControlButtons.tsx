import { Maximize2, Volume2 } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import { useState } from "react";
import { useSettings } from "@/contexts/SettingsContext";

const ControlButtons = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const { toast } = useToast();

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch (err) {
      toast({
        title: "Error",
        description: "Fullscreen mode is not supported in your browser",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="fixed bottom-4 right-4 flex gap-2">
      <Button
        onClick={toggleFullscreen}
        variant="outline"
        className="gap-2"
      >
        <Maximize2 className="h-4 w-4" />
        {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
      </Button>
    </div>
  );
};

export default ControlButtons;