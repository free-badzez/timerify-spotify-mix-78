import React, { useState, useEffect, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import { PlayCircle, PauseCircle, RotateCcw, Timer as TimerIcon } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState<number[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = useCallback((timeInSeconds: number) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }, []);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
    toast({
      title: !isRunning ? "Timer Started" : "Timer Paused",
      description: !isRunning ? "Your timer is now running" : "Your timer has been paused",
    });
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
    toast({
      title: "Timer Reset",
      description: "Your timer has been reset to zero",
    });
  };

  const handleLap = () => {
    setLaps((prevLaps) => [...prevLaps, time]);
    toast({
      title: "Lap Recorded",
      description: `Lap ${laps.length + 1}: ${formatTime(time)}`,
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <div className="backdrop-blur-lg bg-white/30 rounded-2xl p-8 shadow-xl">
        <div className="text-7xl font-bold text-center mb-8 font-mono text-timer-purple">
          {formatTime(time)}
        </div>
        
        <div className="flex justify-center gap-4 mb-8">
          <Button
            variant="outline"
            size="lg"
            onClick={handleStartStop}
            className="w-32 h-12 text-lg"
          >
            {isRunning ? (
              <PauseCircle className="mr-2 h-5 w-5" />
            ) : (
              <PlayCircle className="mr-2 h-5 w-5" />
            )}
            {isRunning ? "Pause" : "Start"}
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            onClick={handleReset}
            className="w-32 h-12 text-lg"
          >
            <RotateCcw className="mr-2 h-5 w-5" />
            Reset
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            onClick={handleLap}
            disabled={!isRunning}
            className="w-32 h-12 text-lg"
          >
            <TimerIcon className="mr-2 h-5 w-5" />
            Lap
          </Button>
        </div>

        {laps.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-timer-purple">Lap Times</h3>
            <div className="space-y-2">
              {laps.map((lapTime, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-2 px-4 bg-white/50 rounded-lg"
                >
                  <span className="font-medium">Lap {index + 1}</span>
                  <span className="font-mono">{formatTime(lapTime)}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Timer;