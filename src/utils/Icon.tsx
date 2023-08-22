import {
	BiLogoBootstrap,
	BiLogoCss3,
	BiLogoFigma,
	BiLogoGit,
	BiLogoGithub,
	BiLogoHtml5,
	BiLogoJavascript,
	BiLogoJquery,
	BiLogoMongodb,
	BiLogoPhp,
	BiLogoReact,
	BiLogoSass,
	BiLogoTailwindCss,
	BiLogoTypescript,
	BiSolidFileJs,
} from "react-icons/bi";
import {
	SiAlpinedotjs,
	SiCodeigniter,
	SiExpress,
	SiLaravel,
	SiLivewire,
	SiMysql,
	SiPostman,
	SiPuppeteer,
	SiSupabase,
} from "react-icons/si";
import { DiNodejs, DiReact } from "react-icons/di";

interface IconProps {
	[key: string]: JSX.Element;
}

export const icons: IconProps = {
	html: <BiLogoHtml5 />,
	css: <BiLogoCss3 />,
	sass: <BiLogoSass />,
	javascript: <BiLogoJavascript />,
	typescript: <BiLogoTypescript />,
	jquery: <BiLogoJquery />,
	reactjs: <BiLogoReact />,
	alpinejs: <SiAlpinedotjs />,
	bootstrap: <BiLogoBootstrap />,
	tailwindcss: <BiLogoTailwindCss />,
	ejs: <BiSolidFileJs />,
	puppeteer: <SiPuppeteer />,
	nodejs: <DiNodejs />,
	express: <SiExpress />,
	php: <BiLogoPhp />,
	laravel: <SiLaravel />,
	livewire: <SiLivewire />,
	codeigniter: <SiCodeigniter />,
	mongodb: <BiLogoMongodb />,
	mysql: <SiMysql />,
	supabase: <SiSupabase />,
	figma: <BiLogoFigma />,
	postman: <SiPostman />,
	github: <BiLogoGithub />,
	git: <BiLogoGit />,
};

const Icon = ({ name }: { name: keyof typeof icons }) => {
	return (
		<div className="flex flex-col items-center">
			{icons[name]}
			<span className="text-sm mt-2">{name}</span>
		</div>
	);
};

export default Icon;
