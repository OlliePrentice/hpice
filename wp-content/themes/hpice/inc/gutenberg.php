<?php

add_filter('block_categories', function ($categories, $post) {
    return array_merge(
        [
            [
                'slug' => 'page-blocks',
                'title' => __('Page Blocks', 'theme-blocks'),
            ],

        ],
        $categories
    );
}, 10, 2);

add_action('acf/init', function () {

    if (function_exists('acf_register_block')) {

        acf_register_block_type([
            'name' => 'full_container',
            'title' => __('Full Container'),
            'mode' => 'preview',
            'render_template' => '/template-parts/containers/full-container.php',
            'category' => 'layout',
            'icon' => 'admin-comments',
            'supports' => array(
                'align' => false,
                'multiple' => true,
                'jsx' => true,
                'anchor' => true
            ),
        ]);

        acf_register_block([
            'name' => 'hero',
            'title' => __('Hero'),
            'description' => __('Title, background image and CTA\'s.'),
            'render_callback' => 'theme_block_render_callback',
            'category' => 'page-blocks',
            'keywords' => ['Hero'],
            'mode' => 'edit',
            'layout' => 'full',
            'supports' => array(
                'align' => false,
                'multiple' => true,
                'jsx' => true,
                'anchor' => true
            ),
        ]);

        acf_register_block([
            'name' => 'page_header',
            'title' => __('Page Header'),
            'description' => __('Page Header.'),
            'render_callback' => 'theme_block_render_callback',
            'category' => 'page-blocks',
            'keywords' => ['Header'],
            'mode' => 'edit',
            'layout' => 'full',
            'supports' => array(
                'align' => false,
                'multiple' => true,
                'jsx' => true,
                'anchor' => true
            ),
        ]);

        acf_register_block([
            'name' => 'copy_quick_links',
            'title' => __('Copy & Quick Links'),
            'description' => __('Copy & Quick Links.'),
            'render_callback' => 'theme_block_render_callback',
            'category' => 'page-blocks',
            'keywords' => ['Copy', 'Quick Links'],
            'mode' => 'edit',
            'layout' => 'full',
            'supports' => array(
                'align' => false,
                'multiple' => true,
                'jsx' => true,
                'anchor' => true
            ),
        ]);

        acf_register_block([
            'name' => 'box_links',
            'title' => __('Box Links'),
            'description' => __('Box Links.'),
            'render_callback' => 'theme_block_render_callback',
            'category' => 'page-blocks',
            'keywords' => ['Links'],
            'mode' => 'edit',
            'layout' => 'full',
            'supports' => array(
                'align' => false,
                'multiple' => true,
                'jsx' => true,
                'anchor' => true
            ),
        ]);

        acf_register_block([
            'name' => 'post_carousel',
            'title' => __('Post Carousel'),
            'description' => __('Post Carousel.'),
            'render_callback' => 'theme_block_render_callback',
            'category' => 'page-blocks',
            'keywords' => ['Post'],
            'mode' => 'edit',
            'layout' => 'full',
            'supports' => array(
                'align' => false,
                'multiple' => true,
                'jsx' => true,
                'anchor' => true
            ),
        ]);

        acf_register_block([
            'name' => 'copy_logo',
            'title' => __('Copy & Logo'),
            'description' => __('Copy & Logo.'),
            'render_callback' => 'theme_block_render_callback',
            'category' => 'page-blocks',
            'keywords' => ['Copy', 'Logo'],
            'mode' => 'edit',
            'layout' => true,
            'supports' => array(
                'align' => false,
                'multiple' => true,
                'jsx' => true,
                'anchor' => true
            ),
        ]);

        acf_register_block([
            'name' => 'accordion',
            'title' => __('Accordion'),
            'description' => __('Accordion.'),
            'render_callback' => 'theme_block_render_callback',
            'category' => 'page-blocks',
            'keywords' => ['Copy'],
            'mode' => 'edit',
            'layout' => true,
            'supports' => array(
                'align' => false,
                'multiple' => true,
                'jsx' => true,
                'anchor' => true
            ),
        ]);

        acf_register_block([
            'name' => 'signposts',
            'title' => __('Signposts'),
            'description' => __('Signposts.'),
            'render_callback' => 'theme_block_render_callback',
            'category' => 'page-blocks',
            'keywords' => ['Copy'],
            'mode' => 'edit',
            'layout' => true,
            'supports' => array(
                'align' => false,
                'multiple' => true,
                'jsx' => true,
                'anchor' => true
            ),
        ]);

        acf_register_block([
            'name' => 'team',
            'title' => __('Team'),
            'description' => __('Team.'),
            'render_callback' => 'theme_block_render_callback',
            'category' => 'page-blocks',
            'keywords' => ['Copy'],
            'mode' => 'edit',
            'layout' => true,
            'supports' => array(
                'align' => false,
                'multiple' => true,
                'jsx' => true,
                'anchor' => true
            ),
        ]);

        acf_register_block([
            'name' => 'testimonials',
            'title' => __('Testimonials'),
            'description' => __('Testimonials.'),
            'render_callback' => 'theme_block_render_callback',
            'category' => 'page-blocks',
            'keywords' => ['Copy'],
            'mode' => 'edit',
            'layout' => true,
            'supports' => array(
                'align' => false,
                'multiple' => true,
                'jsx' => true,
                'anchor' => true
            ),
        ]);

        acf_register_block([
            'name' => 'wysiwyg',
            'title' => __('WYSIWYG'),
            'description' => __('WYSIWYG.'),
            'render_callback' => 'theme_block_render_callback',
            'category' => 'page-blocks',
            'keywords' => ['Copy'],
            'mode' => 'edit',
            'layout' => true,
            'supports' => array(
                'align' => false,
                'multiple' => true,
                'jsx' => true,
                'anchor' => true
            ),
        ]);

        acf_register_block([
            'name' => 'calculator',
            'title' => __('Calculator'),
            'description' => __('Calculator.'),
            'render_callback' => 'theme_block_render_callback',
            'category' => 'page-blocks',
            'keywords' => ['Copy'],
            'mode' => 'edit',
            'layout' => true,
            'supports' => array(
                'align' => false,
                'multiple' => true,
                'jsx' => true,
                'anchor' => true
            ),
        ]);

        acf_register_block([
            'name' => 'form',
            'title' => __('Form'),
            'description' => __('Form.'),
            'render_callback' => 'theme_block_render_callback',
            'category' => 'page-blocks',
            'keywords' => ['Copy'],
            'mode' => 'edit',
            'layout' => true,
            'supports' => array(
                'align' => false,
                'multiple' => true,
                'jsx' => true,
                'anchor' => true
            ),
        ]);

        acf_register_block([
            'name' => 'services',
            'title' => __('Services'),
            'description' => __('Services.'),
            'render_callback' => 'theme_block_render_callback',
            'category' => 'page-blocks',
            'keywords' => ['Copy'],
            'mode' => 'edit',
            'layout' => true,
            'supports' => array(
                'align' => false,
                'multiple' => true,
                'jsx' => true,
                'anchor' => true
            ),
        ]);

        acf_register_block([
            'name' => 'post_loop',
            'title' => __('Post Loop'),
            'description' => __('Post Loop.'),
            'render_callback' => 'theme_block_render_callback',
            'category' => 'page-blocks',
            'keywords' => ['Copy'],
            'mode' => 'edit',
            'layout' => true,
            'supports' => array(
                'align' => false,
                'multiple' => true,
                'jsx' => true,
                'anchor' => true
            ),
        ]);

        acf_register_block([
            'name' => 'map',
            'title' => __('Map'),
            'description' => __('Map.'),
            'render_callback' => 'theme_block_render_callback',
            'category' => 'page-blocks',
            'keywords' => ['Copy'],
            'mode' => 'edit',
            'layout' => 'full',
            'supports' => array(
                'align' => false,
                'multiple' => true,
                'jsx' => true,
                'anchor' => true
            ),
        ]);

    }

});


function theme_block_render_callback($block)
{

    // convert name ("acf/testimonial") into path friendly slug ("testimonial")
    $slug = str_replace('acf/', '', $block['name']);

    // include a template part from within the "template-parts/block" folder
    if (!empty($block['layout']) && $block['layout']) {
        if($block['layout'] === 'full') {
            if (file_exists(get_theme_file_path("/template-parts/structures/layout-full-width.php"))) {
                include(get_theme_file_path("/template-parts/structures/layout-full-width.php"));
            }
        } else {
            if (file_exists(get_theme_file_path("/template-parts/structures/layout.php"))) {
                include(get_theme_file_path("/template-parts/structures/layout.php"));
            }
        }
    } else {
        if (file_exists(get_theme_file_path("/template-parts/blocks/{$slug}.php"))) {
            include(get_theme_file_path("/template-parts/blocks/{$slug}.php"));
        }
    }
}
