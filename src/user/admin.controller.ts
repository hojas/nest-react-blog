import {
  Controller,
  Get,
  Param,
  NotFoundException,
  UseFilters,
  Query,
  ParseIntPipe,
  DefaultValuePipe,
  UseGuards,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/filters/http-exception.filter';
import { Pagination } from 'src/types/pagination';
import { PAGE_SIZE } from 'src/constants';
import { UserService } from './user.service';
import { User } from './user.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('admin/users')
@UseGuards(JwtAuthGuard)
export class AdminUserController {
  constructor(private userService: UserService) {}

  @Get()
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe)
    page: number,
    @Query('page_size', new DefaultValuePipe(PAGE_SIZE), ParseIntPipe)
    pageSize: number,
  ): Promise<Pagination<User>> {
    return this.userService.findAll({ page, pageSize });
  }

  @Get(':id')
  @UseFilters(HttpExceptionFilter)
  async findById(@Param('id') id: string): Promise<User> {
    const user = await this.userService.findById(id);

    if (user) {
      return user;
    }
    throw new NotFoundException();
  }
}
