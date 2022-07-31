export async function HttpClient(fetchUrl, fetchOptions){
  return fetch(fetchUrl, {
    ...fetchOptions,
    headers: {
      ...fetchOptions.headers,
      "Content-Type": 'application/json'
    },
    body: fetchOptions.body ? JSON.stringify(fetchOptions.body): null,
  })
  .then(async (respostaDoServidor) => {
    return {
      ok: respostaDoServidor.ok,
      body: await respostaDoServidor.json()
    }
  });
}
