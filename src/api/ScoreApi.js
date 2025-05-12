import axios from "axios";

const KH_DOMAIN = "http://localhost:8086";

const ScoreApi = {
  scoreList: async (memberId, page, size, sort, keyword) => {
    const pages = {
      memberId: memberId,
      page: page,
      size: size,
      sortBy: sort,
      keyword: keyword,
    };
    console.log(pages);
    return await axios.post(`${KH_DOMAIN}/score/list`, pages);
  },

  bestScore: async (id) => {
    return await axios.get(`${KH_DOMAIN}/score/bestScore?id=${id}`);
  },
  //랭킹 순위
  rank: async () => {
    return await axios.get(`${KH_DOMAIN}/score/rank`);
  },
};
export default ScoreApi;
