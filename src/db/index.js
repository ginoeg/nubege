const cliente = [
    {
      id: 1,
      name: "Gino",
      last_name: "Egioa",
    },
    {
      id: 2,
      name: "Luis",
      last_name: "Eguia",
    },
    {
      id: 3,
      name: "Annie",
      last_name: "Perez",
    }
  ];
  
  // Lista todo
  export const findAll = () => {
    return cliente;
  };
  
  // Buscar por id
  export const findOne = (id) => {
    return cliente.find((u) => u.id === Number(id));
  };
  
  // crear
  export const store = (user) => {
    user.id = cliente[cliente.length-1].id+1;
    cliente.push(user);
  };
  
  // update
  export const update = (id, user) => {
    const index = cliente.findIndex((u) => u.id === Number(id));
  
    cliente[index] = {
      ...cliente[index],
      ...user,
    };
  };
  
  export const remove = (id) => {
    const users = cliente.filter((u) => u.id !== Number(id));
    cliente.length = 0;
    cliente.push(...users);
  };