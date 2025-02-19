import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "@/components/ui/mode-toggle";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "./ui/separator";
import Logout from "./logout-button";
export default function ProfileSetting() {
  return (
    <div className="flex gap-2">
      <ModeToggle />
      <Popover>
        <PopoverTrigger>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="max-w-[200px]">
          <p>Client</p>
          <small>ronelvega@gmail.com</small>
          <Separator />
          <Logout />
         <Separator className="my-2" />
        </PopoverContent>
      </Popover>
    </div>
  );
}
