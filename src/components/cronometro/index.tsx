import Botao from "../botao";
import Relogio from "./relogio";
import style from "./Cronometro.module.scss";
import { ITarefa } from "../types/tarefa";
import { useEffect, useState } from "react";
import { TempoParaSegundos } from "../../common/utils/time";

interface Props {
    selecionado: ITarefa | undefined,
    finalizarTarefa: () => void
};

function Cronometro({ selecionado, finalizarTarefa }: Props) {

    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        if (selecionado?.tempo) {
            setTempo(TempoParaSegundos(selecionado.tempo));
        };
    }, [selecionado]);

    function regressiva(contador: number = 0): void{
        setTimeout(() => {
            if(contador > 0) {
                setTempo(contador - 1);
                return regressiva(contador - 1);
            };
            finalizarTarefa();
        }, 1000)
    };

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            Tempo: {tempo}
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo}/>
            </div>
            <Botao onClick={() => regressiva(tempo)}>Começar</Botao>
        </div>
    );
};

export default Cronometro;