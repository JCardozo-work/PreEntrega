# El Pique 🎣 | Que no se te escape.

Tienda online de artículos de pesca

## Estructura

```
src/
├── components/
│   ├── Header/               Logo + Nav
│   ├── Nav/                  Navegación y contador del carrito
│   ├── ItemListContainer/    Contenedor: pide los productos y filtra por categoría
│   ├── ItemList/             Presentacional: grilla de productos
│   ├── Item/                 Presentacional: tarjeta de producto
│   ├── ItemDetailContainer/  Contenedor: busca el producto por id
│   ├── ItemDetail/           Presentacional: detalle + agregar al carrito
│   ├── Cart/                 CartView, CartList, CartItem, CartSummary
│   ├── NotFound/             Página 404
│   └── Footer/
├── context/CartContext.jsx   Estado global del carrito
└── utils/categories.js       Categorías de la tienda
public/data/products.json     Catálogo
```



