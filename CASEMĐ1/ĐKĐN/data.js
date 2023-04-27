let users = JSON.parse(localStorage.getItem("users"));
if (users === null){
    users = [];
}
function register() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username === '' || password === ''){
        document.getElementById('z').innerHTML = "Tài khoản hoặc mật khẩu cần nhập đủ thông tin";

    } else if (!checkUserName(username)){
        document.getElementById('z').innerHTML = " Trùng tài khoản";

    } else {
        let user = new User(username,password);
        users.push(user);
        document.getElementById('z').innerHTML = "Tài khoản đăng ký thành công";

        localStorage.setItem("users", JSON.stringify(users));
    }
}
function checkUserName(name) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === name){
            return false;
        }
    }
    return true;
}

function checkUser(username, password) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password){
            return true;
        }
    }
    return false;
}
function login() {
    users = JSON.parse(localStorage.getItem("users"));
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (checkUser(username,password)){
        location.href ="http://localhost:63342/helloWord/CASEM%C4%901/D%E1%BB%B1%20%C3%81n%20Web%20C%E1%BB%A7a%20V%C6%B0%C6%A1ng/web.html?_ijt=kj9uikjnc19p9tsb2bbmnii407&_ij_reload=RELOAD_ON_SAVE";
    } else {
        document.getElementById('z').innerHTML = "Tài khoản hoặc mật khẩu không chính xác";
    }
}