import { Trash } from '@phosphor-icons/react'
import { QuantityCounter } from '../QuantityCounter/QuantityCounter'

import styles from './CoffeOrder.module.css'
import { CoffeData } from '../Coffe/CoffeData'
import { formatCurrency } from "../Format"

export interface CartItem {
    type: string;
    quantity: number;
}

interface CoffeOrderProps {
    item: CartItem;
    handleRemoveItem: (itemToRemove: CartItem) => void;
}
  
export function CoffeOrder({ item, handleRemoveItem }: CoffeOrderProps) {
    const { type } = item
    const { image, name, price } = CoffeData[type]

    const handleClickRemove = () => {
        handleRemoveItem(item)
    }

    const handleQuantityChange = (newQuantity: number) => {
        const updatedItem = { ...item, quantity: newQuantity }
        const updatedCart = JSON.parse(localStorage.getItem('cart') || '[]')
            .map((cartItem: CartItem) => cartItem.type === updatedItem.type ? updatedItem : cartItem)
        localStorage.setItem('cart', JSON.stringify(updatedCart))
    }


    return (
        <div className={styles.orderContent}>
            <img className={styles.coffeImg} src={image} />
            <div className={styles.description}>
                <p>{name}</p>
                <div className={styles.buttons}>
                    <QuantityCounter quantity={item.quantity} setQuantity={handleQuantityChange} />
                    <button onClick={handleClickRemove} className={styles.trashButton}><Trash className={styles.trash} size={16} />REMOVER</button>
                </div>
            </div>
            <p className={styles.price}>{formatCurrency(price)}</p>
        </div>
    )
}