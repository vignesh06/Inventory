import axios from 'axios';
import { UrlConstant, localstorageConstants } from '../Constants/Constants';
const HTTPService = async (url, method, data) => {
  let response=await axios({
      method,
      url,
      data,
      headers: { 'Content-Type': 'application/json',Authorization: `Bearer ${localStorage.getItem(localstorageConstants.Token)}`}
    }).then(function(response) {
    return response.data;
    })
    .catch(function(apiError) {
         localStorage.setItem(
      localstorageConstants.IsLoggedIn,
    false
    )
      if (apiError.status === 500) {
        window.location.href="/internal-server-error"
      }else{
        window.location.href="/internal-server-error"
      }
    });
    return response;
};

export default HTTPService