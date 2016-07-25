module.exports = (sequelize, DataType) => {
    const Sessions = sequelize.define("Sessions", {
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
            allowNull: false
        },
        horaFinal: {
            type: DataType.TIME,
            allowNull: false
        },
        maximoAtende: {
            type: DataType.INTEGER,
            allowNull: false
        },
        empresaId: {
            type: DataType.INTEGER,
            allowNull: false
        },
        profissionalId: {
            type: DataType.INTEGER,
            allowNull: false
        },
        codStatus: {
            type: DataType.INTEGER,
            allowNull: false
        }
    }, {
            classMethods: {
                associate: (models) => {
                    Sessions.belongsTo(models.Professionals);
                }
            }
        });
    return Sessions;
};