<?php

$json = [];

 //показываем форму
 $name = $_POST['name'];
 $email = $_POST['email'];
 $phone = $_POST['phone'];
 $message = $_POST['message'];
 $g_recaptcha_response = $_POST['token'];
 
 $reCAPTCHA_secret_key = '6LcCyqYaAAAAAIp_2T82ko4xR_5kPqBiKd0ykt77';
 $g_recaptcha_allowable_score = 0.5;
 
 
 //get the IP address of the origin of the submission
$ip = $_SERVER['REMOTE_ADDR'];

//construct the url to send your private Secret Key, token and (optionally) IP address of the form submitter to Google to get a spam rating for the submission (I've saved '$reCAPTCHA_secret_key' in config.php)
$url =  'https://www.google.com/recaptcha/api/siteverify?secret=' . urlencode($reCAPTCHA_secret_key) . '&response=' . urlencode($g_recaptcha_response) . '&remoteip=' . urlencode($ip);

//save the response, e.g. print_r($response) prints { "success": true, "challenge_ts": "2019-07-24T11:19:07Z", "hostname": "your-website-domain.co.uk", "score": 0.9, "action": "contactForm" }
$response = file_get_contents($url);

//decode the response, e.g. print_r($responseKeys) prints Array ( [success] => 1 [challenge_ts] => 2019-07-24T11:19:07Z [hostname] => your-website-domain.co.uk [score] => 0.9 [action] => contactForm )
$responseKeys = json_decode($response, true);

//check if the test was done OK, if the action name is correct and if the score is above your chosen threshold (again, I've saved '$g_recaptcha_allowable_score' in config.php)
if ($responseKeys["success"] && $responseKeys["action"] == 'submit') {
    if ($responseKeys["score"] >= $g_recaptcha_allowable_score) {
        //send email with contact form submission data to site owner/ submit to database/ etc
        //redirect to confirmation page or whatever you need to do
		

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

		if (mail("office.russia@bowa-medical.com", "Заявка с сайта", "Имя:".$name.". E-mail: ".$email.". Телефон: ".$phone.". Сообщение: ".$message ,"evavilo@nologostudio.ru \r\n"))
		{

			//echo "Message sent successfully";
			$json['success'] = true;

			$str = date('d.m.Y H:i:s').' / '.$name.' / '.$email.' / '.$phone.' / '.str_replace(array("\r\n", "\r", "\n"),' ',$message).PHP_EOL;
			$exist = '';
			if(file_exists('data/data.txt'))
				$exist = file_get_contents('data/data.txt');
			$str = $exist.$str;

			$f = fopen('data/data.txt','w');
			fwrite($f,$str);
			fclose($f);


		} else {

			$json['error'] = "There were errors sending your message";

		}
		
		
		
		
    } elseif ($responseKeys["score"] < $g_recaptcha_allowable_score) {
        //failed spam test. Offer the visitor the option to try again or use an alternative method of contact.
    }
} elseif($responseKeys["error-codes"]) { //optional
    //handle errors. See notes below for possible error codes
    //personally I'm probably going to handle errors in much the same way by sending myself a the error code for debugging and offering the visitor the option to try again or use an alternative method of contact
} else {
    //unkown screw up. Again, offer the visitor the option to try again or use an alternative method of contact.
}



echo json_encode($json);
die;
?>