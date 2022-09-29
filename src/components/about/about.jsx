import React from 'react'
import './about.scss'
import Footer from '../footer/footer'
import Header from '../header/navbar'

const about = () => {
    return (
       <>
       <Header/>
        <div className='about'>
            <div className='container-sm'>
                <div className='text-area'>
                    <h2>Our Story</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate quas fugit quo quos, cupiditate voluptatibus eaque vel in odio tenetur qui facilis! Natus rem dignissimos quasi quidem omnis voluptatum rerum nobis voluptas, molestias perspiciatis ipsa quas, eius hic exercitationem. Totam qui mollitia reiciendis, consequatur explicabo error ipsam praesentium assumenda maiores.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate quas fugit quo quos, cupiditate voluptatibus eaque vel in odio tenetur qui facilis! Natus rem dignissimos quasi quidem omnis voluptatum rerum nobis voluptas, molestias perspiciatis ipsa quas, eius hic exercitationem. Totam qui mollitia reiciendis, consequatur explicabo error ipsam praesentium assumenda maiores.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate quas fugit quo quos, cupiditate voluptatibus eaque vel in odio tenetur qui facilis! Natus rem dignissimos quasi quidem omnis voluptatum rerum nobis voluptas, molestias perspiciatis ipsa quas, eius hic exercitationem. Totam qui mollitia reiciendis, consequatur explicabo error ipsam praesentium assumenda maiores.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate quas fugit quo quos, cupiditate voluptatibus eaque vel in odio tenetur qui facilis! Natus rem dignissimos quasi quidem omnis voluptatum rerum nobis voluptas, molestias perspiciatis ipsa quas, eius hic exercitationem. Totam qui mollitia reiciendis, consequatur explicabo error ipsam praesentium assumenda maiores.</p>

                </div>
                <div className='image-area'>
                    <img className='img-fluid' src="https://cdn.shopify.com/s/files/1/0070/7032/files/how-to-write-an-about-page-1.jpg?v=1652911186" alt="" />
                    <img className='img-fluid mt-4' src="https://www.btchaber.com/wp-content/uploads/2022/02/nftt.jpg" alt="" />
                </div>
            </div>
        </div>
        <Footer/>
       </>
    )
}

export default about