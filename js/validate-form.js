"use strict";

var form = document.querySelector(".formWithValidation"); //подключаем поля формы
var validateButton = form.querySelector(".validateButton"); //подключаем кнопку отправки формы
var firstName = form.querySelector(".firstName"); // подключаем поле имя
var lastName = form.querySelector(".lastName"); // подключаем полк фамилия
var email = form.querySelector(".email"); // подключаем поле почта
var password = form.querySelector(".password"); //подключаем пороль
var passwordConfirmation = form.querySelector(".passwordConfirmation"); //подключаем поле копия пороля
var data = form.querySelector(".data"); //подключаем поле день варенья
var fields = form.querySelectorAll(".field")


var generateError = function (text) {//вспомогательная ф-ция гененирующая DOM элемент error
    var error = document.createElement("div");
    error.className = "error";
    error.style.color = "red";
    error.style.fontSize = "16px";
    error.style.right = "100px";
    error.style.position = "absolute";
    error.style.zIndex = "2";
    error.innerHTML = text;
    return error;
  }


form.addEventListener("submit", function (event) {
    event.preventDefault(); //запрещаем отправку формы по умолчанию с помощью методоа preventDefault
    
    var errors = form.querySelectorAll(".error");//удаление старой ошибки

    for (var i = 0; i < errors.length; i++) {
        errors[i].remove();
    };

    for (var i = 0; i < fields.length; i++) { //проверим есть ли пустые поля
        if (!fields[i].value) { 
            console.log("Пожалуйста, заполните все поля!", fields[i]);
            //Новое поле для сообщения пользователю:
            var error = generateError("Пожалуйста, заполните все поля!");
            
            //привязка к каждому полю:
            form[i].parentElement.appendChild(error, fields[i]) //вставить перед каждым элементом
            }
        };

       
        if (firstName.value.length <= 2 || firstName.value.length >= 35) {
            console.log("Введите корректное имя");
            var error = generateError("Введите корректное имя!");
            firstName.parentElement.appendChild(error, firstName);
          }

          if (lastName.value.length <= 1 || lastName.value.length >= 35) {
            console.log("Введите корректную фамилию!");
            var error = generateError("Введите корректную фамилию!");
            lastName.parentElement.appendChild(error, lastName);
          }

        
        if (password.value !== passwordConfirmation.value) {//сверка обоих полей паролей
            console.log("не равны");
            //Новое поле для сообщения пользователю:
            var error = generateError("Пароли не совпадают!");
            password.parentElement.appendChild(error, password);//вставить перед полем ввода пороля
          }


        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        var address = email.value;
        if(reg.test(address) == false) {
            console.log("Не корректный адрес почты!");
            var error = generateError("Не корректный адрес почты!");
            email.parentElement.appendChild(error, email);
        }


        var pattern =/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
        var age = data.value;
        if (pattern.test(age) == false) {
            console.log("Не корректная дата!");
            var error = generateError("Не корректная дата!");
            data.parentElement.appendChild(error, data);
        }

          
    });

 