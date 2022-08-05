import bcrypt from 'bcrypt';

export * from './core';

export const bcryptHash = (data: string) => {
  return bcrypt.hash(data, 12);
}