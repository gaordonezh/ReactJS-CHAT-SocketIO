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

export interface UserProps {
  f_name?: string;
  l_name?: string;
  username?: string;
  email?: string;
  room?: string;
  profile_picture?: string;
  _id?: string;
}

export interface ContextProps {
  user: UserProps;
  setUser: Function;
  generalKEY: string;
}

export interface UseFormProps {
  handleSubmit: Function;
  register: Function;
  formState: { errors: any };
}

export interface MessageProps {
  _id?: string;
  content?: string;
  sender?: string;
}

export interface CustomProps {
  spacing: number;
  height: string;
  receiver: UserProps;
  setReceiver: Function;
}
