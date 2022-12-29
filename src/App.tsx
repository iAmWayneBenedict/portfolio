import { useEffect, useState } from "react";
import Home from "./pages/Home.page";
import Nav from "./layouts/Home.layouts/Nav.layouts/Nav.layout";

function App() {
	const [count, setCount] = useState(0);

	const isDarkMode = () => window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");

	const icon = document.querySelector("link[rel=icon]") as HTMLLinkElement;

	useEffect(() => {
		isDarkMode().matches
			? icon?.setAttribute("href", "/logo-darkmode.svg")
			: icon?.setAttribute("href", "/logo-lightmode.svg");
	}, []);

	return (
		<div className="App">
			<Nav />
			<Home />
		</div>
	);
}

export default App;
