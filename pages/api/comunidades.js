import { SiteClient } from 'datocms-client';

export default async  function RecebedorDeRquest (request, response){

    if(request.method === `POST`){
    const TOKEN = '0a6eed83272db8fd0b296e6ace3872'
    const client = new SiteClient(TOKEN);

   const registroCriado =  await client.items.create({
        itemType: "972986", //Id do MODEL de comunidades criado pelo dato
        title:"Cachorro Caramelo",
        imageUrl:"https://img10.orkut.br.com/community/7069162165e66c10ac0f2c5.89433454_9477dfd05af50ba0a7ce413dc2624bdc.jpg",
        creatorSlug:"LuizInacio"
    })


    console.log(registroCriado);
        response.json({
            dados: 'Olá Mundo',
            registroCriado: registroCriado,
        })
}
    }

