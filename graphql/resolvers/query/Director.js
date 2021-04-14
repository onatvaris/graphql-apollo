// Director altında ki movies i temsil eder
// Director sorgusu altında movies istendiğinde tetiklenir
const Director = {
  movies: (source, args, { db }) => {
    // bir array yani bir liste döneceği için filter ile arattık
    // neden bir liste dönüyor çünkü bir yönetmenin 1 den fazla filmi olabilir
    return db.movies.filter((movie) => movie.directorId === source.id);
  },
};
module.exports = Director;
