import * as process from 'process';
enum EnvironmentType {
  TEST = 'test',
  LOCAL = 'local',
  DEV = 'dev',
  PROD = 'prod',
}
function checkEnvironmentType(envType: string): string {
  if (Object.values(EnvironmentType).includes(envType as EnvironmentType)) {
    return envType;
  }
  throw new Error('Invalid environment type');
}

export const isCurrentEnv = (mode: string): boolean => {
  return process.env.NODE_ENV === checkEnvironmentType(mode);
};
