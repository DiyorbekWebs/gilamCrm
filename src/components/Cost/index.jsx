import React from "react";
import { Price } from "../../constant/Price";
import styled from "styled-components";
const List = styled.ul`
  display: flex;
  gap: 7px;
  @media screen and (max-width: 430px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
  }
`;
const Item = styled.li`
  width: 335px;
  height: 100px;
  background: #ffffff;
  padding: 27px 0px 33px 22px;
  display: flex;
  gap: 7px;
  @media screen and (max-width: 430px) {
    width: 100%;
    align-items: center;

}
`;
const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const T1 = styled.h5`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  display: flex;
  align-items: center;

  color: #282828;
`;
const T2 = styled.p`
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #282828;
  opacity: 0.6;
`;

const Div = styled.div`
  background-color: #f3f1ef;
  padding-bottom: 5px;
`;
const Span = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #f8501a;
`;
export default function Cost() {
  return (
    <Div>
      <div className="container">
        <List>
          {Price?.map((e) => {
            return (
              <>
                <Item key={e.id}>
                  <Span>*</Span>
                  <Texts>
                    <T1>{e.t1}</T1>
                    <T2>{e.t2}</T2>
                  </Texts>
                </Item>
              </>
            );
          })}
        </List>
      </div>
    </Div>
  );
}
