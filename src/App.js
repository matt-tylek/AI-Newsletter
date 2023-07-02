import React from 'react';
import './App.css';
import logo from './logo.png'; 
import wallstreet from './wallstreet.png';
import miami from './miami.png';
import personImage from './unnamed.png'; 


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} alt="Logo" className="Logo"/>
            </header>

            <div className="Wallstreet-Container">
                <img src={wallstreet} alt="Wallstreet" className="Wallstreet"/>

                <div className="Buttons-Container">
                    <button className="Button">WSJ Prime</button>
                    <button className="Button">SOFR(30 Day Avg)</button>
                    <button className="Button">5 Yr Treasury</button>
                    <button className="Button">7 Yr Treasury</button>
                    <button className="Button">10 Yr Treasury</button>
                </div>
            </div>

            <main>
                <center>
                <div>
                    <h1>
                     Welcome To ACS Deal Digest!
                    </h1>
                    <div>
                    <p1>
                    Welcome back to ACS' Deal digest. Your daily compass to the dynamic world of 
                    </p1>
                    </div>
                    <div>
                    <p2>
                    commercial real estate: Stay one step ahead with our handpicked selection of top stories, 
                    </p2>
                    </div>
                    <div>
                    <p3>
                    bringing you the latest trends, groundbreaking developments, and opportunities.
                    </p3>
                    </div>
                </div>
                </center>

                <div>
                    <center>
                        <h2>
                            Header 1
                        </h2>

                        <p4>
                            var1
                        </p4>
                        <h2>
                            Header 2
                        </h2>
                        <p5>
                            var2
                        </p5>
                        <h2>
                            Header 3
                        </h2>
                        <p6>
                            var 3
                        </p6>
                        <hr style={{ width: '60%', borderTop: '2px solid black' }} />
                        <img src={miami} alt="Miami" className="Miami" />
                        <h2>
                            ACS Product Offerings:
                        </h2>
                        <div>
                            <p7>
                            ACS has relationships with 400+ capital sources (yes, we actually keep a list). We are
                            </p7>
                        </div>
                        <div>
                            <p8>
                            asset class agnostic and have experience at every phase of the real estate cycle. We are
                            </p8>
                        </div>
                        <div>
                            <p9>
                            your go-to resource for your capital stack, on/off-market investment sales and business
                            </p9>
                        </div>
                        <div style={{ marginBottom: '40px' }}>
                            <p10>
                            purpose credit facilities!
                            </p10>
                        </div>
                        <div>
                            <p>
                            Whether you are a seasoned vet, or getting into your first deal, our full suite concierge<br></br> 
                            product offers principals the opportunity to bring in subject matter experts that have a<br></br>
                            complete understanding of what it will take to get your project fully capitalized. Here's<br></br>
                            how we help:
                            </p>
                        </div>
                        <div style={{textAlign: 'center'}}>
                            <ul style={{display: 'inline-block', textAlign: 'left', listStylePosition: 'inside'}}>
                                <li><span style={styles.text}><strong>Due-Diligence</strong> - gain access to all our tools to help with your DD/ development and acquisition underwriting</span></li>
                                <li><span style={styles.text}><strong>Excel Models</strong> - Our Analysts will create a master excel workbook with detailed sources & uses, proforma, etc.</span></li>
                                <li><span style={styles.text}><strong>Offering Memo</strong> - Our pitch decks are elite</span></li>
                                <li><span style={styles.text}><strong>Project Websites</strong> - Our team of designers will create a</span></li>
                                <li><span style={styles.text}><strong>Capital Arrangement</strong> - We arrange the best capital available to take your project from conception to completion</span></li>
                                <li><span style={styles.text}><strong>Capital Management</strong> - We routine monitor your assets capitalization and make sure that you are yielding the highest possible return</span></li>
                            </ul>
                        </div>
                        <div>
                            <p>
                            Concierge members enjoy discounted future services, access to exclusive deals, exclusive capital intro events and more. 
                            </p>
                        </div>
                        <h2>
                            ACS Capital Rise
                        </h2>
                        <div>
                        <p>
                            If you just need the help getting your project off the ground, want to make sure you put your<br></br> 
                            opportunity in front as many capital providers as possible and secure the best terms overall, we<br></br>
                            are here to help and we're the best at it. <br></br>
                            Insert Banner
                            </p>
                        </div>

                        <h2>
                        ACS Investment Sales:
                        </h2>

                        <div>
                            <p>
                            Bring us your buy-box and when we source, on/off-market opportunities for you we will have<br></br>
                            underwritten the deal from a capitalization perspective, ensuring deliverability on the project.<br></br>
                            [insert banner]
                            </p>
                        </div>

                        <h2>
                        ACS Business Credit Facilities:
                        </h2>

                        <div>
                            <p>
                            Whatever phase of the business cycle you are in; acquisition, seed/pre-launch or cash-flowing,<br></br>    
                            we can help you secure funding.<br></br>                        
                            </p>
                        </div>
                        <div style={{textAlign: 'center'}}>
                            <ul style={{display: 'inline-block', textAlign: 'left', listStylePosition: 'inside'}}>
                                <li><span style={styles.text}>SBA 504/7A</span></li>
                                <li><span style={styles.text}>Business Collateralized loans</span></li>
                                <li><span style={styles.text}>Secured lines of credit</span></li>
                                <li><span style={styles.text}>Unsecured cash-flow assignment loans</span></li>
                                <li><span style={styles.text}>And more....</span></li>
                            </ul>
                        </div>
                        <hr style={{ width: '60%', borderTop: '2px solid black' }} />

                        <p>
                        Want to stay up to date or catch up on previous newsletters? CLICK HERE
                        </p>
                        <hr style={{ width: '60%', borderTop: '2px solid black' }} />
                        <p>
                        Thank you for reading ACS' Deal Digest. Your one-stop-shop for the latest in commercial real<br></br>
                        estate. For additional insights or any CRE and CRE Debt and Equity queries, schedule a call<br></br>
                        with us here: CLICK HERE<br></br>
                        </p>

                        <p>
                        If you find our content valuable, please consider sharing our newsletter and inviting others to<br></br>
                        join our community. Stay ahead with ACS Deal Digest, your trusted partner in navigating the<br></br>
                        world of commercial real estate. See you tomorrow!<br></br>
                        </p>
                    </center>
                </div>

            </main>

            <footer style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
    <img src={personImage} alt="Person" style={{height: '250px', marginRight: '20px'}}/>
    <div style={styles.text}>
        <p><strong>Tyler J. Kight, CMA, CMPS<br></br></strong></p>
        <p><strong>CEO, Appanage Capital Solutions<br></br></strong></p>
        <p>+1 (954) 383-6337<br></br></p>
        <p>www.appanagecapitalsolutions.com<br></br></p>
        <p>tyler@theappanagegroup.com<br></br></p>
        <div className="button-container">
            <button className="fancy-button">Schedule A Call</button>
            <div className="social-buttons">
                <button className="fancy-button">LinkedIn</button>
                <button className="fancy-button">Twitter</button>
            </div>
        </div>
    </div>       

</footer>

<div className="full-width-div" style={styles.text2}>
    <center>
        <p>The content in the ACS Deal Digest is provided for informational purposes only. While we strive to ensure the<br></br></p>
        <p>accuracy and reliability of the information presented, we do not guarantee the correctness, completeness, or<br></br></p>
        <p>suitability of any information provided. We will not be held liable for any inaccuracies, errors, or omissions in this<br></br></p>
        <p>information nor for any losses, injuries, or damages arising from its use. The material contained in this newsletter<br></br></p>
        <p>is subject to copyright and must not be copied, modified, republished, or distributed without the express<br></br></p>
        <p>permission of ACS. The views and opinions expressed in this newsletter are those of the authors and do not<br></br></p>
        <p>necessarily reflect the official policy or position of ACS Deal Digest or any other agency, organization, employer<br></br></p>
        <p>or company. Before making any decision or taking any action that might affect your finances or business, you<br></br></p>
        <p>should consult a qualified professional advisor. By using this newsletter, you accept this disclaimer in full.<br></br></p>
    </center>
    </div>


        </div>
    );
}

const styles = {
    text: {
      fontSize: '14px', // Smaller font size
    },
    text2: {
        fontSize: '10px',
    }
  }
  

export default App;
