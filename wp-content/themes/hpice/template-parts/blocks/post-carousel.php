<?php 

$heading    = get_field( 'heading' );
$post_type  = get_field( 'post_type' );
$_posts     = get_field( 'posts' );
$colour     = get_field( 'colour' );

if($post_type === 'service') {
    $_posts = get_field('services');
}

?>

<div class="post-carousel px-3 md:px-0 post-carousel--<?php echo $colour; ?>" data-aos="fade">
    <div class="container mx-auto">
        <?php if( $heading ) : ?>
            <div class="post-carousel__title inline-block relative z-10 py-3 px-5 rounded-full bg-<?php echo $colour; ?>">
                <h4 class="text-white text-lg sm:text-xl md:text-3xl font-bold mb-0"><?php echo $heading; ?></h4>
            </div>
        <?php endif; ?>
        <?php if( $_posts ) : ?>
            <div class="pl-4 md:px-14">
                <div class="post-carousel__items <?php echo $post_type === 'service' ? 'post-carousel__items--service' : 'post-carousel__items--post'; ?> swiper-container !overflow-visible">
                    <div class="swiper-wrapper">
                        <?php foreach( $_posts as $_post ) : ?>
                            <div class="post-carousel__item post-carousel__item--<?php echo $_post->post_type; ?> swiper-slide">
                                <?php

                                if( $_post->post_type === 'service' ) {
                                    get_template_part( 'template-parts/components/card', 'service', $_post ); 
                                } else {
                                    get_template_part( 'template-parts/components/card', 'post', $_post ); 
                                }

                                ?>
                            </div>
                        <?php endforeach; ?>
                    </div>
                    <?php if ( $post_type === 'service' ) : ?>
                        <div class="swiper-button-next"></div>
                    <?php endif; ?>
                </div>
            </div>
        <?php endif; ?>
    </div>
</div>