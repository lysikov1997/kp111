<?php 


$email = $_POST['email'];
$phone = $_POST['phone'];
$name = $_POST['name'];
$review = $_POST['review'];

$email = htmlspecialchars($email);
$phone = htmlspecialchars($phone);
$name = htmlspecialchars($name);
$review = htmlspecialchars($review);

$email = urldecode($email);
$phone = urldecode($phone);
$name = urldecode($name);
$review = urldecode($review);

$email = trim($email);
$phone = trim($phone);
$name = trim($name);
$review = trim($review);

if (mail("lysikov1997@list.ru",
    "Новый отзыв с сайта",
		"Почта: " .$email. "\n".
		"Телефон: " .$phone. "\n".
		"Имя: " .$name. "\n".
		"Отзыв: " .$review. "\n",
		"From no-reply@mydomain.ru \r\n")
) {
	echo ('Письмо успешно отправлено!');
}
else {
	echo ('Есть ошибки! Проверьте данные...');
}



?>