import React from 'react';
import c from "../../Profile.module.css";

type PostType = {
    message: string
    like: number
}
export const Post = (props: PostType) => {
    return (
        <div className= {c.item}>
            {props.message}
            <div>
                like: {props.like}
            </div>
        </div>
    );
};
