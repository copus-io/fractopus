"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import icFrac from "../../../public/assets/img/ic-frac-1.webp";
import icFrac2 from "../../../public/assets/img/ic-frac-2.webp";
import icFrac3 from "../../../public/assets/img/ic-frac-3.webp";
import icFrac4 from "../../../public/assets/img/ic-frac-4.webp";
import Fractopus from "../../components/Fractopus";
import Protocol from "../../components/Protocol";
import UseCases from "@/components/UseCases";
import { useEffect, useRef, useState } from "react";
const Home = () => {
  const title = [
    {
      text: "Manifesto",
      link: "#manifesto",
    },
    {
      text: "Protocol",
      link: "#protocol",
    },
    {
      text: "Use cases",
      link: "#use-cases",
    },
  ];
  const scrollRef = useRef<any>(null);
  const [opacity, setOpacity] = useState(1);
  const [opacity2, set2Opacity] = useState(1);
  const [opacity3, set3Opacity] = useState(1);
  const [opacity4, set4Opacity] = useState(1);
  return (
    <div className={styles.bg} ref={scrollRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleContainer}>
            {title.map((item: any, index: any) => (
              <div key={index} className="flex items-center mr-[5px]">
                <div
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    scrollRef.current.scrollTo({
                      top:
                        index === 0
                          ? 100
                          : index === 1
                          ? 1916
                          : index === 2
                          ? 4000
                          : 2530,

                      behavior: "smooth",
                    })
                  }
                >
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.content}>
          <div id="manifesto">
            <Fractopus isMobile={true} />
          </div>
          <div id="protocol">
            <Protocol />
          </div>
          <div id="use-cases">
            <UseCases />
          </div>
        </div>
        <div className={styles.footer}>
          <div className="flex items-center">
            <div>© 2024 S31 Labs</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
