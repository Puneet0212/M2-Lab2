window.addEventListener("load", () => {
    "use strict";
    const form = window.document.getElementById("empForm");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const id = window.document.getElementById("id").value;
        const name = window.document.getElementById("name").value;
        const ext = window.document.getElementById("ext").value;
        const email = window.document.getElementById("email").value;
        const dept = window.document.getElementById("department").value;
        console.log("ID: " + id + "\nName: " + name + "\nExtension: " + ext + "\nEmail: " + email + "\nDepartment: " + dept);
    })
})

