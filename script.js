// const modalContainer = document.getElementById("modal-container");
// const modal = document.getElementById("modal");
// const modalShow = document.getElementById("show-modal");
// const modalClose = document.getElementById("close-modal");
// const bookmarkForm = document.getElementById("bookmark-form");
// const websiteNameEl = document.getElementById("website-name");
// const websiteUrlEl = document.getElementById("website-url");
// const bookmarksContainer = document.getElementById("bookmarks-container");
// const delBtn = document.getElementsByClassName("del-btn");

// let deleteIBtn = document.createElement("i");
// let urlDiv = document.createElement("div");
// let urlIcon = document.createElement("i");
// let urlLink = document.createElement("a");
// let newBookmark = document.createElement("div");

// // Show Modal, Focus on Input
// function showModal() {
//   modal.classList.add("show-modal");
//   websiteNameEl.focus();
// }

// // Close Modal
// function closeModal() {
//   modal.classList.remove("show-modal");
// }

// // Add bookmark to the bookmark's container
// function addBookmark(e) {
//   e.preventDefault();
//   if (websiteNameEl.value === "" || websiteUrlEl.value === "") {
//     return alert("Fill the inputs");
//   } else {
//     deleteIBtn.className = "fas fa-times del-btn";
//     //   deleteIBtn.id = "delete-bookmark";
//     deleteIBtn.title = "Delete Bookmark";
//     deleteIBtn.addEventListener("click", delBookmark);

//     urlDiv.className = "name";
//     urlIcon.className = `fab fa-${websiteNameEl.value}`;
//     urlLink.textContent = `${websiteNameEl.value}`;
//     urlLink.setAttribute("href", `https://${websiteUrlEl.value}`);
//     urlLink.setAttribute("target", "_blank");

//     urlDiv.appendChild(urlIcon);
//     urlDiv.appendChild(urlLink);

//     newBookmark.className = "item";
//     newBookmark.appendChild(deleteIBtn);
//     newBookmark.appendChild(urlDiv);
//     bookmarksContainer.appendChild(newBookmark);
//     bookmarkForm.reset();
//   }
// }

// // delete Bookmark
// function delBookmark(e) {
//   console.log(e);
//   e.target.parentNode.remove();
//   //   bookmarksContainer.removeChild(newBookmark);
//   //   console.log(e);
// }

// // Event Listeners
// Array.from(delBtn).forEach((btn) => {
//   btn.addEventListener("click", delBookmark);
// });

// console.log(delBtn);
// bookmarkForm.addEventListener("submit", addBookmark);
// modalShow.addEventListener("click", showModal);
// modalClose.addEventListener("click", closeModal);
