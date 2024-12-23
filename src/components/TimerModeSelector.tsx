import { Button } from "@/components/ui/button";

const TimerModeSelector = () => {
  return (
    <div className="flex gap-2 bg-white/10 backdrop-blur-lg rounded-full p-1">
      <Button
        variant="ghost"
        className="rounded-full text-white hover:text-white hover:bg-white/20"
      >
        pomodoro
      </Button>
      <Button
        variant="ghost"
        className="rounded-full text-white hover:text-white hover:bg-white/20"
      >
        short break
      </Button>
      <Button
        variant="ghost"
        className="rounded-full text-white hover:text-white hover:bg-white/20"
      >
        long break
      </Button>
    </div>
  );
};

export default TimerModeSelector;