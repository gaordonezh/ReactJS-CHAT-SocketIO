// ----------------------------------------------------------------------
import { ThemeProps } from "interfaces";

export default function Autocomplete(theme: ThemeProps) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: theme.customShadows.z20,
        },
      },
    },
  };
}
