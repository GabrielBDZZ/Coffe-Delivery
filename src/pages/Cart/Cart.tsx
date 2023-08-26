import { Adress } from '../../components/Adress/Adress'
import { Order } from '../../components/Order/Order'

import styles from './Cart.module.css'

export function Cart() {
    return (
        <div className={styles.cart}>
            <Adress/>
            <Order/>
        </div>
    )
}