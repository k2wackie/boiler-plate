import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  const onClickHandler = () => {
    axios.get("./api/user/logout").then((res) => {
      if (res.data.success) {
        navigate("/login");
      } else {
        alert("로그아웃을 실패 했습니다.");
      }
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "10vh",
      }}
    >
      <h2>시작 페이지</h2>
      <button onClick={onClickHandler}>로그아웃</button>
    </div>
  );
}

export default React.memo(LandingPage);
