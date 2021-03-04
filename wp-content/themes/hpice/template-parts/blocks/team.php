<?php 

$team = get_field( 'team' );

?>

<div class="team" data-aos="fade">
    <?php if ( $team ) : ?>    
        <div class="w-full md:w-9/12">
            <?php foreach ( $team as $member ) : ?>
                <div class="mb-14">
                    <?php get_template_part( 'template-parts/components/member', '', $member ); ?>
                </div>
            <?php endforeach; ?>
        </div>    
    <?php endif; ?>
</div>