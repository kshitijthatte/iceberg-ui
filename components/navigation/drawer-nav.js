const headerNavigationIcon = document.querySelector(
    ".header-navigation-icon"
  );

  const drawer = document.querySelector(".drawer");
  headerNavigationIcon.addEventListener("click", () => {
    drawer.style.display === "none"
      ? (drawer.style.display = "flex")
      : (drawer.style.display = "none");
  });