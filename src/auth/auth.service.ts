import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../gql/providers';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signInWithEmail(email: string, password: string) {
    const user = await this.usersService.findOneByEmail(email);

    if (!user) {
      throw new NotFoundException(`User with email ${email} not found`);
    }
    if (user.passwordHash !== password) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, email: email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
