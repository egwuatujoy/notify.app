const unReadMessages = document.querySelectorAll(".unread");
const notifyCount = document.querySelector("#notify-count");

notifyCount.innerHTML = unReadMessages.length;

unReadMessages.forEach((unread) => {
  unread.addEventListener("click", () => {
    unread.classList.remove("unread");
    unread.children[0].children[1].children[0].lastElementChild.classList.add(
      "hidden"
    );

    const newUnReadMessages = document.querySelectorAll(".unread");
    notifyCount.innerHTML = newUnReadMessages.length;
  });
});
