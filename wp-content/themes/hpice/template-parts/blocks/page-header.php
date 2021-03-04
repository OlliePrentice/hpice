<?php

$fields = !empty( $args ) ? $args : '';

$logo                   = get_field( 'logo', 'options' );
$heading                = !empty( $fields['heading'] ) ? $fields['heading'] : get_field( 'heading' );
$heading_background     = !empty( $fields['heading_background'] ) ? $fields['heading_background'] : get_field('heading_background');
$image                  = !empty( $fields['image'] ) ? wp_get_attachment_image_url( $fields['image'], 'full' ) : wp_get_attachment_image_url( get_field( 'image' ), 'full' );
$filter                 = !empty( $fields['filter'] ) ? $fields['filter'] : get_field( 'filter' );

?>

<div class="page-header" data-aos="fade">
    <div class="container mx-auto">
        <div class="flex flex-wrap -mx-4">
            <div class="px-4 w-1/2">
                <div class="pt-6 lg:pt-5">
                    <?php if ( $logo ) : ?>
                        <div class="mb-8 sm:mb-16 md:mb-20">
                            <a href="<?php echo home_url('/'); ?>" class="inline-block w-28 sm:w-40 md:w-auto">
                                <img src="<?php echo $logo['url']; ?>" alt="<?php echo $logo['alt']; ?>">
                            </a>
                        </div>
                    <?php endif; ?>
                    <?php if ( $heading ) : ?>
                        <h1 class="text-lg sm:text-xl md:text-3xxl leading-snug !hidden md:!inline-block <?php echo $heading_background ? 'btn text-center pointer-events-none ' . $heading_background : ''; ?>"><?php echo $heading; ?></h1>
                    <?php endif; ?>
                </div>
            </div>
            <div class="px-4 w-1/2">
                <div class="md:ml-12">
                    <?php if ( $image ) : ?>
                        <div class="page-header__image-wrap bg-<?php echo $filter; ?>">
                            <div class="page-header__image filter filter--<?php echo $filter; ?> bg-cover bg-center" style="background-image: url(<?php echo $image; ?>);"></div>
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        </div>
        <div>
            <?php if ( $heading ) : ?>
                <h1 class="text-lg sm:text-xl md:text-3xxl pt-3 leading-snug md:hidden <?php echo $heading_background ? 'btn text-center pointer-events-none ' . $heading_background : ''; ?>"><?php echo $heading; ?></h1>
            <?php endif; ?>
        </div>
    </div>
</div>