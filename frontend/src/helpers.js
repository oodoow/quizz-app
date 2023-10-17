import axios from "axios";

export default async function callBackend({ method = 'POST', url, payload, headers}) {
  const link = `${process.env.REACT_APP_DOMAIN}/${url}`
  try {
    const { data, status } = await axios({
      method,
      url: link,
      data: payload,
      headers: headers || { "Content-Type": "application/json" }
    });
    // back-end returns response {} with data {}, in those data, there is the message which is {data: string}, thus response.data
    if (status != 200 && status != 201)
    {
      throw new Error(`response status is ${status}`);
    }
    return data;
  }
  
  catch (error)
  {
    return {
      error: true,
      message: error.message
    }
  }

  
}