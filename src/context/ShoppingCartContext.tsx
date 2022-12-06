import React, { createContext, ReactNode, useContext, useState } from "react";

interface ShoppingCartProviderProps {
    children: ReactNode;
}

interface CartItem {
    id: number;
    name: string;
    quantity: number;
}

interface ShoppingCartContext {
    getItemQuantity: (id: number) => number;
    increaseQuantity: (id: number) => void;
    decreaseQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
}

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext);
};

export const ShoppingCartProvider = ({
    children,
}: ShoppingCartProviderProps) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const getItemQuantity = (id: number) => {
        return cartItems.find((item) => item.id === id)?.quantity || 0;
    };

    return (
        <ShoppingCartContext.Provider value={{ getItemQuantity }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};
