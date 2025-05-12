import axios from "axios";

const KH_DOMAIN = "http://localhost:8086";

const MemberApi = {
  //로그인인
  login: async (email, password) => {
    const login = { email, password };
    return await axios.post(`${KH_DOMAIN}/auth/login`, login);
  },
  //회원가입
  join: async (email, password, names, birth) => {
    const member = {
      email: email,
      password: password,
      name: names,
      birth: birth,
    };
    return await axios.post(`${KH_DOMAIN}/auth/join`, member);
  },

  //내 정보
  detail: async (id) => {
    return await axios.get(`${KH_DOMAIN}/member/detail/${id}`);
  },

  //정보수정(이름,생년월일)
  update: async (user) => {
    return await axios.put(`${KH_DOMAIN}/member/update`, user);
  },
};

export default MemberApi;
