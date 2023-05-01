import "./landing.css"
import React from 'react';


const LandingPageMobile = () => {
    console.log('here')
    return (
        <div style={{ width: '100%', overflowX: 'hidden' }}>
            <div style={{ height: '100vh' }}>
                <div style={{ position: 'relative' }}>
                    <img
                        className="image"
                        style={{ position: "absolute", zIndex: '-1' }}
                        alt=""
                        width='400px'
                        src="landing/s_coin.png"
                    />
                </div>
                <img width="101px" className="elliptic-image" alt="" src="landing/logo.png" />
                <div style={{ position: 'absolute', left: '1em', bottom: '30vh' }}>
                    <div style={{ marginLeft: '1em', fontSize: '16px', marginBottom: '5rem' }}>
                        <h1>Elliptic</h1>
                        <h1>Protocol</h1>
                    </div>
                    <div style={{ marginLeft: '1em', display: 'flex', flexDirection: 'column', fontSize: '20px' }}>
                        <b>&nbsp;</b>
                        <b>{`A decentralized `}</b>
                        <b>{`stablecoin, backed `}</b>
                        <b>by Bitcoin</b>
                    </div>
                    <div style={{ marginLeft: '1em', marginTop: '1em' }}>
                        <a href="https://twitter.com/elliptic_dao" target="_blank">
                            <img alt="" src="landing/twitter.png" width='35px' />
                        </a>
                        <a href="https://oc.app/5gnc5-giaaa-aaaar-alooa-cai/?code=ef8c8f73321e5721" target="_blank">
                            <img alt="" src="landing/open_chat.png" width='35px' />

                        </a>
                    </div>
                </div>
                <div style={{ position: 'absolute', transform: 'translate(-50%, -50%)', bottom: 0, left: '50%' }}>
                    <img className="arrow"
                        style={{ animation: 'arrow 3s ease-in-out infinite' }}
                        alt=""
                        width="40px"
                        src="landing/arrow.png"
                    />
                </div>
                <div style={{ position: 'absolute', right: '35px', bottom: '150px' }}>
                    <div className="button-landing">
                        <a href="/elliptic_dao_whitepaper.pdf" target="_blank">
                            Whitepaper
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                        </a>
                    </div>
                </div>
                <div style={{ zIndex: '-1', position: 'absolute', left: '-125px', bottom: '-90px' }} >
                    <img
                        style={{ animation: 'floatckbtc 10s ease-in-out infinite' }}
                        alt=""
                        src="landing/b_coin.svg"
                    />
                </div>
            </div>

            <div style={{ height: '75vh', position: 'relative' }}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', alignItems: 'center', marginTop: '3rem' }}>
                    <p style={{ fontSize: '20px', fontWeight: 600 }}>
                        How it works
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'row', flex: '1', alignItems: 'center' }}>
                        <p className='img'><img alt="" src="landing/swap.png" width='80px' height='80px' /></p>
                        <p style={{ marginLeft: '1em' }} >{`Swap ckBTC & eUSD`}</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', flex: '1', alignItems: 'center' }}>
                        <p className="feature1">Leverage your ckBTC</p>
                        <img alt="" src="landing/leverage.png" width='80px' height='80px' style={{ marginLeft: '1em' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', flex: '1', alignItems: 'center' }}>
                        <img
                            width='80px' height='80px'
                            alt=""
                            src="landing/elp.png"
                        />
                        <p style={{ marginLeft: '1em' }}>Provide liquidity, earn ELP</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', flex: '1', alignItems: 'center' }}>
                        <p className="feature1">Stake ELP, earn ckBTC</p>
                        <img alt="" src="landing/earn_ckbtc.png" width='80px' height='80px' style={{ marginLeft: '1em' }} />
                    </div>
                    <div className="button-landing" style={{ margin: '1em' }}>
                        <a href="/elliptic_dao_whitepaper.pdf" target="_blank">
                            Whitepaper
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                        </a>
                    </div>
                </div>

            </div>
            <div style={{ background: '#EEF1EF', marginTop: '1rem', padding: '1em', display: 'flex', flexDirection: 'column', height: '250px', justifyContent: 'space-between', fontWeight: 600, boxShadow: 'rgba(0, 0, 0, 0.2) 0px -1px 9px' }}>
                <a style={{ marginTop: '1em' }} href="https://twitter.com/elliptic_dao" target="_blank">Twitter</a>
                <a href="https://github.com/Elliptic-DAO" target="_blank">Github</a>
                <a href="/elliptic_dao_whitepaper.pdf" target="_blank">Whitepaper</a>
                <a href="https://oc.app/5gnc5-giaaa-aaaar-alooa-cai/?code=ef8c8f73321e5721" target="_blank">Open Chat</a>
                <div style={{ marginTop: '1em' }}>
                    <p style={{ color: 'grey' }}>Contact</p>
                    <a style={{ color: 'rgb(13, 124, 255)' }} target="_blank" rel="noopener noreferrer" href="mailto:ellipticdao@gmail.com">ellipticdao@gmail.com</a>
                </div>
                <div style={{ position: 'relative', textAlign: 'right' }}>
                    <img alt="" src="landing\icp_powered_by.svg" width='200px' />
                </div>
            </div>
        </div >
    );
};

export default LandingPageMobile;