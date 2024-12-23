import { useState } from "react";
import Timer from "@/components/Timer";
import SpotifyEmbed from "@/components/SpotifyEmbed";
import { Settings, Volume2, Trees, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import TimerModeSelector from "@/components/TimerModeSelector";
import SettingsDialog from "@/components/SettingsDialog";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [mode, setMode] = useState<'pomodoro' | 'shortBreak' | 'longBreak'>('pomodoro');
  const [activeSound, setActiveSound] = useState<string | null>(null);
  const { toast } = useToast();

  const handleSoundToggle = (sound: string) => {
    if (activeSound === sound) {
      setActiveSound(null);
      toast({
        title: "Sound stopped",
        description: `${sound} sound has been stopped`,
      });
    } else {
      setActiveSound(sound);
      toast({
        title: "Sound playing",
        description: `Now playing ${sound} sound`,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2B1055] to-[#7597DE]">
      <div className="container py-8 px-4">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-white/90">
            studywith<span className="font-light">me.io</span>
          </h1>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleSoundToggle('waves')}
              className={`text-white/90 hover:text-white hover:bg-white/10 ${
                activeSound === 'waves' ? 'bg-white/20' : ''
              }`}
            >
              <Volume2 className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleSoundToggle('forest')}
              className={`text-white/90 hover:text-white hover:bg-white/10 ${
                activeSound === 'forest' ? 'bg-white/20' : ''
              }`}
            >
              <Trees className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleSoundToggle('rain')}
              className={`text-white/90 hover:text-white hover:bg-white/10 ${
                activeSound === 'rain' ? 'bg-white/20' : ''
              }`}
            >
              <Cloud className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowSettings(true)}
              className="text-white/90 hover:text-white hover:bg-white/10"
            >
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </header>

        <div className="flex flex-col items-center justify-center gap-8">
          <TimerModeSelector mode={mode} onModeChange={setMode} />
          <Timer mode={mode} />
          <SpotifyEmbed />
        </div>

        <SettingsDialog open={showSettings} onOpenChange={setShowSettings} />
      </div>
    </div>
  );
};

export default Index;