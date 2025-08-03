const SecureFetch = async (url, method, headers, body) => {
  const request = await fetch(url, {
    method: method,
    headers: headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  return request;
};
export default SecureFetch;