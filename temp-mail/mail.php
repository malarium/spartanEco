<html>
<head>
  <meta charset="utf-8" />
  <meta http-equiv="Refresh" content="2;url=index.html" />
</head>

<?php
  $do = "biuro@webdogs.pl";
  if(isset($_POST['temat']) && isset($_POST['wiadomosc']) && isset($_POST['mail_zw'])) {
    $temat = $_POST['temat'];
    $tresc = $_POST['wiadomosc'];
    $mail = $_POST['mail_zw'];
    if($temat=="" || $tresc=="" || $mail=="") {
      echo "<h1><center>Uzupełnij wszystkie pola!</center></h1>";
      echo "<meta http-equiv='Refresh' content='2;url=kontakt' />";
    }
    else {
      $headers = "From: ".$mail."\r\n";
      $headers .= "Content-Type: text/plain; charset=UTF-8\n";
      $headers .= "Content-Transfer-Encoding: 8bit\n";
      if(mail($do, $temat, $tresc, $headers)){
        echo '<h1><center>Wiadomość wysłana, dziękujemy!</center></h1>';
      }
      else{
        echo '<h1><center>Błąd serwera, spróbuj ponownie później!</center></h1>';
      }
    }
  }
  else {
    echo 'Złe dane!';
  }
?>
</html>
