import { ShoppingCart, Package, Timer, Coffee } from '@phosphor-icons/react'

import background from '../../assets/home-bg.svg'

import styles from './Cover.module.css'

export function Cover() {
    return (
        <div className={styles.cover}>
            <div className={styles.title}>
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <p className={styles.description}>Com o Coffe Delivery você recebe seu café onde estiver, a qualquer hora</p>
            
            <div className={styles.values}>
                <p><ShoppingCart className={styles.cart} size={16} weight='fill'/>  Compra simples e segura</p>
                <p><Package className={styles.package} size={16} weight='fill'/>  Embalagem mantém o café intacto</p>
            </div>
            <div className={styles.values2}>
                <p><Timer className={styles.timer} size={16} weight='fill'/>  Entrega rápida e rastreada</p>
                <p><Coffee className={styles.coffee} size={16} weight='fill'/>  O café chega fresquinho até você</p>
            </div>
            </div>
            <img src={background}/>
        </div>
    )
}