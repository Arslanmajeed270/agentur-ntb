
export const BACKEND_APP_PORT: number =
  parseInt(process.env.BACKEND_APP_PORT) || 5000;

console.log(
  'checking process.env.BACKEND_APP_PORT: ',
  process.env.BACKEND_APP_PORT,
);
