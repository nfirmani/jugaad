import * as React from 'react';
import { injectable, postConstruct } from 'inversify';
import { ReactWidget } from '@theia/core/lib/browser/widgets/react-widget';
//import GDoc from './g-doc';
import { inject } from '@theia/core/shared/inversify';
import { MyService } from '../common/srv-protocol';




//tutorial su async

/*
const one = 'One';

const two = new Promise(resolve => resolve('Two'));

const three = new Promise((resolve, reject) => reject(new Error('Three')));

async function gilad3() {
    const four = await one;
    //console.log({ one: four });
    console.log(four);
    const five = await two;
    //console.log({ two: five });
    console.log(five);
    try {
      const six = await three;
      console.log('This will not get called at all ' + six);
    }
    catch(e) {
      console.log({ three: e.message});
    }
  }

  async function gilad2() {
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log('Done')
  };


  async function  getDocTitle(title: string): Promise<string> {

  console.log(title)  
       
return new Promise((resolve, reject) => 
{
   resolve("fatto")
});

}
  

  const hero: any = {
    superman: {
      name: 'Superman',
      alias: 'Clark Kent',
    },
    batman: {
      name: 'Batman',
      alias: 'Bruce Wayne',
    },
    flash: {
      name: 'The Flash',
      alias: 'Barry Allen',
    },
  };
  
  export async function getHero(handle: string) {
    return new Promise<{name: string; alias: string}>(res => {
      setTimeout(() => {
        res(hero[handle]);
      }, 1000);
    });
  }

  /*
  async function gilad() {
    const handles = [
      'superman',
      'batman',
      'flash'
    ];


    for (const handle of handles) {
        const item = await getHero(handle);
        console.log(`
      Name: ${item.name}
      Alias: ${item.alias}
        `);
      }

  }


  //esempio callback
  const c = (f: Function) => {
    setTimeout(() => {
      f('Callback 1');
      setTimeout(() => {
        f('Callback 2');
        setTimeout(() => {
          f('Callback 3');
        }, 1000);
      }, 1000);
    }, 1000);
  };

  //trasformazione callback in promise await async
const delay = (ms: number) => new Promise(f => setTimeout(f, ms));
const p = async (f: Function) => {
  await delay(1000);
  f('Promise 1');
  await delay(1000);
  f('Promise 2');
  await delay(1000);
  f('Promise 3');
};


async function getQualcosa(testo:string, data:any):Promise<string> {
    console.log('fatto qualcosa ' + testo)
    
    return new Promise(resolve => 
        
    {   
        setTimeout(resolve, 2500);
        resolve('trascorsi 2500 millesecondi')
        data = 'PARAMETRO DI RITORNO'
    
    });
    
  };

  function contaFinoAMax(max:number):void {
    for(let x:number=1;x<=max;x++){
        console.log(x);
    }
}

function modificaValore(rifObjJson:{a:number}){
    console.log("Funzione modificaValore, valore passato:"+rifObjJson.a);
    //Modifico copiaDiA;
    rifObjJson.a=20;
    console.log("Funzione modificaValore, valore modificato:"+rifObjJson.a);
}
 
*/
 // gilad();
// fine tutorial


@injectable()
export class GApiWidget extends ReactWidget {
    static readonly ID = 'gapi:widget';
    static readonly LABEL = 'Google api';

    protected text: string;

    titolo: string;

    @inject(MyService) protected readonly myService: MyService
    

