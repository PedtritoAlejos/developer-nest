/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
export class CreatePerfilDto {
   @ApiProperty({ example: 'Booket' })
    name: string;

   @ApiProperty({ example: 'El primero que vamos a ver es el Rock star, la gran mayoría de los que estáis leyendo este post seréis developers lo que implica que tenéis linkedin y estoy seguro al 100% de que os ha llegado el típico mensaje de los recruiters que dice “buscamos un rock star”, o estamos montando un grupo de “rock stars”. En mi opinión hay muy pocos “rockstar” de verdad por ahí, y se cuentan con cuentagotas.' })
    description: string;
   
   @ApiProperty({ example: '200' })
    value: number;
}
