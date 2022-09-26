import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { Component } from "j-spring";
import { ParsedQs } from "qs";
import { Controller, ExpressMiddleWare, Get, Json, PathVariable, RequestParam, ResponseBody } from "../../src";


@Component
class LogPrintMiddleWare implements ExpressMiddleWare{

    isExpressMidldleWare(): boolean {
        return true;
    }

    invoke(req: any, res: any, next: Function): void {
        req.query.name ='kitty'
        console.log('params',req.params);
        next();
    }
}


@Controller('/student',[LogPrintMiddleWare])
export class StudentController {


    @Get()
    async index(){
        return ['index.ejs',{msg:'hello world'}]
    }


    @Get('/getStudentInfo/:id')
    @ResponseBody()
    async getStudentInfo(@PathVariable('id') id:string,@RequestParam('name') name:string){
        return {id,name}
    }


}


