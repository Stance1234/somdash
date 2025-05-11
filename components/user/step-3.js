import Link from "next/link"
import styled from "styled-components"
import { StyleButtonLink } from "../button"

const StepDescArea = styled.div`
	@media only screen and (max-width: 992px) {
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`

function Step3() {
	return (
		<section className='bg app-py-3 st-hover'>
			<div className='row container'>
				<div className='col l6 s12 wow fadeInUp slow' style={{ visibility: "visible" }}>
					<div className=''>
						<iframe
							src='https://binarymate.com/en/tyni-platform?r=https://register'
							frameBorder='0'
							height={370}
							width='90%'></iframe>
					</div>
				</div>
				<StepDescArea className='col l6 s12 wow fadeInUp slow app-mobile-center' style={{ visibility: "visible" }}>
					<br />
					<h2 className=''>Step 3</h2>
					<h3 className=''>
						Predict Market Direction Or <br />
						Copy Expert Traders
					</h3>
					<p className=''>Independently or with the help of our specialists you will learn trading strategies.</p>
					<p>You will evaluate how fast we process the payouts. All withdrawal requests are done within an hour!</p>
					<Link href='/signin' passHref>
						{/* <a className="btn btn-large">
                            Start Trading Now
                        </a> */}
						<StyleButtonLink large roundedFull>
							Start Trading Now
						</StyleButtonLink>
					</Link>
					<br />
					<br />
				</StepDescArea>
			</div>
		</section>
	)
}

export default Step3
