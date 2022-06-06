import React, { FunctionComponent } from 'react';

import styled from 'styled-components/native';

import theme from '../../src/global/styles/theme';
import { TextProps } from './types';

const StyledText = styled.Text`
    font-size:15px;
    color:${theme.colors.gray};
    text-align:left;
    font-family: Lato-Regular;
`;

const RegularText: FunctionComponent<TextProps> = (props) => {
    return <StyledText style={props.textStyles}>{props.children}</StyledText>
}

export default RegularText;