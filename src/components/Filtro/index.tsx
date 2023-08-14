import React, { useState } from "react";
import style from "./Filtro.module.scss";
import { IFiltroDeEventos } from "../../interfaces/IFiltroDeEventos";
import { useSetRecoilState } from "recoil";
import { filtroDeEventos } from "../../state/atom";

const Filtro: React.FC = () => {
  const [data, setData] = useState("");
  const [status, setStatus] = useState("");
  const opcoesStatus = [
    {
      id: 0,
      status: "completo",
    },
    {
      id: 1,
      status: "incompleto",
    },
  ];

  const setFiltroDeEvento =
    useSetRecoilState<IFiltroDeEventos>(filtroDeEventos);

  const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    const filtro: IFiltroDeEventos = {};

    data ? (filtro.data = new Date(data)) : (filtro.data = null);
    status ? (filtro.status = status) : (filtro.status = null);

    setFiltroDeEvento(filtro);
  };

  return (
    <form className={style.Filtro} onSubmit={submeterForm}>
      <h3 className={style.titulo}>Filtrar por data</h3>
      <input
        type="date"
        name="data"
        className={style.input}
        onChange={(evento) => setData(evento.target.value)}
        placeholder="Por data"
        value={data}
      />
      <h3 className={style.titulo}>Filtrar por estado</h3>
      <select onChange={(e) => setStatus(e.target.value)}>
        <option value={""}>Escolha uma opção</option>
        {opcoesStatus.map((opcoesStatus) => (
          <option key={opcoesStatus.id} value={opcoesStatus.status}>
            {opcoesStatus.status}
          </option>
        ))}
      </select>

      <button className={style.botao}>Filtrar</button>
    </form>
  );
};

export default Filtro;
