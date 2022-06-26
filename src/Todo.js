import React from 'react'
import Form from './components/Form';
import Header from './components/Header';
import List from './components/List';

export default function TodoContainer(props) {

    return (
        <>
            <Header />
            <Form handlers={props} />
            <List handlers={props} />
        </>
    )
}
