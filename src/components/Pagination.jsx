import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInitAndEnd } from "../store";

export const Pagination = ({ quantityOfCards, cardsToShow, region }) => {
  const dispatch = useDispatch();
  const [num, setNum] = useState(1);
  const [cur, setCur] = useState(1);

  //Calc quantity of buttons
  const limit = Math.ceil(quantityOfCards / cardsToShow);
  const initP = (cur - 1 * 1) * 8;
  const endP = cur * 8;

  useEffect(() => {
    dispatch(setInitAndEnd({ init: initP, end: endP }));
  }, [initP, endP]);

  useEffect(() => {
    setNum(1);
    setCur(1);
  }, [region]);

  const pages = [
    { page: num },
    { page: num + 1 },
    { page: num + 2 },
    { page: num + 3 },
  ];

  function Next() {
    if (num != limit - 3) {
      setNum((num) => num + 1);
    }
    if (cur != limit) {
      setCur((cur) => cur + 1);
    }
  }
  function back() {
    if (num != 1) {
      setNum((num) => num - 1);
    }
    if (cur != 1) {
      setCur((cur) => cur - 1);
    }
  }
  return (
    <div className="flex rounded-lg font-serif mx-auto col-span-full">
      <button
        onClick={back}
        className="h-12 border-2 border-r-0 border-light-main dark:border-dark-main px-4 rounded-l-lg hover:bg-light-main dark:hover:bg-dark-main hover:text-light-white dark:hover:text-dark-white"
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
          className={`h-12 border-2 border-r-0 border-light-main dark:border-dark-main w-12 ${
            cur === pg.page &&
            "bg-light-main text-light-white dark:bg-dark-main dark:text-dark-white"
          }`}
        >
          {pg.page}
        </button>
      ))}
      <button
        onClick={Next}
        className="h-12 border-2 border-light-main dark:border-dark-main px-4 rounded-r-lg hover:bg-light-main dark:hover:bg-dark-main hover:text-light-white dark:hover:text-dark-white"
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
