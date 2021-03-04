<?php 

$_post = $args;

$position   = get_field( 'team_position', $_post->ID );
$address    = get_field( 'team_address', $_post->ID );
$thumbnail  = get_the_post_thumbnail( $_post->ID, 'medium_square' );

?>

<article class="team-member">
    <div class="flex flex-wrap -mx-4 mb-12">
        <div class="px-4 flex-1">
            <div class="bg-gray-100 p-5 rounded-2xl team-member__details mb-4">
                <?php if ( $position ) : ?>
                    <h6 class="text-lg italic text-black font-medium mb-8"><?php echo $position; ?></h6>
                <?php endif; ?>
                
                <p class="mb-0 font-medium leading-snug"><?php echo get_the_title( $_post->ID ); ?></p>
                <?php if ( $address ) : ?>
                    <div class="font-light leading-snug">
                        <?php echo $address; ?>
                    </div>
                <?php endif; ?>

                <?php if ( have_rows( 'team_links', $_post->ID ) ) : ?>
                    <ul class="pt-8 leading-snug mb-3">
                        <?php while ( have_rows( 'team_links', $_post->ID ) ) : the_row(); ?>
                            <?php $link = get_sub_field( 'link', $_post->ID ); ?>
                            <?php if ( $link ) : ?>
                                <li class="mb-0">
                                    <a href="<?php echo $link['url']; ?>" <?php echo $link['target'] ? 'target="_blank"' : ''; ?>><?php echo $link['title']; ?></a>
                                </li>
                            <?php endif; ?>
                        <?php endwhile; ?>
                    </ul>
                <?php endif; ?>
            </div>
        </div>
        <div class="px-4">
            <?php if ( $thumbnail ) : ?>
                <div class="team-member__image">
                    <?php echo $thumbnail; ?>
                </div>    
            <?php endif; ?>
        </div>
    </div>
    <?php if ( $_post->post_content ) : ?>
        <div>
            <?php echo apply_filters( 'the_content', $_post->post_content ); ?>
        </div>
    <?php endif; ?>
</article>