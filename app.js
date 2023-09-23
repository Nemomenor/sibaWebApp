let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.show();
tg.MainButton.setParams({
    text: 'Создать задачу',
    is_visible: true
});
Telegram.WebApp.onEvent('mainButtonClicked', function(){
    tg.close();
});