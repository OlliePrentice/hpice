<?php

/**
 * Component: Button
 */

$button = $args;

?>

<div class="btn-wrap">
    <a href="<?= $button['url']; ?>" <?= (!empty($button['target'])) ? 'target="_blank"' : ''; ?>
       class="btn <?= (!empty($button['classes'])) ? $button['classes'] : ''; ?>" <?= (!empty($button['attr'])) ? $button['attr'] : ''; ?>>
        <?= !empty($button['icon']) ? $button['icon'] : ''; ?>
        <span><?= $button['title']; ?></span>
        <?php if ( ! empty( $button['classes'] ) && strpos( $button['classes'], 'btn--box' ) !== false || strpos( $button['classes'], 'btn--arrow' ) !== false ) : ?>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="btn__chevron">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
        <?php endif; ?>
    </a>
</div>
