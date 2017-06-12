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
<input type="text" placeholder="Data" id="edit-submitted-<?php print $idKey ?>" class="form-text
<?php print implode(' ',$calendar_classes); ?>" alt="<?php print t('Open popup calendar'); ?>" title="<?php print t('Open popup calendar'); ?>" />