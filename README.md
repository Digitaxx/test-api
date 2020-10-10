Creating virutal enviroment with **Node.js**, **PostgreSQL**.

**`docker-compose up --build -d`** 

Create migrations and seeds test data to DB.
(seed size can be changed in **.env**)

```
npx sequelize db:migrate
npx sequelize db:seed:all
```

API request examples:

#### GET:

Return **all data** from table **product**.

`curl -X GET localhost:3000/product`

Return data of item with **id32** from table **product**.

`curl -X GET localhost:3000/product/32`

**With sorting**:

`curl -X GET localhost:3000/product`

#### POST: 

Add item to table.

`curl -X POST -d "name=name&description=desc&price=3000" localhost:3000/product`

#### PUT: 

Updating item in table.

`curl -X PUT -d "name=newName" localhost:3000/product/32`

#### DELETE:
Delete all data from table.

`curl -X DELETE localhost:3000/product`

Delete data by ID in table.

`curl -X DELETE localhost:3000/product/id`

#####WARN: DELETE method use FORCE remove, with all child's.
 
