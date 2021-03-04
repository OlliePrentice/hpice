<?php

/**
 * Component: Mobile Navigation
 */

?>

<div class="mobile-navigation lg:hidden">
    <nav class="mobile-navigation__nav">
        <?php wp_nav_menu(['theme_location' => 'header', 'container' => false]); ?>
    </nav>
</div><!-- .mobile-navigation -->
