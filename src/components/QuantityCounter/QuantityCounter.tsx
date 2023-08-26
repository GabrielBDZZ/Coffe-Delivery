import plus from '../../assets/plus.svg'
import minus from '../../assets/minus.svg'

import styles from './QuantityCounter.module.css'

interface quantityProps {
  quantity: number,
  setQuantity?: (newQuantity: number) => void
}

export function QuantityCounter({ quantity, setQuantity }: quantityProps) {
  function increment() {
    if (setQuantity) {
        setQuantity(quantity + 1);
    }
}

function decrement() {
    if (setQuantity && quantity > 0) {
        setQuantity(quantity - 1);
    }
}

return (
    <div className={styles.input}>
        <button className={styles.decrement} onClick={decrement}>
            <img src={minus} alt="Decrement" />
        </button>
        <input type="number" min="0" max="10" value={quantity} readOnly />
        <button className={styles.increment} onClick={increment}>
            <img src={plus} alt="Increment" />
        </button>
    </div>
)
}