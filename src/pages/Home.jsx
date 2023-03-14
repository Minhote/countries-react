import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CountryCard, NotFound, Pagination, Search } from "../components";
import { setInitAndEnd, getCountries } from "../store";

export const Home = () => {
  const dispatch = useDispatch();
  const { value, fetched, init, end, filtered, notFound } = useSelector(
    (state) => state.countries
  );
  const NUMBER_OF_CARDS = 8;

  useEffect(() => {
    fetched === false && dispatch(getCountries());
    dispatch(setInitAndEnd({ init: init, end: end }));
  }, [init, end]);

  // Countries to show on the page
  const toShow = value.slice(init, end);

  return (
    <>
      <Search val={value} />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(min(300px,100%),1fr))] gap-2 py-3 px-1  min-h-[80vh] bg-light-secondary dark:bg-dark-secondary">
        {toShow.length > 0 && filtered.length === 0 && !notFound
          ? toShow.map((c) => {
              return (
                <CountryCard
                  key={c.name.common}
                  name={c.name.common}
                  url={c.flags.svg}
                  population={c.population}
                  capital={c.capital}
                  region={c.region}
                  alt={c.flags.alt}
                />
              );
            })
          : filtered.map((f) => {
              return (
                <CountryCard
                  key={f.name.common}
                  name={f.name.common}
                  url={f.flags.svg}
                  population={f.population}
                  capital={f.capital}
                  region={f.region}
                  alt={f.flags.alt}
                />
              );
            })}
        {value.length > 0 && filtered.length === 0 && !notFound && (
          <Pagination
            quantityOfCards={value.length}
            cardsToShow={NUMBER_OF_CARDS}
            region="all"
          />
        )}
        {notFound && <NotFound region="all" />}
      </div>
    </>
  );
};
