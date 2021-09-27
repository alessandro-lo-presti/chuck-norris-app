const pathApi =
  "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes";

const apiOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
    "x-rapidapi-key": "7be92b508cmsh0f40ee336b50c51p10ce1bjsn41a20ed82a4c",
    accept: "application/json",
  },
};

const getCategoriesApi = () =>
  fetch(`${pathApi}/categories`, apiOptions).then((r) => r.json());

const getFactByCategoryApi = (category) => {
  const params = category ? `?category=${category}` : "";
  return fetch(`${pathApi}/random${params}`, apiOptions).then((r) => r.json());
};

export const ApiServices = {
  getCategoriesApi,
  getFactByCategoryApi,
};
