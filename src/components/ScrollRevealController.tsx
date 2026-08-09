import { useEffect } from 'react';

const REVEAL_SELECTOR = '[data-reveal]';

export function ScrollRevealController() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const registered = new WeakSet<Element>();

    const revealImmediately = (element: Element) => element.classList.add('is-revealed');
    const observer = reducedMotion || !('IntersectionObserver' in window)
      ? null
      : new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              entry.target.classList.add('is-revealed');
              observer?.unobserve(entry.target);
            });
          },
          { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
        );

    const register = (scope: ParentNode = document) => {
      scope.querySelectorAll(REVEAL_SELECTOR).forEach((element) => {
        if (registered.has(element)) return;
        registered.add(element);
        if (observer) observer.observe(element);
        else revealImmediately(element);
      });
    };

    register();
    root.classList.add('reveal-ready');

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          if (node.matches(REVEAL_SELECTOR)) {
            if (!registered.has(node)) {
              registered.add(node);
              if (observer) observer.observe(node);
              else revealImmediately(node);
            }
          }
          register(node);
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      root.classList.remove('reveal-ready');
      mutationObserver.disconnect();
      observer?.disconnect();
    };
  }, []);

  return null;
}
