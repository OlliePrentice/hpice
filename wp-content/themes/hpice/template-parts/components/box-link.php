<?php

$heading    = !empty( $args['heading'] ) ? $args['heading'] : '';
$copy       = !empty( $args['copy'] ) ? $args['copy'] : '';
$link       = !empty( $args['link']) ? $args['link'] : '';

?>

<?php if ( $link ) : ?>
<div class="box-link">
    <a href="<?php echo $link['url']; ?>" <?php echo $link['target'] ? 'target="_blank"' : ''; ?> class="bg-secondary hover:bg-primary py-8 px-5 md:px-8 rounded-3xl block theme-dark shadow-lg relative">
        <?php if ( $heading) : ?>
            <h5 class="font-bold uppercase lg:pr-10"><?php echo $heading; ?></h5>    
        <?php endif; ?>
        <?php if ( $copy ) : ?>
            <div class="text-base mb-16 lg:pr-10">
                <?php echo $copy; ?>
            </div>    
        <?php endif; ?>
        <div class="relative text-white pr-16">
            <span class="font-semibold text-xl md:text-2xl"><?php echo $link['title']; ?></span>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="btn__chevron">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
        </div>
    </a>
</div>
<?php endif; ?>