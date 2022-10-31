import { useNavigation, ParamListBase, NavigationProp, useRoute } from '@react-navigation/native';

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
import { StatusBar } from 'react-native';
import { CarDTO } from '../../dtos/CarDTO';

interface Params {
    car: CarDTO;
}

export function CarDetails() {
    const navigation = useNavigation<NavigationProp<ParamListBase>>();
    const route = useRoute();

    const { car } = route.params as Params;

    function handleConfirmRental() {
        navigation.navigate("Scheduling");
    }

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <Container>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <Header>
                <BackButton onPress={handleGoBack} />
            </Header>
            <CarImages>
                <ImageSlider
                    imagesUrl={car.photos}
                />
            </CarImages>
            <Content>
                <Details>
                    <Description>
                        <Brand>{car.brand}</Brand>
                        <Name>{car.name}</Name>
                    </Description>

                    <Rent>
                        <Period>{car.rent.period}</Period>
                        <Price>R$ {car.rent.price}</Price>
                    </Rent>
                </Details>

                <Acessories>
                    {
                        car.accessories.map(acessory => (
                            <Acessory
                                key={acessory.type}
                                name={acessory.name}
                                icon={SpeedSvg}
                            />
                        ))
                    }
                </Acessories>

                <About>{car.about}</About>
            </Content>
            <Footer>
                <Button title="Confirmar" onPress={handleConfirmRental} />
            </Footer>
        </Container>
    )
}