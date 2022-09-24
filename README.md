# API

## Set up the database

```
create database project

use project

create user api identified by 'tiger'

grant all privileges on project.* TO 'api'

create table people (id mediumint not null auto_increment primary key,
firstname varchar(250),
lastname varchar(250))

insert into people (firstname, lastname)
values
('john', 'smith'),
('azimuth', 'chondrite'),
('robin', 'banks'),
('justin', 'time')
```

## Set up the nodejs project

### Install required modules

```
$ npm init --yes
Wrote to /home/me/host/git/api/package.json:

{
  "name": "api",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

```
$ npm install express cors mariadb

added 69 packages, and audited 102 packages in 10s

11 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

```
me@me:~/host/git/api$ npm install --save-dev nodemon

up to date, audited 102 packages in 610ms

11 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

### Update `package.json`
```
{
.
.
.
    "type": "module",
    "scripts": {
        "dev": "nodemon api",
.
.
.
}
```

## Run the api

```
$ npm run dev

> api@1.0.0 dev
> nodemon api

[nodemon] 2.0.20
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node api.js`
Listening on port 8080
```

### After the API is called via the frontend, notice incoming requests printed to the console

```
{
  host: 'me-dev:8080',
  connection: 'keep-alive',
  'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
  accept: '*/*',
  origin: 'null',
  'accept-encoding': 'gzip, deflate',
  'accept-language': 'en-US,en;q=0.9',
  'if-none-match': 'W/"c6-uokHmQ7HZBwE5csaq3gnsRgybNg"'
}
```

