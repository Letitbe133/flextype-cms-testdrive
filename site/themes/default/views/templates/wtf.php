<?php namespace Flextype ?>
<?php Themes::view('partials/head')->display() ?>
<h1><?= $entry['title'] ?></h1>
<?= $entry['content'] ?>
<!-- <?php 
    if (isset($entry['image'])) {
?>
    <img src="<?= Images::getImageUrl($entry['slug'] .'/'. $entry['image'], ['w' => '670', 'dpr' => '2']) ?>">
<?php
}
?> -->
<?php Themes::view('partials/footer')->display() ?>
