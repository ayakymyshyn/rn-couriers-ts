import styled from 'styled-components';

export const HighlightedText = styled.Text`
    background-color: #fff;
    padding: 15,
    border-radius: 15,
    overflow: hidden,
`;

export const Wrapper = styled.View`
    margin: 0 25px;
`;

export const TextContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: ${props => props.width || '100%'};
    margin-bottom: ${props => props.bottomSpacing || 0}
`;

export const OrderDetailsText = styled.Text`
    font-family: "Roboto-Medium";
    margin-bottom: ${props => props.marginBottom || 0}
`;