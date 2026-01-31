import React, { useState } from "react";
import { AuthContext } from "./AuthContext";

import type { User } from "../type";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem("user");
    if (!savedUser) return null;
    try {
      return JSON.parse(savedUser);
    } catch {
      return null;
    }
  });

  const login = (username: string, password: string): boolean => {
    const validUser = {
      username: "olamilekan@mail.com",
      password: "Sparkle@2026",
      name: "Olamilekan Akanni",
    };

    if (username === validUser.username && password === validUser.password) {
      localStorage.setItem("user", JSON.stringify(validUser));
      setUser(validUser);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
