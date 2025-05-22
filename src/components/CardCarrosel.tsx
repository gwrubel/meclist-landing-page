import chaveCheia from '../assets/icons/chave.svg'
import chaveVazia from '../assets/icons/chave-vazia.svg'

import '../styles/cardCarrosel.css'

interface ICardCarroselProps {
    ImagemCliente: string;
    comentario: string;
    chaves: number;
    nome: string;
    cargo: string;
}

export default function CardCarrosel({ImagemCliente, comentario, chaves, nome, cargo}:ICardCarroselProps) {
  return (
    <div className='carousel-card'>
        <img src={ImagemCliente} alt="imagem do cliente" />
        <span className='depoimento' >
            <p>
                {comentario}
            </p>
        </span>
        <span className='estrelas'>
            {[...Array(chaves)].map((_, index) => (
                <img key={index} src={chaveCheia} alt="chave cheia"  width={22} height={20}/>
            ))}
            {[...Array(5 - chaves)].map((_, index) => (
                <img key={index} src={chaveVazia} alt="chave vazia" width={22} height={20}/>
            ))}
        </span>
        <span className='infos-card'>
            <p>{nome}</p>
            <p>{cargo}</p>
        </span>
    </div>
  )
}