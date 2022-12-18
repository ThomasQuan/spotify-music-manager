import { DefaultSession } from "next-auth";

export interface User {
  id?: string;
  name?: string;
  email?: string;
  picture?: string;
  image?: string;
  accessToken?: string;
}

export interface SuperSession extends Omit<DefaultSession, "user"> {
  user?: User;
  expires: string;
}
