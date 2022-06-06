import React, { FunctionComponent } from 'react';

import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';

import background from '../../assets/bgs/Wallet-Phone.jpg';
import { Container } from '../../components/shared';
import BigText from '../../components/Texts/BigText';
import SmallText from '../../components/Texts/SmallText';
import theme from '../global/styles/theme';

const WelcomeContainer = styled(Container)`
    background-color: ${theme.colors.secondary};
    justify-content: space-between;
    width:100%;
    height:100%;
`;

const TopSection = styled.View`
    width:100%;
    flex:1;
    max-height:55%;
`;

const TopImage = styled.Image`
    width:100%;
    height:100%;
    resize-mode: stretch;
`;

const BottomSection = styled.View`
    width:100%;
    flex:1;
    padding:25px;
`;

const Welcome: FunctionComponent = () => {
    return (
        <>
            <StatusBar style="light"/>
            <WelcomeContainer>
                <TopSection>
                    <TopImage source={background} />
                </TopSection>
                <BottomSection>
                    <BigText textStyles={{width:"70%", marginBottom:25}}>
                        Melhor maneira de monitorar seu dinheiro
                    </BigText>
                    <SmallText>
                        Melhor metodo de pagamento, conecte seu dinheiro, seus amigos e familia
                    </SmallText>
                </BottomSection>
            </WelcomeContainer>
        </>
    )
}

export default Welcome

