import {
  Application,
  Context,
} from "https://deno.land/x/abc@v1.0.0-rc10/mod.ts";
import {
  getAllBooks,
  createBook,
  deleteBook,
  getBook,
} from "./controllers/bookController.ts";

const app = new Application();

//static files
app.static("/", "./public");

//routes
app.get("/", async (ctx: Context) => {
  await ctx.file("./public/index.html"); //context permet de renvoyer des infos au client
});

app
  .get("/books", getAllBooks)
  .get("/books/:id", getBook)
  .post("/books", createBook)
  .delete("/books/:id", deleteBook);

//listen to a port
app.start({ port: 3000 });
