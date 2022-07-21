import styled from "styled-components";
import { useState } from "react";

const SearchBarContainer=styled.div`
margin-top: 22px;
margin-bottom: 25px;
`;

const SearchInput=styled.input`
width: calc(min(90vw, 400px));
`;

export default function SearchBar(props) {
  const [keyword, setKeyword] = useState(props.name);

  // use the current keyword as the search term
  function submit() {
    if(keyword) {
      props.setSearch(keyword);
    }
  }

  return (
    <SearchBarContainer>
      <label
       htmlFor="searchFor"
       style={{display: "block"}}
       >Movie name to search</label>
      <SearchInput
        name="searchFor"
        type="text"
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
      />
      <button onClick={submit}>Search</button>
    </SearchBarContainer>
  );
}
