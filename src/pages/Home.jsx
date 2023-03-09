import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CountryCard, Pagination, Search } from "../components";
import { getButtons } from "../helpers";
import { setInitAndEnd, getCountries } from "../store";

export const Home = () => {
  const dispatch = useDispatch();
  const { value, fetched, init, end } = useSelector((state) => state.countries);
  const NUMBER_OF_CARDS = 8;

  useEffect(() => {
    fetched === false && dispatch(getCountries());
    dispatch(setInitAndEnd({ init: init, end: end }));
  }, [init, end]);

  const toShow = value.slice(init, end);

  return (
    <>
      <Search></Search>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-2 py-3 px-1 bg-light-secondary dark:bg-dark-secondary">
        {toShow.length > 0 &&
          toShow.map((c) => {
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
          })}
        {value.length > 0 && (
          <Pagination
            quantityOfCards={value.length}
            cardsToShow={NUMBER_OF_CARDS}
            region="all"
          />
        )}
      </div>
    </>
  );
};
