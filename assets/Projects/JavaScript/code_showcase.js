function toggleMenu() {
    document.getElementById('navMenu').classList.toggle('show');
}
function openTab(evt, tabName) {
    const tabContents = document.getElementsByClassName("tab-content");
    const tabs = document.getElementsByClassName("tab");

    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }

    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

function JavaScript() {
    const name = document.getElementById("js-input").value;
    document.getElementById("js-output").innerText = "Hello, " + name + "!";
}

function promptAlert() {
    const name = prompt("Enter your name:");
    if (name) {
        alert("Hello, " + name + "!");
        document.getElementById("prompt-output").innerText = "Hello, " + name + "!";
    }
}
function alertFunction() {
    alert("Hello from the Alert!");
    document.getElementById("alert-output").innerText = "Hello from the Alert!";
}

function directAssignment() {
    const name = "Khushal";
    document.getElementById("direct-output").innerText = "Hello, " + name + "!";
}
function toggleMenu() {
    document.getElementById('navMenu').classList.toggle('show');
}

function showTab(tabName) {
    const tabContents = document.querySelectorAll('.tab-content');
    const tabs = document.querySelectorAll('.nav-links a');

    tabContents.forEach((content) => {
        content.classList.remove('active');
    });

    tabs.forEach((tab) => {
        tab.classList.remove('active');
    });

    document.getElementById(tabName).classList.add('active');
    const activeTab = document.querySelector(`[href="#${tabName}"]`);
    activeTab.classList.add('active');
}