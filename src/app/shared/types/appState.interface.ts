import { ArticleStateInterface } from "src/app/article/types/articleState.interface";
import { CreateArticleStateInterface } from "src/app/createArticle/store/types/createArticleState.interface";
import { EditArticleStateInterface } from "src/app/editArticle/store/types/updateArticleState.interface";
import { SettingsStateInterface } from "src/app/settings/types/settingsState.interface";
import { UserProfileStateInterface } from "src/app/userProfile/types/userProfileState.interface";
import { AuthStateInterface } from "../../auth/types/authState.interface";
import { FeedStateInterface } from "../modules/feed/types/feedState.interface";
import { PopularTagsStateInterface } from "../modules/popularTags/types/popularTagState.interface";

export interface AppStateInterface {
  auth: AuthStateInterface;
  feed: FeedStateInterface;
  popularTags: PopularTagsStateInterface;
  article: ArticleStateInterface;
  createArticle: CreateArticleStateInterface;
  editArticle: EditArticleStateInterface;
  settings: SettingsStateInterface;
  userProfile: UserProfileStateInterface;
}
