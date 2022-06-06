import React, { FunctionComponent } from 'react';

import styled from 'styled-components/native';

import theme from '../../src/global/styles/theme';
import { TextProps } from './types';

const StyledText = styled.Text`
    font-size:37px;
    color:${theme.colors.white};
    text-align:left;
    font-family: Lato-Bold;
`;

const BigText: FunctionComponent<TextProps> = (props) => {
    return <StyledText style={props.textStyles}>{props.children}</StyledText>
}

export default BigText;