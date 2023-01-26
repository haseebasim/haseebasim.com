import { useState } from 'react';

import Section from './Section';
/* eslint-disable react/no-unescaped-entities */
export default function Experience({ experience }) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <Section id="experience" minHeight={false}>
            <div>
                <p className="mb-5 font-bold text-3xl sm:text-4xl">Experience</p>
                <p className="text-xl sm:text-2xl">Where I've worked</p>
                <div className="mt-10 lg:mt-[100px] flex lg:flex-row w-full flex-col lg:gap-x-20 gap-y-5 items-start mx-auto xl:w-5/6 ">
                    <div className="flex  flex-row lg:flex-col overflow-x-scroll w-full lg:w-auto lg:overflow-visible">
                        {experience.map((exp, index) => (
                            <Tab
                                setActiveTab={setActiveTab}
                                key={index}
                                index={index}
                                active={index === activeTab}
                                company={exp.company}
                            />
                        ))}
                    </div>
                    <div className="relative pt-1">
                        {experience.map((exp, index) => (
                            <TabSection
                                company={exp.company}
                                key={index}
                                position={exp.position}
                                block={exp.text}
                                to={exp.to}
                                active={index === activeTab}
                                from={exp.from}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}

const Tab = ({ active, company, setActiveTab, index }) => {
    return (
        <div
            onClick={() => {
                setActiveTab(index);
            }}
            className={`cursor-pointer transition-all duration-300 border-b-2 lg:border-b-0 lg:border-l-4 flex justify-center lg:justify-start items-end lg:items-center w-full min-w-[120px] lg:w-[200px] lg:pl-5 h-[60px] text-xl  text-center ${
                active ? 'border-primary text-primary' : 'border-white'
            } `}
        >
            <span className="lg:ml-4">{company}</span>
        </div>
    );
};

const TabSection = ({ active, company, position, block, to, from }) => {
    return (
        <div
            className={`text-lg sm:text-xl ${
                !active && 'absolute opacity-0 top-0 '
            } transition-all duration-500`}
        >
            <div className="mt-2.5">
                <p className="text-primary">
                    {position} @ <span className="font-bold">{company}</span>
                </p>
                <p>
                    {from} - {to}
                </p>
            </div>
            <ul>
                {block.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};
