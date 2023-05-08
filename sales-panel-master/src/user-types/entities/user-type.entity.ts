import { Model, Table, Column, PrimaryKey, DataType, HasOne, BelongsTo, ForeignKey, HasMany, BelongsToMany } from 'sequelize-typescript';

@Table
export class UserType extends Model{

    toJSON() : any {
        let data = this.get()
        return {
          ...data,
          image:  `${'http://localhost:8000/'}${data.image}`
        
    
        }
      }    

@Column({ type: DataType.STRING })
username: string;

@Column({ type: DataType.STRING})
userRoleId: string;

@Column({ type: DataType.BOOLEAN })
is_Admin: boolean;


@Column({ type: DataType.STRING })
description: string;

@Column({ type: DataType.STRING })
password: string;

@Column({ type: DataType.STRING })
email: string;

@Column({ type: DataType.STRING })
image: string;
}
