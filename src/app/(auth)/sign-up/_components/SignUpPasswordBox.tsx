"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "../../../../components/ui/checkbox";
import { FormInput } from "../../../../components/dynamic-inputs";
import { SignUpFooter } from "./SignUpFooter";
import { DynamicCardHeader } from "@/components/card";
import { BackButton } from "@/components/button";
import { FooterButtons } from "@/components/auth";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import { useRouter } from "next/navigation";

const PasswordSchema = Yup.object({
  password: Yup.string().required("хоосон байна"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required(),
});

type PasswordBoxProps = {
  email: string;
  handleBack: () => void;
};
const handleSignup = async (email: string, password: string) => {
  const response = await axios.post("http://localhost:3800/user", {
    email,
    password,
    address: "ub",
    phoneNumber: "99121212",
  });

  return response;
};

export const SignUpPasswordBox = ({ email, handleBack }: PasswordBoxProps) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: PasswordSchema,
    onSubmit: async (values) => {
      console.log(values);
      try {
        setLoading(true);
        const response = await handleSignup(email, values.password);

        router.push("/login");
        console.log("response:", response);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    },
  });

  const { values, handleChange, handleBlur, touched, errors, handleSubmit } =
    formik;

  const passwordInputProps = {
    name: "password",
    placeholder: "password",
    value: values.password,
    onChange: handleChange,
    onBlur: handleBlur,
    inputError: touched.password && errors.password,
    inputErrorMessage: errors.password,
  };

  const confirmPasswordInputProps = {
    name: "confirmPassword",
    placeholder: "confirmPassword",
    value: values.confirmPassword,
    onChange: handleChange,
    onBlur: handleBlur,
    inputError: touched.confirmPassword && errors.confirmPassword,
    inputErrorMessage: errors.password,
  };
  return (
    <Card className="w-[416px] border-none shadow-none gap-6 flex flex-col">
      <BackButton handleClick={handleBack} />

      <DynamicCardHeader
        title="Create a strong password"
        description="Create a strong password with letters, numbers."
      />

      <CardContent className="p-0">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid items-center w-full gap-6">
            <div className="flex flex-col space-y-1.5 gap-4">
              <FormInput {...passwordInputProps} />
              <FormInput {...confirmPasswordInputProps} />

              <div className="flex items-center space-x-2">
                <Checkbox id="showPass" />
                <label
                  htmlFor="showPass"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted-foreground"
                >
                  Show password
                </label>
              </div>
            </div>
          </div>
          <FooterButtons buttonDisable={loading} buttonText="Let`s Go" />
        </form>
      </CardContent>

      <SignUpFooter />
    </Card>
  );
};
