export const NotFound = ({ region }) => {
  return (
    <>
      <div className="flex items-center justify-center col-[1/-1]">
        {region === "all" ? (
          <h3 className="text-dark-main text-2xl font-bold">
            We can't find the country you are looking for
          </h3>
        ) : (
          <h3 className="text-dark-main text-2xl font-bold">
            We can't find the country you are looking for, try on another region
          </h3>
        )}
      </div>
    </>
  );
};
