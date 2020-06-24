export const SEARCH_TOGGLER = 'SEARCH_TOGGLER';
export const SORT_TOGGLER = 'SORT_TOGGLER';

interface ISortToggler {
  type: typeof SORT_TOGGLER;
  payload: string;
}

interface ISearchToggler {
  type: typeof SEARCH_TOGGLER;
  payload: string;
}

export function sortToggler(payload: string) {
  return {
    type: SORT_TOGGLER,
    payload: payload,
  };
}

export function searchToggler(payload: string) {
  return {
    type: SEARCH_TOGGLER,
    payload: payload,
  };
}

export type TogglerActionType = ISearchToggler | ISortToggler;
