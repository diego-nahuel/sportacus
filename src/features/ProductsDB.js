export let ProductDB = [
    {  _id: "633f20de4772a4171144e362",
        name: "Bolsa de Boxeo",
        image: "https://i.imgur.com/SnrAXsf.png",
        price: 7000,
        description: "Bolsa para guanteo con cadena de regalo, hecha con tela oxford y cuero…",
        sport: "Boxeo",
        stock:"5",
        type: "Entrenamiemto"
    },
    {
        "_id": "633f21354772a4171144e364",
        "name": "Pelota de Futbol",
        "image": "https://i.imgur.com/C7FDykW.png",
        "price": 20000,
        "description": "Pelota de futbol resistente marca adidas",
        "__v": 0,
        "sport": "Futbol",
        "stock": "45",
        "type": "Pelota"
    },
    {
        "_id": "633f215f4772a4171144e366",
        "name": "Pelota de Basquet",
        "image": "https://i.imgur.com/6hsfDY5.png",
        "price": 3000,
        "description": "Tamaño y peso oficial.Hecha de goma vulcanizada.Medida N°7",
        "__v": 0,
        "sport": "Basketball",
        "stock": "62",
        "type": "Pelota"
      },
      {
        "_id": "633f21a54772a4171144e368",
        "name": "Rodilleras para Voley",
        "image": "https://i.imgur.com/anTYjrI.png",
        "price": 8000,
        "description": "Acolchado de alta resistencia en la zona rotuliana. Posee relleno de espuma de alta densidad para cubrir impactos, sin perder movilidad",
        "__v": 0,
        "sport": "Volleyball",
        "stock": "16",
        "type": "Proteccion"
      },
      {
        "_id": "633f21ce4772a4171144e36a",
        "name": "Pelota de Voley",
        "image": "https://www.wilson.com/en-us/media/catalog/product/W/T/WTH11319I__1d44dcb9a93b03a1658756320354ef84.png",
        "price": 2200,
        "description": "Pelota de cuero sintetico para canchas cerradas",
        "__v": 0,
        "sport": "Volleyball",
        "stock": "38",
        "type": "Pelota"
      },
      {
        "_id": "633f276a4772a4171144e372",
        "name": "Raqueta De Tenis",
        "image": "https://i.imgur.com/Vq8C6jd.png",
        "price": 80000,
        "description": "Raqueta de 68.58 cm de largo. Pesa 315 gramos con tejiso de fibra de carbono",
        "__v": 0,
        "sport": "Tenis",
        "stock": "12",
        "type": "Raqueta"
      },
      {
        "_id": "633f27ce4772a4171144e374",
        "name": "Tubo Pelotas de Tenis x3",
        "image": "https://i.imgur.com/ZI2WNKF.png",
        "price": 2000,
        "description": "Pelotas profesionales color amarillo para cualquier cancha",
        "__v": 0,
        "sport": "Tenis",
        "stock": "15",
        "type": "Pelota"
      },
      {
        "_id": "633f27f24772a4171144e376",
        "name": "Botines de Futbol",
        "image": "https://i.imgur.com/nLnZ0V4.png",
        "price": 12600,
        "description": "Botines para adultos ideales para cualquier superficie",
        "__v": 0,
        "sport": "Futbol",
        "stock": "7",
        "type": "Calzado"
      },
      {
        "_id": "633f28174772a4171144e378",
        "name": "Botella termica",
        "image": "https://i.imgur.com/bIkeB4G.png",
        "price": 2600,
        "description": "Botella termica ideal para mantener el agua bien fria tras largas sesiones de entrenamiento",
        "__v": 0,
        "stock": "20",
        "type": "Varios",
        "sport": "Varios"
      },
      {
        "_id": "633f28434772a4171144e37a",
        "name": "Antiparras Espejadas",
        "image": "https://i.imgur.com/zn0qzRz.png",
        "price": 1200,
        "description": "Antiparras con lente espejado antiempañante y con proteccion UV. Incluye estuche plastico y puente intercambiable",
        "__v": 0,
        "sport": "Natacion",
        "stock": "14",
        "type": "Equipo"
      },
      {
        "_id": "633f28604772a4171144e37c",
        "name": "Manoplas De Natacion",
        "image": "https://i.imgur.com/V6e9MXW.png",
        "price": 1000,
        "description": "Manoplas de plastico de 19cm x 18cm con tiras de agarre de silicona. Sirven para entrenamiento y competicion",
        "__v": 0,
        "sport": "Natacion",
        "stock": "8",
        "type": "Equipo"
      },
      {
        "_id": "633f287f4772a4171144e37e",
        "name": "Soga De Entrenamiento",
        "image": "https://i.imgur.com/WzwLQUE.png",
        "price": 1900,
        "description": "Soga para saltar, Ideal para box y crossfit. Mango de espuma con rulemanes y tamaño ajustable",
        "__v": 0,
        "stock": "10",
        "type": "Entrenamiento",
        "sport": [
          "Varios",
          "Boxeo"
        ]
      },
      {
        "_id": "633f28a14772a4171144e380",
        "name": "Guantes De Boxeo",
        "image": "https://cdn.shopify.com/s/files/1/0066/7274/4499/products/Grijs_620x.png?v=1598927703",
        "price": 8500,
        "description": "Guantes para bolsa. Pesan 12 onzas. Mantiene el pulgar en la posicion correcta y lo proteje de lesiones",
        "__v": 0,
        "sport": "Boxeo",
        "stock": "4",
        "type": "Guantes"
      }
  ]

// import { useGetAllQuery } from './productsApi';

// const ApiProduct = () => {
//     const { data: product} = useGetAllQuery('');
//     const apiProduct = product.response;
//   return apiProduct
// }
// export default ApiProduct;