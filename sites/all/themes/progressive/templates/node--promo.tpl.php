<?php
/**
 * @file
 * Default theme implementation to display a node.
 *
 * Available variables:
 * - $title: the (sanitized) title of the node.
 * - $content: An array of node items. Use render($content) to print them all, or
 *   print a subset such as render($content['field_example']). Use
 *   hide($content['field_example']) to temporarily suppress the printing of a
 *   given element.
 * - $user_picture: The node author's picture from user-picture.tpl.php.
 * - $date: Formatted creation date. Preprocess functions can reformat it by
 *   calling format_date() with the desired parameters on the $created variable.
 * - $name: Themed username of node author output from theme_username().
 * - $node_url: Direct url of the current node.
 * - $terms: the themed list of taxonomy term links output from theme_links().
 * - $display_submitted: whether submission information should be displayed.
 * - $classes: String of classes that can be used to style contextually through
 *   CSS. It can be manipulated through the variable $classes_array from
 *   preprocess functions. The default values can be one or more of the following:
 *   - node: The current template type, i.e., "theming hook".
 *   - node-[type]: The current node type. For example, if the node is a
 *     "Blog entry" it would result in "node-blog". Note that the machine
 *     name will often be in a short form of the human readable label.
 *   - node-teaser: Nodes in teaser form.
 *   - node-preview: Nodes in preview mode.
 *   The following are controlled through the node publishing options.
 *   - node-promoted: Nodes promoted to the front page.
 *   - node-sticky: Nodes ordered above other non-sticky nodes in teaser listings.
 *   - node-unpublished: Unpublished nodes visible only to administrators.
 * - $title_prefix (array): An array containing additional output populated by
 *   modules, intended to be displayed in front of the main title tag that
 *   appears in the template.
 * - $title_suffix (array): An array containing additional output populated by
 *   modules, intended to be displayed after the main title tag that appears in
 *   the template.
 *
 * Other variables:
 * - $node: Full node object. Contains data that may not be safe.
 * - $type: Node type, i.e. story, page, blog, etc.
 * - $comment_count: Number of comments attached to the node.
 * - $uid: User ID of the node author.
 * - $created: Time the node was published formatted in Unix timestamp.
 * - $classes_array: Array of html class attribute values. It is flattened
 *   into a string within the variable $classes.
 * - $zebra: Outputs either "even" or "odd". Useful for zebra striping in
 *   teaser listings.
 * - $id: Position of the node. Increments each time it's output.
 *
 * Node status variables:
 * - $view_mode: View mode, e.g. 'full', 'teaser'...
 * - $teaser: Flag for the teaser state (shortcut for $view_mode == 'teaser').
 * - $page: Flag for the full page state.
 * - $promote: Flag for front page promotion state.
 * - $sticky: Flags for sticky post setting.
 * - $status: Flag for published status.
 * - $comment: State of comment settings for the node.
 * - $readmore: Flags true if the teaser content of the node cannot hold the
 *   main body content.
 * - $is_front: Flags true when presented in the front page.
 * - $logged_in: Flags true when the current user is a logged-in member.
 * - $is_admin: Flags true when the current user is an administrator.
 *
 * Field variables: for each field instance attached to the node a corresponding
 * variable is defined, e.g. $node->body becomes $body. When needing to access
 * a field's raw values, developers/themers are strongly encouraged to use these
 * variables. Otherwise they will have to explicitly specify the desired field
 * language, e.g. $node->body['en'], thus overriding any language negotiation
 * rule that was previously applied.
 *
 * @see template_preprocess()
 * @see template_preprocess_node()
 * @see template_process()
 */
?>

