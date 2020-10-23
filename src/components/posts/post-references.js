import React from 'react';

export default ({ references }) => {
    return (
        <section >
            <h2>References</h2>
            <div style={{ marginTop: '10px' }}>
                {references.map((refPairValue) => (
                    <p>
                        <a href={refPairValue[1]}>{refPairValue[0]}</a>
                    </p>
                ))}
            </div>
        </section>
    )
}