// Step 1. Check which mode are we currently on : Dark / Light
// Step 2. Modify the styles
// Step 3. Note the change in mode

var currentMode = "light";

const pageBody = document.getElementsByTagName("body")[0];
const paragraphs = document.querySelectorAll("p");
const headings = document.querySelectorAll("h1");

function toggleMode() {

    if (currentMode == "light") {
        pageBody.classList.add("darkBackground");
        paragraphs.forEach((p) => {
            p.classList.add("darkText");
        });
        headings.forEach((h) => {
            h.classList.add("darkText");
        });
        currentMode = "dark";
    } else if (currentMode == "dark") {
        pageBody.classList.remove("darkBackground");
        paragraphs.forEach((p) => {
            p.classList.remove("darkText");
        });
        headings.forEach((h) => {
            h.classList.remove("darkText");
        });
        currentMode = "light";
    }
}