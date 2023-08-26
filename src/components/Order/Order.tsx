import { useCallback, useEffect, useState } from "react"
import { CartItem, CoffeOrder } from "../CoffeOrder/CoffeOrder"

import styles from './Order.module.css'
import { CoffeData } from "../Coffe/CoffeData"
import { formatCurrency } from "../Format"
import { useNavigate } from "react-router-dom"

export function Order() {
    const [cartItems, setCartItems] = useState<CartItem[]>([])
    const [totalItems, setTotalItems] = useState<number>(0)
    const [totalValue, setTotalValue] = useState<number>(0)

    const navigate = useNavigate()

    const deliveryCost = 4.99

    const calculateTotal = useCallback(() => {
        let valueTotal = 0
    
        cartItems.forEach((item) => {
            valueTotal += item.quantity * CoffeData[item.type].price
        })
    
        const totalValueWithDelivery = valueTotal + deliveryCost
    
        setTotalItems(valueTotal)
        setTotalValue(totalValueWithDelivery);
    }, [cartItems, deliveryCost])
    
    useEffect(() => {
        calculateTotal()
    }, [calculateTotal])

    const handleConfirmOrder = () => {
        navigate('/sucess')
    }
    

    const handleRemoveItem = (itemToRemove: CartItem) => {
        const updatedCartItems = cartItems.filter(
            (item) => item.type !== itemToRemove.type
        )
        localStorage.setItem('cart', JSON.stringify(updatedCartItems));
        setCartItems(updatedCartItems)
    }

    useEffect(() => {
        const storedCart = localStorage.getItem('cart')
        if (storedCart) {
            const parsedCart = JSON.parse(storedCart)
            setCartItems(parsedCart)
        }
    
        calculateTotal()
    }, [calculateTotal])   

    return (
        <div className={styles.orderModal}>
            <h2>Cafés selecionados</h2>
                <div className={styles.orderContent}>
                    {cartItems.map((item, index: number) => (
                        <CoffeOrder key={index} item={item} handleRemoveItem={handleRemoveItem}/>
                    ))}
                    <p>Total de itens <p>{formatCurrency(totalItems)}</p></p>
                    <p>Entrega <p>{formatCurrency(deliveryCost)}</p></p>
                    <p className={styles.total}>Total <p>{formatCurrency(totalValue)}</p></p>
                    <button onClick={handleConfirmOrder} className={styles.confirm}>CONFIRMAR PEDIDO</button>
                </div>
        </div>
    )
}