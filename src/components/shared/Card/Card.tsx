import React from 'react';
import * as Styled from './Card.styled';

interface CardProps {
    image: string,
    name: string,
    details: string
}

export const Card: React.FC<CardProps> = ({ image, name, details }) => {
    return (
        <Styled.Card>
            <Styled.Image src={ image } alt="" />

            <Styled.Title>{ name }</Styled.Title>

            <Styled.Details>{ details }</Styled.Details>
        </Styled.Card>
    );
};
