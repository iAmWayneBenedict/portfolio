import Marquee from "react-fast-marquee";
import MarqueeText from "../Home.layouts/Designs.layouts/MarqueeText.layouts";
import React from "react";

const Technologies = () => {
    return (
        <div className="mt-64">
            <h1 className="text-center font-bold text-2xl">TECHNOLOGIES</h1>
            <div>
                <div className="mt-20">
                    <div className="mousemove marquee-container text-white py-12 border-t border-b border-2 border-black">
                        <Marquee className="overflow-y-hidden cursor-default whitespace-nowrap" speed={50}>
                            <p
                                className="marquee-title relative text-[#99948d] inline-block m-0 will-change-transform"
                            >
                                <div className='flex gap-14'>
                                    {
                                        [
                                            "/assets/ico/react%201.svg",
                                            "/assets/ico/express.svg",
                                            "/assets/ico/nodejs%201.svg",
                                            "/assets/ico/typescript.svg",
                                            "/assets/ico/sass.svg",
                                            "/assets/ico/tailwind-css.svg",
                                            "/assets/ico/bootstrap.svg",
                                            "/assets/ico/html5.svg",
                                            "/assets/ico/css3.svg",
                                            "/assets/ico/figma-logo.svg",
                                            "/assets/ico/npm.svg",
                                            "/assets/ico/postman.svg",
                                            "/assets/ico/git(1).svg",
                                            "/assets/ico/mysql.svg",
                                            "/assets/ico/java-script.svg",
                                            "/assets/ico/php.svg"
                                        ].map((src) => (<img src={src} className='w-16' alt=""/>))
                                    }
                                </div>
                            </p>
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Technologies;
