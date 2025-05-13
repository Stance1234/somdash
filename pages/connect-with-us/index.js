import Link from "next/link"
import UserLayout from "../../components/layout/userLayout"
function ConnectWithUs() {
	return (
		<UserLayout>
			<div className='b-rootLayout relative bg-euro css-179ecci'>
				<div />
				<div className='center ph4 mw8-5 w-100 b-rootLayoutNavigationBump'>
					<div className='pv5 pv5-l'>
						<div className='cf nmh4 pt4'>
							<div className='fl ph4 w-100 w-50-l'>
								<div className='f7 f6-l ttu fw4 mb3 lh-title tracked-mega mb2 black-90'>Connect With Us</div>
								<h1 className='pt2 f2 f1-m f-subheadline-l fw5 mt0 mw7-l mb3 mb4-l'>
									Reach out to
									<br />
									learn more
								</h1>
								<div className='sc-bdVaJa uNRti f5 f5-m f4-l lh-copy mb4'>
									Your Trader Inc. Broker is the leader in institutional staking, custody, and trading.
									<br />
									<br />
									We enable our clients to navigate the complex landscape of digital assets with a connected,
									compliant, and secure suite of solutions.
									<br />
									<br />
									Please complete our form or email us at{" "}
									<a className='[#0018A8]' href='mailto:admin@yourtradebroker.com'>
										sales@yourtradebroker.com
									</a>{" "}
									and a member of our team will be in touch shortly. If you are a coin foundation or token project
									and would like to inquire about listing, email us at{" "}
									<a className='[#0018A8]' href='mailto:support@yourtrade.com'>
										support@yourtrade.com
									</a>
									.<br />
									<br />
									For support inquiries please email us at{" "}
									<a className='[#0018A8]' href='mailto:support@yourtrade.com'>
										support@yourtrade.com
									</a>
									.
								</div>
							</div>
							<div className='fl ph4 w-100 w-50-l'>
								<div className='l-interestForm'>
									<div className='br3 bg-white pa3 pa4-m pa4-l relative'>
										<div className='cf nmh3'>
											<div className='fl ph3 w-100 w-50-m w-50-l mb3'>
												<div className='l-formContent'>
													<label className='l-label mb1'>First Name </label>
													<div className='l-formContentEditable'>
														<div className='bp3-input-group bp3-large l-input-group'>
															<input
																type='text'
																className='bp3-input'
																name='firstname'
																placeholder='Required'
																defaultValue=''
															/>
														</div>
													</div>
												</div>
											</div>
											<div className='fl ph3 w-100 w-50-m w-50-l mb3'>
												<div className='l-formContent'>
													<label className='l-label mb1'>Last Name </label>
													<div className='l-formContentEditable'>
														<div className='bp3-input-group bp3-large l-input-group'>
															<input
																type='text'
																className='bp3-input'
																name='lastname'
																placeholder='Required'
																defaultValue=''
															/>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className='cf nmh3'>
											<div className='fl ph3 w-100 w-50-m w-50-l mb3'>
												<div className='l-formContent'>
													<label className='l-label mb1'>Phone </label>
													<div className='l-formContentEditable'>
														<div className='bp3-input-group bp3-large l-input-group'>
															<input
																type='text'
																className='bp3-input'
																name='phone'
																placeholder='Required'
																defaultValue=''
															/>
														</div>
													</div>
												</div>
											</div>
											<div className='fl ph3 w-100 w-50-m w-50-l mb3'>
												<div className='l-formContent'>
													<label className='l-label mb1'>Work Email </label>
													<div className='l-formContentEditable'>
														<div className='bp3-input-group bp3-large l-input-group'>
															<input
																type='text'
																className='bp3-input'
																name='email'
																placeholder='Required'
																defaultValue=''
															/>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className='cf nmh3'>
											<div className='fl ph3 w-100 w-50-m w-50-l mb3'>
												<div className='l-formContent'>
													<label className='l-label mb1'>Company or Institution </label>
													<div className='l-formContentEditable'>
														<div className='bp3-input-group bp3-large l-input-group mb3'>
															<input
																type='text'
																className='bp3-input'
																name='company'
																placeholder='Required'
																defaultValue=''
															/>
														</div>
													</div>
												</div>
												<div className='l-formContent'>
													<label className='l-label mb1'>Business Type </label>
													<div className='l-formContentEditable'>
														<div className='bp3-html-select bp3-large l-htmlSelect mb3 l-htmlSelect--vertical'>
															<select name='business_type'>
																<option
																	label='Select business type...'
																	className='l-htmlSelect-placeholder'>
																	Select business type...
																</option>
																<option label='Asset manager' value='Asset manager'>
																	Asset manager
																</option>
																<option
																	label='Family office / HNWI'
																	value='Family office / HNWI'>
																	Family office / HNWI
																</option>
																<option label='Hedge fund' value='Hedge fund'>
																	Hedge fund
																</option>
																<option
																	label='Traditional financial institution'
																	value='Traditional financial institution'>
																	Traditional financial institution
																</option>
																<option label='VC' value='VC'>
																	VC
																</option>
																<option label='Exchange' value='Exchange'>
																	Exchange
																</option>
																<option
																	label='Lending platform'
																	value='Lending platform'>
																	Lending platform
																</option>
																<option label='Miner' value='Miner'>
																	Miner
																</option>
																<option label='Neo bank' value='Neo bank'>
																	Neo bank
																</option>
																<option label='Retail FinTech' value='Retail FinTech'>
																	Retail FinTech
																</option>
																<option
																	label='Blockchain project / foundation'
																	value='Blockchain project / foundation'>
																	Blockchain project / foundation
																</option>
																<option label='Other' value='Other'>
																	Other
																</option>
															</select>
															<span
																icon='double-caret-vertical'
																className='bp3-icon bp3-icon-double-caret-vertical'>
																<svg
																	data-icon='double-caret-vertical'
																	width={16}
																	height={16}
																	viewBox='0 0 16 16'>
																	<desc>double-caret-vertical</desc>
																	<path
																		d='M5 7h6a1.003 1.003 0 00.71-1.71l-3-3C8.53 2.11 8.28 2 8 2s-.53.11-.71.29l-3 3A1.003 1.003 0 005 7zm6 2H5a1.003 1.003 0 00-.71 1.71l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3A1.003 1.003 0 0011 9z'
																		fillRule='evenodd'
																	/>
																</svg>
															</span>
														</div>
													</div>
												</div>
												<div className='l-formContent'>
													<label className='l-label mb1'>Country </label>
													<div className='l-formContentEditable'>
														<div className='bp3-html-select bp3-large l-htmlSelect l-htmlSelect--vertical'>
															<select name='lead_country__c'>
																<option
																	label='Select country...'
																	className='l-htmlSelect-placeholder'>
																	Select country...
																</option>
																<option label='United States' value='United States'>
																	United States
																</option>
																<option label='Afghanistan' value='Afghanistan'>
																	Afghanistan
																</option>
																<option label='Åland Islands' value='Åland Islands'>
																	Åland Islands
																</option>
																<option label='Albania' value='Albania'>
																	Albania
																</option>
																<option label='Algeria' value='Algeria'>
																	Algeria
																</option>
																<option label='American Samoa' value='American Samoa'>
																	American Samoa
																</option>
																<option label='Andorra' value='Andorra'>
																	Andorra
																</option>
																<option label='Angola' value='Angola'>
																	Angola
																</option>
																<option label='Anguilla' value='Anguilla'>
																	Anguilla
																</option>
																<option label='Antarctica' value='Antarctica'>
																	Antarctica
																</option>
																<option
																	label='Antigua and Barbuda'
																	value='Antigua and Barbuda'>
																	Antigua and Barbuda
																</option>
																<option label='Argentina' value='Argentina'>
																	Argentina
																</option>
																<option label='Armenia' value='Armenia'>
																	Armenia
																</option>
																<option label='Aruba' value='Aruba'>
																	Aruba
																</option>
																<option label='Australia' value='Australia'>
																	Australia
																</option>
																<option label='Austria' value='Austria'>
																	Austria
																</option>
																<option label='Azerbaijan' value='Azerbaijan'>
																	Azerbaijan
																</option>
																<option label='Bahamas' value='Bahamas'>
																	Bahamas
																</option>
																<option label='Bahrain' value='Bahrain'>
																	Bahrain
																</option>
																<option label='Bangladesh' value='Bangladesh'>
																	Bangladesh
																</option>
																<option label='Barbados' value='Barbados'>
																	Barbados
																</option>
																<option label='Belarus' value='Belarus'>
																	Belarus
																</option>
																<option label='Belgium' value='Belgium'>
																	Belgium
																</option>
																<option label='Belize' value='Belize'>
																	Belize
																</option>
																<option label='Benin' value='Benin'>
																	Benin
																</option>
																<option label='Bermuda' value='Bermuda'>
																	Bermuda
																</option>
																<option label='Bhutan' value='Bhutan'>
																	Bhutan
																</option>
																<option label='Bolivia' value='Bolivia'>
																	Bolivia
																</option>
																<option
																	label='Bosnia and Herzegovina'
																	value='Bosnia and Herzegovina'>
																	Bosnia and Herzegovina
																</option>
																<option label='Botswana' value='Botswana'>
																	Botswana
																</option>
																<option label='Bouvet Island' value='Bouvet Island'>
																	Bouvet Island
																</option>
																<option label='Brazil' value='Brazil'>
																	Brazil
																</option>
																<option
																	label='British Indian Ocean Territory'
																	value='British Indian Ocean Territory'>
																	British Indian Ocean Territory
																</option>
																<option
																	label='Virgin Islands, British'
																	value='Virgin Islands, British'>
																	Virgin Islands, British
																</option>
																<option
																	label='Brunei Darussalam'
																	value='Brunei Darussalam'>
																	Brunei Darussalam
																</option>
																<option label='Bulgaria' value='Bulgaria'>
																	Bulgaria
																</option>
																<option label='Burkina Faso' value='Burkina Faso'>
																	Burkina Faso
																</option>
																<option label='Burundi' value='Burundi'>
																	Burundi
																</option>
																<option label='Cape Verde' value='Cape Verde'>
																	Cape Verde
																</option>
																<option label='Cambodia' value='Cambodia'>
																	Cambodia
																</option>
																<option label='Cameroon' value='Cameroon'>
																	Cameroon
																</option>
																<option label='Canada' value='Canada'>
																	Canada
																</option>
																<option label='Cayman Islands' value='Cayman Islands'>
																	Cayman Islands
																</option>
																<option
																	label='Central African Republic'
																	value='Central African Republic'>
																	Central African Republic
																</option>
																<option label='Chad' value='Chad'>
																	Chad
																</option>
																<option label='Chile' value='Chile'>
																	Chile
																</option>
																<option label='China' value='China'>
																	China
																</option>
																<option
																	label='Christmas Island'
																	value='Christmas Island'>
																	Christmas Island
																</option>
																<option
																	label='Cocos (Keeling) Islands'
																	value='Cocos (Keeling) Islands'>
																	Cocos (Keeling) Islands
																</option>
																<option label='Colombia' value='Colombia'>
																	Colombia
																</option>
																<option label='Comoros' value='Comoros'>
																	Comoros
																</option>
																<option
																	label='Congo (Congo-Brazzaville)'
																	value='Congo (Congo-Brazzaville)'>
																	Congo (Congo-Brazzaville)
																</option>
																<option
																	label='Congo, Democratic Republic of the'
																	value='Congo, Democratic Republic of the'>
																	Congo, Democratic Republic of the
																</option>
																<option label='Cook Islands' value='Cook Islands'>
																	Cook Islands
																</option>
																<option label='Costa Rica' value='Costa Rica'>
																	Costa Rica
																</option>
																<option label="Côte d'Ivoire" value="Côte d'Ivoire">
																	Côte d&apos;Ivoire
																</option>
																<option label='Croatia' value='Croatia'>
																	Croatia
																</option>
																<option label='Cuba' value='Cuba'>
																	Cuba
																</option>
																<option label='Curacao' value='Curacao'>
																	Curacao
																</option>
																<option label='Cyprus' value='Cyprus'>
																	Cyprus
																</option>
																<option label='Czech Republic' value='Czech Republic'>
																	Czech Republic
																</option>
																<option label='Denmark' value='Denmark'>
																	Denmark
																</option>
																<option label='Djibouti' value='Djibouti'>
																	Djibouti
																</option>
																<option label='Dominica' value='Dominica'>
																	Dominica
																</option>
																<option
																	label='Dominican Republic'
																	value='Dominican Republic'>
																	Dominican Republic
																</option>
																<option label='Ecuador' value='Ecuador'>
																	Ecuador
																</option>
																<option label='Egypt' value='Egypt'>
																	Egypt
																</option>
																<option label='El Salvador' value='El Salvador'>
																	El Salvador
																</option>
																<option
																	label='Equatorial Guinea'
																	value='Equatorial Guinea'>
																	Equatorial Guinea
																</option>
																<option label='Eritrea' value='Eritrea'>
																	Eritrea
																</option>
																<option label='Estonia' value='Estonia'>
																	Estonia
																</option>
																<option label='Eswatini' value='Eswatini'>
																	Eswatini
																</option>
																<option label='Ethiopia' value='Ethiopia'>
																	Ethiopia
																</option>
																<option
																	label='Falkland Islands (Malvinas)'
																	value='Falkland Islands (Malvinas)'>
																	Falkland Islands (Malvinas)
																</option>
																<option label='Fiji' value='Fiji'>
																	Fiji
																</option>
																<option label='Finland' value='Finland'>
																	Finland
																</option>
																<option label='France' value='France'>
																	France
																</option>
																<option label='French Guiana' value='French Guiana'>
																	French Guiana
																</option>
																<option
																	label='French Polynesia'
																	value='French Polynesia'>
																	French Polynesia
																</option>
																<option
																	label='French Southern Territories'
																	value='French Southern Territories'>
																	French Southern Territories
																</option>
																<option label='Gabon' value='Gabon'>
																	Gabon
																</option>
																<option label='Gambia' value='Gambia'>
																	Gambia
																</option>
																<option label='Georgia' value='Georgia'>
																	Georgia
																</option>
																<option label='Germany' value='Germany'>
																	Germany
																</option>
																<option label='Ghana' value='Ghana'>
																	Ghana
																</option>
																<option label='Gibraltar' value='Gibraltar'>
																	Gibraltar
																</option>
																<option label='Greece' value='Greece'>
																	Greece
																</option>
																<option label='Greenland' value='Greenland'>
																	Greenland
																</option>
																<option label='Grenada' value='Grenada'>
																	Grenada
																</option>
																<option label='Guadeloupe' value='Guadeloupe'>
																	Guadeloupe
																</option>
																<option label='Guam' value='Guam'>
																	Guam
																</option>
																<option label='Guatemala' value='Guatemala'>
																	Guatemala
																</option>
																<option label='Guernsey' value='Guernsey'>
																	Guernsey
																</option>
																<option label='Guinea' value='Guinea'>
																	Guinea
																</option>
																<option label='Guinea-Bissau' value='Guinea-Bissau'>
																	Guinea-Bissau
																</option>
																<option label='Guyana' value='Guyana'>
																	Guyana
																</option>
																<option label='Haiti' value='Haiti'>
																	Haiti
																</option>
																<option
																	label='Heard Island and McDonald Islands'
																	value='Heard Island and McDonald Islands'>
																	Heard Island and McDonald Islands
																</option>
																<option label='Holy See' value='Holy See'>
																	Holy See
																</option>
																<option label='Honduras' value='Honduras'>
																	Honduras
																</option>
																<option label='Hong Kong' value='Hong Kong'>
																	Hong Kong
																</option>
																<option label='Hungary' value='Hungary'>
																	Hungary
																</option>
																<option label='Iceland' value='Iceland'>
																	Iceland
																</option>
																<option label='India' value='India'>
																	India
																</option>
																<option label='Indonesia' value='Indonesia'>
																	Indonesia
																</option>
																<option
																	label='Iran, Islamic Republic Of'
																	value='Iran, Islamic Republic Of'>
																	Iran, Islamic Republic Of
																</option>
																<option label='Iraq' value='Iraq'>
																	Iraq
																</option>
																<option label='Ireland' value='Ireland'>
																	Ireland
																</option>
																<option label='Isle of Man' value='Isle of Man'>
																	Isle of Man
																</option>
																<option label='Israel' value='Israel'>
																	Israel
																</option>
																<option label='Italy' value='Italy'>
																	Italy
																</option>
																<option label='Jamaica' value='Jamaica'>
																	Jamaica
																</option>
																<option label='Japan' value='Japan'>
																	Japan
																</option>
																<option label='Jersey' value='Jersey'>
																	Jersey
																</option>
																<option label='Jordan' value='Jordan'>
																	Jordan
																</option>
																<option label='Kazakhstan' value='Kazakhstan'>
																	Kazakhstan
																</option>
																<option label='Kenya' value='Kenya'>
																	Kenya
																</option>
																<option label='Kiribati' value='Kiribati'>
																	Kiribati
																</option>
																<option label='North Korea' value='North Korea'>
																	North Korea
																</option>
																<option label='Kuwait' value='Kuwait'>
																	Kuwait
																</option>
																<option label='Kyrgyzstan' value='Kyrgyzstan'>
																	Kyrgyzstan
																</option>
																<option label='Laos' value='Laos'>
																	Laos
																</option>
																<option label='Latvia' value='Latvia'>
																	Latvia
																</option>
																<option label='Lebanon' value='Lebanon'>
																	Lebanon
																</option>
																<option label='Lesotho' value='Lesotho'>
																	Lesotho
																</option>
																<option label='Liberia' value='Liberia'>
																	Liberia
																</option>
																<option label='Libya' value='Libya'>
																	Libya
																</option>
																<option label='Liechtenstein' value='Liechtenstein'>
																	Liechtenstein
																</option>
																<option label='Lithuania' value='Lithuania'>
																	Lithuania
																</option>
																<option label='Luxembourg' value='Luxembourg'>
																	Luxembourg
																</option>
																<option label='Macao' value='Macao'>
																	Macao
																</option>
																<option label='Madagascar' value='Madagascar'>
																	Madagascar
																</option>
																<option label='Malawi' value='Malawi'>
																	Malawi
																</option>
																<option label='Malaysia' value='Malaysia'>
																	Malaysia
																</option>
																<option label='Maldives' value='Maldives'>
																	Maldives
																</option>
																<option label='Mali' value='Mali'>
																	Mali
																</option>
																<option label='Malta' value='Malta'>
																	Malta
																</option>
																<option
																	label='Marshall Islands'
																	value='Marshall Islands'>
																	Marshall Islands
																</option>
																<option label='Martinique' value='Martinique'>
																	Martinique
																</option>
																<option label='Mauritania' value='Mauritania'>
																	Mauritania
																</option>
																<option label='Mauritius' value='Mauritius'>
																	Mauritius
																</option>
																<option label='Mayotte' value='Mayotte'>
																	Mayotte
																</option>
																<option label='Mexico' value='Mexico'>
																	Mexico
																</option>
																<option
																	label='Micronesia, Federated States of'
																	value='Micronesia, Federated States of'>
																	Micronesia, Federated States of
																</option>
																<option
																	label='Moldova, Republic of'
																	value='Moldova, Republic of'>
																	Moldova, Republic of
																</option>
																<option label='Monaco' value='Monaco'>
																	Monaco
																</option>
																<option label='Mongolia' value='Mongolia'>
																	Mongolia
																</option>
																<option label='Montenegro' value='Montenegro'>
																	Montenegro
																</option>
																<option label='Montserrat' value='Montserrat'>
																	Montserrat
																</option>
																<option label='Morocco' value='Morocco'>
																	Morocco
																</option>
																<option label='Mozambique' value='Mozambique'>
																	Mozambique
																</option>
																<option label='Myanmar' value='Myanmar'>
																	Myanmar
																</option>
																<option label='Namibia' value='Namibia'>
																	Namibia
																</option>
																<option label='Nauru' value='Nauru'>
																	Nauru
																</option>
																<option label='Nepal' value='Nepal'>
																	Nepal
																</option>
																<option label='Netherlands' value='Netherlands'>
																	Netherlands
																</option>
																<option label='New Caledonia' value='New Caledonia'>
																	New Caledonia
																</option>
																<option label='New Zealand' value='New Zealand'>
																	New Zealand
																</option>
																<option label='Nicaragua' value='Nicaragua'>
																	Nicaragua
																</option>
																<option label='Niger' value='Niger'>
																	Niger
																</option>
																<option label='Nigeria' value='Nigeria'>
																	Nigeria
																</option>
																<option label='Niue' value='Niue'>
																	Niue
																</option>
																<option label='Norfolk Island' value='Norfolk Island'>
																	Norfolk Island
																</option>
																<option
																	label='North Macedonia'
																	value='North Macedonia'>
																	North Macedonia
																</option>
																<option
																	label='Northern Mariana Islands'
																	value='Northern Mariana Islands'>
																	Northern Mariana Islands
																</option>
																<option label='Norway' value='Norway'>
																	Norway
																</option>
																<option label='Oman' value='Oman'>
																	Oman
																</option>
																<option label='Pakistan' value='Pakistan'>
																	Pakistan
																</option>
																<option label='Palau' value='Palau'>
																	Palau
																</option>
																<option
																	label='Palestinian Territories'
																	value='Palestinian Territories'>
																	Palestinian Territories
																</option>
																<option label='Panama' value='Panama'>
																	Panama
																</option>
																<option
																	label='Papua New Guinea'
																	value='Papua New Guinea'>
																	Papua New Guinea
																</option>
																<option label='Paraguay' value='Paraguay'>
																	Paraguay
																</option>
																<option label='Peru' value='Peru'>
																	Peru
																</option>
																<option label='Philippines' value='Philippines'>
																	Philippines
																</option>
																<option label='Pitcairn' value='Pitcairn'>
																	Pitcairn
																</option>
																<option label='Poland' value='Poland'>
																	Poland
																</option>
																<option label='Portugal' value='Portugal'>
																	Portugal
																</option>
																<option label='Puerto Rico' value='Puerto Rico'>
																	Puerto Rico
																</option>
																<option label='Qatar' value='Qatar'>
																	Qatar
																</option>
																<option label='Réunion' value='Réunion'>
																	Réunion
																</option>
																<option label='Romania' value='Romania'>
																	Romania
																</option>
																<option
																	label='Russian Federation'
																	value='Russian Federation'>
																	Russian Federation
																</option>
																<option label='Rwanda' value='Rwanda'>
																	Rwanda
																</option>
																<option label='Saint Helena' value='Saint Helena'>
																	Saint Helena
																</option>
																<option
																	label='Saint Kitts and Nevis'
																	value='Saint Kitts and Nevis'>
																	Saint Kitts and Nevis
																</option>
																<option label='Saint Lucia' value='Saint Lucia'>
																	Saint Lucia
																</option>
																<option
																	label='Saint Pierre and Miquelon'
																	value='Saint Pierre and Miquelon'>
																	Saint Pierre and Miquelon
																</option>
																<option
																	label='Saint Vincent and the Grenadines'
																	value='Saint Vincent and the Grenadines'>
																	Saint Vincent and the Grenadines
																</option>
																<option label='Samoa' value='Samoa'>
																	Samoa
																</option>
																<option label='San Marino' value='San Marino'>
																	San Marino
																</option>
																<option
																	label='Sao Tome and Principe'
																	value='Sao Tome and Principe'>
																	Sao Tome and Principe
																</option>
																<option label='Saudi Arabia' value='Saudi Arabia'>
																	Saudi Arabia
																</option>
																<option label='Senegal' value='Senegal'>
																	Senegal
																</option>
																<option label='Serbia' value='Serbia'>
																	Serbia
																</option>
																<option label='Seychelles' value='Seychelles'>
																	Seychelles
																</option>
																<option label='Sierra Leone' value='Sierra Leone'>
																	Sierra Leone
																</option>
																<option label='Singapore' value='Singapore'>
																	Singapore
																</option>
																<option label='Slovakia' value='Slovakia'>
																	Slovakia
																</option>
																<option label='Slovenia' value='Slovenia'>
																	Slovenia
																</option>
																<option
																	label='Solomon Islands'
																	value='Solomon Islands'>
																	Solomon Islands
																</option>
																<option label='Somalia' value='Somalia'>
																	Somalia
																</option>
																<option label='South Africa' value='South Africa'>
																	South Africa
																</option>
																<option label='South Korea' value='South Korea'>
																	South Korea
																</option>
																<option label='South Sudan' value='South Sudan'>
																	South Sudan
																</option>
																<option label='Spain' value='Spain'>
																	Spain
																</option>
																<option label='Sri Lanka' value='Sri Lanka'>
																	Sri Lanka
																</option>
																<option label='Sudan' value='Sudan'>
																	Sudan
																</option>
																<option label='Suriname' value='Suriname'>
																	Suriname
																</option>
																<option
																	label='Svalbard and Jan Mayen'
																	value='Svalbard and Jan Mayen'>
																	Svalbard and Jan Mayen
																</option>
																<option label='Sweden' value='Sweden'>
																	Sweden
																</option>
																<option label='Switzerland' value='Switzerland'>
																	Switzerland
																</option>
																<option
																	label='Syrian Arab Republic'
																	value='Syrian Arab Republic'>
																	Syrian Arab Republic
																</option>
																<option
																	label='Taiwan, Province of China'
																	value='Taiwan, Province of China'>
																	Taiwan, Province of China
																</option>
																<option label='Tajikistan' value='Tajikistan'>
																	Tajikistan
																</option>
																<option
																	label='Tanzania, United Republic of'
																	value='Tanzania, United Republic of'>
																	Tanzania, United Republic of
																</option>
																<option label='Thailand' value='Thailand'>
																	Thailand
																</option>
																<option label='Timor-Leste' value='Timor-Leste'>
																	Timor-Leste
																</option>
																<option label='Togo' value='Togo'>
																	Togo
																</option>
																<option label='Tonga' value='Tonga'>
																	Tonga
																</option>
																<option
																	label='Trinidad and Tobago'
																	value='Trinidad and Tobago'>
																	Trinidad and Tobago
																</option>
																<option label='Tunisia' value='Tunisia'>
																	Tunisia
																</option>
																<option label='Turkey' value='Turkey'>
																	Turkey
																</option>
																<option label='Turkmenistan' value='Turkmenistan'>
																	Turkmenistan
																</option>
																<option
																	label='Turks and Caicos Islands'
																	value='Turks and Caicos Islands'>
																	Turks and Caicos Islands
																</option>
																<option label='Tuvalu' value='Tuvalu'>
																	Tuvalu
																</option>
																<option label='Uganda' value='Uganda'>
																	Uganda
																</option>
																<option label='Ukraine' value='Ukraine'>
																	Ukraine
																</option>
																<option
																	label='United Arab Emirates'
																	value='United Arab Emirates'>
																	United Arab Emirates
																</option>
																<option label='United Kingdom' value='United Kingdom'>
																	United Kingdom
																</option>
																<option
																	label='United States Minor Outlying Islands'
																	value='United States Minor Outlying Islands'>
																	United States Minor Outlying Islands
																</option>
																<option label='Uruguay' value='Uruguay'>
																	Uruguay
																</option>
																<option
																	label='Virgin Islands, U.S.'
																	value='Virgin Islands, U.S.'>
																	Virgin Islands, U.S.
																</option>
																<option label='Uzbekistan' value='Uzbekistan'>
																	Uzbekistan
																</option>
																<option label='Vanuatu' value='Vanuatu'>
																	Vanuatu
																</option>
																<option label='Venezuela' value='Venezuela'>
																	Venezuela
																</option>
																<option label='Viet Nam' value='Viet Nam'>
																	Viet Nam
																</option>
																<option label='Yemen' value='Yemen'>
																	Yemen
																</option>
																<option label='Zambia' value='Zambia'>
																	Zambia
																</option>
																<option label='Zimbabwe' value='Zimbabwe'>
																	Zimbabwe
																</option>
															</select>
															<span
																icon='double-caret-vertical'
																className='bp3-icon bp3-icon-double-caret-vertical'>
																<svg
																	data-icon='double-caret-vertical'
																	width={16}
																	height={16}
																	viewBox='0 0 16 16'>
																	<desc>double-caret-vertical</desc>
																	<path
																		d='M5 7h6a1.003 1.003 0 00.71-1.71l-3-3C8.53 2.11 8.28 2 8 2s-.53.11-.71.29l-3 3A1.003 1.003 0 005 7zm6 2H5a1.003 1.003 0 00-.71 1.71l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3A1.003 1.003 0 0011 9z'
																		fillRule='evenodd'
																	/>
																</svg>
															</span>
														</div>
													</div>
												</div>
											</div>
											<div className='fl ph3 w-100 w-50-m w-50-l mb3'>
												<label className='l-label mb1'>Products of interest </label>
												<label className='bp3-control bp3-checkbox mb0'>
													<input type='checkbox' defaultValue='Hot wallets' />
													<span className='bp3-control-indicator' />
													<span className='lh-copy'>Hot wallets</span>
												</label>
												<label className='bp3-control bp3-checkbox mb0'>
													<input
														type='checkbox'
														defaultValue='Cold wallets / qualified custody'
													/>
													<span className='bp3-control-indicator' />
													<span className='lh-copy'>Cold wallets / qualified custody</span>
												</label>
												<label className='bp3-control bp3-checkbox mb0'>
													<input type='checkbox' defaultValue='Self-managed cold wallets' />
													<span className='bp3-control-indicator' />
													<span className='lh-copy'>Self-managed cold wallets</span>
												</label>
												<label className='bp3-control bp3-checkbox mb0'>
													<input type='checkbox' defaultValue='NFT wallets' />
													<span className='bp3-control-indicator' />
													<span className='lh-copy'>NFT wallets</span>
												</label>
												<label className='bp3-control bp3-checkbox mb0'>
													<input type='checkbox' defaultValue='Staking ' />
													<span className='bp3-control-indicator' />
													<span className='lh-copy'>Staking </span>
												</label>
												<label className='bp3-control bp3-checkbox mb0'>
													<input type='checkbox' defaultValue='DeFi access' />
													<span className='bp3-control-indicator' />
													<span className='lh-copy'>DeFi access</span>
												</label>
												<label className='bp3-control bp3-checkbox mb0'>
													<input type='checkbox' defaultValue='Trading' />
													<span className='bp3-control-indicator' />
													<span className='lh-copy'>Trading</span>
												</label>
												<label className='bp3-control bp3-checkbox mb0'>
													<input type='checkbox' defaultValue='Borrowing and lending' />
													<span className='bp3-control-indicator' />
													<span className='lh-copy'>Borrowing and lending</span>
												</label>
												<label className='bp3-control bp3-checkbox mb0'>
													<input type='checkbox' defaultValue='Strategic partnerships' />
													<span className='bp3-control-indicator' />
													<span className='lh-copy'>Strategic partnerships</span>
												</label>
											</div>
										</div>
										<div className='l-formContent'>
											<label className='l-label mb1'>Inquiry </label>
											<div className='l-formContentEditable'>
												<div className='l-input-group'>
													<textarea
														rows={3}
														className='bp3-input'
														name='message__c'
														style={{ height: 67 }}
														defaultValue={""}
													/>
												</div>
											</div>
										</div>
										<label className='bp3-control bp3-checkbox mv3'>
											<input type='checkbox' />
											<span className='bp3-control-indicator' />
											<span className='silver lh-copy'>
												By checking this box, I consent to receiving product and marketing emails from
												yourtrade. I understand that if I change my mind, I can opt out at any time. yourtrade
												Broker is committed to protecting your information.​ Read our{" "}
												<Link href='/legal/privacy'>
													<a className='[#0018A8] no-underline'>Privacy Policy</a>
												</Link>{" "}
												for more details.
											</span>
										</label>
										<div className='mb3'>
											<div>
												<div>
													<div style={{ width: 304, height: 78 }}>
														<div>
															<iframe
																title='reCAPTCHA'
																src='https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LeifJgUAAAAAFqmBF9o80zicMeO5HFQTrJ2F4Ur&co=aHR0cHM6Ly93d3cuYml0Z28uY29tOjQ0Mw..&hl=en&type=image&v=vP4jQKq0YJFzU6e21-BGy3GP&theme=light&size=normal&badge=bottomright&cb=u9wur5m2dluq'
																width={304}
																height={78}
																role='presentation'
																name='a-s6hhjbw9f9tj'
																frameBorder={0}
																scrolling='no'
																sandbox='allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation'
															/>
														</div>
														<textarea
															id='g-recaptcha-response'
															name='g-recaptcha-response'
															className='g-recaptcha-response'
															style={{
																width: 250,
																height: 40,
																border: "1px solid rgb(193, 193, 193)",
																margin: "10px 25px",
																padding: 0,
																resize: "none",
																display: "none",
															}}
															defaultValue={""}
														/>
													</div>
													<iframe style={{ display: "none" }} />
												</div>
											</div>
										</div>
										<button type='button' className='bp3-button bp3-fill l-button--xl l-button--black'>
											<span className='bp3-button-text'>Submit</span>
										</button>
										<div className='bp3-collapse'>
											<div
												className='bp3-collapse-body bp3-fixed-positioning-containing-block'
												aria-hidden='false'
											/>
										</div>
									</div>
								</div>
								<div className='sc-bdVaJa uNRti f5 f5-m f4-l lh-copy mb3 black-50 pv3'>
									If you are an individual looking to sign up for Your Trader Inc. Broker wallet services, please click{" "}
									<Link href='/auth/sign-up'>
										<a className='[#0018A8] no-underline'>here</a>
									</Link>{" "}
									to sign-up.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</UserLayout>
	)
}

export default ConnectWithUs
