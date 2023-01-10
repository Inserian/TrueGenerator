const axios = require('axios');

async function getRandomNumber() {
  try {
    const response = await axios.get(
      `https://api.random.org/json-rpc/2/invoke`,
      {
        params: {
          jsonrpc: "2.0",
          method: "generateIntegers",
          params: {
            apiKey: "your_api_key",
            n: 1,
            min: 1,
            max: 10
          },
          id: 1
        }
      }
    );
    return response.data.result.random.data[0];
  } catch (error) {
    console.error(error);
  }
}

console.log(getRandomNumber());
