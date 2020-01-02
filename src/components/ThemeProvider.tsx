import { Global } from "@emotion/core";
import { ThemeProvider as Provider } from "emotion-theming";
import React, { ReactNode } from "react";

export interface ThemeObject {
  colors: {
    primary: string;
  };
  spaces: Record<number, number>;
}

const THEME: ThemeObject = {
  colors: {
    primary: "#CE9077"
  },
  spaces: {
    [0]: 0,
    [1]: 5,
    [2]: 10,
    [3]: 15,
    [4]: 20,
    [5]: 40,
    [6]: 80,
    [7]: 160,
    [8]: 320
  }
};

interface ThemeProviderProps {
  children?: ReactNode;
}

export default ({ children }: ThemeProviderProps) => (
  <Provider theme={THEME}>
    <Global
      styles={{
        "*": {
          WebkitFontSmoothing: "antialiased"
        },
        html: {
          fontSize: "16px"
        },
        body: {
          fontFamily: "Sarabun",
          background: "#f8f8f8"
        }
      }}
    />
    {children}
  </Provider>
);
