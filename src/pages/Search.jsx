import { FaSistrix } from "react-icons/fa";

export const Search = () => {
  return (
    <div className="flex flex-wrap flex-col items-center justify-between p-4 gap-5 bg-light-main dark:bg-dark-main sm:flex-row sm:items-stretch">
      <div className="flex items-center px-1 bg-light-white w-1/2">
        <FaSistrix className="md:min-w-[10%]" />
        <input
          className="grow outline-none pl-3 py-1 text-sm font-medium text-slate-700 max-w-[90%] bg-light-white dark:bg-light-white"
          type="text"
          name=""
          id=""
        />
      </div>
      <div className="shrink-0 text-slate-700">
        <select
          className="bg-light-white dark:bg-dark-white px-3 py-1"
          name=""
          id=""
          defaultValue="Filter by region"
        >
          <option disabled>Filter by region</option>
          <option value="Asia">Asia</option>
          <option value="Americas">Americas</option>
          <option value="Europe">Europe</option>
          <option value="Africa">Africa</option>
          <option value="Oceanía">Oceania</option>
        </select>
      </div>
    </div>
  );
};
