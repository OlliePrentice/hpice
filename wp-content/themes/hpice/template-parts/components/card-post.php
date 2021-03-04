<?php 

$_post = $args;

$excerpt = excerpt(31, $_post->ID);

?>

<article class="card-post">
    <a href="<?php echo get_the_permalink( $_post->ID ); ?>" class="shadow-card block rounded-4xl py-5 px-6 sm:px-8 md:px-12">
        <div class="card-post__title">
            <h5 class="text-lg sm:text-2xl text-black font-medium"><?php echo get_the_title( $_post->ID ); ?></h5>
        </div>
        <?php if($excerpt) : ?>
            <div class="flex flex-wrap items-end -mx-1 pb-3">
                <div class="px-1 flex-1 text-sm sm:text-base font-medium remove-last-margin text-black">
                    <?php echo $excerpt; ?>
                </div>
                <div class="px-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-7 h-7 sm:w-10 sm:h-10 text-gray-400 relative block -mr-6 bottom-16 sm:bottom-0 right-0 sm:-right-2">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        <?php endif; ?>
    </a>
</article>