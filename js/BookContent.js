var targetContainer = $(".target-output"),
    templateDefined = $(".target-output").data("template-chosen"),
    template = $("#mustacheTempalte_"+templateDefined).html();
	  
	  	var shows = { "shows" : [ 
	  	  { "title" : "Book Title here",
	  	  	"authorName" : "author name here",
	  	  	"bookLicense" : "copyright",
	  	  	"bookLicenseURI" : "http://djmcloud.danieljmckeown.com/64/copyright/",
	  	  	"bookPublisherName" : "publisher name here",
	        "authorURI" : "author URL here",    
	        "bookPublisherURI" : "publisher URL here",
	        "bookYear" : "year published",
	        "bookURI" : "book URL",
	        "bookImage" : "illustration image URL here",
	        "link1URI" : "link 1 URL",
	        "link1name" : "link 1 name",
	        "link2URI" : "link 2 URL",
	        "link2name" : "link 2 name",
	        "link3URI" : "link 3 URL",
	        "link3name" : "",
	        "link4URI" : "",
	        "link4name" : "",
	        "Chapter1title" : "",
	        "SectionAtitle" : "",
	        "yetMoreChapters" : "li-table-of-contents-in-no-whitespace-single-quotes-HTML-here",
	        "yetMoreBookContent" : "book-content-in-no-whitespace-single-quotes-HTML-here"
	        
	        

	      }
	    ] };

		var html = Mustache.to_html(template, shows);

		$(targetContainer).html(html);