import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocument } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
  categories: {},
  setCategories: () => {},
});

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState({});
  const value = { categories, setCategories };
  console.log("CategoriesProvider");

  useEffect(() => {
    (async () => {
      const result = await getCategoriesAndDocument();
      setCategories(result);
    })();
  }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
