### Pipes

Pipes son decoradores/funciones que se inyectan a nuestros DTO y controladores para válidar que los datos enviados por el cliente son correctos.

1. [Class Validator](https://github.com/typestack/class-validator)
2. [Class Transformer](https://github.com/typestack/class-transformer)
   - `yarn add class-validator class-transformer`

### Object Relation Mapping - [Type ORM](https://typeorm.io/#/)

En este proyecto se utiliza Type ORM con PostgreSQL

- `yarn add @nestjs/typeorm typeorm pg`

### Expresión regular para strong password

- Expresión Regular: `/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/`
  1.  La contraseña debe contener al menos una letra mayúscula
  2.  La contraseña debe contener al menos una letra minúscula
  3.  La contraseña debe contener al menos un número o un caracter especial
  4.  ### No válida el largo del string
