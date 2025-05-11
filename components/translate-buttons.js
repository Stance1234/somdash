import { useState, useEffect } from "react"

const languages = [
	{
		name: "English",
		icon: "gb",
		hashLink: "en",
	},
	{
		name: "Germany",
		icon: "de",
		hashLink: "",
	},
]

function TranslateButtons() {
	const [currentFlag, setCurrentFlag] = useState("gb")

	useEffect(() => {
		if (typeof window !== "undefined") {
			if (localStorage.getItem("lang")) {
				setCurrentFlag(localStorage.getItem("lang"))
			}
		}
	}, [])

	return (
		<>
			<span className={`flag-icon flag-icon-${currentFlag} cursor-pointer`}></span>
			<ul className='flex-wrap justify-center cursor-pointer hidden group-hover:flex absolute p-2 rounded-md shadow-lg bg-[#0018A8]-50 text-black dark:bg-slate-900 dark:text-slate-300 w-[310px] top-5 right-6'>
				<li className='w-[45%]'>
					<span className='flag-icon flag-icon-gb'></span>
					<span className='ml-2'>English</span>
				</li>
				<li className='w-[45%]'>
					<span className='flag-icon flag-icon-de'></span>
					<span className='ml-2'>Germany</span>
				</li>
				<li className='w-[45%]'>
					<span className='flag-icon flag-icon-es'></span>
					<span className='ml-2'>Spanish</span>
				</li>
				<li className='w-[45%]'>
					<span className='flag-icon flag-icon-fr'></span>
					<span className='ml-2'>French</span>
				</li>
				<li className='w-[45%]'>
					<span className='flag-icon flag-icon-it'></span>
					<span className='ml-2'>Italian</span>
				</li>
				<li className='w-[45%]'>
					<span className='flag-icon flag-icon-jp'></span>
					<span className='ml-2'>Japanese</span>
				</li>
				<li className='w-[45%]'>
					<span className='flag-icon flag-icon-pt'></span>
					<span className='ml-2'>Portuguese</span>
				</li>
				<li className='w-[45%]'>
					<span className='flag-icon flag-icon-cn'></span>
					<span className='ml-2'>Chinese</span>
				</li>
			</ul>
		</>
	)
}

export default TranslateButtons
