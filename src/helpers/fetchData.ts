import axios from 'axios';

export const fetchData = async (key: 'string') => {
  try {
    const res = await axios.get(`http://192.168.0.100:3000/api/bind/${key}`);
    console.log(res.data);
  } catch (e) {
    console.log('Error: ', e);
  }
};
