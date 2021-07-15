import React from 'react'
import MainGrid from "../src/components/MainGrid/index"
import Box from "../src/components/Box/box"
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from "../src/lib/AlurakutCommons"
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelation/index"

function ProfileSidebar(propriedades) {
  return (
    <Box as='aside'>
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }} />
      <hr />
      <p>
        <a className="boxLink" href={`https://github.com/${propriedades.githubUser}`}>
          @{propriedades.githubUser}
        </a>
      </p>
      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>

  )
}

export default function Home(){
  const [comunidades , setComunidades] = React.useState([
    {
      id:'1231231321',
      title:'Anão Vestido de Palhaço mata 7',
      image:'https://www.socialdub.com/groupspictures/5934/59341256110230520887.jpg?x2'
    }
  ]);
  console.log(comunidades);
  const githubUser = 'leandroaragao31';
  const pessoasFavoritas = ['rhayssadandara', 'juunegreiros', 'marxxbluecode', 'luanpires94', 'pamelaferreiralima', 'lailadrumond']

  return (
    <>
      <AlurakutMenu />
      <MainGrid>

        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={githubUser} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">
              Bem vindo(a)
            </h1>

            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2>O que você deseja Fazer?</h2>
            <form onSubmit={function handleCreateComunity(e) {
              e.preventDefault();
              const dadosDoForm = new FormData(e.target);
              console.log('Campo:', dadosDoForm.get("title"))
              console.log('Campo:', dadosDoForm.get("image"))

              const comunidade ={
                id: new date().toISOString(),
                title: dadosDoForm.get("title"),
                image: dadosDoForm.get("image")
              }
              const comunidadesAtualizadas = [...comunidades, comunidade]
             setComunidades(comunidadesAtualizadas)
              console.log(comunidades);
              
            }
            }>
              <div>
                <input
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text "
                />
              </div>
              <div>
                <input
                  placeholder="Coloque uma URL para usarmos de Capa"
                  name="image"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                />
              </div>
              <button>
                Cria Comunidades
              </button>
            </form>
          </Box>
          <Box>
            <h2>Depoimentos</h2>
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="subTitle">Comunidades ({comunidades.length})</h2>
            <ul>
              {comunidades.map((item) => {
                return (
                  <li key={item.id}>
                    <a href={`/users/${item.title}`}>
                      <img src={item.image} alt="imagem"/>
                      <span>{item.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>

            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.map((item) => {
                return (
                  <li>
                    <a href={`/users/${item}`} key={item}>
                      <img src={`https://github.com/${item}.png`} />
                      <span>{item}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}
