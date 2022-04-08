export interface ThemeProps {
  customShadows: {
    z20: string;
    z8: string;
    z16: string;
    primary: string;
    secondary: string;
  };
  palette: {
    grey: any;
    action: {
      hover: string;
      focus: string;
      disabledBackground: boolean;
    };
    text: {
      disabled: boolean;
    };
  };
  shape: {
    borderRadiusMd: string;
  };
  spacing: Function;
}

export interface ContextProps {
  user: { f_name?: string; l_name?: string; username?: string; _id?: string };
  setUser: Function;
}
