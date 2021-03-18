<?php 

$_post = $args;

$thumbnail  = get_the_post_thumbnail( $_post->ID, 'thumbnail' );
$company    = get_field( 'testimonial_company', $_post->ID );


?>

<article class="testimonial">
    <div>
        <?php echo apply_filters( 'the_content', $_post->post_content ); ?>
    </div>
    <div class="flex flex-wrap -mx-3 pt-2">
        
        <?php if ( $thumbnail ) : ?>
            <div class="px-3">
                <?php echo $thumbnail; ?>
            </div>
        <?php endif; ?>

        <div class="px-3">
            <h6 class="text-lg font-medium italic mb-0 text-black"><?php echo get_the_title( $_post->ID ); ?></h6>
            <?php if ( $company ) : ?>
                <span class="italic"><?php echo $company; ?></span>
            <?php endif; ?>
        </div>
    </div>
</article>