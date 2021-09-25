import 'reflect-metadata'
import * as bodyParser from 'body-parser';
import { Request, Response, NextFunction } from 'express';
const express = require('express');
require('dotenv/config');

const ARGS:Array<any> = process.argv;
const file:string = ARGS[2].replace(/.ts/, '').replace(/.js/, '');
const exported:string|undefined = ARGS[3];
const pwd = process.env.PWD;
const routes = exported? require(`${pwd}/${file}`)[exported]: require(`${pwd}/${file}`);

const app = express();

app.use(bodyParser.json());

// CORS
app.use((request:Request, response:Response, next:NextFunction)=>{
	response.header('Access-Control-Allow-Origin', '*');
	response.header('Access-Control-Allow-Methods', '*');
	response.header('Access-Control-Allow-Headers', '*');
	next();
});

routes.forEach((route:any) => {
	(app as any)[route.method](
		route.route,
		(request:Request, response:Response, next:NextFunction) => {
			response.send(route.response)
		}
	)
});

const PORT:number = parseInt(process.env.PORT || '') || 3000;

app.listen(PORT);

console.log(`Started at port ${PORT}`);