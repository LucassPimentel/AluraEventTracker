import {useRecoilValue} from 'recoil'
import { eventosFiltradosState } from "../seletores"

export default function useListarEventos(){
    return useRecoilValue(eventosFiltradosState)
}