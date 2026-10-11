# El Pique 🎣

Tienda online de artículos de pesca hecha con React + Vite + React Router.

## Rutas

| Ruta | Qué muestra | Componente |
|---|---|---|
| `/` | Listado de productos | `ItemListContainer` |
| `/category/:category` | Listado filtrado por categoría | `ItemListContainer` |
| `/product/:id` | Detalle de producto | `ItemDetailContainer` |
| `/cart` | Carrito | `CartView` |

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

## Cómo correrlo

```bash
npm install
npm run dev
```
