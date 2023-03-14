import { useNavigate } from "react-router-dom";

export const CountryCard = ({
  name,
  url,
  population,
  region,
  capital,
  alt,
}) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-5 bg-light-main dark:bg-dark-main p-3 rounded-md border-4 border-light-gray dark:border-dark-gray">
      <figure className="h-52 min-h-[13rem] flex items-center justify-center">
        <img className="h-3/4 w-full text-light-white" src={url} alt={alt} />
      </figure>
      <div className="flex flex-col items-start justify-center gap-2 h-1/2">
        <h2 className="font-bold text-xl text-dark-main dark:text-dark-white">
          {name}
        </h2>
        <p className="text-bold text-sm text-dark-main dark:text-dark-white">
          <strong className="text-lg">Population:</strong>
          {"  "}
          {Number(population).toLocaleString("en-US")}
        </p>
        <p className="text-bold text-sm text-dark-main dark:text-dark-white">
          <strong className="text-lg">Region:</strong>
          {"  "}
          {region}
        </p>
        <p className="text-bold text-sm text-dark-main dark:text-dark-white">
          <strong className="text-lg">Capital:</strong>
          {"  "}
          {capital}
        </p>
      </div>
      <button
        className="text-base font-medium text-dark-main dark:text-dark-gray underline hover:font-bold"
        onClick={() => {
          if (name.includes(" ")) {
            navigate(`/details/${name.replaceAll(" ", "_").toLowerCase()}`);
          } else {
            navigate(`/details/${name.toLowerCase()}`);
          }
        }}
      >
        More Details
      </button>
    </div>
  );
};
