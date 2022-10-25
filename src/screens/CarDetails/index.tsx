import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Acessory } from "../../components/Acessory";
import { Button } from "../../components/Button";

import SpeedSvg from '../../assets/speed.svg';
import AcelerationSvg from '../../assets/acceleration.svg';
import ForceSvg from '../../assets/force.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import PeopleSvg from '../../assets/people.svg';

import { Container, Header, CarImages, Content, Details, Description, Brand, Name, Rent, Period, Price, About, Acessories, Footer } from "./styles";

export function CarDetails() {
    return (
        <Container>
            <Header>
                <BackButton onPress={() => { }} />
            </Header>
            <CarImages>
                <ImageSlider
                    imagesUrl={['https://www.pngmart.com/files/1/Audi-RS5-Red-PNG.png']}
                />
            </CarImages>
            <Content>
                <Details>
                    <Description>
                        <Brand>Audi</Brand>
                        <Name>Audo RS5</Name>
                    </Description>

                    <Rent>
                        <Period>Ao dia</Period>
                        <Price>R$ 580</Price>
                    </Rent>
                </Details>

                <Acessories>
                    <Acessory name="380 Km/h" icon={SpeedSvg} />
                    <Acessory name="3.2s" icon={AcelerationSvg} />
                    <Acessory name="800 HP" icon={ForceSvg} />
                    <Acessory name="Gasolina" icon={GasolineSvg} />
                    <Acessory name="Auto" icon={ExchangeSvg} />
                    <Acessory name="4 Pessoas" icon={PeopleSvg} />
                </Acessories>

                <About>
                    A personificação do mais puro dinamismo: uma parte frontal impressionante, que transborda potência, em conjunto com as linhas de fluxo exclusivas, uma postura ampla e dominante, assim como uma traseira impressionante. Impulsionado por um V6 Biturbo, com 450 CV.
                </About>
            </Content>
            <Footer>
                <Button title="Confirmar" onPress={() => { }} />
            </Footer>
        </Container>
    )
}