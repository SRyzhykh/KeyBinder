import axios from 'axios';

const ip = '192.168.0.100';

export const getKeysList = async () => {
  try {
    const res = await axios.get('http://172.20.10.3:3000/api/keyList');
    console.log('data:', res.data);
    return res.data;
  } catch (e) {
    console.log('Error: ', e);
  }
};
