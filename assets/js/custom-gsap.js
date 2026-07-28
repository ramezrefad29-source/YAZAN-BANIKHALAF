/***************************************************
==================== JS INDEX ======================
****************************************************

01. Smooth Scroll Js
02. Char Animations (No SplitText DOM alteration)
03. Button Hover Js
04. Banner Title
05. Footer Title
06. Portfolio Panel Js
07. Image Cliping Effect
08. Hover Reveal

****************************************************/

(function ($) {
  "use strict";

  ////////////////////////////////////////////////////
  // 01. Fast Native Smooth Scroll
  function smoothScroll() {
    $(".smooth a").on("click", function (event) {
      var target = $(this.getAttribute("href"));
      if (target.length) {
        event.preventDefault();
        $("html, body").stop().animate({
          scrollTop: target.offset().top - 100
        }, 400);
      }
    });
  }
  smoothScroll();

  // ScrollTrigger Register
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    gsap.config({ nullTargetWarn: false });

    // Safe, non-destructive element fade-ins (No text character splitting)
    if ($(".tw-char-animation").length > 0) {
      gsap.utils.toArray(".tw-char-animation").forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
            toggleActions: "play none none none"
          },
          duration: 0.5,
          y: 20,
          opacity: 0,
          ease: "power2.out"
        });
      });
    }

    if ($(".tw-itm-title").length > 0) {
      gsap.utils.toArray(".tw-itm-title").forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
            toggleActions: "play none none none"
          },
          duration: 0.5,
          y: 15,
          opacity: 0,
          ease: "power2.out"
        });
      });
    }
  }

  ////////////////////////////////////////////////////
  // 04. Button Hover Js
  $(".tw-hover-btn").on("mouseenter", function (e) {
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
    $(this).find(".tw-hover-btn-circle-dot").css({ top: y, left: x });
  });
  $(".tw-hover-btn").on("mouseout", function (e) {
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
    $(this).find(".tw-hover-btn-circle-dot").css({ top: y, left: x });
  });

  ////////////////////////////////////////////////////
  // Hover Reveal Effect
  if ($(".hover__reveal-item").length) {
    const hoverRevealItems = document.querySelectorAll(".hover__reveal-item");
    hoverRevealItems.forEach((item) => {
      item.addEventListener("mousemove", (e) => {
        const bg = item.querySelector(".hover__reveal-bg");
        if (!bg) return;
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        bg.style.left = `${x}px`;
        bg.style.top = `${y}px`;
      });
    });
  }

})(jQuery);
