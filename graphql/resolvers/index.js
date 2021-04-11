// tipler yani şemalar için veri döndürme işlevlerinin yapıldı yer.

// resolvers
const Query = require("./Query");
const Director = require("./Director");
const Movie = require("./Movie");

const Mutation = require("./mutation/index");
module.exports = {
  Query,
  Mutation,
  Movie,
  Director,
};
