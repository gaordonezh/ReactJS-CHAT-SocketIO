// ----------------------------------------------------------------------

import { ThemeProps } from "interfaces";

export default function Paper(theme: ThemeProps) {
  return {
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },

      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  };
}
