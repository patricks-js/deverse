import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type Props = {
  username: string;
  name: string;
  postCreatedAt: string;
};

export function AuthorInfo(props: Props) {
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
          <h4 className="font-medium">{props.name}</h4>
          <span className="text-muted-foreground">•</span>
          <span className="text-xs text-muted-foreground">
            {props.username}
          </span>
        </p>
        <p className="text-sm text-muted-foreground">{props.postCreatedAt}</p>
      </div>
    </div>
  );
}
