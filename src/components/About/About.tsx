import Image from 'next/image';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

interface SectionProps {
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
    buttonText: string;
    reverse?: boolean;
}

const Section: React.FC<SectionProps> = ({ imageSrc, imageAlt, title, description, buttonText, reverse }) => (
    <div className={`w-64 md:w-72 lg:w-80 items-center mx-auto overflow-hidden lg:mx-0 ${reverse ? 'lg:flex lg:flex-col-reverse' : ''} pb-20`}>
        <div className='relative w-full h-64 md:h-80 lg:h-80'>
            <Image
                src={imageSrc}
                alt={imageAlt}
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className='rounded-lg object-cover'
            />
        </div>
        <div className='pt-4 w-full lg:pt-0'>
            <h2 className='text-xl md:text-2xl lg:text-2xl font-bold  lg:pt-0'>{title}</h2>
            <p className='font-light md:text-lg lg:text-lg'>{description}</p>
            <button className='text-red-800 hover:opacity-50 flex items-center group font-bold mt-4 lg:mt-4 lg:pb-4'>
                {buttonText}
                <IoIosArrowForward className='font-bold ml-1 transition-transform transform group-hover:translate-x-2' />
            </button>
        </div>
    </div>
);

function About() {
    return (
        <div className='p-6 pt-20 flex flex-col lg:flex-row lg:justify-center lg:space-x-4'>
            <Section
                imageSrc="/aboutChurch.jpg"
                imageAlt="About Church"
                title="About Our Church"
                description="The Word of God church was started by Pastor Braxton Capel in 2012. With over 200 members we grow into one of the biggest communities in LA. With this said, you are welcome to join a place where everyone is talking to God and about God."
                buttonText="Learn More"
            />
            <Section
                imageSrc="/toExpect.jpg"
                imageAlt="What to Expect"
                title="What to Expect"
                description="When you come to our church, you can expect a friendly welcome, uplifting worship, and a message that will inspire you to grow in your faith."
                buttonText="Find Out More"
                reverse
            />
        </div>
    );
}

export default About;