<p align="center">
 <h1>This is an example of Nest, MySQL, Sequelize ORM, Swagger, Sentry</h1>
</p>
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.
</br>**This is example of Nest, MySQL, Sequelize ORM, Swagger, Sentry**  

## Installation

```bash
$ npm i -g @nestjs/cli
$ nest new project-name

```

## Running the app

```bash
$ npm run start
```

## Create a new Nest app using the CLI

```bash
$ nest new app-name
```

## Install Swagger

```bash
$ npm install --save @nestjs/swagger swagger-ui-express
```
Once the installation process is complete, open the main.ts file and initialize Swagger using the SwaggerModule class:

### main.ts
```javascript
//swagger setup
 const config = new DocumentBuilder()
    .setTitle('Nest Rest API')
    .setDescription('The Nest Rest API. API description the crud operation for user models' )
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
```


### app.controller.ts
To create a tag in the controller@ApiTags('Root Path')

```javascript
@Controller()
@ApiTags('Root Path')
export class AppController {
  constructor(private readonly appService: AppService) {}

```

### form/form.model.ts
To create a schema in the model @  @ApiProperty()
```javascript
@Table
export class Form extends Model {
  @Column
  @ApiProperty()
  uuid: string;
  @Column
  @ApiProperty()
  title: string;
  @Column
  @ApiProperty()
  name: string;
  @Column
  @ApiProperty()
  email: string;
  @Column
  @ApiProperty()
  phonenumber: number;
}
```
and then run the app and you will see.</br>

![swagger02](https://private-user-images.githubusercontent.com/12832061/320947866-1b99ea9b-ed6e-40b7-92fb-38cd7982783e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTI2ODQ3NDcsIm5iZiI6MTcxMjY4NDQ0NywicGF0aCI6Ii8xMjgzMjA2MS8zMjA5NDc4NjYtMWI5OWVhOWItZWQ2ZS00MGI3LTkyZmItMzhjZDc5ODI3ODNlLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA0MDklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNDA5VDE3NDA0N1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTRmNDRkZWZmMmMzYmQ4ZWU3NzFiNWVhMDE2NWU3OGVlNjJkNDhjNzkwOTMxYjIwMGRhZWJiMmFlMjBjZWMzYTYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.pL_UbyOkKEutzveHhkjTmkRskeOT666CVpiOxNaXAoM)

## Install Sequelize MySQL

```bash
$ npm install --save @nestjs/sequelize sequelize sequelize-typescript mysql2
$ npm install --save-dev @types/sequelize
```
### Create Sentry module, service and interceptor
```bash
$ nest g module user
$ nest g service user
$ nest g model user
$ nest g controller user
```
