<?php $layout = _nikadevs_cms_get_active_layout();
$one_page = isset($layout['settings']['one_page']) && $layout['settings']['one_page'] ? 1 : 0; ?>
<?php if(theme_get_setting('header_top_menu') && !$one_page): global $user; ?>
  <div id="top-box">
    <div class="container">
    <div class="row">
      <div class="navbar-collapse collapse in">

        <?php if(theme_get_setting('language') && module_exists('locale') && drupal_multilingual()):
          global $language;
        ?>
          <div class="btn-group language btn-select">
            <a class="btn dropdown-toggle btn-default" role="button" data-toggle="dropdown" href="#">
              <span class="hidden-xs"><?php print t('Language'); ?></span><span class="visible-xs"><?php print t('Lang');?></span><!-- 
              -->: <?php print $language->name; ?>
              <span class="caret"></span>
            </a>
            <?php
              $path = drupal_is_front_page() ? '<front>' : $_GET['q'];
              $links = language_negotiation_get_switch_links('language', $path);
              if(isset($links->links)) {
                foreach($links->links as $i => $link) {
                  $links->links[$i]['attributes']['lang'] = $links->links[$i]['attributes']['xml:lang'];
                }
                $variables = array('links' => $links->links, 'attributes' => array('class' => array('dropdown-menu')));
                print theme('links__locale_block', $variables);
              }
            ?>
          </div>
        <?php endif; ?>

          <ul class="nav navbar-nav navbar-right">
                  <li>
                      <a  class="phone-call" href="#">
                          <i class="fa fa-mobile"></i><?php print t('Call Us'); ?>
                      </a>

                  </li>
                  <li>
                      <a  href="<?php print url('venues'); ?>">
                          <i class="fa fa-map-marker"></i><?php print t('Location Information'); ?>
                      </a>
                  </li>
                  <li>
                      <a href="<?php print url('contacts'); ?>">
                          <i class="fa fa-envelope-o"></i><?php print t('Contact Us'); ?>
                      </a>
                  </li>

          </ul>
      </div>
      
   
    </div>
    </div>
  </div>
<?php endif; ?>



<header id="slide-nav" class="header<?php print theme_get_setting('header_top_menu') && !$one_page ? '' : ' header-two'; ?>">
  <div class = "header-wrapper">
    <div class="container">

