/** @jsx jsx */
import { jsx } from "@emotion/core";
import Select from "./Select";
import { ThemeObject } from "./ThemeProvider";

interface QuestionProps {
  item: any;
  onChange: Function;
}

export default ({ item, onChange }: QuestionProps) => {
  return (
    <div
      css={(t: ThemeObject) => ({
        padding: t.spaces[4],
        margin: `0 ${t.spaces[4]}px`,
        marginBottom: t.spaces[4],
        borderRadius: "6px",
        // border: "1px solid #eee",
        boxShadow:
          "0 2px 4px -2px rgba(0,0,0,0.2), 0 5px 20px -5px rgba(0,0,0,0.01)",
        background: "white",
        display: "flex",
        flexDirection: "column"
      })}
    >
      <div css={{ display: "flex" }}>
        <div
          css={(t: ThemeObject) => ({
            width: "30px",
            height: "30px",
            background: t.colors.primary,
            borderRadius: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: t.spaces[4],
            flexShrink: 0
          })}
        >
          <span
            css={{
              color: "white",
              fontSize: "0.8rem",
              lineHeight: "1",
              fontWeight: 600
            }}
          >
            {item.order}
          </span>
        </div>
        <div>
          {item.question}
          <div css={(t: ThemeObject) => ({ marginTop: t.spaces[2] })}>
            <Select onChange={(v: any) => onChange(v)} order={item.order} />
          </div>
        </div>
      </div>
    </div>
  );
};
