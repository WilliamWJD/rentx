import React from 'react'
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';

import { Container, Header, TotalCar, HeaderContent } from './styles'

export function Home() {
    const carData = {
        brand: "Audi",
        name: "RS 5 Coupé",
        rent: {
            period: "AO DIA",
            price: 120
        },
        thumbnail: 'https://www.pngmart.com/files/1/Audi-RS5-Red-PNG.png'
    }

    const carTwo = {
        brand: "Honda",
        name: "Civic SI",
        rent: {
            period: "AO DIA",
            price: 100
        },
        thumbnail: 'https://www.pngmart.com/files/4/Honda-Civic-PNG-Pic.png'
    }

    return (
        <Container>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <Header>
                <HeaderContent>
                    <Logo
                        width={RFValue(108)}
                        height={RFValue(12)}
                    />
                    <TotalCar>
                        Total  de 12 carros
                    </TotalCar>
                </HeaderContent>
            </Header>

            <Car data={carData} />
            <Car data={carTwo} />
        </Container>
    )
}