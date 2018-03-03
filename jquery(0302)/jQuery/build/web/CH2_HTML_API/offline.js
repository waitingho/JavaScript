// JavaScript Document

window.addEventListener("load", init);

function init()
{
	//自動偵測
	window.addEventListener("online", onlineHnadler);
	window.addEventListener("offline", offlineHandler);
	
	if(applicationCache != undefined)
	{
		document.getElementById("status").innerHTML = "Support";
		
		//按鈕行為註冊
		//document.getElementById("updateButton").addEventListener("click", updateHandler);
		document.getElementById("gameButton").addEventListener("click", gameHandler);
		
		//顯示生命週期
		document.getElementById("log").innerHTML = "<li>" + applicationCache.status + "</li>";
		
		//applicationCache各事件註冊
		applicationCache.onchecking = function(){
			document.getElementById("log").innerHTML += "<li>checking...</li>";
		}
		
		applicationCache.onerror = function(){
			document.getElementById("log").innerHTML += "<li>ERROR!</li>";
		}
		
		applicationCache.onnoupdate = function(){
			document.getElementById("log").innerHTML += "<li>no update...</li>";
		}
		
		applicationCache.ondownloading = function(){
			document.getElementById("log").innerHTML += "<li>downloading...</li>";
		}
		
		applicationCache.onprogress = function(){
			document.getElementById("log").innerHTML += "<li>progressing...</li>";
		}
		
		applicationCache.onupdateready = function(){
			document.getElementById("log").innerHTML += "<li>updateready...</li>";
		}
		
		applicationCache.oncached = function(){
			document.getElementById("log").innerHTML += "<li>cached...</li>";
		}
		
		applicationCache.onobsolete = function(){
			document.getElementById("log").innerHTML += "<li>obsolete...</li>";
		}
		
		
	}
	else
	{
		document.getElementById("status").innerHTML = "Not Support";
	}
}

function onlineHnadler()
{
	document.getElementById("photo").src = "images/connect_yes.png";
}

function offlineHandler()
{
	document.getElementById("photo").src = "images/connect_no.png";
}

function updateHandler()
{
	try
	{
		applicationCache.update();
	}
	catch(e)
	{
		document.getElementById("log").innerHTML += "<li>ERROR: " + e + "</li>";
	}
}

function gameHandler()
{
	window.open("game.html", "GAME", "height=320,width=320");
}
