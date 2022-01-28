import { useLocation } from "react-router-dom";

export const useQueryParameter = (queryParamName) => {
  const location = useLocation();

  const query = new URLSearchParams(location.search).get(queryParamName);

  return query;
}