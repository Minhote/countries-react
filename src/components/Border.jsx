import { useNavigate } from "react-router-dom";

export const Border = ({ text }) => {
  const navigate = useNavigate();

  return (
    <span
      className="text-base text-dark-main dark:text-dark-white bg-light-main dark:bg-dark-main p-2 m-2 rounded cursor-pointer hover:bg-dark-main hover:text-light-white hover:dark:bg-light-gray hover:dark:text-dark-main"
      onClick={() => {
        if (text.includes(" ")) {
          navigate(`/details/${text.replaceAll(" ", "_").toLowerCase()}`, {
            replace: true,
          });
        } else {
          navigate(`/details/${text.toLowerCase()}`, { replace: true });
        }
      }}
    >
      {text}
    </span>
  );
};
