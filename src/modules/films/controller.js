/* eslint-disable object-curly-newline */
/* eslint-disable import/prefer-default-export */

import { client } from '../../config/redis';
import { EXPIRATION_DATE } from '../../constants/redis';
import { customSet } from '../../utils/redis';
import * as service from './service';

export const getMovies = async (_, res) => {
  try {
    const redisValue = await client.get('films');
    if (redisValue) {
      const response = JSON.parse(redisValue);
      return res.json(response);
    }
    const data = await service.get();
    customSet({ client, key: 'films', data, expirationTime: EXPIRATION_DATE });
    return res.json(data);
  } catch (error) {
    // logging
    console.error('hubo un error!');
    return res.status(500).json({ message: 'Ocurrió un error' });
  }
};
