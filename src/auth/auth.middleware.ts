// auth.middleware.ts
export function authMiddleware(req, res, next) {
  if (req.cookies.token === 'fake-jwt-token') {
    next();
  } else {
    res.status(401).json({ success: false, message: 'Not authenticated' });
  }
}
