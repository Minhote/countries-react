import { URL_ALL, URL_CODE, URL_SINGLE } from "../api/urls";
import { useFetch } from "../hooks/useFetch";
import { setAll, setFetched, startLoading } from "./countriesAllSlice";
import { setBorders, setCountry } from "./singleCountrySlice";

export const getCountries = () => {
  return async (dispatch, getState) => {
    dispatch(startLoading());

    const resp = await useFetch(URL_ALL);
    dispatch(
      setAll({
        value: resp,
        isLoading: false,
      })
    );
    dispatch(setFetched());
  };
};

export const getSingleCountry = (country) => {
  return async (dispatch, getState) => {
    const resp = await useFetch(`${URL_SINGLE}${country}`);
    const filtered = resp.filter(
      (c) => c.name.common.toLowerCase() === country
    );

    dispatch(
      setCountry({
        value: filtered,
      })
    );
  };
};

export const getNameForCode = (codes = []) => {
  return async (dispatch) => {
    const parr = codes.map((c) => useFetch(`${URL_CODE}${c}`));
    const nombres = [];
    await Promise.all(parr)
      .then((value) => {
        for (let index = 0; index < value.length; index++) {
          nombres.push(value[index][0].name.common);
        }
      })
      .catch((error) => console.log(error));

    dispatch(setBorders({ borders: nombres }));
  };
};
