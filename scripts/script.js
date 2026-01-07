
/* 
   cv 
 */
document.querySelectorAll(".disabled").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    alert("CV coming soon 👀");
  });
});


/*btn stuff*/
document.querySelectorAll(".js-magnetic").forEach(btn => {
  btn.addEventListener("mousemove", e => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translate(0, 0)";
  });
});

/* 
   3. ACTIVE NAV LINK
 */

const currentPage = location.pathname.split("/").pop();

document.querySelectorAll(".navbar a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});


/* 
   4. MICRO POLISH (OPTIONAL)
 */

// Fade-in sections on load
document.querySelectorAll("section").forEach((sec, i) => {
  sec.style.opacity = "0";
  sec.style.transform = "translateY(10px)";

  setTimeout(() => {
    sec.style.transition = "0.4s ease";
    sec.style.opacity = "1";
    sec.style.transform = "translateY(0)";
  }, i * 100);
});
