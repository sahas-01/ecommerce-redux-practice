## Ecommerce application - Frontend

### Objective
To implement an eCommerce application which lists all products and ability to view each product in detail. Apart from this, the user should be able to add products to the cart and then place the order


### Features
- ### User login
  A simple page allowing the user to enter his/her email and password to be able to login. This will put the user's entry into the users[] array in db.json file. The user's details are saved onto localstorage and are cleared when logging out
![image](https://github.com/sahas-01/ecommerce-tanx/assets/72225300/d95dd339-697d-4ba2-8cbf-d9dc8b4a87e9)

- ### List all products
  The main dashboard page which lists all the products present in db.json (products[]) array
![image](https://github.com/sahas-01/ecommerce-tanx/assets/72225300/0e72cffc-3dc5-400d-af70-a34e80047fe2)
- ### View details of a particular product
  A page to view in detail about a product such as its name,description, price, etc.
![image](https://github.com/sahas-01/ecommerce-tanx/assets/72225300/e7f8f176-d7b5-4873-94bb-296bc4a98ff3)
- ### Add products to cart
  This lets the user add products to the cart, whose details can be viewed by clicking on the top-right cart-icon on the navbar. At the moment, I've allowed the user to only buy 1 of each item, which means one cannot buy the same product twice at the same time.
![image](https://github.com/sahas-01/ecommerce-tanx/assets/72225300/65515ca1-6b4b-4626-9e35-7b971f4f9b9c)
- ### Buy product
  Once the user has added items to the cart, he/she can place the order, this data is written onto the orders[] array in db.json
- ### Favorite product
  A simple feature to allow a user to choose his/her favorite products, these details are saved onto favourites[] in db.json


### Tech stack
- ReactJS
- TailwindCSS
- Redux toolkit
- json-server


### Instructions to run

First, clone the repository:
```bash
git clone https://github.com/sahas-01/ecommerce-tanx.git
cd ecommerce-tanx
```

Install dependencies:
```bash
npm install
```

Run the app:
```bash
npm start
```

Start the server:
```bash
npm run server
```

This will open up the project on <a href="">http://localhost:3000/</a> and the server will run on <a href="">http://localhost:3001/</a>
