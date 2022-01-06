import { Request, Response } from 'express';
import { createMenuObject } from '../helper/createMenuObject'
import { Pet } from '../models/Pet'

export const home = (req:Request, res:Response)=>{

    let listAnimals = Pet.getAll();

    res.render('pages/page',{
        listAnimals,
        menu: createMenuObject('all'),
        banner:{
            title:'Todos os animais',
            background: 'allanimals.jpg'
        }
    });
};

export const dogs = (req:Request, res:Response)=>{

    let listAnimals = Pet.petType('dog')

    res.render('pages/page',{
        listAnimals,
        menu: createMenuObject('dog'),
        banner:{
            title:'Cachorros',
            background: 'banner_dog.jpg'
        }
    });
    //res.render()
};
export const cats = (req:Request, res:Response)=>{

    let listAnimals = Pet.petType('cat');


    res.render('pages/page',{
        listAnimals,
        menu: createMenuObject('cat'),
        banner:{
            title:'Gatos',
            background: 'banner_cat.jpg'
        }
    });
    //res.render()
};
export const fishes = (req:Request, res:Response)=>{
    let listAnimals = Pet.petType('fish');

    res.render('pages/page',{
        listAnimals,
        menu: createMenuObject('fish'),
        banner:{
            title:'Peixes',
            background: 'banner_fish.jpg'
        }
    });
    //res.render()
};
