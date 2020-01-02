/** @jsx jsx */
import { jsx } from "@emotion/core";
import Select, { ValueType } from "react-select";

const options = [
  { value: "D", label: "เกิดทุกวัน" },
  { value: "W", label: "เกิดบ่อยทุกสัปดาห์" },
  { value: "M", label: "เกิด 2-3 ครั้งต่อเดือน" },
  { value: "Y", label: "เกิดนาน ๆ ครั้งใน 1 ปี / ไม่เคยเกิดขึ้นเลย" }
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
      css={{ width: "100%", maxWidth: "300px" }}
      options={options}
    />
  );
};
