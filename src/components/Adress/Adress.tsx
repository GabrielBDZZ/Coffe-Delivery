import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from '@phosphor-icons/react'
import styles from './Adress.module.css'
import { AddressData, useAddressContext } from '../AddressProvider';

export function Adress() {
    const { setAddressData,selectedPaymentMethod, setSelectedPaymentMethod } = useAddressContext()

    

    const handlePaymentButtonClick = (method: string) => {
      setSelectedPaymentMethod(method);
    }

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
                <input className={styles.cep} onChange={e => handleAddressInputChange('cep', e.target.value)} inputMode='numeric' minLength={8} maxLength={8} placeholder="CEP" required/>
                <input className={styles.rua} onChange={e => handleAddressInputChange('rua', e.target.value)} placeholder="Rua" required/>
                <div className={styles.inline}>
                    <input className={styles.numero} onChange={e => handleAddressInputChange('numero', e.target.value)} placeholder="Número" inputMode='numeric' required/>
                    <input className={styles.complemento} onChange={e => handleAddressInputChange('complemento', e.target.value)} placeholder="Complemento"/>
                </div>
                <div className={styles.inline2}>
                    <input className={styles.bairro} onChange={e => handleAddressInputChange('bairro', e.target.value)} placeholder="Bairro" required/>
                    <input className={styles.cidade} onChange={e => handleAddressInputChange('cidade', e.target.value)} placeholder="Cidade" required/>
                    <input className={styles.estado} onChange={e => handleAddressInputChange('estado', e.target.value)} placeholder="UF" minLength={2} maxLength={2} required/>
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
                    className={`${selectedPaymentMethod === 'CARTÃO DE CRÉDITO' ? styles.selected : ''}`}
                    onClick={() => handlePaymentButtonClick('CARTÃO DE CRÉDITO')}
                    >
                        <CreditCard size={16} /> CARTÃO DE CRÉDITO
                    </button>
                    <button
                    className={` ${selectedPaymentMethod === 'CARTÃO DE DÉBITO' ? styles.selected : ''}`}
                    onClick={() => handlePaymentButtonClick('CARTÃO DE DÉBITO')}
                    >
                        <Bank size={16} /> CARTÃO DE DÉBITO
                    </button>
                    <button
                    className={` ${selectedPaymentMethod === 'DINHEIRO' ? styles.selected : ''}`}
                    onClick={() => handlePaymentButtonClick('DINHEIRO')}
                    >
                        <Money size={16} /> DINHEIRO
                    </button>
                </div>
            </div>
        </div>
    )
}