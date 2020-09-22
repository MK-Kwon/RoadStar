module.exports = function(sequelize, DataTypes) {
    const Favorites = sequelize.define("Favorite", {
        category: DataTypes.STRING,
        make: DataTypes.STRING,
        model: DataTypes.STRING,
        year: DataTypes.INTEGER,
        plant: DataTypes.STRING,
        series: DataTypes.STRING
    });
    return Favorites;
};



