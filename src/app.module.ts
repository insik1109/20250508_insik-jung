// app.module.ts (정상 코드에 데이터베이스 연결 추가 완료)
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',      // MySQL 호스트
      port: 3306,             // MySQL 기본 포트
      username: 'insik',       // MySQL 사용자 이름
      password: 'InsIk!!09',   // MySQL 비밀번호
      database: 'my-nest-api-DB',       // 연결할 데이터베이스 이름
      entities: [],
      synchronize: false,     // 현재는 false로 유지 (중요!)
    }),
  ],
})
export class AppModule {}
