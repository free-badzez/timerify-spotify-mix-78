import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface SettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SettingsDialog = ({ open, onOpenChange }: SettingsDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#1A1A1A] text-white border-none">
        <DialogHeader>
          <DialogTitle className="text-white">Settings</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="space-y-4">
            <div className="font-medium">General</div>
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
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <Label>Show browser notifications</Label>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <Label>Show Spotify playlist</Label>
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