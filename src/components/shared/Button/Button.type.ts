import { ButtonHTMLAttributes } from 'react';

export interface ButtonProperties {
    readonly active ?: boolean;
};

/**
 * readonly: palabra clave utilizada para crear propiedades como
 * solo lectura: pueden ser accedidas desde fuera, pero su valor
 * no puede ser cambiado.
 */

 /**
  * Note: las definiciones de las propiedades en interfaces
  * si terminan en punto y coma, no en coma como en los objetos.
  */