<?php if ($args) : ?>
    <div class="buttons py-2">
        <?php foreach ($args as $button) : ?>
            <div class="mb-4">
                <?php

                if (!empty($button['link'])) {

                    $button['link']['classes'] = !empty($button['style']) ? $button['style'] : '';
                    $button['link']['icon'] = !empty($button['icon']) ? $button['icon'] : '';
                    $button['link']['attr'] = !empty($button['download']) ? 'download' : '';

                    if($button['style'] === 'link') {
                        get_template_part('template-parts/components/link', '', $button['link']);
                    } else {
                        get_template_part('template-parts/components/button', '', $button['link']);
                    }
                }

                ?>
            </div>
        <?php endforeach; ?>
    </div>
<?php endif; ?>
