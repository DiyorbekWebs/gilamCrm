import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import UseInput from "../../hooks/useInput";
import axios from "axios";
const Box = styled.div`
  padding: 40px 0px 215px 0px;
`;
const Div = styled.div`
  background-color: #fff;
`;
const LinkH = styled(Link)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #282828;
  opacity: 0.5;
`;
const Path = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
  margin-bottom: 70px;
`;
const LinkS = styled(Link)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #f8501a;
`;
const Bottom = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Text = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #282828;
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
`;
const Input = styled.input`
  height: 78px;
  width: 400px;
  background: #ffffff;
  border: 1px solid transparent;
  border-bottom-color: #c9cfd8;
  outline: none;
  @media screen and (max-width: 430px) {
    width: 330px;
  }
  @media screen and (max-width: 361px) {
    width: 300px;
  }
`;
const Texts = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
const LinkForgetPassword = styled(Link)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #2b9ef1;
`;
const SignUp = styled(LinkForgetPassword)`
  color: #f8501a;
`;
const Btn = styled.button`
  padding: 15px 32px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  color: #f8501a;
  border-radius: 100px;
  border: 2px solid #f8501a;
  background-color: transparent;
  cursor: pointer;
`;
const Forma = styled(Texts)`
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
`;
const Login = () => {
  const obj = {
    login: "",
    password: "",
  };
  const { value, changeValue } = UseInput(obj);
  const submit = () => {
    axios
      .post(`${process.env["REACT_APP_URL_ENV"]}auth/login`, value, {
        withCredentials: true,
      })
      .then(function (response) {
        console.log(response);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("token", JSON.stringify(response));
        console.log(response.data);
        document.cookie=response.accessToken
        document.cookie=response.refreshToken
        if (response.data) {

          alert("Kirishingiz mumkin!");
          window.location.href = "/home";
        } else {
          alert("login topilmadi");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <Div>
      <div className="container">
        <Box>
          <Path>
            <LinkH>Главная //</LinkH>
            <LinkS>Войти</LinkS>
          </Path>
          <Bottom>
            <Forma>
              <Text>Войти</Text>
              <Form>
                <Input
                  placeholder="Телефони или имя пользователья"
                  name="login"
                  type="text"
                  onChange={changeValue}
                ></Input>
                <Input
                  placeholder="Пароль"
                  name="password"
                  type="password"
                  onChange={changeValue}
                  style={{ marginBottom: "50px" }}
                ></Input>
                <Texts style={{ marginBottom: "40px" }}>
                  <LinkForgetPassword to={"#"}>
                    Забыли пароль?
                  </LinkForgetPassword>
                  <SignUp to={"/signup"}>Зарегистрироваться</SignUp>
                </Texts>
                <Btn onClick={() => submit()}>Войти в аккаунт</Btn>
              </Form>
            </Forma>
          </Bottom>
        </Box>
      </div>
    </Div>
  );
};

export default Login;