<?php if(!$teaser): ?>
  <?php if (!$page): ?>
    <article id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>
  <?php endif; ?>
    <h3 class = ""><?php print $title; ?></h3>
    <?php print render($title_prefix) . render($title_suffix); ?>

    <?php if ($display_submitted): ?>
      <span class="submitted"><?php print $submitted; ?></span>
    <?php endif; ?>

    <?php print render($content['links']); ?>
    <div class="wrapping-events-icons">
        <div class="col-md-4">
        <div class="events-icons-dove">
            <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.32 33.3">
                    <defs><style>.cls-1{fill:#847552;}</style></defs>
                    <title>Dove</title>
                    <g id="Livello_2" data-name="Livello 2">
                        <g id="Livello_1-2" data-name="Livello 1">
                            <path class="cls-1" d="M19.91,3.42a11.66,11.66,0,0,0-16.49,0C-.66,7.49-1.17,15.16,2.32,19.8L11.66,33.3,21,19.82c3.5-4.66,3-12.33-1.08-16.41Zm.1,15.7-8.34,12L3.3,19.09C.14,14.88.6,8,4.28,4.28A10.45,10.45,0,0,1,19,4.28c3.68,3.68,4.13,10.6,1,14.84Zm0,0"/>
                            <path class="cls-1" d="M11.77,7.3A4.26,4.26,0,1,0,16,11.55,4.26,4.26,0,0,0,11.77,7.3Zm0,7.3a3,3,0,1,1,3-3,3,3,0,0,1-3,3Zm0,0"/>
                        </g>
                    </g>
                </svg>
            </a>
        </div>
            <?php print render($content['field_where']); ?>
    </div>
    <div class="col-md-4">
        <div class="events-icons">
            <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.14 28.14">
                    <defs><style>.cls-1{fill:#847552;stroke:#847552;stroke-miterlimit:10;stroke-width:0.25px;}</style></defs>
                    <title>Ora</title><g id="Livello_2" data-name="Livello 2">
                        <g id="Livello_1-2" data-name="Livello 1">
                            <path class="cls-1" d="M14.07.13A13.95,13.95,0,1,0,28,14.07,14,14,0,0,0,14.07.13Zm0,27a13,13,0,1,1,13-13,13,13,0,0,1-13,13Zm0,0"/>
                            <path class="cls-1" d="M14.07,2.91a.46.46,0,0,0-.47.47V14.07h-7a.47.47,0,0,0,0,.93h7.44a.47.47,0,0,0,.47-.47V3.38a.46.46,0,0,0-.47-.47Zm0,0"/>
                        </g>
                    </g>
                </svg>
            </a>
        </div>
        <?php print render($content['field_eventdate']); ?>
    </div>

        <div class="col-md-4">

            <?php if($field_prenota[0]['value'] == 1): ?>
            <div class="events-icons">
            <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 31">
                    <defs><style>.cls-1{fill:#847552;}</style></defs>
                    <title>Prenota</title><g id="Livello_2" data-name="Livello 2">
                        <g id="Livello_1-2" data-name="Livello 1">
                            <path class="cls-1" d="M15.37,7.32l-.7-.7L13.36,7.93l.7.7ZM11,28.31l.7.7L13,27.7l-.7-.7ZM17.64,5l-.7-.7L15.63,5.66l.7.7Zm-6.82,6.82-.7-.7L8.81,12.48l.7.7ZM13.1,9.59l-.7-.7-1.31,1.31.7.7ZM26.92,12.4l.7.7,1.31-1.31-.7-.7ZM4.26,17l.7.7,1.31-1.31-.7-.7ZM19.92,2.77l-.7-.7L17.9,3.38l.7.7Zm-.76,6L13.65,14.3a.49.49,0,0,0,.7.7L19.86,9.5a.49.49,0,0,0-.7-.7Zm-12.62,6,.7.7,1.31-1.31-.7-.7ZM2,19.3l.7.7L4,18.68,3.3,18Zm17.24-5.88L16,16.65a.49.49,0,0,0,.7.7l3.23-3.23a.49.49,0,0,0-.7-.7Zm3.14,3.53.7.7,1.31-1.31-.7-.7ZM20.1,19.22l.7.7,1.31-1.31-.7-.7Zm4.55-4.55.7.7,1.31-1.31-.7-.7Zm-6.82,6.82.7.7,1.31-1.31-.7-.7ZM13.28,26l.7.7,1.31-1.31-.7-.7Zm1.25-6.23a.77.77,0,0,0-.23-.68l-.79-.74-.14-1.07a.77.77,0,0,0-1.13-.58l-1,.52-1.06-.2a.77.77,0,0,0-.9.9L9.54,19,9,20a.77.77,0,0,0,.57,1.13l1.07.14.74.79a.77.77,0,0,0,.56.24h.12a.77.77,0,0,0,.57-.43l.46-1,1-.46A.77.77,0,0,0,14.53,19.81Zm-1.37,1h0ZM12.63,20a.77.77,0,0,0-.36.36l-.36.76-.58-.61a.77.77,0,0,0-.46-.23L10,20.16l.4-.74a.77.77,0,0,0,.08-.51l-.15-.83.83.15a.77.77,0,0,0,.51-.08l.74-.4.11.83a.77.77,0,0,0,.23.46l.61.58Zm17.85-9.72L28.93,8.71a1.49,1.49,0,0,0-1.86-.2,3.3,3.3,0,0,1-4.57-4.57,1.49,1.49,0,0,0-.2-1.86L20.73.52a1.77,1.77,0,0,0-2.5,0L.52,18.23a1.77,1.77,0,0,0,0,2.5l1.56,1.56a1.49,1.49,0,0,0,1.86.2,3.3,3.3,0,0,1,4.57,4.57,1.49,1.49,0,0,0,.2,1.86l1.56,1.56a1.77,1.77,0,0,0,2.5,0L30.48,12.77A1.77,1.77,0,0,0,30.48,10.27Zm-.7,1.8L12.07,29.78a.78.78,0,0,1-1.1,0L9.41,28.23a.5.5,0,0,1-.07-.63A4.29,4.29,0,0,0,5.74,21a4.26,4.26,0,0,0-2.34.69.5.5,0,0,1-.63-.07L1.22,20a.78.78,0,0,1,0-1.1L18.93,1.21a.78.78,0,0,1,1.1,0l1.56,1.56a.5.5,0,0,1,.07.63A4.29,4.29,0,0,0,27.6,9.34a.5.5,0,0,1,.63.07L29.79,11A.78.78,0,0,1,29.79,12.07ZM15.55,23.77l.7.7,1.31-1.31-.7-.7Z"/>
                        </g>
                    </g>
                </svg>
            </a>
            </div>
                <?php print '<a  href="' . $field_eventbrite[0]['value'] . '">' ?><?php print render($content['field_prenota']); ?><?php print '</a>'; ?>


            <?php endif; ?>
        </div>
    </div>


    <div class="content clearfix <?php print $classes_array['1']; ?>"<?php print $content_attributes; ?>>
      <?php
        // Hide comments, tags, and links now so that we can render them later.
        hide($content['comments']);
        hide($content['links']['comment']);
        hide($content['field_prenota']);
        print render($content);
      ?>
    </div>

    <?php if (!empty($content['links'])): ?>
      <footer>
        <?php print render($content['links']); ?>
      </footer>
    <?php endif; ?>

    <?php print render($content['comments']); ?>
  <?php if (!$page): ?>
    </article> <!-- /.node -->
  <?php endif; ?>
<?php else: ?>
  <article class="<?php print $classes; ?> post" <?php print $attributes; ?>>
    <?php print render($title_prefix); ?>
    <h2 class="entry-title"><a href="<?php print url('node/' . $node->nid); ?>"><?php print $title; ?></a></h2>
    <?php print render($title_suffix); ?>
    <div class="entry-content">
      <?php hide($content['field_category']); hide($content['links']); hide($content['comments']); ?>  
      <?php print render($content); ?>
    </div>
    
    <div class="entry-meta">
      <?php if($display_submitted): ?>
        <?php print $name; ?>,
        <span class="time"><?php print date('d.m.Y', $node->created); ?></span>
        <span class="separator">|</span>
      <?php endif; ?>
      <?php if(isset($content['field_category'])): ?>
        <span class="meta"><?php print t('Posted in'); ?> <?php print render($content['field_category']); ?></span>
      <?php endif; ?>
      <?php if($display_submitted): ?>
        <span class="comments-link pull-right">
          <a href="<?php print url('node/' . $node->nid); ?>"><?php print $node->comment_count . ' ' . t('comment') . ($node->comment_count  ? 's' : '');?></a>
        </span>
      <?php endif; ?>
    </div>
  </article>
<?php endif; ?>