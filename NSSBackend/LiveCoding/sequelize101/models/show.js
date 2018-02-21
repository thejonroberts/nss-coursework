'use strict';
module.exports = function(sequelize, DataTypes) {
	var Show = sequelize.define('Show', {
		name: DataTypes.STRING,
		network: DataTypes.STRING,
		genre: DataTypes.STRING,
		in_production: DataTypes.BOOLEAN
	});
	Show.associate = function(models) {
		Show.belongsTo(modles.Director);
	};
	return Show;
};
