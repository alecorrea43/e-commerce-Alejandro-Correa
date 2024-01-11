# Furniture shop The Oak
![Captura de pantalla 2022-09-18 230455](https://user-images.githubusercontent.com/101753720/190939252-de800d69-745f-4c6b-8781-a9a72e0b60b6.png)

## Introducción
The Oak es un e-commerce que desarrollé durante el curso de React en CoderHouse, la interfaz de usuario esta desarrollada con React y maneja una base de datos y hosting de Firebase
> Deploy : https://e-commerce-coderhouse-b0e54.web.app/


## Tecnologías

Las herramientas que utilicé fueron:

-JavaScript

-CSS

-HTML

-React

-React Hooks

-Firebase

-Tailwind

-React Router

-SweetAlert 2

-React pagination

## ¿Porqué utilizé estas tecnologías?
Principalmente utilicé la libreria de React para hacer la interfaz de usuario porque es una de las librerias en auge ahora mismo y me se me hace muy cómoda, además que de eso se trataba el curso.

### React Router
Me ayudó con la navegabilidad del proyecto, con los redireccionamientos a través de los NavLinks y las rutas.

![2022-09-19 01-13-54](https://user-images.githubusercontent.com/101753720/190949018-e55240bd-96a2-4e2d-b405-3dbeef3ce0c9.gif)

### React Hooks
Los React Hooks que utilicé fueron useEffect, useState, memo(para memorizar los productos en el home), cree un customHook para hacer la ventana modal del menú y usé el context para extraer la lógica del cart y poder proveer los items del carrito y sus funciones a todos los componentes que lo necesiten.


```js
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
```
### Tailwind
Hasta ahora me pareció el mejor framework de estilos porque ofrece una manera rápida y sencilla de agregarlos, además tiene mucha libertad al no generar un componente predefinido sino que te brinda una lista de clases que se pueden utilizar individualmente. Lo único que no me termina de convencer es que queda demasiado lleno el componente y se genera mucho texto, pero igualmente me sigue pareciendo muy cómodo usarlo.

### Firebase
En firebase está la base de datos del proyecto, utilicé el Firestore para crear 2 colecciónes:

-Una para los productos, sus detalles y stock(el cual se actualiza al realizar una compra)

![Captura de pantalla 2022-09-19 012447](https://user-images.githubusercontent.com/101753720/190949637-8d5fffa2-e627-425a-b5f8-945040214a27.png)

-Y otra para los datos de los usuarios que realizan la compra

![Captura de pantalla 2022-09-19 012811](https://user-images.githubusercontent.com/101753720/190949900-3bf575ac-6f97-43c7-8206-040c3f2d3707.png)

### SweetAlert 2
Con esta librería hice las alertas que se activan cuando se agrega un producto al carrito y al realizar la compra que devuelve el id de la transacción, son muy prácticas y fáciles de hacer.

### React Pagination
Me ayudo a realizar la paginación del proyecto.






