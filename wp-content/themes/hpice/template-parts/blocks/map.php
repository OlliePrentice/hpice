<?php 
$location = get_field('location');
if( $location ): ?>
    <div class="acf-map" data-zoom="16" data-aos="fade">
        <div class="marker" data-lat="<?php echo esc_attr($location['lat']); ?>" data-lng="<?php echo esc_attr($location['lng']); ?>"></div>
    </div>
<?php endif; ?>