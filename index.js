import { createClient } from 'redis';

const client = createClient();

async function connectar(){
    client.on('error', (err) => console.log('Redis Client Error', err));
    await client.connect();
}

async function salvar(obj){
    const saida = await client.set(obj.email, JSON.stringify(obj),{EX: 30});
    console.log(saida);
}

async function buscar(email){
    const saida = await client.get(email);
    console.log(JSON.parse(saida));
}

const objeto = {
    nome: 'paulo',
    email: 'paulo@gmail.com'
}

connectar();
salvar(objeto);
// buscar('paulo@gmail.com');

