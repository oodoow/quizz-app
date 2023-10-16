import axios from "axios";

export default async function callBackend({ method = 'POST', url, payload, headers}) {
  try {
    const { data, status } = await axios({
      method,
      url,
      // url: `http://localhost:3001/api/v1/${url}`,
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