let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.show();
tg.MainButton.setParams({
    text: 'Создать задачу',
    is_visible: true
});


    let input = form.querySelector('#taskName');
    let errorMsg = form.querySelector('.error');
    if (!input.value) {
        tg.MainButton.hide();
        errorMsg.style.display = 'block'; // show the error message
    } else {
        tg.MainButton.show();
        errorMsg.style.display = 'none'; // hide the error message
    }
let task_name = document.getElementById("task_name").value;
let myCheck = document.getElementById("myCheck").value;
let data = {
    task_name: task_name,
    myCheck: myCheck
}
