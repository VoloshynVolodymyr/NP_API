import axios from 'axios';

const PostAPI = axios.create({
    baseURL: 'https://api.novaposhta.ua/v2.0/json/',
  });

  export const getParcelData = async () => {
    try {
      const response = await PostAPI.post('', {
        apiKey: '70aae1b5b0a566dfad36437c21ec4e5c',
        "modelName": "TrackingDocument",
        "calledMethod": "getStatusDocuments",
        "methodProperties": {
     "Documents" : [
     {
     "DocumentNumber":"20450668892412",
     "Phone":"380600000000"
     }
     
     ]
        }
      });
      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  };

