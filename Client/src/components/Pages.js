import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../index';
import { Pagination } from 'react-bootstrap';
import 'bootstrap'

const Pages = observer(() => {
    const {jewelry} = useContext(Context)
    const pageCount = Math.ceil(jewelry.totalCount / jewelry.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i+1)
    }

    return(
        <Pagination className='mt-5'>
            {pages.map(page =>
                <Pagination.Item
                    key={page}
                    active={jewelry.page === page}
                    onClick={() => jewelry.setPage(page)}
                >
                    {page}
                </Pagination.Item>    
            )}
        </Pagination>
    );
});

export default Pages;