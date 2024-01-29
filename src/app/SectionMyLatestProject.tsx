"use client";

import { useEffect, useState } from 'react';
import { assets } from '@/constant/assets';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BsGithub } from 'react-icons/bs';
import { IoMdOpen } from 'react-icons/io';
import { BsInfoCircle } from 'react-icons/bs';
import { FiFigma } from 'react-icons/fi';
import styles from "./home.module.css";

const tabs = [
  {
    name: "Project",
    data: [
      {
        slug: "PortfolioNest",
        title: "PortfolioNest",
        image: assets.home.myLatestProject.projects.portfolionest,
        repositoryUrl: "https://github.com/surajh09/portfolionest2",
      },
      {
        slug: "Cloud-Lab",
        title: "CloudLab",
        image: assets.home.myLatestProject.projects.cloudlab,
        repositoryUrl: "https://github.com/surajh09/Cloud-Lab",
      },
      {
        slug: "Nextjs-Portfolio",
        title: "NextJs Portfolio",
        image: assets.home.myLatestProject.projects.nextJsPortfolio,
        repositoryUrl: "https://github.com/surajh09/Nextjs-Portfolio",
      },
      {
        slug: "Elegant-Design",
        title: "Elegant Design",
        image: assets.home.myLatestProject.projects.elegantdesign,
        repositoryUrl: "https://github.com/surajh09/Elegant-Design",
      },
    ],
  },
];

export default function SectionMyLatestProject() {
const [activeTab, setActiveTab] = useState(0);
const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
});
const router = useRouter();
useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tab = urlParams.get('tab');
    if (tab && parseInt(tab) < tabs.length - 1) {
        setActiveTab(parseInt(tab));
    }
}, [activeTab])
return (
    <section ref={ref} id="project" className={`safe-x-padding ${styles.sectionDistance}`} aria-label='My Latest Project Section'>
        <div className='text-center'>
            <motion.h2 initial={{ y: 100, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.5 }} className={styles.sectionTitle}>My Latest Project</motion.h2>
            <motion.p initial={{ y: 100, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.7 }} className={`${styles.sectionDescription} max-w-[706px] mx-auto`}>Take a look at something I&apos;ve worked on, such as a case study, real project, and more</motion.p>
        </div>
        <div className='mt-[50px] h-full'>
            <div className='flex flex-col items-center justify-center md:items-start md:flex-row gap-9'>
                <div className='overflow-hidden'>
                    <div className='bg-gray rounded-[36px] p-[26px] w-full h-[600px] overflow-y-auto'>
                        <div className='grid grid-flow-row grid-cols-12 gap-[26px]'>
                            {tabs.map((tab, tabIndex) =>
                                tab.data.map((item, dataIndex) =>
                                    activeTab === tabIndex && (
                                        <motion.div
                                            key={dataIndex.toString()}
                                            className="relative col-span-12 overflow-hidden group xl:col-span-6"
                                            initial={{ opacity: 0, x: -50 }}
                                            animate={inView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ duration: 0.5 }}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <div className="col-span-6">
                                                <motion.div
                                                    className=" md:rounded-[25px] border-gray-300 border-2 overflow-hidden"
                                                    initial={{ opacity: 0, x: -50 }}
                                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                                    transition={{ duration: 0.5, delay: 0.2 + dataIndex * 0.1 }}
                                                >
                                                    <Image
                                                        className="object-contain rounded-2xl w-full h-auto"
                                                        src={item.image}
                                                        alt=""
                                                        width={441}
                                                        height={261}
                                                        priority
                                                    />
                                                </motion.div>
                                            </div>
                                            <div className='absolute top-0 bottom-0 left-0 right-0 hidden transition-all duration-300 gap-y-2 group-hover:block bg-black/10 text-gray-300 backdrop-blur-sm rounded-2xl'>
                                                <div className='flex flex-col items-center justify-center w-full h-full select-none lg:select-auto'>
                                                    <p className="p-8 text-xl font-bold text-center transition-all duration-150 ease-in-out line-clamp-1">{item.title}</p>
                                                    <div className='flex flex-row gap-4 text-3xl'>
                                                        {item.repositoryUrl && (
                                                            <Link
                                                                className="p-4 transition-all duration-150 ease-in-out bg-gray rounded-2xl hover:text-gray-500 hover:bg-gradient-to-r hover:from-primary hover:to-secondary"
                                                                href={{
                                                                    pathname: item.repositoryUrl,
                                                                }}
                                                                target='_blank'
                                                                title="Repository"
                                                            >
                                                                {tabs[activeTab].name.toLowerCase() === "project" ? (
                                                                    <BsGithub />
                                                                ) : (
                                                                    <FiFigma />
                                                                )}
                                                            </Link>
                                                        )}
                                                        <Link className="p-4 transition-all duration-300 ease-in-out bg-gray rounded-2xl hover:text-gray-500 hover:bg-gradient-to-r hover:from-primary hover:to-secondary" href={`${item.slug}`} title={`Detail of ${item.title}`}>
                                                            <BsInfoCircle />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
}
