import Select from "react-select";
import styled from "styled-components";

const options: any = [
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

export default function Categories() {
  return (
    <CategoriesFilter>
      <label>
        Filter by categories
        <Select options={options} />
      </label>
    </CategoriesFilter>
  );
}
