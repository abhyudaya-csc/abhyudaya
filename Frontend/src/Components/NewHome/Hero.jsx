"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  lazy,
  Suspense,
  memo,
} from "react";

import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { useWindowSize } from "react-use";

import { useStore } from "../../store";
import { FaWhatsapp } from "react-icons/fa";

// Lazy load heavy components
const Aftermovies = lazy(() => import("./Aftermovies"));
const Marchandise = lazy(() => import("./merchandise/Merchandise"));
const Hero2Section = lazy(() => import("./About"));
const Slider = lazy(() => import("./slider/Slider"));
const X = lazy(() => import("./Countdown"));

import firstSceneLinksRaw from "./1st.json?raw";
import secondSceneLinksRaw from "./2nd.json?raw";
import thirdSceneLinksRaw from "./3rd.json?raw";
import fourthSceneLinksRaw from "./4th.json?raw";

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

const Logo = memo(() => (
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
      alt="Abhyudaya Logo"
      className="w-full h-auto drop-shadow-[0_0_30px_rgba(135,206,235,0.6)]"
      loading="eager"
    />
  </motion.div>
));

const GrainOverlay = memo(() => (
  <div
    className="fixed top-0 left-0 h-screen w-screen pointer-events-none z-10"
    style={{
      backgroundImage:
        "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOCIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiLz48L3N2Zz4=)",
      opacity: 0.07,
      animation: "grain 8s steps(10) infinite",
    }}
  />
));

const sceneConfigs = {
  treetogate: {
    frameCount: 192,
    path: (frame) =>
      firstSceneFrameMap.get(frame) ?? firstSceneFrameMap.get(1) ?? "",
  },
  gatetoforest: {
    frameCount: 192,
    path: (frame) =>
      secondSceneFrameMap.get(frame) ?? secondSceneFrameMap.get(1) ?? "",
  },
  ForestToworld: {
    frameCount: 96,
    path: (frame) =>
      thirdSceneFrameMap.get(frame) ?? thirdSceneFrameMap.get(1) ?? "",
  },
  Last: {
    frameCount: 84,
    path: (frame) =>
      fourthSceneFrameMap.get(frame) ?? fourthSceneFrameMap.get(1) ?? "",
  },
};

const BATCH_SIZE = 25;
const BATCH_TRIGGER_RATIO = 0.6;
const SCENE_KEYS = Object.keys(sceneConfigs);

