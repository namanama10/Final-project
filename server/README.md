## Migrations

- npx sequelize-cli model:generate --name user --attributes username:string,email:string,password:string,gambar:string,no_hp:integer,alamat:string

- npx sequelize-cli model:generate --name item --attributes nama:string,type_kendaraan:string,type_transmisi:string,warna:string,kapasitas_kendaraan:string,gambar:string,userId:integer,brandId:integer
  
- npx sequelize-cli model:generate --name brand --attributes nama:string,country:string,gambar:string