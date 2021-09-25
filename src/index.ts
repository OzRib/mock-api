import 'reflect-metadata'
import * as bodyParser from 'body-parser';
import { Request, Response, NextFunction } from 'express';
const express = require('express');
require('dotenv/config');

const app = express();

app.use(bodyParser.json());

// CORS
app.use((request:Request, response:Response, next:NextFunction)=>{
	response.header('Access-Control-Allow-Origin', '*');
	response.header('Access-Control-Allow-Methods', '*');
	response.header('Access-Control-Allow-Headers', '*');
	next();
});

const PORT:number = parseInt(process.env.PORT || '') || 3000;

app.listen(PORT);

console.log(`Started at port ${PORT}`);