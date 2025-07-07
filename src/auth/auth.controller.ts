// auth.controller.ts
@Post('login')
login(@Body() body: { email: string; password: string }, @Res() res: Response) {
  const { email, password } = body;
  if (email === 'test@test.com' && password === '1234') {
    // 임시: 쿠키에 토큰 저장
    res.cookie('token', 'fake-jwt-token', { httpOnly: true });
    return res.json({ success: true });
  }
  return res.status(401).json({ success: false, message: 'Invalid credentials' });
}

@Post('logout')
logout(@Res() res: Response) {
  res.clearCookie('token');
  return res.json({ success: true });
}
