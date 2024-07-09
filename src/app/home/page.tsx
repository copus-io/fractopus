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
  const [opacity, setOpacity] = useState(1);
  const [opacity2, set2Opacity] = useState(1);
  const [opacity3, set3Opacity] = useState(1);
  const [opacity4, set4Opacity] = useState(1);
  useEffect(() => {
    const handler = function (this: HTMLElement, e: Event) {
      // scrollHeight是可滚动区域的总高度， innerHeight是可视窗口的高度， scrollTop是盒子可视窗口的最顶部，到盒子可滚动上限的距离
      // 还有一个可以性能优化的点， this.scrollHeight 在没有获取新数据时，是固定的，可以存起来成一个变量，获取新数据再更新，减少重排重绘
      // console.log("this.scrollHeight", this.scrollTop);
      // 367  916 1493 1916  2530
      // 滚动条距离顶部的距离小于367， 第一个图片的透明度逐渐变为1
      if (this.scrollTop === 0) {
        setOpacity(1);
      }
      if (this.scrollTop > 100 && this.scrollTop < 367) {
        setOpacity(1 - this.scrollTop / 367);
      }
      // 滚动条距离顶部的距离大于916， 第二个图片的透明度逐渐变为1 第一个图片的透明度逐渐变为0
      if (this.scrollTop > 367 && this.scrollTop < 916) {
        set2Opacity(1 - (this.scrollTop - 916) / 587);
        setOpacity(1 - (this.scrollTop - 916) / 587);
      }
      // 滚动条距离顶部的距离大于1493， 第三个图片的透明度逐渐变为1 第二个图片的透明度逐渐变为0 第一个图片的透明度逐渐变为0
      if (this.scrollTop > 1493 && this.scrollTop < 1916) {
        set3Opacity(1 - (this.scrollTop - 1493) / 423);
        set2Opacity(1 - (this.scrollTop - 1493) / 423);
        setOpacity(1 - (this.scrollTop - 1493) / 423);
      }
      // 滚动条距离顶部的距离大于1916， 第四个图片的透明度逐渐变为1 第三个图片的透明度逐渐变为0 第二个图片的透明度逐渐变为0 第一个图片的透明度逐渐变为0
      if (this.scrollTop > 1916 && this.scrollTop < 2530) {
        set4Opacity(1 - (this.scrollTop - 1916) / 614);
        set3Opacity(1 - (this.scrollTop - 1916) / 614);
      }
      // 滚动条距离顶部的距离大于2530， 第四个图片的透明度为1 第三个图片的透明度为1 第二个图片的透明度为1 第一个图片的透明度为1
      if (this.scrollTop > 2530) {
        set4Opacity(1);
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
          <div className={styles.titleContainer}>
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
            <div>© 2024 S31 Labs</div>
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
