import React from 'react'
import MenuSlide from './Homepage/component/menuslide/MenuSlide'
import { Col, Container, Row } from 'react-bootstrap'
import './Homepage/HomePage.style.css'
import RandomSlide from './Homepage/component/randomslide/RandomSlide'





const HomePage = () => {
  return (
    <div>
    <div classNmae="home_page_banner_container">
   
   <div style={{backgroundImage:"url(https://cdn.pixabay.com/photo/2021/09/20/06/55/spaghetti-6639970_1280.jpg)"}} className="hompage_img mainbanner_big_container"> 
  <h5 className="homepage_banner_name"><span class="homepage_spanstyle">오늘 저녁은 뭐먹지?!</span></h5>
  <p className="hompage_banner_p"><span class="homepage_spanstyle">지금 한 번 냉장고를 열어보세요~</span></p>
  <div ><span className="homepage_banner_span homepage_spanstyle ">'냉털한 한끼'</span><span className="hompage_banner_p2 homepage_spanstyle">가 뭐든 맛있게 해드리겠습니다~!</span></div>

  </div> 
    {/* <Baner/> */}
   
    </div>
    <div>
    
      <MenuSlide/>
      <RandomSlide/>
     
    </div>
 
  </div>
  
  )
}

export default HomePage