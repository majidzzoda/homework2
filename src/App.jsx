import React from 'react'
import './App.css'
import logo from './assets/logo.png'
import socials from './assets/social media.png'
import chart from './assets/chart.png'
import customers from './assets/customers.png'
import illustration from './assets/illustration.png'
import buttons from './assets/buttons.png'
import group38 from './assets/Group 38.png'
import btns from './assets/btns.png'

const App = () => {
  return (
    <div>
      <header>
        <div className="sm">
          <img src={logo} alt="" />
          <ul>
            <li className='blue'>Home</li>
            <li>Blog</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Documentation</li>
          </ul>
        </div>
        <div className="sm">
          <img src={socials} alt="" />
          <button>Get started</button>
        </div>
      </header>
      <main>
        <section className='sect1'>
          <div className="textDiv t">
            <b>PLAN YOUR LIFE</b>
            <p>Increase your productivity</p>
            <span>Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu <br /> atqui laudem an, insolens gubergren similique est cu. Et vel modus <br /> congue vituperata.</span>
          </div>
          <img src={chart} alt="" />
        </section>
        <section>
          <img src={customers} alt="" />
        </section>
        <section className='sect3'>
          <aside className='left3'>
            <b>DESKTOP AND MOBILE APP</b>
            <p>Plan and manage</p>
            <span>Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an, insolens gubergren similique est cu. Et vel modus congue vituperata. Solum patrioque no sea. Mea ex malis mollis oporteat. Eum an expetenda consequat.</span>
            <img src={buttons} alt="" />
          </aside>
          <aside className='right3'>
            <img src={illustration} alt="" />
          </aside>
        </section>
        <section className='sect4'>
          <div className="textDiv">
            <b className='px'>ABOUT US</b>
            <h1 className='ppx'>Read about our app</h1>
          </div>
          <div className='divArticle'>
            <article>
              <img src={group38} alt="" />
              <b className='blue'>Overview</b>
              <p>Brute laoreet efficiendi id <br /> his, ea illum nonumes <br /> luptatum pro.</p>
            </article>
            <article>
              <img src={group38} alt="" />
              <b className='blue'>Files</b>
              <p>No vim nulla vitae <br /> intellegat. Ei enim error <br /> ius, solet atomorum <br /> conceptam ex has.</p>
            </article>
            <article>
              <img src={group38} alt="" />
              <b className='blue'>Meeting chats</b>
              <p>Vim ne tacimates <br /> neglegentur. Erat diceret <br /> omittam at est.</p>
            </article>
            <article>
              <img src={group38} alt="" />
              <b className='blue'>Save events</b>
              <p>Nisl idque mel ea, <br /> nominati voluptatum.</p>
            </article>
          </div>
          <img src={btns} alt="" />
        </section>
      </main>
      <footer></footer>
    </div>
  )
}

export default App