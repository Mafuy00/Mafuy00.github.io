/*in here, params is the key-pair value 
u usually see in the URL*/

try {
    const response = await axios.get(`${backendUrl}`, {
      params: {
        addr: address
      }
    });
    const data = response.data;
  } catch (error) {
    console.error(error);
  }

  try {
    const response = await axios.post(`${backendUrl}`, {
      addr: address,
      email: 'test@example.com'
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }

  /*in both, replace ${backendUrl} 
  with the actual url you are calling

the info u usually need is response.data, 
then to get status code, can use response.status */