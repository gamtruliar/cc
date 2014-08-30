 tempa = [
 [5,250,0],
 [7,530,1],
 [9,900,2],
 [11,1380,3],
 [13,1950,4],
 [15,3000,5],
 [18,4150,6],
 [20,8000,7],
 [25,32000,8]
 ];
 tempname = [
["第一の祠","ボーン退治"],
["第九領","ゴブリン退治"],
["第二の祠","鬼退治"],
["第三の祠","トレント退治"],
["第四の祠","ゴーレム退治"],
["第九領","黒の軍勢注意報"],
["火中の祠","ゴースト退治"],
["火中の祠","ゴースト注意報"],
["火中の祠","強敵警報"]
];

var calat=0;
function calccost(arr,a)
{
	var summm =0;
	for(var i=0;i<arr.length;i++)
	{
		summm+=a[arr[i]][1];
	}
	return summm;
}
function app(remaincost,addpos,arr,bestarr,a)
{
	calat++;
	if(addpos>=0)
	{
	if(remaincost<a[addpos][0])
	{
		var bcc=calccost(arr,a);
		if(bcc>calccost(bestarr,a))
		{
			bestarr.length=0;
			for(var i=0;i<arr.length;i++)
			{
				bestarr.push(arr[i]);
			}
		}
		return;
	}
	
		arr.push(addpos);
		remaincost-=a[addpos][0];
	}
	else
	{
		addpos=0;
	}
	for(var i=addpos;i<a.length;i++)
	{
		app(remaincost,i,arr.slice(0),bestarr,a);
	}
}
function findsolution(maxcost,arrOfAvailableMission)
{	
calat=0;
	var arrs=[];
	app(maxcost,-1,[],arrs,arrOfAvailableMission);
	return arrs;
}
function mins2hourspmins(mins)
{
	var dd=Math.floor(mins/(60*24));
	var hh=Math.floor((mins%(60*24))/60);
	if(dd==0)
	{
		if(hh==0)
		{
		return (mins%(60))+"分鐘";
		}
		else
		{
		return hh+"小時"+(mins%(60))+"分鐘";
		}
	}
	else
	{
		return dd+"日"+hh+"小時"+(mins%(60))+"分鐘";
	}
	
}



