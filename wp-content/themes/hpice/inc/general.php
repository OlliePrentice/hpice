<?php

define('THEME_DIRECTORY', get_template_directory());

/*
Disable the theme editor
- stop clients from breaking their website
 */
define('DISALLOW_FILE_EDIT', true);

load_theme_textdomain( 'hpice' );
/*
Thumbnails
- this theme supports thumbnails
 */
add_theme_support('post-thumbnails');
add_image_size('full', 3000, 3000, true);

/*
Scripts & Styles
- include the scripts and stylesheets
 */
add_action('wp_enqueue_scripts', function() {
    if (wp_script_is('jquery', 'registered')) {
        wp_deregister_script('jquery');

    }

    wp_enqueue_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js', array(), '3.3.1', false);
    //wp_enqueue_script('vendor', get_template_directory_uri() . '/dist/scripts/vendor.min.js', array(), '1.0.0', true);
    wp_enqueue_script('custom', get_stylesheet_directory_uri() . '/public/scripts/app.js', array(), '1.0.0', true);

    if (file_exists(get_stylesheet_directory_uri() . '/public/scripts/app.css')) {
        wp_enqueue_style('scriptsstyles', get_stylesheet_directory_uri() . '/public/scripts/app.css', false, '1.0.0', 'all');
    }

    wp_enqueue_style('style', get_stylesheet_directory_uri() . '/public/styles/style.css', false, '1.0.0', 'all');
    wp_enqueue_style('tailwind', get_stylesheet_directory_uri() . '/public/styles/tailwind.css', false, '1.0.0', 'all');


    wp_localize_script('custom', 'theme_params', array(
        'ajaxurl' => admin_url('admin-ajax.php'), // WordPress AJAX
        'stylesheet_dir' => get_stylesheet_directory_uri(),
    ));
});

add_action('admin_enqueue_scripts', function() {
    wp_enqueue_style('admin-styles', get_stylesheet_directory_uri() . '/style-admin.css');
});


/*
Menus
- enable WordPress Menus
 */
if (function_exists('register_nav_menus')) {
    register_nav_menus(['header' => __('Main Nav'), 'footer' => __('Footer Nav')]);
}

/*
 * Add Excerpts to pages
 */
add_post_type_support( 'page', 'excerpt' );

/**
 * Yoast breadcrumbs
 */
add_theme_support('yoast-seo-breadcrumbs');



/*
AFC Options
- register the ACF theme options
 */
if (function_exists('acf_add_options_page')) {

    acf_add_options_page(array(
        'page_title' => 'Theme Settings',
        'menu_title' => 'Theme Settings',
        'menu_slug' => 'theme-settings',
        'capability' => 'edit_posts',
        'redirect' => false
    ));

}

add_theme_support( 'editor-styles');
add_editor_style( 'style-editor.css' );



add_filter('mce_buttons_2', function ($buttons) {
    array_unshift($buttons, 'styleselect');

    return $buttons;
});

add_filter('tiny_mce_before_init', function ($styles) {

    $formats = [
        [
            'title'   => 'Button Primary',
            'selector'  => 'a',
            'classes' => 'btn btn--md',
            'wrapper' => false,
        ],
        [
            'title'   => 'Button Primary Alt',
            'selector'  => 'a',
            'classes' => 'btn btn--md btn--alt',
            'wrapper' => false,
        ],
        [
            'title'   => 'Button Secondary',
            'selector'  => 'a',
            'classes' => 'btn btn--md btn--tertiary',
            'wrapper' => false,
        ],
        [
            'title'   => 'Button Box',
            'selector'  => 'a',
            'classes' => 'btn btn--box btn--no-arrow',
            'wrapper' => false,
        ],
        [
            'title'   => 'Text Primary',
            'inline'  => 'span',
            'classes' => 'text-primary',
        ],
        [
            'title' => 'Font Weights',
            'items' => [
                [
                    'title' => 'Thin',
                    'inline' => 'span',
                    'classes' => 'font-thin',
                ],
                [
                    'title' => 'Extra Light',
                    'inline' => 'span',
                    'classes' => 'font-extralight',
                ],
                [
                    'title' => 'Light',
                    'inline' => 'span',
                    'classes' => 'font-light',
                ],
                [
                    'title' => 'Normal',
                    'inline' => 'span',
                    'classes' => 'font-normal',
                ],
                [
                    'title' => 'Medium',
                    'inline' => 'span',
                    'classes' => 'font-medium',
                ],
                [
                    'title' => 'Semibold',
                    'inline' => 'span',
                    'classes' => 'font-semibold',
                ],
                [
                    'title' => 'Bold',
                    'inline' => 'span',
                    'classes' => 'font-bold',
                ],
                [
                    'title' => 'Extra Bold',
                    'inline' => 'span',
                    'classes' => 'font-extrabold',
                ],
                [
                    'title' => 'Black',
                    'inline' => 'span',
                    'classes' => 'font-black',
                ],
            ],
        ],
    ];

    $styles['style_formats'] = json_encode($formats);

    return $styles;
});

function wdm_add_mce_button() {

    if(!is_admin()) {
        return;
    }

    // check user permissions
    if ( !current_user_can( 'edit_posts' ) &&  !current_user_can( 'edit_pages' ) ) {
        return;
    }
    // check if WYSIWYG is enabled
    if ( 'true' == get_user_option( 'rich_editing' ) ) {
        add_filter( 'mce_external_plugins', 'wdm_add_tinymce_plugin' );
        add_filter( 'mce_buttons', 'wdm_register_mce_button' );
    }
}
add_action('admin_head', 'wdm_add_mce_button');

// register new button in the editor
function wdm_register_mce_button( $buttons ) {
    array_push( $buttons, 'wdm_mce_button' );
    return $buttons;
}


// declare a script for the new button
// the script will insert the shortcode on the click event
function wdm_add_tinymce_plugin( $plugin_array ) {
    $plugin_array['wdm_mce_button'] = get_stylesheet_directory_uri() .'/assets/scripts/admin/mce-buttons.js';
    return $plugin_array;
}






