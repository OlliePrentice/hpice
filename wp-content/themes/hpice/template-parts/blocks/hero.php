<?php 



$logo               = get_field( 'logo', 'options' );
$heading_line_1     = get_field( 'heading_line_1' );
$heading_line_2     = get_field( 'heading_line_2' );
$images             = get_field( 'images' );

?>

<div class="hero pb-6" data-aos="fade">
    <div class="container mx-auto">
        <div class="flex flex-wrap -mx-4">
            <div class="w-1/2 px-4">
                <div class="pt-6 sm:pb-8">
                    <?php if ( $logo ) : ?>
                        <div class="mb-8">
                            <a href="<?php echo home_url('/'); ?>" class="inline-block w-28 sm:w-40 md:w-auto">
                                <img src="<?php echo $logo['url']; ?>" alt="<?php echo $logo['alt']; ?>">
                            </a>
                        </div>
                    <?php endif; ?>
                    <?php if ( $heading_line_1 ) : ?>
                        <h1 class="mb-5 sm:mb-0"><?php echo $heading_line_1; ?></h1>
                    <?php endif; ?>
                    <?php if ( $heading_line_2 ) : ?>
                        <h2><?php echo $heading_line_2; ?></h2>
                    <?php endif; ?>
                </div> 
            </div>
            <div class="w-1/2 px-4">
                <?php if ( $images ) : ?>   
                    <div class="hero__carousel-wrap relative ml-2 sm:ml-12">
                        <div class="hero__carousel swiper-container theme-dark">
                            <div class="swiper-wrapper">
                                <?php foreach ( $images as $image_id ) : ?>
                                    <?php $image = wp_get_attachment_image_url( $image_id, 'large' ); ?>
                                    <?php if ( $image ) : ?>
                                        <div class="hero__carousel-item swiper-slide">
                                            <div class="hero__carousel-image bg-cover bg-center filter" style="background-image: url(<?php echo $image; ?>);"></div>
                                        </div>
                                    <?php endif; ?>
                                <?php endforeach; ?>
                            </div>
                            <div class="swiper-pagination hidden sm:block"></div>
                        </div>
                    </div>
                <?php endif; ?>
            </div>
        </div>   
    </div>
</div>