<?php
get_header();
?>
<br><br><br>


<h2> JQuery Test </h2>

<div id="main" class="container">
    <h1>People</h1>
    <ul class="people">
       <li>John Doe</li>
       <li>Jane Doe</li>
       <li>Larry Doe</li>
</ul>
</div>

<p> <input type="text" id="fullname"></p>
<p> 
<input type="button" class="button1" value="Click Me" onclick="showdata(); return false;"</button> 
<input type="button" class="button1" value="Click What" onclick="greet('move over now');"</button> 
<input type="button" class="button1" value="Build Functions1" onclick="buildFunctions(); return false;"</button> 
<input type="button" class="button1" value="Build Functions2" onclick="buildFunctions2(); return false;"</button>
</p>

<p><input type="text" id="fname" placeholder="enter your firstname">
<input type="text" id="lname" placeholder="enter your lastname"></p>

<p> <input type="button" class="button2" value="English makeGreeting" onclick="makeGreeting('en'); return false;"</button>
<input type="button" class="button2" value="Spanish makeGreeting" onclick="makeGreeting('es'); return false;"</button>
</p>
<hr/>
<p> <input type="button" class="button2" value="makeGreetings" onclick="procGreetings(); return false;"</button>
 <input type="button" class="button2" value="tellDone" onclick="tellDone(); return false;"</button>
</p>


<p> <input type="textarea" rows="10" id="displayjs1"></p>
<p> <input type="textarea" rows="10" id="displayjs2"></p>
<?php

while ( have_posts()){  
the_post();
the_title();
the_author();
the_content();

}
get_footer();