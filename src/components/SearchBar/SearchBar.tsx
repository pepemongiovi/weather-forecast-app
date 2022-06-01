import { useState } from "react";
import { Button } from "../common/Button/Button";
import FormInput from "../common/FormInput/FormInput";
import { Container } from "./SearchBar.styles";

interface SearchBarProps {
  loading: boolean;
  label: string;
  handleSearch: (search: string) => void;
}

const SearchBar = ({ label, loading, handleSearch }: SearchBarProps) => {
  const [search, setSearch] = useState("")

  const isSearchDisabled: boolean = !search.trim().length && !loading

  const onSearch = () => handleSearch(search)

  const onChange = (res: string) => setSearch(res)

  return (
    <Container>
      <FormInput {...{ onChange }} value={search} {...{ label }} />
      <Button label="Search" onClick={onSearch} disabled={isSearchDisabled} {...{ loading }}
        style={{ height: 56, marginTop: -18, width: 150, marginLeft: 10 }}
      />
    </Container>
  )
}

export default SearchBar