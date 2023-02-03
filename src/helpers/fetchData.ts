import axios from 'axios';

export const fetchData = async (ip: string, key: string) => {
  try {
    const res = await axios.get(`http://${ip}:3000/api/bind/${key}`);
    console.log(res.data);
  } catch (e) {
    console.log('Error: ', e);
  }
};
