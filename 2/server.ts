import { serve } from "https://deno.land/std/http/server.ts";

const server = serve({ port: 3000 });
console.log("http://localhost:3000/");

for await (const req of server) {
  const myurl = req.url;
  req.respond({ body: `Hello anissa <3, you are visiting: ${myurl}` });
}
