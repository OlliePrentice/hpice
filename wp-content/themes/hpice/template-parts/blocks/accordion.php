<?php if ( have_rows( 'items' ) ) : ?>
    <div class="accordion relative z-10" data-aos="fade">
        <div class="flex flex-wrap">
            <div class="w-full md:w-9/12">
                <div>
                    <?php while ( have_rows( 'items' ) ) : the_row(); ?>
                        <?php
                        
                        $heading = get_sub_field( 'heading' );
                        $copy = get_sub_field( 'copy' );
                        
                        ?>
                        
                        <?php if ( $heading && $copy ) : ?>
                            <div class="dropdown mb-5 sm:mb-8">
                                <div class="dropdown__trigger bg-secondary rounded-3xl pl-4 sm:pl-6 pr-12 sm:pr-20 py-4 sm:py-5 relative shadow-card cursor-pointer">
                                    <h6 class="text-primary text-sm sm:text-lg md:text-xl mb-0 font-bold"><?php echo $heading; ?></h6>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-7 h-7 sm:w-12 sm:h-12 text-white absolute right-4 sm:right-6 top-1/2 transform -translate-y-1/2">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                                <div class="dropdown__content hidden">
                                    <div class="pt-6 pl-6 md:pl-14 pb-1">
                                        <?php echo $copy; ?>
                                    </div>
                                </div>
                            </div>
                        <?php endif; ?>
                    <?php endwhile; ?>
                </div>
            </div>
        </div>
    </div>
<?php endif; ?>