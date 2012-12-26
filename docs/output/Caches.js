Ext.data.JsonP.Caches({"tagname":"class","name":"Caches","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Caches","members":{"cfg":[],"property":[{"name":"imagePatterns","tagname":"property","owner":"Caches","meta":{},"id":"property-imagePatterns"},{"name":"images","tagname":"property","owner":"Caches","meta":{},"id":"property-images"}],"method":[{"name":"preloadImages","tagname":"method","owner":"Caches","meta":{},"id":"method-preloadImages"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":163,"files":[{"filename":"utilities.js","href":"utilities.html#Caches"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/utilities.html#Caches' target='_blank'>utilities.js</a></div></pre><div class='doc-contents'><p>Tracks cached items.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-imagePatterns' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Caches'>Caches</span><br/><a href='source/utilities.html#Caches-property-imagePatterns' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Caches-property-imagePatterns' class='name expandable'>imagePatterns</a><span> : Object</span></div><div class='description'><div class='short'>A map from image file paths to CanvasPattern objects. ...</div><div class='long'><p>A map from image file paths to CanvasPattern objects.</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-images' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Caches'>Caches</span><br/><a href='source/utilities.html#Caches-property-images' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Caches-property-images' class='name expandable'>images</a><span> : Object</span></div><div class='description'><div class='short'>A map from image file paths to Image objects. ...</div><div class='long'><p>A map from image file paths to Image objects.</p>\n<p>Defaults to: <code>{}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-preloadImages' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Caches'>Caches</span><br/><a href='source/utilities.html#Caches-method-preloadImages' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Caches-method-preloadImages' class='name expandable'>preloadImages</a>( <span class='pre'>files, options</span> )</div><div class='description'><div class='short'>Preload a list of images asynchronously. ...</div><div class='long'><p>Preload a list of images asynchronously.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>files</span> : Object<div class='sub-desc'><p>An array of paths to images to preload.</p>\n</div></li><li><span class='pre'>options</span> : Object<div class='sub-desc'><p>A map of options for this function.\n  - finishCallback: A function to run when all images have finished</p>\n\n<pre><code>loading. Receives the number of images loaded as a parameter.\n</code></pre>\n\n<ul>\n<li>itemCallback: A function to run when an image has finished loading.\nReceives the file path of the loaded image, how many images have\nbeen loaded so far (including the current one), and the total number\nof images to load.</li>\n</ul>\n\n</div></li></ul></div></div></div></div></div></div></div>"});