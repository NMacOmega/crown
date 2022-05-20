import { AnyAction } from "redux";
// Not needed when using Matchable overload in reducer utils import { CATEGORY_ACTION_TYPES } from "./category.types";
import { Category } from "./category.types";
import { fetchCategoriesStart, fetchCategoriesSuccess, fetchCategoriesFailed } from "./category.action";

export type CategoriesState = {
  readonly categories: Category[];
  readonly isLoading: boolean;
  readonly error: Error | null; 
};

export const CATEGORIES_INITIAL_STATE: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {} as AnyAction // To the right is the Common way in Redux with Typescript but not very robust -→ {} as CategoryAction //Discriminatory Union in Typescript
): CategoriesState => {

 if(fetchCategoriesStart.match(action)){
    return { ...state, isLoading: true };
 }

 if(fetchCategoriesSuccess.match(action)){
  return {
    ...state,
    categories: action.payload,
    isLoading: false,
  };
 }

 if(fetchCategoriesFailed.match(action)){
  return { ...state, error: action.payload, isLoading: false };
 }

 return state;


//Non-Typescript version. Not type safe
  // switch (action.type) {
  //   case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START:
  //     return { ...state, isLoading: true };

  //   case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      // return {
      //   ...state,
      //   categories: action.payload,
      //   isLoading: false,
      // };

  //   case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
  //     return { ...state, error: action.payload, isLoading: false };

  //   default:
  //     return state;
  //}
};
