import { IconConfig } from "./icon-config";
import { LinkConfig } from "./link-config";

export interface ArticleConfig {
  author: string;
  title: string;
  description: string;
  link: LinkConfig;
  icon: IconConfig;
}
