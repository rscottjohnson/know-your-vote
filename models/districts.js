module.exports = function(sequelize, DataTypes) {
  var Districts = sequelize.define("Districts", {
    DISTRICTID: DataTypes.STRING,
    STFIPS: DataTypes.STRING,
    CDFIPS: DataTypes.STRING,
    STATE_ABBR: DataTypes.STRING,
    NAME: DataTypes.STRING,
    LAST_NAME: DataTypes.STRING,
    PARTY: DataTypes.STRING,
    yayCount: DataTypes.INTEGER,
    nayCount: DataTypes.INTEGER,
    long: DataTypes.FLOAT(10, 8),
    lat: DataTypes.FLOAT(10, 8)
  });
  return Districts;
};
