import { useState } from "react";
import Timer from "@/components/Timer";
import SpotifyEmbed from "@/components/SpotifyEmbed";
import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import TimerModeSelector from "@/components/TimerModeSelector";
import SettingsDialog from "@/components/SettingsDialog";

const Index = () => {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2B1055] to-[#7597DE]">
      <div className="container py-8 px-4">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-white/90">
            studywith<span className="font-light">me.io</span>
          </h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowSettings(true)}
            className="text-white/90 hover:text-white hover:bg-white/10"
          >
            <Settings className="h-5 w-5" />
          </Button>
        </header>

        <div className="flex flex-col items-center justify-center gap-8">
          <TimerModeSelector />
          <Timer />
          <SpotifyEmbed />
        </div>

        <SettingsDialog open={showSettings} onOpenChange={setShowSettings} />
      </div>
    </div>
  );
};

export default Index;