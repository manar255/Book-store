import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer')) {
      throw new UnauthorizedException(
        "You can't access this feature without logging in!",
      );
    }

    const [, token] = authHeader.split(' ');

    const payload = jwt.verify(token, process.env.SECRET_KEY!) as jwt.JwtPayload;
    console.log(payload);
    request.userId = payload.userId!;

    return true;
  }
}