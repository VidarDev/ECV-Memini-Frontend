"use client"; // Ajoutez cette ligne au début du fichier

import { useState } from "react";
import { Input } from "@nextui-org/input";
import { button as buttonStyles } from "@nextui-org/theme";
import "../../styles/globals.css";

const Signup = () => {
  const [mail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [identity, setGender] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [step, setStep] = useState(1);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (step < 4) {
      handleContinue();
      return;
    }

    const birthDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;

    try {
      const response = await fetch("http://192.168.1.101:8080/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({ mail, password, username, birthDate, identity }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Signup failed");
      }

      // Signup successful
      console.log("Signup successful");
    } catch (err) {
      console.error("Signup error:", err);
      setError(err instanceof Error ? err.message : "An unknown error occurred. Please try again.");
    }
  };

  const handleContinue = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

  return (
    <div className="flex items-center justify-center min-h-screen bg-theme-neutral-background">
      <div className="p-8">
        <div className="flex justify-center flex-col items-center text-black mb-6">
          <div>
            <img src="/images/logo_typographique_black.svg" alt="Logo" width={"200rem"} height={"200rem"} />
          </div>
          <div className="flex flex-col items-center">
            <p>Inscription</p>
            <img className="ml-10" src="/images/underline_title.svg" alt="Underline" width={"80rem"} height={"50rem"} />
          </div>
        </div>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="mb-4">
              <Input
                id="mail"
                label="Email"
                type="email"
                className="themed-input text-black"
                value={mail}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                id="password"
                label="Mot de passe"
                type="password"
                className="themed-input text-black"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          )}

          {step === 2 && (
            <div className="mb-4">
              <Input
                id="username"
                label="Pseudo"
                type="text"
                className="themed-input text-black"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          )}

          {step === 3 && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Date de naissance</label>
              <div className="flex space-x-2">
                <select
                  id="day"
                  className="themed-input text-black"
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                  required
                >
                  <option value="">Jour</option>
                  {days.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
                <select
                  id="month"
                  className="themed-input text-black"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  required
                >
                  <option value="">Mois</option>
                  {months.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
                <select
                  id="year"
                  className="themed-input text-black"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  required
                >
                  <option value="">Année</option>
                  {years.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="mb-4">
              <p>Genre :</p>
              <div>
                <label>
                  <input
                    type="radio"
                    name="identity"
                    value="HE"
                    onChange={(e) => setGender(e.target.value)}
                    className="mr-2"
                    required
                  />
                  Il
                </label>
                <label className="ml-4">
                  <input
                    type="radio"
                    name="identity"
                    value="SHE"
                    onChange={(e) => setGender(e.target.value)}
                    className="mr-2"
                    required
                  />
                  Elle
                </label>
                <label className="ml-4">
                  <input
                    type="radio"
                    name="identity"
                    value="THEY"
                    onChange={(e) => setGender(e.target.value)}
                    className="mr-2"
                    required
                  />
                  Iel
                </label>
              </div>
            </div>
          )}

          <button
            type={step < 4 ? "button" : "submit"}
            className={`${buttonStyles()} bg-theme-neutral text-theme-neutral-invert gap-2 rounded-full p-2 pl-10 pr-10 text-sm font-bold`}
            onClick={step < 4 ? handleContinue : undefined}
          >
            {step < 4 ? "Continuer" : "Enregistrer"}
            <span className="memicon-arrow" />{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
