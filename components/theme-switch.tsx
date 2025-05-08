"use client";

import { FC } from "react";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { SwitchProps, useSwitch } from "@heroui/switch";
import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";
import { LuSunMedium, LuMoon } from "react-icons/lu";
import clsx from "clsx";

export interface ThemeSwitchProps {
  className?: string;
  classNames?: SwitchProps["classNames"];
  isAbsolute?: boolean;
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({
  className,
  classNames,
  isAbsolute,
}) => {
  const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();

  const onChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch({
    isSelected: theme === "light" || isSSR,
    "aria-label": `Switch to ${theme === "light" || isSSR ? "dark" : "light"} mode`,
    onChange,
  });

  return (
    <Component
      {...getBaseProps({
        className: clsx(
          "px-px transition-opacity hover:opacity-80 cursor-pointer",
          className,
          classNames?.base,
          isAbsolute &&
            "absolute bottom-5 right-5 bg-gray-200 rounded-full w-10 h-10 p-5"
        ),
      })}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div
        {...getWrapperProps()}
        className={slots.wrapper({
          class: clsx(
            [
              "w-auto h-auto",
              "bg-transparent",
              "rounded-lg",
              "flex items-center justify-center",
              "group-data-[selected=true]:bg-transparent",
              "!text-default-500",
              "pt-px",
              "px-0",
              "mx-0",
              isAbsolute &&
                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
            ],
            classNames?.wrapper
          ),
        })}
      >
        {!isSelected || isSSR ? (
          <LuSunMedium
            className={`size-5 ${isAbsolute ? "size-6 text-black" : ""}`}
          />
        ) : (
          <LuMoon
            className={`size-5 ${isAbsolute ? "size-6 text-black" : ""}`}
          />
        )}
      </div>
    </Component>
  );
};
