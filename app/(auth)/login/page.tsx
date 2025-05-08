"use client";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const Login = () => {
  const { theme } = useTheme();

  return (
    <div className="flex  items-center justify-between h-screen">
      <div className="flex w-[35%] p-10 rounded-2xl flex-col gap-20 mx-auto">
        <div className="flex items-center justify-center gap-2">
          <Image
            alt="background"
            className="object-cover"
            height={52}
            src={
              theme === "dark" ? "/logo/logo_light.png" : "/logo/logo_dark.png"
            }
            width={52}
          />
          <p className="text-2xl font-bold">Ummanity records</p>
        </div>
        <div className="flex flex-col gap-12 border border-gray-200 dark:border-gray-800 rounded-2xl p-10 w-full shadow-sm">
          <h1 className="text-xl dark:text-gray-200 light:text-gray-800 font-bold">
            Bienvenue
          </h1>
          <div className="flex flex-col gap-4">
            <Input
              className="rounded-2xl"
              label="Email"
              labelPlacement="outside"
              name="email"
              placeholder="Email"
              type="email"
            />
            <Input
              className="rounded-2xl"
              label="Password"
              labelPlacement="outside"
              name="password"
              placeholder="Password"
              type="password"
            />
            <Button className="rounded-2xl" variant="solid">
              Login
            </Button>
          </div>
        </div>
      </div>
      <div className="w-1/2  p-5 h-full relative">
        <video
          autoPlay
          loop
          muted
          className="w-full as rounded-2xl h-full object-cover"
          preload="auto"
          src={
            theme === "dark"
              ? "/videos/Cloth/Cloth_dark.mp4"
              : "/videos/Cloth/Cloth_light.mp4"
          }
        />
      </div>
    </div>
  );
};

export default Login;
