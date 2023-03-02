import axios from 'axios';

const { API_KEY } = process.env;
const PostAPI = axios.create({
    baseURL: 'https://api.novaposhta.ua/v2.0/json/',
  });

  export const getParcelData = async (activeTTN) => {
    try {
      const response = await PostAPI.post('', {
        apiKey: '70aae1b5b0a566dfad36437c21ec4e5c',
        "modelName": "TrackingDocument",
        "calledMethod": "getStatusDocuments",
        "methodProperties": {
     "Documents" : [
     {
     "DocumentNumber":`${activeTTN}`,
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

