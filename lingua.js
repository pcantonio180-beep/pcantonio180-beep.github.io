// Italiano / inglese: tutto il testo è doppio (<span lang="it"> e <span lang="en">), il CSS mostra solo la lingua scelta.
(function () {
  const root = document.documentElement;
  let l = null;
  try { l = localStorage.getItem("wp-lingua"); } catch (e) {}
  if (!l) l = (navigator.language || "it").toLowerCase().startsWith("it") ? "it" : "en";
  function set(x) {
    root.dataset.l = x; root.lang = x;
    document.querySelectorAll("[data-set]").forEach(b => b.classList.toggle("on", b.dataset.set === x));
    try { localStorage.setItem("wp-lingua", x); } catch (e) {}
  }
  document.querySelectorAll("[data-set]").forEach(b => b.addEventListener("click", () => set(b.dataset.set)));
  set(l);
})();
