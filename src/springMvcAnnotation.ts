import {spring} from 'j-spring'
import { isFunction } from "j-spring";


export type middleWareType = ((new()=>ExpressMiddleWare))[];

export type MappingParam = {
    path:string
}

export type MiddleWareParam = {
    middleWareClassList:middleWareType
}

export const Controller = (path:string,middleWareClassList?:middleWareType) => spring.classAnnotationGenerator('j-spring.Controller',{path,middleWareClassList},Controller);

export const ApiMiddleWare = (middleWareClassList:middleWareType) => spring.classAnnotationGenerator('j-spring.ApiMiddleWare',{middleWareClassList},ApiMiddleWare);

//类 发送json控制器
export const Json = ()=> spring.classAnnotationGenerator('j-spring.Json',{},Json);

//方法控制器 get请求

export const Get = (path?:string) => spring.methodAnnotationGenerator('j-spring.Get',{path},Get);

export const ResponseBody = () => spring.methodAnnotationGenerator('j-spring.ResponseBody',{},ResponseBody);

//方法控制器 Post请求

export const Post = (path?:string) => spring.methodAnnotationGenerator('j-spring.Post',{path},Post);

//方法控制器 RequestMapping

export const RequestMapping = (path?:string) => spring.methodAnnotationGenerator('j-spring.RequestMapping',{path},RequestMapping);

export const MiddleWare = (middleWareClassList:middleWareType)  => spring.methodAnnotationGenerator('j-spring.middleWareClassList',{middleWareClassList},MiddleWare);

export type ParamterParamType = {
    name:string,
    type:Function
}

//express中间件
export interface ExpressMiddleWare {
    isExpressMidldleWare():boolean;
    invoke(req:any,res:any,next:Function):void
}

//判断是否是中间件
export function isExpressMiddleWare(obj:any){
    const a = obj as ExpressMiddleWare;
    return isFunction(a.invoke) && isFunction(a.isExpressMidldleWare) && a.isExpressMidldleWare();
}




//字段
export const PathVariable = (name:string,type?:Function) => spring.paramterAnnotationGenerator('j-spring.PathVariable',name,{name,type:type||String},PathVariable);
//字段
export const RequestParam = (name:string,type?:Function) => spring.paramterAnnotationGenerator('j-spring.RequestParam',name,{name,type:type||String},RequestParam);

export const RequestBody = (name:string,type?:Function) => spring.paramterAnnotationGenerator('j-spring.RequestBody',name,{name,type:type||String},RequestBody);

//获取session
export const SessionAttribute = (name:string,type?:Function) => spring.paramterAnnotationGenerator('j-spring.SessionAttribute',name,{name,type:type||String},SessionAttribute);

export const Param = (name:string) => spring.paramterAnnotationGenerator('j-spring.SessionAttribute',name,{name},Param);