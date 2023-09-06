const success = document.getElementById('success');
const error = document.getElementById('error');
const email = document.getElementById('iemail');

email.addEventListener('change', ()=> {
    var field = email.value;
    var user = field.substring(0, field.indexOf("@"));
    var domain = field.substring(field.indexOf("@") + 1, field.length);

    if ((user.length >= 1) &&
        (domain.length >= 3) &&
        (user.search("@") == -1) &&
        (domain.search("@") == -1) &&
        (user.search(" ") == -1) &&
        (domain.search(" ") == -1) &&
        (domain.search(".") != -1) &&
        (domain.indexOf(".") >= 1)&&
        (domain.lastIndexOf(".") < domain.length - 1)) {
    success.style.display = 'block';
    error.style.display = 'none';
    } else{
    success.style.display = 'none'
    error.style.display = 'block';
    }
});