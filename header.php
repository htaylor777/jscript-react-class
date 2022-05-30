<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <title>javascript class</title>

                <div class="mymenu">
                <?php
        wp_nav_menu( array( 
		    'theme_location'   => 'primary', 
	        'container_class'  => 'mymenu', 
	        'menu_class'       => 'mymenu',		 
		   ) );
    ?>           
</div>

            </head>
            <body>
            <?php wp_head();?>
           JAVACRIPT CLASS AND REACT