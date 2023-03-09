import { createClient } from 'redis';

export type RedisClientType = ReturnType<typeof createClient>;

const client: RedisClientType = createClient({
  url: process.env.REDIS_URL,
});

export default client;
