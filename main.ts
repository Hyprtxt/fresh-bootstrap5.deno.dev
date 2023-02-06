/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";

import css from "@/plugins/css.js";
import sass from "@/plugins/sass.js";

await start(manifest, {
  port: 8001,
  //   plugins: [css(), sass()],
  plugins: [sass()],
});
