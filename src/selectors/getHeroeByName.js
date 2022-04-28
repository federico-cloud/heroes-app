import {heroes} from '../data/heroes';

export const getHeroeByName = ( name = '' ) => {

    name = name.toLowerCase();

    if(name === '') {
        return [];
    }

    let heroesFilter = heroes.filter( heroe => heroe.superhero.toLowerCase().includes( name ) ); 

    return heroesFilter;
    
}