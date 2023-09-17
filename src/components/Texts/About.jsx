import React from "react";
import { styled } from "styled-components";
import { Logo2 } from "../../assets/img/img";
const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media screen and (max-width: 430px) {
    gap: 15px;

  }
`;
const Img = styled.img`
  width: 150px;
  height: 62px;
`;
const Texts = styled.p`
  width: 893px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Text1 = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 28px;
  color: #282a2c;
  @media screen and (max-width: 430px) {
    width: 400px;
  }
  @media screen and (max-width: 400px) {
    width: 370px;
  }
  @media screen and (max-width: 376px) {
    width: 360px;
  }
  @media screen and (max-width: 361px) {
    width: 345px;
  }
`;
const Text2 = styled(Text1)`
  font-weight: 600;
`;
const About = () => {
  return (
    <Box>
      <Img src={Logo2}></Img>
      <Texts>
        <Text1>
          <Text2>Grm.uz</Text2> - первый интернет-магазин ковровых изделий в
          Узбекистане, представляет покупателям широкий выбор красочных ковров.
          Окунитесь в онлайн мир ковров, выбирайте и приобретайте ограниченные
          экземпляры в лучших восточных и современных традициях. В каждый ковер
          вложена душа мастеров, и все это именно для вас. Ковры прослужат вам
          долгую и отличную службу. Узоры, наносимые на ковры, подойдут как для
          гостиных и спален в вашем доме, так и для офисов.
        </Text1>
        <Text1>
          <Text2>Миссия компании Grm.uz:</Text2> Создание уюта и комфорта,
          экономя время. Ввиду большого количества и разнообразия ковровых
          изделий, вы можете воспользоваться системой поиска по сайту,
          созданного для вашего удобства и экономии времени. Мы прилагаем
          максимум усилий для создания комфорта и пользы для наших клиентов,
          поэтому вы найдете ответы на все интересующие вас вопросы у наших
          экспертов. Наш сервис
        </Text1>
        <Text1>
          Глубокие познания традиций народа, который издревле постиг знания
          применения даров природы для создания шедевров ковроткацкого
          искусства, представляет полную картину о ценности выбранного вами
          ковра. Наш эксперт может рассказать вам о процессе создания ковров. Вы
          почувствуете дыхание вечности в полной мере, зная, что ваш дом
          украшает шедевр. Все консультации и замеры производятся нашими
          специалистами бесплатно. Вы можете оплатить покупку любым удобным для
          вас способом.
        </Text1>
        <Text1>
          Также, мы предоставляем праздничные скидки, устраиваем акции и
          презентации новой коллекции ковров. Следите за новостями на нашем
          сайте и тогда вы сможете даже приобрести шедевр в единственном
          экземпляре.
        </Text1>
      </Texts>
    </Box>
  );
};

export default About;
