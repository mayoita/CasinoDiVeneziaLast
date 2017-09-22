<?php
/**
 * Created by PhpStorm.
 * User: massimomoro
 * Date: 02/08/17
 * Time: 11:15
 */
?>

<section class="regular">
    <?php foreach ($rows as $row_number => $columns): ?>
        <?php foreach ($columns as $column_number => $item): ?>
                    <?php print $item; ?>
        <?php endforeach; ?>
    <?php endforeach; ?>
</section>

