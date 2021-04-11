module.exports = {
  addDirector: (source, args, { db }) => {
    const director = {
      id: Math.floor(Math.random() * 100),
      ...args,
    };

    db.directors.push(director);
    return director;
  },
};
