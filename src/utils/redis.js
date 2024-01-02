/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line object-curly-newline
export const customSet = ({ client, key, data, expirationTime }) => {
  try {
    client.set(key, JSON.stringify(data));
    client.expireAt('films', expirationTime);
  } catch (error) {
    console.error('Ocurrio un error en customSet');
    throw error;
  }
};
