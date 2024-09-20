import Image from "next/image";
import { AuthorInfo } from "./author-info";
import { Badge } from "./ui/badge";

export function ArticleCard() {
  const width = 176;
  const height = 124;

  return (
    <div className="py-6 space-y-4">
      <AuthorInfo />
      <div className="flex justify-between items-center">
        <div className="space-y-1 max-w-md">
          <h3 className="text-lg font-mono font-semibold tracking-tight leading-relaxed">
            What is Next.js and why should I use it?
          </h3>
          <p className="text-sm text-muted-foreground">
            Next.js is a popular React framework that is designed to help
            developers build fast and scalable web applications. It is built on
            top of the React JavaScript library and provides a set of tools and
            conventions.
          </p>
        </div>
        <Image
          src={`https://picsum.photos/${width}/${height}`}
          alt="Article cover"
          width={width}
          height={height}
        />
      </div>
      <ul className="font-sans flex gap-2">
        <li>
          <Badge>React</Badge>
        </li>
        <li>
          <Badge>Next.js</Badge>
        </li>
        <li>
          <Badge>JavaScript</Badge>
        </li>
      </ul>
    </div>
  );
}
