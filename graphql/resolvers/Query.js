const Query = {
  // tüm yönetmenleri getir
  directors: (source, args, { db }) => db.directors,
  // id sini verdiğimiz yönetmeni getir
  // sorugu da girelen değerler(id) args adı altına düşer
  director: (source, args, { db }) => {
    return db.directors.find((director) => director.id === args.id);
  },
  // filmleri getir
  movies: (source, args, { db }) => db.movies,
  // idisini verdiğimiz filmi getir
  movie: (source, args, { db }) => {
    return db.movies.find((movie) => movie.id === args.id);
  },
};

module.exports = Query;
