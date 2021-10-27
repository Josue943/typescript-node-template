import { Request, Response } from 'express';
import User from '@src/models/user.model';

export const getUsers = async (_: Request, res: Response) => {
  const users = await User.findAll();
  res.send(users);
};

export const createUser = async (req: Request, res: Response) => {
  const user = await User.create(req.body);
  console.log(req.user.id);

  res.send(user);
};
