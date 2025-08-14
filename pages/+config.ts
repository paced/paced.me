import vikeReact from "vike-react/config";
import type { Config } from "vike/types";

export const config = {
  extends: vikeReact,
  prerender: true,
  ssr: false,
} satisfies Config;
