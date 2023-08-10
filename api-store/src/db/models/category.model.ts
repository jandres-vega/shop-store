import type { Sequelize, ModelAttributes } from 'sequelize';
import { DataTypes, Model } from 'sequelize';

const categorySchema: ModelAttributes = {
   id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
   },
   name_category: {
      type: DataTypes.STRING,
      allowNull: false
   },
   image_category: {
      type: DataTypes.STRING,
      allowNull: false
   },
   description: {
      type: DataTypes.STRING
   }
};

class Category extends Model {
   static association({ models }: Sequelize): void {
      this.hasMany(models.SubCategory, {
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

export { categorySchema, Category };
