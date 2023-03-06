import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import data from "../data/items.json";
import formatCurrency from "../utilities/formatCurrency";
import CartItems from "./CartItems";

interface ShoppingCartProps {
    isOpen: Boolean;
}

export default function ShoppingCart({ isOpen }: ShoppingCartProps) {
    const { closeCart, cartItems } = useShoppingCart();
    return (
        <Offcanvas
            cols={5}
            show={isOpen}
            onHide={closeCart}
            placement="end"
            style={{ width: "75%" }}
        >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map((item) => (
                        <CartItems key={item.id} {...item} />
                    ))}
                    <div className="ms-auto fw-bold fs-5">
                        {formatCurrency(
                            cartItems.reduce((total, cartItem) => {
                                const item = data.find(
                                    (i) => i.id === cartItem.id
                                );
                                return (
                                    total +
                                    (item?.price || 0) * cartItem.quantity
                                );
                            }, 0)
                        )}
                    </div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    );
}
