import { Fragment } from "react";
import style from "./Relogio.module.scss";

interface Props {
    tempo: number | undefined
};

function Relogio({ tempo = 0 }: Props) {

    const minutos: number = Math.floor(tempo / 60);
    const segundos: number = tempo % 60;
    const [minutoDezena, minutoUnidade]: string = String(minutos).padStart(2, "0");
    const [segundoDezena, segundoUnidade]: string = String(segundos).padStart(2, "0");
    return (
        <Fragment>
            <span className={style.relogioNumero}>{minutoDezena}</span>
            <span className={style.relogioNumero}>{minutoUnidade}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{segundoDezena}</span>
            <span className={style.relogioNumero}>{segundoUnidade}</span>
        </Fragment>
    );
};

export default Relogio;