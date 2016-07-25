module.exports = (sequelize, DataType) => {
    const Professionals = sequelize.define("Professionals", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataType.STRING(50),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        codEspecialidade: {
            type: DataType.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        empresaId: {
            type: DataType.INTEGER,
            allowNull: false,
        },
        ativo: {
            type: DataType.BOOLEAN,
            allowNull: false
        }
    }, {
        classMethods: {
            associate: (models) => {
                Professionals.hasMany(models.Sessions);
            }
        }
    });
    return Professionals;
};