    @postConstruct()
    protected async init(): Promise<void> {
        //  initialization 
        this.id = GApiWidget.ID;
        this.title.label = GApiWidget.LABEL;
        this.title.caption = GApiWidget.LABEL;
        this.title.closable = true;
        this.title.iconClass = 'fa fa-window-maximize'; // example widget icon.
        this.update();    //  Update the view 

        //this.myService.getDocTitle().then(r => console.log("IL TITOLO è: "+ r));

        //this.setText("prova di settext: ");

        this.myService.getDocTitle().then(r => { 
            
           
            console.log("ris da console IL TITOLO è: "+ r);
            this.setTitolo("IL TITOLO è: " + r);    
                     
    
        });

        //this.update();    //  Update the view 


/*


  //tutorial su async
  console.log("passo 1");
  //gilad3();
  console.log(getDocTitle("test"));

  console.log("passo 2 callback");

  c((text: string) => console.log(text));

  //trasformazione in async

  console.log("passo 2 trasformazione di callback in promise, await, async");

  p((text: string) => console.log(text));

  console.log("passo 3 funzione getQualcosa");

  da: String

  var arnu: number[]=[10,20,30];

  for(let x=0; x<arnu.length; x++) {
      console.log(arnu[x])
  }


  
  var dataNascita = new Date("10/10/2022");

  var mm: number;
  mm = dataNascita.getMonth();
  console.log(mm);

  var persona:{id:number,name:string,cognome:string,dataNascita:Date};

  persona={id:1, name:"Paola", cognome:"Fida", dataNascita:new Date("10/3/2022")}

  console.log(JSON.stringify(persona));


  interface PersonJSON {
      id:number,
      name:string,
      num:string[]

  };

  var pers1: PersonJSON = {id:10,name:"paola", num:["33327637", "34764646", "89377373"]};

  //pers1 = {id:10,name:"paola", num:["33327637", "34764646", "89377373"]};

  console.log(pers1);
  console.log(JSON.stringify(pers1));

  var nominativo: string[] = ["due", "cosa"];

  nominativo.push("tre");
  nominativo.push("quattro", "cinque");

  for(let x=0; x<nominativo.length; x++){
      console.log(nominativo[x])
  }

  nominativo.splice(2,1);

  for(let x=0; x<nominativo.length; x++){
    console.log(nominativo[x])
}

//nominativo.splice(1);

for(let x=0; x<nominativo.length; x++){
    console.log(nominativo[x])
}

console.log("uso del foreach");

nominativo.forEach((nominativo:string) => console.log(nominativo))


  getQualcosa('di nuovo', '');

  contaFinoAMax(5);


  var objJson:{a:number};
  //Creazione di un oggetto di tipo Json assegnando il valore 10 all'attributo a 
  objJson={a:10}; 
  console.log("Modulo, valore passato alla funzione modificaValore:"+objJson.a);
  //Passo alla funzione il riferimento (indirizzo) dell'oggetto objJson.
  modificaValore(objJson);
  console.log("Modulo, valore dopo l'esecuzione della funzione modificaValore:"+objJson.a);




//funzioni anonime
var perimetro=function (a:number,b:number,c:number):number {return a+b+c}  
console.log(perimetro(10,3,5));

//funzione lambda
var perimetro2= (a:number,b:number,c:number):number => {return a+b+c};
console.log(perimetro2(3,4,1))

//funzione lambda su una sola riga può essere scritta in forma breve
var perimetro3=(a:number,b:number,c:number) => a+b+c
console.log(perimetro3(1,2,3))

//Async +Await keywords

async function mySecondFunction(x: number) {
    console.log("mysecondFunction")
    setTimeout(() => {console.log("set time 3000")}, 8000);
    return 2 + x;
  }

console.log(mySecondFunction(1));
  
  async function myThirdNestedFunction(x: number) {
    setTimeout(() => {}, 8000);
    return 3 + x;
  }

  console.log(myThirdNestedFunction(5));

  
  
  async function myAwesomeFunction() {
    let startingValue = 2;
    // we can await the call to mySecondFunction() as this
    // returns a promise that will eventually return
    // our firstResult
    let firstResult = await mySecondFunction(startingValue);
    // once mySecondFunction has resolve, our function will
    // carry on execution of myThirdNestedFunction
    let finalResult = await myThirdNestedFunction(firstResult);
    // once this resolves, we get back our finalResult
    // which we can subsequently return
    return finalResult;
  }
  
  let promise = myAwesomeFunction();
  promise.then(result => console.log("test " + result));

  //esempi sulle promise

  var mypromise = new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      console.log("Async is done!");
      resolve();
    }, 1500);
});


function asyncAction():Promise<String> {
    var promise = new Promise<String>((resolve, reject) => {
      setTimeout(() => {
          let a:string="valore restituito"
        console.log("Async is done!");
        resolve(a);
        //reject('errore string');
      }, 1500);
    });
    return promise;
  }

 
  asyncAction()
    .then(
    (a1) => console.log("Resolved! " + a1 )
    )
    .then(function(st1) {
        console.log(st1);
    }
       
    )
  .catch(function(error) { 
    // error handler is called
    console.log(error); 
 });


const promiseReturn = new Promise((resolve, reject) => {
    reject(new Error("Something awful happened"));
});
promiseReturn.then((res) => {
    // This is never called
});
promiseReturn.catch((err) => {
    console.log('I get called:', err.message); // I get called: 'Something awful happened'
});

Promise.resolve(123)
    .then((res) => {
        console.log(res); // 123
        return 456;
    })
    .then((res) => {
        console.log(res); // 456
        return Promise.resolve(123); // Notice that we are returning a Promise
    })
    .then((res) => {
        console.log(res); // 123 : Notice that this `then` is called with the resolved value
        return 123;
    })
  

    // https://pan-webdesign.it/guida-javascript-lezioni/24-promises-async-await.html


var risparmi_mensili = 400;
var prezzo_nuovo_laptop = 500;
var nePromise = new Promise((risolvi, rigetta)  =>  {
   if(risparmi_mensili >= prezzo_nuovo_laptop){
      risolvi("Questo mese riuscirò a comprare un nuovo laptop");
   } else {
      rigetta("Per questo mese dovrò rimandare l'acquisto del nuovo laptop");
     };
});
nePromise.then((value) => console.log(value));
nePromise.catch((value) => console.log(value))

//To access the value of a promise:
//1) Define an async function.
//2) Use the await operator to await the promise.
//3) Assign the result of using the await operator to a variable.

  //fine tutorial

//const p5 = Promise.resolve('Hello World');

async function nefunc1() {
  try {
    const value = await nePromise;
    console.log(value); // 👉️ "Hello World"
  } catch (err) {
    console.log("aiaii" + err);
  }
}

nefunc1();

*/



}   //fine init
    setTitolo(arg0: string) {
        this.titolo = arg0;
        throw new Error('Method not implemented.');
    }



    setText(text: string) {
        this.text = text;
    }

    
    
    //  According to the parameters received 
    protected render(): React.ReactNode {

 /*       

        return ( 
            <BasicForm></BasicForm>

           

        )


        return (    
            <GDoc></GDoc>
        )

    */

   return (    
    <h1>test  {this.titolo} </h1>
)
    

    }
}