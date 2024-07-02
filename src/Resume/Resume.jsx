import React, { useState } from 'react';

const PDFViewer = ({ file_name }) => {
    const file_name = useState(file_name);
    return (
        <div>
            <iframe src={process.env.PUBLIC_URL + "/data/vish_data/" + file_name} width="100%" height="500px" />
        </div>
    );
};
export default PDFViewer;