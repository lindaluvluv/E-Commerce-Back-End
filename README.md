# E-Commerce-Back-End
##installation
- add the file to your local: 
git clone git@github.com:lindaluvluv/E-Commerce-Back-End.git
- install dependencies:
npm init -y |
npm i mysql2 |
npm i express |
npm i sequelize
- go to mysql shell, input the following command and quit:
source db/schema.sql |
use ecommerce_db
- run the seeds!
npm run seed 
- run the app!
node server.js