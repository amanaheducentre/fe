/**
 * Composable untuk menambahkan animasi saat element masuk viewport
 * Menggunakan Intersection Observer API
 */
export const useScrollAnimation = (options?: IntersectionObserverInit) => {
  const elements = ref<Map<Element, boolean>>(new Map());

  const defaultOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
    ...options,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        elements.value.set(entry.target, true);
        entry.target.classList.add("animate-in");
        // Optional: unobserve setelah animated untuk optimize performance
        observer.unobserve(entry.target);
      }
    });
  }, defaultOptions);

  const observeElement = (el: Element | null) => {
    if (el) {
      el.classList.add("will-animate");
      observer.observe(el);
      elements.value.set(el, false);
    }
  };

  const observeElements = (selector: string) => {
    const els = document.querySelectorAll(selector);
    els.forEach((el, index) => {
      el.classList.add("will-animate");
      // Add stagger delay class untuk setiap element
      const delayClass = `delay-${Math.min(index * 100, 500)}`;
      el.classList.add(delayClass);
      observer.observe(el);
      elements.value.set(el, false);
    });
  };

  onBeforeUnmount(() => {
    observer.disconnect();
  });

  return {
    observeElement,
    observeElements,
    observer,
  };
};
