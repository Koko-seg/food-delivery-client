"use client";

import { FooterButtons } from "@/components/auth";
import { DynamicCardHeader } from "@/components/card";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { LoginFooter } from "./LoginFooter";
import axios from "axios";
import { Input } from "@/components/ui/input";

export const Login = () => {
  const { push } = useRouter();
  const login = async (email: string, password: string) => {
    const response = await axios.post<{
      success: boolean;
      accessToken: string;
    }>("/ http://localhost:3800/user/login", {
      email: "test@gmail.com",
      password: "123",
    });
    localStorage.setItem("token", response.data.accessToken);
    push("/");
  };

  return (
    <Card className="w-[416px] border-none shadow-none gap-6 flex flex-col">
      <DynamicCardHeader
        title="Log in"
        description="Log in to enjoy your favorite dishes."
      />

      <CardContent className="p-0">
        <div className="flex flex-col gap-6">
          <div className="grid items-start w-full gap-4">
            <Input />
            <Input />
            {/* <FormInput />
            <FormInput /> */}
            <Button variant="link" className="p-0 underline w-fit">
              Forgot password ?
            </Button>
          </div>
          <FooterButtons buttonText="Let`s Go" />
        </div>
      </CardContent>
      <LoginFooter />
    </Card>
  );
};
