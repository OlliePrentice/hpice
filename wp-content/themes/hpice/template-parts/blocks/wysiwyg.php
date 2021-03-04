<?php 

$copy   = get_field( 'copy' );
$image  = wp_get_attachment_image_url( get_field( 'image' ), 'large' );

?>

<?php if ( $copy ) : ?>
    <div class="wysiwyg" data-aos="fade">
        <div class="flex flex-wrap -mx-4">
            <div class="w-full md:w-9/12 px-4">
                <?php if ( is_singular( 'post' ) ) : ?>
                    <h4 class="text-2xl wysiwyg__heading leading-snug"><?php echo get_the_title(); ?></h4>
                <?php endif; ?>
                <div class="leading-snug">
                    <?php echo $copy; ?>
                </div>
                <?php if ( is_singular( 'post' ) ) : ?>
                    <span class="text-xs block pt-2 mb-5 text-black"><?php echo __( 'By' ) . ' '; ?><?php the_author(); ?><?php echo ' ' . __( 'In News' ) . ' ' . __( 'Posted' ) . ' ' . get_the_date( 'l, jS F, Y' ); ?></span>
                    <div class="pt-4">
                        <?php 

                        $button = [ 'url' => get_the_permalink( get_option( 'page_for_posts' ) ), 'target' => '', 'title' => __('More Articles'), 'classes' => 'btn--sm btn--arrow' ]; 
                        get_template_part( 'template-parts/components/button', '', $button );

                        ?>
                    </div>
                <?php endif; ?>
            </div> 
            <div class="w-3/12 px-4 relative hidden md:block">
                <?php if ( $image ) : ?>
                    <div class="bg-cover bg-center wysiwyg__image rounded-4xl absolute top-0 left-14" style="background-image: url(<?php echo $image; ?>);"></div>
                <?php endif; ?>    
            </div>
        </div>
    </div>
<?php endif; ?>