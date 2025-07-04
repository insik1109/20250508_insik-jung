import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users: CreateUserDto[] = [];

  // 사용자 생성
  createUser(createUserDto: CreateUserDto): CreateUserDto {
    this.users.push(createUserDto);
    return createUserDto;
  }

  // 특정 사용자 조회
  getUserById(id: number): CreateUserDto {
    const user = this.users.find(user => user.id === id);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  // 전체 사용자 조회
  getAllUsers(): CreateUserDto[] {
    return this.users;
  }
}
