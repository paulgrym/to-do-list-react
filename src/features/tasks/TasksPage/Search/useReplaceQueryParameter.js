import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const useReplaceQueryParameter = () => {
  const location = useLocation();
  const history = useHistory();
  const searchParams = new URLSearchParams(location.search);

  const replaceQueryParameter = ({ key, value }) => {
    if (value === undefined) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    };

    history.push(`${location.pathname}?${searchParams.toString()}`);
  }

  return replaceQueryParameter;
}