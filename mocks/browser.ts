import { setupWorker } from 'msw';
import { handlers } from '@mocks/handlers';
export { rest } from 'msw'; // 필요한 경우 rest도 내보내줄 수 있습니다.

export const worker = setupWorker(...handlers);