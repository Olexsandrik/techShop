import { Input } from "../Input";
import { SelectSorting } from "../SelectSorting"; 
import "./index.css";

interface TypeSort {
  type: string;
}
type headerProps = {
  logo: string;
  search: string;
  handlerInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  typeSorting: TypeSort;
  handlerSelectTypeSorting: (value: string) => void;
};

export const Header: React.FC<headerProps> = (props) => {
  return (
    <div className="header">
      <a className="logo" href="logo">
        {props.logo}
      </a>

      <div className="input-price-wrapper">
        <Input
          onChange={props.handlerInput}
          name={"catalog"}
          value={props.search}
          type={"text"}
        />

        <SelectSorting
          typeSorting={props.typeSorting}
          handlerSelectTypeSorting={props.handlerSelectTypeSorting}
        />
      </div>
    </div>
  );
};
