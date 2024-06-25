"use client"; // Ajoutez cette ligne au début du fichier

import { useState } from "react";
import { Input } from "@nextui-org/input";
import { button as buttonStyles } from "@nextui-org/theme";
import "../../styles/globals.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loginStatus, setLoginStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoginStatus("loading");

    try {
      const response = await fetch("http://192.168.1.101:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({ username, password }), // Assurez-vous que username et password sont corrects ici
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      }

      // Login successful
      setLoginStatus("success");
      console.log("Login successful");
    } catch (err) {
      console.error("Login error:", err);
      setLoginStatus("error");
      if (err instanceof Error) {
        setError(err.message || "An error occurred. Please try again.");
      } else {
        setError("An unknown error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-theme-neutral-background">
      <div className="p-8">
        <div className="flex justify-center flex-col items-center text-black mb-6">
          <div>
            <img src="/images/logo_typographique_black.svg" alt="Description de l'image" width={"200rem"} height={"200rem"} />
          </div>
          <div className="flex flex-col items-center">
            <p>Se connecter</p>
            <img className="ml-10" src="/images/underline_title.svg" alt="Description de l'image" width={"80rem"} height={"50rem"} />
          </div>
        </div>

        {error && <p className="text-red-500 mb-4">{error}</p>}
        {loginStatus === "success" && <p className="text-green-500 mb-4">Login successful!</p>}
        {loginStatus === "error" && <p className="text-red-500 mb-4">An error occurred. Please try again.</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Input
              id="username"
              label="Pseudo"
              type="text"
              className="themed-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <Input
              id="password"
              label="Mot de passe"
              type="password"
              className="themed-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className={`${buttonStyles()} bg-theme-neutral text-theme-neutral-invert gap-2 rounded-full p-2 pl-10 pr-10 text-sm font-bold`}
          >
            {loginStatus === "loading" ? "Se connecte à..." : "Se connecter"}
            <span className="memicon-arrow" />{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
