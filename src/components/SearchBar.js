import { useState } from "react";
export default function SearchBar(props) {
  const [keyword, setKeyword] = useState(props.name);
  function submit() {
    props.setSearch(keyword)
  }
  return (
    <div className="SearchBar">
      <label
       htmlFor="searchFor"
       style={{display: "block"}}
       >Movie name to search</label>
      <input
        className="SearchInput"
        name="searchFor"
        type="text"
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
      />
      <button onClick={submit}>Search</button>
    </div>
  );
}
