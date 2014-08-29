 tempa = [[5,250,0],[7,530,1],[9,900,2],[11,1380,3],[13,1950,4],[18,4150,5],[20,10000,6],[25,32000,7]];
 tempname = [
["第一の祠","ボーン退治"],
["第九領","ゴブリン退治"],
["第二の祠","鬼退治"],
["第三の祠","トレント退治"],
["第四の祠","ゴーレム退治"],
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



