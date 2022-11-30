import { useEffect, useState } from "react";
import axios from "axios";

interface Props {
    [key: string]: string;
}

export function Store() {
    const [data, setData] = useState<[Props]>();

    useEffect(() => {
        return () => {
            const fetchData = async () => {
                try {
                    await axios({
                        method: "get",
                        url: "https://jsonplaceholder.typicode.com/posts",
                    }).then((response) => setData(response.data));
                } catch (error) {
                    console.log(error);
                }
            };
            fetchData();
        };
    }, []);

    return (
        <div>
            {data &&
                data.map((item: Props) => {
                    return <p key={item.id}>{item.title}</p>;
                })}
        </div>
    );
}
