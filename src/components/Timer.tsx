import { useState, useEffect, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import { Play, RotateCcw, Timer as TimerIcon } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

interface TimerProps {
  mode: 'pomodoro' | 'shortBreak' | 'longBreak';
}

const Timer = ({ mode }: TimerProps) => {
  const getInitialTime = () => {
    switch (mode) {
      case 'shortBreak':
        return 5 * 60; // 5 minutes
      case 'longBreak':
        return 15 * 60; // 15 minutes
      default:
        return 25 * 60; // 25 minutes
    }
  };

  const [time, setTime] = useState(getInitialTime());
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState<string[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    setTime(getInitialTime());
    setIsRunning(false);
  }, [mode]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1) {
            setIsRunning(false);
            toast({
              title: "Timer Complete",
              description: "Time to take a break!",
            });
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, time, toast]);

  const formatTime = useCallback((timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }, []);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
    toast({
      title: !isRunning ? "Timer Started" : "Timer Paused",
      description: !isRunning ? "Stay focused!" : "Timer has been paused",
    });
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(getInitialTime());
    setLaps([]);
    toast({
      title: "Timer Reset",
      description: "Timer has been reset",
    });
  };

  const handleLap = () => {
    setLaps((prevLaps) => [...prevLaps, formatTime(time)]);
    toast({
      title: "Lap Recorded",
      description: `Lap time: ${formatTime(time)}`,
    });
  };

  return (
    <div className="text-center">
      <div className="text-[8rem] font-light text-white mb-8 font-mono tracking-wider">
        {formatTime(time)}
      </div>
      
      <div className="flex justify-center gap-4">
        <Button
          size="lg"
          onClick={handleStartStop}
          className="bg-white text-black hover:bg-white/90 rounded-full px-8"
        >
          {isRunning ? (
            "pause"
          ) : (
            <>
              <Play className="mr-2 h-4 w-4" />
              start
            </>
          )}
        </Button>
        
        <Button
          size="icon"
          variant="ghost"
          onClick={handleLap}
          className="text-white hover:bg-white/10"
        >
          <TimerIcon className="h-4 w-4" />
        </Button>

        <Button
          size="icon"
          variant="ghost"
          onClick={handleReset}
          className="text-white hover:bg-white/10"
        >
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>

      {laps.length > 0 && (
        <div className="mt-8 text-white/80">
          <h3 className="text-sm font-medium mb-2">Laps</h3>
          <div className="space-y-1">
            {laps.map((lap, index) => (
              <div key={index} className="text-sm">
                Lap {index + 1}: {lap}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Timer;