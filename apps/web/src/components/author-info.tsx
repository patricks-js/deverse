import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function AuthorInfo() {
  return (
    <div className="flex gap-2 items-center">
      <Avatar>
        <AvatarImage
          src="https://github.com/patricks-js.png"
          alt="User profile"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div>
        <p className="flex gap-1 text-sm items-center">
          <h4 className="font-medium">Patrick</h4>
          <span className="text-muted-foreground">•</span>
          <span className="text-xs text-muted-foreground">@patricks-js</span>
        </p>
        <p className="text-sm text-muted-foreground">Sep 20, 2024</p>
      </div>
    </div>
  );
}
