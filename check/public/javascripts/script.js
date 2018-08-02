function response() {  
    let _email = document.getElementById('signup').getElementsByTagName('input')[0].value;
    let _name = document.getElementById('signup').getElementsByTagName('input')[1].value;
    let _pass = document.getElementById('signup').getElementsByTagName('input')[2].value;
    let c_pass = document.getElementById('signup').getElementsByTagName('input')[3].value;
    let userObj = {
        email : _email,
        name : _name,
        pass : _pass
    };
    var xhttp;
    xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log('dohaoid');
        }
    };
  xhttp.open("POST" , "/confirm?signup=" + JSON.stringify(userObj) , true);
  xhttp.send();
}

function login() {
    let login_div = document.getElementById('login');
    let _email = login_div.getElementsByTagName('input')[0].value;
    let _pass = login_div.getElementsByTagName('input')[1].value;
    let loginObj = {
        email : _email,
        pass : _pass
    };
    var xhttp;
    xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    };
    xhttp.open("POST" , "/login?signup=" + JSON.stringify(loginObj) , true);
    xhttp.send();
}
