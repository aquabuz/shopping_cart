import { NavLink } from "react-router-dom";
import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Navbar(params: any) {
    const { openCart, cartQuantity } = useShoppingCart();

    return (
        <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
            <Container>
                <Nav>
                    <Nav.Link to="/" as={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to="/store" as={NavLink}>
                        Store
                    </Nav.Link>
                    <Nav.Link to="/about" as={NavLink}>
                        About
                    </Nav.Link>
                </Nav>
                <Button
                    onClick={openCart}
                    style={{
                        width: "3rem",
                        height: "3rem",
                        position: "relative",
                    }}
                    variant="outline-primary"
                    className="rounded-circle"
                >
                    <FontAwesomeIcon icon={faCartShopping} />
                    {cartQuantity > 0 && (
                        <div
                            className="rounded-circle bg-danger d-flex justify-content-center align-item-center"
                            style={{
                                color: "white",
                                width: "1.5rem",
                                height: "1.5rem",
                                position: "absolute",
                                bottom: 0,
                                transform: "translate(25%, 25%)",
                            }}
                        >
                            {cartQuantity}
                        </div>
                    )}
                </Button>
            </Container>
        </NavbarBs>
    );
}
