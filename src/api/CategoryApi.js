import axios from "axios";

const KH_DOMAIN = "http://localhost:8086";

const CategoryApi = {
  selectCategory: async (select) => {
    return await axios.get(`${KH_DOMAIN}/category/select/${select}`);
  },
  //카테고리별 문제 출제
  exemQuiz: async (id) => {
    return await axios.get(`${KH_DOMAIN}/quiz/exem?category=${id}`);
  },
};
export default CategoryApi;
