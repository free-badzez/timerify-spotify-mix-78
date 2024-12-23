import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { useSettings } from "@/contexts/SettingsContext";

const SoundSettings = () => {
  const { alertSound, setAlertSound } = useSettings();

  return (
    <div className="space-y-4">
      <div className="font-medium">Alert Sound</div>
      <RadioGroup value={alertSound} onValueChange={setAlertSound}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="bell" id="bell" />
          <Label htmlFor="bell">Bell Sound</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="chicken" id="chicken" />
          <Label htmlFor="chicken">Chicken Sound</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="alert" id="alert" />
          <Label htmlFor="alert">Alert Sound</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="chime" id="chime" />
          <Label htmlFor="chime">Chime Sound</Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default SoundSettings;