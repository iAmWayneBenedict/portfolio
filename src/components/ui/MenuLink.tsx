import React from "react";

interface Props {
	text: String;
}

const MenuLink: React.FC<Props> = ({ text }) => {
	return <h1 className="text-8xl ">{text}</h1>;
};

export default MenuLink;
