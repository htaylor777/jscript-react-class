<?php

function add_theme_scripts() {
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;0,700;1,500&family=Open+Sans&display=swap', [], false);
    wp_enqueue_style( 'javascriptclass-style', get_stylesheet_uri(), [], false );
    // true = diplay on the footer
   wp_enqueue_script('jquery', get_template_directory_uri() . '/js/jquery-1.11.2.js', [], true, true);
   wp_enqueue_script('ajaxapp', get_template_directory_uri() . '/js/ajaxapp.js', [], false, true);
   wp_enqueue_script('underscore', get_template_directory_uri() . '/js/underscore-esm-min.js', [], false, true);
   wp_enqueue_script('app1', get_template_directory_uri() . '/js/myapp.js', [], false, true);
   wp_enqueue_script('app2', get_template_directory_uri() . '/js/myapp2.js', [], false, true);
}
add_action( 'wp_enqueue_scripts', 'add_theme_scripts' );


function ajax_api_posts(){
    // custom post types  
    register_post_type('ajax', array(
        'show_in_rest' => true,
        'supports' => array('page','title','editor','excerpt','thumbnail','comments','author','published'), 
        'rewrite' => array('slug' => 'ajax'),
        'taxonomies'  => array( 'category','post_tag' ),
        'has_archive' => true,
        'public' => true,
        'posts_per_page' => 10, 
        'labels' => array(
        'name'   => 'Ajax',
        'add_new_item' => 'Add New Page',
         'edit_item' => 'Edit Page',
         'all_items' => 'All Pages',  
         'singular_name' => 'Ajax'
        ),
        'menu_icon' => 'dashicons-food'
    ));
}

    add_action('init', 'ajax_api_posts');


    function awesome_theme_setup() {  
        add_theme_support('menus');
    register_nav_menu('primary', 'Primary Header Navigation');
    }
    add_action('after_setup_theme', 'awesome_theme_setup');