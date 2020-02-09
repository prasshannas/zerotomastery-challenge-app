module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING,
  }, {});
  User.associate = (models) => {
    User.hasMany(models.Challenge, {
      as: 'createdChallenges',
      foreignKey: 'userId',
    });

    User.hasMany(models.CheckIn, {
      foreignKey: 'userId',
      as: 'checkIns',
    });

    User.belongsToMany(models.Challenge, {
      through: 'UserChallenge',
    });
  };
  return User;
};
