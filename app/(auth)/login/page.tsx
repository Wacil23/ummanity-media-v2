"use client";

import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Video from "next-video";
import lightVideo from "../../../videos/Cloth_light.mp4";
import darkVideo from "../../../videos/Cloth_dark.mp4";

import { useAuth } from "@/hooks/useAuth";

const Login = () => {
  const { theme } = useTheme();
  const { signIn, error, loading } = useAuth();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    await signIn(formData);
  };

  return (
    <div className="flex items-center justify-between h-screen">
      <div className="flex w-[35%] p-10 rounded-2xl flex-col gap-20 mx-auto">
        <div className="flex items-center justify-center gap-2">
          {isMounted && (
            <Image
              alt="background"
              className="object-cover"
              height={52}
              src={
                theme === "dark"
                  ? "/logo/logo_light.png"
                  : "/logo/logo_dark.png"
              }
              width={52}
            />
          )}
          <p className="text-2xl font-bold">Ummanity records</p>
        </div>
        <div className="flex flex-col gap-12 border border-gray-200 dark:border-gray-800 rounded-2xl p-10 w-full shadow-sm">
          <h1 className="text-xl dark:text-gray-200 light:text-gray-800 font-bold">
            Bienvenue
          </h1>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
            <Button
              className="rounded-2xl"
              disabled={loading}
              isLoading={loading}
              type="submit"
              variant="solid"
            >
              Connexion
            </Button>
          </form>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
      </div>
      {/* <div className="relative">
        <div className="borderImage" />
        <div className="flex flex-col items-center z-10 relative py-3 px-2 rounded-xl shadowCustom  gap-2.5 bg-[#212121]">
          <div className="flex items-end gap-2">
            <Image
              alt="background"
              className="object-cover saturate-0 hover:saturate-100 hover:cursor-pointer hover:scale-125 brightness-75 hover:brightness-100  transition-all duration-300"
              height={28}
              src={"/group.svg"}
              width={28}
            />
          </div>
          <div className="bg-[#595959] rounded-full p-2">
            <BiHome size={18} />
          </div>
          <div className="bg-[#595959] rounded-full p-2">
            <BiHome size={18} />
          </div>
        </div>
      </div> */}

      <div className="w-1/2  p-5 h-full relative">
        {isMounted && (
          <Video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            src={theme === "dark" ? darkVideo : lightVideo}
          />
        )}
      </div>
    </div>
  );
};

export default Login;
