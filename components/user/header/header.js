import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { useDispatch } from "react-redux"
import { signOut, useSession } from "next-auth/react"

function HeaderFixed() {
	const { data: session } = useSession()
	const [level, setLevel] = useState(0)
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [showMobileNav, setShowMobileNav] = useState(false)
	const [dropDown, setDropDown] = useState("")
	const router = useRouter()
	const dispatch = useDispatch()

	const { pathname } = router

	useEffect(() => {
		if (pathname === "/signup/step2") {
			setLevel(2)
		} else if (pathname === "/signup/step3") {
			setLevel(3)
		} else if (pathname === "/signup/step4") {
			setLevel(4)
		}
	}, [pathname])

	useEffect(() => {
		session ? setIsLoggedIn(true) : setIsLoggedIn(false)
	})

	return (
		<div className='w-100 absolute b-topNav-container'>
			<div className='w-100 relative b-topNav'>
				<div className='center mw8-5 w-100'>
					<div className='flex justify-end items-center relative w-100 b-topNav-center'>
						<div className='flex items-center pl4 b-topNav-left'>
							<Link href='/'>
								<a aria-current='page' className='active'>
									{showMobileNav ? (
										<svg className='b-topNav-logo' width={101} height={26} viewBox='0 0 101 26' fill='none'>
											<path
												fillRule='evenodd'
												clipRule='evenodd'
												d='M22.2316 8.32839C22.2316 22.2181 11.1158 26 11.1158 26C11.1158 26 0 22.2181 0 8.32839V3.32865C0 2.78064 0.426229 2.34088 0.960708 2.30029C2.97684 2.20557 7.76685 1.79964 11.1158 0C14.4715 1.79964 19.2547 2.20557 21.2709 2.30705C21.8054 2.34088 22.2316 2.78064 22.2316 3.32865V8.32839ZM12.523 7.96305C14.1738 8.11866 15.4728 8.6396 15.6081 10.1551C15.7096 11.2646 15.2428 11.9277 14.4986 12.3065C15.7231 12.6042 16.4809 13.3349 16.3185 14.9654C16.1155 16.9815 14.6001 17.516 12.4486 17.6243L12.4554 19.7419H11.1632L11.1699 17.6445C10.8384 17.6378 10.5001 17.631 10.1483 17.6243L10.1348 19.7419L8.86287 19.7351L8.8561 17.604C8.55842 17.604 6.52876 17.6107 6.52876 17.6107L6.54229 16.0682L7.97658 16.0614L7.98335 9.29586H6.34609V7.94952C6.34609 7.94952 8.65314 7.94952 8.93052 7.94275L8.92376 5.83867L10.216 5.8319V7.90892C10.561 7.90216 10.9195 7.90216 11.2578 7.90216H11.2579L11.2511 5.8522L12.5298 5.84543L12.523 7.96305ZM10.4513 16.0792C11.4956 16.1017 13.7757 16.1507 13.7882 14.688C13.8004 13.1977 11.5975 13.2333 10.5185 13.2507C10.3974 13.2527 10.2905 13.2544 10.2024 13.2537L10.2092 16.0749C10.279 16.0755 10.3605 16.0772 10.4513 16.0792ZM10.4439 11.9724C11.3072 11.9939 13.2074 12.0412 13.2199 10.7099C13.226 9.34382 11.363 9.38658 10.4782 9.40688C10.3858 9.409 10.3041 9.41088 10.2363 9.41088L10.243 11.9683C10.3008 11.9688 10.3684 11.9705 10.4439 11.9724Z'
												fill='#333'
											/>
											<path
												d='M44.3346 17.2319C44.3346 18.3414 44.1181 19.2683 43.6784 20.0193C43.2386 20.7702 42.6568 21.3791 41.9328 21.8324C41.2089 22.2925 40.3835 22.6172 39.4567 22.8202C38.5298 23.0232 37.5826 23.1179 36.6084 23.1179H28.5438V2.87537H36.6084C37.3932 2.87537 38.1915 2.95655 39.0101 3.11893C39.8288 3.2813 40.573 3.55869 41.2428 3.95109C41.9125 4.34349 42.4538 4.8712 42.8733 5.54099C43.2927 6.21078 43.5025 7.05647 43.5025 8.08484C43.5025 9.20792 43.198 10.1416 42.5891 10.8722C41.9802 11.6097 41.1751 12.1374 40.1873 12.4621V12.5163C40.7624 12.611 41.2969 12.7869 41.8043 13.044C42.3117 13.3011 42.7515 13.6326 43.1168 14.0318C43.4889 14.4309 43.7866 14.8977 44.0031 15.4322C44.2264 15.9667 44.3346 16.5688 44.3346 17.2319ZM38.7869 8.7411C38.7869 8.05778 38.523 7.55712 38.0021 7.23914C37.4743 6.92116 36.7031 6.76556 35.6679 6.76556H33.2662V10.9399H35.898C36.8113 10.9399 37.5217 10.7572 38.0291 10.3851C38.5365 10.013 38.7869 9.46501 38.7869 8.7411ZM39.4431 16.7786C39.4431 15.9396 39.1319 15.3578 38.4959 15.0331C37.8667 14.7083 37.0278 14.5459 35.9792 14.5459H33.2594V19.1803H36.0062C36.3851 19.1803 36.7843 19.1465 37.1902 19.0789C37.6029 19.0112 37.975 18.8962 38.3065 18.7203C38.638 18.5511 38.9086 18.3076 39.1184 17.9896C39.3416 17.6784 39.4431 17.2724 39.4431 16.7786Z'
												fill='#333'
											/>
											<path
												d='M50.8363 4.33672C50.8363 4.70206 50.7619 5.04033 50.6198 5.35155C50.4777 5.66953 50.2883 5.94015 50.0447 6.16341C49.8079 6.39344 49.517 6.57611 49.1855 6.70466C48.854 6.83997 48.5022 6.90762 48.1436 6.90762C47.3791 6.90762 46.7431 6.6573 46.2289 6.14988C45.7148 5.64247 45.4577 5.04033 45.4577 4.33672C45.4577 3.99167 45.5253 3.66693 45.6606 3.34895C45.7959 3.03097 45.9854 2.76034 46.2357 2.53708C46.486 2.30705 46.7702 2.12438 47.0949 1.98231C47.4197 1.84023 47.7715 1.76581 48.1504 1.76581C48.5157 1.76581 48.8607 1.83346 49.1923 1.96877C49.5238 2.10409 49.8147 2.27999 50.0515 2.51002C50.2883 2.74005 50.4777 3.01067 50.6266 3.32188C50.7686 3.6331 50.8363 3.97138 50.8363 4.33672ZM45.8027 23.1246V8.88316H50.4912V23.1246H45.8027Z'
												fill='#333'
											/>
											<path
												d='M58.9956 12.3742V17.8272C58.9956 18.497 59.1241 18.9976 59.3812 19.3359C59.6383 19.6742 60.0984 19.8366 60.7682 19.8366C60.9982 19.8366 61.2418 19.8163 61.4989 19.7824C61.7559 19.7419 61.9724 19.6877 62.1416 19.6133L62.1957 23.0434C61.871 23.1585 61.465 23.2599 60.9644 23.3411C60.4705 23.4291 59.9698 23.4697 59.476 23.4697C58.522 23.4697 57.7237 23.3479 57.0742 23.1111C56.4247 22.8743 55.9037 22.5293 55.5181 22.076C55.1257 21.6294 54.8483 21.0882 54.6724 20.4725C54.5033 19.8501 54.4153 19.16 54.4153 18.3955V12.3742H52.1286V8.88315H54.3883V5.13504H58.9956V8.88315H62.3445V12.3742H58.9956Z'
												fill='#333'
											/>
											<path
												d='M79.3193 23.1517C77.9932 23.4765 76.5522 23.6388 74.9826 23.6388C73.3588 23.6388 71.8704 23.3817 70.5038 22.8676C69.1371 22.3534 67.9667 21.6295 66.9857 20.6958C66.0047 19.7622 65.2334 18.6391 64.6854 17.3333C64.1306 16.0276 63.8532 14.573 63.8532 12.9696C63.8532 11.3458 64.1374 9.87771 64.6989 8.5652C65.2605 7.25268 66.0385 6.1296 67.0331 5.20272C68.0208 4.27584 69.1845 3.56546 70.5241 3.07157C71.8569 2.57769 73.2979 2.32736 74.8405 2.32736C76.4439 2.32736 77.9323 2.57092 79.3058 3.05804C80.6792 3.54516 81.7955 4.19465 82.6547 5.02005L79.5628 8.53813C79.0825 7.98336 78.4533 7.53007 77.6753 7.17826C76.8905 6.82645 76.0042 6.65055 75.0164 6.65055C74.1572 6.65055 73.3656 6.80615 72.6417 7.12413C71.9178 7.43535 71.2886 7.87511 70.7541 8.43665C70.2196 8.99819 69.8069 9.66798 69.5092 10.4393C69.2116 11.2105 69.0627 12.0562 69.0627 12.9696C69.0627 13.9032 69.198 14.7624 69.4619 15.5472C69.7257 16.332 70.1249 17.0018 70.6459 17.5634C71.1668 18.1249 71.8163 18.5647 72.5876 18.8759C73.3588 19.1939 74.2384 19.3495 75.2329 19.3495C75.808 19.3495 76.3492 19.3089 76.8634 19.2209C77.3776 19.133 77.8579 18.9977 78.2909 18.8082V15.121H74.4278V11.1767H82.7832V21.9001C81.8022 22.4075 80.6453 22.827 79.3193 23.1517Z'
												fill='#333'
											/>
											<path
												d='M100.428 15.9464C100.428 17.1101 100.218 18.1655 99.7986 19.1059C99.3792 20.0531 98.8041 20.8514 98.0802 21.5077C97.3563 22.164 96.5173 22.6781 95.5634 23.0367C94.6095 23.402 93.5879 23.578 92.5054 23.578C91.4364 23.578 90.4216 23.3953 89.4609 23.0367C88.5002 22.6714 87.6612 22.164 86.9441 21.5077C86.2269 20.8514 85.6586 20.0463 85.2392 19.1059C84.8197 18.1587 84.61 17.1101 84.61 15.9464C84.61 14.7827 84.8197 13.7341 85.2392 12.8004C85.6586 11.8668 86.2269 11.0752 86.9441 10.4257C87.6612 9.77624 88.5002 9.28235 89.4609 8.93731C90.4216 8.59227 91.4364 8.42313 92.5054 8.42313C93.5946 8.42313 94.6095 8.59227 95.5634 8.93731C96.5173 9.28235 97.3563 9.77624 98.0802 10.4257C98.8041 11.0752 99.3792 11.8668 99.7986 12.8004C100.218 13.7341 100.428 14.7827 100.428 15.9464ZM95.9084 15.9464C95.9084 15.4864 95.834 15.0398 95.6784 14.6001C95.5228 14.1603 95.3063 13.7747 95.0222 13.4432C94.738 13.1117 94.3862 12.841 93.9667 12.6313C93.5473 12.4216 93.0601 12.3201 92.5054 12.3201C91.9506 12.3201 91.4635 12.4283 91.044 12.6313C90.6246 12.841 90.2795 13.1117 90.0021 13.4432C89.7247 13.7747 89.515 14.1603 89.3729 14.6001C89.2309 15.0398 89.1564 15.4864 89.1564 15.9464C89.1564 16.4065 89.2309 16.853 89.3729 17.2928C89.515 17.7325 89.7315 18.1249 90.0157 18.4767C90.2998 18.8285 90.6516 19.1127 91.0711 19.3224C91.4905 19.5322 91.9777 19.6404 92.5324 19.6404C93.0872 19.6404 93.5743 19.5389 93.9938 19.3224C94.4133 19.1127 94.7651 18.8285 95.0492 18.4767C95.3334 18.1249 95.5499 17.7258 95.6919 17.2928C95.8408 16.853 95.9084 16.4065 95.9084 15.9464Z'
												fill='#333'
											/>
										</svg>
									) : (
										<svg className='b-topNav-logo' width={101} height={26} viewBox='0 0 101 26' fill='none'>
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
									)}
								</a>
							</Link>
						</div>
						<div className='b-navbar-center'>
							<div className='center'>
								<ul className='m0 flex justify-center list'>
									<div
										onMouseLeave={() => setDropDown("")}
										onMouseEnter={() => setDropDown("services")}
										className='relative'>
										<div className='flex justify-center pointer pv3 fw6 b-navbarItem-title white'>
											Services
										</div>
										<div className='b-navbar-dropdownSlot'>
											{dropDown === "services" && (
												<div direction='right' className='sc-bdfBwQ jzWJGV'>
													<div
														data-flip-config='{"translate":true,"scale":true,"opacity":true}'
														data-flip-id='dropdown-caret'
														data-portal-key='portal'
														className='sc-gsTCUz bhdLno'
														style={{ transformOrigin: "0px 0px" }}>
														<div className='sc-dlfnbm bcaJjD' />
													</div>
													<div
														data-flip-config='{"translate":true,"scale":true,"opacity":true}'
														data-flip-id='dropdown'
														data-portal-key='portal'
														className='sc-hKgILt gTLZXx'
														style={{ transformOrigin: "0px 0px" }}>
														<div
															data-flip-config='{"translate":true,"scale":true,"opacity":true}'
															data-inverse-flip-id='dropdown'
															className='sc-jSgupP kVjSWc'
															style={{ transformOrigin: "0px 0px" }}>
															<div
																className='sc-eCssSg cTUokw'
																style={{
																	transform: "translateY(0px)",
																	transitionTimingFunction: "ease",
																	transitionDelay: "0s",
																	transitionProperty: "transform",
																}}
															/>
															<div direction='right' className='sc-gKsewC hCfcbv'></div>
														</div>
														<div
															data-flip-config='{"scale":true}'
															data-inverse-flip-id='dropdown'
															className='sc-jSgupP iKLSrT'
															style={{ transformOrigin: "0px 0px" }}>
															<div
																aria-hidden='true'
																direction='right'
																className='sc-gKsewC eHhwlt'>
																<div className='bg-white pa3 css-9tg1qx'>
																	<div className='cf nmh3 mb4'>
																		<div className='fl ph3 w-50'>
																			<div className='pa2'>
																				<div className='ttu fw4 lh-title tracked-mega o-60 f7 mb2'>
																					<span>Custody</span>
																				</div>
																				<Link href='/services/custody/wallet-platform'>
																					<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pv2 truncate pointer'>
																						<div className='flex'>
																							<img
																								className='l-marketingIcon l-marketingIcon--sm mr3'
																								src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6bm9uZTtzdHJva2U6IzAwMDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5jcnlwdG8tY3VycmVuY3ktYml0Y29pbi1jaGlwPC90aXRsZT48bGluZSBjbGFzcz0iYSIgeDE9IjEwLjAwNCIgeTE9IjcuNSIgeDI9IjEwLjAwNCIgeTI9IjkiLz48bGluZSBjbGFzcz0iYSIgeDE9IjEyLjAwNCIgeTE9IjcuNSIgeDI9IjEyLjAwNCIgeTI9IjkiLz48bGluZSBjbGFzcz0iYSIgeDE9IjEwLjAwNCIgeTE9IjE1IiB4Mj0iMTAuMDA0IiB5Mj0iMTYuNSIvPjxsaW5lIGNsYXNzPSJhIiB4MT0iMTIuMDA0IiB5MT0iMTUiIHgyPSIxMi4wMDQiIHkyPSIxNi41Ii8+PHBhdGggY2xhc3M9ImEiIGQ9Ik0xNCwxMC41QTEuNSwxLjUsMCwwLDEsMTIuNSwxMkg5VjloMy41QTEuNSwxLjUsMCwwLDEsMTQsMTAuNVoiLz48cGF0aCBjbGFzcz0iYSIgZD0iTTE0LDEzLjVBMS41LDEuNSwwLDAsMSwxMi41LDE1SDlWMTJoMy41QTEuNSwxLjUsMCwwLDEsMTQsMTMuNVoiLz48cmVjdCBjbGFzcz0iYSIgeD0iNS4wMDQiIHk9IjUiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgcng9IjEiIHJ5PSIxIi8+PGxpbmUgY2xhc3M9ImEiIHgxPSIxMi4wMDQiIHkxPSIxIiB4Mj0iMTIuMDA0IiB5Mj0iNSIvPjxsaW5lIGNsYXNzPSJhIiB4MT0iOC4wMDQiIHkxPSIxIiB4Mj0iOC4wMDQiIHkyPSI1Ii8+PGxpbmUgY2xhc3M9ImEiIHgxPSIxNi4wMDQiIHkxPSIxIiB4Mj0iMTYuMDA0IiB5Mj0iNSIvPjxsaW5lIGNsYXNzPSJhIiB4MT0iMS4wMDQiIHkxPSIxMiIgeDI9IjUuMDA0IiB5Mj0iMTIiLz48bGluZSBjbGFzcz0iYSIgeDE9IjEuMDA0IiB5MT0iMTYiIHgyPSI1LjAwNCIgeTI9IjE2Ii8+PGxpbmUgY2xhc3M9ImEiIHgxPSIxLjAwNCIgeTE9IjgiIHgyPSI1LjAwNCIgeTI9IjgiLz48bGluZSBjbGFzcz0iYSIgeDE9IjEyLjAwNCIgeTE9IjIzIiB4Mj0iMTIuMDA0IiB5Mj0iMTkiLz48bGluZSBjbGFzcz0iYSIgeDE9IjE2LjAwNCIgeTE9IjIzIiB4Mj0iMTYuMDA0IiB5Mj0iMTkiLz48bGluZSBjbGFzcz0iYSIgeDE9IjguMDA0IiB5MT0iMjMiIHgyPSI4LjAwNCIgeTI9IjE5Ii8+PGxpbmUgY2xhc3M9ImEiIHgxPSIyMy4wMDQiIHkxPSIxMiIgeDI9IjE5LjAwNCIgeTI9IjEyIi8+PGxpbmUgY2xhc3M9ImEiIHgxPSIyMy4wMDQiIHkxPSI4IiB4Mj0iMTkuMDA0IiB5Mj0iOCIvPjxsaW5lIGNsYXNzPSJhIiB4MT0iMjMuMDA0IiB5MT0iMTYiIHgyPSIxOS4wMDQiIHkyPSIxNiIvPjwvc3ZnPg=='
																								alt=''
																							/>
																							<div className='fw6 mt05 pt1'>
																								<span>
																									Wallet
																									Platform
																								</span>
																							</div>
																						</div>
																					</a>
																				</Link>
																				<Link href='/services/custody/qualified-custody'>
																					<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pv2 truncate pointer'>
																						<div className='flex'>
																							<img
																								className='l-marketingIcon l-marketingIcon--sm mr3'
																								src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6bm9uZTtzdHJva2U6IzAwMDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5zYXZpbmctc2FmZTwvdGl0bGU+PHJlY3QgY2xhc3M9ImEiIHg9IjAuNTA0IiB5PSIwLjUiIHdpZHRoPSIyMyIgaGVpZ2h0PSIyMiIgcng9IjIiIHJ5PSIyIi8+PGxpbmUgY2xhc3M9ImEiIHgxPSIyLjUwNCIgeTE9IjIyLjUiIHgyPSIyLjUwNCIgeTI9IjIzLjUiLz48bGluZSBjbGFzcz0iYSIgeDE9IjIxLjUwNCIgeTE9IjIyLjUiIHgyPSIyMS41MDQiIHkyPSIyMy41Ii8+PHBhdGggY2xhc3M9ImEiIGQ9Ik0zLjUsMTYuNXYxYTIsMiwwLDAsMCwyLDJoMTNhMiwyLDAsMCwwLDItMlY1LjVhMiwyLDAsMCwwLTItMkg1LjVhMiwyLDAsMCwwLTIsMnYxIi8+PGxpbmUgY2xhc3M9ImEiIHgxPSIzLjUwNCIgeTE9IjkuNSIgeDI9IjMuNTA0IiB5Mj0iMTMuNSIvPjxyZWN0IGNsYXNzPSJhIiB4PSIyLjUwNCIgeT0iNi41IiB3aWR0aD0iMiIgaGVpZ2h0PSIzIi8+PHJlY3QgY2xhc3M9ImEiIHg9IjIuNTA0IiB5PSIxMy41IiB3aWR0aD0iMiIgaGVpZ2h0PSIzIi8+PGNpcmNsZSBjbGFzcz0iYSIgY3g9IjEyLjUwNCIgY3k9IjExLjUiIHI9IjQuNSIvPjxjaXJjbGUgY2xhc3M9ImEiIGN4PSIxMi41MDQiIGN5PSIxMS41IiByPSIyLjUiLz48bGluZSBjbGFzcz0iYSIgeDE9IjEyLjUwNCIgeTE9IjciIHgyPSIxMi41MDQiIHkyPSI5Ii8+PGxpbmUgY2xhc3M9ImEiIHgxPSI5LjMyMiIgeTE9IjguMzE4IiB4Mj0iMTAuNzM2IiB5Mj0iOS43MzMiLz48bGluZSBjbGFzcz0iYSIgeDE9IjguMDA0IiB5MT0iMTEuNSIgeDI9IjEwLjAwNCIgeTI9IjExLjUiLz48bGluZSBjbGFzcz0iYSIgeDE9IjkuMzIyIiB5MT0iMTQuNjgyIiB4Mj0iMTAuNzM2IiB5Mj0iMTMuMjY4Ii8+PGxpbmUgY2xhc3M9ImEiIHgxPSIxMi41MDQiIHkxPSIxNiIgeDI9IjEyLjUwNCIgeTI9IjE0Ii8+PGxpbmUgY2xhc3M9ImEiIHgxPSIxNS42ODYiIHkxPSIxNC42ODMiIHgyPSIxNC4yNzIiIHkyPSIxMy4yNjgiLz48bGluZSBjbGFzcz0iYSIgeDE9IjE3LjAwNCIgeTE9IjExLjUiIHgyPSIxNS4wMDQiIHkyPSIxMS41Ii8+PGxpbmUgY2xhc3M9ImEiIHgxPSIxNS42ODYiIHkxPSI4LjMxOCIgeDI9IjE0LjI3MiIgeTI9IjkuNzMzIi8+PC9zdmc+'
																							/>
																							<div className='fw6 mt05 pt1'>
																								<span>
																									Qualified
																									Custody
																								</span>
																							</div>
																						</div>
																					</a>
																				</Link>
																				<Link href='/services/custody/self-managed-custody'>
																					<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pv2 truncate pointer'>
																						<div className='flex'>
																							<img
																								className='l-marketingIcon l-marketingIcon--sm mr3'
																								src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6bm9uZTtzdHJva2U6IzAwMDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5jcnlwdG8tY3VycmVuY3ktYml0Y29pbi1tb25pdG9yLW1pbmluZzwvdGl0bGU+PHJlY3QgY2xhc3M9ImEiIHg9IjAuNTA0IiB5PSIwLjUiIHdpZHRoPSI2IiBoZWlnaHQ9IjQiIHJ4PSIwLjUiIHJ5PSIwLjUiLz48bGluZSBjbGFzcz0iYSIgeDE9IjMuNTA0IiB5MT0iNC41IiB4Mj0iMy41MDQiIHkyPSI2LjUiLz48bGluZSBjbGFzcz0iYSIgeDE9IjIuMDA0IiB5MT0iNi41IiB4Mj0iNS4wMDQiIHkyPSI2LjUiLz48cmVjdCBjbGFzcz0iYSIgeD0iMTcuNTA0IiB5PSIwLjUiIHdpZHRoPSI2IiBoZWlnaHQ9IjQiIHJ4PSIwLjUiIHJ5PSIwLjUiLz48bGluZSBjbGFzcz0iYSIgeDE9IjIwLjUwNCIgeTE9IjQuNSIgeDI9IjIwLjUwNCIgeTI9IjYuNSIvPjxsaW5lIGNsYXNzPSJhIiB4MT0iMTkuMDA0IiB5MT0iNi41IiB4Mj0iMjIuMDA0IiB5Mj0iNi41Ii8+PHJlY3QgY2xhc3M9ImEiIHg9IjE3LjUwNCIgeT0iMTcuNSIgd2lkdGg9IjYiIGhlaWdodD0iNCIgcng9IjAuNSIgcnk9IjAuNSIvPjxsaW5lIGNsYXNzPSJhIiB4MT0iMjAuNTA0IiB5MT0iMjEuNSIgeDI9IjIwLjUwNCIgeTI9IjIzLjUiLz48bGluZSBjbGFzcz0iYSIgeDE9IjE5LjAwNCIgeTE9IjIzLjUiIHgyPSIyMi4wMDQiIHkyPSIyMy41Ii8+PHJlY3QgY2xhc3M9ImEiIHg9IjAuNTA0IiB5PSIxNy41IiB3aWR0aD0iNiIgaGVpZ2h0PSI0IiByeD0iMC41IiByeT0iMC41Ii8+PGxpbmUgY2xhc3M9ImEiIHgxPSIzLjUwNCIgeTE9IjIxLjUiIHgyPSIzLjUwNCIgeTI9IjIzLjUiLz48bGluZSBjbGFzcz0iYSIgeDE9IjIuMDA0IiB5MT0iMjMuNSIgeDI9IjUuMDA0IiB5Mj0iMjMuNSIvPjxsaW5lIGNsYXNzPSJhIiB4MT0iMTAuNTA0IiB5MT0iNS41MjEiIHgyPSIxMC41MDQiIHkyPSI3LjUiLz48bGluZSBjbGFzcz0iYSIgeDE9IjEyLjUwNCIgeTE9IjUuNTIxIiB4Mj0iMTIuNTA0IiB5Mj0iNy41Ii8+PGxpbmUgY2xhc3M9ImEiIHgxPSIxMC41MDQiIHkxPSIxMy41MjEiIHgyPSIxMC41MDQiIHkyPSIxNS41Ii8+PGxpbmUgY2xhc3M9ImEiIHgxPSIxMi41MDQiIHkxPSIxMy41MjEiIHgyPSIxMi41MDQiIHkyPSIxNS41Ii8+PHBhdGggY2xhc3M9ImEiIGQ9Ik0xNC41LDlBMS41LDEuNSwwLDAsMSwxMywxMC41SDkuNXYtM0gxM0ExLjUsMS41LDAsMCwxLDE0LjUsOVoiLz48cGF0aCBjbGFzcz0iYSIgZD0iTTE0LjUsMTJBMS41LDEuNSwwLDAsMSwxMywxMy41SDkuNXYtM0gxM0ExLjUsMS41LDAsMCwxLDE0LjUsMTJaIi8+PGxpbmUgY2xhc3M9ImEiIHgxPSI4LjUwNCIgeTE9IjIuNSIgeDI9IjE1LjUwNCIgeTI9IjIuNSIvPjxsaW5lIGNsYXNzPSJhIiB4MT0iOC41MDQiIHkxPSIxOS41IiB4Mj0iMTUuNTA0IiB5Mj0iMTkuNSIvPjxsaW5lIGNsYXNzPSJhIiB4MT0iMjAuNTA0IiB5MT0iOC41IiB4Mj0iMjAuNTA0IiB5Mj0iMTUuNSIvPjxsaW5lIGNsYXNzPSJhIiB4MT0iMy41MDQiIHkxPSI4LjUiIHgyPSIzLjUwNCIgeTI9IjE1LjUiLz48L3N2Zz4='
																								alt=''
																							/>
																							<div className='fw6 mt05 pt1'>
																								<span>
																									Self-Managed
																									Custody
																								</span>
																							</div>
																						</div>
																					</a>
																				</Link>
																			</div>
																		</div>
																		<div className='fl ph3 w-50'>
																			<div className='pa2'>
																				<div className='ttu fw4 lh-title tracked-mega o-60 f7 mb2'>
																					<span>
																						Prime Services
																					</span>
																				</div>
																				<Link href='/services/prime/prime-trading'>
																					<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pv2 truncate pointer'>
																						<div className='flex'>
																							<img
																								className='l-marketingIcon l-marketingIcon--sm mr3'
																								src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6bm9uZTtzdHJva2U6IzAwMDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5jcnlwdG8tY3VycmVuY3ktYml0Y29pbi1kb2xsYXItZXhjaGFuZ2U8L3RpdGxlPjxsaW5lIGNsYXNzPSJhIiB4MT0iNi41MDQiIHkxPSIxMS41MiIgeDI9IjYuNTA0IiB5Mj0iMTMuNSIvPjxsaW5lIGNsYXNzPSJhIiB4MT0iOC41MDQiIHkxPSIxMS41MiIgeDI9IjguNTA0IiB5Mj0iMTMuNSIvPjxsaW5lIGNsYXNzPSJhIiB4MT0iNi41MDQiIHkxPSIxOS41MiIgeDI9IjYuNTA0IiB5Mj0iMjEuNSIvPjxsaW5lIGNsYXNzPSJhIiB4MT0iOC41MDQiIHkxPSIxOS41MiIgeDI9IjguNTA0IiB5Mj0iMjEuNSIvPjxwYXRoIGNsYXNzPSJhIiBkPSJNMTAuNSwxNUExLjUsMS41LDAsMCwxLDksMTYuNUg1LjV2LTNIOUExLjUsMS41LDAsMCwxLDEwLjUsMTVaIi8+PHBhdGggY2xhc3M9ImEiIGQ9Ik0xMC41LDE4QTEuNSwxLjUsMCwwLDEsOSwxOS41SDUuNXYtM0g5QTEuNSwxLjUsMCwwLDEsMTAuNSwxOFoiLz48Y2lyY2xlIGNsYXNzPSJhIiBjeD0iMTguNTA0IiBjeT0iNS41IiByPSI1Ii8+PGNpcmNsZSBjbGFzcz0iYSIgY3g9IjcuNTA0IiBjeT0iMTYuNSIgcj0iNyIvPjxwYXRoIGNsYXNzPSJhIiBkPSJNMTcuMzQ1LDYuNjU5QTEuMTU5LDEuMTU5LDAsMSwwLDE4LjUsNS41YTEuMTU5LDEuMTU5LDAsMSwxLDEuMTU5LTEuMTU5Ii8+PGxpbmUgY2xhc3M9ImEiIHgxPSIxOC41MDQiIHkxPSI3LjgxOCIgeDI9IjE4LjUwNCIgeTI9IjguNTkxIi8+PGxpbmUgY2xhc3M9ImEiIHgxPSIxOC41MDQiIHkxPSIyLjQwOSIgeDI9IjE4LjUwNCIgeTI9IjMuMTgzIi8+PHBhdGggY2xhc3M9ImEiIGQ9Ik05LDFBNSw1LDAsMCwwLDQsNlY3Ii8+PHBhdGggY2xhc3M9ImEiIGQ9Ik0xNiwyMWE1LDUsMCwwLDAsNS01VjE1Ii8+PHBvbHlsaW5lIGNsYXNzPSJhIiBwb2ludHM9IjIuMDA0IDUgNC4wMDQgNyA2LjAwNCA1Ii8+PHBvbHlsaW5lIGNsYXNzPSJhIiBwb2ludHM9IjE5LjAwNCAxNyAyMS4wMDQgMTUgMjMuMDA0IDE3Ii8+PC9zdmc+'
																								alt=''
																							/>
																							<div className='fw6 mt05 pt1'>
																								<span>
																									Prime
																									Trading
																								</span>
																							</div>
																						</div>
																					</a>
																				</Link>
																				<Link href='/services/prime/prime-lending'>
																					<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pv2 truncate pointer'>
																						<div className='flex'>
																							<img
																								className='l-marketingIcon l-marketingIcon--sm mr3'
																								src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6bm9uZTtzdHJva2U6IzAwMDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5jcnlwdG8tY3VycmVuY3ktYml0Y29pbi1iaWxsPC90aXRsZT48cGF0aCBjbGFzcz0iYSIgZD0iTTIzLjUsMTJhNC41LDQuNSwwLDAsMC0zLTQuMjM4VjYuNWExLDEsMCwwLDAtMS0xSDQuNWExLDEsMCwwLDAtMSwxVjcuNzYyYTQuNDk0LDQuNDk0LDAsMCwwLDAsOC40NzdWMTcuNWExLDEsMCwwLDAsMSwxaDE1YTEsMSwwLDAsMCwxLTFWMTYuMjM5QTQuNSw0LjUsMCwwLDAsMjMuNSwxMloiLz48cGF0aCBjbGFzcz0iYSIgZD0iTTE0LDEwLjVBMS41LDEuNSwwLDAsMSwxMi41LDEySDEwVjloMi41QTEuNSwxLjUsMCwwLDEsMTQsMTAuNVoiLz48cGF0aCBjbGFzcz0iYSIgZD0iTTE0LDEzLjVBMS41LDEuNSwwLDAsMSwxMi41LDE1SDEwVjEyaDIuNUExLjUsMS41LDAsMCwxLDE0LDEzLjVaIi8+PGxpbmUgY2xhc3M9ImEiIHgxPSIxMi4wMDQiIHkxPSI4IiB4Mj0iMTIuMDA0IiB5Mj0iOSIvPjxsaW5lIGNsYXNzPSJhIiB4MT0iMTIuMDA0IiB5MT0iMTUiIHgyPSIxMi4wMDQiIHkyPSIxNiIvPjwvc3ZnPg=='
																							/>
																							<div className='fw6 mt05 pt1'>
																								<span>
																									Prime
																									Lending
																								</span>
																							</div>
																						</div>
																					</a>
																				</Link>
																				<Link href='/services/prime/settlement'>
																					<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pv2 truncate pointer'>
																						<div className='flex'>
																							<img
																								className='l-marketingIcon l-marketingIcon--sm mr3'
																								src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6bm9uZTtzdHJva2U6IzAwMDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5jcnlwdG8tY3VycmVuY3ktYml0Y29pbi1leGNoYW5nZS0xPC90aXRsZT48cG9seWxpbmUgY2xhc3M9ImEiIHBvaW50cz0iMjEuNDYyIDMuODQzIDE3LjU0MyAzLjA3MiAxNy44NDcgNi40NDgiLz48cG9seWxpbmUgY2xhc3M9ImEiIHBvaW50cz0iMi4wMTEgMTkuOTk1IDYuNDc2IDIwLjkyOCA2LjExNyAxNy41NjMiLz48cGF0aCBjbGFzcz0iYSIgZD0iTTE3LjUzMiwzLjA3MkExMC41LDEwLjUsMCwwLDEsOS43NjUsMjIuMjYiLz48cGF0aCBjbGFzcz0iYSIgZD0iTTYuNDc2LDIwLjkyOEExMC41LDEwLjUsMCwwLDEsMTQuMjIyLDEuNzM1Ii8+PHBhdGggY2xhc3M9ImEiIGQ9Ik0xNS4wMDUsOS41YTIsMiwwLDAsMS0yLDJoLTIuNXYtNGgyLjVBMiwyLDAsMCwxLDE1LjAwNSw5LjVaIi8+PHBhdGggY2xhc3M9ImEiIGQ9Ik0xNS4wMDUsMTMuNWEyLDIsMCwwLDEtMiwyaC0yLjV2LTRoMi41QTIsMiwwLDAsMSwxNS4wMDUsMTMuNVoiLz48bGluZSBjbGFzcz0iYSIgeDE9IjEyLjAwNSIgeTE9IjYuNDk5IiB4Mj0iMTIuMDA1IiB5Mj0iNy40OTkiLz48bGluZSBjbGFzcz0iYSIgeDE9IjEyLjAwNSIgeTE9IjE1LjQ5OSIgeDI9IjEyLjAwNSIgeTI9IjE2LjQ5OSIvPjxwYXRoIGNsYXNzPSJhIiBkPSJNMTUuMDA1LDkuNWEyLDIsMCwwLDEtMiwyaC0yLjV2LTRoMi41QTIsMiwwLDAsMSwxNS4wMDUsOS41WiIvPjxwYXRoIGNsYXNzPSJhIiBkPSJNMTUuMDA1LDEzLjVhMiwyLDAsMCwxLTIsMmgtMi41di00aDIuNUEyLDIsMCwwLDEsMTUuMDA1LDEzLjVaIi8+PGxpbmUgY2xhc3M9ImEiIHgxPSIxMi4wMDUiIHkxPSI2LjQ5OSIgeDI9IjEyLjAwNSIgeTI9IjcuNDk5Ii8+PGxpbmUgY2xhc3M9ImEiIHgxPSIxMi4wMDUiIHkxPSIxNS40OTkiIHgyPSIxMi4wMDUiIHkyPSIxNi40OTkiLz48L3N2Zz4='
																							/>
																							<div className='fw6 mt05 pt1'>
																								<span>
																									Settlement
																								</span>
																							</div>
																						</div>
																					</a>
																				</Link>
																			</div>
																		</div>
																	</div>
																	<div className='cf nmh3'>
																		<div className='fl ph3 w-50'>
																			<div className='pa2'>
																				<div className='ttu fw4 lh-title tracked-mega o-60 f7 mb2'>
																					<span>
																						Portfolio Tools
																					</span>
																				</div>
																				<Link href='/services/portfolio/portfolio-management'>
																					<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pv2 truncate pointer'>
																						<div className='flex'>
																							<img
																								className='l-marketingIcon l-marketingIcon--sm mr3'
																								src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6bm9uZTtzdHJva2U6IzAwMDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5hbmFseXRpY3MtYmFyczwvdGl0bGU+PGxpbmUgY2xhc3M9ImEiIHgxPSIwLjQ0MSIgeTE9IjE5LjUiIHgyPSIyMy40NDEiIHkyPSIxOS41Ii8+PHBhdGggY2xhc3M9ImEiIGQ9Ik00LjQ0MSwxOS41VjE1YS41LjUsMCwwLDAtLjUtLjVoLTJhLjUuNSwwLDAsMC0uNS41djQuNSIvPjxwYXRoIGNsYXNzPSJhIiBkPSJNMTAuNDQxLDE5LjVWMTBhLjUuNSwwLDAsMC0uNS0uNWgtMmEuNS41LDAsMCwwLS41LjV2OS41Ii8+PHBhdGggY2xhc3M9ImEiIGQ9Ik0xNi40NDEsMTkuNVYxMmEuNS41LDAsMCwwLS41LS41aC0yYS41LjUsMCwwLDAtLjUuNXY3LjUiLz48cGF0aCBjbGFzcz0iYSIgZD0iTTIyLjQ0MSwxOS41VjVhLjUuNSwwLDAsMC0uNS0uNWgtMmEuNS41LDAsMCwwLS41LjVWMTkuNSIvPjwvc3ZnPg=='
																							/>
																							<div className='fw6 mt05 pt1'>
																								<span>
																									Portfolio
																									Management
																								</span>
																							</div>
																						</div>
																					</a>
																				</Link>
																				<Link href='/services/portfolio/tax'>
																					<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pv2 truncate pointer'>
																						<div className='flex'>
																							<img
																								className='l-marketingIcon l-marketingIcon--sm mr3'
																								src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6bm9uZTtzdHJva2U6IzAwMDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5jcnlwdG8tY3VycmVuY3ktYml0Y29pbi1zdGFjay1jb2luczwvdGl0bGU+PGNpcmNsZSBjbGFzcz0iYSIgY3g9IjE3LjUiIGN5PSIxNiIgcj0iNiIvPjxyZWN0IGNsYXNzPSJhIiB4PSIyLjUiIHk9IjIiIHdpZHRoPSIxMSIgaGVpZ2h0PSI0IiByeD0iMSIgcnk9IjEiLz48bGluZSBjbGFzcz0iYSIgeDE9IjEwLjUiIHkxPSIyIiB4Mj0iMTAuNSIgeTI9IjYiLz48bGluZSBjbGFzcz0iYSIgeDE9IjUuNSIgeTE9IjIiIHgyPSI1LjUiIHkyPSI2Ii8+PHJlY3QgY2xhc3M9ImEiIHg9IjAuNSIgeT0iNiIgd2lkdGg9IjExIiBoZWlnaHQ9IjQiIHJ4PSIxIiByeT0iMSIvPjxsaW5lIGNsYXNzPSJhIiB4MT0iOC41IiB5MT0iNiIgeDI9IjguNSIgeTI9IjEwIi8+PGxpbmUgY2xhc3M9ImEiIHgxPSIzLjUiIHkxPSI2IiB4Mj0iMy41IiB5Mj0iMTAiLz48cGF0aCBjbGFzcz0iYSIgZD0iTTkuNSwxNGgtNmExLDEsMCwwLDEtMS0xVjExYTEsMSwwLDAsMSwxLTFIMTIiLz48bGluZSBjbGFzcz0iYSIgeDE9IjUuNSIgeTE9IjEwIiB4Mj0iNS41IiB5Mj0iMTQiLz48cGF0aCBjbGFzcz0iYSIgZD0iTTkuNSwxOGgtNmExLDEsMCwwLDAtMSwxdjJhMSwxLDAsMCwwLDEsMUgxMiIvPjxsaW5lIGNsYXNzPSJhIiB4MT0iNS41IiB5MT0iMTgiIHgyPSI1LjUiIHkyPSIyMiIvPjxwYXRoIGNsYXNzPSJhIiBkPSJNOS41LDE4aC04YTEsMSwwLDAsMS0xLTFWMTVhMSwxLDAsMCwxLDEtMWg4Ii8+PGxpbmUgY2xhc3M9ImEiIHgxPSI4LjUiIHkxPSIxNCIgeDI9IjguNSIgeTI9IjE4Ii8+PGxpbmUgY2xhc3M9ImEiIHgxPSIzLjUiIHkxPSIxNCIgeDI9IjMuNSIgeTI9IjE4Ii8+PHBhdGggY2xhc3M9ImEiIGQ9Ik0xOS41LDE0LjVBMS41LDEuNSwwLDAsMSwxOCwxNkgxNS41VjEzSDE4QTEuNSwxLjUsMCwwLDEsMTkuNSwxNC41WiIvPjxwYXRoIGNsYXNzPSJhIiBkPSJNMTkuNSwxNy41QTEuNSwxLjUsMCwwLDEsMTgsMTlIMTUuNVYxNkgxOEExLjUsMS41LDAsMCwxLDE5LjUsMTcuNVoiLz48bGluZSBjbGFzcz0iYSIgeDE9IjE3IiB5MT0iMTIiIHgyPSIxNyIgeTI9IjEzIi8+PGxpbmUgY2xhc3M9ImEiIHgxPSIxNyIgeTE9IjE5IiB4Mj0iMTciIHkyPSIyMCIvPjwvc3ZnPg=='
																							/>
																							<div className='fw6 mt05 pt1'>
																								<span>
																									Tax
																								</span>
																							</div>
																						</div>
																					</a>
																				</Link>
																			</div>
																		</div>
																		
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											)}
										</div>
									</div>
									<div
										onMouseLeave={() => setDropDown("")}
										onMouseEnter={() => setDropDown("serve")}
										className='relative'>
										<div className='flex justify-center pointer pv3 fw6 b-navbarItem-title white'>
											Who We Serve
										</div>
										<div className='b-navbar-dropdownSlot'>
											{dropDown === "serve" && (
												<div style={{ width: "200px" }} className='sc-bdfBwQ fkqTWr'>
													<div
														data-flip-config='{"translate":true,"scale":true,"opacity":true}'
														data-flip-id='dropdown-caret'
														data-portal-key='portal'
														className='sc-gsTCUz bhdLno'>
														<div className='sc-dlfnbm bcaJjD' />
													</div>
													<div
														data-flip-config='{"translate":true,"scale":true,"opacity":true}'
														data-flip-id='dropdown'
														data-portal-key='portal'
														className='sc-hKgILt gTLZXx'>
														<div
															data-flip-config='{"translate":true,"scale":true,"opacity":true}'
															data-inverse-flip-id='dropdown'
															className='sc-jSgupP kVjSWc'>
															<div
																className='sc-eCssSg cTUokw'
																style={{
																	transform: "translateY(0px)",
																	transitionTimingFunction: "ease",
																	transitionDelay: "0s",
																	transitionProperty: "transform",
																}}
															/>
															<div className='sc-gKsewC bLSFKZ'>
																<div className='bg-white pa3 css-qxh7fn'>
																	<Link href='/who-we-serve/institutional-investors'>
																		<a className='black-80 hover-color-[#0018A8] no-underline db pa2 pointer'>
																			<div className='w-100'>
																				<div className='fw6 mb1'>
																					<span>
																						Institutional
																						Investors
																					</span>
																				</div>
																				<div className='lh-copy black-70 mb2 silver no-underline'>
																					<span>
																						Asset Managers,
																						Exchange Traded
																						Funds, Endowments,
																						Family Offices,
																						Hedge Funds,
																						Insurance
																						Companies, Pension
																						Funds, Sovereign
																						Wealth Funds
																					</span>
																				</div>
																			</div>
																		</a>
																	</Link>
																	<Link href='/who-we-serve/service-providers'>
																		<a className='black-80 hover-color-[#0018A8] no-underline db pa2 pointer'>
																			<div className='lh-copy w-100'>
																				<div className='fw6 mb1'>
																					<span>
																						Service Providers
																					</span>
																				</div>
																				<div className='lh-copy black-70 mb2 silver no-underline'>
																					<span>
																						Banks, Exchanges,
																						Lenders, Liquidity
																						Providers, Payment
																						Processors, Other
																						Custodians
																					</span>
																				</div>
																			</div>
																		</a>
																	</Link>
																</div>
															</div>
														</div>
														<div
															data-flip-config='{"scale":true}'
															data-inverse-flip-id='dropdown'
															className='sc-jSgupP iKLSrT'
														/>
													</div>
												</div>
											)}
										</div>
									</div>
									<div
										onMouseLeave={() => setDropDown("")}
										onMouseEnter={() => setDropDown("resources")}
										className='relative'>
										<div className='flex justify-center pointer pv3 fw6 b-navbarItem-title white'>
											Resources
										</div>
										<div className='b-navbar-dropdownSlot'>
											{dropDown === "resources" && (
												<div direction='right' className='sc-bdfBwQ kMrVvv'>
													<div
														data-flip-config='{"translate":true,"scale":true,"opacity":true}'
														data-flip-id='dropdown-caret'
														data-portal-key='portal'
														className='sc-gsTCUz bhdLno'
														style={{ transformOrigin: "0px 0px" }}>
														<div className='sc-dlfnbm bcaJjD' />
													</div>
													<div
														data-flip-config='{"translate":true,"scale":true,"opacity":true}'
														data-flip-id='dropdown'
														data-portal-key='portal'
														className='sc-hKgILt gTLZXx'
														style={{ transformOrigin: "0px 0px" }}>
														<div
															data-flip-config='{"translate":true,"scale":true,"opacity":true}'
															data-inverse-flip-id='dropdown'
															className='sc-jSgupP kVjSWc'
															style={{ transformOrigin: "0px 0px" }}>
															<div
																className='sc-eCssSg cTUokw'
																style={{
																	transform: "translateY(0px)",
																	transitionTimingFunction: "ease",
																	transitionDelay: "0s",
																	transitionProperty: "transform",
																}}
															/>
															<div direction='right' className='sc-gKsewC hCfcbv'>
																<div className='bg-white pa3'>
																	<div>
																		<Link href='/case-studies'>
																			<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pa2 truncate pointer'>
																				<span>Case Studies</span>
																			</a>
																		</Link>
																	</div>
																	<div>
																		<Link href='/resources/digital-asset-insurance'>
																			<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pa2 truncate pointer'>
																				<span>
																					Digital Asset Insurance
																				</span>
																			</a>
																		</Link>
																	</div>
																	<div>
																		<Link href='/resources/ethereum-wallet-management'>
																			<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pa2 truncate pointer'>
																				<span>
																					Ethereum Wallet
																					Management
																				</span>
																			</a>
																		</Link>
																	</div>
																	<div>
																		<Link href='/resources/integrations'>
																			<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pa2 truncate pointer'>
																				<span>
																					Currencies &amp;
																					Integrations
																				</span>
																			</a>
																		</Link>
																	</div>
																	<div>
																		<Link href='/resources/glossary'>
																			<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pa2 truncate pointer'>
																				<span>Glossary</span>
																			</a>
																		</Link>
																	</div>
																	<div>
																		<Link href='/resources/content-library'>
																			<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pa2 truncate pointer'>
																				<span>Content Library</span>
																			</a>
																		</Link>
																	</div>
																	<div>
																		<Link href='/resources/fork-policy'>
																			<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pa2 truncate pointer'>
																				<span>Fork Policy</span>
																			</a>
																		</Link>
																	</div>
																	<div>
																		<Link href='/resources/price-feeds'>
																			<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pa2 truncate pointer'>
																				<span>Price Feeds</span>
																			</a>
																		</Link>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											)}
										</div>
									</div>
									<div
										onMouseLeave={() => setDropDown("")}
										onMouseEnter={() => setDropDown("company")}
										className='relative'>
										<div
											className={`flex justify-center pointer pv3 fw6 b-navbarItem-title white ${
												dropDown === "company" && "b-navbarItem-title--focused"
											}`}>
											Company
										</div>
										<div className='b-navbar-dropdownSlot'>
											{dropDown === "company" && (
												<div className='sc-bdfBwQ kMrVvv'>
													<div
														data-flip-config='{"translate":true,"scale":true,"opacity":true}'
														data-flip-id='dropdown-caret'
														data-portal-key='portal'
														className='sc-gsTCUz bhdLno'>
														<div className='sc-dlfnbm bcaJjD' />
													</div>
													<div
														data-flip-config='{"translate":true,"scale":true,"opacity":true}'
														data-flip-id='dropdown'
														data-portal-key='portal'
														className='sc-hKgILt gTLZXx'>
														<div
															data-flip-config='{"translate":true,"scale":true,"opacity":true}'
															data-inverse-flip-id='dropdown'
															className='sc-jSgupP kVjSWc'>
															<div
																className='sc-eCssSg cTUokw'
																style={{
																	transform: "translateY(0px)",
																	transitionTimingFunction: "ease",
																	transitionDelay: "0s",
																	transitionProperty: "transform",
																}}
															/>
															<div className='sc-gKsewC bLSFKZ'>
																<div className='bg-white pa3'>
																	<Link href='/company/about'>
																		<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pa2 truncate pointer'>
																			<span>About</span>
																		</a>
																	</Link>
																	<Link href='/company/newsroom'>
																		<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pa2 truncate pointer'>
																			<span>Newsroom</span>
																		</a>
																	</Link>
																	<a
																		className='fw6 black-80 hover-color-[#0018A8] no-underline db pa2 truncate pointer'
																		href='https://blog.dashboard.yourtrade.com/'
																		target='_BLANK'
																		rel='noopener noreferrer'>
																		<span>Blog</span>
																	</a>
																	<Link href='/company/careers'>
																		<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pa2 truncate pointer'>
																			<span>Careers</span>
																		</a>
																	</Link>
																</div>
															</div>
														</div>
														<div
															data-flip-config='{"scale":true}'
															data-inverse-flip-id='dropdown'
															className='sc-jSgupP iKLSrT'
														/>
													</div>
												</div>
											)}
										</div>
									</div>
								</ul>
							</div>
						</div>
						<div className='b-topNav-right flex'>
							<div className='dn flex-l flex-grow-1 items-center'>
								<div className='flex flex-grow-1 items-center'>
									<div className='b-navbar-right'>
										<div className='center'>
											<ul className='m0 flex justify-center list'>
												<div className='relative'>
													<div className='flex justify-center pointer pv3 fw6 b-navbarItem-title white'>
														Services
													</div>
													<div className='b-navbar-dropdownSlot' />
												</div>
												<div className='relative'>
													<div className='flex justify-center pointer pv3 fw6 b-navbarItem-title white'>
														Who We Serve
													</div>
													<div className='b-navbar-dropdownSlot' />
												</div>
												<div className='relative'>
													<div className='flex justify-center pointer pv3 fw6 b-navbarItem-title white'>
														Resources
													</div>
													<div className='b-navbar-dropdownSlot' />
												</div>
												<div className='relative'>
													<div className='flex justify-center pointer pv3 fw6 b-navbarItem-title white'>
														Company
													</div>
													<div className='b-navbar-dropdownSlot' />
												</div>
											</ul>
										</div>
									</div>
									<div className='mh3 b-topNav-divider' />
									<Link href='/auth/log-in'>
										<a className='fw6 no-underline dim mh3 b-topNav-link white'>
											<span>Log In</span>
										</a>
									</Link>
									<Link href='/auth/sign-up'>
										<a className='bp3-button bp3-large ml3 b-topNav-button l-button--whiteBorder'>
											<span>Sign Up</span>
										</a>
									</Link>
								</div>
							</div>
							<div
								className={`${
									showMobileNav
										? "items-center justfy-center mr3 b-topNav-mobileMenuButton"
										: "items-center justfy-center mr3 b-topNav-mobileMenuButton b-topNav-mobileMenuButton--white"
								}`}>
								<button
									onClick={() => setShowMobileNav(!showMobileNav)}
									className={`${
										showMobileNav
											? "hamburger hamburger--slider mt2 is-active"
											: "hamburger hamburger--slider mt2"
									}`}
									type='button'>
									<span className='hamburger-box'>
										<span className='hamburger-inner' />
									</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={`flex-column w-100 fixed bg-white overflow-auto shadow-3 l-mobileNav ${showMobileNav && "l-mobileNav--visible"}`}>
				{" "}
				{/** add to show nav: l-mobileNav--visible */}
				<div className='flex-grow-1 flex-shrink-1 overflow-auto pb3 pt5 ph4 js-mobileNav'>
					<div className='cf nmh2 mb4 dn-l'>
						<div className='fl ph2 w-50'>
							<Link href='/auth/log-in'>
								<a className='bp3-button bp3-large bp3-fill'>
									<span>Log In</span>
								</a>
							</Link>
						</div>
						<div className='fl ph2 w-50'>
							<Link href='/auth/sign-up'>
								<a className='bp3-button bp3-large bp3-fill'>
									<span>Sign Up</span>
								</a>
							</Link>
						</div>
					</div>
					<div className='mb2 bb b--border'>
						<h4 className='f4-ns f5 fw6 lh-title tracked-condensed mb3-l mb2'>
							<span>Services</span>
						</h4>
					</div>
					<div className='cf nmh2 mb4'>
						<div className='fl ph2 w-50'>
							<div className='f7 gray fw6 mb2 silver mt1'>
								<span>Custody</span>
							</div>
							<Link href='/services/custody/wallet-platform'>
								<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pointer pv2'>
									<span>Wallet Platform</span>
								</a>
							</Link>
							<Link href='/services/custody/qualified-custody'>
								<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pointer pv2'>
									<span>Qualified Custody</span>
								</a>
							</Link>
							<Link href='/services/custody/self-managed-custody'>
								<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pointer pv2'>
									<span>Self-Managed Custody</span>
								</a>
							</Link>
						</div>
						<div className='fl ph2 w-50'>
							<div className='f7 gray fw6 mb2 silver mt1'>
								<span>Prime Services</span>
							</div>
							<Link href='/services/prime/prime-trading'>
								<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pointer pv2'>
									<span>Prime Trading</span>
								</a>
							</Link>
							<Link href='/services/prime/prime-lending'>
								<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pointer pv2'>
									<span>Prime Lending</span>
								</a>
							</Link>
							<Link href='/services/prime/settlement'>
								<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pointer pv2'>
									<span>Settlement</span>
								</a>
							</Link>
						</div>
					</div>
					<div className='cf nmh2 mb4'>
						<div className='fl ph2 w-50'>
							<div className='f7 gray fw6 mb2 silver mt1'>
								<span>Portfolio Tools</span>
							</div>
							<Link href='/services/portfolio/portfolio-management'>
								<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pointer pv2'>
									<span>Portfolio Management</span>
								</a>
							</Link>
							<Link href='/services/portfolio/tax'>
								<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pointer pv2'>
									<span>Tax</span>
								</a>
							</Link>
						</div>

						<div className='mb2 bb b--border'>
							<h4 className='f4-ns f5 fw6 lh-title tracked-condensed mb3-l mb2'>
								<span>Who We Serve</span>
							</h4>
						</div>
						<div className='mb4'>
							<Link href='/who-we-serve/institutional-investors'>
								<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pointer pv2'>
									<span>Institutional Investors</span>
								</a>
							</Link>
							<Link href='/who-we-serve/service-providers'>
								<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pointer pv2'>
									<span>Service Providers</span>
								</a>
							</Link>
						</div>
						<div className='mb2 bb b--border'>
							<h4 className='f4-ns f5 fw6 lh-title tracked-condensed mb3-l mb2'>
								<span>Company</span>
							</h4>
						</div>
						<div className='cf nmh2 mb4'>
							<div className='fl ph2 w-50'>
								<Link href='/company/about'>
									<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pointer pv2'>
										<span>About</span>
									</a>
								</Link>
								<Link href='/company/newsroom'>
									<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pointer pv2'>
										<span>Newsroom</span>
									</a>
								</Link>
							</div>
							<div className='fl ph2 w-50'>
								<Link href='/legal/terms-of-use'>
									<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pointer pv2'>
										<span>Legal</span>
									</a>
								</Link>
								<Link href='/legal/privacy'>
									<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pointer pv2'>
										<span>Privacy</span>
									</a>
								</Link>
							</div>
						</div>
						<div className='mb2 bb b--border'>
							<h4 className='f4-ns f5 fw6 lh-title tracked-condensed mb3-l mb2'>
								<span>Resources</span>
							</h4>
						</div>
						<div className='mb4'>
							<Link href='/case-studies'>
								<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pointer pv2'>
									<span>Case Studies</span>
								</a>
							</Link>
							<Link href='/resources/digital-asset-insurance'>
								<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pointer pv2'>
									<span>Digital Asset Insurance</span>
								</a>
							</Link>
							<Link href='/resources/ethereum-wallet-management'>
								<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pointer pv2'>
									<span>Ethereum Wallet Management</span>
								</a>
							</Link>
							<Link href='/resources/integrations'>
								<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pointer pv2'>
									<span>Currencies &amp; Integrations</span>
								</a>
							</Link>
							<Link href='/resources/glossary'>
								<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pointer pv2'>
									<span>Glossary</span>
								</a>
							</Link>
							<Link href='/resources/content-library'>
								<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pointer pv2'>
									<span>Content Library</span>
								</a>
							</Link>
							<Link href='/resources/fork-policy'>
								<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pointer pv2'>
									<span>Fork Policy</span>
								</a>
							</Link>
							<Link href='/resources/price-feeds'>
								<a className='fw6 black-80 hover-color-[#0018A8] no-underline db pointer pv2'>
									<span>Price Feeds</span>
								</a>
							</Link>
						</div>
					</div>
					<div className='pa3 bt b--border dn-m dn-l'>
						<Link href='/connect-with-us'>
							<a className='bp3-button bp3-large bp3-intent-primary bp3-fill'>
								<div className='fw6'>
									<span>Connect With Us</span>
								</div>
							</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeaderFixed
