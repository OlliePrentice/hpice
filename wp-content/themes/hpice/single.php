<?php

get_header();

if ( is_singular( 'post' ) ) {

    $blog_id = get_option('page_for_posts');

    $page_header_fields = [
        'heading'               => get_block_field( 'heading', $blog_id )['heading'],
        'heading_background'    => get_block_field( 'heading_background', $blog_id )['heading_background'],
        'image'                 => get_block_field( 'image', $blog_id )['image'],
        'filter'                => get_block_field( 'filter', $blog_id )['filter'],
    ];

    echo '<section>';
        get_template_part( 'template-parts/blocks/page-header', '', $page_header_fields );
    echo '</section>';
}

get_the_content() ? the_content() : get_template_part('template-parts/components/error');

get_footer();

