<div class="latest-news-item <?=$newsItemVisiBility;?>"> 
</div>
    <a class='latest-news-item-category news_bespoke_software news_telecoms-services' href='#'>
    <?= $newsItemCategory ?>
    </a>
    <img class='latest-news-photo' src="<?=$newsItemPhotoSource;?>" alt="<?=$newsItemPhotoAlt;?>" title="<?=$newsItemPhotoAlt;?>">
    <div class='news-item-body'>
        <h3 class="<?=$newsItemTheme;?>">
            <a href='#'> <?= $newsItemHeading ?> </a>
        </h3>
        <p> <?= $newsItemLeadingParagraph ?> </p>
        <button class="<?=$newsItemTheme;?>">READ MORE</button>
        <hr>
        <footer class='latest-news-footer'>
            <img src='assets/images/news/netmatters-mini-logo.webp' alt='netmatters logo'>
            <strong>Posted by <?= $newsItemPostedBy ?>...</strong>
            <br>
            <small><?= $newsItemPostDate ?></small>
        </footer>
    </div>
</div>
