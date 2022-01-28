import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Input } from "../Input";
import searchQueryParamName from "../searchQueryParamName";
import { Wrapper } from "./styled";

const Search = () => {
  const location = useLocation();
  const history = useHistory();

  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get(searchQueryParamName);

  const onInputChange = ({ target }) => {
    if (target.value.trim() === "") {
      searchParams.delete(searchQueryParamName);
    } else {
      searchParams.set(searchQueryParamName, target.value);
    };

    history.push(`${location.pathname}?${searchParams.toString()}`);
  };

  return (
    <Wrapper>
      <Input
        placeholder="Filtruj zadania"
        value={query || ""}
        onChange={onInputChange}
      />
    </Wrapper>
  )
}

export default Search;