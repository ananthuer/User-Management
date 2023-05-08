import { Injectable } from '@nestjs/common';
import { CreateUserTypeDto } from './dto/create-user-type.dto';
import { UpdateUserTypeDto } from './dto/update-user-type.dto';
import { UserType } from './entities/user-type.entity';
import sequelize from 'sequelize';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserTypesService {
 async create(createUserTypeDto: CreateUserTypeDto) {

  const saltRounds = 10;
    

  const hash = await bcrypt.hash(createUserTypeDto.password, saltRounds);
    return await UserType.create({
      username:createUserTypeDto.username,
      description:createUserTypeDto.description,
      is_Admin:createUserTypeDto.is_Admin,
      userRoleId:createUserTypeDto.userRoleId,
      password:hash,
      email:createUserTypeDto.email
    })
  }

 async findAll() {
    return await UserType.findAll()
  }

async  findOne(id: number) {
    return await UserType.findByPk(id)
  }

async  update(id: number, updateUserTypeDto: UpdateUserTypeDto) {
    return await UserType.update({
      username:updateUserTypeDto.username,
      description:updateUserTypeDto.description,
      is_Admin:updateUserTypeDto.is_Admin,
      userRoleId:updateUserTypeDto.userRoleId
    },{
      where:{
        id:id
      }
    })
  }

async  remove(id: number) {
    return await UserType.destroy({
      where:{
        id:id
      }
    })
  }

  async addImage(id: number, filename: any){

    return await UserType.update({
      image:filename
    },{
      where:{
        id:id
      }
    })

  }

  async fetchUserByEmailOrPhone(username: string) {
    return await UserType.findOne({

    
      where: {
        
        //use Or
        [sequelize.Op.or] : [
          {
            email: username
          },
         
        ]
        
      }
    })
  }
}
