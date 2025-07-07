import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersService {
    private users;
    createUser(createUserDto: CreateUserDto): CreateUserDto;
    getUserById(id: number): CreateUserDto;
    getAllUsers(): CreateUserDto[];
}
