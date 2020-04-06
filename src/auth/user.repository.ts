import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { Repository, EntityRepository } from 'typeorm';
import { User } from './user.entity';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { username, password } = authCredentialsDto;

    const user = new User();
    user.username = username;
    user.salt = await bcrypt.genSalt();
    user.password = await this.hashPassword(password, user.salt);

    try {
      await user.save();
    } catch (e) {
      if (e.code === '23505')
        throw new ConflictException('Username already exists.');

      throw new InternalServerErrorException();
    }
  }

  private async hashPassword(password: string, salt: string) {
    return bcrypt.hash(password, salt);
  }
}
