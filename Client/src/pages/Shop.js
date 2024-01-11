import React, { useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import MaterialBar from "../components/MaterialBar";
import JewelryList from "../components/JewelryList";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import {fetchJewelries, fetchMaterials, fetchTypes} from  "../http/jewelryAPI";
import Pages from "../components/Pages";

const Shop = observer(() => {
    const {jewelry} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => jewelry.setTypes(data))
        fetchMaterials().then(data => jewelry.setMaterials(data))
        fetchJewelries(null, null, 1, 8).then(data => {
            jewelry.setJewelries(data.rows)
            jewelry.setTotalCount(data.count)
        })
    }, [])

        useEffect(() => {
        fetchJewelries(jewelry.selectedType.id,jewelry.selectedMaterial.id, jewelry.page, 8).then(data => {
            jewelry.setJewelries(data.rows)
            jewelry.setTotalCount(data.count)
        })
    }, [jewelry.page, jewelry.selectedType, jewelry.selectedMaterial,])
    

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <MaterialBar/>
                    <JewelryList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;