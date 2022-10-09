import { Button } from "@mui/material";

import {
  Descricao,
  Foto,
  Informacoes,
  ItemLista,
  ListaStyled,
  Nome,
  Valor,
} from "./Lista.style";

const Lista = () => {
  return (
    <ListaStyled>
      <ItemLista>
        <Foto src="	https://avatars.githubusercontent.com/u/7784067?v=4"></Foto>
        <Informacoes>
          <Nome>Marcos Fernando</Nome>
          <Valor>R$ 100,00</Valor>
          <Descricao>Auas Programaçao</Descricao>
          <Button>Marcar Aula</Button>
        </Informacoes>
      </ItemLista>
      <ItemLista>
        <Foto src="	https://avatars.githubusercontent.com/u/7784067?v=4"></Foto>
        <Informacoes>
          <Nome>Marcos Fernando</Nome>
          <Valor>R$ 100,00</Valor>
          <Descricao>Auas Programaçao</Descricao>
          <Button>Marcar Aula</Button>
        </Informacoes>
      </ItemLista>
    </ListaStyled>
  );
};

export default Lista;
