// 一个简单的方法直接设置document.body的背景颜色，即开关灯效果
// 由于这个content script是注入到web页面中的，所以这里的document也就是代表web页面中的文档
function addcomment(){
	star5 = document.getElementsByClassName('star5');
	for(var i=0;i<star5.length;i++){star5[i].click();}
	mycomm="";
	conj=["而且",",","、","感觉"];
	comm_text = document.getElementsByClassName('tag-item');
	num=[];for(i=0;i<comm_text.length;i++){num[i]=i};
	num.sort(function(){return 0.5 - Math.random()});
	num2=[0,1,2,3];num2.sort(function(){return 0.5 - Math.random()});
	for(i=0;i<5;i++){
		sn=num[i];sn2=num2[i];
		comm_text[sn].click();
		mycomm+=comm_text[sn].text;
		if(i<4)mycomm+=conj[sn2];
	}
	mycomm+="。"
	texta=document.getElementsByTagName('textarea');
	texta[0].value=mycomm;
}