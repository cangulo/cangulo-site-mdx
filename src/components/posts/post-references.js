import React from 'react';

const PostReferences = ({ references }) => {
    if (references && references.length > 0) {
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
}
export default PostReferences