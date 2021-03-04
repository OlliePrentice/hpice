<?php 

$copy = get_field( 'copy' );
$logos = get_field( 'logos' );

?>

<div class="copy-logo" data-aos="fade">
    <div class="flex -mx-4">
        <div class="md:w-9/12 px-4">
            <?php if ( $copy ) : ?>
                <div class="remove-last-margin">
                    <?php echo $copy; ?>
                </div>
            <?php endif; ?>
        </div>
        <div class="w-3/12 px-4">
            <?php if ( $logos ) : ?>
                <div class="pt-10 w-16 md:w-auto">
                    <?php foreach ( $logos as $logo ) : ?>
                        <img src="<?php echo $logo['url']; ?>" alt="<?php echo $logo['alt']; ?>" class="mx-auto mb-4">
                    <?php endforeach; ?>
                </div>
            <?php endif; ?>
        </div>
    </div>
</div>