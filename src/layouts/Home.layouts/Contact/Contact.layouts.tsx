export const ContactLayouts = () => {
    return (
        <div className="mt-40 bg-black pt-48 pb-20 px-24">
            <div className="text-white flex justify-between">
                <div>
                    <a href="#">
                        <h1 className="flex">
                            <span className="font-neueMontrealRegular text-[5.75rem]">LET'S TALK.</span>
                            <img src="/assets/ico/arrow-up-right.svg" alt=""/>
                        </h1>
                    </a>
                    <div className="mt-16 flex flex-col gap-10">
                        <p>Open for Collaboration</p>
                        <p>Available for Freelance Work</p>
                    </div>
                </div>
                <div className="flex flex-col gap-10">
                    <a href="#">
                        <img src="/assets/ico/github.svg" alt=""/>
                    </a>

                    <a href="#">
                        <img src="/assets/ico/linkedin.svg" alt=""/>
                    </a>

                    <a href="#">
                        <img src="/assets/ico/dribbble%201.svg" alt=""/>
                    </a>
                </div>
            </div>
            <div className="text-white mt-56 flex justify-between">
                <div>
                    <a href="#">Terms and Conditions</a>
                </div>
                <div>
                    <span>
                        <span>©</span>
                        <span>2022 | WAYNE</span>
                    </span>
                </div>
            </div>
        </div>
    );
};
