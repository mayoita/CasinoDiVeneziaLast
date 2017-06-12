<?php
/**
 * Created by PhpStorm.
 * User: massimomoro
 * Date: 29/04/17
 * Time: 11:50
 */
/**
 * This replaces the webform date selectors with a single text box & date popup.
 */
$idKey = str_replace('_', '-', $component[form_key]);
?>

<?php print render($element['hour']); ?>
<?php print render($element['minute']); ?>
