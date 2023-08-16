import { getCategory } from '@mocks/handlers/category';
import { getBlog } from '@mocks/handlers/blog';
import { getDate, getUser } from '@mocks/handlers/user';

export const handlers = [...getCategory, ...getBlog, ...getDate, ...getUser];
