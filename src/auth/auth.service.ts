// auth.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async login(email: string, password: string) {
    if (email === 'insik1109@gmail.com' && password === 'InsIk2006!!09') {
      return { success: true, message: '로그인 성공' };
    }
    // success는 true로 유지하고, 프론트엔드에서 명확히 처리하도록 함
    return { success: false, message: '로그인 실패: 이메일 또는 비밀번호가 잘못되었습니다.' };
  }
}
