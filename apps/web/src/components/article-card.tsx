import Image from "next/image";
import { AuthorInfo } from "./author-info";
import { Badge } from "./ui/badge";

type Props = {
  title: string;
  description: string;
  tags: string[];
  author: {
    username: string;
    name: string;
    email: string;
    image: string;
  };
  createdAt: string;
};

export function ArticleCard(props: Props) {
  const width = 176;
  const height = 124;
  const postedAt = new Date(props.createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="py-6 space-y-4">
      <AuthorInfo
        username={props.author.username}
        name={props.author.name}
        postCreatedAt={postedAt}
      />
      <div className="flex justify-between items-center">
        <div className="space-y-1 max-w-md">
          <h3 className="text-lg font-mono font-semibold tracking-tight leading-relaxed">
            {props.title}
          </h3>
          <p className="text-sm text-muted-foreground">{props.description}</p>
        </div>
        <Image
          src={`https://picsum.photos/${width}/${height}`}
          alt="Article cover"
          width={width}
          height={height}
        />
      </div>
      <ul className="font-sans flex gap-2">
        {props.tags.map((tag) => (
          <li key={tag}>
            <Badge>{tag}</Badge>
          </li>
        ))}
      </ul>
    </div>
  );
}
