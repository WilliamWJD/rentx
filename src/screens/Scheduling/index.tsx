import { StatusBar } from "react-native";
import { useTheme } from "styled-components";
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';

import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { Calendar } from "../../components/Calendar";

import ArrowLeSvg from '../../assets/arrow.svg';

import { Container, Title, Header, RentalPeriod, DateInfo, DateTitle, DateValue, Content, Footer } from "./styles";

export function Scheduling() {
    const theme = useTheme();
    const navigation = useNavigation<NavigationProp<ParamListBase>>();

    function handleConfirm() {
        navigation.navigate("SchedulingDetails");
    }

    return (
        <Container>
            <Header>
                <StatusBar
                    barStyle="light-content"
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
            <Content>
                <Calendar />
            </Content>
            <Footer>
                <Button
                    title="Escolher período de aluguel"
                    onPress={handleConfirm}
                />
            </Footer>
        </Container>
    )
}