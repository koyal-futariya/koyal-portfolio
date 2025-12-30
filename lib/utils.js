import { clsx } from "clsx";
// lib/utils.js
import { twMerge } from "tailwind-merge";

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};