import { SlPhone,SlLocationPin ,SlEnvolope } from "react-icons/sl";
import ScrollAnimation from 'react-animate-on-scroll';

function ContactD(){

    const card=[
        {
            id:1,
            img:<SlPhone/>,
            text:"Call Us",
            p:"+12-456-7892163"
        },
        {
            id:2,
            img:<SlLocationPin/>,
            text:"Find Us",
            p:"Plaza# 285 DHA Phase 6 Lahore"
        }, 
        {
            id:3,
            img:<SlEnvolope/>,
            text:"E-Mail Us",
            p:"MinahilProperties@gmail.com"
        },
    ]
    return(
        <>
        <div className="ContactD-box">
		<div className="container">
			<div className="section-title row text-center">
                <div className="col-md-12 col-md-offset-2 text-center mb-4 color-golden">
                <ScrollAnimation
                            animateIn="fadeInDown"
                            animateOut="fadeOut"
                            duration={0.8}
                            animateOnce = {true}

                        >
                    <h2 className="mb-4 ">
                        Your Dream House Is One Step Away!
                    </h2>
                    </ScrollAnimation>
                    </div>
                </div>
                
            <div className="row">
                {
                    card && card.map((cards)=>(

				<div className="col-md-4 col-sm-4 col-sm-12">
					<div className="single-servicesC">
         
						<div className="single-servicesC-img">
							<i>{cards.img}</i>

						</div>
						<div className="single-servicesC-desc">
							<h4><a href="#">{cards.text}</a></h4>
							<p>{cards.p}</p>
						</div>
                    </div>
				</div>
                    ))
                }
				
			</div>
			
		</div>
	</div>
        </>
    )
}


export default ContactD