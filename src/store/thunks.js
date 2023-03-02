import { URL_ALL } from "../api/urls";
import { useFetch } from "../hooks/useFetch";
import { setAll, startLoading } from "./countriesAllSlice";

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
  };
};
