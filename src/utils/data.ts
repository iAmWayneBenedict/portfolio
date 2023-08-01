interface CategoryProps {
	name: string;
	URIName: string;
	categoryType: string;
	categoryDescription?: string;
	status?: string;
	category: string[];
	videoDemo?: string;
	type: string;
	thumbnail: string;
	thumbnail_small: string;
	demoLink?: string;
	dribbleLink?: string;
	githubLink?: string;
	description?: string;
	purpose?: string;
	key_features?: string;
	roles_and_responsibilities?: string;
	technologies?: string[];
	images: ImageProps[];
}

interface ImageProps {
	name: string;
	image: string;
	description: string;
}

interface Props {
	projects: CategoryProps[];
	designs: CategoryProps[];
}

const data: Props = {
	projects: [
		{
			name: "RastaFoods",
			URIName: "rastafoods",
			categoryType: "projects",
			category: ["branding"],
			status: "ongoing",
			categoryDescription: "RastaFoods Brand Ecosystem",
			description:
				"Lorem ipsum dolor sit amet consectetur. Mi nec scelerisque et venenatis suspendisse vitae velit. Tincidunt sit in eu at bibendum elit felis. Magnis interdum turpis in nec metus eleifend molestie bibendum.",
			purpose:
				"Lorem ipsum dolor sit amet consectetur. Mi nec scelerisque et venenatis suspendisse vitae velit. Tincidunt sit in eu at bibendum elit felis. Magnis interdum turpis in nec metus eleifend molestie bibendum.",
			key_features:
				"Lorem ipsum dolor sit amet consectetur. Mi nec scelerisque et venenatis suspendisse vitae velit. Tincidunt sit in eu at bibendum elit felis. Magnis interdum turpis in nec metus eleifend molestie bibendum.",
			roles_and_responsibilities:
				"Lorem ipsum dolor sit amet consectetur. Mi nec scelerisque et venenatis suspendisse vitae velit. Tincidunt sit in eu at bibendum elit felis. Magnis interdum turpis in nec metus eleifend molestie bibendum.",
			technologies: ["react, mongodb, express, nodejs, tailwindss"],
			type: "UI/UX Design, Development",
			dribbleLink: "https://dribbble.com/shots/21744356-RastaFoods",
			githubLink: "https://github.com/iAmWayneBenedict/rastafoods",
			thumbnail:
				"https://cdn.dribbble.com/userupload/8982553/file/original-fd075104842702938f24a4e946a71333.webp?resize=1600x1034",
			thumbnail_small:
				"https://cdn.dribbble.com/userupload/8982553/file/original-fd075104842702938f24a4e946a71333.webp?resize=1600x1034",
			images: [
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8982553/file/original-fd075104842702938f24a4e946a71333.webp?resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8982554/file/original-c969bb6fd653545b7a8cc8c52fae5f3b.webp?resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8982551/file/original-1eea638b4c915e851c6dc583dcfb9050.webp?resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8982550/file/original-bca95c8a716a8a0bc63cc03dc6546338.webp?resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8982552/file/original-40078b7eb8115fe9f535e2c0ed6a5997.webp?resize=1600x1034",
					description: "",
				},
			],
		},
		{
			name: "MAOB Appointment System",
			URIName: "maob-appointment-system",
			categoryType: "projects",
			category: ["community-projects"],
			type: "UI/UX Design, Development",
			demoLink: "https://maob-appointments-bato.000webhostapp.com/",
			dribbleLink: "https://dribbble.com/shots/21879862-MAOB-Appointment-System",
			githubLink: "https://github.com/iAmWayneBenedict/Appointment-System",
			thumbnail:
				"https://cdn.dribbble.com/userupload/8981727/file/original-7d89a233a178698a18793454aba3e4ca.webp?resize=1600x1034",
			thumbnail_small:
				"https://cdn.dribbble.com/userupload/8981728/file/original-619e4d0c5d1cf7d1e61c85ba14fa51d7.webp?resize=1600x1034",
			images: [
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8981727/file/original-7d89a233a178698a18793454aba3e4ca.webp?resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8981724/file/original-8f7718cb4d05768cf7360e98acc2dc46.webp?resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8981725/file/original-1c96e6f4a709ebd6a50ecc236f5046db.webp?resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8981729/file/original-d0a4a3129d81223617b67ccf62fefcb0.webp?resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8981728/file/original-619e4d0c5d1cf7d1e61c85ba14fa51d7.webp?resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8981726/file/original-4f2e0186764c74fde3404865a51afd64.webp?resize=1600x1034",
					description: "",
				},
			],
		},
		{
			name: "PH Holidays",
			URIName: "ph-holidays",
			categoryType: "projects",
			category: ["restful-apis", "open-source"],
			type: "UI/UX Design, Development, Automation",
			demoLink: "https://ph-holidays.vercel.app/",
			dribbleLink: "https://dribbble.com/shots/21889146-PH-Holidays",
			githubLink: "https://github.com/iAmWayneBenedict/ph-holidays",
			thumbnail:
				"https://cdn.dribbble.com/userupload/8982629/file/original-849f198c31365e2b4e41d91204ad2cee.webp?resize=1600x1034",
			thumbnail_small:
				"https://cdn.dribbble.com/userupload/8982631/file/original-ae05bbd60de3ab1f3f9c7b5327d837ee.webp?resize=1600x1034",
			images: [
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8982629/file/original-849f198c31365e2b4e41d91204ad2cee.webp?resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8982631/file/original-ae05bbd60de3ab1f3f9c7b5327d837ee.webp?resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8982632/file/original-4fb7d0b81d473441323347a8b93cd7e6.webp?resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8982630/file/original-72ba0a5e10eab06612797c934a6b2ade.webp?resize=1600x1034",
					description: "",
				},
			],
		},
		{
			name: "Chapters",
			URIName: "chapters",
			categoryType: "projects",
			category: ["open-source", "branding"],
			videoDemo: "https://youtu.be/oCVN1QKzsdk",
			type: "UI/UX Design, Development, Automation",
			dribbleLink: "https://dribbble.com/shots/22039382-Chapters",
			githubLink: "https://github.com/iAmWayneBenedict/chapters",
			thumbnail:
				"https://cdn.dribbble.com/userupload/8982822/file/original-5856b24acd313a9ed0d5bc4a95fa9ef2.webp?resize=1600x1034",
			thumbnail_small:
				"https://cdn.dribbble.com/userupload/8982821/file/original-2b4ffb1da0fef593b1edfc4bbc0d4d48.webp?resize=1600x1034",
			images: [
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8982822/file/original-5856b24acd313a9ed0d5bc4a95fa9ef2.webp?resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8982821/file/original-2b4ffb1da0fef593b1edfc4bbc0d4d48.webp?resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8982820/file/original-70c97872bd657125ef55499e9c0af1c1.webp?resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8982819/file/original-348730a5425a8097df126f6e9128ae7c.webp?resize=1600x1034",
					description: "",
				},
			],
		},
		{
			name: "Redcart",
			URIName: "redcart",
			categoryType: "projects",
			category: ["branding"],
			demoLink: "https://shop-redcart.000webhostapp.com/",
			type: "UI/UX Design, Development",
			dribbleLink: "https://dribbble.com/shots/22043286-Redcart",
			githubLink: "https://github.com/iAmWayneBenedict/redcart",
			thumbnail:
				"https://cdn.dribbble.com/userupload/8982312/file/original-35762fc008affb6c44299341a4a83726.webp?resize=1600x1034",
			thumbnail_small:
				"https://cdn.dribbble.com/userupload/8982312/file/original-35762fc008affb6c44299341a4a83726.webp?resize=1600x1034",
			images: [
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8982312/file/original-35762fc008affb6c44299341a4a83726.webp?resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8982315/file/original-58055bd06dec104d27a99fa5340bcb98.webp?resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8982314/file/original-cdd644d03c287535ca54a7639238a461.webp?resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8982313/file/original-6767f7923db49a3412331397722acee6.webp?resize=1600x1034",
					description: "",
				},
			],
		},
	],
	designs: [
		{
			name: "Bagudbud Express V2.0",
			URIName: "bagudbud-express-v2",
			category: ["branding"],
			categoryType: "designs",
			type: "UI/UX Design",
			dribbleLink: "https://dribbble.com/shots/21744719-Bagudbud-Express-v2-0",
			thumbnail:
				"https://cdn.dribbble.com/userupload/8982953/file/original-48adfd1d0c17eb36889d9684a90c0b93.webp?resize=1600x1034",
			thumbnail_small:
				"https://cdn.dribbble.com/userupload/8982955/file/original-fa3490061814f40dc80140ff1b49b5ea.webp?resize=1600x1034",
			images: [
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8982949/file/original-820583929835792c0660a7d26f8be94b.webp?resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8982953/file/original-48adfd1d0c17eb36889d9684a90c0b93.webp?resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8982955/file/original-fa3490061814f40dc80140ff1b49b5ea.webp?resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8982950/file/original-581f5af4b088412101ae523833903b5d.webp?resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8982948/file/original-7b135218fea64d2e777e87983e111f38.webp?resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8982954/file/original-a738382af0028c4319a1fd727f58366a.webp?resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8982951/file/original-3045f85031259d7858552da74c7638ba.webp?resize=640x990",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8982952/file/original-772e067ec9b7d95e5b080c3038b5d58a.webp?resize=640x990",
					description: "",
				},
			],
		},
		{
			name: "Bagudbud Express",
			URIName: "bagudbud-express",
			category: ["branding"],
			categoryType: "designs",
			type: "UI/UX Design, Development",
			dribbleLink: "https://dribbble.com/shots/21744974-Bagudbud-Express",
			thumbnail:
				"https://cdn.dribbble.com/userupload/8983151/file/original-5f233fc8954f91012eeeea2843a7edf0.webp?resize=1600x1034",
			thumbnail_small:
				"https://cdn.dribbble.com/userupload/8983149/file/original-1b81719b1acf6ed70eea8e69478fbc0a.webp?resize=1600x1034",
			images: [
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8983151/file/original-5f233fc8954f91012eeeea2843a7edf0.webp?resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8983149/file/original-1b81719b1acf6ed70eea8e69478fbc0a.webp?resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8983147/file/original-98a139cec3dee50454c68d2b1354822a.webp?resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8983150/file/original-f2a6b3cd77f2d0ab710fe407230ba55e.webp?resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8983148/file/original-30fe02dde59e33269b14d7c27dcfc951.webp?resize=1600x1034",
					description: "",
				},
			],
		},
	],
};

export default data;

const getData = (type: string, URIName?: string) => {
	if (type === "projects") {
		return data.projects.filter((project) => project.URIName === URIName);
	} else if (type === "designs") {
		return data.designs.filter((design) => design.URIName === URIName);
	} else if (type === "certificates") {
		return data.designs.filter((design) => design.URIName === URIName);
	} else {
		return [];
	}
};

export { getData };
export type { CategoryProps, ImageProps };