// Loading fallback for lazy components
const ComponentLoader = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

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

  const frameCache = useRef({
    treetogate: new Map(),
    gatetoforest: new Map(),
    ForestToworld: new Map(),
    Last: new Map(),
  });
  const inFlightPromises = useRef({
    treetogate: new Map(),
    gatetoforest: new Map(),
    ForestToworld: new Map(),
    Last: new Map(),
  });
  const lastRequestedBatch = useRef({
    treetogate: -1,
    gatetoforest: -1,
    ForestToworld: -1,
    Last: -1,
  });

  const loadFrame = useCallback((sceneKey, frameNumber) => {
    const config = sceneConfigs[sceneKey];
    if (!config || frameNumber < 1 || frameNumber > config.frameCount) {
      return Promise.resolve(null);
    }

    const cacheMap = frameCache.current[sceneKey];
    if (cacheMap.has(frameNumber)) {
      return Promise.resolve(cacheMap.get(frameNumber));
    }

    const inFlightMap = inFlightPromises.current[sceneKey];
    if (inFlightMap.has(frameNumber)) {
      return inFlightMap.get(frameNumber);
    }

    const promise = new Promise((resolve) => {
      const img = new window.Image();
      img.decoding = "async";
      img.src = config.path(frameNumber);
      img.onload = () => {
        cacheMap.set(frameNumber, img);
        inFlightMap.delete(frameNumber);
        resolve(img);
      };
      img.onerror = () => {
        inFlightMap.delete(frameNumber);
        resolve(null);
      };
    });

    inFlightMap.set(frameNumber, promise);
    return promise;
  }, []);

  const preloadBatch = useCallback(
    (sceneKey, batchIndex) => {
      if (batchIndex < 0) {
        return;
      }

      const config = sceneConfigs[sceneKey];
      if (!config) {
        return;
      }

      const maxBatchIndex = Math.floor((config.frameCount - 1) / BATCH_SIZE);
      if (batchIndex > maxBatchIndex) {
        return;
      }

      const startFrame = batchIndex * BATCH_SIZE + 1;
      const endFrame = Math.min(config.frameCount, startFrame + BATCH_SIZE - 1);

      for (
        let frameNumber = startFrame;
        frameNumber <= endFrame;
        frameNumber++
      ) {
        void loadFrame(sceneKey, frameNumber);
      }
    },
    [loadFrame],
  );

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

    setImagesLoaded(false);
    let cancelled = false;

    const warmup = async () => {
      const firstFrames = SCENE_KEYS.map((sceneKey) => loadFrame(sceneKey, 1));

      SCENE_KEYS.forEach((sceneKey) => {
        lastRequestedBatch.current[sceneKey] = -1;
      });

      preloadBatch("treetogate", 0);
      lastRequestedBatch.current.treetogate = 0;

      await Promise.all(firstFrames);

      if (!cancelled) {
        setImagesLoaded(true);
      }
    };

    void warmup();

    return () => {
      cancelled = true;
    };
  }, [isMobile, loadFrame, preloadBatch, setImagesLoaded]);

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
            context.clearRect(
              0,
              0,
              context.canvas.width,
              context.canvas.height,
            );
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

          SCENE_KEYS.forEach((sceneKey) => {
            const firstFrame = frameCache.current[sceneKey].get(1);
            if (firstFrame) {
              renderFrame(contexts[sceneKey], firstFrame);
            } else {
              void loadFrame(sceneKey, 1).then((img) => {
                if (img) {
                  renderFrame(contexts[sceneKey], img);
                }
              });
            }
          });

          const scenes = gsap.utils.toArray(".scene");
          gsap.set(wrapperRef.current, { height: `${scenes.length * 100}vh` });
          const ease = gsap.parseEase("power1.inOut");

          const handleResize = () => {
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
                Math.floor(progress / sceneLength),
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
                    easedProgress * (sceneConfigs[configKey].frameCount - 1),
                  );
                  const frameNumber = frameIndex + 1;

                  const currentBatchIndex = Math.floor(
                    (frameNumber - 1) / BATCH_SIZE,
                  );
                  if (
                    lastRequestedBatch.current[configKey] < currentBatchIndex
                  ) {
                    preloadBatch(configKey, currentBatchIndex);
                    lastRequestedBatch.current[configKey] = currentBatchIndex;
                  }

                  const batchStartFrame = currentBatchIndex * BATCH_SIZE + 1;
                  const thresholdFrame = Math.floor(
                    batchStartFrame + BATCH_SIZE * BATCH_TRIGGER_RATIO,
                  );

                  if (frameNumber >= thresholdFrame) {
                    const nextBatchIndex = currentBatchIndex + 1;
                    if (
                      lastRequestedBatch.current[configKey] < nextBatchIndex
                    ) {
                      preloadBatch(configKey, nextBatchIndex);
                      lastRequestedBatch.current[configKey] = nextBatchIndex;
                    }
                  }

                  requestAnimationFrame(() => {
                    const frame =
                      frameCache.current[configKey].get(frameNumber);
                    if (frame) {
                      renderFrame(contexts[configKey], frame);
                    } else {
                      void loadFrame(configKey, frameNumber).then((img) => {
                        if (img) {
                          renderFrame(contexts[configKey], img);
                        }
                      });
                    }
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
  }, [imagesLoaded, isMobile, loadFrame, preloadBatch]);

  if (isMobile) {
    return (
      <div className="bg-black text-white antialiased">
        <div ref={mainRef}>
          <section className="scene scene-1 min-h-screen flex items-center justify-center relative">
            <img
              src="https://i.ibb.co/F4GdxtFk/First-A.webp"
              alt="Daytime"
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-black/60 z-0"></div>
            <div className="relative z-10 w-full px-4">
              <Logo />
            </div>
          </section>

          <section className="scene scene-2 min-h-[100dvh] flex flex-col justify-center relative py-12 overflow-hidden">
            <img
              src="/first_location.webp"
              alt="Cave"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/70 z-0"></div>
            <div className="relative z-10 w-full flex-1 flex items-center py-8">
              <Suspense fallback={<ComponentLoader />}>
                <Hero2Section />
              </Suspense>
            </div>
          </section>

          <section className="scene scene-6 min-h-[100dvh] h-auto flex flex-col justify-center relative py-12 overflow-hidden">
            <img
              src="/first_location.webp"
              className="absolute inset-0 w-full h-full object-cover"
              alt=""
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/70 z-0"></div>
            <div className="relative z-10 w-full flex-1 py-8">
              <Suspense fallback={<ComponentLoader />}>
                <Aftermovies />
              </Suspense>
            </div>
          </section>

          <section className="scene scene-4 min-h-[100dvh] h-auto flex flex-col justify-center relative py-12 overflow-hidden">
            <img
              src="/first_location.webp"
              className="absolute inset-0 w-full h-full object-cover"
              alt=""
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/75 z-0"></div>
            <div className="relative z-10 w-full flex-1 flex items-center py-8">
              <Suspense fallback={<ComponentLoader />}>
                <Slider />
              </Suspense>
            </div>
          </section>

          <section className="scene scene-8 min-h-[100dvh] h-auto flex flex-col justify-center relative py-12 overflow-hidden">
            <img
              src="/first_location.webp"
              className="absolute inset-0 w-full h-full object-cover"
              alt=""
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/80 z-0"></div>
            <div className="relative z-10 w-full py-8">
              <Suspense fallback={<ComponentLoader />}>
                <Marchandise />
              </Suspense>
            </div>
          </section>

          <section className="w-screen min-h-[50vh] flex items-center justify-center bg-black relative py-16 overflow-hidden">
            <img
              src="/first_location.webp"
              className="absolute inset-0 w-full h-full object-cover"
              alt=""
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/85 z-0"></div>
            <div className="relative z-10 w-full">
              <Suspense fallback={<ComponentLoader />}>
                <X />
              </Suspense>
            </div>
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
              loading="eager"
            />
            <div className="absolute inset-0 flex items-center align-center justify-center">
              <Logo />
            </div>
          </section>
          {/*SECOND CANVAS*/}
          <section className="scene scene-2 absolute inset-0 opacity-0">
            <canvas ref={canvasRefs.treetogate} />
            <div className="absolute inset-0 flex items-center justify-center">
              <Suspense fallback={<ComponentLoader />}>
                <Hero2Section />
              </Suspense>
            </div>
          </section>
          <section className="scene scene-3 absolute inset-0 opacity-0">
            <canvas ref={canvasRefs.gatetoforest} />

            <div className="scene-content absolute inset-0 flex items-center justify-center ">
              <Suspense fallback={<ComponentLoader />}>
                <Aftermovies />
              </Suspense>
            </div>
          </section>

          <section className="scene scene-4 absolute inset-0 opacity-0">
            <img
              src="/first_location.webp"
              alt="Light Wizard"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="scene-content absolute inset-0 flex items-center justify-center">
              <Suspense fallback={<ComponentLoader />}>
                <Slider />
              </Suspense>
            </div>
          </section>
          <section className="scene scene-5 absolute inset-0 opacity-0">
            <canvas ref={canvasRefs.ForestToworld} />
            <div className="absolute scene-content inset-0 flex items-center justify-center">
              <Suspense fallback={<ComponentLoader />}>
                <Marchandise />
              </Suspense>
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
              <Suspense fallback={<ComponentLoader />}>
                <X />
              </Suspense>
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
