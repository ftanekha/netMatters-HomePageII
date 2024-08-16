<?php
    include "../fetch-news-items.php";

    $newsItems = fetchNewsItems();
?>

<?php foreach($newsItems as $newsItem): ?>
    <div class="latest-news-item <?=$newsItem["category"];?>">
        <a class="latest-news-item-category news_bespoke_software news_<?=$newsItem["serviceCategory"];?>" href="#">
        <?=$newsItem["category"];?>
        </a>
        <img class="latest-news-photo" src="<?=$newsItem["photoSource"];?>" alt="<?=$newsItem["photoAlt"];?>" title="<?=$newsItem["photoAlt"];?>">
        <div class="news-item-body">
            <h3 class="<?=$newsItem["theme"];?>">
                <a href="#"> <?=$newsItem["heading"];?> </a>
            </h3>
            <p> <?=$newsItem["leadingParagraph"];?>...</p>
            <button class="<?=$newsItem["theme"];?>">READ MORE</button>
            <hr>
            <footer class="latest-news-footer">
                <img src="assets/images/news/netmatters-mini-logo.webp" alt="netmatters logo">
                <strong>Posted by <?=$newsItem["postedBy"];?></strong>
                <br>
                <small><?=$newsItem["date"];?></small>
            </footer>
        </div>
    </div>
<?php endforeach; ?>