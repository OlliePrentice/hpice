<?php 

$services = get_field( 'services' );

?>

<?php if ( $services ) : ?>
    <div class="services" data-aos="fade">
        <div class="w-full md:w-9/12">
            <ul class="p-0 remove-bullets">
                <?php foreach ( $services as $service ) : ?>
                    <?php $button = [ 'url' => get_the_permalink( $service->ID ), 'target' => '', 'title' => get_the_title( $service->ID ), 'classes' => 'btn--box btn--alt btn--box-short btn--md btn--white-arrow' ]; ?>
                    <li class="mb-4 sm:mb-8 md:mb-12">
                        <?php get_template_part('template-parts/components/button', '', $button); ?>
                    </li>
                <?php endforeach; ?>
            </ul>
        </div>
    </div>
<?php endif; ?>