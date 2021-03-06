Installation [![endorse](https://api.coderwall.com/nicoss01/endorsecount.png)](https://coderwall.com/nicoss01)
=======

To use this plugin, you have to load the jQuery Javascript file and the plugin file 'toolbar.jquery.js' in the HEAD section of your HTML page.

    <script type="text/Javascript" src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
    <script type="text/Javascript" src="/blog/toolbar.jquery.js"></script>

Use
===
To correctly use this plugin, you have to create an HTML container which contains the repetition of a tag with a link.

Example :

    <div id="test_toolbar">
        <div><a href="#">Link</a></div>
        <div><a href="#">Link</a></div>
        <div><a href="#">Link</a></div>
        <div><a href="#">Link</a></div>
    </div>

Then in the Javascript code use this sample code :

    $("#test_toolbar').toolbar({
          width       : '120px',
          positionH   : 'middle',
          positionV   : 'bottom',
          orientation : 'horizontal',
          activeLink  : false,
          elements    : 'div'
    });

Available parameters
===============

* *elements* : Selectors tags containing links
* *cssClass* : CSS class to be added to the toolbar
* *live (true|false)* : If you enable this option, the menu returns automatically when resizing the window
* *width* : Width of the toolbar in pixels
* *height* : Height of the toolbar in pixels
* *positionV* : Vertical position of toolbar, available values : top, bottom, middle
* *positionH* : Horizontal position of toolbar, available values : left (gauche), right (droite), middle (milieu)
* *orientation* : Toolbar orientation, available values : horizontal, vertical
* *background* : Background color of toolbar
* *textColor* : Text color of links
* *hoverBackground* : Background color of links overflown
* *hoverTextColor* : Color of text links overflown
* *activeLink (true|false)* : If this option is active, the link to the url of the page will automatically open layout differently.
* *activeBackground* : Background color of the link to open page


[![githalytics.com alpha](https://cruel-carlota.pagodabox.com/abe70deae4a5a303e24ef328293376a6 "githalytics.com")](http://githalytics.com/nicoss01/jQuery-Plugin-Toolbar-Maker)
