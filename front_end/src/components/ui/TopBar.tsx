import { Dispatch, SetStateAction } from 'react';
import {
	Bars3CenterLeftIcon,
} from '@heroicons/react/24/solid';

type Props = {
	showNav: boolean;
	setShowNav: Dispatch<SetStateAction<boolean>>;
};


export const TopBar = ({ showNav, setShowNav }: Props) => {
	return (
		<section
			className={`fixed w-full h-16 flex items-center transition-all duration-[400ms] ${
				showNav ? 'pl-56' : ''
			}`}
		>
			<ul className={'flex justify-between items-center flex-1 px-4 md:px-16'}>
				<li className="">
					<Bars3CenterLeftIcon
						className={
							'h-8 w-8 cursor-pointer text-gray-700 hover:text-orange-500 transition-colors ease-in-out duration-300'
						}
						onClick={() => setShowNav((prev) => !prev)}
					/>
				</li>
				
			</ul>
		</section>
	);
};
