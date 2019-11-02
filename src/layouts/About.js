import React from 'react';
import Navbar from 'components/Navbar';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            nowPage: 'about'
        }
    }
    render() {
        return (
            <div>
                <section className="section-navbar">
                    <Navbar nowPage={this.state.nowPage} />
                </section>
                <section className="about">
                    <div className="about-avatar"></div>
                    <div className="about-content">
                        <h1>王翔麟</h1>
                        <h2>Wang, Xiang-Lin</h2>
                        <br/>
                        <h4>前端工程師</h4>
                        <br/>
                        <p>畢業於國立臺中科技大學 資訊工程系，在校期間參與學校的 i.m.a.c 社群，參與 WebTeam 產學合作開發，
                            對網頁前端有熱忱，有一年半以上的前端專案與學習經歷。
                        </p>
                        <br/>
                        <h4>Taoyuan， TW</h4>
                    </div>
                    <div className="about-skills">
                        <h2>專業技能</h2>
                        <br/>
                        <p>-- 熟悉 <strong>HTML, CSS</strong> 頁面佈局，使用 <strong>Sass / SCSS</strong> 編寫結構化的程式碼，可不依賴 <strong>CSS Framework</strong> 進行 <strong>RWD</strong> 客製化，也會使用 <strong>Bootstrap Grid System</strong>。</p><br/>
                        <p>-- 瞭解 <strong>Javascript (ES5 / ES6)</strong> 基本語法，並使用 <strong>jQuery / CSS3</strong> 呈現網頁資訊及動態效果。</p><br/>
                        <p>-- 善與後端以 <strong>AJAX / Axios</strong> 方法串接 <strong>Json</strong> 格式資料，並遵循 <strong>RESTful API</strong> 規範，使用 <strong>Promise</strong> 物件建立非同步運作。</p><br/>
                        <p>-- 熟悉 <strong>git / github (command line)</strong>版本控制。</p>
                    </div>
                </section>
            </div>
        );
    }
}

export default About;