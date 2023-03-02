import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CountryCard } from "../components";
import { getButtons } from "../helpers";
import { getCountries } from "../store/thunks";

export const Home = () => {
  const dispatch = useDispatch();
  const { value, isLoading } = useSelector((state) => state.countries);
  //console.log(!!value.length , Boolean(value.length))
  useEffect(() => {
    !isLoading && dispatch(getCountries());
  }, []);

  const NUMBER_OF_CARDS = 9;

  //const NUMBER_OF_BUTTONS = getButtons(value.length, NUMBER_OF_CARDS);

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-2 py-3 px-1 bg-light-secondary dark:bg-dark-secondary">
      {!isLoading &&
        Boolean(value.length) &&
        value.map((c) => {
          return (
            <CountryCard
              key={c.name.common}
              name={c.name.common}
              url={c.flags.svg}
              population={c.population}
              capital={c.capital}
              region={c.region}
            />
          );
        })}
    </div>
  );
};
