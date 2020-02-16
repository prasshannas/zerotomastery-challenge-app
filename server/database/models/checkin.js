module.exports = (sequelize, DataTypes) => {
  const CheckIn = sequelize.define(
    'CheckIn',
    {
      userId: DataTypes.INTEGER,
      challengeId: DataTypes.INTEGER,
      date: DataTypes.DATE,
      checkIn: DataTypes.BOOLEAN,
    },
    {}
  );
  CheckIn.associate = models => {
    CheckIn.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'participant',
    });

    CheckIn.belongsTo(models.Challenge, {
      foreignKey: 'challengeId',
      as: 'challenge',
    });
  };
  return CheckIn;
};
