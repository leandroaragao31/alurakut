
import MainGrid from "../src/components/MainGrid/index"
import Box from "../src/components/Box/box"
import { AlurakutMenu, OrkutNostalgicIconSet } from "../src/lib/AlurakutCommons"
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelation/index"

function ProfileSidebar(props) {
  return (
    <Box >
      <img src={`https://github.com/${props.githubUser}.png`} alt="" />
    </Box>
  )
}


export default function Home() {

  const githubUser = 'rhayssadandara';
  const pessoasFavoritas = ['leandroaragao31', 'juunegreiros', 'marxxbluecode', 'luanpires94']

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={githubUser} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box >
            <h1 className="title">Bem vindo</h1>

            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div className="profileRelationArea" style={{ gridArea: 'profileRelationArea' }}>
          <ProfileRelationsBoxWrapper >
            <h2 className="smallTitles">
              Pessoas da Progamação  ({pessoasFavoritas.length})
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
