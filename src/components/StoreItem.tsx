import React from "react";
import { Button, Card } from "react-bootstrap";
import { JSON_DATA } from "../pages/Store";
import formatCurrency from "../utilities/formatCurrency";

const StoreItem = ({ id, name, price, imgUrl }: JSON_DATA) => {
    const quantity = 0;

    return (
        <Card className="h-100">
            <Card.Img
                variant="top"
                src={imgUrl}
                height="200px"
                style={{ objectFit: "cover" }}
            />
            <Card.Body
                className="d-flex flex-column"
                style={{ height: "200px" }}
            >
                <Card.Title className="mb-0 d-flex flex-column h-100 gap-2 overflow-hidden">
                    <span className="fs-5 fw-bold text-nowrap text-break text-truncate">
                        {name}
                    </span>
                    <span className="fs-6 text-nowrap text-break text-truncate">
                        {formatCurrency(price)}
                    </span>
                    <div className="mt-auto">
                        {quantity === 0 ? (
                            <Button className="w-100">+ Add to Cart</Button>
                        ) : (
                            <div className="d-flex w-100 align-items-center flex-column">
                                <div className="d-flex align-items-center justify-content-between w-100">
                                    <Button size="sm">-</Button>
                                    <div className="d-flex">
                                        <span className="">{quantity}</span>
                                    </div>
                                    <Button size="sm">+</Button>
                                </div>
                                <Button variant="danger" size="sm">
                                    Remove
                                </Button>
                            </div>
                        )}
                    </div>
                </Card.Title>
            </Card.Body>
        </Card>
    );
};

export default StoreItem;
