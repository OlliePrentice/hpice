<?php

$image = wp_get_attachment_image_url( get_field( 'image' ), 'full' );

?>

<div class="box-links py-4 px-3 md:px-0 relative" data-aos="fade">
    <div class="container mx-auto">
        <div class="flex flex-wrap -mx-4">
            <div class="px-4 w-full md:w-8/12">
                <div class="max-w-2xl">
                    <?php if ( have_rows( 'boxes' ) ) : ?>
                        <div class="box-links__rows">
                            <?php while ( have_rows( 'boxes' ) ) : the_row(); ?>
                                <?php 
                                
                                $layout = get_sub_field( 'layout' ); 
                                $row = get_row(true);
                                $graphic = get_sub_field( 'graphic' );
                                
                                ?>
                                <div class="mb-7">
                                    <?php if ( $layout === 'excerpt' ) : ?>
                                        <div class="flex flex-wrap -mx-4">
                                            <div class="px-4 flex-1">
                                                <?php get_template_part( 'template-parts/components/box-link', '', $row ); ?>
                                            </div>
                                            <?php if ( $graphic ) : ?>
                                                <div class="px-4 hidden lg:block">
                                                    <img src="<?php echo $graphic['url']; ?>" alt="<?php echo $graphic['alt']; ?>" class="relative left-3">
                                                </div>
                                            <?php endif; ?>
                                        </div>
                                    <?php else : ?>
                                        <?php 
                                        
                                        $link = get_sub_field( 'link' ); 
                                        $copy = get_sub_field( 'copy' );
                                        
                                        ?>
                                        <?php if ( $link ) : ?>
                                            <?php
                                                
                                            if ( $copy ) {
                                                $link['title'] = str_replace( ['<p>', '</p>'], '', $copy );
                                            }

                                            $link['classes'] = 'btn--tertiary btn--box';
                                                
                                            ?>
                                            <div>
                                                <?php get_template_part( 'template-parts/components/button', '',  $link ); ?>
                                            </div>
                                        <?php endif; ?>
                                    <?php endif; ?>
                                </div>

                            <?php endwhile; ?>
                        </div>    
                    <?php endif; ?>
                </div>
            </div>
            <div class="px-4 hidden md:block">
                <?php if($image) : ?>
                    <div class="box-links__image bg-cover bg-center -right-12 filter filter--quinary" style="background-image: url(<?php echo $image; ?>);"></div>    
                <?php endif; ?>
            </div>
        </div>
    </div>
</div>