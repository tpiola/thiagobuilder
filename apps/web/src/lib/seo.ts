type SeoInput = {
  title: string;
  description: string;
  canonicalPath?: string;
};

function setMeta(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export function applySeo(input: SeoInput) {
  document.title = input.title;
  setMeta('description', input.description);

  if (input.canonicalPath) {
    const href = new URL(input.canonicalPath, window.location.origin).toString();
    let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!el) {
      el = document.createElement('link');
      el.setAttribute('rel', 'canonical');
      document.head.appendChild(el);
    }
    el.setAttribute('href', href);
  }
}

