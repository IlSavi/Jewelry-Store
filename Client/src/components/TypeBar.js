import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import { Context } from "..";

const TypeBar = observer(() => {
    const{jewelry} = useContext(Context)
    const listItemStyle = {
        cursor: 'pointer',
        color: '#c79560',
        fontFamily:'Serifiqo',
    };
    const activeListItemStyle = {
        cursor: 'pointer',
        color: 'white',
        backgroundColor: '#c79560',
        border:'none',
        fontFamily:'Serifiqo'
    };
    return (
        <ListGroup 
            style={{border:"2px solid #c79560",}}
        >
            {jewelry.types.map(type =>
                <ListGroup.Item 
                    style={type.id === jewelry.selectedType.id ? activeListItemStyle : listItemStyle}
                    active={type.id === jewelry.selectedType.id}
                    onClick={() => jewelry.setSelectedType(type)}
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>    
            )}
        </ListGroup>
    );
});

export default TypeBar;