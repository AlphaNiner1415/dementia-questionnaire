/** @jsx jsx */
import { jsx } from "@emotion/core";
import { ThemeObject } from "./ThemeProvider";

export default ({ text }: any) => (
  <div>
    <div
      css={(t: ThemeObject) => ({
        padding: t.spaces[4],
        margin: `0 ${t.spaces[4]}px`,
        marginBottom: t.spaces[5],
        borderRadius: "6px",
        // border: "1px solid #eee",
        boxShadow:
          "0 2px 4px -2px rgba(0,0,0,0.2), 0 5px 20px -5px rgba(0,0,0,0.01)",
        background: "white",
        display: "flex",
        flexDirection: "column"
      })}
    >
      <p css={{ fontSize: "0.8rem", opacity: 0.75 }}>การประเมินผลและข้อแนะนำ</p>
      <h2
        css={(t: ThemeObject) => ({
          marginTop: t.spaces[1],
          fontSize: "1.25rem",
          fontWeight: 600
        })}
      >
        {text}
      </h2>
    </div>
  </div>
);
