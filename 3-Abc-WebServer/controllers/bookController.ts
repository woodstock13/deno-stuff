import { Context } from "https://deno.land/x/abc@v1.0.0-rc10/mod.ts";
import { Book } from "../models/bookModel.ts";
import { v4 } from "https://deno.land/std/uuid/mod.ts";

let books: Book[] = [
  {
    id: "1",
    title: "name of the wind",
    author: "patrick rothfuss",
    pages: 500,
  },
  {
    id: "2",
    title: "the way of kings",
    author: "brandon sanderson",
    pages: 400,
  },
  { id: "3", title: "good omens", author: "terry pratchet", pages: 300 },
];
export const getAllBooks = (ctx: Context) => {
  return ctx.json(books);
};

export const getBook = (ctx: Context) => {
  const { id } = ctx.params;
  const book = books.find(((b: Book) => b.id === id));

  if (book) return ctx.json(book, 200);
  return ctx.string(`No result with id: ${id}`, 404);
};

export const createBook = async (ctx: Context) => {
  const { title, author, pages } = await ctx.body();
  //validate data & types
  //generate an ID
  const id = v4.generate();
  const book = { id, title, author, pages };
  books.push(book);

  return ctx.json(book, 201);
};

export const deleteBook = (ctx: Context) => {
  const { id } = ctx.params;
  const book = books.find(((b: Book) => b.id === id));
  if (book) {
    books = books.filter((b: Book) => b.id !== id);
    return ctx.json(book, 200);
  }
  return ctx.string(`No result with id: ${id}`, 404);
};
