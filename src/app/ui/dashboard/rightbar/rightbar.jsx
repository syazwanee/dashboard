"use client";

import styles from './rightbar.module.css';
import Image from 'next/image'; // Import Image from 'next/image'
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                    <Image src="/rocket.png" alt="Rocket Image" fill className={styles.bg} />
                </div>
                <div className={styles.text}> {/* Updated class name */}
                    <span className={styles.notification}>🔥 Available Now</span>
                    <h3 className={styles.title}>How to use the new version of the admin dashboard</h3>
                    <span className={styles.subtitle}>Takes 4 minutes to learn</span>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reprehenderit eius libero perspiciatis recusandae possimus.
                    </p>
                    <button className={styles.button}>
                        <MdPlayCircleFilled />
                        Watch
                    </button>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                </div>
                <div className={styles.text}> {/* Updated class name */}
                    <span className={styles.notification}>🚀 Coming soon</span>
                    <h3 className={styles.title}>New server actions are available, partial pre-rendering is coming up!</h3>
                    <span className={styles.subtitle}>Boost your productivity</span>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reprehenderit eius libero perspiciatis recusandae possimus.
                    </p>
                    <button className={styles.button}>
                        <MdReadMore />
                        Learn
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Rightbar;
