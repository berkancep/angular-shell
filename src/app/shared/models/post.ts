import {RestBase} from "./rest-base";

export interface Post extends RestBase {
  userId: number;
  title: string;
  body: string;
}
