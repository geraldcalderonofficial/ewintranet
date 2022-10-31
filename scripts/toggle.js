// JavaScript Document

<!--
function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}
//-->

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
				node.childNodes.item(0).src = "../img/minus.gif";
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
				node.childNodes.item(0).src = "../img/plus.gif";
			}
		}

		node.nextSibling.style.display = 'none';
	}

}