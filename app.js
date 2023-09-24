let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.show();
tg.MainButton.setParams({
    text: 'Создать задачу',
    is_visible: true
});
$('#repeat').change(function() {
    if(this.checked) {
        $('#dateTime').prop('type', 'time');
        $('#frequency').show();
    } else {
        $('#dateTime').prop('type', 'datetime-local');
        $('#frequency').hide();
    }
});

$('#target').change(function() {
    if(this.checked) {
        $('#value').show();
        $('#valueType').show();
    } else {
        $('#value').hide();
        $('#valueType').hide();
    }
});
let task_name = document.getElementById("task_name").value;
let myCheck = document.getElementById("myCheck").value;
let data = {
    task_name: task_name,
    myCheck: myCheck
}
Telegram.WebApp.onEvent('mainButtonClicked', function(){
    var taskData = $('#taskForm').serializeArray().reduce(function(obj, item) {
        obj[item.name] = item.value;
        return obj;
    }, {});
    tg.sendData(JSON.stringify(taskData));
    tg.close();
});