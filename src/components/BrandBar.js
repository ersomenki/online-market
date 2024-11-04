import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";

const ComponentBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <Row className="d-flex">
            {
                device.brand.map(brand =>
                <Card
                    key={brand.id}
                    className="p-3"
                >
                    {brand.name}
                </Card>
                )
            }
        </Row>
    );
});

export default ComponentBar;