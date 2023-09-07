
//side bar view code
const showSidebarBtn = document.getElementById("showSidebarBtn");
const sidebar = document.getElementById("sidebar");


showSidebarBtn.addEventListener("click", function () {

  if (sidebar.style.display === "none" || sidebar.style.display === "") {
    sidebar.style.display = "block"; 
  } else {
    sidebar.style.display = "none"; 
  }
});


// accordion 
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach((item) => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');
    const icon = item.querySelector('.accordion-icon');

    header.addEventListener('click', () => {
        if (content.style.display === 'block') {
            content.style.display = 'none';
            header.classList.remove('open');
            icon.textContent = '+';
        } else {
            closeAllItems();
            content.style.display = 'block';
            header.classList.add('open');
            icon.textContent = '-';
        }
    });

    function closeAllItems() {
        accordionItems.forEach((otherItem) => {
            otherItem.querySelector('.accordion-content').style.display = 'none';
            otherItem.querySelector('.accordion-header').classList.remove('open');
            otherItem.querySelector('.accordion-icon').textContent = '+';
        });
    }
});
