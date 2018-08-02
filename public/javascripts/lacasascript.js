function response() {  
    
    let userObj = {
        email : _email,
        name : _name,
        pass : _pass
    };
    var xhttp;
    xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if(this.responseText == 'SUCCESS') {
                window.location.
            }
        }
    };
  xhttp.open("POST" , "/confirm" , true);
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

function foo() {
    console.log('1233');
}
