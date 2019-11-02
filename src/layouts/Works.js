import React from 'react';
import Navbar from 'components/Navbar';
import ChatImg from 'assets/jyun-chat.png';
import GeoImg from 'assets/jyun-geo.png';
import CatchyImg from 'assets/catchy.jpg';
import ElevatorImg from 'assets/elevator.jpg';
import SchoolImg from 'assets/school.png';

class Works extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            nowPage: 'works'
        }
    }
    render() {
        return (
            <div>
                <section className="section-navbar">
                    <Navbar nowPage={this.state.nowPage} />
                </section>
                <section className="works">
                    <div className="works-block">
                        <h2>專案經驗</h2>
                        <div className="works-block-row">
                            <img className="works-block-box" src={ElevatorImg} alt="works"></img>
                            <article className="works-block-article">
                                <h3>電梯雲端監控管理系統</h3>
                                <ul>
                                    <li>將傳統電梯導入物聯網概念，並提供即時地圖與即時故障紀錄供監控中心人員第一時間獲悉電梯故障，並且通知最近的維修人員前往察看。目前已商用，且在日本、大陸、越南、中東皆有成功案例。</li>
                                    <li>產學合作廠商：上市公司 (電力機械器材製造相關)</li>
                                    <li>參與前端開發，與後端合作串接 RESTful API，導入google與百度地圖api，與切換顯示功能。</li>
                                    <li>使用技術：jQuery、AJAX、Laravel、Google Maps API</li>
                                </ul>
                            </article>
                        </div>
                        <div className="works-block-row">
                            <img className="works-block-box" src={CatchyImg} alt="works"></img>
                            <article className="works-block-article">
                                <h3>消費者協同雲端分享行動社群系統</h3>
                                <ul>
                                    <li>利用行動裝置的普及建立一個雲端分享行動社群，讓使用者能透過此平台，即時分享自己所見與所愛等商品，打破傳統購物迷失。在手機雙系統與 Web 網頁上線。</li>
                                    <li>產學合作廠商：KT工作室</li>
                                    <li>參與網站後台開發，與後端合作開發各項後台功能，使用者管理、文章管理、推播管理。</li>
                                    <li>使用技術：jQuery、AJAX、Laravel、Bootstrap</li>
                                </ul>
                            </article>
                        </div>
                        <div className="works-block-row">
                            <img className="works-block-box" src={SchoolImg} alt="works"></img>
                            <article className="works-block-article">
                                <h3>學校網站</h3>
                                <ul>
                                    <li>修復原先網站排版不佳，開發使用前後端分離，增加網站維護性以及擴充性，使此網站更能突顯校風活潑的品格，並於網站上增加每日語言學習，影音專區促進校內活動價值。 </li>
                                    <li>合作廠商：臺中地方國小</li>
                                    <li>參與網站後台開發，與後端合作完成網站後台功能，各項佈告欄管理、附件上傳、輪播圖、etc。</li>
                                    <li>使用技術：jQuery、AJAX、Laravel、Bootstrap</li>
                                </ul>
                            </article>
                        </div>
                    </div>
                
                    <div className="works-block">
                        <h2>小作品</h2>
                        <a href="https://jyun-chat.web.app">
                            <img src={ChatImg} className="works-block-box" alt="chat"></img>
                        </a>
                        <a href="https://jyun-geo.web.app">
                            <img src={GeoImg} className="works-block-box" alt="geo"></img>
                        </a>
                    </div>
                </section>

            </div>
        );
    }
}

export default Works;