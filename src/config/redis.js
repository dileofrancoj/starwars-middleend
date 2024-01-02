import { createClient } from 'redis';

export const client = createClient();

export async function redisStart() {
  client.on('error', (e) => new Error('error in redis connection', e));
  await client.connect();
  console.info('Redis listening on port 6379');
}
