export interface CurrentUserInterface {
  id: number;
  email: string;
  createdAt: string;
  updatedAt: string;
  username: string;
  bio: string | null; // we can also write bio ?: string;
  image: string | null;
  token: string;
}
