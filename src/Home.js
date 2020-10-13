import React from 'react'
import './Home.css';
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img className="home_image" src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2019/TV/JKRY_S2/JKRY_S2_01473_GWBleedingHero_1500x600_POST_Final_en_US_PVD3016._CB448982223_.jpg"
        alt="@"
      />
      <div className="home_row">
      <Product
      id="12312312"
      title="The lean Startup book wowoo"
      price={11.98}
      rating={5}
      image="https://cnet2.cbsistatic.com/img/gWcXcrWyV1KD52Y7mpA6Vn6nq_U=/940x0/2014/12/21/33cfa0b1-f9c6-46ca-8cbb-e269841e249e/2014-13.jpg"
      />

      <Product
      id="12312312"
      title="The lean Startup book wowoo"
      price={11.98}
      rating={5}
      image="https://cnet2.cbsistatic.com/img/gWcXcrWyV1KD52Y7mpA6Vn6nq_U=/940x0/2014/12/21/33cfa0b1-f9c6-46ca-8cbb-e269841e249e/2014-13.jpg"
      />
      </div>
    </div>
  )
}

export default Home;
