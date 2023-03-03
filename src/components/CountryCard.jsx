export const CountryCard = ({ name, url, population, region, capital, alt }) => {
  return (
    <div className="flex flex-col gap-1 bg-light-main dark:bg-dark-main p-3 rounded-md border-4 border-light-gray dark:border-dark-gray">
      <figure className="h-1/2 ">
        <img className="object-cover h-full w-full" src={url} alt={alt} />
      </figure>
      <div className="flex flex-col items-start justify-center gap-2 h-1/2">
        <h2 className="text-bold text-xl text-light-white dark:text-dark-white">
          {name}
        </h2>
        <p className="text-bold text-sm text-light-white dark:text-dark-white">
          <strong className="text-lg">Population:</strong> {population}
        </p>
        <p className="text-bold text-sm text-light-white dark:text-dark-white">
          <strong className="text-lg">Region:</strong> {region}
        </p>
        <p className="text-bold text-sm text-light-white dark:text-dark-white">
          <strong className="text-lg">Capital:</strong> {capital}
        </p>
      </div>
      <button className="text-base font-medium text-light-gray dark:text-dark-gray underline hover:text-light-secondary">More Details</button>
    </div>
  );
};
