import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
const Box = styled.div`
  padding: 40px 0px 215px 0px;
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
const Form = styled.form`
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
const Texts2 = styled(Texts)`
  flex-direction: column;
  gap: 15px;
  align-items: flex-start;
`;
const Text2 = styled(Text)`
  font-size: 12px;
`;
const Confirm = () => {
  const [tel,setTel]=React.useState('+998')
  return (
    <div>
      <div className="container">
        <Box>
          <Path>
            <LinkH>Главная //</LinkH>
            <LinkH>Регистрация //</LinkH>
            <LinkS>Подтверждение</LinkS>
          </Path>
          <Bottom>
            <Forma>
              <Texts2>
                <Text>Подтверждение</Text>
                <Text2>Продолжить регистрацию</Text2>
              </Texts2>
              <Form>
                <Input
                  placeholder="Телефони "
                  name="number"
                  type="text"
                  value={tel}
                  onChange={(e)=>setTel(e.target.value)}
                  style={{ marginBottom: "50px" }}
                ></Input>

                <Texts style={{ marginBottom: "40px" }}>
                  <SignUp to={"#"}>Другой номер</SignUp>
                </Texts>
                <Btn>Продолжить регистрацию</Btn>
              </Form>
            </Forma>
          </Bottom>
        </Box>
      </div>
    </div>
  );
};

export default Confirm;
