import Cart from "../service/Cart";
import Book from "../domain/Book";
import MusicAlbum from "../domain/MusicAlbum";
import Movie from "../domain/Movie";

test("new card should be empty", () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0);
});

test("добавление объектов в корзину", () => {
  const cart = new Cart();

  cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
  cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));

  cart.add(
    new Movie(
      777,
      "Мстители",
      "The Avengers",
      true,
      2012,
      "США",
      "«Anengers Assemble!»",
      ["фантастика", "боевик", "фентези", "приключения"],
      "135 мин./02:17",
      1100
    )
  );

  expect(cart.items).toEqual([
    {
      author: "Leo Tolstoy",
      id: 1001,
      name: "War and Piece",
      pages: 1225,
      price: 2000,
    },
    {
      author: "Linkin Park",
      id: 1008,
      name: "Meteora",
      price: 900,
    },
    {
      country: "США",
      genre: ["фантастика", "боевик", "фентези", "приключения"],
      id: 777,
      imax: true,
      name: "Мстители",
      nameEng: "The Avengers",
      price: 1100,
      slogan: "«Anengers Assemble!»",
      time: "135 мин./02:17",
      year: 2012,
    },
  ]);
});

test("расчет суммарной стоимости (без учёта скидки)", () => {
  const cart = new Cart();

  cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
  cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));

  cart.add(
    new Movie(
      777,
      "Мстители",
      "The Avengers",
      true,
      2012,
      "США",
      "«Anengers Assemble!»",
      ["фантастика", "боевик", "фентези", "приключения"],
      "135 мин./02:17",
      1100
    )
  );

  expect(cart.getSum()).toBe(4000);
});

test("расчет суммарной стоимости (с учётом скидки)", () => {
  const cart = new Cart();

  cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
  cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));

  cart.add(
    new Movie(
      777,
      "Мстители",
      "The Avengers",
      true,
      2012,
      "США",
      "«Anengers Assemble!»",
      ["фантастика", "боевик", "фентези", "приключения"],
      "135 мин./02:17",
      1100
    )
  );

  expect(cart.getDiscountedSum(15)).toBe(3400);
});

test("добавление объектов в корзину", () => {
  const cart = new Cart();

  cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
  cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));

  cart.add(
    new Movie(
      777,
      "Мстители",
      "The Avengers",
      true,
      2012,
      "США",
      "«Anengers Assemble!»",
      ["фантастика", "боевик", "фентези", "приключения"],
      "135 мин./02:17",
      1100
    )
  );

  cart.remove(1001);

  expect(cart.items).toEqual([
    {
      author: "Linkin Park",
      id: 1008,
      name: "Meteora",
      price: 900,
    },
    {
      country: "США",
      genre: ["фантастика", "боевик", "фентези", "приключения"],
      id: 777,
      imax: true,
      name: "Мстители",
      nameEng: "The Avengers",
      price: 1100,
      slogan: "«Anengers Assemble!»",
      time: "135 мин./02:17",
      year: 2012,
    },
  ]);
});
