import React from 'react';
import CustomImg from '../custom-img';

export default ({ title, subtitle, date, imgId, logo }) => (
    <section >
        <h1 >{title}</h1>
        {date ?? <h2>{subtitle}</h2>}
        {date ?? <i><p>{date}</p></i>}
        {imgId ?? <CustomImg imgId={imgId} />}
    </section>

)