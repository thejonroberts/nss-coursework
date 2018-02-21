'use strict';
module.exports = (sequelize, DataTypes) => {
	var Director = sequelize.define('Director', {
		name: DataTypes.STRING,
		gender: DataTypes.STRING,
		birth_year: DataTypes.INTEGER,
		twitter_handle: DataTypes.STRING
	});
	Director.associate = function(models) {
		// associations can be defined here
	};
	return Director;
};
