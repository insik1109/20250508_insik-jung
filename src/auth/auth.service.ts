// auth.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async login(email: string, password: string) {
    // 임시로 email/password 확인 로직
    if (email === 'insik1109@gmail.com' && password === 'InsIk2006!!09') {
      return { success: true, message: '로그인 성공' };
    }
    return { success: false, message: '로그인 실패: 이메일이나 비밀번호가 잘못되었습니다.' };
  }
}
