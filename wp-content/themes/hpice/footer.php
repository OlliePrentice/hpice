</main>

<?php

$accrediation = get_field( 'accreditation', 'options' );
$copy = get_field( 'footer_copy', 'options' );

?>

<footer class="main-footer bg-quaternary theme-dark py-10 sm:py-16 md:py-24 px-10 remove-bullets">
    <div class="container mx-auto">
        <div class="flex flex-wrap">
            <div class="w-full md:w-5/12 text-center md:text-left mb-8">
                <?php if ( $accrediation ) : ?>
                    <div class="text-zero -mx-4">
                        <?php foreach ( $accrediation as $logo ) : ?>
                            <div class="inline-block align-top px-4 sm:mr-10 m-3">
                                <img src="<?php echo $logo['url']; ?>" alt="<?php echo $logo['alt']; ?>">
                            </div>
                        <?php endforeach; ?>
                    </div>
                <?php endif; ?>
            </div>
            <div class="w-full sm:w-6/12 md:w-3/12">
                <?php if ( $copy ) : ?>
                    <div class="text-xs">
                        <?php echo $copy; ?>
                    </div>
                <?php endif; ?>
            </div>
            <div class="w-full sm:w-6/12 md:w-4/12">
                <nav class="main-footer__nav text-xs sm:text-right">
                    <?php wp_nav_menu( array( 'theme_location' => 'footer', 'container' => false ) ); ?>
                </nav>
            </div>
        </div>
    </div>
</footer><!-- .mastfoot -->

<?php $google_maps_key = get_field( 'google_maps_api_key', 'options' ); ?>

<?php if ( $google_maps_key ) : ?>
<script src="https://maps.googleapis.com/maps/api/js?key=<?php echo $google_maps_key; ?>"></script>
<?php endif; ?>

<?php wp_footer(); ?>

    
</body>
</html>
