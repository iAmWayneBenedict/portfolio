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
	javascript: <BiLogoJavascript />,
	jquery: <BiLogoJquery />,
	bootstrap: <BiLogoBootstrap />,
	tailwindcss: <BiLogoTailwindCss />,
	php: <BiLogoPhp />,
	laravel: <SiLaravel />,
	codeigniter: <SiCodeigniter />,
	mongodb: <BiLogoMongodb />,
	nodejs: <DiNodejs />,
	react: <DiReact />,
	express: <SiExpress />,
	supabase: <SiSupabase />,
	figma: <BiLogoFigma />,
	postman: <SiPostman />,
	typescript: <BiLogoTypescript />,
	sass: <BiLogoSass />,
	github: <BiLogoGithub />,
	git: <BiLogoGit />,
	mysql: <SiMysql />,
	alpinejs: <SiAlpinedotjs />,
	livewire: <SiLivewire />,
	reactjs: <BiLogoReact />,
	ejs: <BiSolidFileJs />,
	puppeteer: <SiPuppeteer />,
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
