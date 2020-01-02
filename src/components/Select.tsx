/** @jsx jsx */
import { jsx } from "@emotion/core";
import Select, { ValueType } from "react-select";

const options = [
  { value: "D", label: "รายวัน" },
  { value: "W", label: "รายสัปดาห์" },
  { value: "M", label: "รายเดือน" },
  { value: "Y", label: "รายปี" }
];

interface SelectProps {
  order: number;
  onChange: Function;
}

export default ({ order, onChange }: SelectProps) => {
  const handleSelectChange = (
    e: ValueType<{ value: string; label: string }>
  ) => {
    // @ts-ignore
    onChange({ order, value: e.value });
  };
  return (
    <Select
      onChange={v => handleSelectChange(v)}
      isSearchable={false}
      css={{ width: "150px" }}
      options={options}
    />
  );
};
