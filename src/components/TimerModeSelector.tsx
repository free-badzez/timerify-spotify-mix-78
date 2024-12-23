import { Button } from "@/components/ui/button";

interface TimerModeSelectorProps {
  mode: 'pomodoro' | 'shortBreak' | 'longBreak';
  onModeChange: (mode: 'pomodoro' | 'shortBreak' | 'longBreak') => void;
}

const TimerModeSelector = ({ mode, onModeChange }: TimerModeSelectorProps) => {
  return (
    <div className="flex gap-2 bg-white/10 backdrop-blur-lg rounded-full p-1">
      <Button
        variant="ghost"
        className={`rounded-full text-white hover:text-white hover:bg-white/20 ${
          mode === 'pomodoro' ? 'bg-white/20' : ''
        }`}
        onClick={() => onModeChange('pomodoro')}
      >
        pomodoro
      </Button>
      <Button
        variant="ghost"
        className={`rounded-full text-white hover:text-white hover:bg-white/20 ${
          mode === 'shortBreak' ? 'bg-white/20' : ''
        }`}
        onClick={() => onModeChange('shortBreak')}
      >
        short break
      </Button>
      <Button
        variant="ghost"
        className={`rounded-full text-white hover:text-white hover:bg-white/20 ${
          mode === 'longBreak' ? 'bg-white/20' : ''
        }`}
        onClick={() => onModeChange('longBreak')}
      >
        long break
      </Button>
    </div>
  );
};

export default TimerModeSelector;