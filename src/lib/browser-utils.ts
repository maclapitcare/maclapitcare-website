// Browser utilities for SSR compatibility

export const isBrowser = () => typeof window !== 'undefined';

export const safeDocument = {
  title: {
    get: () => isBrowser() ? document.title : '',
    set: (title: string) => {
      if (isBrowser()) {
        document.title = title;
      }
    }
  },
  querySelector: (selector: string) => isBrowser() ? document.querySelector(selector) : null,
  createElement: (tagName: string) => isBrowser() ? document.createElement(tagName) : null,
  head: isBrowser() ? document.head : null
};

export const safeWindow = {
  location: {
    get href() {
      return isBrowser() ? window.location.href : '';
    },
    set href(url: string) {
      if (isBrowser()) {
        window.location.href = url;
      }
    }
  },
  open: (url: string, target?: string) => {
    if (isBrowser()) {
      window.open(url, target);
    }
  },
  setTimeout: (callback: Function, delay: number) => {
    if (isBrowser()) {
      return window.setTimeout(callback, delay);
    }
    return 0;
  },
  addEventListener: (event: string, handler: EventListener) => {
    if (isBrowser()) {
      window.addEventListener(event, handler);
    }
  },
  removeEventListener: (event: string, handler: EventListener) => {
    if (isBrowser()) {
      window.removeEventListener(event, handler);
    }
  }
};

export const setMetaTag = (property: string, content: string) => {
  if (!isBrowser()) return;
  
  let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('property', property);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
};

export const setMetaDescription = (content: string) => {
  if (!isBrowser()) return;
  
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", content);
  }
};