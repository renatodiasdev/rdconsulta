module.exports = (sequelize, DataType) => {
    const Visits = sequelize.define("Visits", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        data: {
            type: DataType.DATEONLY,
            allowNull: false
        },
        horaInicio: {
            type: DataType.TIME,
            allowNull: true
        },
        horaFinal: {
            type: DataType.TIME,
            allowNull: true
        },
        codSituacao: {
            type: DataType.INTEGER,
            allowNull: false
        },
        SessionId: {
            type: DataType.INTEGER,
            allowNull: false
        }
    }, {
            classMethods: {
                associate: (models) => {
                    Visits.belongsTo(models.Customers);
                }
            }
        });
    return Visits;
};