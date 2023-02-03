import axios from 'axios';

export const getKeysList = async (ip: string) => {
  try {
    const res = await axios.get(`http://${ip}:3000/api/keyList`);
    console.log('data:', res.data);
    return res.data;
  } catch (e) {
    console.log('Error: ', e);
  }
};
