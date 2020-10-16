import Cart from "./service/Cart";
import Book from "./domain/Book";
import MusicAlbum from "./domain/MusicAlbum";
import Movie from "./domain/Movie";

const cart = new Cart();
console.log(cart.items);

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

console.log(cart.items);

console.log(cart.getSum());
console.log(cart.getDiscountedSum(15));
cart.remove(1001);

console.log(cart.items);