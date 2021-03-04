<?php

$testimonials = get_field( 'items' );

?>

<?php if($testimonials) : ?>
    <div class="testimonials" data-aos="fade">
        <div class="w-full md:w-9/12">
            <?php foreach ( $testimonials as $testimonial ) : ?>
                <div class="mb-14">
                    <?php get_template_part( 'template-parts/components/testimonial', '', $testimonial); ?>    
                </div>
            <?php endforeach; ?>
        </div>
    </div>
<?php endif; ?>