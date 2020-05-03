const { GraphQLClient } = require("graphql-request");
const baseUrl = 'http://localhost:3050';

const graphqlBaseUrl = `${baseUrl}/graphql`;

const graphqlClient = new GraphQLClient(graphqlBaseUrl);

export const getAllCars = () => {
    const query = `
        query {
          cars {
            car_id
            name
            brand
            year_release
          }
        }
    `;
  
    return graphqlClient
      .request(query)
      .then(response => response.cars);
  };

  export const getCarById = id => {
    const query = `
        query {
          car(id: ${id}) {
            car_id
            name
            brand
            year_release
          }
        }
    `;
  
    return graphqlClient
      .request(query)
      .then(response => response.car)
  };

  export const addCar = car => {
    console.log(car);
    const query = `
        mutation($newCar: CarEdit!){
          saveCar(carEdit: $newCar)
        }
    `;
  
    return graphqlClient
      .request(query, {
        newCar: car
      })
      .then(response => response.saveCar)
};