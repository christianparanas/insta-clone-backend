
module.exports = (sequelize, DataTypes) => {
	const Users = sequelize.define("Users", {
		id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
		username: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	})

	return Users
}