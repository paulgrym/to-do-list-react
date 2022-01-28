import { Input } from "../Input";
import searchQueryParamName from "../searchQueryParamName";
import { Wrapper } from "./styled";
import { useQueryParameter } from "./useQueryParameter";
import { useReplaceQueryParameter } from "./useReplaceQueryParameter";

const Search = () => {
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {
    replaceQueryParameter({
      key:searchQueryParamName,
      value:target.value.trim() !=="" ? target.value : undefined,
    })
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