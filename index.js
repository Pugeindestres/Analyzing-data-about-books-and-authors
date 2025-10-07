export default (data) => {
    const books = data.books;
  
  // 1. Названия всех книг
  const allTitles = books.map(book => book.title).join(', ');
  console.log(`Книги: ${allTitles}`);

  // 2. Вывести книги, выпущенные после 2018 года
  const bookAfter18 = books.filter((books) => books.year > 2018).map((books) => books.title).join(', ');
  console.log(`Вывести книги, выпущенные после 2018 года: ${bookAfter18}`);
  // 3. Вывести рейтинг и название книги, отсортированные по убыванию рейтинга
  const booksPopular = books.map((book) => ({ name: book.title, rating: book.rating })).sort((a, b) => b.rating - a.rating).map((book) => `${book.title}: ${book.rating}`).join(', ');
  console.log(`Рейтинг и название книги: ${booksPopular}`);
  // 4. Вывести книги в жанре "Programming" в формате: {id: X, title: "Y"}
  // 5. Вывести уникальные теги всех книг, отсортированные по алфавиту
  // 6. Вывести топ-3 самых популярных читателей по количеству прочитанных книг
  // 7. Вывести среднее количество страниц по каждому жанру
};

