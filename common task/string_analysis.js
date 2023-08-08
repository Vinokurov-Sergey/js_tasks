const path = "/users/download/index.html";

function isHtml(path) {
    if (path.indexOf('.html') != -1) {
        return true;
    } else {
        return false;
    }
}

console.log(isHtml(path));