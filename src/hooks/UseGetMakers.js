import { useEffect, useState } from "react";
import axios from "axios";

export default function UseGetMakers(category) {
  const baseURL = "https://compcar-api.onrender.com/api";
  const [categories, setCategories] = useState([]);
  const removeDuplicate = function (arr) {
    return [...new Set(arr)];
  };

  const getCarDatasByCategories = async function (category) {
    try {
      const response = await axios.get(`${baseURL}/car`);
      const carArr = response?.data.map((car) => {
        return car[category];
      });
      const filteredCategories = removeDuplicate(carArr);
      setCategories(filteredCategories.sort());
      setCategories(filteredCategories.filter((item) => item !== ""));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCarDatasByCategories(category);
  }, []);

  return categories;
}
