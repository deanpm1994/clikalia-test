# Prueba técnica Clikalia

Se proporciona un api con la con la base de datos de Pokémon que deberá ser utilizada con el fin de crear
2 pantallas. Se recomienda la utilización de [React](https://es.reactjs.org/) y [Material UI](https://mui.com/) para llevar a cabo la tarea.

## Resumen
### API de pokemons

Para la prueba es necesario utilizar el API [https://pokeapi.co/](https://pokeapi.co/). Este API tiene la característica de ser solo lectura, quiere decir que solo se pueden hacer llamados de tipo GET. Otra peculiaridad es que el API no tiene parámetros de orden en ningún endpoint.

### Tabla de pokemones

Muestra el nombre y url de todos los pokemones en una tabla, donde se ven 20 pokemones a la vez, haciendo paginación. Los pokemones están ordenados alfabéticamente por sus nombres. En la parte inferior se pueden apreciar las opciones de paginación.

También se pueden hacer filtros por nombre utilizando un campo de texto en la parte superior de la tabla. Los filtros se hacen inmediatamente después de cambiar el valor del campo (podría haberse implementado con un delay)

Clicar en la url de un pokemón de la lista lleva a ver los detalles del mismo.

### Detalles de pokemón

Muestra los detalles del pokemón seleccionado en la vista anterior. Se muestra una imagen (no todos la tienen), el nombre, la lista de habilidades, lista de movimientos ordenados descendentemente por la url del movimiento (se muestra la url para comprobar) y una lista con datos de las formas del pokemón (id de la forma y el parámetro `is_battle_only`). Los movimientos se pueden eliminar de la lista.

### A tener en cuenta

- El API no tiene parámetros para ordenar los resultados a través de los endpoints. Para solucionar el orden alfabético en la tabla se hace un pedido para traer todos los pokemones cuando se accede por primera vez a la aplicación utilizando como parámetro `limit=-1` y luego se ordenan.
- El API es de solo lectura. Para "eliminar" los movimientos de un pokemón se modificó el estado del componente que muestra las movimientos simulando la eliminación (de manera temporal)

## Detalles técnicos

### Principales librerías

| Librerías | Datos |
|-------|---------|
| react, react-dom | La nueva versión (18) de React trae consigo cambios que aún no han tenido soporte en librerías como `create-react-app` o `@testing-library` |
| axios | Utilizada para los llamados al API |
| lodash | Librería popularmente utilizada con un grupo de funciones útiles para el trabajo con JavaScript |
| @emotion/react, @emotion/styled, @mui/icons-material, @mui/material | Utilizada en el diseño de la aplicación. Con esta librería no fue necesario la utilización de archivos de estilo adicionales |
| @testing-library/jest-dom, @testing-library/react, @testing-library/user-event | Remplazo de Enzyme, utilizada en las pruebas unitarias de la aplicación |
| @reduxjs/toolkit, react-redux | Manejo del estado global de la aplicación. Se utiliza para almacenar todos los pokemones cuando se accede por primera vez a la aplicación. El orden y los filtros es, en parte, posible a estas librerías |
| react-router-dom | Utilizada para mostrar las diferentes pantallas (o componentes) de la aplicación |