<!--        <nav class="navbar ">-->
        <div class="row">

            <div class="col-xs-6 col-md-2 col-lg-2 logo-box">
                <div class="logo">
                    <a href="<?php print url('<front>'); ?>">
                        <img src="<?php print theme_get_setting('logo'); ?>" class="logo-img" alt="">
                    </a>
                </div>
            </div><!-- .logo-box -->

            <div class="col-xs-6 col-md-10 col-lg-10 right-box">
                <div class="right-box-wrapper">

                    <div class="primary">
                        <div class="navbar navbar-default" role="navigation">
                            <button type="button" class="navbar-toggle btn-navbar collapsed" data-toggle="collapse" data-target=".primary .navbar-collapse">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <div id="slidemenu">
                            <nav class="collapse collapsing navbar-collapse">
                                <ul class="nav navbar-nav">
                                    <?php
                                    if($one_page) {
                                        foreach($layout['rows'] as $row):
                                            $path = '#' . preg_replace('/[^\p{L}\p{N}]/u', '-', $row['name']);
                                            if(isset($row['settings']['dropdown_links']) && $row['settings']['dropdown_links']) { ?>
                                                <li class="parent">
                                                    <a class = "scroll" href = "<?php print $path; ?>"><?php print t($row['name']); ?></a>
                                                    <ul class="sub">
                                                        <?php
                                                        foreach ($row['settings'] as $key => $value):
                                                            if(strpos($key, 'menu_link_url') !== FALSE) {
                                                                $i = str_replace('menu_link_url_', '', $key);
                                                                $path = strpos($row['settings']['menu_link_url_' . $i], '#') === FALSE ? url($row['settings']['menu_link_url_' . $i]) : $row['settings']['menu_link_url_' . $i];
                                                                $class = strpos($row['settings']['menu_link_url_' . $i], '#') === 0 ? 'class = "scroll"' : '';
                                                                print '<li><a href="' . $path . '" ' . $class .'>' . t($row['settings']['menu_link_' . $i]) . '</a></li>';
                                                            }
                                                        endforeach;
                                                        ?>
                                                    </ul>
                                                </li>
                                            <?php }
                                            elseif(!isset($row['settings']['hide_menu']) || !$row['settings']['hide_menu']) {
                                                $path = '#' .  preg_replace('/[^\p{L}\p{N}]/u', '-', $row['name']);
                                                print '<li><a href = "' . $path . '"  class = "scroll">' . t($row['name']) . '</a></li>';
                                            }
                                        endforeach;
                                    }
                                    elseif(module_exists('tb_megamenu')) {
                                        print theme('tb_megamenu', array('menu_name' => variable_get('menu_main_links_source', 'main-menu')));
                                    }
                                    else {
                                        $main_menu_tree = module_exists('i18n_menu') ? i18n_menu_translated_tree(variable_get('menu_main_links_source', 'main-menu')) : menu_tree(variable_get('menu_main_links_source', 'main-menu'));
                                        print drupal_render($main_menu_tree);
                                    }
                                    ?>
                                </ul>

                                <ul class="nav navbar-nav navbar-right">
                                    <li>
                                        <div class="search-header hidden-600">
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve">
                  <path d="M12.001,10l-0.5,0.5l-0.79-0.79c0.806-1.021,1.29-2.308,1.29-3.71c0-3.313-2.687-6-6-6C2.687,0,0,2.687,0,6
                s2.687,6,6,6c1.402,0,2.688-0.484,3.71-1.29l0.79,0.79l-0.5,0.5l4,4l2-2L12.001,10z M6,10c-2.206,0-4-1.794-4-4s1.794-4,4-4
                s4,1.794,4,4S8.206,10,6,10z"></path>
                                                    <!--<img src="<?php print base_path() . path_to_theme(); ?>/img/png-icons/search-icon.png" alt="" width="16" height="16" style="vertical-align: top;">-->
                  </svg>
                                            </a>
                                        </div>
                                    </li>
                            <!-- Da uncomment quando sarà implementata la sezione User        <li>
                                        <div class="clubcard">
                                            <img src="<?php print base_path() . path_to_theme(); ?>/img/clubcard.png" alt="" width="32"  style="vertical-align: top;">
                                        </div>
                                    </li>
                                    <?php if(theme_get_setting('account_login') && $user->uid): ?>
                                        <li><?php print l(t('My Account'), 'user'); ?></li>
                                    <?php endif; ?>
                                    <?php if(theme_get_setting('account_login') && !$user->uid): ?>
                                        <li class="clubcard-right">
                                            <?php print l(t('Log In  <i class="fa fa-lock after"></i>'), 'user/login', array('html' => TRUE)); ?>
                                        </li>
                                    <?php endif; ?>
                                    <?php if(theme_get_setting('account_login') && $user->uid): ?>
                                        <li class="clubcard-right"><?php print l(t('Log Out  <i class="fa fa-unlock after"></i>'), 'user/logout', array('html' => TRUE)); ?></li> -->
                                    <?php endif; ?>
                                </ul>
                            </nav>
                            </div>
                        </div>
                    </div><!-- .primary -->
                </div>
            </div>


            </div><!--/class row -->
<!--        </nav>-->
        <div class="phone-active col-sm-9 col-md-9">
            <a href="#" class="close"><span><?php print t('close'); ?></span>×</a>
            <?php $phone = explode("\n", theme_get_setting('phones')); ?>
            <span class="title"><?php print t('Call Us'); ?></span> <strong><?php print is_array($phone) ? array_shift($phone) : ''; ?></strong>
        </div>
        <div class="search-active col-sm-9 col-md-9">
            <a href="#" class="close"><span><?php print t('close'); ?></span>×</a>
            <?php
            $search_form_box = module_invoke('search', 'block_view');
            print render($search_form_box);
            ?>
        </div>

      </div><!--.row -->
    </div>
  </div>
</header><!-- .header -->