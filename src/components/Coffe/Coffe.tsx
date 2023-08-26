import { ShoppingCartSimple } from '@phosphor-icons/react'

import { CoffeData } from './CoffeData'

import styles from './Coffe.module.css'
import { QuantityCounter } from '../QuantityCounter/QuantityCounter'
import { formatCurrency } from "../Format"
import { useState } from 'react'
import { CartItem } from '../CoffeOrder/CoffeOrder'

interface CoffeProps {
    type: keyof typeof CoffeData;
}


export function Coffe({ type }: CoffeProps) {
    const { image, coffeType, name, description, price } = CoffeData[type]

    const [quantity, setQuantity] = useState(0)

    const addToCart = () => {
        
        if (quantity > 0) {
            const existingCart = JSON.parse(localStorage.getItem('cart') || '[]')
            
            const existingItemIndex = existingCart.findIndex((item:CartItem) => item.type === type)
            
            if (existingItemIndex !== -1) {
                existingCart[existingItemIndex].quantity += quantity
            } else {
                existingCart.push({
                    type,
                    quantity,
                });
            }
            
            localStorage.setItem('cart', JSON.stringify(existingCart))
        }
    }

    return (
        <div className={styles.coffe}>
            <img src={image} alt="" />
            <div className={styles.coffeType}>
                {coffeType.map((singleCoffeType, index) => (
                    <p key={index}>{singleCoffeType}</p>
                ))}
            </div>
            <h1>{name}</h1>
            <p className={styles.description}>{description}</p>
            <div className={styles.footer}>
                <h2>{formatCurrency(price)}</h2>
                <QuantityCounter quantity={quantity} setQuantity={setQuantity}/>
                <button onClick={addToCart} className={styles.cartButton}><ShoppingCartSimple className={styles.cart} size={22} weight="fill"/></button>
            </div>
        </div>
    )
}