
# Authentication App

A Authentication App Using Node Js Express and Jsonwebtoken.


## API Reference

#### Get Home Route

```http
  GET /auth/home
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `JWT Access Key ` | **Required**. To visit Home Route |

#### Get New Access Token

```http
  POST /auth/token
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `token`      | `JWT Refresh Key` | **Required**. Refresh Key to get new Access Key |

#### Login Route

```http
  POST /auth/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `String` | **Required**.  |
| `password`      | `String` | **Required**.  |




## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`ACCESS_TOKEN`

`REFRESH_TOKEN`


## Run Locally

Clone the project

```bash
  git clone https://https://github.com/abhisekadhikari/Authentication
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install or yarn install
```

Start the server

```bash
  npm run dev or yarn dev
```


## Author

- [@abhisekadhikari](https://www.github.com/abhisekadhikari)


## Tech Stack

**Server:** Node, Express, Jsonwebtoken

