import { Database as DB } from "@/lib/database.types";

type Tweet = DB["public"]["Tables"]["tweets"]["Row"];
type Profile = DB["public"]["Tables"]["profiles"]["Row"];

declare global {
  type Database = DB; // note: we cannot have the same name in right side and left side
  type TweetWithAuthor = Tweet & {
    author: Profile;
    likes: number;
    user_has_liked_tweet: boolean;
  };
}
