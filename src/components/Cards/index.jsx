import React from "react";
import styled from "styled-components";
import "./index.css";
import Card from "./Card";
import { CollectionGet } from "../../service/collection";
const Content = styled.div`
  padding: 85px 0px 96px 0px;
`;
const Tabss = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  align-items: center;
`;
const TabListt = styled.ul`
  display: flex;
  gap: 41px;
  border: none !important;
  align-items: center;
  @media screen and (max-width: 1281px) {
    gap: 28px;
  }
  @media screen and (max-width: 885px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 430px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;
const TabPanell = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const Tab1 = styled.li`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 34px;
  color: #282a2c;
  cursor: pointer;
  @media screen and (max-width: 1281px) {
    font-size: 25px;
  }
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 75px;
  @media screen and (max-width: 1281px) {
    gap: 20px;
  }
`;
const Btn = styled.div`
  border: 1px solid #dfe1e9;
  border-radius: 4px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  padding: 13px 0px;
  color: #282828;
`;
export default function Cards() {
  const [data, setData] = React.useState([]);
  const [cards, setCards] = React.useState([]);
  async function getInfo() {
    await CollectionGet().then((res) => setData(res.items));
  }
  console.log(data);
  React.useEffect(() => {
    getInfo();
  }, []);
  return (
    <Content>
      <div className="container">
        <Box>
          <Tabss>
            <TabListt>
              {data?.map((e) => (
                <Tab1 key={e.id} onClick={() => setCards(e.model)}>
                  {e.title}
                </Tab1>
              ))}
            </TabListt>
            {/* <TabPanell>
              {value?.map((e) => (
                <Card
                  key={e.id}
                  id={e.id}
                  img={e.imgUrl}
                  t1={e.model.collection.title}
                  t2={e.model.title}
                />
              ))}
            </TabPanell> */}
            {/*<TabPanell>*/}
            {/*  {Cards1?.map((e) => (*/}
            {/*    <Card key={e.id} img={e.img} t1={e.text1} t2={e.text2} />*/}
            {/*  ))}*/}
            {/*</TabPanell>*/}
          </Tabss>
          <Btn>Посмотреть все</Btn>
        </Box>
      </div>
    </Content>
  );
}
