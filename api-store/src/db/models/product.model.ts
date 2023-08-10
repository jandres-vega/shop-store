import type { Sequelize, ModelAttributes } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
const productSchema: ModelAttributes = {
   id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
   },
   name_product: {
      type: DataTypes.STRING,
      allowNull: false
   },
   description: {
      type: DataTypes.TEXT,
      allowNull: false
   },
   image: {
      type: DataTypes.STRING,
      allowNull: false
   },
   stock: {
      type: DataTypes.INTEGER,
      allowNull: false
   },
   price: {
      type: DataTypes.DECIMAL,
      allowNull: false
   },
   freeShopping: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
   }
};

class Product extends Model {
   static association({ models }: Sequelize): void {
      this.belongsTo(models.SubCategory, {
         onDelete: 'CASCADE',
         onUpdate: 'CASCADE'
      });
      this.belongsToMany(models.User, {
         through: 'Favourites',
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

export { productSchema, Product };
