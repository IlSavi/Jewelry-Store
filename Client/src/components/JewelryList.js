import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";
import { Row } from "react-bootstrap";
import JewelryItem from "./JewelryItem";

const JewelryList = observer(() => {
    const {jewelry} = useContext(Context)

    return (
        <Row className="d-flex">
            {jewelry.jewelries.map(jewelry =>
                <JewelryItem key={jewelry.id} jewelry={jewelry}/>
            )}
        </Row>
    );
});

export default JewelryList