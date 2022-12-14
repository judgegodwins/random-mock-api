import bcrypt from 'bcrypt';

export * from './core';
export * from './pagination';

export const bcryptHash = (data: string) => {
  return bcrypt.hash(data, 12);
}

export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}