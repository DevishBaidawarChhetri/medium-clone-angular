import { AuthStateInterface } from "../../auth/types/authState.interface";
import { FeedStateInterface } from "../modules/feed/types/feedState.interface";
import { PopularTagsStateInterface } from "../modules/popularTags/types/popularTagState.interface";

export interface AppStateInterface {
  auth: AuthStateInterface;
  feed: FeedStateInterface;
  popularTags: PopularTagsStateInterface;
}
