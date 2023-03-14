import { useEffect, useRef, useState } from "react";
import { FaSistrix } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setFilteredCountries, setInitAndEnd, setNotFound } from "../store";

export const Search = ({ val }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { fetched } = useSelector((state) => state.countries);
  const [selectValue, setSelectValue] = useState("");

  useEffect(() => {
    if (fetched) {
      if (selectValue != "") {
        navigate(`/${selectValue.toLowerCase()}`);
      }
    }
    return () => {
      dispatch(setFilteredCountries({ filtered: [] }));
      dispatch(setInitAndEnd({ init: 0, end: 8 }));
    };
  }, [fetched, selectValue]);

  const handleChange = (text, v) => {
    let fil = v.filter((c) => c.name.common.toLowerCase().includes(text));
    return fil;
  };

  return (
    <div className="flex flex-wrap flex-col items-center justify-between p-4 gap-5 bg-light-main dark:bg-dark-main sm:flex-row sm:items-stretch">
      <div className="flex items-center px-1 bg-light-white w-1/2">
        <FaSistrix />
        <input
          className="grow outline-none pl-3 py-1 text-sm font-medium text-dark-main max-w-[90%] bg-light-white dark:bg-light-white"
          type="text"
          onChange={(e) => {
            if (e.target.value === "") {
              dispatch(setFilteredCountries({ filtered: [] }));
            } else {
              const filteredC = handleChange(e.target.value.toLowerCase(), val);
              if (filteredC.length === 0) {
                dispatch(setFilteredCountries({ filtered: [] }));
                dispatch(setNotFound({ notFound: true }));
              } else {
                dispatch(setNotFound({ notFound: false }));
                dispatch(setFilteredCountries({ filtered: filteredC }));
              }
            }
          }}
        />
      </div>
      <div className="shrink-0 text-dark-main">
        <select
          className="bg-dark-white px-3 py-1"
          value={selectValue === "" ? "Filter by region" : selectValue}
          onChange={(e) => {
            setSelectValue(e.target.value);
          }}
        >
          <option disabled>Filter by region</option>
          <option value="All" className="text-dark-main font-bold">
            All
          </option>
          <option value="Asia" className="text-dark-main font-bold">
            Asia
          </option>
          <option value="Americas" className="text-dark-main font-bold">
            Americas
          </option>
          <option value="Europe" className="text-dark-main font-bold">
            Europe
          </option>
          <option value="Africa" className="text-dark-main font-bold">
            Africa
          </option>
          <option value="Oceania" className="text-dark-main font-bold">
            Oceania
          </option>
        </select>
      </div>
    </div>
  );
};
