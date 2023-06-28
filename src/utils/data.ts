interface Props {
	projects: Map<string, {}>;
	designs: Map<
		string,
		{
			name: string;
			thumbnail: string;
			thumbnail_small: string;
			images: {
				name: string;
				image: string;
				description: string;
			}[];
		}
	>;
	certificates: Map<string, {}>;
}

const data: Props = {
	projects: new Map([["key", {}]]),
	designs: new Map([
		[
			"bagudbudExpressV2",
			{
				name: "Bagudbud Express V2.0",
				thumbnail:
					"https://cdn.dribbble.com/userupload/8161604/file/original-82b64ddf0ec7a644faf1c3880c686881.png?compress=1&resize=1600x1034",
				thumbnail_small:
					"https://cdn.dribbble.com/userupload/8161256/file/original-50f2c0ad5493506202e9f3e4dfebd9e1.png?compress=1&resize=2400x1551",
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
		],
	]),
	certificates: new Map([["key", {}]]),
};

export default data;
