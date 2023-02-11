import React from "react";

interface Props {
	useReference: React.RefObject<HTMLDivElement>;
}

const Menu: React.FC<Props> = ({ useReference }) => {
	return (
		<div
			ref={useReference}
			className="menu-con fixed opacity-0 hidden top-0 left-0 w-screen h-screen bg-white z-50"
		>
			<div className="left-menu bg-black w-[3rem]">
				<div className="top-left-menu">Wayne</div>
				<div className="bottom-left-menu"></div>
			</div>
			<div className="right-"></div>
		</div>
	);
};

export default Menu;
