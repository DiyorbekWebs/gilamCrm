import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import styled from "styled-components";
import "./index.css";
import { tabs } from "../../constant/tabs";
import { Cards1 } from "../../constant/cards";
import Card from "./Card";
const Content = styled.div`
  padding: 85px 0px 96px 0px;
`;
const Tabss = styled(Tabs)`
  display: flex;
  flex-direction: column;
  gap: 70px;
  align-items: center;
`;
const TabListt = styled(TabList)`
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
const TabPanell = styled(TabPanel)`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const Tab1 = styled(Tab)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 34px;
  color: #282a2c;
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
  return (
    <Content>
      <div className="container">
        <Box>
          <Tabss>
            <TabListt>
              {tabs?.map((e) => (
                <Tab1 key={e.id}>{e.text}</Tab1>
              ))}
            </TabListt>
            <TabPanell>
              {Cards1?.map((e) => (
                <Card key={e.id} img={e.img} t1={e.text1} t2={e.text2} />
              ))}
            </TabPanell>
            <TabPanell>
              {Cards1?.map((e) => (
                <Card key={e.id} img={e.img} t1={e.text1} t2={e.text2} />
              ))}
            </TabPanell>
          </Tabss>
          <Btn>Посмотреть все</Btn>
        </Box>
      </div>
    </Content>
  );
}
