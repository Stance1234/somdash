import Link from "next/link"
import Image from "next/image"
import logo from "../../../public/images/logo.png"
import GoogleTranslateWidget from "../googletrans/googletrans"
function UserFooter() {
	return (
			
			


		<div className='white pt5 css-1wwdn0x'>
			<div className='dn-l'>
				<div className='center ph4 mw8-5 w-100'>
					<div className='mb3'>
						<svg width={101} height={26} viewBox='0 0 101 26' fill='none'>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M22.2316 8.32839C22.2316 22.2181 11.1158 26 11.1158 26C11.1158 26 0 22.2181 0 8.32839V3.32865C0 2.78064 0.426229 2.34088 0.960708 2.30029C2.97684 2.20557 7.76685 1.79964 11.1158 0C14.4715 1.79964 19.2547 2.20557 21.2709 2.30705C21.8054 2.34088 22.2316 2.78064 22.2316 3.32865V8.32839ZM12.523 7.96305C14.1738 8.11866 15.4728 8.6396 15.6081 10.1551C15.7096 11.2646 15.2428 11.9277 14.4986 12.3065C15.7231 12.6042 16.4809 13.3349 16.3185 14.9654C16.1155 16.9815 14.6001 17.516 12.4486 17.6243L12.4554 19.7419H11.1632L11.1699 17.6445C10.8384 17.6378 10.5001 17.631 10.1483 17.6243L10.1348 19.7419L8.86287 19.7351L8.8561 17.604C8.55842 17.604 6.52876 17.6107 6.52876 17.6107L6.54229 16.0682L7.97658 16.0614L7.98335 9.29586H6.34609V7.94952C6.34609 7.94952 8.65314 7.94952 8.93052 7.94275L8.92376 5.83867L10.216 5.8319V7.90892C10.561 7.90216 10.9195 7.90216 11.2578 7.90216H11.2579L11.2511 5.8522L12.5298 5.84543L12.523 7.96305ZM10.4513 16.0792C11.4956 16.1017 13.7757 16.1507 13.7882 14.688C13.8004 13.1977 11.5975 13.2333 10.5185 13.2507C10.3974 13.2527 10.2905 13.2544 10.2024 13.2537L10.2092 16.0749C10.279 16.0755 10.3605 16.0772 10.4513 16.0792ZM10.4439 11.9724C11.3072 11.9939 13.2074 12.0412 13.2199 10.7099C13.226 9.34382 11.363 9.38658 10.4782 9.40688C10.3858 9.409 10.3041 9.41088 10.2363 9.41088L10.243 11.9683C10.3008 11.9688 10.3684 11.9705 10.4439 11.9724Z'
								fill='white'
							/>
							<path
								d='M44.3346 17.2318C44.3346 18.3414 44.1181 19.2683 43.6784 20.0193C43.2386 20.7702 42.6568 21.3791 41.9328 21.8324C41.2089 22.2925 40.3835 22.6172 39.4567 22.8202C38.5298 23.0232 37.5826 23.1179 36.6084 23.1179H28.5438V2.87536H36.6084C37.3932 2.87536 38.1915 2.95655 39.0101 3.11892C39.8288 3.28129 40.573 3.55868 41.2428 3.95108C41.9125 4.34348 42.4538 4.87119 42.8733 5.54098C43.2927 6.21077 43.5025 7.05647 43.5025 8.08483C43.5025 9.20791 43.198 10.1416 42.5891 10.8722C41.9802 11.6097 41.1751 12.1374 40.1873 12.4621V12.5163C40.7624 12.611 41.2969 12.7869 41.8043 13.044C42.3117 13.3011 42.7515 13.6326 43.1168 14.0317C43.4889 14.4309 43.7866 14.8977 44.0031 15.4322C44.2264 15.9667 44.3346 16.5688 44.3346 17.2318ZM38.7869 8.74109C38.7869 8.05777 38.523 7.55712 38.0021 7.23914C37.4743 6.92116 36.7031 6.76555 35.6679 6.76555H33.2662V10.9399H35.898C36.8113 10.9399 37.5217 10.7572 38.0291 10.3851C38.5365 10.013 38.7869 9.465 38.7869 8.74109ZM39.4431 16.7786C39.4431 15.9396 39.1319 15.3578 38.4959 15.033C37.8667 14.7083 37.0278 14.5459 35.9792 14.5459H33.2594V19.1803H36.0062C36.3851 19.1803 36.7843 19.1465 37.1902 19.0788C37.6029 19.0112 37.975 18.8962 38.3065 18.7203C38.638 18.5511 38.9086 18.3076 39.1184 17.9896C39.3416 17.6784 39.4431 17.2724 39.4431 16.7786Z'
								fill='white'
							/>
							<path
								d='M50.8363 4.33671C50.8363 4.70205 50.7619 5.04033 50.6198 5.35154C50.4777 5.66952 50.2883 5.94014 50.0447 6.16341C49.8079 6.39344 49.517 6.57611 49.1855 6.70465C48.854 6.83996 48.5022 6.90762 48.1436 6.90762C47.3791 6.90762 46.7431 6.65729 46.2289 6.14988C45.7148 5.64246 45.4577 5.04033 45.4577 4.33671C45.4577 3.99167 45.5253 3.66692 45.6606 3.34894C45.7959 3.03096 45.9854 2.76034 46.2357 2.53707C46.486 2.30704 46.7702 2.12437 47.0949 1.9823C47.4197 1.84022 47.7715 1.7658 48.1504 1.7658C48.5157 1.7658 48.8607 1.83346 49.1923 1.96877C49.5238 2.10408 49.8147 2.27998 50.0515 2.51001C50.2883 2.74004 50.4777 3.01066 50.6266 3.32188C50.7686 3.63309 50.8363 3.97137 50.8363 4.33671ZM45.8027 23.1246V8.88316H50.4912V23.1246H45.8027Z'
								fill='white'
							/>
							<path
								d='M58.9956 12.3742V17.8272C58.9956 18.497 59.1241 18.9977 59.3812 19.3359C59.6383 19.6742 60.0984 19.8366 60.7682 19.8366C60.9982 19.8366 61.2418 19.8163 61.4989 19.7825C61.7559 19.7419 61.9724 19.6877 62.1416 19.6133L62.1957 23.0435C61.871 23.1585 61.465 23.2599 60.9644 23.3411C60.4705 23.4291 59.9698 23.4697 59.476 23.4697C58.522 23.4697 57.7237 23.3479 57.0742 23.1111C56.4247 22.8743 55.9037 22.5293 55.5181 22.076C55.1257 21.6295 54.8483 21.0882 54.6724 20.4725C54.5033 19.8501 54.4153 19.16 54.4153 18.3955V12.3742H52.1286V8.88316H54.3883V5.13505H58.9956V8.88316H62.3445V12.3742H58.9956Z'
								fill='white'
							/>
							<path
								d='M79.3193 23.1517C77.9932 23.4764 76.5522 23.6388 74.9826 23.6388C73.3588 23.6388 71.8704 23.3817 70.5038 22.8675C69.1371 22.3534 67.9667 21.6295 66.9857 20.6958C66.0047 19.7622 65.2334 18.6391 64.6854 17.3333C64.1306 16.0276 63.8532 14.573 63.8532 12.9696C63.8532 11.3458 64.1374 9.8777 64.6989 8.56518C65.2605 7.25266 66.0385 6.12958 67.0331 5.2027C68.0208 4.27582 69.1845 3.56544 70.5241 3.07156C71.8569 2.57767 73.2979 2.32735 74.8405 2.32735C76.4439 2.32735 77.9323 2.57091 79.3058 3.05803C80.6792 3.54515 81.7955 4.19464 82.6547 5.02003L79.5628 8.53812C79.0825 7.98334 78.4533 7.53005 77.6753 7.17824C76.8905 6.82644 76.0042 6.65053 75.0164 6.65053C74.1572 6.65053 73.3656 6.80614 72.6417 7.12412C71.9178 7.43533 71.2886 7.8751 70.7541 8.43664C70.2196 8.99818 69.8069 9.66797 69.5092 10.4392C69.2116 11.2105 69.0627 12.0562 69.0627 12.9696C69.0627 13.9032 69.198 14.7624 69.4619 15.5472C69.7257 16.332 70.1249 17.0018 70.6459 17.5634C71.1668 18.1249 71.8163 18.5647 72.5876 18.8759C73.3588 19.1939 74.2384 19.3495 75.2329 19.3495C75.808 19.3495 76.3492 19.3089 76.8634 19.2209C77.3776 19.133 77.8579 18.9977 78.2909 18.8082V15.121H74.4278V11.1767H82.7832V21.9001C81.8022 22.4075 80.6453 22.827 79.3193 23.1517Z'
								fill='white'
							/>
							<path
								d='M100.428 15.9464C100.428 17.1101 100.218 18.1655 99.7986 19.1059C99.3792 20.0531 98.8041 20.8514 98.0802 21.5077C97.3563 22.1639 96.5173 22.6781 95.5634 23.0367C94.6095 23.402 93.5879 23.5779 92.5054 23.5779C91.4364 23.5779 90.4216 23.3953 89.4609 23.0367C88.5002 22.6714 87.6612 22.1639 86.9441 21.5077C86.2269 20.8514 85.6586 20.0463 85.2392 19.1059C84.8197 18.1587 84.61 17.1101 84.61 15.9464C84.61 14.7827 84.8197 13.7341 85.2392 12.8004C85.6586 11.8668 86.2269 11.0752 86.9441 10.4257C87.6612 9.77622 88.5002 9.28234 89.4609 8.93729C90.4216 8.59225 91.4364 8.42311 92.5054 8.42311C93.5946 8.42311 94.6095 8.59225 95.5634 8.93729C96.5173 9.28234 97.3563 9.77622 98.0802 10.4257C98.8041 11.0752 99.3792 11.8668 99.7986 12.8004C100.218 13.7341 100.428 14.7827 100.428 15.9464ZM95.9084 15.9464C95.9084 15.4863 95.834 15.0398 95.6784 14.6001C95.5228 14.1603 95.3063 13.7747 95.0222 13.4431C94.738 13.1116 94.3862 12.841 93.9667 12.6313C93.5473 12.4215 93.0601 12.3201 92.5054 12.3201C91.9506 12.3201 91.4635 12.4283 91.044 12.6313C90.6246 12.841 90.2795 13.1116 90.0021 13.4431C89.7247 13.7747 89.515 14.1603 89.3729 14.6001C89.2309 15.0398 89.1564 15.4863 89.1564 15.9464C89.1564 16.4065 89.2309 16.853 89.3729 17.2927C89.515 17.7325 89.7315 18.1249 90.0157 18.4767C90.2998 18.8285 90.6516 19.1127 91.0711 19.3224C91.4905 19.5321 91.9777 19.6404 92.5324 19.6404C93.0872 19.6404 93.5743 19.5389 93.9938 19.3224C94.4133 19.1127 94.7651 18.8285 95.0492 18.4767C95.3334 18.1249 95.5499 17.7257 95.6919 17.2927C95.8408 16.853 95.9084 16.4065 95.9084 15.9464Z'
								fill='white'
							/>
						</svg>
					</div>
					<div className='cf nmh4'>
						<div className='fl ph4 w-100 w-50-l mb5'>
							<div className='sc-bdVaJa uNRti f5 f5-m f4-l lh-copy mb3 measure-narrow'>
								<span>Institutional staking, custody, and trading.</span>
							</div>
							<Link href='/connect-with-us'>
								<a className='bp3-button bp3-large l-button--whiteBorder bp3-fill'>
									<span>Connect With Us</span>
								</a>
							</Link>
						</div>
						<div className='fl ph4 w-100 w-50-l mb5'>
							<div className>
								<div className='sc-bdVaJa uNRti f5 f5-m f4-l lh-copy mb3'>Keep up to date with our newsletter.</div>
								<div className='l-newsletterForm'>
									<div className='flex mb2 relative css-1ow4kgd'>
										<div className='bp3-input-group bp3-large l-input-group bp3-fill white'>
											<input type='text' className='bp3-input' placeholder='Email' defaultValue />
										</div>
										<button type='button' className='bp3-button bp3-large ml2 l-button--whiteBorder'>
											<span className='bp3-button-text'>Submit</span>
										</button>
									</div>
									<div className='bp3-collapse'>
										<div
											className='bp3-collapse-body bp3-fixed-positioning-containing-block'
											aria-hidden='false'
										/>
									</div>
									<div className='silver lh-copy f7'>
										We&apos;re committed to your privacy. Your Trader Inc Broker uses the information you provide to us
										to contact you about our relevant content, products, and services. You may unsubscribe
										from these communications at any time. For more information, check out our
										<Link href='/legal/privacy'>
											<a className='[#0018A8] no-underline'>privacy policy</a>
										</Link>
										.
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='cf nmh2'>
						<div className='fl ph2 w-50'>
							<div className='ttu fw4 lh-title tracked-mega o-60 f7 mb2'>
								<span>Inquiries</span>
							</div>
							<a
								className='fw6 white-80 hover-color-[#0018A8] no-underline db pv1 pointer mb4'
								href='mailto:support@yourtrade.com'>
								support@yourtrade.com
							</a>

							<a
								className='fw6 white-80 hover-color-[#0018A8] no-underline db pv1 pointer mb4'
								href='mailto:support@yourtrade.com'>
								support@yourtrade.com
							</a>
						</div>
					</div>
				</div>
				<div className='bb b--white-10 mh4'>
					<div className='pv3 flex justify-between items-center'>
						<div className='ttu fw4 lh-title tracked-mega o-60 f7'>
							<span>Services</span>
						</div>
						<span icon='chevron-right' className='bp3-icon bp3-icon-chevron-right'>
							<svg data-icon='chevron-right' width={16} height={16} viewBox='0 0 16 16'>
								<desc>chevron-right</desc>
								<path
									d='M10.71 7.29l-4-4a1.003 1.003 0 00-1.42 1.42L8.59 8 5.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l4-4c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z'
									fillRule='evenodd'
								/>
							</svg>
						</span>
					</div>
					<div className='bp3-collapse'>
						<div className='bp3-collapse-body bp3-fixed-positioning-containing-block' aria-hidden='false' />
					</div>
				</div>
				<div className='bb b--white-10 mh4'>
					<div className='pv3 flex justify-between items-center'>
						<div className='ttu fw4 lh-title tracked-mega o-60 f7'>
							<span>Who We Serve</span>
						</div>
						<span icon='chevron-right' className='bp3-icon bp3-icon-chevron-right'>
							<svg data-icon='chevron-right' width={16} height={16} viewBox='0 0 16 16'>
								<desc>chevron-right</desc>
								<path
									d='M10.71 7.29l-4-4a1.003 1.003 0 00-1.42 1.42L8.59 8 5.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l4-4c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z'
									fillRule='evenodd'
								/>
							</svg>
						</span>
					</div>
					<div className='bp3-collapse'>
						<div className='bp3-collapse-body bp3-fixed-positioning-containing-block' aria-hidden='false' />
					</div>
				</div>
				<div className='bb b--white-10 mh4'>
					<div className='pv3 flex justify-between items-center'>
						<div className='ttu fw4 lh-title tracked-mega o-60 f7'>
							<span>Resources</span>
						</div>
						<span icon='chevron-right' className='bp3-icon bp3-icon-chevron-right'>
							<svg data-icon='chevron-right' width={16} height={16} viewBox='0 0 16 16'>
								<desc>chevron-right</desc>
								<path
									d='M10.71 7.29l-4-4a1.003 1.003 0 00-1.42 1.42L8.59 8 5.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l4-4c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z'
									fillRule='evenodd'
								/>
							</svg>
						</span>
					</div>
					<div className='bp3-collapse'>
						<div className='bp3-collapse-body bp3-fixed-positioning-containing-block' aria-hidden='false' />
					</div>
				</div>
				<div className='bb b--white-10 mh4'>
					<div className='pv3 flex justify-between items-center'>
						<div className='ttu fw4 lh-title tracked-mega o-60 f7'>
							<span>Company</span>
						</div>
						<span icon='chevron-right' className='bp3-icon bp3-icon-chevron-right'>
							<svg data-icon='chevron-right' width={16} height={16} viewBox='0 0 16 16'>
								<desc>chevron-right</desc>
								<path
									d='M10.71 7.29l-4-4a1.003 1.003 0 00-1.42 1.42L8.59 8 5.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l4-4c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z'
									fillRule='evenodd'
								/>
							</svg>
						</span>
					</div>
					<div className='bp3-collapse'>
						<div className='bp3-collapse-body bp3-fixed-positioning-containing-block' aria-hidden='false' />
					</div>
				</div>
				<div className='center ph4 pv4 mw8-5 w-100'>
					<div className='cf nmh2'>
						<div className='fl ph2 w-100 tc pb4'>
							<div className='flex justify-center tc center'>
								<div className='mr2'>
									<a
										target='_BLANK'
										rel='noopener noreferrer'
										href='https://blog.dashboard.yourtrade.com/'
										className='social-icon'
										aria-label='medium'
										style={{
											display: "inline-block",
											width: "25px",
											height: "25px",
											position: "relative",
											overflow: "hidden",
											verticalAlign: "middle",
										}}>
										<div
											className='social-container'
											style={{
												position: "absolute",
												top: "0px",
												left: "0px",
												width: "100%",
												height: "100%",
											}}>
											<svg
												className='social-svg'
												viewBox='0 0 64 64'
												style={{
													borderRadius: "50%",
													position: "absolute",
													top: "0px",
													left: "0px",
													width: "100%",
													height: "100%",
													fillRule: "evenodd",
												}}>
												<g
													className='social-svg-background'
													style={{
														transition: "fill 170ms ease-in-out 0s",
														fill: "transparent",
													}}>
													<circle cx={32} cy={32} r={31} />
												</g>
												<g
													className='social-svg-icon'
													style={{
														transition: "fill 170ms ease-in-out 0s",
														fill: "rgb(51, 51, 51)",
													}}>
													<path d='M47,23.7h-1.2c-0.4,0-0.9,0.6-0.9,1v14.7c0,0.4,0.5,1,0.9,1H47v3.4H36.4v-3.4h2.1V24.9h-0.1 l-5.3,18.9h-4.1l-5.2-18.9h-0.1v15.5H26v3.4h-9v-3.4h1.2c0.5,0,1-0.6,1-1V24.7c0-0.4-0.5-1-1-1H17v-3.6h11.3l3.7,13.8h0.1l3.7-13.8 H47V23.7z' />
												</g>
												<g
													className='social-svg-mask'
													style={{
														transition: "fill 170ms ease-in-out 0s",
														fill: "rgb(255, 255, 255)",
													}}>
													<path d='M0,0v64h64V0H0z M47,23.7h-1.2c-0.4,0-0.9,0.6-0.9,1v14.7c0,0.4,0.5,1,0.9,1H47v3.4H36.4v-3.4h2.1V24.9h-0.1 l-5.3,18.9h-4.1l-5.2-18.9h-0.1v15.5H26v3.4h-9v-3.4h1.2c0.5,0,1-0.6,1-1V24.7c0-0.4-0.5-1-1-1H17v-3.6h11.3l3.7,13.8h0.1l3.7-13.8 H47V23.7z' />
												</g>
											</svg>
										</div>
									</a>
								</div>
								<div className='mr2'>
									<a href='https://twitter.com/yourtrade' target='_BLANK' rel='noopener noreferrer'>
										<svg viewBox='0 0 64 64' width={25} height={25}>
											<circle cx={32} cy={32} r={31} fill='#00aced' />
											<path
												d='M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z'
												fill='white'
											/>
										</svg>
									</a>
								</div>
								<div className='mr2'>
									<a
										target='_BLANK'
										rel='noopener noreferrer'
										href='https://www.youtube.com/channel/UC7ILbUGTCM83sdilLB8Qlmg/featured/'
										className='social-icon'
										aria-label='youtube'
										style={{
											display: "inline-block",
											width: "25px",
											height: "25px",
											position: "relative",
											overflow: "hidden",
											verticalAlign: "middle",
										}}>
										<div
											className='social-container'
											style={{
												position: "absolute",
												top: "0px",
												left: "0px",
												width: "100%",
												height: "100%",
											}}>
											<svg
												className='social-svg'
												viewBox='0 0 64 64'
												style={{
													borderRadius: "50%",
													position: "absolute",
													top: "0px",
													left: "0px",
													width: "100%",
													height: "100%",
													fillRule: "evenodd",
												}}>
												<g
													className='social-svg-background'
													style={{
														transition: "fill 170ms ease-in-out 0s",
														fill: "transparent",
													}}>
													<circle cx={32} cy={32} r={31} />
												</g>
												<g
													className='social-svg-icon'
													style={{
														transition: "fill 170ms ease-in-out 0s",
														fill: "rgb(255, 255, 255)",
													}}>
													<path d='M46.7,26c0,0-0.3-2.1-1.2-3c-1.1-1.2-2.4-1.2-3-1.3C38.3,21.4,32,21.4,32,21.4h0 c0,0-6.3,0-10.5,0.3c-0.6,0.1-1.9,0.1-3,1.3c-0.9,0.9-1.2,3-1.2,3S17,28.4,17,30.9v2.3c0,2.4,0.3,4.9,0.3,4.9s0.3,2.1,1.2,3 c1.1,1.2,2.6,1.2,3.3,1.3c2.4,0.2,10.2,0.3,10.2,0.3s6.3,0,10.5-0.3c0.6-0.1,1.9-0.1,3-1.3c0.9-0.9,1.2-3,1.2-3s0.3-2.4,0.3-4.9 v-2.3C47,28.4,46.7,26,46.7,26z M28.9,35.9l0-8.4l8.1,4.2L28.9,35.9z' />
												</g>
												<g
													className='social-svg-mask'
													style={{
														transition: "fill 170ms ease-in-out 0s",
														fill: "rgb(255, 51, 51)",
													}}>
													<path d='M0,0v64h64V0H0z M47,33.1c0,2.4-0.3,4.9-0.3,4.9s-0.3,2.1-1.2,3c-1.1,1.2-2.4,1.2-3,1.3 C38.3,42.5,32,42.6,32,42.6s-7.8-0.1-10.2-0.3c-0.7-0.1-2.2-0.1-3.3-1.3c-0.9-0.9-1.2-3-1.2-3S17,35.6,17,33.1v-2.3 c0-2.4,0.3-4.9,0.3-4.9s0.3-2.1,1.2-3c1.1-1.2,2.4-1.2,3-1.3c4.2-0.3,10.5-0.3,10.5-0.3h0c0,0,6.3,0,10.5,0.3c0.6,0.1,1.9,0.1,3,1.3 c0.9,0.9,1.2,3,1.2,3s0.3,2.4,0.3,4.9V33.1z M28.9,35.9l8.1-4.2l-8.1-4.2L28.9,35.9z' />
												</g>
											</svg>
										</div>
									</a>
								</div>
								<div className='mr2'>
									<a href='https://www.linkedin.com/company/yourtrade-inc' target='_BLANK' rel='noopener noreferrer'>
										<svg viewBox='0 0 64 64' width={25} height={25}>
											<circle cx={32} cy={32} r={31} fill='#007fb1' />
											<path
												d='M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z'
												fill='white'
											/>
										</svg>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='center ph4 mw8-5 w-100 dn db-l'>
				<div className='mb3'>
					<svg width={101} height={26} viewBox='0 0 101 26' fill='none'>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M22.2316 8.32839C22.2316 22.2181 11.1158 26 11.1158 26C11.1158 26 0 22.2181 0 8.32839V3.32865C0 2.78064 0.426229 2.34088 0.960708 2.30029C2.97684 2.20557 7.76685 1.79964 11.1158 0C14.4715 1.79964 19.2547 2.20557 21.2709 2.30705C21.8054 2.34088 22.2316 2.78064 22.2316 3.32865V8.32839ZM12.523 7.96305C14.1738 8.11866 15.4728 8.6396 15.6081 10.1551C15.7096 11.2646 15.2428 11.9277 14.4986 12.3065C15.7231 12.6042 16.4809 13.3349 16.3185 14.9654C16.1155 16.9815 14.6001 17.516 12.4486 17.6243L12.4554 19.7419H11.1632L11.1699 17.6445C10.8384 17.6378 10.5001 17.631 10.1483 17.6243L10.1348 19.7419L8.86287 19.7351L8.8561 17.604C8.55842 17.604 6.52876 17.6107 6.52876 17.6107L6.54229 16.0682L7.97658 16.0614L7.98335 9.29586H6.34609V7.94952C6.34609 7.94952 8.65314 7.94952 8.93052 7.94275L8.92376 5.83867L10.216 5.8319V7.90892C10.561 7.90216 10.9195 7.90216 11.2578 7.90216H11.2579L11.2511 5.8522L12.5298 5.84543L12.523 7.96305ZM10.4513 16.0792C11.4956 16.1017 13.7757 16.1507 13.7882 14.688C13.8004 13.1977 11.5975 13.2333 10.5185 13.2507C10.3974 13.2527 10.2905 13.2544 10.2024 13.2537L10.2092 16.0749C10.279 16.0755 10.3605 16.0772 10.4513 16.0792ZM10.4439 11.9724C11.3072 11.9939 13.2074 12.0412 13.2199 10.7099C13.226 9.34382 11.363 9.38658 10.4782 9.40688C10.3858 9.409 10.3041 9.41088 10.2363 9.41088L10.243 11.9683C10.3008 11.9688 10.3684 11.9705 10.4439 11.9724Z'
							fill='white'
						/>
						<path
							d='M44.3346 17.2318C44.3346 18.3414 44.1181 19.2683 43.6784 20.0193C43.2386 20.7702 42.6568 21.3791 41.9328 21.8324C41.2089 22.2925 40.3835 22.6172 39.4567 22.8202C38.5298 23.0232 37.5826 23.1179 36.6084 23.1179H28.5438V2.87536H36.6084C37.3932 2.87536 38.1915 2.95655 39.0101 3.11892C39.8288 3.28129 40.573 3.55868 41.2428 3.95108C41.9125 4.34348 42.4538 4.87119 42.8733 5.54098C43.2927 6.21077 43.5025 7.05647 43.5025 8.08483C43.5025 9.20791 43.198 10.1416 42.5891 10.8722C41.9802 11.6097 41.1751 12.1374 40.1873 12.4621V12.5163C40.7624 12.611 41.2969 12.7869 41.8043 13.044C42.3117 13.3011 42.7515 13.6326 43.1168 14.0317C43.4889 14.4309 43.7866 14.8977 44.0031 15.4322C44.2264 15.9667 44.3346 16.5688 44.3346 17.2318ZM38.7869 8.74109C38.7869 8.05777 38.523 7.55712 38.0021 7.23914C37.4743 6.92116 36.7031 6.76555 35.6679 6.76555H33.2662V10.9399H35.898C36.8113 10.9399 37.5217 10.7572 38.0291 10.3851C38.5365 10.013 38.7869 9.465 38.7869 8.74109ZM39.4431 16.7786C39.4431 15.9396 39.1319 15.3578 38.4959 15.033C37.8667 14.7083 37.0278 14.5459 35.9792 14.5459H33.2594V19.1803H36.0062C36.3851 19.1803 36.7843 19.1465 37.1902 19.0788C37.6029 19.0112 37.975 18.8962 38.3065 18.7203C38.638 18.5511 38.9086 18.3076 39.1184 17.9896C39.3416 17.6784 39.4431 17.2724 39.4431 16.7786Z'
							fill='white'
						/>
						<path
							d='M50.8363 4.33671C50.8363 4.70205 50.7619 5.04033 50.6198 5.35154C50.4777 5.66952 50.2883 5.94014 50.0447 6.16341C49.8079 6.39344 49.517 6.57611 49.1855 6.70465C48.854 6.83996 48.5022 6.90762 48.1436 6.90762C47.3791 6.90762 46.7431 6.65729 46.2289 6.14988C45.7148 5.64246 45.4577 5.04033 45.4577 4.33671C45.4577 3.99167 45.5253 3.66692 45.6606 3.34894C45.7959 3.03096 45.9854 2.76034 46.2357 2.53707C46.486 2.30704 46.7702 2.12437 47.0949 1.9823C47.4197 1.84022 47.7715 1.7658 48.1504 1.7658C48.5157 1.7658 48.8607 1.83346 49.1923 1.96877C49.5238 2.10408 49.8147 2.27998 50.0515 2.51001C50.2883 2.74004 50.4777 3.01066 50.6266 3.32188C50.7686 3.63309 50.8363 3.97137 50.8363 4.33671ZM45.8027 23.1246V8.88316H50.4912V23.1246H45.8027Z'
							fill='white'
						/>
						<path
							d='M58.9956 12.3742V17.8272C58.9956 18.497 59.1241 18.9977 59.3812 19.3359C59.6383 19.6742 60.0984 19.8366 60.7682 19.8366C60.9982 19.8366 61.2418 19.8163 61.4989 19.7825C61.7559 19.7419 61.9724 19.6877 62.1416 19.6133L62.1957 23.0435C61.871 23.1585 61.465 23.2599 60.9644 23.3411C60.4705 23.4291 59.9698 23.4697 59.476 23.4697C58.522 23.4697 57.7237 23.3479 57.0742 23.1111C56.4247 22.8743 55.9037 22.5293 55.5181 22.076C55.1257 21.6295 54.8483 21.0882 54.6724 20.4725C54.5033 19.8501 54.4153 19.16 54.4153 18.3955V12.3742H52.1286V8.88316H54.3883V5.13505H58.9956V8.88316H62.3445V12.3742H58.9956Z'
							fill='white'
						/>
						<path
							d='M79.3193 23.1517C77.9932 23.4764 76.5522 23.6388 74.9826 23.6388C73.3588 23.6388 71.8704 23.3817 70.5038 22.8675C69.1371 22.3534 67.9667 21.6295 66.9857 20.6958C66.0047 19.7622 65.2334 18.6391 64.6854 17.3333C64.1306 16.0276 63.8532 14.573 63.8532 12.9696C63.8532 11.3458 64.1374 9.8777 64.6989 8.56518C65.2605 7.25266 66.0385 6.12958 67.0331 5.2027C68.0208 4.27582 69.1845 3.56544 70.5241 3.07156C71.8569 2.57767 73.2979 2.32735 74.8405 2.32735C76.4439 2.32735 77.9323 2.57091 79.3058 3.05803C80.6792 3.54515 81.7955 4.19464 82.6547 5.02003L79.5628 8.53812C79.0825 7.98334 78.4533 7.53005 77.6753 7.17824C76.8905 6.82644 76.0042 6.65053 75.0164 6.65053C74.1572 6.65053 73.3656 6.80614 72.6417 7.12412C71.9178 7.43533 71.2886 7.8751 70.7541 8.43664C70.2196 8.99818 69.8069 9.66797 69.5092 10.4392C69.2116 11.2105 69.0627 12.0562 69.0627 12.9696C69.0627 13.9032 69.198 14.7624 69.4619 15.5472C69.7257 16.332 70.1249 17.0018 70.6459 17.5634C71.1668 18.1249 71.8163 18.5647 72.5876 18.8759C73.3588 19.1939 74.2384 19.3495 75.2329 19.3495C75.808 19.3495 76.3492 19.3089 76.8634 19.2209C77.3776 19.133 77.8579 18.9977 78.2909 18.8082V15.121H74.4278V11.1767H82.7832V21.9001C81.8022 22.4075 80.6453 22.827 79.3193 23.1517Z'
							fill='white'
						/>
						<path
							d='M100.428 15.9464C100.428 17.1101 100.218 18.1655 99.7986 19.1059C99.3792 20.0531 98.8041 20.8514 98.0802 21.5077C97.3563 22.1639 96.5173 22.6781 95.5634 23.0367C94.6095 23.402 93.5879 23.5779 92.5054 23.5779C91.4364 23.5779 90.4216 23.3953 89.4609 23.0367C88.5002 22.6714 87.6612 22.1639 86.9441 21.5077C86.2269 20.8514 85.6586 20.0463 85.2392 19.1059C84.8197 18.1587 84.61 17.1101 84.61 15.9464C84.61 14.7827 84.8197 13.7341 85.2392 12.8004C85.6586 11.8668 86.2269 11.0752 86.9441 10.4257C87.6612 9.77622 88.5002 9.28234 89.4609 8.93729C90.4216 8.59225 91.4364 8.42311 92.5054 8.42311C93.5946 8.42311 94.6095 8.59225 95.5634 8.93729C96.5173 9.28234 97.3563 9.77622 98.0802 10.4257C98.8041 11.0752 99.3792 11.8668 99.7986 12.8004C100.218 13.7341 100.428 14.7827 100.428 15.9464ZM95.9084 15.9464C95.9084 15.4863 95.834 15.0398 95.6784 14.6001C95.5228 14.1603 95.3063 13.7747 95.0222 13.4431C94.738 13.1116 94.3862 12.841 93.9667 12.6313C93.5473 12.4215 93.0601 12.3201 92.5054 12.3201C91.9506 12.3201 91.4635 12.4283 91.044 12.6313C90.6246 12.841 90.2795 13.1116 90.0021 13.4431C89.7247 13.7747 89.515 14.1603 89.3729 14.6001C89.2309 15.0398 89.1564 15.4863 89.1564 15.9464C89.1564 16.4065 89.2309 16.853 89.3729 17.2927C89.515 17.7325 89.7315 18.1249 90.0157 18.4767C90.2998 18.8285 90.6516 19.1127 91.0711 19.3224C91.4905 19.5321 91.9777 19.6404 92.5324 19.6404C93.0872 19.6404 93.5743 19.5389 93.9938 19.3224C94.4133 19.1127 94.7651 18.8285 95.0492 18.4767C95.3334 18.1249 95.5499 17.7257 95.6919 17.2927C95.8408 16.853 95.9084 16.4065 95.9084 15.9464Z'
							fill='white'
						/>
					</svg>
				</div>
				<div className='cf nmh4 mb4 mb5-l'>
					<div className='fl ph4 w-100 w-50-l'>
						<div className='sc-bdVaJa uNRti f5 f5-m f4-l lh-copy mb3 measure-narrow'>
							<span>Institutional staking, custody, and trading.</span>
						</div>
						<Link href='/connect-with-us'>
							<a className='bp3-button bp3-large l-button--whiteBorder'>
								<span>Connect With Us</span>
							</a>
						</Link>
					</div>
					<div className='fl ph4 w-100 w-50-l'>
						<div className='measure-wide'>
							<div className='sc-bdVaJa uNRti f5 f5-m f4-l lh-copy mb3'>Keep up to date with our newsletter.</div>
							<div className='l-newsletterForm'>
								<div className='flex mb2 relative css-1ow4kgd'>
									<div className='bp3-input-group bp3-large l-input-group bp3-fill white'>
										<input type='text' className='bp3-input' placeholder='Email' defaultValue />
									</div>
									<button type='button' className='bp3-button bp3-large ml2 l-button--whiteBorder'>
										<span className='bp3-button-text'>Submit</span>
									</button>
								</div>
								<div className='bp3-collapse'>
									<div className='bp3-collapse-body bp3-fixed-positioning-containing-block' aria-hidden='false' />
								</div>
								<div className='silver lh-copy f7'>
									We&apos;re committed to your privacy. Your Trader uses the information you provide to us to contact
									you about our relevant content, products, and services. You may unsubscribe from these
									communications at any time. For more information, check out our
									<Link href='/legal/privacy'>
										<a className='[#0018A8] no-underline'>privacy policy</a>
									</Link>
									.
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='cf nmh4 mb4'>
					<div className='fl ph4 w-100 w-25-l'>
						<div className='ttu fw4 lh-title tracked-mega o-60 f7 mb3'>
							<span>Custody</span>
						</div>
						<div className='mb2'>
							<Link href='/services/custody/wallet-platform'>
								<a className='fw6 white-80 hover-color-[#0018A8] no-underline db pv1 pointer'>
									<span>Wallet Platform</span>
								</a>
							</Link>
						</div>
						<div className='mb2'>
							<Link href='/services/custody/qualified-custody'>
								<a className='fw6 white-80 hover-color-[#0018A8] no-underline db pv1 pointer'>
									<span>Qualified Custody</span>
								</a>
							</Link>
						</div>
						<div className='mb2'>
							<Link href='/services/custody/self-managed-custody'>
								<a className='fw6 white-80 hover-color-[#0018A8] no-underline db pv1 pointer'>
									<span>Self-Managed Custody</span>
								</a>
							</Link>
						</div>
					</div>
					<div className='fl ph4 w-100 w-25-l'>
						<div className='ttu fw4 lh-title tracked-mega o-60 f7 mb3'>
							<span>Prime Services</span>
						</div>
						<div className='mb2'>
							<Link href='/services/prime/prime-trading'>
								<a className='fw6 white-80 hover-color-[#0018A8] no-underline db pv1 pointer'>
									<span>Prime Trading</span>
								</a>
							</Link>
						</div>
						<div className='mb2'>
							<Link href='/services/prime/prime-lending'>
								<a className='fw6 white-80 hover-color-[#0018A8] no-underline db pv1 pointer'>
									<span>Prime Lending</span>
								</a>
							</Link>
						</div>
						<div className='mb2'>
							<Link href='/services/prime/settlement'>
								<a className='fw6 white-80 hover-color-[#0018A8] no-underline db pv1 pointer'>
									<span>Settlement</span>
								</a>
							</Link>
						</div>
					</div>
					<div className='fl ph4 w-100 w-25-l'>
						<div className='ttu fw4 lh-title tracked-mega o-60 f7 mb3'>
							<span>Portfolio Tools</span>
						</div>
						<div className='mb2'>
							<Link href='/services/portfolio/portfolio-management'>
								<a className='fw6 white-80 hover-color-[#0018A8] no-underline db pv1 pointer'>
									<span>Portfolio Management</span>
								</a>
							</Link>
						</div>
						<div className='mb2'>
							<Link href='/services/portfolio/tax'>
								<a className='fw6 white-80 hover-color-[#0018A8] no-underline db pv1 pointer'>
									<span>Tax</span>
								</a>
							</Link>
						</div>
					</div>
				
				
				
				
				
				
	
				</div>
				<div className='bt w-100 b--white-20 mb4' />
				<div className='cf nmh4 mb4'>
					<div className='fl ph4 w-100 w-25-l'>
						<div className='ttu fw4 lh-title tracked-mega o-60 f7 mb3'>
							<span>Resources</span>
						</div>
						<div className='mb2'>
							<Link href='/case-study'>
								<a className='fw6 white-80 hover-color-[#0018A8] no-underline db pv1 pointer'>
									<span>Case Study</span>
								</a>
							</Link>
						</div>
						<div className='mb2'>
							<Link href='/resources/digital-asset-insurance'>
								<a className='fw6 white-80 hover-color-[#0018A8] no-underline db pv1 pointer'>
									<span>Digital Asset Insurance</span>
								</a>
							</Link>
						</div>
						<div className='mb2'>
							<Link href='/resources/integrations'>
								<a className='fw6 white-80 hover-color-[#0018A8] no-underline db pv1 pointer'>
									<span>Currencies &amp; Integrations</span>
								</a>
							</Link>
						</div>
						<div className='mb2'>
							<Link href='/resources/content-library'>
								<a className='fw6 white-80 hover-color-[#0018A8] no-underline db pv1 pointer'>
									<span>Content Library</span>
								</a>
							</Link>
						</div>
						<div className='mb2'>
							<Link href='/resources/fork-policy'>
								<a className='fw6 white-80 hover-color-[#0018A8] no-underline db pv1 pointer'>
									<span>Fork Policy</span>
								</a>
							</Link>
						</div>
					</div>
					<div className='fl ph4 w-100 w-25-l'>
						<div className='ttu fw4 lh-title tracked-mega o-60 f7 mb3'>
							<span>Company</span>
						</div>
						<div className='mb2'>
							<Link href='/company/about'>
								<a className='fw6 white-80 hover-color-[#0018A8] no-underline db pv1 pointer'>
									<span>About</span>
								</a>
							</Link>
						</div>
					</div>

					<div className='fl ph4 w-100 w-25-l'>
						<div className='ttu fw4 lh-title tracked-mega o-60 f7 mb3'>
							<span>Help</span>
						</div>
						<div className='mb2'>
							<Link href='/connect-with-us'>
								<a className='fw6 white-80 hover-color-[#0018A8] no-underline db pv1 pointer'>
									<span>Connect With Us</span>
								</a>
							</Link>
						</div>
					</div>
					<div className='fl ph4 w-100 w-25-l'>
						<div className='ttu fw4 lh-title tracked-mega o-60 f7 mb3'>
							<span>Inquiries</span>
						</div>

						<a className='fw6 white-80 hover-color-[#0018A8] no-underline db pv1 pointer mb2' href='mailto:sales@yourtradebroker.com'>
							sales@yourtradebroker.com
						</a>

						<a
							className='fw6 white-80 hover-color-[#0018A8] no-underline db pv1 pointer mb2'
							href='mailto:support@yourtrade.com'>
							support@yourtrade.com
						</a>

						<div>
							{" "}
							{/*	
						<div className='ttu fw4 lh-title tracked-mega o-60 f7 mb2'>
							<span>Social</span>
												</div>

					
						<div className='flex mb4'>
							<div className='mr2'>
								<a
									target='_BLANK'
									rel='noopener noreferrer'
									href='https://blog.dashboard.yourtrade.com/'
									className='social-icon'
									aria-label='medium'
									style={{
										display: "inline-block",
										width: "25px",
										height: "25px",
										position: "relative",
										overflow: "hidden",
										verticalAlign: "middle",
									}}>
									<div
										className='social-container'
										style={{
											position: "absolute",
											top: "0px",
											left: "0px",
											width: "100%",
											height: "100%",
										}}>
										<svg
											className='social-svg'
											viewBox='0 0 64 64'
											style={{
												borderRadius: "50%",
												position: "absolute",
												top: "0px",
												left: "0px",
												width: "100%",
												height: "100%",
												fillRule: "evenodd",
											}}>
											<g
												className='social-svg-background'
												style={{
													transition: "fill 170ms ease-in-out 0s",
													fill: "transparent",
												}}>
												<circle cx={32} cy={32} r={31} />
											</g>
											<g
												className='social-svg-icon'
												style={{
													transition: "fill 170ms ease-in-out 0s",
													fill: "rgb(51, 51, 51)",
												}}>
												<path d='M47,23.7h-1.2c-0.4,0-0.9,0.6-0.9,1v14.7c0,0.4,0.5,1,0.9,1H47v3.4H36.4v-3.4h2.1V24.9h-0.1 l-5.3,18.9h-4.1l-5.2-18.9h-0.1v15.5H26v3.4h-9v-3.4h1.2c0.5,0,1-0.6,1-1V24.7c0-0.4-0.5-1-1-1H17v-3.6h11.3l3.7,13.8h0.1l3.7-13.8 H47V23.7z' />
											</g>
											<g
												className='social-svg-mask'
												style={{
													transition: "fill 170ms ease-in-out 0s",
													fill: "rgb(255, 255, 255)",
												}}>
												<path d='M0,0v64h64V0H0z M47,23.7h-1.2c-0.4,0-0.9,0.6-0.9,1v14.7c0,0.4,0.5,1,0.9,1H47v3.4H36.4v-3.4h2.1V24.9h-0.1 l-5.3,18.9h-4.1l-5.2-18.9h-0.1v15.5H26v3.4h-9v-3.4h1.2c0.5,0,1-0.6,1-1V24.7c0-0.4-0.5-1-1-1H17v-3.6h11.3l3.7,13.8h0.1l3.7-13.8 H47V23.7z' />
											</g>
										</svg>
									</div>
								</a>
							</div>
							<div className='mr2'>
								<a href='https://twitter.com/yourtrade' target='_BLANK' rel='noopener noreferrer'>
									<svg viewBox='0 0 64 64' width={25} height={25}>
										<circle cx={32} cy={32} r={31} fill='#00aced' />
										<path
											d='M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z'
											fill='white'
										/>
									</svg>
								</a>
							</div>
							<div className='mr2'>
								<a
									target='_BLANK'
									rel='noopener noreferrer'
									href='https://www.youtube.com/channel/UC7ILbUGTCM83sdilLB8Qlmg/featured/'
									className='social-icon'
									aria-label='youtube'
									style={{
										display: "inline-block",
										width: "25px",
										height: "25px",
										position: "relative",
										overflow: "hidden",
										verticalAlign: "middle",
									}}>
									<div
										className='social-container'
										style={{
											position: "absolute",
											top: "0px",
											left: "0px",
											width: "100%",
											height: "100%",
										}}>
										<svg
											className='social-svg'
											viewBox='0 0 64 64'
											style={{
												borderRadius: "50%",
												position: "absolute",
												top: "0px",
												left: "0px",
												width: "100%",
												height: "100%",
												fillRule: "evenodd",
											}}>
											<g
												className='social-svg-background'
												style={{
													transition: "fill 170ms ease-in-out 0s",
													fill: "transparent",
												}}>
												<circle cx={32} cy={32} r={31} />
											</g>
											<g
												className='social-svg-icon'
												style={{
													transition: "fill 170ms ease-in-out 0s",
													fill: "rgb(255, 255, 255)",
												}}>
												<path d='M46.7,26c0,0-0.3-2.1-1.2-3c-1.1-1.2-2.4-1.2-3-1.3C38.3,21.4,32,21.4,32,21.4h0 c0,0-6.3,0-10.5,0.3c-0.6,0.1-1.9,0.1-3,1.3c-0.9,0.9-1.2,3-1.2,3S17,28.4,17,30.9v2.3c0,2.4,0.3,4.9,0.3,4.9s0.3,2.1,1.2,3 c1.1,1.2,2.6,1.2,3.3,1.3c2.4,0.2,10.2,0.3,10.2,0.3s6.3,0,10.5-0.3c0.6-0.1,1.9-0.1,3-1.3c0.9-0.9,1.2-3,1.2-3s0.3-2.4,0.3-4.9 v-2.3C47,28.4,46.7,26,46.7,26z M28.9,35.9l0-8.4l8.1,4.2L28.9,35.9z' />
											</g>
											<g
												className='social-svg-mask'
												style={{
													transition: "fill 170ms ease-in-out 0s",
													fill: "rgb(255, 51, 51)",
												}}>
												<path d='M0,0v64h64V0H0z M47,33.1c0,2.4-0.3,4.9-0.3,4.9s-0.3,2.1-1.2,3c-1.1,1.2-2.4,1.2-3,1.3 C38.3,42.5,32,42.6,32,42.6s-7.8-0.1-10.2-0.3c-0.7-0.1-2.2-0.1-3.3-1.3c-0.9-0.9-1.2-3-1.2-3S17,35.6,17,33.1v-2.3 c0-2.4,0.3-4.9,0.3-4.9s0.3-2.1,1.2-3c1.1-1.2,2.4-1.2,3-1.3c4.2-0.3,10.5-0.3,10.5-0.3h0c0,0,6.3,0,10.5,0.3c0.6,0.1,1.9,0.1,3,1.3 c0.9,0.9,1.2,3,1.2,3s0.3,2.4,0.3,4.9V33.1z M28.9,35.9l8.1-4.2l-8.1-4.2L28.9,35.9z' />
											</g>
										</svg>
									</div>
								</a>
							</div>
							<div className='mr2'>
								<a href='https://www.linkedin.com/company/yourtrade-inc/' target='_BLANK' rel='noopener noreferrer'>
									<svg viewBox='0 0 64 64' width={25} height={25}>
										<circle cx={32} cy={32} r={31} fill='#007fb1' />
										<path
											d='M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z'
											fill='white'
										/>
									</svg>
								</a>
							</div>
										
						</div>
											*/}
						</div>
					</div>
				</div>
				<div className='bt w-100 b--white-20 mb4' />
			</div>
			<div className='center ph4 mw8-5 w-100 pt2'>
				<div className='silver f7 pb5 pt4 lh-copy'>
					©2023 Your Trader Inc Broker. All rights reserved.
					<br />
					<br />
					No legal, tax, investment, or other advice is provided by any Your Trader Inc Broker entity. Please consult your
					legal/tax/investment professional for questions about your specific circumstances. Digital asset holdings involve a high
					degree of risk, and can fluctuate greatly on any given day. Accordingly, your digital asset holdings may be subject to
					large swings in value and may even become worthless.
					<br />
					<br />
					Please review our
					<Link href='/legal/disclaimers'>
						<a className='silver hover-color-[#0018A8] underline pointer'>Legal Disclaimers</a>
					</Link>
					.<br />
					<br />
					<GoogleTranslateWidget />
				</div>
			</div>
		</div>
	)
}

export default UserFooter
