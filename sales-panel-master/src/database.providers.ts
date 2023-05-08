import { Sequelize } from 'sequelize-typescript';
import { UserRole } from './user-roles/entities/user-role.entity';
import { UserType } from './user-types/entities/user-type.entity';
import { PostCreation } from './post-creation/entities/post-creation.entity';



export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: "1316",
        database: "usermanagement",
        pool:{
           max: 5,
           min: 0,
           acquire: 30000,
         idle: 10000
        },
        
        
      });
      sequelize.addModels([UserRole, UserType,PostCreation]);
      await sequelize.sync();
      return sequelize;
    },
  },
]; 