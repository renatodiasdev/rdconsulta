module.exports = (sequelize, DataType) => {
    const Lista = sequelize.define("Lista", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ordem: {
            type: DataType.INTEGER,
            allowNull: false
        },
        situacao: {
            type: DataType.STRING,
            allowNull: false,
            validade: {
                notEmpty: true
            }
        },
        nome: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    }, {
            classMethods: {
                associate: (models) => {
                    Lista.belongsTo(models.Users);
                }
            }
        }
    );
    return Lista;
};