  import React from 'react'
  import './Home.css'
  import Navbar      from '../../components/Navbar/Navbar'
  import heroBanner  from '../../assets/hero_banner.jpg'
  import heroTittle  from '../../assets/hero_title.png';
  import playIcon    from '../../assets/play_icon.png';
  import infoIcon    from '../../assets/info_icon.png';
  import TittleCards from '../../components/TittleCards/TittleCards';
  import Footer      from '../../components/Footer/Footer';

  
  function Home() {
    return (
      <div className='home'>
        
        <Navbar/>

        <div className="hero">
            <img src={heroBanner} alt="" className='banner-img' />

            <div className="hero-caption">
                <img src={heroTittle} alt="" className='caption-img'/>

                <p>
                    Discovering his ties to a secreat ancient order , a young
                    man living in modern istanbul embarks on quest to save the city from the 
                    immortal enemy
                </p>

                <div className="hero-btns">
                    <button className='btn' ><img src={playIcon} alt="" />Play</button>
                    <button className='btn dark-btn' ><img src={infoIcon} alt="" />More info</button>
                </div>

                


            </div>
        </div>

        <div className="more-cards">
            <TittleCards title={"Blockbuster Movies"} category={'popular'} />
            <TittleCards title={"Only on Netflix"} category={'top_rated'} />
            <TittleCards title={"Upcoming"} category={'upcoming'} />
            <TittleCards title={"Top pics for You"} category={'now_playing'} />
        </div>

        <Footer/>
        
    </div>
    )
  }
  
  export default Home