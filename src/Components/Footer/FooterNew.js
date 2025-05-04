import $ from "jquery";
import styles from "./Footer.module.css";

$(function () {
  const wrapperClass = `.${styles["footer-links-wrapper"]}`;
  const someClass = styles.someClass;
  const expandedClass = styles.expanded;

  function toggleFooter() {
    if ($(window).width() <= 768) {
      $(wrapperClass).addClass(someClass);
    } else {
      $(wrapperClass).removeClass(someClass);
      $(`${wrapperClass} ul`).show(); 
    }
  }

  toggleFooter(); 

  $(window).on("resize", toggleFooter);

  // Footer collapse functionality
  $(document).on("click", `${wrapperClass} h3`, function () {
    $(this).next("ul").slideToggle();
    $(this).toggleClass(expandedClass);
  });
});
