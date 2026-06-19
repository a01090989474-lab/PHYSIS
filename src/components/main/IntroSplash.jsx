import { useEffect, useRef, useState } from "react";
import "./IntroSplash.scss";

const END_BUFFER_SEC = 1.2;
const MOVE_MS = 700;

export default function IntroSplash({ onDone }) {
  const videoRef = useRef(null);
  const tempRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const close = () => setClosing(true);

    const handleTimeUpdate = () => {
      if (video.duration && video.currentTime >= video.duration - END_BUFFER_SEC) {
        close();
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", close);
    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", close);
    };
  }, []);

  useEffect(() => {
    if (!closing) return;

    const pairs = [
      [tempRef.current, document.querySelector(".hero__temp")],
      [titleRef.current, document.querySelector(".hero__title")],
      [descRef.current, document.querySelector(".hero__desc")],
    ];

    pairs.forEach(([from, to]) => {
      if (!from || !to) return;

      const fromRect = from.getBoundingClientRect();
      const toRect = to.getBoundingClientRect();
      const fromSize = parseFloat(getComputedStyle(from).fontSize);
      const toSize = parseFloat(getComputedStyle(to).fontSize);
      const scale = toSize / fromSize;
      const dx = toRect.left - fromRect.left;
      const dy = toRect.top - fromRect.top;
      const targetColor = getComputedStyle(to).color;

      from.style.transformOrigin = "top left";
      from.style.transition = `transform ${MOVE_MS}ms ease, color ${MOVE_MS}ms ease`;
      from.style.transform = `translate(${dx}px, ${dy}px) scale(${scale})`;
      from.querySelectorAll(".fill-text__fill, .fill-text__base").forEach((span) => {
        span.style.transition = `color ${MOVE_MS}ms ease`;
        span.style.color = targetColor;
      });
    });

    const timer = setTimeout(onDone, MOVE_MS);
    return () => clearTimeout(timer);
  }, [closing, onDone]);

  return (
    <div className={`intro-splash${closing ? " intro-splash--closing" : ""}`}>
      <div className="intro-splash__bg">
        <video
          ref={videoRef}
          className="intro-splash__video"
          src="/images/main/intro.mp4"
          autoPlay
          muted
          playsInline
        />
        <div className="intro-splash__overlay" />
      </div>
      <div className="intro-splash__text">
        <h1
          ref={tempRef}
          className="intro-splash__temp fill-text fill-text--1"
        >
          <span className="fill-text__base">-21.3°C</span>
          <span className="fill-text__fill">-21.3°C</span>
        </h1>
        <p
          ref={titleRef}
          className="intro-splash__title fill-text fill-text--2"
        >
          <span className="fill-text__base">신선도가 시작되는 온도</span>
          <span className="fill-text__fill">신선도가 시작되는 온도</span>
        </p>
        <p ref={descRef} className="intro-splash__desc fill-text fill-text--3">
          <span className="fill-text__base">
            잡은 그 순간의 품질을, 식탁에 오르는 그 순간까지
          </span>
          <span className="fill-text__fill">
            잡은 그 순간의 품질을, 식탁에 오르는 그 순간까지
          </span>
        </p>
      </div>
    </div>
  );
}
