module.exports = (sequelize, DataType) => {
    const Companies = sequelize.define("Companies", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataType.STRING(50),
            allowNull: false
        },
        numeroDocumento: {
            type: DataType.STRING(20),
            allowNull: true
        },
        tipoDocumento: {
            type: DataType.STRING(10),
            allowNull: true
        },
        telefone: {
            type: DataType.STRING(15),
            allowNull: false
        },
        email: {
            type: DataType.STRING(50),
            allowNull: true
        },
        ativo: {
            type: DataType.BOOLEAN,
            allowNull: false
        }
    }, {
            classMethods: {
                associate: (models) => {
                    Companies.hasMany(models.Professionals);
                }
            }
        });
    return Companies;
};