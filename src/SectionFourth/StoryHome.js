import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import CounterHome from '../Counter/CounterHome';
import ContactD from '../header/contactD';
// import ScrollAnimation from 'react-animate-on-scroll';

function StoryHome() {
    const data={
        h1 :'Our Story',
        p:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem tempore id cupiditate eligendi nesciunt, amet qui voluptatem mollitia, minus numquam expedita similique dolores minima reiciendis quam unde! Qui voluptatem nulla, ab rerum eius maiores omnis repellat non impedit officia quisquam earum, quidem autem alias inventore neque provident animi quis necessitatibus.',
        text:'Minahil Properties'
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className='head-text-sec color-golden'>


                            <div className='text-center'>
                            <ScrollAnimation
                            animateIn="fadeInDown"
                            animateOut="fadeOut"
                            duration={0.8}
                            animateOnce = {true}

                        >
                               <h1>
                             {data.h1}
                                </h1> 
                                </ScrollAnimation>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <section className=''>

                <div className="container-fluid story-sec">
                    <div className="row">
                        
                       <div className='story-sec-width'>
                       <div className="col-md-12">
                 
                 <ScrollAnimation
                           animateIn="flipInX"
                           animateOut="fadeOut"
                           duration={0.8}
                           animateOnce = {true}
                       >
                   <div className='story-pag'>
                    <p >{data.p}</p>
                    <h4 style={{color:"#d6b939"}}>{data.text}</h4>
              </div>
              </ScrollAnimation>
          

               
           </div>
                       </div>
                    </div>
                </div>

            </section>
            {/* <CounterHome/> */}
            <ContactD/>
        </>
    );
}

export default StoryHome;