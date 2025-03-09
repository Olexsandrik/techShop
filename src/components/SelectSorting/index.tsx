import "./index.css";

type TypeSort = {
  type: string;
};
type selectSortingProps = {
  handlerSelectTypeSorting: (value: string) => void;
  typeSorting: TypeSort;
};
export const SelectSorting = (props: selectSortingProps) => {
  return (
    <div className="selectType">
      <label className="labelForSelect" htmlFor="sorting">
        Сортування за:
      </label>
      <select
        id="sorting"
        onChange={(e) => props.handlerSelectTypeSorting(e.target.value)}
      >
        <option value=""></option>
        <option value="min">Мінімальна ціна</option>
        <option value="max">Максимальна ціна</option>
      </select>
    </div>
  );
};
