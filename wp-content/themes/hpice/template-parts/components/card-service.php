<?php 

$_post = $args;
$excerpt = excerpt(150, $_post->ID);

?>

<article class="card-service">
    <a href="<?php echo get_the_permalink( $_post->ID ); ?>" class="shadow-card block rounded-4xl pt-12 pl-6 sm:pl-12 pr-6 pb-6">
        <div class="card-service__title -ml-6 sm-ml-12 mr-8 sm:mr-12 p-3 sm:p-4 mb-5 rounded-2xl">
            <h5 class="text-sm sm:text-lg text-white mb-0 uppercase font-medium"><?php echo get_the_title( $_post->ID ); ?></h5>
        </div>
        <?php if($excerpt) : ?>
            <div class="remove-last-margin text-black font-medium text-sm sm:text-base">
                <?php echo $excerpt; ?>
            </div>
        <?php endif; ?>
    </a>
</article>