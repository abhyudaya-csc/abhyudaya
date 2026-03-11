"use client";

import { useEffect, useRef, useState } from "react";

import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { useWindowSize } from "react-use";

import { useStore } from "../../store";
import { FaWhatsapp } from "react-icons/fa";
import Aftermovies from "./Aftermovies";

import Marchandise from "./merchandise/Merchandise";
import Hero2Section from "./About";
import Slider from "./slider/Slider";
import firstSceneLinksRaw from "./1st.json?raw";
import secondSceneLinksRaw from "./2nd.json?raw";
import thirdSceneLinksRaw from "./3rd.json?raw";
import fourthSceneLinksRaw from "./4th.json?raw";
import X from "./X";
gsap.registerPlugin(ScrollTrigger);

const buildFrameMap = (rawLinks, maxFrame) => {
  const map = new Map();
  const idSrcRegex = /"id"\s*:\s*(\d+)\s*,\s*"src"\s*:\s*"([^"]+)"/g;
  const srcIdRegex = /"src"\s*:\s*"([^"]+)"\s*,\s*"id"\s*:\s*(\d+)/g;
  const altSrcRegex = /"alt"\s*:\s*"frame(\d+)"\s*,\s*"src"\s*:\s*"([^"]+)"/gi;
  const srcAltRegex = /"src"\s*:\s*"([^"]+)"\s*,\s*"alt"\s*:\s*"frame(\d+)"/gi;

  const addIfValid = (id, src) => {
    if (id >= 1 && id <= maxFrame && src && !map.has(id)) {
      map.set(id, src);
    }
  };

  let match;
  while ((match = idSrcRegex.exec(rawLinks)) !== null) {
    addIfValid(Number(match[1]), match[2]);
  }

  while ((match = srcIdRegex.exec(rawLinks)) !== null) {
    addIfValid(Number(match[2]), match[1]);
  }

  while ((match = altSrcRegex.exec(rawLinks)) !== null) {
    addIfValid(Number(match[1]), match[2]);
  }

  while ((match = srcAltRegex.exec(rawLinks)) !== null) {
    addIfValid(Number(match[2]), match[1]);
  }

  return map;
};

const firstSceneFrameMap = buildFrameMap(firstSceneLinksRaw, 192);
const secondSceneFrameMap = buildFrameMap(secondSceneLinksRaw, 192);
const thirdSceneFrameMap = buildFrameMap(thirdSceneLinksRaw, 96);
const fourthSceneFrameMap = buildFrameMap(fourthSceneLinksRaw, 84);


const Logo = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    viewport={{ once: true }}
    className="scene-content flex items-center justify-center w-full max-w-4xl mx-auto px-4"
    style={{ willChange: "transform, opacity" }}
  >
    <img
      src="/Abhyudaya-combined.png"
      alt="Abhyudaya  Logo"
      className="w-full h-auto drop-shadow-[0_0_30px_rgba(135,206,235,0.6)]"
    />
  </motion.div>
);
const GrainOverlay = () => (
    <div 
        className="fixed top-0 left-0 h-screen w-screen pointer-events-none z-10"
        style={{
            backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOCIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiLz48L3N2Zz4=)',
            opacity: 0.07,
            animation: 'grain 8s steps(10) infinite',
        }}
    />
  );





const sceneConfigs = {
  treetogate: {
    frameCount: 192,
    path: (frame) => firstSceneFrameMap.get(frame) ?? firstSceneFrameMap.get(1) ?? "",
  },
  gatetoforest: {
    frameCount: 192,
    path: (frame) => secondSceneFrameMap.get(frame) ?? secondSceneFrameMap.get(1) ?? "",
  },
  ForestToworld: {
    frameCount: 96,
    path: (frame) => thirdSceneFrameMap.get(frame) ?? thirdSceneFrameMap.get(1) ?? "",
  },
  Last: {
    frameCount: 84,
    path: (frame) => fourthSceneFrameMap.get(frame) ?? fourthSceneFrameMap.get(1) ?? "",
  },
};

