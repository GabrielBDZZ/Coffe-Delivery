import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from '@phosphor-icons/react'
import styles from './Adress.module.css'
import { createContext, useState } from 'react';

interface AddressData {
    cep: string,
    rua: string,
    numero: string,
    complemento: string,
    bairro: string,
    cidade: string,
    estado: string
}

interface AddressContextData {
    addressData: AddressData
}

export const AddressContext = createContext({} as AddressContextData)


export function Adress() {

    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null)

    const handlePaymentButtonClick = (method: string) => {
      setSelectedPaymentMethod(method);
    }

    const [addressData, setAddressData] = useState({})

    console.log(addressData)

    const handleAddressInputChange = (field: keyof AddressData, value: string) => {
        setAddressData(prevData => ({
            ...prevData,
            [field]: value,
        }))
    }

    return (
        <div className={styles.modal}>
            <h2>Complete seu pedido</h2>

            <div className={styles.adress}>
            <div className={styles.title}>
                <div className={styles.iconContainer}>
                    <MapPinLine size={22} className={styles.mapPin}/>
                </div>
                <div className={styles.textContainer}>
                    <h3>Endereço de Entrega</h3>
                    <p>Informe o endereço onde deseja receber seu pedido</p>
                </div>
            </div>
                <input className={styles.cep} inputMode='numeric' minLength={8} maxLength={8} placeholder="CEP" required/>
                <input className={styles.rua} onChange={e => handleAddressInputChange('rua', e.target.value)} placeholder="Rua" required/>
                <div className={styles.inline}>
                    <input className={styles.numero} placeholder="Número" inputMode='numeric' required/>
                    <input className={styles.complemento} placeholder="Complemento"/>
                </div>
                <div className={styles.inline2}>
                    <input className={styles.bairro} placeholder="Bairro" required/>
                    <input className={styles.cidade} placeholder="Cidade" required/>
                    <input className={styles.estado} placeholder="UF" minLength={2} maxLength={2} required/>
                </div>
            </div>
            <div className={styles.payment}>
                <div className={styles.title}>
                    <div className={styles.iconContainer}>
                        <CurrencyDollar size={22} className={styles.dollar}/>
                    </div>
                    <div className={styles.textContainer}>
                        <h3>Pagamento</h3>
                        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <button
                    className={`${selectedPaymentMethod === 'credit-card' ? styles.selected : ''}`}
                    onClick={() => handlePaymentButtonClick('credit-card')}
                    >
                        <CreditCard size={16} /> CARTÃO DE CRÉDITO
                    </button>
                    <button
                    className={` ${selectedPaymentMethod === 'debit-card' ? styles.selected : ''}`}
                    onClick={() => handlePaymentButtonClick('debit-card')}
                    >
                        <Bank size={16} /> CARTÃO DE DÉBITO
                    </button>
                    <button
                    className={` ${selectedPaymentMethod === 'cash' ? styles.selected : ''}`}
                    onClick={() => handlePaymentButtonClick('cash')}
                    >
                        <Money size={16} /> DINHEIRO
                    </button>
                </div>
            </div>
        </div>
    )
}