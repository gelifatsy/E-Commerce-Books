//import * as genresAPI from "./fakeGenreService";

const books = [
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "ኦሮማይ",
    author: "በዓሉ ግርማ",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 4,
    dailyRentalRate: 3.5,
    sales: 100,
    price: 230,
    image:
      "https://i.pinimg.com/564x/5e/97/bc/5e97bc6e45fca47e9ae33830c760198c.jpg",
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "ሰመመን",
    author: "ሲሳይ ንጉሱ",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 6,
    dailyRentalRate: 4.5,
    sales: 100,
    price: 160,
    image:
      "https://i.pinimg.com/564x/7c/7b/61/7c7b61dd89c2e2762b9cf857244ae5ba.jpg",
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181ff",
    title: "The Alchemist",
    aithir: "Paulo Coelho",
    lang: "english",
    genre: {
      _id: "5b21ca3eeb7f6fbccd471820",
      name: "Thriller",
    },
    numberInStock: 4,
    dailyRentalRate: 3.5,
    sales: 152,
    price: 350,
    image:
      "https://i.pinimg.com/564x/46/56/27/465627d4743ffa85692167f98d87b26c.jpg",
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "ሌላሠው",
    aithir: "ምህረት ደበበ",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 0,
    dailyRentalRate: 3.5,
    price: 350,
    sales: 90,
    image:
      "https://i.pinimg.com/236x/ef/69/6b/ef696b3b52e4568cb5653112d9e23c30.jpg",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821g",
    title: "አልወለድም",
    author: "አቤ ጉበኛ",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 0,
    dailyRentalRate: 3.5,
    price: 120,
    image:
      "https://i.pinimg.com/236x/2e/d9/1e/2ed91ebcc9f1ab189edf6027551e6e74.jpg",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821h",
    title: "ከአሜን ባሻገር",
    author: "ዕውቀቱ ስዩም",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    price: 200,
    image:
      "https://i.pinimg.com/236x/65/de/ef/65deef1ceaa6d867105fd32b3ae206e5.jpg",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821i",
    title: "ቆንጆዎቹ",
    author: "ሠርቅ ዳንኤል",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    image:
      "https://i.pinimg.com/236x/2e/d9/1e/2ed91ebcc9f1ab189edf6027551e6e74.jpg",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "ከአድማስ ባሻገር",
    author: "በአሉ ግርማ",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 6,
    rating: 5,
    price: 172,
    publishDate: "2018-01-03T19:04:28.809Z",
    image:
      "https://i.pinimg.com/564x/54/cb/ce/54cbceeff3e79bce9f9845c9e7ad899c.jpg",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816d",
    title: "ፍቅር እስከ መቃብር",
    author: "ሀዲስ አለማየሁ",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 5,
    rating: 5,
    image:
      "https://i.pinimg.com/564x/45/57/80/4557803747b1a3571dba27df4e7e2567.jpg",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "የተቆለፈበት ቁልፍ",
    author: "ምህረት ደበበ",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 8,
    rating: 4.5,
    sales: 160,
    price: 350,
    image:
      "https://i.pinimg.com/564x/cf/f1/70/cff170c540d626e60c3170f9a5dfef21.jpg",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "እመጓ",
    author: "ዓለማየሁ ዋሴ",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
    rating: 4.5,
    price: 250,
    image:
      "https://i.pinimg.com/564x/33/a1/c3/33a1c37f242c5e8959574aadb3254fce.jpg",
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181d",
    title: "ትኩሳት",
    author: "ስብሐት ገብረ እግዚአብሔር",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    price: 200,
    image:
      "https://i.pinimg.com/564x/aa/cc/22/aacc223f1385ff3c5ddd2a73d6fa7641.jpg",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471815c",
    title: "ከአድማስ ባሻገር",
    author: "በአሉ ግርማ",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 6,
    rating: 5,
    price: 172,
    publishDate: "2018-01-03T19:04:28.809Z",
    image:
      "https://i.pinimg.com/564x/54/cb/ce/54cbceeff3e79bce9f9845c9e7ad899c.jpg",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "ፍቅር እስከ መቃብር",
    author: "ሀዲስ አለማየሁ",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 5,
    rating: 5,
    image:
      "https://i.pinimg.com/564x/45/57/80/4557803747b1a3571dba27df4e7e2567.jpg",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817b",
    title: "የተቆለፈበት ቁልፍ",
    author: "ምህረት ደበበ",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 8,
    rating: 4.5,
    price: 350,
    image:
      "https://i.pinimg.com/564x/cf/f1/70/cff170c540d626e60c3170f9a5dfef21.jpg",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819b",
    title: "እመጓ",
    author: "ዓለማየሁ ዋሴ",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
    rating: 4.5,
    price: 250,
    image:
      "https://i.pinimg.com/564x/33/a1/c3/33a1c37f242c5e8959574aadb3254fce.jpg",
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "ትኩሳት",
    author: "ስብሐት ገብረ እግዚአብሔር",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    price: 200,
    image:
      "https://i.pinimg.com/564x/aa/cc/22/aacc223f1385ff3c5ddd2a73d6fa7641.jpg",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821j",
    title: "እሳት ወይ አበባ",
    author: "ፀጋዬ ገብረ መድኅን",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    image:
      "https://i.pinimg.com/236x/05/45/32/054532b9c8fe2412848c73b96e80293a.jpg",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821k",
    title: "ደራሲው",
    author: "በዓሉ ግርማ",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    image:
      "https://i.pinimg.com/236x/d1/61/8d/d1618d6e7b1865555ae13b9799028d3c.jpg",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821l",
    title: "ከአሜን ባሻገር",
    author: "ዕውቀቱ ስዩም",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 7,
    sales: 140,
    dailyRentalRate: 3.5,
    image:
      "https://i.pinimg.com/236x/65/de/ef/65deef1ceaa6d867105fd32b3ae206e5.jpg",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821m",
    title: "ግራጫ ቃጭሎች",
    author: "አዳም ረታ",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    image:
      "https://i.pinimg.com/236x/83/96/b7/8396b7d479586327ca295bc5ad5db7c7.jpg",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821n",
    title: "አራቱ ኃያላን",
    author: "ዳንኤል ክብረት",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    image:
      "https://i.pinimg.com/236x/d8/32/38/d8323856b7c4fe85595ec11bf53c1396.jpg",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821o",
    title: "ልጅነት",
    author: "ዘነበ ወላ",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    image:
      "https://i.pinimg.com/236x/9f/c8/75/9fc875beb73c6f4e78d22d1ab577168f.jpg",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821p",
    title: "እንቅልፍ እና ዕድሜ",
    author: "በዕውቀቱ ስዩም",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    image:
      "https://i.pinimg.com/236x/60/0e/17/600e179a22ae16a059b19bc07c056325.jpg",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821q",
    title: "የልምዣት",
    author: "ሀዲስ ዓለማየሁ",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    image:
      "https://i.pinimg.com/236x/d7/41/79/d7417981b4cd4c4d0fdba27f36f2c1b6.jpg",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821r",
    title: "የቀይ ኮከብ ጥሪ",
    author: "በዓሉ ግርማ",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    image:
      "https://i.pinimg.com/236x/56/11/7a/56117ad14af1ed6f11b72eee11d2b8c4.jpg",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821s",
    title: "መግባት እና መውጣት",
    author: "በዕውቀቱ ስዩም",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    image:
      "https://i.pinimg.com/236x/2e/d9/1e/2ed91ebcc9f1ab189edf6027551e6e74.jpg",
  },
];

export function getBooks() {
  return books;
}
