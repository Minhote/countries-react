import { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Border } from "../components/Border";
import {
  clearBorders,
  clearValue,
  getNameForCode,
  getSingleCountry,
} from "../store";

export const Details = () => {
  const { value, borders } = useSelector((state) => state.singleCountry);
  const { country } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const dataToShow = value
    .map((v) => {
      return [
        v.flags.png,
        v.name.common,
        Object.values(v.name.nativeName),
        Number(v.population),
        v.region,
        v.subregion ? v.subregion : "none",
        v.capital ? v.capital : "none",
        v.tld,
        v.currencies ? Object.values(v.currencies) : "none",
        Object.values(v.languages),
        v.borders ? v.borders : "none",
      ];
    })
    .flat();

  useEffect(() => {
    dispatch(getSingleCountry(country.replaceAll("_", " ")));
    return () => {
      dispatch(clearValue());
    };
  }, [country]);

  useEffect(() => {
    if (dataToShow.length > 0 && dataToShow.at(-1) != "none") {
      dispatch(getNameForCode(dataToShow.at(-1)));
    }
    return () => {
      dispatch(clearBorders());
    };
  }, [value]);

  return (
    <div className="flex flex-col p-4 gap-6 flex-wrap bg-light-secondary dark:bg-dark-secondary text-dark-main dark:text-dark-white min-h-[90vh]">
      <div className="flex items-start">
        <button
          className="flex gap-1 text-light-white dark: dark:text-dark-white items-center justify-center p-2 bg-light-main dark:bg-dark-main rounded-lg shadow-md hover:bg-dark-main hover:dark:bg-light-gray hover:dark:text-dark-main"
          onClick={() => {
            navigate(-1);
          }}
        >
          <FaArrowLeft />
          Back
        </button>
      </div>
      <div className="flex flex-wrap items-center justify-evenly gap-4 grow">
        <figure className="flex items-center justify-center">
          <img className="" src={dataToShow[0]} alt="" />
        </figure>
        {value.length > 0 && (
          <div className="flex flex-col items-start justify-between flex-wrap gap-4 max-w-[calc(min(600px,80vw))]">
            <h2 className="text-2xl font-bold">{dataToShow[1]}</h2>
            <div className="flex flex-wrap justify-between gap-4">
              <div className="flex flex-col gap-2">
                <p className="text-base">
                  <strong className="font-bold text-lg">Native Name:</strong>{" "}
                  {dataToShow[2][0].common}
                </p>
                <p className="text-base">
                  <strong className="font-bold text-lg">Population:</strong>{" "}
                  {dataToShow[3].toLocaleString("en-US")}
                </p>
                <p className="text-base">
                  <strong className="font-bold text-lg">Region:</strong>{" "}
                  {dataToShow[4]}
                </p>
                <p className="text-base">
                  <strong className="font-bold text-lg">Sub Region:</strong>{" "}
                  {dataToShow[5]}
                </p>
                <p className="text-base">
                  <strong className="font-bold text-lg">Capital:</strong>{" "}
                  {dataToShow[6]}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-base">
                  <strong className="font-bold text-lg">
                    Top Level Domain:
                  </strong>{" "}
                  {dataToShow[7]}
                </p>
                <p className="text-base">
                  <strong className="font-bold text-lg">Currencies:</strong>{" "}
                  {Array.isArray(dataToShow[8])
                    ? dataToShow[8].map((v) => `${v.name}, `)
                    : dataToShow[8]}
                </p>
                <p className="text-base">
                  <strong className="font-bold text-lg">Languages:</strong>{" "}
                  {dataToShow[9].map((v) => `${v}, `)}
                </p>
              </div>
            </div>
            <div className="flex gap-1 flex-wrap items-center">
              <strong className="font-bold text-lg">Border Countries:</strong>{" "}
              {borders.length > 0
                ? borders.map((c) => <Border key={c} text={c} />)
                : "none"}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
