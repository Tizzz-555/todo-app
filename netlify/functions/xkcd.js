const axios = require("axios");

exports.handler = async function (event, context) {
  const { number } = event.queryStringParameters;

  try {
    const response = await axios.get(`https://xkcd.com/${number}/info.0.json`);
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: error.response.status,
      body: JSON.stringify(error.response.data),
    };
  }
};
