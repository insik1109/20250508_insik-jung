import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // 사용자 생성 API
  @Post()
  createUser(@Body() createUserDto: CreateUserDto): CreateUserDto {
    return this.usersService.createUser(createUserDto);
  }

  // 특정 사용자 조회 API
  @Get(':id')
  getUser(@Param('id') id: string): CreateUserDto {
    return this.usersService.getUserById(Number(id));
  }

  // 전체 사용자 조회 API
  @Get()
  getAllUsers(): CreateUserDto[] {
    return this.usersService.getAllUsers();
  }
}
