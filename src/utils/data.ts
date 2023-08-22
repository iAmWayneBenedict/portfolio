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
	designProcess?: string;
	learning?: string;
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
			name: "DICT Management System",
			URIName: "dict-management-system",
			categoryType: "projects",
			category: ["community-projects"],
			categoryDescription: "DICT Website and Examination Management",
			description:
				"This website was developed for the Department of Information and Communication Technology Region V Camarines Sur Provincial Office during my internship as Lead Developer and Frontend Developer. It encompasses the official website, incorporating CMS functionality and an Examination Management System. This website was built using HTML, CSS, TailwindCSS, JavaScript, Vite, Blade templating with Livewire, PHP Laravel, and MySQL.",
			purpose:
				"The purpose of this project is to provide a platform that clients can post announcements and activities, as well as manage examinees of the ICT Diagnostic Examination using the Examination Management System.",
			key_features:
				"The project offers a number of features. It offers an intuitive website interface for users to interact with, a login system for applicants that incorporates with google sign-in for seamless access of accounts, responsive user dashboard from mobile to pc devices, and admin dashboard that manages the dynamic content of the website and exam management.<ul class='list-disc mt-5 ml-10'><li>Dynamic Website Content</li><li>Organizing Examination Events</li><li>Seamless user-experience</li><li>Manage Examinee Applications</li><li>Fast sign-in with google email</li><li>Rich admin controls from website content to examinee applications</li></ul>",
			roles_and_responsibilities:
				"As the Lead Developer and Front-End Developer of the team, I am responsible for planning the technologies needed to effectively implement the features, managing the front-end development team, and providing instructions to co-developers regarding the packages and APIs for development. In addition, I have taken charge of developing the overall UI design, progressing from low to high fidelity wireframes, in order to create the web application prototype for front-end development.",
			technologies: [
				"html",
				"css",
				"javascript",
				"tailwindcss",
				"alpinejs",
				"livewire",
				"php",
				"laravel",
				"mysql",
				"figma",
			],
			type: "UI/UX Design, Development",
			dribbleLink:
				"https://dribbble.com/shots/22251731-ICT-Diagnostic-Examination-Management-System",
			thumbnail:
				"https://cdn.dribbble.com/userupload/9239914/file/original-bdd6381521f1e01c9f0218b8c90b41a8.png?resize=1600x1034",
			thumbnail_small:
				"https://cdn.dribbble.com/userupload/9239914/file/original-bdd6381521f1e01c9f0218b8c90b41a8.png?resize=1600x1034",
			images: [
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/9239914/file/original-bdd6381521f1e01c9f0218b8c90b41a8.png?resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/9239915/file/original-7c0623ba1338003ab45df41523a5c6a9.webp?resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/9239918/file/original-0e097a5853f456d1c6b40245839641c1.webp?resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/9239917/file/original-be86749fcc4e82028648d7066fc7c3cd.webp?resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/9239919/file/original-c32c1714f202d69cfe745dff3b27799f.webp?resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/9239916/file/original-3c6fbb80f3ff8a455eae3ae99b637f45.webp?resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/9241829/file/original-88993ff6b02bf381bf10ee227bbdb22a.png?resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/9239912/file/original-636bf67a0ac5943e2e3322f31294e63a.png?resize=1600x1034",
					description: "",
				},
				{
					name: "Dashboard",
					image: "https://cdn.dribbble.com/userupload/9239913/file/original-29be57d73c28d097d2fbd4b96aa516a7.png?resize=1600x1034",
					description: "",
				},
			],
		},
		{
			name: "MAOB Appointment System",
			URIName: "maob-appointment-system",
			categoryType: "projects",
			category: ["community-projects"],
			categoryDescription: "MAOB - Municipal Agriculture Office of Bato",
			description:
				"A Capstone Project for the Municipal Agriculture Office of Bato. This project offers an appointment scheduling system, employee availability tracking, inventory system, and information dissemination. The project was built using HTML, CSS, SASS, Bootstrap, JavaScript, jQuery, PHP Codeigniter, and MySQL. My roles during the development of the project included being the Project Head, Front-end Developer, and QA Tester.",
			purpose:
				"The purpose of this project is to aid the Municipal Agriculture Office of Bato in managing the arrival flow of clients and tracking employee availability. It also provides update on appointment status. Furthermore, it also offers information dissemination about stock availability and various notifications. This project addresses the issue of travel time for farmers and fishermen who previously had to travel through the Municipality of Balatan and Nabua to reach the office. With this project, they only need to schedule an appointment and check if the necessary personnel are present in the office to facilitate their transactions.",
			key_features:
				"The key features of the project mainly consist of the following: <ul class='list-disc mt-5 ml-10'><li>Offers Guest mode for users who don't have gadgets.</li><li>Create, Modify, Delete, and Reschedule of Appointments</li><li>Stock Distribution</li><li>Basic Inventory Management</li><li>Realtime Stocks Release Monitoring</li><li>Information Dessimination using in-app Announcements, SMS, and Email</li><li>Appointment Status Notification</li><li>Generation of Reports in PDF Format</li></ul>",
			roles_and_responsibilities:
				"My role revolves on being the Project Head, Frontend Developer, and QA Tester. It involves coordination with the client to identify project requirements, distributing tasks among team members, efficiently managing our team's time and financial resources, and maintaining a productive connection with our team's advisor and consultant. Ensuring that the project meets all necessary requirements is also a crucial part of my responsibility. \nAlso, I've taken on the responsibility of crafting and constructing the frontend of the system. This entails creating an interface that offers users a straightforward and instinctive experience. \nMoreover, I'm responsible for assessing the system's performance by subjecting it to rigorous testing using Apache JMeter. This role blends creativity, organization, and technical expertise to drive the project towards its success.",
			technologies: [
				"html",
				"css",
				"javascript",
				"bootstrap",
				"jquery",
				"php",
				"codeigniter",
				"mysql",
				"figma",
			],
			type: "UI/UX Design, Development",
			demoLink: "https://maob-appointments-bato.000webhostapp.com/",
			dribbleLink: "https://dribbble.com/shots/21879862-MAOB-Appointment-System",
			githubLink: "https://github.com/iAmWayneBenedict/Appointment-System",
			thumbnail:
				"https://cdn.dribbble.com/userupload/8981727/file/original-7d89a233a178698a18793454aba3e4ca.webp?resize=1600x1034",
			thumbnail_small:
				"https://cdn.dribbble.com/userupload/8981727/file/original-7d89a233a178698a18793454aba3e4ca.webp?resize=1600x1034",
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
			name: "RastaFoods",
			URIName: "rastafoods",
			categoryType: "projects",
			category: ["branding"],
			status: "ongoing",
			categoryDescription: "RastaFoods Brand Ecosystem",
			description:
				"This is an online platform that businesses can use to reach more customers similar with Food Panda. This project is currently in development (rewriting codes). This is a personal project currently built with MERN Stack Development (MongoDB, Express, ReactJS, and NodeJS) but will be shifting to PostgreSQL, Express, ReactJS, and NodeJS.",
			purpose:
				"This will offer a platform for food stores to expand their business through an online presence. In terms of the technical aspect, this project will establish the foundation for developing an application in which the frontend and backend sides of the system are built using different codebases.",
			key_features:
				"The key features of the project mainly consist of the following: <ul class='list-disc mt-5 ml-10'><li>Online Store for food business</li><li>Food Delivery Riders connecting businesses with consumers</li><li>Dynamic Shop Menu</li><li>Dynamic Product Add Ons</li></ul>",
			roles_and_responsibilities:
				"As the sole developer of the project, I am responsible for constructing the project from the ground up. This involves connecting the frontend to the backend of the system, developing authentication mechanisms for four (4) distinct roles — users, riders, business owners, and administrators. I am also responsible for designing and creating a straightforward yet intuitive interface to ensure a seamless experience across all roles. In addition, I am responsible for designing the database, backend, and APIs that facilitate efficient data management throughout the entire system.",
			technologies: ["reactjs", "nodejs", "mongodb", "express", "tailwindcss"],
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
			name: "PH Holidays",
			URIName: "ph-holidays",
			categoryType: "projects",
			category: ["restful-apis", "open-source"],
			status: "ongoing",
			categoryDescription: "PH Holidays",
			description:
				"This project offers an API for holidays in the Philippines. This is an ongoing project and currently implementing api secret and password authentication. Built with NodeJS and Puppeteer.",
			purpose:
				"Developed an API to address the lack of available free holiday APIs in the Philippines, providing comprehensive information on Regular Holidays, Special Working Holidays, and Observance Holidays. Users can also customize their own holidays, enhancing flexibility and customization options.",
			key_features:
				"The key features of this project are the following: <ul class='list-disc mt-5 ml-10'><li>Automated web scraping using Puppeteer</li><li>Create your own holiday (effective only on your account and does not affect holiday data of other account)</li><li>Provide secure authentication with JSON Web Token (JWT)</li><li>Provide socials login with google and github for easier access.</li><li>Preparing for future open-source availability</li></ul>",
			roles_and_responsibilities:
				"As the developer of the system, I am responsible with creating the user interface for documentation and user dashboard. Additionally, I am responsible for implementing the backend and authentication mechanisms to process data for various users, establishing a database to store user data, creating an API connection that can be utilized across all domains without triggering the CORS policy, and developing a web scraper to seamlessly retrieve and process data from different sources.",
			technologies: [
				"nodejs",
				"mongodb",
				"express",
				"tailwindcss",
				"ejs",
				"puppeteer",
				"supabase",
			],
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
			categoryDescription: "Chapters",
			description:
				"A web-based video player that features timestamps similar to YouTube. This project provides a feature that remembers what you watched and in what part you stopped. This project helped me a lot in learning relevant skills in software development.",
			purpose:
				"The purpose of this project is to help myself in learning software development even if there is no internet connection or if there is a power interruption. To use this project, youtube videos with a timestamp should be downloaded and saved in the project directory. Students can use this project as a medium to gain more knowledge, especially if they don't have financial resources to maintain video streaming.",
			key_features:
				"The key features of this project are: <ul class='list-disc mt-5 ml-10'><li>Youtube web scraper</li><li>Batch file for easy access</li><li>Able to run locally or Offline</li><li>Chapters/Key Moments like YouTube</li><li>Theatre mode</li><li>Fullscreen mode</li><li>File crawler</li></ul>",
			roles_and_responsibilities:
				"My role in this project is developer. My responsibilities covers the development of the project from the ground up and the implementation of web scraper for automating the process of getting the timestamps.",
			technologies: ["html", "css", "javascript", "ejs", "nodejs", "express", "puppeteer"],
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
			categoryDescription: "Redcart",
			description:
				"An e-commerce site for huawei gadgets. Built with HTML, CSS, Javascript, PHP, and MySQL. Implementing scroll animation built from scratch.",
			purpose:
				"The purpose of this project is to make an e-commerce site for a brand where it can build its identity and can showcase its products to the customers.",
			key_features:
				"Key features of this project includes, rich visual interaction, 2 layer filtering system, and cart items indicator.",
			roles_and_responsibilities:
				"As the sole developer of this project, I am responsible for creating the visual and logical aspect of the system by designing and implementing the interface and database.",
			technologies: ["html", "css", "javascript", "php", "mysql"],
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
			categoryDescription: "Bagudbud Express V2.0 Branding",
			description:
				"The UI design for the delivery rider's dashboard represents a revamped edition of Bagudbud Express, showcasing a user-friendly and streamlined interface. This design was built with figma a collaborative tool for designing user interface for web, mobile, and desktop applications.",
			learning:
				"Lorem ipsum dolor sit amet consectetur. Mi nec scelerisque et venenatis suspendisse vitae velit. Tincidunt sit in eu at bibendum elit felis. Magnis interdum turpis in nec metus eleifend molestie bibendum.",
			designProcess:
				"Lorem ipsum dolor sit amet consectetur. Mi nec scelerisque et venenatis suspendisse vitae velit. Tincidunt sit in eu at bibendum elit felis. Magnis interdum turpis in nec metus eleifend molestie bibendum.",
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
			categoryDescription: "Bagudbud Express",
			description:
				"This design was developed for our school project. This was also developed as web application built using Codeigniter a PHP framework for building MVC architecture application and Bootsrap. This design was built with figma a collaborative tool for designing user interface for web, mobile, and desktop applications.",
			learning:
				"Lorem ipsum dolor sit amet consectetur. Mi nec scelerisque et venenatis suspendisse vitae velit. Tincidunt sit in eu at bibendum elit felis. Magnis interdum turpis in nec metus eleifend molestie bibendum.",
			designProcess:
				"Lorem ipsum dolor sit amet consectetur. Mi nec scelerisque et venenatis suspendisse vitae velit. Tincidunt sit in eu at bibendum elit felis. Magnis interdum turpis in nec metus eleifend molestie bibendum.",
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
