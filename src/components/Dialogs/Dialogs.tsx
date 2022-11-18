import React from 'react';
import s from './Dialogs.module.css'

import {NavLink} from "react-router-dom";

type  DialogItemType = {
    id: number,
    name: string
}

export const DialogItem = (props: DialogItemType) => {
    let path = '/dialogs/' + String(props.id)
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

type MessageType = {
    message: string
}

export const Message = (props: MessageType) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
};

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem id={1} name='Lena'/>
                <DialogItem id={2} name='Dima'/>
                <DialogItem id={3} name='Sasha'/>
                <DialogItem id={4} name='Ignat'/>
                <DialogItem id={5} name='Kirill'/>
            </div>
            <div className={s.messages}>
                <Message message='Hello'/>
                <Message message='Yes'/>
                <Message message='What are you doing?'/>
            </div>
        </div>
    );
};



