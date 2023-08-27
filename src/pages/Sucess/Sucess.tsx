import { MapPin, Timer, CurrencyDollarSimple } from '@phosphor-icons/react'

import sucess from '../../assets/sucess.svg'
import styles from './Sucess.module.css'
import { useAddressContext } from '../../components/AddressProvider'

export function Sucess() {
    const { addressData, selectedPaymentMethod } = useAddressContext()

    return(  
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
                                Entregar em {addressData.rua}, {addressData.numero} <br />{addressData.bairro} - {addressData.cidade}, {addressData.estado}
                            </p>
                            <p className={styles.time}><Timer className={styles.timer} size={16} weight="fill" />Previsão de entrega <br />20min - 30 min</p>
                            <p className={styles.payment}><CurrencyDollarSimple className={styles.dollar} size={16} />Pagamento na entrega <br />{selectedPaymentMethod}</p>
                        </>
                        ) : (
                        <p>Carregando...</p>
                        )}
                    </div>
                    <img src={sucess}/>
                </div>
            </div>
    )
}