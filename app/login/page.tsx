"use client"; // Ajoutez cette ligne au début du fichier
import { useState } from "react";
import { Input } from '@nextui-org/input';
import { Link } from '@nextui-org/link';
import '../../styles/globals.css';


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
          "Accept": "application/json"
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
  
    } catch (error) {
      console.error("Login error:", error);
      setLoginStatus("error");
      setError(error.message || "An error occurred. Please try again.");
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-theme-neutral-background">
      <div className=" p-8">
      <div>
        <img src="/images/logo_typographique_black.svg" alt="Description de l'image" width={"200rem"} height={"200rem"}/>
      </div>
      <div>
        <div className="flex justify-center flex-col items-center text-black">
          <div> 
            <p> Se connecter</p>
          </div>
          <div>
            <img className="ml-10"src="/images/underline_title.svg" alt="Description de l'image" width={"80rem"} height={"50rem"}/>
          </div>
        </div>
        <div>
      </div>
        
      </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {loginStatus === "success" && (
          <p className="text-green-500 mb-4">Login successful!</p>
        )}
        {loginStatus === "error" && (
          <p className="text-red-500 mb-4">An error occurred. Please try again.</p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Input
              id="username"
              label="Pseudo"
              type="text"
              className={'themed-input'}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            {/* <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label> */}
            <Input
              id="password"
              label="Mot de passe"
              type="password"
              className={'themed-input'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {/* <Link
            type="submit"
            isExternal
          className={`${buttonStyles()} border-theme-neutral text-theme-neutral h-14 w-14 min-w-14 gap-2 rounded-full border bg-transparent p-2 text-sm font-bold`}
          >
            {loginStatus === "loading" ? "Logging in..." : "Login"}
          <Link/> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
