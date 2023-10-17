import { Utente } from "../node/Utente";

export const MyServicePath = '/services/my-service';


export const MyService = Symbol('MyService');
export interface MyService {
   
    getDocTitle():Promise<string>
    getDoc(req: any):Promise<void>    
    listDocDrive():Promise<string>
    getDocTest():Promise<Utente[]>
    
       
    mergeDoc():Promise<void> 
    getSheet():Promise<void>
    getJsonDoc():Promise<void>  
}