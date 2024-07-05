import { useState } from 'react';
import "./News.css"
import data from './data_news.json'
export const News = () => {
    console.log(data)
    const [news_data, setPatentData] = useState(data)
    return <>
        <div style={{ textAlign: 'justify' }}>
            <div style={{ width: '100%', maxWidth: '800px', border: '0px', borderSpacing: '0px', borderCollapse: 'separate', marginRight: 'auto', marginLeft: 'auto' }}>
                <h2>News</h2>
                <table style={{
                    width: '100%', border: '0px', borderSpacing: '0px', borderCollapse: 'separate'
                }} >
                    <tbody>

                        {
                            news_data && news_data.length > 0 && news_data.map((row, index) => (
                                <tr >

                                    <td style={{ padding: '20px', verticalAlign: 'top' }}>

                                        <div dangerouslySetInnerHTML={{ __html: row.date }} ></div>

                                    </td>
                                    <td style={{ width: '75%', }}>

                                        <div dangerouslySetInnerHTML={{ __html: row.description }} ></div>
                                        
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

export default News;