import { v4 } from "https://deno.land/std/uuid/mod.ts";

// Generate a v4 uuid
const myUUID = v4.generate();
console.log("myUUID -->", myUUID);

// fs eample :
import { readJson, writeJson } from "https://deno.land/std/fs/mod.ts";

const jsonObj = await readJson("jsonExample.json");
console.log(jsonObj);

const jsonObj2 = [
  { title: "woauh1", description: "incredible" },
  { title: "woauh2", description: "incredible2" },
];
await writeJson("secondFile.json", jsonObj2, { spaces: 2 });
console.log("secondFile.json created with success !");
