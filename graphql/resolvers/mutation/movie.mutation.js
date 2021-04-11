module.exports = {
  addMovie: (source, args, { db }) => {
    console.log(`args`, args);
    const movie = {
      id: Math.floor(Math.random() * 100),
      ...args,
    };

    db.movies.push(movie);

    return movie;
  },
};
