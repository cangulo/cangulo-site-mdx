import React from 'react';

export default ({ title, subtitle, date, img, logo }) => (
    <section >
        <h1 >{title}</h1>
        {date ?? <h2>{subtitle}</h2>}
        {date ?? <i><p>{date}</p></i>}
    </section>

)