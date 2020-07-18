import React from 'react';

export interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    readonly color ?: string;
};