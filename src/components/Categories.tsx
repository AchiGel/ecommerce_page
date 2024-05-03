import { useState } from "react";
import Select from "react-select";
import styled from "styled-components";

interface Option {
  value: string;
  label: string;
}

interface CategoryProps {
  filterCategories: Function;
}

const options: Option[] = [
  { value: "all", label: "All" },
  { value: "chair", label: "Chair" },
  { value: "sofa", label: "Sofa" },
  { value: "table", label: "Table" },
  { value: "mirror", label: "Mirror" },
  { value: "shelf", label: "Shelf" },
  { value: "ottoman", label: "Ottoman" },
  { value: "lamp", label: "Lamp" },
];

const CategoriesFilter = styled.div`
  margin-top: 50px;
`;

export default function Categories(props: CategoryProps) {
  const [value, setValue] = useState<Option | null>(null);

  return (
    <CategoriesFilter>
      <label>
        Filter by categories
        <Select
          value={value}
          options={options}
          onChange={(selectedOption) => {
            setValue(selectedOption);
            if (props.filterCategories) {
              props.filterCategories(
                selectedOption ? selectedOption.value : null
              );
            }
          }}
        />
      </label>
    </CategoriesFilter>
  );
}
