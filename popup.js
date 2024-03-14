document.addEventListener("DOMContentLoaded", function () {
 const checkbox = document.getElementById("openInNewTab");
 checkbox.checked = JSON.parse(localStorage.getItem("openInNewTab")) || false;

 function updateCheckboxState() {
    localStorage.setItem("openInNewTab", checkbox.checked);
 }
 checkbox.addEventListener("change", updateCheckboxState);

 let listItems = document.querySelectorAll("li");

 function initializePage() {
    let originalContent = document.body.innerHTML;
    listItems = document.querySelectorAll("li");
    listItems.forEach((li) => {
      li.addEventListener("click", function () {
        let website = this.getAttribute("data-website");

        if (checkbox.checked) {
          window.open(website, '_blank');
        } else {
          const newWindow = window.open("", "", "width=600,height=600,top=-100,left=50");
          setTimeout(() => {
            newWindow.location.href = website; // Перенаправляем новое окно на URL
            newWindow.document.body.appendChild(createBackButton());
          }, 100);
        }
      });
    });
 }

 initializePage();
});
