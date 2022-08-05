import bcrypt from 'bcrypt';

export * from './core';
export * from './pagination';

export const bcryptHash = (data: string) => {
  return bcrypt.hash(data, 12);
}