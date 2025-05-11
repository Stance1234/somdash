import Link from "next/link"
import UserLayout from "../../../components/layout/userLayout"

function DIsclaimer() {
	return (
		<UserLayout>
			<div className='b-rootLayout relative css-179ecci'>
				<div />
				<div>
					<div className='center ph4 mw8-5 w-100 mb6'>
						<div className='pt5 pb3 pv6-l'>
							<h1 className='pt2 f2 f1-m f-subheadline-l fw5 mt0 mw7-l mb3 mb4-l'>Legal</h1>
						</div>
						<div className='pv3 dn-l mb4 overflow-auto'>
							<div className='bp3-tabs l-verticalTabs l-verticalTabs--br--left l-verticalTabs--br--right bb b--border'>
								<div className='bp3-tab-list' role='tablist'>
									<div
										aria-controls='bp3-tab-panel_legalTabs_terms-of-use'
										aria-disabled='false'
										aria-expanded='false'
										aria-selected='false'
										className='bp3-tab'
										data-tab-id='terms-of-use'
										id='bp3-tab-title_legalTabs_terms-of-use'
										role='tab'
										tabIndex={0}>
										<Link href='/legal/terms-of-use'>
											<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pv1 pointer'>
												Terms of Use
											</a>
										</Link>
									</div>
									<div
										aria-controls='bp3-tab-panel_legalTabs_disclaimers'
										aria-disabled='false'
										aria-expanded='true'
										aria-selected='true'
										className='bp3-tab'
										data-tab-id='disclaimers'
										id='bp3-tab-title_legalTabs_disclaimers'
										role='tab'
										tabIndex={0}>
										<Link href='/legal/disclaimers'>
											<a
												aria-current='page'
												className='fw6 black-80 hover-color-[#0018A8] no-underline db pv1 pointer active'>
												Disclaimers
											</a>
										</Link>
									</div>
									<div
										aria-controls='bp3-tab-panel_legalTabs_services-agreement'
										aria-disabled='false'
										aria-expanded='false'
										aria-selected='false'
										className='bp3-tab'
										data-tab-id='services-agreement'
										id='bp3-tab-title_legalTabs_services-agreement'
										role='tab'
										tabIndex={0}>
										<Link href='/legal/services-agreement'>
											<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pv1 pointer'>
												Services Agreement
											</a>
										</Link>
									</div>
									<div
										aria-controls='bp3-tab-panel_legalTabs_service-level-agreement'
										aria-disabled='false'
										aria-expanded='false'
										aria-selected='false'
										className='bp3-tab'
										data-tab-id='service-level-agreement'
										id='bp3-tab-title_legalTabs_service-level-agreement'
										role='tab'
										tabIndex={0}>
										<Link href='/legal/service-level-agreement'>
											<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pv1 pointer'>
												Service Level Agreement
											</a>
										</Link>
									</div>
									<div
										aria-controls='bp3-tab-panel_legalTabs_privacy'
										aria-disabled='false'
										aria-expanded='false'
										aria-selected='false'
										className='bp3-tab'
										data-tab-id='privacy'
										id='bp3-tab-title_legalTabs_privacy'
										role='tab'
										tabIndex={0}>
										<Link href='/legal/privacy'>
											<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pv1 pointer'>Privacy</a>
										</Link>
									</div>
									<div
										aria-controls='bp3-tab-panel_legalTabs_affiliate-disclosure'
										aria-disabled='false'
										aria-expanded='false'
										aria-selected='false'
										className='bp3-tab'
										data-tab-id='affiliate-disclosure'
										id='bp3-tab-title_legalTabs_affiliate-disclosure'
										role='tab'
										tabIndex={0}>
										<Link href='/legal/affiliate-disclosure'>
											<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pv1 pointer'>
												Affiliate Disclosures
											</a>
										</Link>
									</div>
									<div
										aria-controls='bp3-tab-panel_legalTabs_legal-regulatory'
										aria-disabled='false'
										aria-expanded='false'
										aria-selected='false'
										className='bp3-tab'
										data-tab-id='legal-regulatory'
										id='bp3-tab-title_legalTabs_legal-regulatory'
										role='tab'
										tabIndex={0}>
										<Link href='/legal/legal-regulatory'>
											<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pv1 pointer'>
												Legal &amp; Regulator Requests
											</a>
										</Link>
									</div>
									<div
										aria-controls='bp3-tab-panel_legalTabs_pricing-data'
										aria-disabled='false'
										aria-expanded='false'
										aria-selected='false'
										className='bp3-tab'
										data-tab-id='pricing-data'
										id='bp3-tab-title_legalTabs_pricing-data'
										role='tab'
										tabIndex={0}>
										<Link href='/legal/pricing-data'>
											<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pv1 pointer'>
												Pricing Data
											</a>
										</Link>
									</div>
									<div
										aria-controls='bp3-tab-panel_legalTabs_relying'
										aria-disabled='false'
										aria-expanded='false'
										aria-selected='false'
										className='bp3-tab'
										data-tab-id='relying'
										id='bp3-tab-title_legalTabs_relying'
										role='tab'
										tabIndex={0}>
										<Link href='/legal/relying'>
											<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pv1 pointer'>
												Relying Party Agreement and Limited Warranty
											</a>
										</Link>
									</div>
									<div
										aria-controls='bp3-tab-panel_legalTabs_services-agreement-addendum'
										aria-disabled='false'
										aria-expanded='false'
										aria-selected='false'
										className='bp3-tab'
										data-tab-id='services-agreement-addendum'
										id='bp3-tab-title_legalTabs_services-agreement-addendum'
										role='tab'
										tabIndex={0}>
										<Link href='/legal/services-agreement-addendum'>
											<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pv1 pointer'>
												General Addendum to Octa Trade Global Inc. Broker Services Agreement (EN)
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className='cf nmh4 flex-l'>
							<div className='fl ph4 w-100 dn db-l w-20-l'>
								<div className='bp3-tabs bp3-vertical l-verticalTabs l-verticalTabs--br--left l-verticalTabs--br--right'>
									<div className='bp3-tab-list' role='tablist'>
										<div
											aria-controls='bp3-tab-panel_legalTabs_terms-of-use'
											aria-disabled='false'
											aria-expanded='false'
											aria-selected='false'
											className='bp3-tab'
											data-tab-id='terms-of-use'
											id='bp3-tab-title_legalTabs_terms-of-use'
											role='tab'
											tabIndex={0}>
											<Link href='/legal/terms-of-use'>
												<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pv1 pointer'>
													Terms of Use
												</a>
											</Link>
										</div>
										<div
											aria-controls='bp3-tab-panel_legalTabs_disclaimers'
											aria-disabled='false'
											aria-expanded='true'
											aria-selected='true'
											className='bp3-tab'
											data-tab-id='disclaimers'
											id='bp3-tab-title_legalTabs_disclaimers'
											role='tab'
											tabIndex={0}>
											<Link href='/legal/disclaimers'>
												<a
													aria-current='page'
													className='fw6 black-80 hover-color-[#0018A8] no-underline db pv1 pointer active'>
													Disclaimers
												</a>
											</Link>
										</div>
										<div
											aria-controls='bp3-tab-panel_legalTabs_services-agreement'
											aria-disabled='false'
											aria-expanded='false'
											aria-selected='false'
											className='bp3-tab'
											data-tab-id='services-agreement'
											id='bp3-tab-title_legalTabs_services-agreement'
											role='tab'
											tabIndex={0}>
											<Link href='/legal/services-agreement'>
												<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pv1 pointer'>
													Services Agreement
												</a>
											</Link>
										</div>
										<div
											aria-controls='bp3-tab-panel_legalTabs_service-level-agreement'
											aria-disabled='false'
											aria-expanded='false'
											aria-selected='false'
											className='bp3-tab'
											data-tab-id='service-level-agreement'
											id='bp3-tab-title_legalTabs_service-level-agreement'
											role='tab'
											tabIndex={0}>
											<Link href='/legal/service-level-agreement'>
												<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pv1 pointer'>
													Service Level Agreement
												</a>
											</Link>
										</div>
										<div
											aria-controls='bp3-tab-panel_legalTabs_privacy'
											aria-disabled='false'
											aria-expanded='false'
											aria-selected='false'
											className='bp3-tab'
											data-tab-id='privacy'
											id='bp3-tab-title_legalTabs_privacy'
											role='tab'
											tabIndex={0}>
											<Link href='/legal/privacy'>
												<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pv1 pointer'>
													Privacy
												</a>
											</Link>
										</div>
										<div
											aria-controls='bp3-tab-panel_legalTabs_affiliate-disclosure'
											aria-disabled='false'
											aria-expanded='false'
											aria-selected='false'
											className='bp3-tab'
											data-tab-id='affiliate-disclosure'
											id='bp3-tab-title_legalTabs_affiliate-disclosure'
											role='tab'
											tabIndex={0}>
											<Link href='/legal/affiliate-disclosure'>
												<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pv1 pointer'>
													Affiliate Disclosures
												</a>
											</Link>
										</div>
										<div
											aria-controls='bp3-tab-panel_legalTabs_legal-regulatory'
											aria-disabled='false'
											aria-expanded='false'
											aria-selected='false'
											className='bp3-tab'
											data-tab-id='legal-regulatory'
											id='bp3-tab-title_legalTabs_legal-regulatory'
											role='tab'
											tabIndex={0}>
											<Link href='/legal/legal-regulatory'>
												<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pv1 pointer'>
													Legal &amp; Regulator Requests
												</a>
											</Link>
										</div>
										<div
											aria-controls='bp3-tab-panel_legalTabs_pricing-data'
											aria-disabled='false'
											aria-expanded='false'
											aria-selected='false'
											className='bp3-tab'
											data-tab-id='pricing-data'
											id='bp3-tab-title_legalTabs_pricing-data'
											role='tab'
											tabIndex={0}>
											<Link href='/legal/pricing-data'>
												<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pv1 pointer'>
													Pricing Data
												</a>
											</Link>
										</div>
										<div
											aria-controls='bp3-tab-panel_legalTabs_relying'
											aria-disabled='false'
											aria-expanded='false'
											aria-selected='false'
											className='bp3-tab'
											data-tab-id='relying'
											id='bp3-tab-title_legalTabs_relying'
											role='tab'
											tabIndex={0}>
											<Link href='/legal/relying'>
												<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pv1 pointer'>
													Relying Party Agreement
												</a>
											</Link>
										</div>
										<div
											aria-controls='bp3-tab-panel_legalTabs_services-agreement-addendum'
											aria-disabled='false'
											aria-expanded='false'
											aria-selected='false'
											className='bp3-tab'
											data-tab-id='services-agreement-addendum'
											id='bp3-tab-title_legalTabs_services-agreement-addendum'
											role='tab'
											tabIndex={0}>
											<Link href='/legal/services-agreement-addendum'>
												<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pv1 pointer'>
													General Addendum
												</a>
											</Link>
										</div>
									</div>
								</div>
							</div>
							<div className='fl ph4 w-100 w-80-l'>
								<h3 className='f4 f3-m f3-l fw6 lh-title tracked-condensed mb3'>Octa Trade Global Inc. Broker Disclaimers</h3>
								<div className='lh-copy black-70 mb4'>Last updated: April 12, 2022</div>
								<div className='bt w-100 b--border mb4' />
								<p className='lh-copy mb4 measure-wide2'>
									Custody services are offered to eligible participants through Octa Trade Global Trust Company, Inc., a trust
									company chartered in South Dakota and Octa Trade Global Inc. Broker New York Trust Company LLC, a limited purpose
									trust company in New York. Octa Trade Global Inc. Broker Portfolio and Octa Trade Global Inc. Broker Tax are software solutions
									offered through Octatradeglobal, Inc. Digital asset trading is done with Octa Trade Global Prime LLC as the
									counterparty to all trades, with trading settlement services provided by Octa Trade Global Inc. Broker Trust
									Company, Inc. Institutional digital asset lending services are provided by Octa Trade Global Inc. Broker Prime
									LLC, and are not FDIC insured. Octa Trade Global Inc. Broker Trust Company, Inc., Octa Trade Global Inc. Broker New York Trust
									Company LLC, Octatradeglobal, Inc., and Octa Trade Global Inc. Broker Prime LLC are separately operated, wholly-owned
									subsidiaries of Octa Trade Global Inc. Broker Holdings, Inc., a Delaware corporation headquartered in Palo Alto,
									CA.
								</p>
								<h4 className='f4-ns f5 fw6 lh-title tracked-condensed mb3-l mb2'>Octa Trade Global Inc. Broker Inc.</h4>
								<p className='lh-copy mb4 measure-wide2'>
									Digital assets software solutions provided by Octa Trade Global Inc. Broker Inc., a separately operated,
									wholly-owned subsidiary of Octa Trade Global Inc. Broker Holdings, Inc.
								</p>
								<h4 className='f4-ns f5 fw6 lh-title tracked-condensed mb3-l mb2'>Octa Trade Global Inc. Broker Trust Company</h4>
								<p className='lh-copy mb4 measure-wide2'>
									Custody services are offered to eligible participants through Octa Trade Global Trust Company, a trust
									company chartered in both South Dakota and Octa Trade Global Inc. Broker New York Trust Company LLC, a limited
									purpose trust company in New York. Octa Trade Global Inc. Broker Trust Company, Inc. and Octa Trade Global Inc. Broker New York
									Trust Company LLC are not engaged in the offer, sale, trading, or lending of securities or
									digital assets. Octa Trade Global Inc. Broker Trust Company, Inc. and Octa Trade Global New York Trust Company LLC are
									separately operated, wholly-owned subsidiaries of Octa Trade Global Inc. Broker Holdings, Inc.
								</p>
								<h4 className='f4-ns f5 fw6 lh-title tracked-condensed mb3-l mb2'>Octa Trade Global Inc. Broker Prime LLC</h4>
								<p className='lh-copy mb4 measure-wide2'>
									Octa Trade Global Inc. Broker Prime LLC is not engaged in the offer, sale, trading, or lending of securities.
									Institutional digital asset lending services are provided by Octa Trade Global Inc. Broker Prime LLC, a
									separately operated, wholly-owned subsidiary of Octa Trade Global Inc. Broker Holdings, Inc.
								</p>
								<h4 className='f4-ns f5 fw6 lh-title tracked-condensed mb3-l mb2'>Octa Trade Global Inc. Broker Holdings LLC</h4>
								<p className='lh-copy mb4 measure-wide2'>
									Octa Trade Global Inc. Broker Holdings LLC is not engaged in the business of the offer, sale or trading of
									securities. Octa Trade Global Inc. Broker Holdings, Inc. is a Delaware corporation headquartered in Palo Alto,
									CA.
								</p>
								<p className='lh-copy mb4 measure-wide2'>
									None of these Octa Trade Global Inc. Broker entities are registered with the U.S. Securities and Exchange (SEC),
									the Commodity Futures Trading Commission (CFTC), have a broker-dealer license in any
									jurisdiction, or are protected by the FDIC insurance. No legal, tax, investment, or other advice
									is provided by any Octa Trade Global Inc. Broker entity. Please consult your legal/tax/investment professional
									for questions about your specific circumstances.
								</p>
								<div className='bt w-100 b--border mb4 measure-wide2' />
								<p className='lh-copy mb4 measure-wide2'>
									For customers located in the state of New York, please note the following disclosures associated
									with virtual currency:
									<br />
									<br />
									(1) Virtual currency is not legal tender, is not backed by the government, and accounts and
									value balances are not subject to Federal Deposit Insurance Corporation or Securities Investor
									Protection Corporation protections;
									<br />
									<br />
									(2) Legislative and regulatory changes or actions at the State, Federal, or international level
									may adversely affect the use, transfer, exchange, and value of virtual currency;
									<br />
									<br />
									(3) Transactions in virtual currency may be irreversible, and, accordingly, losses due to
									fraudulent or accidental transactions may not be recoverable;
									<br />
									<br />
									(4) Some virtual currency transactions shall be deemed to be made when recorded on a public
									ledger, which is not necessarily the date or time that the customer initiates the transaction;
									<br />
									<br />
									(5) The value of virtual currency may be derived from the continued willingness of market
									participants to exchange fiat currency for virtual currency, which may result in the potential
									for permanent and total loss of value of a particular virtual currency should the market for
									that virtual currency disappear;
									<br />
									<br />
									(6) There is no assurance that a person who accepts a virtual currency as payment today will
									continue to do so in the future;
									<br />
									<br />
									(7) The volatility and unpredictability of the price of virtual currency relative to fiat
									currency may result in significant loss over a short period of time;
									<br />
									<br />
									(8) The nature of virtual currency may lead to an increased risk of fraud or cyber attack;
									<br />
									<br />
									(9) The nature of virtual currency means that any technological difficulties experienced by the
									licensee may prevent the access or use of a customer&apos;s virtual currency; and
									<br />
									<br />
									(10) Any bond or trust account maintained by the licensee for the benefit of its customers may
									not be sufficient to cover all losses incurred by customers.
									<br />
									<br />
									Octa Trade Global Inc. Broker New York Trust Company LLC is chartered as a limited purpose trust company and
									licensed to engage in Virtual Currency Business Activity by the New York State Department of
									Financial Services. If you have any questions or complaints, please first contact Octa Trade Global support
									at support@octatradeglobal.com or by phone at 1 (650) 542-0730, or by mailing to: Octa Trade Global Inc. Broker Support,
									2446 Ash Street, Palo Alto, CA 94306.
									<br />
									<br />
									If you are a customer of Octa Trade Global Inc. Broker New York Trust Company LLC, you may also direct unresolved
									complaints to the attention of: New York State Department of Financial Services, One State
									Street, New York, NY 10004-1511; +1 (212) 480-6400. Please visit https://www.dfs.ny.gov for
									additional information.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</UserLayout>
	)
}

export default DIsclaimer
