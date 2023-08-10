import type { Sequelize, ModelAttributes } from 'sequelize';
import { DataTypes, Model } from 'sequelize';

const userSchema: ModelAttributes = {
   id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
   },
   first_name: {
      type: DataTypes.STRING,
      allowNull: false
   },
   last_mame: {
      type: DataTypes.STRING,
      allowNull: false
   },
   email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
   },
   cellphone: {
      type: DataTypes.BIGINT,
      allowNull: false
   },
   userName: {
      type: DataTypes.STRING,
      allowNull: false
   },
   isAdmin: {
      type: DataTypes.STRING,
      defaultValue: false
   },
   picture: {
      type: DataTypes.STRING,
      allowNull: true
   }
};

class User extends Model {
   static association({ models }: Sequelize): void {
      this.belongsToMany(models.Product, {
         through: 'Favourites',
         onDelete: 'CASCADE',
         onUpdate: 'CASCADE'
      });
      this.hasMany(models.Address, {
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

export { userSchema, User };
