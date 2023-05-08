import { Injectable } from '@nestjs/common';
import { CreatePostCreationDto } from './dto/create-post-creation.dto';
import { UpdatePostCreationDto } from './dto/update-post-creation.dto';
import { PostCreation } from './entities/post-creation.entity';
import { UserType } from 'src/user-types/entities/user-type.entity';

@Injectable()
export class PostCreationService {
 async create(id:number ,createPostCreationDto: CreatePostCreationDto) {

  let user = await UserType.findByPk(id)

  let userRole = user.userRoleId

  if(userRole == "1"){
    return await PostCreation.create({
      name:createPostCreationDto.name,
      description:createPostCreationDto.description
    })
  }else {
    return "Only admin can post"
  }
  
  }

 async findAll() {
    return await PostCreation.findAll()
  }

async  findOne(id: number) {
    return await PostCreation.findByPk(id)
  }

 async update(id: number, updatePostCreationDto: UpdatePostCreationDto, userId: number) {
  let user = await UserType.findByPk(userId)

  let userRole = user.userRoleId

  if(userRole == "1"){
    return await PostCreation.update({
      name:updatePostCreationDto.name,
      description:updatePostCreationDto.description
    },{
      where:{
        id:id
      }
    })
  }else {
    return "Only admin can edit post"
  }
  
  }

 async remove(id: number, userId: number) {
  let user = await UserType.findByPk(userId)

  let userRole = user.userRoleId

  if(userRole == "1"){
    return await PostCreation.destroy({
      where:{
        id:id
      }
    })
  }else {
    return "Only admin can delete post"
  }
  }

  async addImage(id: number, filename: any, userId: number){

    let user = await UserType.findByPk(userId)

    let userRole = user.userRoleId

    if(userRole != '1') return "only admin can add image"

    return await PostCreation.update({
      image:filename
    },{
      where:{
        id:id
      }
    })

  }
}
