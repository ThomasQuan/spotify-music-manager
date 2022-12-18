import { signIn } from "next-auth/react";
import * as React from "react";

export default function LoginPage() {
  const handleLogin = () => {
    signIn("spotify", { callbackUrl: "http://localhost:3000" });
  };
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-20">
      <button
        className="bg-primary flex rounded-full px-12 py-2 text-lg uppercase tracking-widest hover:bg-opacity-80 focus:outline-none"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}
