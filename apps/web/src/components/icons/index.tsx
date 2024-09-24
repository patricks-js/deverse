import type { LucideIcon, LucideProps } from "lucide-react";
import { GitHub } from "./github";
import { Google } from "./google";

export type IconProps = LucideProps;
export type Icon = LucideIcon;

export const Icons = {
  google: Google,
  github: GitHub,
};
