import React, { HTMLAttributes } from 'react';
import * as Styled from './Card.styled';

interface CardProps extends HTMLAttributes<HTMLElement> {
    image: string,
    name: string,
    details: string
}

export const Card: React.FC<CardProps> = ({ image, name, details, className }) => {
    return (
        <Styled.Card className={ className }>
            <Styled.Image src={ image } alt="" />

            <Styled.Title>{ name }</Styled.Title>

            <Styled.Details>{ details }</Styled.Details>
        </Styled.Card>
    );
};
