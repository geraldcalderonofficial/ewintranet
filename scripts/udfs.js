function Toggle(node)
{
	// Unfold the branch if it isn't visible
	if (node.nextSibling.style.display == 'none')
	{
		// Change the image (if there is an image)
		if (node.childNodes.length > 0)
		{
			if (node.childNodes.item(0).nodeName == "IMG")
			{
				node.childNodes.item(0).src = "images/minus.gif";
			}
		}

		node.nextSibling.style.display = 'block';
	}     
	// Collapse the branch if it IS visible
	else
	{
		// Change the image (if there is an image)
		if (node.childNodes.length > 0)
		{
			if (node.childNodes.item(0).nodeName == "IMG")
			{
				node.childNodes.item(0).src = "images/plus.gif";
			}
		}

		node.nextSibling.style.display = 'none';
	}

}


function togglelist(id){
    //ul = "ul_" + id;
    //img = "img_" + id;
    ulElement = document.getElementById(ul);
    //imgElement = document.getElementById(img);
    if (ulElement){
            if (ulElement.className == 'closed'){
                    ulElement.className = "open";
                    //imgElement.src = "/images/minus.gif";
                    }else{
                    ulElement.className = "closed";
                    //imgElement.src = "/images/plus.gif";
                    }
            }
    }

/* javascript code for collapsible table */
function hidify_showify(e_table, e_img, alt_less, alt_more) 
{
	if(document.getElementById) 
	{
		var id_table = document.getElementById(e_table).style;
		var id_img = document.getElementById(e_img);

		//Set the object to table-cell if the browser is
		//Firefox and block if it's anything else.
		if(navigator.userAgent.indexOf("Firefox") != -1)
		{
			if(id_table.display == "table-cell") 
			{
	            id_table.display = "none";
	            id_img.src = "/site/img/down.gif";
	            id_img.alt = alt_more;
			}
			else 
			{
	            id_table.display = "table-cell";
	            id_img.src = "/site/img/up.gif";
	            id_img.alt = alt_less;
			}
		}
		else 
		{
			if(id_table.display == "block") 
			{
	            id_table.display = "none";
	            id_img.src = "/site/img/down.gif";
	            id_img.alt = alt_more;
			}
			else 
			{
	            id_table.display = "block";
	            id_img.src = "/site/img/up.gif";
	            id_img.alt = alt_less;
			}
		}
		return false;
	}
	else 
	{
		return true;
	}
}