import React from 'react';
import logo from './images/Logo.png'
import logo500 from './images/Logo-p-500.png'
import logo800 from './images/Logo-p-800.png'
import logo1080 from './images/Logo-p-1080.png'
import logo1600 from './images/Logo-p-1600.png'
import logo2909 from './images/Logo-p-2000.png'
import group from './images/Group-31ccc.png'
import group800 from './images/Group-31ccc-p-800.png'
import group1080 from './images/Group-31ccc-p-1080.png'
import group1600 from './images/Group-31ccc-p-1600.png'
import group2000 from './images/Group-31ccc-p-2000.png'
import './css/webflow.css'
import './css/ariano-landing-page.webflow.css'

function Landing() {
    return (
        <div className={"body1"}>
            <div className="header"><img src={logo} loading="lazy" sizes="(max-width: 479px) 110px, 150px"
                                         srcSet={`${logo500} 500w, ${logo800} 800w, ${logo1080} 1080w, ${logo1600} 1600w, ${logo2909} 2909w`}
                                         alt="" className="image-2"/>
                <a href="#email" id="w-node-f06039fb-4b22-3613-775b-d6326df9667e-8d06fa96" className="button w-button">Notify
                    me</a>
            </div>
            <div className="primary-section">
                <div className="w-container">
                    <h1 className="big-heading">Make music like never before.</h1>
                </div>
                <img src={group} loading="lazy" sizes="(max-width: 2888px) 100vw, 2888px"
                     srcSet={`${group800} 800w, ${group1080} 1080w, ${group1600} 1600w, ${group2000} 2000w`} alt=""
                     className="image-4"/>

                <div className="text-block">coming soon</div>
            </div>
            <div className="form-section">
                <div className="w-container">
                    <h2 className="small-heading">Be the first to know about Ariano</h2>
                    <div className="form-block w-form">
                        <form id="email" name="wf-form-email" data-name="email" method="get" className="form">
                            <div className="div-block">
                                <input type="text" className="first-name w-input" maxLength={256} name="First-Name"
                                       data-name="First Name"
                                       placeholder="First Name" id="First-Name"/>
                                <input type="text" className="last-name w-input" maxLength={256} name="Last-Name"
                                       data-name="Last Name"
                                       placeholder="Last Name" id="Last-Name"/>
                            </div>
                            <input type="email"
                                   className="email w-node-_66984815-2b2b-ce3b-40e2-faf6922c202a-8d06fa96 w-input"
                                   maxLength={256} name="Email-ID" data-name="Email ID" placeholder="Email ID"
                                   id="Email-ID"/>
                            <input type="submit" value="Notify me" data-wait="Please wait..."
                                   className="submit-button w-button"/>
                        </form>
                        <div className="success-message w-form-done">
                            <div>Thank you! We&#x27;ll be in touch.</div>
                        </div>
                        <div className="error-message w-form-fail">
                            <div>Oops! Something went wrong. Please do try again.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer"><img src={logo} loading="lazy" sizes="(max-width: 479px) 110px, 150px"
                                         srcSet={`${logo500} 500w, ${logo800} 800w, ${logo1080} 1080w, ${logo1600} 1600w, ${logo2909} 2909w`}
                                         alt="" className="image-2"/>
                <div className="text-block-2">© 2020 Ariano Instruments</div>
            </div>
        </div>
    );
}

export default Landing;
