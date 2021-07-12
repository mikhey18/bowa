<html>
<head>
<title>Форма заявки с сайта</title>
</head>
<body>
<?php
//проверяем, существуют ли переменные в массиве POST
if(!isset($_POST['name']) and !isset($_POST['email'])){
 ?> 
 <form action="send.php" method="post">
<input type="text" name="fio" placeholder="Укажите ФИО" required>
<input type="text" name="email" placeholder="Укажите e-mail" required>
<input type="submit" value="send">
</form>

<?php
} else {
 //показываем форму
 $name = $_POST['name'];
 $email = $_POST['email'];
 $phone = $_POST['phone'];
 $message = $_POST['message'];



 $name = htmlspecialchars($name);
 $email = htmlspecialchars($email);
 $phone = htmlspecialchars($phone);
 $message = htmlspecialchars($message);

 $name = urldecode($name);
 $email = urldecode($email);
 $phone = urldecode($phone);
 $message = urldecode($message);


 $name = trim($name);
 $email = trim($email);
 $phone = trim($phone);
 $message = trim($message);

 if (mail("office.russia@bowa-medical.com", "Заявка с сайта", "Имя:".$name.". E-mail: ".$email.". Телефон: ".$phone.". Сообщение: ".$message ,"office.russia@bowa-medical.com \r\n")){
 echo "Message sent successfully";
 
 } else {
 echo "There were errors sending your message";
 }
}
?>


</body>
</html>
