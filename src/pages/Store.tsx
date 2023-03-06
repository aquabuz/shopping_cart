import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import data from "../data/items.json";
import StoreItem from "../components/StoreItem";

export interface JSON_DATA {
    id: number;
    name: string;
    price: number;
    imgUrl: string;
}

export function Store() {
    // const [data, setData] = useState<[JSON_DATA]>();

    // const fetchData = useCallback(async () => {
    //     try {
    //         await axios({
    //             method: "get",
    //             url: "https://jsonplaceholder.typicode.com/photos",
    //             params: {
    //                 _limit: 10,
    //             },
    //         }).then((response) => setData(response.data));
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }, []);

    // useEffect(() => {
    //     fetchData();
    //     console.log(data);
    // }, []);

    return (
        <>
            <h1>store</h1>
            <Row md={2} xs={1} lg={3} className="g-3">
                {data &&
                    data.map((item: JSON_DATA) => (
                        <Col key={item.id}>
                            <StoreItem {...item} />
                        </Col>
                    ))}
            </Row>
        </>
    );
}
