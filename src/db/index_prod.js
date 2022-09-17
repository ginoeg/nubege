const producto = [
    {
      id: 1,
      name: "mouse",
      price: "17.00",
      type: "mouse gamer",
      brand: "razer"
    },
    {
      id: 2,
      name: "Teclado",
      price: "450.00",
      type: "teclado gamer",
      brand: "Logitech"
    },
    {
      id: 3,
      name: "Audifonos",
      price: "300.00",
      type: "Audifonos gamer",
      brand: "Hyper x"
    },
  ];
  
// Lista todo
export const findAll = () => {
  return producto;
};
  
// Buscar por id
export const findOne = (id) => {
  return producto.find((u) => u.id === Number(id));
};
  
// crear
export const store = (product) => { 
  product.id = producto[producto.length-1].id+1;
  producto.push(product);
};
  
// update
export const update = (id, product) => {
  const index = producto.findIndex((u) => u.id === Number(id));
  producto[index] = {
    ...producto[index],
    ...product,
  };
};
  
export const remove = (id) => {
  const products = producto.filter((u) => u.id !== Number(id));
  producto.length = 0;
  producto.push(...products);
};