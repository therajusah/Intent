"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { features } from "../constant/data";
import logo from "@/app/assets/intent-logo-light.png";
import discordlogo from "@/app/assets/icons8-discord-100.png";
import githublogo from "@/app/assets/icons8-github-60 (1).png";
import menuIcon from "@/app/assets/menu.png";
import closeIcon from "@/app/assets/close.png";
import rocketIcon from "@/app/assets/rocket (1).png";
import twitter from "@/app/assets/twitter (4).png"
import githubfoot from "@/app/assets/github.png"
import discordfoot from "@/app/assets/discord.png"

const MobileMenu = dynamic(() => import("@/app/components/MobileMenu"), {
    ssr: false,
});

export default function Homepage() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="flex flex-col min-h-screen px-4 mt-2 text-center md:px-20">
            <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between w-full px-4 py-3 rounded-lg shadow-md md:px-8 bg-black">
                <div className="flex items-center">
                    <Image src={logo} alt="Intent Logo" width={40} height={40} />
                    <span className="ml-2 text-2xl text-white md:text-4xl">Intent</span>
                </div>

                <nav className="justify-center flex-1 hidden gap-8 text-xl font-semibold md:flex">
                    <Link href="#" className="text-white hover:text-custom-green">
                        Docs
                    </Link>
                    <Link href="#" className="text-white hover:text-custom-green">
                        Blog
                    </Link>
                    <Link href="#" className="text-white hover:text-custom-green">
                        Support
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Link
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <Image
                            src={githublogo}
                            alt="GitHub"
                            width={32}
                            height={32}
                            className="transition duration-300 hover:opacity-80"
                        />
                    </Link>
                    <Link
                        href="https://discord.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Discord"
                    >
                        <Image
                            src={discordlogo}
                            alt="Discord"
                            width={32}
                            height={32}
                            className="transition duration-300 hover:opacity-80"
                        />
                    </Link>
                    <button
                        onClick={toggleMobileMenu}
                        className="block md:hidden"
                    >
                        <Image
                            src={isMobileMenuOpen ? closeIcon : menuIcon}
                            alt="Menu"
                            width={24}
                            height={24}
                        />
                    </button>
                </div>
            </header>

            {isMobileMenuOpen && <MobileMenu onClose={toggleMobileMenu} />}

            <main className="flex flex-col items-center justify-center flex-grow px-2 py-1 mt-16 md:mt-20">
                <div className="max-w-2xl mx-auto mb-16 mt-10">
                    <div className="cursor-pointer sm:flex sm:justify-center">
                        <div className="relative px-2 py-1 text-xs leading-6 rounded-full sm:text-sm text-custom-green ring-1 ring-custom-green">
                            🚀 Intent v0.1.35 released{" "}
                            <Link href="#" className="font-semibold hover:text-custom-green">
                                <span aria-hidden="true" className="font-extrabold">
                                    →
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

                <h1 className="text-3xl font-bold md:text-5xl lg:text-6xl text-bgcolor dark:text-darkfont">
                    It&apos;s like Laravel,
                    <br />
                    <span className="text-custom-green">But for NodeJS.</span>
                </h1>

                <p className="max-w-3xl mt-4 mb-6 text-base font-light text-white md:text-lg">
                    A refreshing take on traditional Node.js frameworks, change the way
                    you build your products. Intent is an open-source framework with a
                    focus on productivity and developer experience.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 font-semibold duration-300 rounded-md bg-custom-green">
                        <Image src={rocketIcon} alt="Rocket" width={24} height={24} />
                        Get Started
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 font-semibold text-white transition duration-300 border border-white rounded-md">
                        <Image
                            src={githublogo}
                            alt="GitHub"
                            width={24}
                            height={24}
                            className="transition duration-300 hover:opacity-80"
                        />
                        Star on GitHub
                    </button>
                </div>

                <div>
                    <p className="mt-2 flex items-center whitespace-nowrap">
                        <span className="cursor-pointer text-custom-green text-md">
                            Book a call
                        </span>
                        <span className="text-md ml-2">
                            to see how Intent can help you!
                        </span>
                    </p>
                </div>

                <div className="flex flex-col justify-center items-center py-20 mt-10">
                    <div>
                        <span className="text-3xl md:text-4xl xl:text-5xl font-semibold text-center">
                            Turbocharge your coding
                        </span>{" "}
                        <br />
                        <span className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-main py-1 text-custom-green">
                            All tools on deck.
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 w-[80%]">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            title={feature.title}
                            description={feature.description}
                            link={feature.link}
                        />
                    ))}
                </div>
                <div className="mt-12">
                    <hr className="border-t-2 border-white my-8 w-full" />
                </div>
            </main>

            <footer className="w-full mt-26">
                <div className="flex flex-col items-center space-y-4">
                    <div className="flex space-x-4">
                        <Link href="#" className="rounded-full bg-bgcolor p-2 cursor-pointer bg-white">
                            <Image src={githubfoot} alt="GitHub" width={32} height={32} />
                        </Link>
                        <Link href="#" className="rounded-full bg-white p-2 cursor-pointer">
                            <Image src={discordfoot} alt="Discord" width={32} height={32} />
                        </Link>
                        <Link href="#" className="rounded-full bg-white p-2 cursor-pointer">
                            <Image src={twitter} alt="Twitter" width={32} height={32} />
                        </Link>
                    </div>
                    <nav className="flex space-x-4 text-white">
                        <Link href="#">Home</Link>
                        <Link href="#">Docs</Link>
                        <Link href="#">Blog</Link>
                        <Link href="#">Support</Link>
                    </nav>
                    <span className="text-gray-400 text-sm mt-12">
                        2024 © Intent. All rights reserved.
                    </span>
                </div>
            </footer>
        </div>
    );
}

const FeatureCard = ({
    title,
    description,
    link,
}: {
    title: string;
    description: string;
    link: string;
}) => {
    return (
        <div className="relative bg-[#1c1c1c] rounded-lg shadow-md p-4 group hover:scale-105 transition-transform duration-300 cursor-pointer w-[200px] h-auto text-left">
            <h3 className="text-xl font-bold group-hover:text-custom-green text-left">
                {title}
            </h3>
            <p className="text-white mt-2 text-left">{description}</p>
            <Link
                href={link}
                className="mt-4 inline-flex items-center justify-start w-full text-left group-hover:text-custom-green"
            >
                <span className="text-left">Read More</span>
                <span className="ml-auto text-custom-green opacity-0 translate-x-[10px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2">
                    →
                </span>
            </Link>
        </div>
    );
};
