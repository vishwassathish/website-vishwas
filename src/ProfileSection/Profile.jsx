import { useState } from 'react';
import "./Profile.css"
export const Profile = () => {
    return <>
        <div style={{ textAlign: 'justify' }}>
            <div style={{ width: '100%', maxWidth: '800px', border: '0px', borderSpacing: '0px', borderCollapse: 'separate', marginRight: 'auto', marginLeft: 'auto' }}>
                <table
                    style={{ width: '100%', border: '0px', borderSpacing: '0px', borderCollapse: 'separate', marginRight: 'auto', marginLeft: 'auto' }}>
                    <tbody>
                        <tr style={{ padding: '0px' }}>
                            <td style={{ padding: '2.5%', width: '63%', verticalAlign: 'middle' }}>
                                <p className='name' style={{ textAlign: 'center' }}>
                                    Vishwas Sathish
                                    <p className="sub_name" style={{ textAlign: "center" }}>
                                        <b>Email</b> : vsathish@cs.washington.edu
                                    </p>
                                </p>

                                <p style={{ textAlign: 'justify' }}>
                                    I am a CS PhD student at University of Washington, advised by <a
                                        href="https://www.rajeshpnrao.com/">Prof. Rajesh Rao</a>.
                                    My research interests lie in Machine Learning, Reinforcement Learning and Computational
                                    Neuroscience.
                                </p>
                                <p style={{ textAlign: 'justify' }}>
                                    More recently, I have been interested in formulating the principles of compositional and
                                    hierarchical computations required
                                    to solve complex real world problems. I am also interested in building models for general purpose
                                    perception, policy learning
                                    and planning using these principles.
                                </p>
                                <p style={{ textAlign: "justify" }}>
                                    Before starting my research, I enjoyed two years working as a Machine Learning Engineer at <a href='www.7sugar.com'>7sugar</a>, a
                                    small healthcare startup
                                    in Bangalore. I've also interned in <a href='https://www.morganstanley.com/'>Morgan Stanley</a>.
                                </p>
                                <p style={{ textAlign: "center" }}>
                                    <a href={process.env.PUBLIC_URL + "data/vish_data/Vishwas_Academic_Resume.pdf"}>CV</a> &nbsp;|&nbsp;

                                    <a href="https://scholar.google.com/citations?user=Ad01nlUAAAAJ&hl=en">Google Scholar</a>
                                    &nbsp;|&nbsp;
                                    <a href="https://twitter.com/sathish_vishwas">Twitter</a> &nbsp;|&nbsp;
                                    <a href="https://github.com/vishwassathish">Github</a> &nbsp;|&nbsp;
                                    <a href="https://neural.cs.washington.edu/">Neural Systems Lab</a>
                                </p>
                                {/* <p style={{ textAlign: "center" }}>
                                    <a href={process.env.PUBLIC_URL + "data/vish_data/Vishwas_Research_Statement.pdf"}>Research Statement</a>
                                    &nbsp;|&nbsp;
                                    <a href={process.env.PUBLIC_URL + "data/vish_data/Vishwas_Teaching_Statement.pdf"}> Teaching Statement</a> &nbsp;|&nbsp;
                                    <a href={process.env.PUBLIC_URL + "data/vish_data/Vishwas_Diversity_Statement.pdf"}>Diversity Statement</a>
                                </p> */}
                            </td>
                            <td style={{ padding: '2.5%', width: '40%', maxWidth: '40%' }}>
                                <a href={process.env.PUBLIC_URL + "images/vish_images/profile_2.png"}><img style={{ width: '100%', maxWidth: '100%', borderRadius: '50%' }}
                                    alt="profile photo" src={process.env.PUBLIC_URL + "images/vish_images/profile_2.png"} className="hoverZoomLink" /></a>
                            </td>
                        </tr>
                    </tbody >
                </table >
            </div>
        </div >
    </>
}

export default Profile;