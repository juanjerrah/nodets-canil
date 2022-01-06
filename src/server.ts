import express, {Request, Response} from 'express';
import path from 'path';
import mustache from 'mustache-express';
import dotenv from 'dotenv';
import mainRoutes from './routes/index'
const server = express();

//Ativa Dotenv
dotenv.config();

//Ativa o mustache
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

//Mostra o caminho da pasta public
server.use(express.static(path.join(__dirname, '../public')));

//Possibilita pegar dados da url por meio de requisição GET
server.use(express.urlencoded({extended:true}));

//Ativa as rotas
server.use(mainRoutes);


//Pagina 404
server.use((req: Request, res: Response)=>{
    res.status(404).render('pages/404');
});



//Porta de execução do servidor
server.listen(process.env.PORT);



