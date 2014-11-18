
		

			$('.subcontent:not(#ancherComplaint)').click(
				function swap() {
					var img=document.getElementById("content").getElementsByTagName("img")[0].src ;
					var title=document.getElementById("content").getElementsByTagName("h2")[0].innerHTML;
					var text=document.getElementById("content").getElementsByTagName("p")[0].innerHTML;
					//image
					document.getElementById("content").getElementsByTagName("img")[0].src = document.getElementById(this.id).getElementsByTagName('img')[0].src;
					//title
					document.getElementById("content").getElementsByTagName("h2")[0].innerHTML = document.getElementById(this.id).getElementsByTagName('p1')[0].innerHTML;
					//text
					document.getElementById("content").getElementsByTagName("p")[0].innerHTML = document.getElementById(this.id).getElementsByTagName('p')[0].innerHTML;
					
					//sub
					document.getElementById(this.id).getElementsByTagName('img')[0].src=img;
					document.getElementById(this.id).getElementsByTagName('p1')[0].innerHTML=title;
					document.getElementById(this.id).getElementsByTagName('p')[0].innerHTML=text;
				});