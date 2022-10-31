function loading(id, content) 
{
	document.getElementById(id).innerHTML = content;
}

function show_progressbar(id) 
{
	loading(id, '<div align=center><br><br><br><br>Loading, please wait...</div>');
	//loading(id, 'Loading, please wait...');
}

function GetXmlHttpObject()
{ 
	var objXMLHttp=null;
	if (window.XMLHttpRequest)
	{
		objXMLHttp=new XMLHttpRequest();
	}
		else if (window.ActiveXObject)
	{
		objXMLHttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	return objXMLHttp;
}

function smOpen(lnk,whrDivID)
{
	xmlHttp=GetXmlHttpObject();
	ID=whrDivID;
	if (xmlHttp==null)
	{
			alert ("Browser does not support HTTP Request");
			return;
	}
	
	var url=lnk;
	

	xmlHttp.onreadystatechange=whrDivIDIs;
	xmlHttp.open("GET",url,true);	
	xmlHttp.send(null);
}

function whrDivIDIs()
{
	if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
	{ 
		loading(ID,xmlHttp.responseText) ;
	}
	else
	{
		show_progressbar(ID);
	}
}

function changeColor(id)
{
	document.getElementById(id).style.color = '#b2006f';
	
	/*if(id == 'a1')
	{
		document.getElementById('a2').style.color='#542785';
		document.getElementById('a3').style.color='#542785';
		document.getElementById('a4').style.color='#542785';
		document.getElementById('a5').style.color='#542785';
		document.getElementById('a6').style.color='#542785';
	}*/
	
	var a = id.substring(1);
	var i = 1;
	for(i=1;i<=9;i++)
	{
		if(a != i)
		{
			var id2 = 'a'+i;
			document.getElementById(id2).style.color='#542785';
		}
	}
	
}

function HideContent(d) {
	if(d.length < 1) { return; }
	document.getElementById(d).style.display = "none";
}

function ShowContent(d) {
	if(d.length < 1) { return; }
	document.getElementById(d).style.display = "block";
}

function ShowHide(d)
{
	if(d.length < 1) { return; }
	if(document.getElementById(d).style.display == "none") { document.getElementById(d).style.display = "block"; }
	else { document.getElementById(d).style.display = "none"; }
}