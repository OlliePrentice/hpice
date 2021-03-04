<!DOCTYPE html>
<html class="no-js" <?php language_attributes(); ?>>
<head>
    <meta HTTP-EQUIV="Content-type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=9;IE=10;IE=Edge,chrome=1"/>
    <title><?php wp_title(); ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>

    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="preload" as="style"
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"/>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet" onload="this.media='all'">
    <noscript>
        <link rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"/>
    </noscript>
    <?php wp_head(); ?>
    <link rel="stylesheet"
              href="https://code.jquery.com/ui/1.10.0/themes/base/jquery-ui.css"/>
    <script src="https://code.jquery.com/ui/1.10.0/jquery-ui.min.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/jquery.flot@0.8.3/jquery.flot.min.js" crossorigin="anonymous"></script>
</head>

<body <?php body_class(); ?>>


<header class="main-header bg-primary theme-dark fixed top-0 left-0 w-full z-50 px-6 sm:px-12 remove-bullets">
    <div class="flex items-center justify-end">
        <div>
            <nav class="main-header__nav text-zero hidden lg:block">
                <?php wp_nav_menu(['theme_location' => 'header', 'container' => false, 'walker' => new OP_Walker_Nav]); ?>
            </nav>
            <div class="block lg:hidden py-10">
                <?php get_template_part('template-parts/components/burger'); ?>
            </div>
        </div>
    </div>
</header><!-- .masthead -->

<?php

get_template_part('template-parts/components/mobile-navigation');

?>

<main class="site-wrapper relative overflow-hidden">
