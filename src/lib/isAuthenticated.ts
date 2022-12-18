import { SuperSession } from "@/types/auth";

export const isAuthenticated = async (session: SuperSession | null) => {
  if (
    !session ||
    Math.floor(Date.now()) >=
      (session.user as { expires_at: number }).expires_at * 1000
  ) {
    return false;
  }
  return true;
};
