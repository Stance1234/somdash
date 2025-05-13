/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import UserLayout from "../../../components/layout/userLayout"

function ContentLibrary() {
	return (
		<UserLayout>
			<div className='b-rootLayout relative css-179ecci'>
				<div className='center ph4 mw8-5 w-100 b-rootLayoutNavigationBump'>
					<div className='cf nmh4 pt0 pt5-m pt6-l'>
						<div className='fl ph4 w-100 w-50-l'>
							<div className='mb5 mb6-l mt5 mt0-ns'>
								<h1 className='pt2 f2 f1-m f-subheadline-l fw5 mt0 mw7-l mb3 mb4-l'>Content Library</h1>
							</div>
						</div>
					</div>
				</div>
				<div className='center ph4 mw8-5 w-100 mb5 mb6-l'>
					<h1 className='f2 fw4 lh-title mb3'>White Papers</h1>
					<div className='cf nmh4 flex flex-wrap'>
						<div className='fl ph4 w-100 w-50-m w-third-l mb4 mb5-l'>
							<div
								className='mb3 ba b--border br3 gatsby-image-wrapper'
								style={{ position: "relative", overflow: "hidden" }}>
								<div aria-hidden='true' style={{ width: "100%", paddingBottom: "52%" }} />
								<img
									aria-hidden='true'
									src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAABNElEQVQoz41S7VKDMBDk8XwBn9HncPyhVesPbElK+Eg7U7VASbIk+tdcahRty8jMzt7thQ3cXaK1htYGxMYQDvEhP47H2qlziYWB9UYw06b/Nlx3GnJv0Chf8IL6Kiiljl4cI9aJI4Lh5fUWFzONq0IB7Q6vTYft2w5d38M5B2stBg9iygnDMPzK47lgWLcKVWfw0vWQIse6riDLAlUhQlx7llWJFcvAGUOe5yjLEkVRBAghgial/Onhu0ffK9w8c9wvOG5Thrs0w5wJPGQCqagxI/1xjny1wnqzCSac8wDmL6JLgmHs2d5P+qmxWHYWaevA9g7LdvCxBffawvPWOHw4C3rGvxza4tsQDGmqtDbENO1hDE1Q37k5May/eXJuFeJ+qlEc93UKCZmdwtRin/sA0j8BJdHk0tJp10EAAAAASUVORK5CYII='
									alt='Your Trader Inc. Broker Portfolio and Your Trader Inc. Broker Tax'
									style={{
										position: "absolute",
										top: 0,
										left: 0,
										width: "100%",
										height: "100%",
										objectFit: "cover",
										objectPosition: "center center",
										opacity: 0,
										transitionDelay: "500ms",
									}}
								/>
								<picture>
									<source
										srcSet='/static/d4c54e99b1a3c17f8e4a6101327717b1/65e33/white-paper-insurance.png 100w,
/static/d4c54e99b1a3c17f8e4a6101327717b1/69585/white-paper-insurance.png 200w,
/static/d4c54e99b1a3c17f8e4a6101327717b1/497c6/white-paper-insurance.png 400w,
/static/d4c54e99b1a3c17f8e4a6101327717b1/2a4de/white-paper-insurance.png 600w,
/static/d4c54e99b1a3c17f8e4a6101327717b1/ee604/white-paper-insurance.png 800w'
										sizes='(max-width: 400px) 100vw, 400px'
									/>
									<img
										src='/static/d4c54e99b1a3c17f8e4a6101327717b1/497c6/white-paper-insurance.png'
										alt='Your Trader Inc. Broker Portfolio and Your Trader Inc. Broker Tax'
										loading='lazy'
										style={{
											position: "absolute",
											top: 0,
											left: 0,
											width: "100%",
											height: "100%",
											objectFit: "cover",
											objectPosition: "center center",
											opacity: 1,
											transition: "opacity 500ms ease 0s",
										}}
									/>
								</picture>
							</div>
							<h4 className='f4-ns f5 fw6 lh-title tracked-condensed mb3-l mb2 dark-gray'>
								Insurance for Digital Currencies
							</h4>
							<div className='lh-copy black-70 mb2'>What clients need to know.</div>
							<button type='button' className='bp3-button bp3-large l-button--secondary'>
								<span className='bp3-button-text'>
									<span>↓ Download</span>
								</span>
							</button>
						</div>
						<div className='fl ph4 w-100 w-50-m w-third-l mb4 mb5-l'>
							<div
								className='mb3 ba b--border br3 gatsby-image-wrapper'
								style={{ position: "relative", overflow: "hidden" }}>
								<div aria-hidden='true' style={{ width: "100%", paddingBottom: "52%" }} />
								<img
									aria-hidden='true'
									src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAABFElEQVQoz61SWU7DMBD1/QUn4QKcgT9+CpS2WZzFS+IkbUhptofHlSmqKJuwNJr3xrPaw/DPh03zDJL5E6Hj9Y8TXrqYLxT5Ttj1zR2ubhdYhwK7toWpt9BlhWEc/zZyrBpw06HZvSDKJaJMgguNTJcQNnFsMXFpsTI1RFGh279aXkNXjeOZNtCmwaEfTiP3w4CHgOM5zmxihacwQWiTp6p0muxkC1KJRBbOHufa2ddJ7jQ1xabp+Oj7Q49llLqO7peBC17xo3OQCqxswCYR4FJjsYmdL3HSj9Y3LwzGaQLzv0jtUmUahaoRJicqQOI5jUcFaArqkiTKFLZtd/rl367GV5vBPu6b30d6hnd8pj0+5z7PG4DtBi2/iRzLAAAAAElFTkSuQmCC'
									alt='Your Trader Inc. Broker Portfolio and Your Trader Inc. Broker Tax'
									style={{
										position: "absolute",
										top: 0,
										left: 0,
										width: "100%",
										height: "100%",
										objectFit: "cover",
										objectPosition: "center center",
										opacity: 0,
										transitionDelay: "500ms",
									}}
								/>
								<picture>
									<source
										srcSet='/static/d992ac261ab8de6494951e73387bc142/65e33/white-paper-wallet-security.png 100w,
/static/d992ac261ab8de6494951e73387bc142/69585/white-paper-wallet-security.png 200w,
/static/d992ac261ab8de6494951e73387bc142/497c6/white-paper-wallet-security.png 400w,
/static/d992ac261ab8de6494951e73387bc142/2a4de/white-paper-wallet-security.png 600w,
/static/d992ac261ab8de6494951e73387bc142/ee604/white-paper-wallet-security.png 800w'
										sizes='(max-width: 400px) 100vw, 400px'
									/>
									<img
										src='/static/d992ac261ab8de6494951e73387bc142/497c6/white-paper-wallet-security.png'
										alt='Your Trader Inc. Broker Portfolio and Your Trader Inc. Broker Tax'
										loading='lazy'
										style={{
											position: "absolute",
											top: 0,
											left: 0,
											width: "100%",
											height: "100%",
											objectFit: "cover",
											objectPosition: "center center",
											opacity: 1,
											transition: "opacity 500ms ease 0s",
										}}
									/>
								</picture>
							</div>
							<h4 className='f4-ns f5 fw6 lh-title tracked-condensed mb3-l mb2 dark-gray'>
								Digital Asset Wallet Security - A Comparison: Multi-Signature and Multi-Party Computation
							</h4>
							<div className='lh-copy black-70 mb2'>
								In this piece, we take a look at the benefits of multi-signature technology and compare it to
								multi-party computation as a stand-alone solution to protect digital wallets.
							</div>
							<button type='button' className='bp3-button bp3-large l-button--secondary'>
								<span className='bp3-button-text'>
									<span>↓ Download</span>
								</span>
							</button>
						</div>
						<div className='fl ph4 w-100 w-50-m w-third-l mb4 mb5-l'>
							<Link href='/resources/content-library/p2sh-safe-address'>
								<a className='no-underline'>
									<div
										className='mb3 ba b--border br3 gatsby-image-wrapper'
										style={{ position: "relative", overflow: "hidden" }}>
										<div aria-hidden='true' style={{ width: "100%", paddingBottom: "52%" }} />
										<img
											aria-hidden='true'
											src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAArUlEQVQoz5WS2Q6DIBRE+f9PLGnsEtvcFmIfZKkCU7XWWBfEeSHMTQ4zNzBEFEKYOphZE7EY7Ac0WqPUBuE7WHhoAziGtQCSBQ5S/83WoCzSd6jn6hpV7frS2JdwSNBdPB6qAlmPyhrkLwXn3Mp+tyr3KU8kUSgLbd84irJ5w+8DTneUXy84Zxk456D7bb7jVGArpRSeQkBICdGcRNR5MShL/4NxPynhuP6Sv6QP4KUX6ga99VQAAAAASUVORK5CYII='
											alt='Your Trader Inc. Broker Portfolio and Your Trader Inc. Broker Tax'
											style={{
												position: "absolute",
												top: 0,
												left: 0,
												width: "100%",
												height: "100%",
												objectFit: "cover",
												objectPosition: "center center",
												opacity: 0,
												transitionDelay: "500ms",
											}}
										/>
										<picture>
											<source
												srcSet='/static/f70498ff9724b4f6f6f514fb669cadb7/65e33/white-paper-p2sh-address.png 100w,
/static/f70498ff9724b4f6f6f514fb669cadb7/69585/white-paper-p2sh-address.png 200w,
/static/f70498ff9724b4f6f6f514fb669cadb7/497c6/white-paper-p2sh-address.png 400w,
/static/f70498ff9724b4f6f6f514fb669cadb7/2a4de/white-paper-p2sh-address.png 600w,
/static/f70498ff9724b4f6f6f514fb669cadb7/ee604/white-paper-p2sh-address.png 800w'
												sizes='(max-width: 400px) 100vw, 400px'
											/>
											<img
												src='/static/f70498ff9724b4f6f6f514fb669cadb7/497c6/white-paper-p2sh-address.png'
												alt='Your Trader Inc. Broker Portfolio and Your Trader Inc. Broker Tax'
												loading='lazy'
												style={{
													position: "absolute",
													top: 0,
													left: 0,
													width: "100%",
													height: "100%",
													objectFit: "cover",
													objectPosition: "center center",
													opacity: 1,
													transition: "opacity 500ms ease 0s",
												}}
											/>
										</picture>
									</div>
									<h4 className='f4-ns f5 fw6 lh-title tracked-condensed mb3-l mb2 dark-gray'>
										P2SH Safe Address
									</h4>
									<div className='lh-copy black-70 mb2'>
										This paper describes a mechanism for using Bitcoin&apos;s P2SH functionality to build a
										stronger, more secure web wallet.
									</div>
									<div className='f6 f5-l black-80 fw6 no-underline'>
										Learn More
										<svg
											className='b-hoverArrow'
											width={10}
											height={10}
											viewBox='0 0 10 10'
											aria-hidden='true'>
											<g fillRule='evenodd'>
												<path strokeLinecap='square' className='b-hoverArrow-linePath' d='M0 5h7' />
												<path
													strokeLinecap='square'
													className='b-hoverArrow-tipPath'
													d='M1 1l4 4-4 4'
												/>
											</g>
										</svg>
									</div>
								</a>
							</Link>
						</div>
						<div className='fl ph4 w-100 w-50-m w-third-l mb4 mb5-l'>
							<Link href='/content-library/bitcoin.pdf'>
								<a className='no-underline' rel='noopener noreferrer' target='_blank'>
									<div
										className='mb3 ba b--border br3 gatsby-image-wrapper'
										style={{ position: "relative", overflow: "hidden" }}>
										<div aria-hidden='true' style={{ width: "100%", paddingBottom: "52%" }} />
										<img
											aria-hidden='true'
											src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA8klEQVQoz31RyQqFMAzs//+XF4/uKyiKevHijqh5bwKVWpdASDMmYyYR9LfjOEja2/spVzEZhQp8vfd9v2E62YWwbVuyLIuSJKGyLMl1XcrznKIooqIoyPd9fsOzLKMwDBmD931/Eos3mTJO08QNXdfRsiy3mlfJuhRIhGEawzDINE2eVK/TycXXwmEgHseRfdu2x5rbDiUAaWiEtGEYWO48z5yv68q5dPkTdQ08ocqOBXuex4cJguDM5UGAIeJgwHHEqqqeCRHTNOXCOI6ZFI22bfNFVWLkIMe3uq7fCXEAkKDBcZyTCBHNwNQp4U3TXAh/Odz+4VgtNHYAAAAASUVORK5CYII='
											alt='Your Trader Inc. Broker Portfolio and Your Trader Inc. Broker Tax'
											style={{
												position: "absolute",
												top: 0,
												left: 0,
												width: "100%",
												height: "100%",
												objectFit: "cover",
												objectPosition: "center center",
												opacity: 0,
												transitionDelay: "500ms",
											}}
										/>
										<picture>
											<source
												srcSet='/static/24326e4d37093a5761bb73a6d47a6710/65e33/white-paper-bitcoin.png 100w,
/static/24326e4d37093a5761bb73a6d47a6710/69585/white-paper-bitcoin.png 200w,
/static/24326e4d37093a5761bb73a6d47a6710/497c6/white-paper-bitcoin.png 400w,
/static/24326e4d37093a5761bb73a6d47a6710/2a4de/white-paper-bitcoin.png 600w,
/static/24326e4d37093a5761bb73a6d47a6710/ee604/white-paper-bitcoin.png 800w'
												sizes='(max-width: 400px) 100vw, 400px'
											/>
											<img
												src='/static/24326e4d37093a5761bb73a6d47a6710/497c6/white-paper-bitcoin.png'
												alt='Your Trader Inc. Broker Portfolio and Your Trader Inc. Broker Tax'
												loading='lazy'
												style={{
													position: "absolute",
													top: 0,
													left: 0,
													width: "100%",
													height: "100%",
													objectFit: "cover",
													objectPosition: "center center",
													opacity: 1,
													transition: "opacity 500ms ease 0s",
												}}
											/>
										</picture>
									</div>
									<h4 className='f4-ns f5 fw6 lh-title tracked-condensed mb3-l mb2 dark-gray'>
										Bitcoin Whitepaper
									</h4>
									<div className='lh-copy black-70 mb2'>
										The original <span className='i fw6'>Bitcoin: A Peer-to-Peer Electronic Cash System</span>{" "}
										white paper published by Satoshi Nakamoto.
									</div>
									<div className='bp3-button bp3-large l-button--secondary'>↓ Download</div>
								</a>
							</Link>
						</div>
					</div>
					<div className='cf nmh4'>
						<div className='fl ph4 w-100 w-50-m w-third-l mb4 mb5-l'>
							<h1 className='f2 fw4 lh-title mb3'>Patent Pledge</h1>
							<Link href='/resources/content-library/patent-pledge'>
								<a className='no-underline'>
									<div
										className='mb3 ba b--border br3 gatsby-image-wrapper'
										style={{ position: "relative", overflow: "hidden" }}>
										<div aria-hidden='true' style={{ width: "100%", paddingBottom: "52%" }} />
										<img
											aria-hidden='true'
											src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAABIklEQVQoz61Sy26EMAzc//+rHhBCAg5w6Eos7/LaUhIexyXT2AtRDt320sNoYo/jjDEXKeVjnudd8078G6QklsxUf8K+f9EHpQEdgPgVSJ/5/ORFx8uymHusa3DDI6l0gdq2jbGuK8cnH3XMUnM/SlUUhbrf70YnGIeUHIYBSZJAF6JtW+hiZsqTm6cTCaFdOsmMt6jGOH5iNtrh8AgUXY6iCJ7nMeI4RhiG/Ig92vg1IcgXuNkGIY7Pcuhm5GmalOu6CIKAG/m+D8dxGJRvmoZdCiGQpiluWYG8/ECWZbB3YBqSw77vUVWVGbPrOuR5jrIsuRHVEVN8vb4jS28/NzxHPpdwLsJe0rkQYtLrulbaKce2Zm/5T9h1NP6r32b/T3wDZ/HvhdUUPFIAAAAASUVORK5CYII='
											alt='Your Trader Inc. Broker Patent Pledge'
											style={{
												position: "absolute",
												top: 0,
												left: 0,
												width: "100%",
												height: "100%",
												objectFit: "cover",
												objectPosition: "center center",
												opacity: 0,
												transitionDelay: "500ms",
											}}
										/>
										<picture>
											<source
												srcSet='/static/740d463307fe279f60f82f30f584e7ff/65e33/patent-pledge.png 100w,
/static/740d463307fe279f60f82f30f584e7ff/69585/patent-pledge.png 200w,
/static/740d463307fe279f60f82f30f584e7ff/497c6/patent-pledge.png 400w,
/static/740d463307fe279f60f82f30f584e7ff/2a4de/patent-pledge.png 600w,
/static/740d463307fe279f60f82f30f584e7ff/ee604/patent-pledge.png 800w,
/static/740d463307fe279f60f82f30f584e7ff/3cf0b/patent-pledge.png 1929w'
												sizes='(max-width: 400px) 100vw, 400px'
											/>
											<img
												src='/static/740d463307fe279f60f82f30f584e7ff/497c6/patent-pledge.png'
												alt='Your Trader Inc. Broker Patent Pledge'
												loading='lazy'
												style={{
													position: "absolute",
													top: 0,
													left: 0,
													width: "100%",
													height: "100%",
													objectFit: "cover",
													objectPosition: "center center",
													opacity: 1,
													transition: "opacity 500ms ease 0s",
												}}
											/>
										</picture>
									</div>
									<h4 className='f4-ns f5 fw6 lh-title tracked-condensed mb3-l mb2 dark-gray'>
										Your Trader Inc. Broker Patent Pledge
									</h4>
									<div className='lh-copy black-70 mb2'>
										Your Trader Inc. Broker Holdings, Inc hereby pledges that it will not initiate patent lawsuits
										against anyone who, in good faith, wants to use its technology.
									</div>
									<div className='f6 f5-l black-80 fw6 no-underline'>
										Learn More
										<svg
											className='b-hoverArrow'
											width={10}
											height={10}
											viewBox='0 0 10 10'
											aria-hidden='true'>
											<g fillRule='evenodd'>
												<path strokeLinecap='square' className='b-hoverArrow-linePath' d='M0 5h7' />
												<path
													strokeLinecap='square'
													className='b-hoverArrow-tipPath'
													d='M1 1l4 4-4 4'
												/>
											</g>
										</svg>
									</div>
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</UserLayout>
	)
}

export default ContentLibrary
