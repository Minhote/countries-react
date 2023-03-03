import { memo, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInitAndEnd, setToShow } from "../store";

export const Pagination = ({ quantityOfCards, cardsToShow }) => {
  const { value, isLoading } = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  const [num, setNum] = useState(1);
  const [cur, setCur] = useState(1);

  const limit = Math.ceil(quantityOfCards / cardsToShow);
  // console.log((cur - 1 * 1) * 8, cur * 8);
  const init = (cur - 1 * 1) * 8;
  const end = cur * 8;

  useEffect(() => {
    dispatch(setInitAndEnd({ init: init, end: end }));
  }, [init, end]);

  const pages = [
    { page: num },
    { page: num + 1 },
    { page: num + 2 },
    { page: num + 3 },
  ];
  function Next() {
    if (num === limit - 3) return;
    setNum((num) => num + 1);
  }
  function back() {
    num > 1 && setNum((num) => num - 1);
  }
  return (
    <div className="flex rounded-lg font-serif mx-auto col-span-full">
      <button
        onClick={back}
        className="h-12 border-2 border-r-0 border-light-main px-4 rounded-l-lg hover:bg-light-main hover:text-white"
      >
        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
            fillRule="evenodd"
          ></path>
        </svg>
      </button>
      {pages.map((pg, i) => (
        <button
          key={pg.page}
          onClick={() => setCur(pg.page)}
          className={`h-12 border-2 border-r-0 border-light-main w-12 ${
            cur === pg.page && "bg-light-main text-white"
          }`}
        >
          {pg.page}
        </button>
      ))}
      <button
        onClick={Next}
        className="h-12 border-2  border-light-main px-4 rounded-r-lg hover:bg-light-main hover:text-white"
      >
        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
            fillRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
};
