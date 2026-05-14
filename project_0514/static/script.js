// 星空
const starsContainer = document.getElementById("stars");

for (let i = 0; i < 150; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.animationDuration = (Math.random() * 3 + 2) + "s";

    starsContainer.appendChild(star);
}


// ================= 頁面切換 =================
function goTo(type) {

    document.getElementById("lobbyPage").style.display = "none";
    document.getElementById("fortunePage").style.display = "none";
    document.getElementById("lovePage").style.display = "none";
    document.getElementById("careerPage").style.display = "none";
    document.getElementById("llmPage").style.display = "none";

    if (type === "fortune")
        document.getElementById("fortunePage").style.display = "flex";

    if (type === "love")
        document.getElementById("lovePage").style.display = "flex";

    if (type === "career")
        document.getElementById("careerPage").style.display = "flex";

    if (type === "llm")
        document.getElementById("llmPage").style.display = "flex";
}


// ================= 返回大廳 =================
function backLobby() {

    document.getElementById("fortunePage").style.display = "none";
    document.getElementById("lovePage").style.display = "none";
    document.getElementById("careerPage").style.display = "none";
    document.getElementById("llmPage").style.display = "none";

    document.getElementById("lobbyPage").style.display = "flex";
}


// ================= 抽運勢（AJAX） =================
function showFortune() {

    fetch("/get_fortune")
        .then(res => res.text())
        .then(data => {
            document.getElementById("fortuneResult").innerText = data;
        });
}