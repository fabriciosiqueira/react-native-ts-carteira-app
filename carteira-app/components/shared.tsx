import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import theme from '../src/global/styles/theme';

export const Container = styled.View`
    flex:1;
    align-items: center;
    background-color: ${theme.colors.white}
`

export const ScreenWidth = Dimensions.get("screen").width
export const ScreenWHeight = Dimensions.get("screen").height