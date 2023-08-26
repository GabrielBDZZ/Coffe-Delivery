import { Coffe } from "../Coffe/Coffe";

import styles from './CoffeList.module.css'

export function CoffeList() {
    return (
        <div>
            <h1 className={styles.title}>Nossos cafés</h1>
            <Coffe type="express"/>
            <Coffe type="american"/>
            <Coffe type="creamyExpress"/>
            <Coffe type="icedCoffe"/>
            <Coffe type="milkCoffe"/>
            <Coffe type="latte"/>
            <Coffe type="capuccino"/>
            <Coffe type="macchiato"/>
            <Coffe type="mocaccino"/>
            <Coffe type="hotChocolat"/>
            <Coffe type="cuban"/>
            <Coffe type="hawaian"/>
            <Coffe type="arabian"/>
            <Coffe type="irish"/>
        </div>
    )
}