import styled from 'styled-components';
import { Card as UnstyledCard } from './components/shared/Card';

export const AppContainer = styled.div``;

export const Main = styled.main``;

// El componente que va a ser re estilizado, debe contener la prop className y pasarlo a su styledComponent principal (el contenedor)
export const Card = styled(UnstyledCard)`
  margin: 50px auto;
`;