export function Hero() {
  const mainRef = useRef(null);
  const wrapperRef = useRef(null);

  const canvasRefs = {
    treetogate: useRef(null),
    gatetoforest: useRef(null),
    ForestToworld: useRef(null),
    Last: useRef(null),
  };

  const { width } = useWindowSize();
  const { imagesLoaded, setImagesLoaded } = useStore();
  const [isMobile, setIsMobile] = useState(width < 768);

  const imageSequences = useRef({
    treetogate: [],
    gatetoforest: [],
    ForestToworld: [],
    Last: [],
  });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setImagesLoaded(true);
      return;
    }

    const loadImages = async () => {
      const promises = Object.keys(sceneConfigs).flatMap((key) => {
        const config = sceneConfigs[key];
        const sequencePromises = [];
        for (let i = 1; i <= config.frameCount; i++) {
          sequencePromises.push(
            new Promise((resolve) => {
              const img = new window.Image();
              img.src = config.path(i);
              img.onload = () => resolve(img);
              img.onerror = () => resolve(img);
            })
          );
        }
        return sequencePromises;
      });
      const loadedImages = await Promise.all(promises);
      let offset = 0;
      Object.keys(sceneConfigs).forEach((key) => {
        const config = sceneConfigs[key];
        imageSequences.current[key] = loadedImages.slice(
          offset,
          offset + config.frameCount
        );
        offset += config.frameCount;
      });
      setImagesLoaded(true);
    };
    loadImages();
  }, [isMobile, setImagesLoaded]);

  useEffect(() => {
    if ((isMobile && mainRef.current) || (!isMobile && imagesLoaded)) {
      const lenis = new Lenis({ lerp: 0.1 });
      lenis.on("scroll", ScrollTrigger.update);
      const update = (time) => {
        lenis.raf(time * 1000);
      };
      gsap.ticker.add(update);
      gsap.ticker.lagSmoothing(0);

      const ctx = gsap.context(() => {
        if (isMobile) {
          // GSAP autoAlpha is omitted on mobile to prevent components from remaining invisible.
          // Fallback to Framer Motion built into the individual components.
        } else {
          const setupCanvas = (canvas) => {
            if (!canvas) return null;
            const context = canvas.getContext("2d");
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            context?.scale(dpr, dpr);
            return context;
          };
          const contexts = {
            treetogate: setupCanvas(canvasRefs.treetogate.current),
            gatetoforest: setupCanvas(canvasRefs.gatetoforest.current),
            ForestToworld: setupCanvas(canvasRefs.ForestToworld.current),
            Last: setupCanvas(canvasRefs.Last.current),
          };
          const renderFrame = (context, image) => {
            if (!image || !context) return;
            const dpr = window.devicePixelRatio || 1;
            context.clearRect(0, 0, context.canvas.width, context.canvas.height);
            const canvasAspect = context.canvas.width / context.canvas.height;
            const imageAspect = image.width / image.height;
            let drawWidth, drawHeight, offsetX, offsetY;
            if (canvasAspect > imageAspect) {
              drawWidth = context.canvas.width / dpr;
              drawHeight = drawWidth / imageAspect;
              offsetX = 0;
              offsetY = (context.canvas.height / dpr - drawHeight) / 2;
            } else {
              drawHeight = context.canvas.height / dpr;
              drawWidth = drawHeight * imageAspect;
              offsetY = 0;
              offsetX = (context.canvas.width / dpr - drawWidth) / 2;
            }
            context.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
          };
          Object.keys(canvasRefs).forEach((key) => {
            renderFrame(contexts[key], imageSequences.current[key][0]);
          });
          const scenes = gsap.utils.toArray(".scene");
          gsap.set(wrapperRef.current, { height: `${scenes.length * 100}vh` });
          const ease = gsap.parseEase("power1.inOut");

          const handleResize = () => {
            console.log("HI");
            Object.values(contexts).forEach((context) => {
              if (context && context.canvas) {
                const dpr = window.devicePixelRatio || 1;
                context.canvas.width = window.innerWidth * dpr;
                context.canvas.height = window.innerHeight * dpr;
                context.canvas.style.width = `${window.innerWidth}px`;
                context.canvas.style.height = `${window.innerHeight}px`;
                context.scale(dpr, dpr);
              }
            });
            ScrollTrigger.refresh(true);
          };
          window.addEventListener("resize", handleResize);

          ScrollTrigger.create({
            trigger: wrapperRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            pin: mainRef.current,
            onUpdate: (self) => {
              const progress = self.progress;
              const sceneLength = 1 / scenes.length;
              const activeSceneIndex = Math.min(
                scenes.length - 1,
                Math.floor(progress / sceneLength)
              );

              scenes.forEach((scene, index) => {
                const sceneStartProgress = index * sceneLength;
                const localProgress =
                  (progress - sceneStartProgress) / sceneLength;
                const isActive = index === activeSceneIndex;

                gsap.set(scene, { autoAlpha: isActive ? 1 : 0 });

                const content = scene.querySelector(".scene-content");
                if (content) {
                  let from = { autoAlpha: 0, y: 50, x: 0 };
                  if (scene.classList.contains("scene-3"))
                    from = { autoAlpha: 0, x: -100, y: 50 };
                  if (scene.classList.contains("scene-5"))
                    from = { autoAlpha: 0, x: 100, y: 50 };

                  const fadeInEnd = 0.5;
                  const fadeOutStart = 0.5;

                  if (isActive) {
                    if (index === scenes.length - 1) {
                      const p = localProgress / fadeInEnd;
                      gsap.set(content, {
                        autoAlpha: p,
                        y: from.y ? from.y * (1 - p) : 0,
                        x: from.x ? from.x * (1 - p) : 0,
                      });
                    } else if (localProgress < fadeInEnd) {
                      const p = localProgress / fadeInEnd;
                      gsap.set(content, {
                        autoAlpha: p,
                        y: from.y ? from.y * (1 - p) : 0,
                        x: from.x ? from.x * (1 - p) : 0,
                      });
                    } else if (localProgress > fadeOutStart) {
                      const p =
                        (localProgress - fadeOutStart) / (1 - fadeOutStart);
                      gsap.set(content, { autoAlpha: 1 - p, y: -50 * p, x: 0 });
                    } else {
                      gsap.set(content, { autoAlpha: 1, y: 0, x: 0 });
                    }
                  }
                }
              });

              if (activeSceneIndex === 0) {
                const logoContent = scenes[0].querySelector(".scene-content");
                const localProgress = progress / sceneLength;
                gsap.set(logoContent, {
                  autoAlpha: 1 - localProgress,
                  z: -1000 * localProgress,
                });
              }
 
              const updateSequence = (sceneIndex, configKey) => {
                const startProgress = sceneLength * (sceneIndex - 1);
                if (
                  progress >= startProgress &&
                  progress < startProgress + sceneLength
                ) {
                  const localProgress =
                    (progress - startProgress) / sceneLength;
                  const easedProgress = ease(localProgress);
                  const frameIndex = Math.floor(
                    easedProgress * (sceneConfigs[configKey].frameCount - 1)
                  );
                  requestAnimationFrame(() => {
                    if (imageSequences.current[configKey]?.[frameIndex])
                      renderFrame(
                        contexts[configKey],
                        imageSequences.current[configKey][frameIndex]
                      );
                  });
                }
              };

              updateSequence(2, "treetogate");
              updateSequence(3, "gatetoforest");
              updateSequence(5, "ForestToworld");
              updateSequence(7, "Last");
            },
          });

          setTimeout(() => ScrollTrigger.refresh(), 100);
          return () => window.removeEventListener("resize", handleResize);
        }
      }, mainRef);
      return () => {
        gsap.ticker.remove(update);
        lenis.destroy();
        ctx.revert();
      };
    }
  }, [canvasRefs, imagesLoaded, isMobile]);

  if (isMobile) {
    return (
      <div className="bg-black text-white antialiased">
        <div ref={mainRef}>
          <section className="scene scene-1 min-h-screen flex items-center justify-center relative">
            <img
              src="https://i.ibb.co/F4GdxtFk/First-A.webp"
              alt="Daytime"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 z-0"></div>
            <div className="relative z-10 w-full px-4"><Logo /></div>
          </section>

          <section className="scene scene-2 min-h-[100dvh] flex flex-col justify-center relative py-12 overflow-hidden">
            <img
              src="/first_location.webp"
              alt="Cave"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70 z-0"></div>
            <div className="relative z-10 w-full flex-1 flex items-center py-8"><Hero2Section /></div>
          </section>

          <section className="scene scene-6 min-h-[100dvh] h-auto flex flex-col justify-center relative py-12 overflow-hidden">
            <img src="/first_location.webp" className="absolute inset-0 w-full h-full object-cover" alt="" />
            <div className="absolute inset-0 bg-black/70 z-0"></div>
            <div className="relative z-10 w-full flex-1 py-8">
              <Aftermovies />
            </div>
          </section>

          <section className="scene scene-4 min-h-[100dvh] h-auto flex flex-col justify-center relative py-12 overflow-hidden">
            <img src="/first_location.webp" className="absolute inset-0 w-full h-full object-cover" alt="" />
            <div className="absolute inset-0 bg-black/75 z-0"></div>
            <div className="relative z-10 w-full flex-1 flex items-center py-8"><Slider /></div>
          </section>

          <section className="scene scene-8 min-h-[100dvh] h-auto flex flex-col justify-center relative py-12 overflow-hidden">
            <img src="/first_location.webp" className="absolute inset-0 w-full h-full object-cover" alt="" />
            <div className="absolute inset-0 bg-black/80 z-0"></div>
            <div className="relative z-10 w-full py-8"><Marchandise /></div>
          </section>
          
          <section className="w-screen min-h-[50vh] flex items-center justify-center bg-black relative py-16 overflow-hidden">
            <img src="/first_location.webp" className="absolute inset-0 w-full h-full object-cover" alt="" />
            <div className="absolute inset-0 bg-black/85 z-0"></div>
            <div className="relative z-10 w-full"><X /></div>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white antialiased text-center">
      <div ref={wrapperRef} className="relative">
        
        <div
          ref={mainRef}
          className={`h-screen w-screen fixed top-0 left-0 ${
            imagesLoaded ? "visible" : "invisible"
          }`}
          style={{ perspective: "1000px" }}
        >
          <GrainOverlay />
          <section className="scene scene-1 absolute inset-0">
            <img
              src="https://i.ibb.co/F4GdxtFk/First-A.webp"
              alt="Daytime"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center align-center justify-center">
							<Logo />
						</div>
          </section>
          {/*SECOND CANVAS*/}
          <section className="scene scene-2 absolute inset-0 opacity-0">
            <canvas ref={canvasRefs.treetogate} />
            <div className="absolute inset-0 flex items-center justify-center">
							<Hero2Section /> 
						</div>
          </section>
          <section className="scene scene-3 absolute inset-0 opacity-0">
            <canvas ref={canvasRefs.gatetoforest} />
            
            <div className="scene-content absolute inset-0 flex items-center justify-center ">
							<Aftermovies />
						</div>
          </section>

          <section className="scene scene-4 absolute inset-0 opacity-0">
            <img
              src="/first_location.webp"
              alt="Light Wizard"
              className="w-full h-full object-cover"
            /><div className="scene-content absolute inset-0 flex items-center justify-center">
							<Slider />
						</div>
          </section>
          <section className="scene scene-5 absolute inset-0 opacity-0">
            <canvas ref={canvasRefs.ForestToworld} />
            <div className="absolute scene-content inset-0 flex items-center justify-center">
              <Marchandise />
            </div>
          </section>
          <section className="scene scene-6 absolute inset-0 opacity-0">
            <canvas ref={canvasRefs.Last} />
            {/*<img
              src="/second_location.webp"
              alt="Dark Wizard"
              className="w-full h-full object-cover"
            />*/}
            <div className="absolute scene-content inset-0 flex items-center justify-center">
              <X />
            </div>
            
          </section>
          {/*<section className="scene scene-8 absolute inset-0 opacity-0">
            <img
              src="/last.webp"
              alt="Nighttime"
              className="w-full h-full object-cover brightness-50"
            />
            <div className="absolute inset-0 flex items-center justify-center">
							<ContactSection /> 
						</div>
          </section>
          */}
          
        </div>
      </div>
    </div>
  );
}
