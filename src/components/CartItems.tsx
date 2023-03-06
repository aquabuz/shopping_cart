import { Button, Stack } from "react-bootstrap";
import {
    CartItem as CartItemProps,
    useShoppingCart,
} from "../context/ShoppingCartContext";
import data from "../data/items.json";
import formatCurrency from "../utilities/formatCurrency";

export default function CartItems({ id, quantity }: CartItemProps) {
    const { removeFromCart } = useShoppingCart();
    const item = data.find((item) => item.id === id);

    if (item == null) return null;

    return (
        <Stack direction="horizontal" gap={2}>
            <img
                src={item.imgUrl}
                style={{ width: "125px", height: "75px", objectFit: "cover" }}
            />
            <div className="me-auto">
                <div>
                    {item.name}{" "}
                    {quantity > 1 && (
                        <span
                            className="text-muted"
                            style={{ fontSize: "0.65rem" }}
                        >
                            {quantity}x
                        </span>
                    )}
                </div>
                <div className="text-muted" style={{ fontSize: "0.75rem" }}>
                    {formatCurrency(item.price)}
                </div>
            </div>
            <div>{formatCurrency(item.price * quantity)}</div>
            <Button
                variant="outline-danger"
                size="sm"
                onClick={() => removeFromCart(item.id)}
            >
                &times;
            </Button>
        </Stack>
    );
}
