import { useState, useEffect, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import { Play, RotateCcw } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Timer = () => {
  const [time, setTime] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const { toast } = useToast();

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
    setTime(25 * 60);
    toast({
      title: "Timer Reset",
      description: "Timer has been reset to 25:00",
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
          onClick={handleReset}
          className="text-white hover:bg-white/10"
        >
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Timer;