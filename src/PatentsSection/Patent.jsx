import { useState } from 'react';
import "./Patent.css"
import data from './data_patents.json'
export const Patent = () => {
    console.log(data)
    const [patent_data, setPatentData] = useState(data)
    return <>
        <div style={{ textAlign: 'justify' }}>
            <div style={{ width: '100%', maxWidth: '800px', border: '0px', borderSpacing: '0px', borderCollapse: 'separate', marginRight: 'auto', marginLeft: 'auto' }}>
                <h2>Patents</h2>
                <table style={{
                    width: '100%', border: '0px', borderSpacing: '0px', borderCollapse: 'separate', marginRight: 'auto', marginLeft: 'auto'
                }} >
                    <tbody>

                        {
                            patent_data && patent_data.length > 0 && patent_data.map((row, index) => (
                                <tr>

                                    <td style={{ padding: '20px', width: '75%', verticalAlign: 'middle' }}>
                                        <h5><a href={row.link}>
                                            <span className="papertitle">{row.title}</span>
                                        </a></h5>

                                        <div dangerouslySetInnerHTML={{ __html: row.authors }} ></div>
                                        <div dangerouslySetInnerHTML={{ __html: row.year }} ></div>
                                        <br />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div >
    </>
}

export default Patent;