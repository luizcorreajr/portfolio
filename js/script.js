// ==================== LOGIN ====================
const btn_login = document.querySelector(".btn-login");
const modalLogin = document.getElementById("modalLogin");
const closeModal = document.getElementById ("closeModal");
const userName = document.getElementById("userName");
    const userName_sessionStorage = sessionStorage.getItem("name");
const btnLoginFinish = document.getElementById("btnLoginFinish");
// = ==================== OPTIONS USER ====================
const options_user = document.getElementById("options-user");
const close_options_user = document.getElementById("close-options-user");
const logout_options_user = document.getElementById("logout-options-user");
// ==================== HOME PAGE ====================
const welcome_userName = document.getElementById("welcome_userName");
var user_li = document.getElementById("user_li");



// ==================== MODAL ====================
btn_login.addEventListener("click", () => {
    modalLogin.style.display = 'flex';
});

closeModal.addEventListener("click", () => {
    modalLogin.style.display = 'none';
    userName.style.borderColor = 'rgb(158, 158, 158)';
});

btnLoginFinish.addEventListener("click", () => {

    if (userName.value == "") {
        userName.style.borderColor = 'red';
        window.alert("É necessário preencher todos os campos para fazer o login!")
    } else {
        sessionStorage.setItem("name", userName.value);

        modalLogin.style.display = 'none'
        userName.style.borderColor = 'rgb(158, 158, 158)';

        window.location.reload();

    };
});



// = ==================== OPTIONS USER ====================
user_li.addEventListener("click", ()=> {
    options_user.style.display = 'flex';
});

close_options_user.addEventListener("click", ()=> {
    options_user.style.display = 'none';
});
    
logout_options_user.addEventListener("click", ()=> {
    sessionStorage.removeItem("name");
    options_user.style.display = 'none';
    btn_login.classList.remove("hide");
    user_li.classList.add("hide");
    welcome_userName.innerText = "Welcome";
    window.location.reload();
});



// ==================== HOME PAGE ====================
user_li.innerText += userName_sessionStorage;

if (!userName_sessionStorage == "") {
    btn_login.classList.add("hide");
    user_li.classList.remove("hide");
};

if (!userName_sessionStorage == "" && userName_sessionStorage.length < 10) {
    welcome_userName.innerHTML += userName_sessionStorage;
} else if (!userName_sessionStorage == "" && userName_sessionStorage.length > 10) {
    welcome_userName.innerHTML += "<br>" + userName_sessionStorage;
};