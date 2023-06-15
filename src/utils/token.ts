const TOKEN_KEY = 'my_app_token';
type tokenType = {
  access: Function;
  set: Function;
  remove: Function;
};
export const token: tokenType = {
  access: () => {
    return localStorage.getItem(TOKEN_KEY);
  },
  set: (token: string) => {
    localStorage.setItem(TOKEN_KEY, token);
  },
  remove: () => {
    localStorage.removeItem(TOKEN_KEY);
  },
};

