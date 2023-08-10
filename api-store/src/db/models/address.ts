import type { ModelAttributes, Sequelize } from 'sequelize';
import { DataTypes, Model } from 'sequelize';

const addressSchema: ModelAttributes = {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    street: {
        type: DataTypes.STRING,
        allowNull: false
    },
    department: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING
    },
    apartment: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
};

class Address extends Model {
    static association({ models }: Sequelize): void {
        this.belongsTo(models.User, {
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        });
    }

    static config(sequelize: Sequelize): { sequelize: Sequelize } {
        return {
            sequelize
        };
    }
}

export { addressSchema, Address };
