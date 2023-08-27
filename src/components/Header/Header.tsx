import  logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'

import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'
import { useAddressContext } from '../AddressProvider'

export function Header () {
    const { cartItems } = useAddressContext()

    return (
        <nav className={styles.head}>
            <NavLink to='/' title='Home'>
                <img className={styles.logo} src={logo} alt="" />
            </NavLink>
                <div className={styles.buttons}>
                    <label className={styles.map}><MapPin className={styles.mapa} size={22} weight="fill" /> Rolândia, PR</label>
                    <NavLink to='/cart'>
                        <button >
                            <ShoppingCart className={styles.cart} size={22} weight="fill" />
                            {cartItems.length > 0 && 
                            <span className={styles.cartItemCount}>
                                {cartItems.length}
                            </span>}
                        </button>
                    </NavLink>
                </div>
        </nav>
    )
}