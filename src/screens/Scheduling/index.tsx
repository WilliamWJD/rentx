import { StatusBar } from "react-native";
import { useTheme } from "styled-components";

import { BackButton } from "../../components/BackButton";

import ArrowLeSvg from '../../assets/arrow.svg';

import { Container, Title, Header, RentalPeriod, DateInfo, DateTitle, DateValue } from "./styles";

export function Scheduling() {
    const theme = useTheme();

    return (
        <Container>
            <Header>
                <StatusBar
                    barStyle={"light-content"}
                    translucent
                    backgroundColor="transparent"
                />
                <BackButton color={theme.colors.shape} onPress={() => { }} />
                <Title>Escolha uma {'\n'}data de inicio e {'\n'}fim do aluguel</Title>
                <RentalPeriod>
                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue selected={false}></DateValue>
                    </DateInfo>
                    <ArrowLeSvg />
                    <DateInfo>
                        <DateTitle>ATE</DateTitle>
                        <DateValue selected={false}></DateValue>
                    </DateInfo>
                </RentalPeriod>

            </Header>
        </Container>
    )
}