export const useFetch = async (url) => {
  try {
    const req = await fetch(url);
    const json = await req.json();
    return json;
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Finalizado");
  }
};
