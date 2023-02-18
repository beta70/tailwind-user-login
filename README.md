# tailwind-user-login

A plain and simple login and registration forms template based on node.js and express.js on the backend, tailwind css and nunjucks.js template engine on the frontend and mongoDB as database.
JWT's (JSON Web Tokens) are used to verify logged in users.
Schema/model creation and database querying is handled by mongoose.js.

## Usage

At first you need to install all dependencies:

```
npm install
```
For the forms to work properly you need to setup a mongoDB database and paste the URL into the .env file.
For the jwt creation you also have to set up a secret string and store it in the .env.
You can use the following commands:
```
node
require('crypto').randomBytes(64).toString('hex')
```
If you set up the .env file just start the server:
```
npm run dev
```
