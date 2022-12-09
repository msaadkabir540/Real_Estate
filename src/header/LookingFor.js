import Rent from '../imaga/rent.png'
import Buy from '../imaga/houseBuy.png'
import Sale from '../imaga/mensale.png'
import { Link } from 'react-router-dom'

function Looking(){

	const dataL =[
		{
			id :1,
			img: Rent,
			heading:"Rent",
			text:"Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, non aliquam risus. Sed a tellus quis mi rhoncus dignissim."

		},
		{
			id :2,
			img: Buy,
			heading:"Buy",
			text:"Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, non aliquam risus. Sed a tellus quis mi rhoncus dignissim."
		},
		{
			id :3,
			img: Sale,
			heading:"Sale",
			text:"Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, non aliquam risus. Sed a tellus quis mi rhoncus dignissim."
		}
	]




    return(
        <>
        <div className="about-box">
		<div className="container">
			
			<div className="row">
				{
					dataL && dataL.map((data)=>(
				<div className="col-md-4 col-sm-4 col-sm-12" >
					<div className="single-services" key={data.id}>
					<Link className='link-text' to="/Buy">
						<div className="single-services-img">
							<img src={data.img} className="img-responsive" alt=""/>

						</div>
						<div className="single-services-desc">
							<h4><a href="#">{data.heading}</a></h4>
							<p>{data.text}</p>
						</div>
						{/* <a href="#" className="btn btn-light btn-radius grd1 btn-brd"> Read More </a> */}
					</Link>
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


export default Looking;