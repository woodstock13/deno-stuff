//reading part script
// const decoder = new TextDecoder(`utf-8`);
// const data = await Deno.readFile("readme.txt");
// console.log(decoder.decode(data));

//same as above
const data = await Deno.readTextFile("readme.txt");

//writing files
const encoder = new TextEncoder();
const text = encoder.encode("hello again.. deno !");

await Deno.writeFile(`readme.txt`, text);
//same as above
await Deno.writeTextFile(`readme.txt`, `coucou`);

// rename & removing files :

await Deno.rename("readme.txt", "deletingme.txt");
await Deno.remove("deletingme.txt");
