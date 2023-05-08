import { Injectable } from '@nestjs/common';
import { CreateUserRoleDto } from './dto/create-user-role.dto';
import { UpdateUserRoleDto } from './dto/update-user-role.dto';
import { UserRole } from './entities/user-role.entity';

@Injectable()
export class UserRolesService {
 async create(createUserRoleDto: CreateUserRoleDto) {
    return await UserRole.create({
      name:createUserRoleDto.name,
      description:createUserRoleDto.description
    })
  }

async  findAll() {
    return await UserRole.findAll()
  }

async  findOne(id: number) {
    return await UserRole.findByPk(id)
  }

async  update(id: number, createUserRoleDto: CreateUserRoleDto) {
    return await UserRole.update({
      name:createUserRoleDto.name,
      description:createUserRoleDto.description
    },{
      where:{
        id:id
      }
    })
  }

async  remove(id: number) {
    return await UserRole.destroy({
      where:{
        id:id
      }
    })
  }
}
