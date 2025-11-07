// Utility for dynamically loading GSAP and its plugins
let gsapLoaded = false;
let ScrollTriggerLoaded = false;
let SplitTextLoaded = false;

export const loadGSAP = async () => {
  if (!gsapLoaded) {
    const gsap = (await import('gsap')).gsap;
    gsapLoaded = true;
    return gsap;
  }
  return (await import('gsap')).gsap;
};

export const loadScrollTrigger = async () => {
  if (!ScrollTriggerLoaded) {
    const gsap = await loadGSAP();
    const ScrollTrigger = (await import('gsap/ScrollTrigger')).ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);
    ScrollTriggerLoaded = true;
    return ScrollTrigger;
  }
  return (await import('gsap/ScrollTrigger')).ScrollTrigger;
};

export const loadSplitText = async () => {
  if (!SplitTextLoaded) {
    const gsap = await loadGSAP();
    const SplitText = (await import('gsap/SplitText')).SplitText;
    gsap.registerPlugin(SplitText);
    SplitTextLoaded = true;
    return SplitText;
  }
  return (await import('gsap/SplitText')).SplitText;
};