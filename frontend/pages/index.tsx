import { Box } from '@mui/material'
import type { NextPage } from 'next'
import { Professor } from '../src/@types/professor'
import Lista from '../src/components/Lista/Lista'

const Home: NextPage = () => {

  const professores: Professor[] = [
    {
      id: 1,
      nome: "Professor 1",
      foto: "https://avatars.githubusercontent.com/u/7784067?v=4",
      descricao: "Professor 01",
      valor_hora: 200
    }
  ]

  return (
      <Box sx={{ backgroundColor: 'secondary.main' }}>
        <Lista 
        professores={professores}
        onSelect={(professor) => setProfessorSelecionado(professor)}></Lista>
      </Box>    
  )
}

export default Home