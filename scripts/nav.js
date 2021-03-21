var nav = {
	init: function(){
		this.cacheDom();
		this.hoverInit();
		this.clickInit();
	},
	cacheDom: function(){
		this.navbar = document.querySelector('#navbuttons');
		this.buttons = this.navbar.getElementsByTagName('button');
		this.line = this.navbar.querySelector('div');
		this.currentFrame = 'Home';
	},
	hoverInit: function(){
		var self = this;
		for(var i=0;i<this.buttons.length;i++){
			button = this.buttons[i];
			button.addEventListener('mouseenter', function(){
				self.line.classList.toggle(this.innerHTML.toLowerCase());
			})
			button.addEventListener('mouseleave',function(){
				setTimeout(function(){
					self.line.classList.toggle(this.innerHTML.toLowerCase());	
				}.bind(this),100);
			})
		}
	},
	clickInit: function(){
		var self = this;
		for(var i=0;i<this.buttons.length;i++){
			button = this.buttons[i];
			button.addEventListener('click', function(){
				for(var i=0;i<3;i++){
					self.buttons[i].disabled = true;
				}
				setTimeout(function(){
					for(var i=0;i<3;i++){
					self.buttons[i].disabled = false;
					}
				},9000)
				if(self.currentFrame === "Work"){
					hero.workHide();
				}
				else{
					hero.frameHide(document.querySelector('#'+ self.currentFrame.toLowerCase()));
				}
				self.line.classList.replace(self.currentFrame,this.innerHTML);
				self.currentFrame = this.innerHTML;
				setTimeout(function(){
					if(self.currentFrame === 'Work'){
						hero.workShow();
					}
					else{
					hero.frameShow(document.querySelector('#' + self.currentFrame.toLowerCase()))
					}
				},2000);
			})
		}
	}
}