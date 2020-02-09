import axios from 'axios';

  const HTTPService = async (url, method, data,token) => {
    try {
      let result = await axios({
        method,
        url,
        data,
        headers: { 'X-Custom-Header': 'X-Header-Value' }
      });
      return result.data;
    } catch (error) {
      alert(error);
      // return 'Call failed';
    }
  };

  export default HTTPService