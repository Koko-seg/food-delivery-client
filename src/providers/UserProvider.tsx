"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type UserType = {
  userId: string;
  email: string;
  role: string;
};

type UserContextType = {
  user: UserType;
};

export const userContext = createContext<UserContextType>(
  {} as UserContextType
);

export default function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<UserType>({} as UserType);

  useEffect(() => {
    // const cartItems = localStorage.getItem("foodCart");
    const accessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NTM0MjU2OTAsImRhdGEiOnsidXNlcklkIjoiNjg4MmVlNGUwM2Q2MDQyYzE2YjE2NTdiIiwicm9sZSI6IlVzZXIiLCJlbWFpbCI6InJhY2hlbEBnbWFpbC5jb20ifSwiaWF0IjoxNzUzNDIyMDkwfQ.b-ZSee_Qe3TALRKyM1mBYPATDMMTw2bnwqugJF4TM2Q";
    const getCurrentUser = async () => {
      const userData = await getCurrentUserByAccessToken(accessToken);
      console.log("userData", userData);
      setUser(userData);
    };
    getCurrentUser();
  }, []);

  const getCurrentUserByAccessToken = async (accessToken: string) => {
    try {
      const response = await fetch(
        " http://localhost:3800/user/get-current-user",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <userContext.Provider value={{ user }}>{children}</userContext.Provider>
  );
}
export const useUser = () => useContext(userContext);
