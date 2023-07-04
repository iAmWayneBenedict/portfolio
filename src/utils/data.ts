interface Props {
	projects: { [key: string]: {} };
	designs: {
		name: string;
		URIName: string;
		type: string;
		thumbnail: string;
		thumbnail_small: string;
		images: {
			name: string;
			demoLink: string;
			image: string;
			description: string;
		}[];
	}[];
	certificates: { [key: string]: {} };
}

const data = {
	projects: { key: {} },
	designs: [
		{
			name: "Bagudbud Express V2.0",
			URIName: "bagudbud-express-v2.0",
			type: "UI/UX Design",
			demoLink: "https://dribbble.com/shots/21744719-Bagudbud-Express-v2-0",
			thumbnail:
				"https://cdn.dribbble.com/userupload/8161256/file/original-50f2c0ad5493506202e9f3e4dfebd9e1.png?compress=1&resize=1600x1034",
			thumbnail_small:
				"https://cdn.dribbble.com/userupload/8159576/file/original-8614c4f590c94481cc78a7851335cc34.png?compress=1&resize=1600x1034",
			images: [
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8161604/file/original-82b64ddf0ec7a644faf1c3880c686881.png?compress=1&resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8161256/file/original-50f2c0ad5493506202e9f3e4dfebd9e1.png?compress=1&resize=2400x1551",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8159576/file/original-8614c4f590c94481cc78a7851335cc34.png?compress=1&resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8159580/file/original-97851a2eb4ee1deec75883b7cff1a4b1.png?compress=1&resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8159578/file/original-e4e1db56ee872a370089cac251c13783.png?compress=1&resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8159581/file/original-1337318bf097665da90b8edbd56ecd01.png?compress=1&resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8159577/file/original-746b4cceb2a870fe7d4aad92413e8795.png?compress=1&resize=640x990",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8159579/file/original-49aac1b31dc49889b3b2b5dfdce43eed.png?compress=1&resize=640x990",
					description: "",
				},
			],
		},
		{
			name: "RastaFoods",
			URIName: "rastafoods",
			type: "UI/UX Design, Development",
			demoLink: "https://dribbble.com/shots/21744356-RastaFoods",
			thumbnail:
				"https://cdn.dribbble.com/userupload/8214048/file/original-1009503e5f795adda162842b211f1f24.png?compress=1&resize=1600x1034",
			thumbnail_small:
				"https://cdn.dribbble.com/userupload/8214048/file/original-1009503e5f795adda162842b211f1f24.png?compress=1&resize=1600x1034",
			images: [
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8214048/file/original-1009503e5f795adda162842b211f1f24.png?compress=1&resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8214051/file/original-2b750afecbc09461f8c342e3e1a5bea8.png?compress=1&resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8214052/file/original-f301766d4567d4421a863565f163f556.png?compress=1&resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8214049/file/original-b3f54f08c70b36450cfb097d580072db.png?compress=1&resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8214050/file/original-76c4916e9dc5bf1fcfb0a3c1b1c43ce3.png?compress=1&resize=1600x1034",
					description: "",
				},
			],
		},
		{
			name: "MAOB Appointment System",
			URIName: "maob-appointment-system",
			type: "UI/UX Design, Development",
			demoLink: "https://dribbble.com/shots/21879862-MAOB-Appointment-System",
			thumbnail:
				"https://cdn.dribbble.com/userupload/8215417/file/original-c9a2c97de16617842431a20f249acf5a.png?compress=1&resize=1600x1034",
			thumbnail_small:
				"https://cdn.dribbble.com/userupload/8215422/file/original-ed5a8b67e14d0b70baf9f54c89fa07b1.png?compress=1&resize=1600x1034",
			images: [
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8215417/file/original-c9a2c97de16617842431a20f249acf5a.png?compress=1&resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8215421/file/original-33e88a5acae36aae5fec85963e6f9613.png?compress=1&resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8215419/file/original-8ad9e780560f768ba2af74ac8be1a518.png?compress=1&resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8215420/file/original-fce38a57e2eb9d7684879b909fc537a8.png?compress=1&resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8215422/file/original-ed5a8b67e14d0b70baf9f54c89fa07b1.png?compress=1&resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8215418/file/original-8134bba60d66eaa4e772e3a0db4dab5d.png?compress=1&resize=1600x1034",
					description: "",
				},
			],
		},
		{
			name: "Bagudbud Express",
			URIName: "bagudbud-express",
			type: "UI/UX Design, Development",
			demoLink: "https://dribbble.com/shots/21744974-Bagudbud-Express",
			thumbnail:
				"https://cdn.dribbble.com/userupload/8244800/file/original-9137b3039416a7d695eb76613f49bad6.png?compress=1&resize=1600x1034",
			thumbnail_small:
				"https://cdn.dribbble.com/userupload/8244803/file/original-54e1af652ada46abe3259736c22fafad.png?compress=1&resize=1600x1034",
			images: [
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8244800/file/original-9137b3039416a7d695eb76613f49bad6.png?compress=1&resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8244803/file/original-54e1af652ada46abe3259736c22fafad.png?compress=1&resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8244801/file/original-31b7c1115216effb1bd0d308cccae18a.png?compress=1&resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8244799/file/original-13c3c3972707636a331c403c821cfb9f.png?compress=1&resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8244802/file/original-6b2ae57a8c0a84a980708472acaa1f0d.png?compress=1&resize=1600x1034",
					description: "",
				},
			],
		},
		{
			name: "PH Holidays",
			URIName: "ph-holidays",
			type: "UI/UX Design, Development",
			demoLink: "https://dribbble.com/shots/21889146-PH-Holidays",
			thumbnail:
				"https://cdn.dribbble.com/userupload/8245591/file/original-031f882fa1bba823883e21a23046a9e1.png?compress=1&resize=1600x1034",
			thumbnail_small:
				"https://cdn.dribbble.com/userupload/8245593/file/original-cc26b1265a082e40e0f2b965dddaaea1.png?compress=1&resize=1600x1034",
			images: [
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8245591/file/original-031f882fa1bba823883e21a23046a9e1.png?compress=1&resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8245593/file/original-cc26b1265a082e40e0f2b965dddaaea1.png?compress=1&resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8245590/file/original-0cf2d98535dafdf1cdfdf3215b444b68.png?compress=1&resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/8245592/file/original-861e724b32774d394077dd374e6dfa67.png?compress=1&resize=1600x1034",
					description: "",
				},
			],
		},
	],
	certificates: { key: {} },
};

export default data;

const getData = (type: string, URIName?: string) => {
	if (type === "projects") {
		return data.projects;
	} else if (type === "designs") {
		return data.designs.filter((design) => design.URIName === URIName);
	} else if (type === "certificates") {
		return data.certificates;
	} else {
		return undefined; // Return undefined or handle unrecognized type
	}
};

export { getData };
