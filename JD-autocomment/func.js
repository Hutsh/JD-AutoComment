function addcomment(){
	stars=document.getElementsByClassName('star star5');
	for(var l=0;l<stars.length;l++){
		stars[l].click();
		//console.log("第"+l+"个");
	}
	item=document.getElementsByClassName('f-item f-goods');
	for(var j=0;j<item.length;j++){
		console.log("第"+j+"个商品");
		//star5 = item[j].getElementsByClassName('star5');
		//for(var i=0;i<star5.length;i++){star5[i].click();}
		mycomm="";
		conj=["而且",",","、","感觉"];
		comm_text = item[j].getElementsByClassName('tag-item');
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
		texta=item[j].getElementsByTagName('textarea');
		texta[0].value=mycomm;
		console.log("第"+j+"个商品评价完成");
	}
}
