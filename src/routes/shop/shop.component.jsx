import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { fetchCategoriesAsync } from "../../store/categories/category.action";
import { fetchCategoriesStart } from "../../store/categories/category.action";
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart()); //Used for Sagas
    // dispatch(fetchCategoriesAsync(/*dispatch*/)); //Used for Thunks
    //I passed dispatch to the thunk action to jump start it. I think persist  is holdiong onto that and the top line should be uncommented
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
export default Shop;
