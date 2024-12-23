import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface SettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SettingsDialog = ({ open, onOpenChange }: SettingsDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#1A1A1A] text-white border-none max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-white">Settings</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="space-y-4">
            <div className="font-medium">Theme</div>
            <div className="space-y-4">
              <div>
                <Label>Select theme:</Label>
                <Select>
                  <SelectTrigger className="bg-black/50 border-white/10 text-white">
                    <SelectValue placeholder="Seoul Sunrise" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1A1A1A] text-white border-white/10">
                    <SelectItem value="seoul">Seoul Sunrise</SelectItem>
                    <SelectItem value="tokyo">Tokyo Night</SelectItem>
                    <SelectItem value="purple">Purple Dream</SelectItem>
                    <SelectItem value="ocean">Ocean Breeze</SelectItem>
                    <SelectItem value="forest">Forest Mist</SelectItem>
                    <SelectItem value="sunset">Sunset Glow</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <Label>Background Video</Label>
                <Input
                  type="file"
                  accept="video/*"
                  className="bg-black/50 border-white/10 text-white"
                />
                <p className="text-sm text-white/60">
                  Upload a short video loop to play in the background
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="font-medium">Notifications</div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>Show browser notifications</Label>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <Label>Show Spotify playlist</Label>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <Label>Play sound on completion</Label>
                <Switch />
              </div>
            </div>
          </div>

          <div className="flex justify-between pt-4">
            <Button variant="destructive" className="bg-red-500/20 text-red-500 hover:bg-red-500/30">
              Reset all
            </Button>
            <div className="space-x-2">
              <Button variant="outline" className="text-white bg-white/10 hover:bg-white/20">
                Close
              </Button>
              <Button>Save changes</Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SettingsDialog;