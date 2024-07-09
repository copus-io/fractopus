"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import icFrac from "../../../public/assets/img/ic-frac-1.webp";
import icFrac2 from "../../../public/assets/img/ic-frac-2.webp";
import icFrac3 from "../../../public/assets/img/ic-frac-3.webp";
import icFrac4 from "../../../public/assets/img/ic-frac-4.webp";
import icFracTop from "../../../public/assets/img/ic-frac-top.webp";
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
  const [opacity, setOpacity] = useState(0);
  const [opacity2, set2Opacity] = useState(0);
  const [opacity3, set3Opacity] = useState(0);
  const [opacity4, set4Opacity] = useState(0);

  const [isHover, setIsHover] = useState(true);
  useEffect(() => {
    // 获取scrollRef.current 的高度
    const scrollHeight = scrollRef.current.scrollHeight + 40;
    const handler = function (this: HTMLElement, e: Event) {
      // scrollHeight是可滚动区域的总高度， innerHeight是可视窗口的高度， scrollTop是盒子可视窗口的最顶部，到盒子可滚动上限的距离
      // 还有一个可以性能优化的点， this.scrollHeight 在没有获取新数据时，是固定的，可以存起来成一个变量，获取新数据再更新，减少重排重绘
      // scrollHeight 从0滚动12.5%的时候，
      if (this.scrollTop > 0) {
        setIsHover(false);
      } else {
        setIsHover(true);
      }
      if (!window.matchMedia("(max-width: 500px)").matches) {
        const rate = this.scrollTop / scrollHeight;
        if (rate < 0.125 && rate >= 0) {
          // 第一个图从透明度从0 - 1;
          // 其他透明度为0
          set2Opacity(0);
          set3Opacity(0);
          set4Opacity(0);
          setOpacity(rate * 8);
        }
        // scrollHeight 从12.5滚动25%的时候，
        else if (rate < 0.25 && rate >= 0.125) {
          // 第一个图从透明度从1 - 0
          set2Opacity(0);
          set3Opacity(0);
          set4Opacity(0);
          setOpacity(1 - (rate - 0.125) * 8);
        }
        // scrollHeight 从25滚动37.5%的时候，
        else if (rate < 0.375 && rate >= 0.25) {
          // 第二个图从透明度从0 - 1;
          setOpacity(0);
          set3Opacity(0);
          set4Opacity(0);
          set2Opacity((rate - 0.25) * 8);
        }
        // scrollHeight 从37.5滚动50%的时候，
        else if (rate < 0.5 && rate >= 0.375) {
          // 第二个图从透明度从1 - 0
          setOpacity(0);
          set3Opacity(0);
          set4Opacity(0);
          set2Opacity(1 - (rate - 0.375) * 8);
        }
        // scrollHeight 从50滚动62.5%的时候，
        else if (rate < 0.625 && rate >= 0.5) {
          // 第三个图从透明度从0 - 1;
          set2Opacity(0);
          setOpacity(0);
          set4Opacity(0);
          set3Opacity((rate - 0.5) * 8);
        }
        // scrollHeight 从62.5滚动75%的时候，
        else if (rate < 0.75 && rate >= 0.625) {
          // 第三个图从透明度从1 - 0
          set2Opacity(0);
          setOpacity(0);
          set4Opacity(0);
          set3Opacity(1 - (rate - 0.625) * 8);
        }
        // scrollHeight 从75滚动87.5%的时候，
        else if (rate < 0.875 && rate >= 0.75) {
          // 第四个图从透明度从0 - 1;
          set3Opacity(0);
          set2Opacity(0);
          setOpacity(0);
          set4Opacity((rate - 0.75) * 8);
        }
        // scrollHeight 从87.5滚动100%的时候，
        else if (rate <= 1 && rate >= 0.875) {
          // 第四个图从透明度从1 - 0
          set3Opacity(0);
          set2Opacity(0);
          setOpacity(0);
          set4Opacity(1 - (rate - 0.875) * 8);
        }
      }
    };
    scrollRef.current?.addEventListener("scroll", handler);
  });

  const goView = (index: any) => {
    // 媒体查询 500px
    if (window.matchMedia("(max-width: 500px)").matches) {
      scrollRef.current?.scrollTo({
        top: index === 0 ? 500 : index === 1 ? 3114 : index === 2 ? 5200 : 1000,
        behavior: "smooth",
      });
    } else {
      scrollRef.current?.scrollTo({
        top: index === 0 ? 100 : index === 1 ? 1916 : index === 2 ? 4000 : 2530,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.bg} ref={scrollRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div
            className={styles.titleContainer}
            style={{
              borderBottom: !isHover ? "none" : "1px solid #696969",
            }}
          >
            {title.map((item: any, index: any) => (
              <div key={index} className="flex items-center mr-[5px]">
                <a
                  href={item.link}
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => {}}
                >
                  {item.text}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.div} style={{ height: "400px" }}></div>
        <div className={styles.bgImgTop}>
          <img src={icFracTop.src} className={styles.img} alt="ic-frac" />
        </div>
        <div className={styles.content}>
          <div id="manifesto" className={styles.manifesto}>
            <Fractopus />
          </div>
          <div id="protocol" className={styles.manifesto}>
            <Protocol />
          </div>
          <div id="use-cases" className={styles.manifesto}>
            <UseCases />
          </div>
        </div>
        <div className={styles.footer}>
          <div className="flex items-center">
            <div>© {new Date().getFullYear()} S31 Labs</div>
          </div>
        </div>
      </div>
      <div className={styles.bgImg}>
        <div style={{ opacity: opacity }} className={styles.bgImgInner1}>
          <Image src={icFrac} alt="ic-frac" sizes="100vw, 100vw" />
        </div>
        <div className={styles.bgImgInner2} style={{ opacity: opacity2 }}>
          <Image src={icFrac2} alt="ic-frac" sizes="100vw, 100vw" />
        </div>
        <div className={styles.bgImgInner3} style={{ opacity: opacity3 }}>
          <Image src={icFrac3} alt="ic-frac" sizes="100vw, 100vw" />
        </div>
        <div className={styles.bgImgInner4} style={{ opacity: opacity4 }}>
          <Image src={icFrac4} alt="ic-frac" sizes="100vw, 100vw" />
        </div>
      </div>
    </div>
  );
};
export default Home;
