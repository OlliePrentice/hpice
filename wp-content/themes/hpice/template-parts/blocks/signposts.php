<?php

$heading    = get_field( 'heading' );
$image      = wp_get_attachment_image_url( get_field( 'image' ), 'large' );

?>

<div class="signposts" data-aos="fade">
    <div class="flex flex-wrap -mx-4">
        <div class="px-4 w-full md:w-9/12 relative z-10">
            <?php if ( $heading ) : ?>
                <h4 class="text-sm sm:text-base md:text-xl font-bold mb-4 md:mb-8"><?php echo $heading; ?></h4>
            <?php endif; ?>

            <?php if ( have_rows( 'links' ) ) : ?>
                <ul class="signposts__links remove-bullets pl-0">
                    <?php while ( have_rows( 'links' ) ) : the_row(); ?>
                        <?php $link = get_sub_field( 'link' ); ?>
                        <?php if ( $link ) : ?>
                            <li class="mb-5 sm:mb-8">
                                <a class="btn btn--box btn--box-short btn--no-arrow btn--gray shadow-card" href="<?php echo $link['url']; ?>" <?php echo $link['target'] ? 'target="_blank"' : ''; ?>><?php echo $link['title']; ?></a>
                            </li>
                        <?php endif; ?>
                    <?php endwhile; ?>
                </ul>
            <?php endif; ?>
        </div>
        <div class="px-4 flex-1 relative hidden md:block">
            <?php if ( $image ) : ?>
                <div class="bg-cover bg-center signposts__image rounded-4xl absolute top-6 -left-14 transform -translate-y-1/2" style="background-image: url(<?php echo $image; ?>);"></div>
            <?php endif; ?>
        </div>
    </div>
</div>