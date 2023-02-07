/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { start } from "$fresh/server.ts";
import manifest from "@/fresh.gen.ts";
import bootstrap from "@/plugins/bootstrap/plugin.js";

await start(manifest, {
  port: 8001,
  plugins: [
    bootstrap(),
  ],
});
