<?php 

$heading    = get_field( 'heading' );
$copy       = get_field( 'copy' );
$form_id    = get_field( 'form_id' );

?>

<div class="form" data-aos="fade">
    <?php if ( $heading ) : ?>
        <h4 class="text-xl font-bold"><?php echo $heading; ?></h4>
    <?php endif; ?>
    <?php if ( $copy ) : ?>
        <div>
            <?php echo $copy; ?>
        </div>
    <?php endif; ?>
    <?php if ( $form_id ) : ?>
        <div class="pt-3">
            <?php gravity_form( $form_id, false, false, false, null, true); ?>
        </div>
    <?php endif; ?>
</div>