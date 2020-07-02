import { SEARCH_TOGGLER, SORT_TOGGLER, TogglerActionType } from '../actions/togglerActions';

type stateType = {
  sortBy: string;
  searchBy: string;
};

const initialState: stateType = {
  sortBy: 'release_date',
  searchBy: 'title',
};

export function togglerReducer(state = initialState, action: TogglerActionType) {
  switch (action.type) {
    case SEARCH_TOGGLER:
      return {
        ...state,
        searchBy: action.payload,
      };
    case SORT_TOGGLER:
      return {
        ...state,
        sortBy: action.payload,
      };
    default:
      return state;
  }
}

export const getSearch = (state: stateType) => state.searchBy;
export const getSort = (state: stateType) => state.sortBy;
