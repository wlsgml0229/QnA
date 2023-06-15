const TOKEN_KEY = 'user_id';
type tokenType = {
  set: Function;
  remove: Function;
  get: Function;
};
export const userStorage: tokenType = {
  set: (token: string) => {
    localStorage.setItem(TOKEN_KEY, token);
  },
  remove: () => {
    localStorage.removeItem(TOKEN_KEY);
  },
  get: () => {
    if (typeof window !== 'undefined') {
      // Perform localStorage action
      return localStorage.getItem(TOKEN_KEY);
    }
  },
};
