import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { models } from '../db/models/index.js';

export async function register(req, res, next) {
  try {
    const user = await models.User.create(req.body);
    return res.status(201).json(user);
  } catch (e) { next(e); }
}

export async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await models.User.findOne({ where: { email } });
    if (!user) return res.status(401).json({ message: 'Credenciales inválidas' });
    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(401).json({ message: 'Credenciales inválidas' });
    const token = jwt.sign({ id: user.id, role: user.role, email: user.email }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES || '2h' });
    return res.json({ token, user: user.toJSON() });
  } catch (e) { next(e); }
}
