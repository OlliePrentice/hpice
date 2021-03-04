<?php if ( have_posts() ) : ?>
    <div class="post-loop" data-aos="fade">
        <div class="w-full md:w-9/12">
            <?php while ( have_posts() ) : the_post(); ?>
                <div class="mb-16">
                    <?php get_template_part( 'template-parts/components/post-listing' ); ?>
                </div>
            <?php endwhile; ?>
        </div>
    </div>
<?php endif; ?>
