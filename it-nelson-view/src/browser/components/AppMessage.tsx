import * as React from 'react';

const defaultImage = 'https://via.placeholder.com/32x32.png';

interface IUser {
    id:number,
    name: string,
    image: string 
}

function toUp(str: string) {
    return str.toUpperCase();
    }

function boldify(str: string) {
        return <strong>***{str}***</strong>;
    }

export function AppMessage (user: IUser){

    //const {id, name, image} = user;   //Possiamo rendere questo codice più compatto, utilizzando la sintassi di assegnamento con destrutturazione di un oggetto
    //const image = user.image ? user.image : defaultImage;
    const { name, image = defaultImage} = user    //valore di default senza l'utilizzo dell'operatore ternario

    return <><p className='it-nelson-view-interpolazione'>
        <h3>1 - Esempi di interpolazione JSX </h3>
        {/* <span>Benvenuto {boldify(toUp(user.name))} ! </span>  */}
        <span>Benvenuto {boldify(toUp(name))} ! </span>
        <img src={image} width="32" height="32" />
    </p><p className='it-nelson-view-stile'>

            <span><h3>2 - Stile e Layout</h3> </span>

        </p><p className='it-nelson-view-stile'>

            <span><h3>3 - ****</h3> </span>

        </p></>
    
   
}