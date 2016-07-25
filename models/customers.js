module.exports = (sequelize, DataType) => {
    const Customers = sequelize.define("Customers", {
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
        nascimento: {
            type: DataType.DATEONLY,
            allowNull: false   
        },
        ativo: {
            type: DataType.BOOLEAN,
            allowNull: false
        }
    }, {
        classMethods: {
            associate: (models) => {
                Customers.hasMany(models.Sessions);
            }
        }
    });
    return Customers;
};