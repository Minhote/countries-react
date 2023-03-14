import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCountries, setInitAndEnd } from "../store";
import { CountryCard, NotFound, Pagination, Search } from "../components";

export const Region = () => {
  const { region } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { value, init, end, filtered, notFound } = useSelector(
    (state) => state.countries
  );
  const [filteredCountries, setFilteredCountries] = useState([]);

  const filteredCountriesByRegion = (r) => {
    const filter = [...value].filter((c) => c.region === r);
    return filter;
  };

  const capitalize = (word) => {
    return word[0].toUpperCase() + word.slice(1);
  };

  const regionCapitalized = capitalize(region);
  const NUMBER_OF_CARDS = 8;

  useEffect(() => {
    if (value.length === 0) {
      dispatch(getCountries());
      setFilteredCountries(filteredCountriesByRegion(regionCapitalized));
      dispatch(setInitAndEnd({ init: init, end: end }));
    }

    if (region === "all") {
      navigate("/");
    }
    setFilteredCountries(filteredCountriesByRegion(regionCapitalized));
  }, [region, value, init, end]);

  // Countries to show on the page
  const toShow = filteredCountries.slice(init, end);

  return (
    <>
      <Search val={filteredCountries} />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(min(300px,100%),1fr))] gap-2 py-3 px-1 min-h-[80vh] bg-light-secondary dark:bg-dark-secondary">
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
        {filteredCountries.length > 0 && filtered.length === 0 && !notFound && (
          <Pagination
            quantityOfCards={filteredCountries.length}
            cardsToShow={NUMBER_OF_CARDS}
            region={region}
          />
        )}
        {notFound && <NotFound region={region} />}
      </div>
    </>
  );
};
