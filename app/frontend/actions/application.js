export const LOADING_IS_TRUE  = Symbol('LOADING_IS_TRUE');
export const LOADING_IS_FALSE = Symbol('LOADING_IS_FALSE');
export const PAGE_DATA_PURGE  = Symbol('PAGE_DATA_PURGE');

export function updateIsLoading(value) {
  return {
    type   : value ? LOADING_IS_TRUE : LOADING_IS_FALSE,
    payload: {
      isLoading: value
    }
  };
}