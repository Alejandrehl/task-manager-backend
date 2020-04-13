### Primeros pasos

1. Clonar repositorio `git clone git@github.com:Alejandrehl/alehernandezsite-backend.git`
2. Entrar a la carpeta "root" del proyecto
3. Ejecutar el comando `yarn install`
4. Ajustar la config de la conexión a la base de datos en las variables de los archivos `.yml` en la carpeta `src/config`
5. Correr el proyecto con `yarn start:dev`

### Pipes

Pipes son decoradores/funciones que se inyectan a nuestros DTO y controladores para válidar que los datos enviados por el cliente son correctos.

1. [Class Validator](https://github.com/typestack/class-validator)
2. [Class Transformer](https://github.com/typestack/class-transformer)
   - `yarn add class-validator class-transformer`

### Object Relation Mapping - [Type ORM](https://typeorm.io/#/)

En este proyecto se utiliza Type ORM con PostgreSQL

- `yarn add @nestjs/typeorm typeorm pg`

### Passport JWT

- `yarn add @nestjs/jwt @nestjs/passport passport passport-jwt`

### Expresión regular para strong password

- Expresión Regular: `/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/`
  1.  La contraseña debe contener al menos una letra mayúscula
  2.  La contraseña debe contener al menos una letra minúscula
  3.  La contraseña debe contener al menos un número o un caracter especial
  4.  No válida el largo del string

### Ejemplo de una acción que solo puede ser accedida por un usuario autenticado. Usa un custom decorator llamado GetUser.

```javascript
  @Post('/test')
  @UseGuards(AuthGuard())
  test(@GetUser() user: User) {
    console.log('API que solo puede ser accedida por un usuario autenticado.');
    const { password, salt, ...result } = user;
    return result;
  }
```
