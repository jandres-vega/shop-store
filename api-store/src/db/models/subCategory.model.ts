import type { Sequelize, ModelAttributes } from 'sequelize';
import { DataTypes, Model } from 'sequelize';

const subCategorySchema: ModelAttributes = {
   id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
   },
   name_subCategory: {
      type: DataTypes.STRING,
      allowNull: false
   },
   image_SubCategory: {
      type: DataTypes.STRING,
      allowNull: false
   }
};

class SubCategory extends Model {
   static association({ models }: Sequelize): void {
      this.hasMany(models.Product, {
         onDelete: 'CASCADE',
         onUpdate: 'CASCADE'
      });
      this.belongsTo(models.Category, {
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

export { SubCategory, subCategorySchema };
