<?php 

$buttons = get_field( 'buttons_buttons' );
$copy = get_field( 'copy' );
$logo = get_field( 'logo' );
$hide_signposts_on_mobile = get_field( 'hide_signposts_on_mobile' );

?>

<div class="copy-quick-links" data-aos="fade">
    <div class="container mx-auto">

            <?php if ( $buttons ) : ?>
                <div class="max-w-2xl text-center">
                    <?php get_template_part( 'template-parts/components/buttons', '', $buttons ); ?>
                </div>
            <?php endif; ?>

                <div class="flex -mx-3 mb-6">

                    <?php if ( $copy ) : ?>
                        <div class="px-3 sm:pt-5 md:max-w-2xl">
                            <?php echo $copy; ?>
                        </div>
                    <?php endif; ?>
            
                    <div class="px-3">
                        <?php if ( $logo ) : ?>
                            <div class="w-16 md:w-auto">
                                <img src="<?php echo $logo['url']; ?>" alt="<?php echo $logo['alt']; ?>">
                            </div>
                        <?php endif; ?>
                    </div>
                </div>
          
            <?php if ( have_rows( 'signposts' ) ) : ?>
                <div class="max-w-2xl <?php echo $hide_signposts_on_mobile ? 'hidden lg:block' : ''; ?>">

                    <?php while ( have_rows( 'signposts' ) ) : the_row(); ?>
                        <?php $link = get_sub_field( 'link' ) ?>

                        <?php if ( $link ) : ?>
                            <div class="mb-5">
                                <?php
                                
                                $link['classes'] = 'btn--gray btn--box';
                                get_template_part( 'template-parts/components/button', '', $link ); 
                                
                                ?>
                            </div>
                        <?php endif; ?>
                    <?php endwhile; ?>

                </div>
            <?php endif; ?>
      


    </div>
</div>