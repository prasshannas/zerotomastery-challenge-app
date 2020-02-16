module.exports = (sequelize, DataTypes) => {
  const Challenge = sequelize.define(
    'Challenge',
    {
      userId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      frequency: DataTypes.INTEGER,
      duration: DataTypes.INTEGER,
      rules: DataTypes.STRING,
    },
    {}
  );
  Challenge.associate = models => {
    Challenge.belongsTo(models.User, {
      as: 'host',
      foreignKey: 'userId',
    });

    Challenge.hasMany(models.CheckIn, {
      foreignKey: 'userId',
      as: 'checkIns',
    });

    Challenge.belongsToMany(models.User, {
      through: 'UserChallenge',
    });
  };
  return Challenge;
};
