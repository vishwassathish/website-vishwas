import { useState } from 'react';
import "./Projects.css"
import data from './data_projects.json'
export const Patent = () => {
    console.log(data)
    const [project_data, setProjectData] = useState(data)
    return <>
        <div style={{ textAlign: 'justify' }}>
            <div style={{ width: '100%', maxWidth: '800px', border: '0px', borderSpacing: '0px', borderCollapse: 'separate', marginRight: 'auto', marginLeft: 'auto' }}>
                <h2>Other Projects</h2>
                <table style={{
                    width: '100%', border: '0px', borderSpacing: '0px', borderCollapse: 'separate', marginRight: 'auto', marginLeft: 'auto'
                }} >
                    <tbody>

                        {
                            project_data && project_data.length > 0 && project_data.map((row, index) => (
                                <tr>

                                    <td style={{ paddingLeft: '20px', width: '75%', verticalAlign: 'middle' }}>
                                        <h5><a href={row.link}>
                                            <span className="papertitle">{row.title}</span>
                                        </a></h5>

                                        <div dangerouslySetInnerHTML={{ __html: row.authors }} ></div>
                                        <div dangerouslySetInnerHTML={{ __html: row.year }} ></div>
                                      
                                    </td>
                                </tr>

                            ))
                        }
                    </tbody>
                </table>
                <br/>
            </div>
        </div >
    </>
}

export default Patent;