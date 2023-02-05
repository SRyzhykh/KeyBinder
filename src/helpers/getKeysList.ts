import axios from 'axios';

export const getKeysList = async (ip: string) => {
  let result = [];
  try {
    const res = await axios.get(`http://${ip}:3000/api/keyList`);
    result = res.data;
  } catch (e) {
    console.log('Error: ', e);
  }
  return result;
};
