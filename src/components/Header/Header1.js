import styled from "styled-components";

const Headerr = styled.header`
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;
const Top = styled.div`
  padding: 8px 0px;
  display: flex;
  justify-content: space-between;
`;
const Right = styled.ul`
  display: flex;
  align-items: center;
  gap: 15px;
`;
const Item1 = styled.li`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #0f2e4a;
`;
const Item2 = styled.li`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #0f2e4a;
  opacity: 0.6;
`;
const Left = styled.ul`
  display: flex;
  align-items: center;
  gap: 28px;
`;
const Texts1 = styled.ul`
  display: flex;
  align-items: center;
  gap: 13px;
`;
const Texts2 = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Bottom = styled.div`
  padding: 12px 280px 16px 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1537px) {
    gap: 130px;
    padding: 12px 280px 16px 30px;
  } ;
`;
const Logo = styled.div``;
const Left2 = styled.div`
  display: flex;
  align-items: center;
  gap: 90px;
  @media screen and (max-width: 1537px) {
    gap: 65px;
  } ;
`;

const Catalog = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const Button = styled.div`
  padding: 16px 26px 16px 16px;
  background: #f8501a;
  border: 1px solid rgba(255, 106, 58, 0.1);
  border-radius: 4px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  @media screen and (max-width: 1537px) {
    padding: 16px 0px 16px 10px;
    font-size: 13px;
    width: 170px;
  } ;
`;
const SearchPanel = styled.div`
  width: 400px;
  padding: 15px 17px;
  background: #f3f5f6;
  border-radius: 4px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1537px) {
    width: 290px;
  } ;
`;
const Input = styled.input`
  width: 100%;
  border: none;
  background: transparent;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
  color: #0f2e4a;
  outline: none;
`;
const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
  @media screen and (max-width: 1537px) {
    gap: 20px;
  } ;
`;
const Item = styled.li`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  color: #0f2e4a;
  cursor: pointer;
`;
const Btns = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;
const Btn2 = styled.div`
  padding: 14px 15px;
  background: #f3f5f6;
  border-radius: 4px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Part1 = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  @media screen and (max-width: 1537px) {
    gap: 25px;
  } ;
`;
export {
  Part1,
  Btn2,
  Btns,
  Headerr,
  Left,
  Right,
  Top,
  Item1,
  Item2,
  Texts1,
  Texts2,
  Bottom,
  Logo,
  Left2,
  Catalog,
  Button,
  SearchPanel,
  Input,
  Item,
  List,
};
