import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from './Button';
import { theme } from '../Theme';

export default {
    title: 'Shared/Button',
    component: Button,
};

export const Active = () => (
    <Button 
        theme={theme} 
        active
        onClick={action('clicked')}
    >Conectarse</Button>
);

export const Inactive = () => (
    <Button theme={theme} active={false}>Conectarse</Button>
);

/**
 * Note: si estás utilizando theme, debes pasarlo como prop
 */

 /**
 * Note: npm run storybook
 */