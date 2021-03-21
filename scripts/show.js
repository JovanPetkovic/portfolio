var buttons = document.querySelector('.content').getElementsByTagName('button');


var work = {
	init: function(){
		this.cacheDom();
		this.close();
	},
	cacheDom: function(){
		this.frame = document.querySelector('.pictureframe');
		this.button = this.frame.querySelector('button');
	},
	show: function(element){
		this.frame.style.display = 'block';
		this.frame.classList.add('opacityShow');
	},
	close: function(){
		self = this;
		this.button.addEventListener('click',function(){
			self.frame.classList.remove('opacityShow');
			for(var i=0;i<3;i++){
				self.frame.children[i+1].removeAttribute("style");
			}
		})
	}
}

for(var i=0;i<3;i++){
	buttons[i].addEventListener('click',function(){
		work.frame.querySelector('#' + this.getAttribute('id') + 'i').style.display = 'inline-block';
		console.log('#' + this.getAttribute('id') + 'i');
		work.show();
	})
}