<?php

$excerpt = excerpt( 200, get_the_ID() );

?>

<article class="post-listing">
    <a href="<?php echo get_the_permalink(); ?>">
        <h4 class="text-2xl post-listing__heading"><?php echo get_the_title(); ?></h4>
        <?php if ( $excerpt ) : ?>
            <div class="text-black leading-snug">
                <?php echo $excerpt; ?>
            </div>
        <?php endif; ?>
        <span class="text-xs block mb-5 text-black"><?php echo __('By') . ' '; ?><?php the_author(); ?><?php echo ' ' . __('In News') . ' ' . __('Posted') . ' ' . get_the_date('l, jS F, Y'); ?></span>
        <span class="btn btn--sm"><?php echo __('Read More'); ?></span>
    </a>
</article>