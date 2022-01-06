import { Request, Response } from 'express';
import { Pet } from '../models/Pet';


export const search = (req: Request, res: Response) => {

    let searchBox: string = req.query.q as string;
    let listAnimals = Pet.getByName(searchBox)

    /*Se no campo de pesquisa não houver nada, mas mesmo assim apertar enter
    então volta pro menu inicial*/
    if(!searchBox){
        res.redirect('/')
        return;
    }

    res.render('pages/page',{
        listAnimals,
        searchBox
    });
}