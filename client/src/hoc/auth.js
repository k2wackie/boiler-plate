import React, { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../_actions/user_action";

const Auth = (SpecificComponent, option, adminRoute = null) => {
  const navigate = useNavigate();
  console.log("auth");
  //option
  //null: 아무나 출입이 가능한 페이지
  //true: 로그인한 유저만 출입이 가능한 페이지
  //false: 로그인한 유저는 출입 불가능한 페이지

  const [isAuth, setIsAuth] = useState(false);

  const AuthenticationCheck = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(auth()).then((res) => {
        setIsAuth(res.payload.isAuth);
        console.log(res, option, isAuth);
        if (!isAuth) {
          if (option) {
            navigate("/login", { replace: true });
          }
        } else {
          if (adminRoute && !res.payload.isAdmin) {
            navigate("/", { replace: true });
          } else {
            if (option === false) {
              navigate("/", { replace: true });
            }
          }
        }
      });
    }, []);
    return <SpecificComponent />;
  };

  return AuthenticationCheck;
};

export default Auth;
// export default React.memo(Auth);
