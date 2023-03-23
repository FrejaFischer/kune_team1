window.addEventListener("load", startCommunity);

function startCommunity() {
  document.querySelector("#about_button").classList.add("button_active");

  document.querySelector("#about_button").addEventListener("click", showAbout);
  document.querySelector("#volunteer_button").addEventListener("click", showVolunteer);
}

function showAbout() {
  document.querySelector("#volunteer").classList.add("hide");
  document.querySelector("#about").classList.remove("hide");
  document.querySelector("#volunteer_button").classList.remove("button_active");
  document.querySelector("#about_button").classList.add("button_active");

  document.querySelector("#volunteer_button").addEventListener("click", showVolunteer);
}

function showVolunteer() {
  document.querySelector("#volunteer_button").classList.add("button_active");
  document.querySelector("#about_button").classList.remove("button_active");

  document.querySelector("#volunteer").classList.remove("hide");
  document.querySelector("#about").classList.add("hide");

  document.querySelector("#about_button").addEventListener("click", showAbout);
}
