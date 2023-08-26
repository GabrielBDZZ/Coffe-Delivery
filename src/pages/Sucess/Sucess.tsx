import { MapPin, Timer, CurrencyDollarSimple } from '@phosphor-icons/react'

import sucess from '../../assets/sucess.svg'
import styles from './Sucess.module.css'
import { AddressContext } from '../../components/Adress/Adress'
import { useContext } from 'react'

export function Sucess() {
    const {addressData} = useContext(AddressContext)
    // console.log(addressData.rua)

    return(
        <AddressContext.Provider value={{addressData}}>
            <div className={styles.sucess}>
                <div className={styles.title}>
                    <h1>Uhu! Pedido confirmado</h1>
                    <p className={styles.description}>Agora é só aguardar que logo o café chegará até você</p>
                </div>
                <div className={styles.content}>
                    <div className={styles.info}>
                        {addressData ? (
                        <>
                            <p className={styles.map}>
                                <MapPin className={styles.mapPin} size={16} weight="fill" />
                                Entregar em {addressData.rua}, 99 <br /> Jardim Nobre - Rolândia, PR
                            </p>
                            <p className={styles.time}><Timer className={styles.timer} size={16} weight="fill" />Previsão de entrega <br />20min - 30 min</p>
                            <p className={styles.payment}><CurrencyDollarSimple className={styles.dollar} size={16} />Pagamento na entrega <br />Cartão de Crédito</p>
                        </>
                        ) : (
                        <p>Carregando...</p>
                        )}
                    </div>
                    <img src={sucess}/>
                </div>
            </div>
        </AddressContext.Provider>
    )
}