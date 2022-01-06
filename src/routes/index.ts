import {  Router } from 'express';
import * as PageController from '../controllers/pageController';
import * as SearchController from '../controllers/searchController';


const router = Router();


router.get('/', PageController.home)
router.get('/', PageController.dogs)
router.get('/', PageController.cats)
router.get('/', PageController.fishes)
router.get('/', SearchController.search)


export default router;