import { useState } from "react";
import { Header } from "../Header/index.js";
import { Cards } from "../Cards/index.js";
import catalog from "../../server/catalog.json";
export function Catalog() {
  const [data] = useState(catalog);

  const [search, setSearch] = useState("");
  const [typeSorting, setTypeSorting] = useState({
    type: "",
  });

  const filterCatalog = data.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  const handlerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handlerSelectTypeSorting = (value: string) => {
    setTypeSorting({ type: value });
  };

  return (
    <>
      <div className="container">
        <Header
          logo={"Logo"}
          search={search}
          handlerInput={handlerInput}
          typeSorting={typeSorting}
          handlerSelectTypeSorting={handlerSelectTypeSorting}
        />

        <Cards data={filterCatalog} typeSorting={typeSorting} />
      </div>
    </>
  );
}
