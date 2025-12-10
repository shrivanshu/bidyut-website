// Utility for dynamically loading GSAP and its plugins
type ModuleDefault<T> = T extends { default: infer D } ? D : never;

type GSAPModule = Awaited<typeof import('gsap')>;
type GSAPInstance = ModuleDefault<GSAPModule>;

type ScrollTriggerModule = Awaited<typeof import('gsap/ScrollTrigger')>;
type ScrollTriggerInstance = ScrollTriggerModule extends { ScrollTrigger: infer P }
  ? P
  : ModuleDefault<ScrollTriggerModule>;

type SplitTextModule = Awaited<typeof import('gsap/SplitText')>;
type SplitTextInstance = SplitTextModule extends { SplitText: infer P }
  ? P
  : ModuleDefault<SplitTextModule>;

let gsapLoaded = false;
let scrollTriggerLoaded = false;
let splitTextLoaded = false;
let cachedGsap: GSAPInstance | null = null;
let cachedScrollTrigger: ScrollTriggerInstance | null = null;
let cachedSplitText: SplitTextInstance | null = null;

export const loadGSAP = async (): Promise<GSAPInstance> => {
  if (!gsapLoaded) {
    const module = (await import('gsap')) as {
      default?: GSAPInstance;
      gsap?: GSAPInstance;
    };
    const instance = module.default ?? module.gsap;
    if (!instance) {
      throw new Error('GSAP export missing');
    }
    cachedGsap = instance;
    gsapLoaded = true;
  }
  if (!cachedGsap) {
    throw new Error('GSAP failed to initialize');
  }
  return cachedGsap;
};

export const loadScrollTrigger = async (): Promise<ScrollTriggerInstance> => {
  if (!scrollTriggerLoaded) {
    const gsap = await loadGSAP();
    const module = (await import('gsap/ScrollTrigger')) as {
      default?: ScrollTriggerInstance;
      ScrollTrigger?: ScrollTriggerInstance;
    };
    const plugin = module.ScrollTrigger ?? module.default;
    if (!plugin) {
      throw new Error('ScrollTrigger export missing');
    }
    gsap.registerPlugin(plugin as never);
    cachedScrollTrigger = plugin;
    scrollTriggerLoaded = true;
  }
  if (!cachedScrollTrigger) {
    throw new Error('ScrollTrigger failed to initialize');
  }
  return cachedScrollTrigger;
};

export const loadSplitText = async (): Promise<SplitTextInstance> => {
  if (!splitTextLoaded) {
    const gsap = await loadGSAP();
    const module = (await import('gsap/SplitText')) as {
      default?: SplitTextInstance;
      SplitText?: SplitTextInstance;
    };
    const plugin = module.SplitText ?? module.default;
    if (!plugin) {
      throw new Error('SplitText export missing');
    }
    gsap.registerPlugin(plugin as never);
    cachedSplitText = plugin;
    splitTextLoaded = true;
  }
  if (!cachedSplitText) {
    throw new Error('SplitText failed to initialize');
  }
  return cachedSplitText;
};
