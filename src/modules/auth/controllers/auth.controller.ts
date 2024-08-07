import {
  Controller,
  Post,
  Req,
  HttpCode,
  HttpStatus,
  Body,
} from '@nestjs/common';

import { ApiTags, ApiBody } from '@nestjs/swagger';

import { Authenticate } from '@/common/interfaces/authenticated.interface';

import { CreateUserDTO } from '@/modules/users/dto/create.dto';

import { AuthService } from '@/modules/auth/services/auth.service';
import { Auth, LocalAuth, Reauth } from '@/common/decorators/auth.decorator';

@ApiTags('Auth')
@Controller({
  version: '1',
  path: '/auth',
})
export class AuthController {
  constructor(private readonly _authService: AuthService) {}

  @ApiBody({
    schema: {
      properties: {
        login: {
          type: 'string',
        },
        password: {
          type: 'string',
        },
      },
    },
  })
  @LocalAuth()
  @HttpCode(HttpStatus.OK)
  @Post('/login')
  async login(@Req() req: AuthenticatedRequest) {
    return this._authService.login(req.user);
  }

  @Auth()
  @Post('/register')
  async store(@Body() body: CreateUserDTO) {
    return this._authService.register(body);
  }

  @ApiBody({
    schema: {
      properties: {
        login: {
          type: 'string',
        },
        refreshToken: {
          type: 'string',
        },
      },
    },
  })
  @Reauth()
  @Post('/refresh')
  async refresh(@Req() req: Authenticate.IAuthenticatedUser) {
    return this._authService.reAuth({
      id: req.user.id,
      username: req.user.username,
    });
  }
}
