import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react"
import { CartItem } from "./CoffeOrder/CoffeOrder"

export interface AddressData {
    cep: string,
    rua: string,
    numero: string,
    complemento: string,
    bairro: string,
    cidade: string,
    estado: string
}

interface AddressContextData {
    addressData: AddressData,
    setAddressData: React.Dispatch<React.SetStateAction<AddressData>>
    selectedPaymentMethod: String | null,
    setSelectedPaymentMethod: Dispatch<SetStateAction<string | null>> 
    cartItems: Array<CartItem>
    setCartItems: React.Dispatch<React.SetStateAction<Array<CartItem>>>
}

const AddressContext = createContext<AddressContextData | undefined>(undefined)

interface AddressProviderProps {
    children: ReactNode
}

export function AddressProvider({ children }: AddressProviderProps) {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null)
    const [addressData, setAddressData] = useState<AddressData>({
        cep: '',
        rua: '',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        estado: ''
    })

    const [cartItems, setCartItems] = useState<CartItem[]>([])

    return (
        <AddressContext.Provider value={{ addressData, setAddressData, selectedPaymentMethod, setSelectedPaymentMethod, cartItems, setCartItems }}>
            {children}
        </AddressContext.Provider>
    )
}

export function useAddressContext() {
    const context = useContext(AddressContext)
    if (!context) {
        throw new Error("useAddressContext must be used within an AddressProvider")
    }
    return context;
}

export default AddressProvider
