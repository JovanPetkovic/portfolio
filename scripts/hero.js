var hero = {
	init: function(){
		this.cacheDom();
		this.frameShow(this.home);
	},
	cacheDom: function(){
		this.home = document.querySelector('#home');
	},
	frameShow: function(frame){
		var animatedH2Text = frame.querySelector('.jovan');
		var textBox = frame.querySelector('.textBox');
		var secondDiv = frame.children[1];
		frame.classList.remove('hide');
		frame.classList.add('showBox');
		animatedH2Text.classList.add('headerAnimation');
		textBox.classList.add('alignAnimation');
		secondDiv.classList.add('opacityShow');
		setTimeout(function(){
			frame.classList.remove('hide');
		},6000)
	},
	frameHide: function(frame){
		setTimeout(function(){
			frame.classList.add('hide');
			divs.forEach(function(element){
				element.classList.remove('opacityHide')
			})
		},2000);
		frame.classList.remove('showBox');
		var animatedH2Text = frame.querySelector('.jovan');
		var textBox = frame.querySelector('.textBox');
		var secondDiv = frame.children[1];
		var firstDiv = frame.children[0];
		secondDiv.classList.remove('opacityShow');
		var divs = Array.from(frame.children);
		setTimeout(function(){
			animatedH2Text.classList.remove('headerAnimation');
			textBox.classList.remove('alignAnimation');
		},1000)
		divs.forEach(function(element){
			element.classList.add('opacityHide');
		})
	},
	workShow: function(){
		var frame = document.querySelector('#work');
		var animatedH2Text = frame.querySelector('.jovan');
		var textBox = frame.querySelector('.textBox');
		var secondDiv = frame.children[1];
		frame.classList.remove('hide');
		frame.classList.add('showBox');
		animatedH2Text.classList.add('headerAnimation');
		textBox.classList.add('workAlignAnimation');
		secondDiv.classList.add('buttonShow');
		setTimeout(function(){
			frame.classList.remove('hide');
		},6000)
	},
	workHide: function(){
		var frame = document.querySelector('#work');
		setTimeout(function(){
			frame.classList.add('hide');
			Array.from(frame.children).forEach(function(element){
				element.classList.remove('opacityHide')
			})
		},2000);
		frame.classList.remove('showBox');
		var animatedH2Text = frame.querySelector('.jovan');
		var textBox = frame.querySelector('.textBox');
		var secondDiv = frame.children[1];
		var firstDiv = frame.children[0];
		setTimeout(function(){
			animatedH2Text.classList.remove('headerAnimation');
			textBox.classList.remove('workAlignAnimation');
			secondDiv.classList.remove('buttonShow');
			Array.from(secondDiv.children).forEach(function(element){
				element.classList.remove('opacityHide');
			})
			secondDiv.classList.add('opacityHide');
		},1000)
		Array.from(secondDiv.children).forEach(function(element){
			element.classList.add('opacityHide');
		})
		firstDiv.classList.add('opacityHide');
		
	}
}