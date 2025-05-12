import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Myedit.css";
import { QuizContext } from "../../App";
import MemberApi from "../../api/MemberApi";
import MyEditComp from "./MyEditStyle";
import profile from "../../image/kkk.gif";
const MyPageEdit = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState([]);

  // 회원 정보 상태 관리
  // const [name, setName] = useState(user.name);
  // const [birth, setBirth] = useState(user.birth);
  //회원 정보
  const getUser = async () => {
    try {
      const id = sessionStorage.getItem("loginID");
      const rsp = await MemberApi.detail(id);

      setUser(rsp.data);
      // setName(rsp.data.name);
      // setBirth(rsp.data.birth);
    } catch (e) {
      navigate("/error", { state: e.response.data });
    }
  };

  //회원 정보 불러오기
  useEffect(() => {
    getUser();
  }, []);

  //수정 버튼
  const clickUpdate = async () => {
    //로그인 된 유저를 찾아 기존 데이터는 유지하되 닉네임만 입력된 값으로 변경

    const rsp = await MemberApi.update(user);

    if (rsp.status == 200) {
      alert("닉네임이 성공적으로 수정되었습니다.");
      navigate("/myinfo");
    } else {
      navigate("/myedit");
    }
  };
  return (
    <MyEditComp>
      <div className="container">
        <h4>정보수정</h4>
        <div className="inputBox">
          <div className="userImage">
            <div className="imgBox">
              <img src={profile} alt="이미지 미리보기" />
            </div>
            <label>
              <input type="file" />
              <span>이미지 선택</span>
            </label>
          </div>
          <div className="userData">
            <h3>{user.email}</h3>
            <input
              value={user.name}
              placeholder="이름"
              name="name"
              type="text"
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
            <input
              value={user.birth}
              name="birth"
              onChange={(e) => setUser({ ...user, birth: e.target.value })}
              type="date"
            />
            <button onClick={() => clickUpdate()}>수정하기</button>
          </div>
        </div>
      </div>
    </MyEditComp>
  );
};

export default MyPageEdit;
