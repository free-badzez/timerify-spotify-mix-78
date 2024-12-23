import { useState } from "react";
import Timer from "@/components/Timer";
import SpotifyEmbed from "@/components/SpotifyEmbed";
import { Settings, Volume2, Trees, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import TimerModeSelector from "@/components/TimerModeSelector";
import SettingsDialog from "@/components/SettingsDialog";
import { useToast } from "@/components/ui/use-toast";
import { SettingsProvider, useSettings } from "@/contexts/SettingsContext";
import QuoteButton from "@/components/QuoteButton";
import ControlButtons from "@/components/ControlButtons";

const IndexContent = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [mode, setMode] = useState<'pomodoro' | 'shortBreak' | 'longBreak'>('pomodoro');
  const [activeSound, setActiveSound] = useState<string | null>(null);
  const { toast } = useToast();
  const { background, backgroundType, fontColor, fontFamily } = useSettings();

  // Add audio functionality
  const sounds = {
    waves: new Audio("/audio/waves.mp3"), // Replace with your actual audio file paths
    forest: new Audio("/audio/forest.mp3"),
    rain: new Audio("/audio/rain.mp3"),
  };

  // Ensure sounds play in a loop
  Object.values(sounds).forEach((sound) => {
    sound.loop = true;
  });

  const handleSoundToggle = (sound: string) => {
    if (activeSound === sound) {
      // Stop the currently active sound
      sounds[sound].pause();
      sounds[sound].currentTime = 0; // Reset playback to the start
      setActiveSound(null);
      toast({
        title: "Sound stopped",
        description: `${sound} sound has been stopped`,
      });
    } else {
      // Stop any currently playing sound
      if (activeSound) {
        sounds[activeSound].pause();
        sounds[activeSound].currentTime = 0;
      }
      // Play the selected sound
      sounds[sound].play();
      setActiveSound(sound);
      toast({
        title: "Sound playing",
        description: `Now playing ${sound} sound`,
      });
    }
  };

  const backgroundStyle = background
    ? backgroundType === 'video'
      ? {}
      : { backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : { backgroundImage: 'linear-gradient(to bottom right, #2B1055, #7597DE)' };

  return (
    <div 
      className="min-h-screen relative"
      style={{
        ...backgroundStyle,
        color: fontColor,
        fontFamily: fontFamily,
      }}
    >
      {backgroundType === 'video' && background && (
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover -z-10"
        >
          <source src={background} type="video/mp4" />
        </video>
      )}
      <div className="container py-8 px-4 relative z-10">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold opacity-90">
            study<span className="font-light">TimerApp</span>
          </h1>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleSoundToggle('waves')}
              className={`opacity-90 hover:opacity-100 hover:bg-white/10 ${
                activeSound === 'waves' ? 'bg-white/20' : ''
              }`}
            >
              <Volume2 className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleSoundToggle('forest')}
              className={`opacity-90 hover:opacity-100 hover:bg-white/10 ${
                activeSound === 'forest' ? 'bg-white/20' : ''
              }`}
            >
              <Trees className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleSoundToggle('rain')}
              className={`opacity-90 hover:opacity-100 hover:bg-white/10 ${
                activeSound === 'rain' ? 'bg-white/20' : ''
              }`}
            >
              <Cloud className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowSettings(true)}
              className="opacity-90 hover:opacity-100 hover:bg-white/10"
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
      <QuoteButton />
      <ControlButtons />
    </div>
  );
};

const Index = () => (
  <SettingsProvider>
    <IndexContent />
  </SettingsProvider>
);

export default Index;

