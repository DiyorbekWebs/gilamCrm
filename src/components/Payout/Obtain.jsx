import React from "react";
import { styled } from "styled-components";
import { Num3 } from "../../assets/img/img";
const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const Div = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 16px;
`;
const Img1 = styled.img`
  width: 30px;
  height: 30px;
`;
const Text1 = styled.p`
  font-family: Inter;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
`;
const Div2 = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-end;
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;
const Radios = styled.label`
  display: flex;
  width: 400px;
  padding: 0px 0px 0px 30px;
  height: 64px;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid #f8501e;
`;
const Radio = styled.input`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  color: #f8501e;
  accent-color: #f8501e;

  background-color: #f8501e !important;
`;
const Text2 = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
`;
const Text3 = styled(Text2)`
  font-size: 16px;
`;
const Selects = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
const Select = styled.select`
  width: 400px;
  padding: 20px 30px;
  border-radius: 8px;
  border: 1px solid #d8d8d8;
  box-shadow: 0px 0px 0px 0px #fbc100;
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
`;
const Div3 = styled.div`
  display: flex;
  width: 790px;
  padding: 20px 30px;
  justify-content: space-between;
  align-items: center;
  font-family: Inter;
  font-size: 14px;
  border-radius: 8px;
  border: 1px solid #d8d8d8;
  box-shadow: 0px 0px 0px 0px #fbc100;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
`;
const Obtain = () => {
  return (
    <Box>
      <Top>
        <Div>
          <Img1 src={Num3} />
          <Text1>Способ получения</Text1>
        </Div>
        <Div2>
          <Radios>
            <Radio type="radio" name={"a"} />
            <Text2>Доставка</Text2>
          </Radios>
          <Radios>
            <Radio type="radio" name={"a"} />
            <Text2>Самовывоз из магазина</Text2>
          </Radios>
        </Div2>
        <Div2>
          <Selects>
            <Text3>Город доставки</Text3>
            <Select>
              <option value="">b</option>
              <option value="">c</option>
            </Select>
          </Selects>
          <Selects>
            <Text3>Район</Text3>
            <Select>
              <option value="">b</option>
              <option value="">c</option>
            </Select>
          </Selects>
        </Div2>
      </Top>
      <Bottom>
        <Div2>
          <Selects>
            <Text3>Улица</Text3>
            <Select>
              <option value="">b</option>
              <option value="">c</option>
            </Select>
          </Selects>
          <Selects>
            <Text3>Дом</Text3>
            <Select>
              <option value="">b</option>
              <option value="">c</option>
            </Select>
          </Selects>
        </Div2>
        <Selects>
          <Text3>Комментарий для курьера</Text3>
          <Div3>
            <p>
              Например, куда именно привезти заказ, ближайший адрес или ориентир
            </p>
          </Div3>
        </Selects>
        <Div2>
          <Selects>
            <Text3>Дата и время доставки</Text3>
            <Select>
              <option value="">b</option>
              <option value="">c</option>
            </Select>
          </Selects>
          <Select>
            <option value="">b</option>
            <option value="">c</option>
          </Select>
        </Div2>
      </Bottom>
    </Box>
  );
};

export default Obtain;
