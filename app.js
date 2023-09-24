let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.show();
tg.MainButton.setParams({
    text: 'Создать задачу',
    is_visible: true
});
let task_name = document.getElementById("task_name").value;
let myCheck = document.getElementById("myCheck").value;
let data = {
    task_name: task_name,
    myCheck: myCheck
}
Telegram.WebApp.onEvent('mainButtonClicked', function(){
    tg.sendData(JSON.stringify(data));
    tg.close();
});