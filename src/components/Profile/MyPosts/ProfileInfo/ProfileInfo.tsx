import React from 'react';
import c from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={c.avatar1}
                     src='https://kartinkin.net/uploads/posts/2021-07/1626976093_29-kartinkin-com-p-neitralnii-zadnii-fon-krasivo-29.jpg'
                     alt=""/>'
            </div>
            <div className={c.descriptionBlock}>
                <img className={c.avatar2}
                     src="https://cdnn1.img.sputnik-ossetia.ru/img/994/81/9948189_26:0:1744:1080_1920x0_80_0_0_6537e24471af4b278ad83d8d1f29946f.jpg"
                     alt=""/>
            </div>
        </div>
    );
};

