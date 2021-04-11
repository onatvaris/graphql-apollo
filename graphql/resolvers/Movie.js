// ilişkisel veriler => Movie type altında ki director ü temsil eder
// director isteği yapılmazsa tetiklenmez
const Movie = {
  director: (source, args, { db }) => {
    // tek bir array döneceği için find methodu ile arattık
    // neden tek bir array dönüyor çünkü her filmin sadece 1 yönetmeni olabilir
    return db.directors.find((director) => director.id === source.directorId);
  },
};
module.exports = Movie;
