import React, { useRef, useState } from "react";
import { styled } from "styled-components";
import { Img } from "../../assets/img/img";
import { Btn } from "../../components/Login/Confirmation";
import UseInput from "../../hooks/useInput";
import { ProfilGet, ProfillUpdate } from "../../service/profil";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Box = styled.div`
  display: flex;
  gap: 40px;
  @media screen and (max-width: 430px) {
    flex-direction: column;
  }
`;
const ImageContainer = styled.label`
  position: relative;
  display: inline-block; /* Allow positioning of overlay */
  border-radius: 91.5px;
  border: 1px solid rgba(204, 204, 204, 0.8);
  background: rgba(234, 234, 234, 0.6);
  background-size: cover;
  cursor: pointer;
  transition: 0.2s;
  &:hover::before {
    content: "edit";
    width: 100%;
    border-radius: 91.5px;
    height: 100%;
    background: #0000001b;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    padding-top: 50px;
  }

  img {
    max-width: 100px;
    cursor: pointer;
    display: block;
    margin: 0 auto;
  }
`;
const DivImg = styled.img`
  width: 100px;
  border-radius: 91.5px;
  border: 1px solid rgba(204, 204, 204, 0.8);
  height: 100px;
  background-size: cover;
  cursor: pointer;
`;
const Right = styled(Box)`
  gap: 68px;
  flex-direction: column;
`;
const Users = styled(Right)`
  gap: 9px;
`;
const Text = styled.h5`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #282828;
`;
const SignUp = styled(Text)`
  font-size: 12px;
  display: flex;
  gap: 5px;
  color: rgba(40, 40, 40, 0.4);
`;
const Date = styled.p`
  color: #000;
  font-size: 14px;
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 83px;
  align-items: flex-start;
`;
const Inputs = styled.div`
  display: flex;
  width: 692px;
  flex-wrap: wrap;
  gap: 24px;
  @media screen and (max-width: 885px) {
    flex-direction: column;
  }
`;
const Input = styled.input`
  height: 60px;
  width: 334px;
  background: #ffffff;
  border: 1px solid transparent;
  border-bottom-color: #c9cfd8;
  outline: none;
  @media screen and (max-width: 430px) {
    width: 300px;
  }
`;
const Profill = () => {
  // Profill start
  const [picture, setPicture] = useState(null);
  const fileInputRef = useRef(null);
  const handlePictureChange = (event) => {
    const file = event.target.files[0];
    setPicture(file);
  };
  const handleClickEdit = () => {
    fileInputRef.current.click();
  };
  // Profill end
  const [data, setData] = React.useState({});
  const user = JSON.parse(localStorage.getItem("user"));
  const { id } = user;
  const obj = {
    firstName: "",
    lastName: "",
    avatar: "",
    email: "",
    phone: "",
  };
  const { value, changeValue } = UseInput(data);
  React.useEffect(() => {
    ProfilGet(id).then((res) => {
      setData(res);
    });
  }, []);
  const send = () => {
    ProfillUpdate(id, value).then((res) => {
      try {
        if (res.status === 200) {
          toast.success("Ссылка успешно изменена!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      } catch (error) {
        console.log("eror");
      }
    });
  };

  return (
    <Box>
      <div>
        <div>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          {/* Same as */}
          <ToastContainer />
        </div>

        <ImageContainer onClick={handleClickEdit}>
          {picture ? (
            <DivImg src={URL.createObjectURL(picture)} alt="Profile" />
          ) : (
            <DivImg src={Img} alt="Default" />
          )}
        </ImageContainer>
        <input
          type="file"
          accept="image/*"
          onChange={handlePictureChange}
          style={{ display: "none" }}
          ref={fileInputRef}
        />
      </div>
      <Right>
        <Users>
          {/* <Text>{firstName}</Text> */}
          <SignUp>
            Регистрировани в: <Date>12.04.2023</Date>
          </SignUp>
        </Users>
        <Form>
          <Inputs>
            <Input
              placeholder="Имя"
              name="firstName"
              id="name"
              defaultValue={data.firstName}
              type="text"
              onChange={changeValue}
            />
            <Input
              placeholder="Адрес электронной почты "
              name="email"
              id="mail"
              type="text"
              defaultValue={data.email}
              onChange={changeValue}
            />
            <Input
              placeholder="Фамилия"
              name="lastName"
              id="surname"
              type="text"
              defaultValue={data.lastName}
              onChange={changeValue}
            />
            <Input
              placeholder="Номер телефона "
              name="phone"
              id="phone"
              type="text"
              defaultValue={data.phone}
              onChange={changeValue}
            />
          </Inputs>
          <Btn onClick={() => send()}>Сохранить изменения</Btn>
        </Form>
      </Right>
    </Box>
  );
};

export default Profill;
