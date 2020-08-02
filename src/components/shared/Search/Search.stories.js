import React from 'react';
import { Search } from './Search';
// import { theme } from '../Theme';

export default {
    title: 'Shared/Search',
    component: Search,
};

export const Normal = () => (
    <Search placeholder='Ingrese placeholder' >Conectarse</Search>
);