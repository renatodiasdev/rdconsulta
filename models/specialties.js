module.exports = (sequelize, DataType) => {
    const Specialties = sequelize.define("Specialties", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        descricao: {
            type: DataType.STRING(20),
            allowNull: false
        }
    }, {
            classMethods: {
                associate: (models) => {
                    Specialties.hasMany(models.Professionals);
                }
            }
        });
    return Specialties;
};