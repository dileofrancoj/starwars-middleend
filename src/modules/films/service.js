/* eslint-disable import/prefer-default-export */
import fetch from 'node-fetch';
import service from '../../config/service';

export const get = async () => {
  try {
    const response = await fetch(`${service.baseUrl}/films`);
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
