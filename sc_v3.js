'use strict';
if (window.location.href != 'https://vdvoem.me/i/iframe-themes.png') {
	window.location.replace('https://vdvoem.me/i/iframe-themes.png');
}

document.head.innerHTML = `
	<meta charset="utf-8" />
	<meta name="description" content="Чат" />
	<title>Chat</title>
	<style>
	.main {
		position: absolute;
		top: 3px;
		bottom: 3px;
		border: 1px solid black;
		background:rgb(165, 165, 165);
    }
    .markerOnline{
        background: greenyellow;
        height: 7px;
        width: 7px;
        right: 7px;
        position: absolute;
        transform: translate(0px,-8px);
        border: 1px solid;
        border-radius: 11px;
    }
    
    .unread {
        color: #00000060;
    }

	.settings{
		top: 4px;
		width: 100px;
		right: 3px;
		position: absolute;
		height: 26px;
	}

    .toggler{
		top: 4px;
		width: 27px;
		right: 107px;
		position: absolute;
		height: 26px;
    }
    
    .toggler2{
        top: 4px;
        width: 34px;
        right: 138px;
        position: absolute;
        height: 26px;
    }

	.toggler3{
        top: 4px;
        width: 50px;
        left: 10px;
        position: absolute;
        height: 26px;
		color: black;
    }

	.output {
		top: 34px;
		bottom: 160px;
		left: 3px;
		border: 1px solid black;
		position: absolute;
		overflow-y: auto;
		background: rgb(255, 255, 255);
		border-radius: 5px;
    }

    .output_wide1 {
		right: 3px;
        z-index: 1;
    }
    
    .output_wide2 {
		right: 138px;
        z-index: 1;
	}
	
	.contacts {
		top: 34px;
		bottom: 103px;
		width: 130px;
		right: 3px;
		border: 1px solid black;
		position: absolute;
		overflow-y: auto;
		background: rgb(255, 255, 255);
		border-radius: 5px;
		text-align: center;
    }

    .contacts_menu {
        position: absolute;
        width: 93px;
        z-index: 2;
		background: rgb(0 0 0 / 50%);
    }

    .blocked_by_me {
        background: linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)),url(https://stat.fr.to/media/lock1.gif);
    }

    .blocked_by_someone {
        background: linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)),url(https://stat.fr.to/media/lock2.gif);
    }

    .archMain {
        overflow:  hidden;
    }
    .arch {
        background: linear-gradient(90deg, #ff000066 0% 33%,white 33% 67%,#00ff0066 33%);
        display: inline-block;
		width: 130px;
		border-radius: 3px;
        padding: 0px;
        margin: 0px;
        white-space: nowrap;
        text-align: center;
        border: 1px solid black;
        height: 18px;
		cursor: pointer;
    }

	#info {
		width: 250px;
		text-align: center;
		box-shadow: 9px 9px 13px 0px rgba(0,0,0,0.5);
		z-index: 50;
		background: rgb(255, 255, 255);
		top: 50px;
		margin-left: 30%;
		position: absolute;
	}
	
	.input_message {
        position: absolute;
        width: calc(100% - 187px);
        left: 91px;
        height: 90px;
        bottom: 2px;
        border: 1px solid black;
        resize: none;
        background: rgb(255, 255, 255);
        border-radius: 5px;
	}
	
	.message {
		position: absolute;
	}
	
	.from {
		right: 3px;
	}
	
	.to {
		left: 3px;
	}
	
	.table {
		display: inline-block;
		width: calc(100% - 14px);
		border-radius: 3px;
		padding: 1px;
		word-wrap: break-word;
	}

	.contactsList{
		border: 1px solid gray;
		cursor: pointer;
	}

	.friendinvite{
		text-align: center;
		border: 1px solid rgba(128, 128, 128, 0.74);
	}
	.innerMessage {
		display: inline-block;
		margin-left: 5px;
		margin-right: 5px;
		padding: 3px;
		border: 1px solid rgba(128, 128, 128, 0.74);
		border-radius: 10px;
		max-width: calc(100% - 100px);
		min-width: 100px;
        text-align: center;
        position: relative;
    }


	.time {
		display: inline-block;
		margin-left: 5px;
		margin-right: 5px;
		padding: 3px;
		color: #00000054;
	}
	
	.from {
		background-color: #00a6ff40;
		text-align: right;
	}

	.to {
		background-color: #f4ff001c;
}
	
	.got-message {
		background: #ff000042;
		font-weight: 900;
    }
    
    .img_pic {
        height: 200px;
    }
	
	.message-counter {
		border: 2px solid;
		padding-left: 5px;
		padding-right: 5px;
		border-radius: 11px; 
		margin-left: 5px;
	}
	
	.hidden{
		display: none;
	}
	
	.notAccepted {
		background: #bdbdbd;
    }
    
    .avatar{
        width:19px;
        height:19px;
        position: absolute;
        left:7px;
        opacity: 0.6;
    }
    
    .contact_invite {
		background: linear-gradient(90deg, #00ff0066 0% 50%,#ff000066 50%);
	}

	#fullscr_div {
		position: absolute;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.267);
		z-index: 2;
		top: 0px;
		left: 0px;
		text-align: center;
	}
	
	.start_butt{
		
		position: absolute;
		width: 84px;
		left: 4px;
		height: 97px;
		bottom: 2px;
		font-size: x-large;
		background: rgb(255, 255, 255);
		border-radius: 5px;
	
	}
	
	.load_pic{
		position: absolute;
		width: 84px;
		right: 3px;
		height: 97px;
		bottom: 2px;
		font-size: x-large;
		background: rgb(255, 255, 255);
		border-radius: 5px;
    }
    
	#info li  {
		float: left;
		margin-right: 5px;
		border: 1px solid black;
		border-radius: 7px;
		padding: 1px;
		margin-bottom: 5px;
		}
		#info span  {
		border: 1px solid black;
		font-size: 14px;
		display: inline-block;
		margin: 5px;
		}
		#info div  {
		border: 1px solid black;
		font-size: 14px;
		display: inline-block;
		margin: 5px;
		}
		
		#info img  {
			border: 3px;
			width: 20px;
			margin-right: 10px;
			margin-left: 10px;
		}
		.fastButtons {
			float: left;
			position: absolute;
			bottom: 0px;
			width: 99%;
			border: 1px solid;
		}
		.automessageInp{
			width: calc(100% - 45px);
		}
		.automessageTimer{
			width: 26px;
			text-align: center;
		}
		.buttonDB {
			margin: 3px;
			display: inline-block;
			cursor: pointer;
			text-align: center;
			text-decoration: none;
			outline: none;
			border-radius: 15px;
			box-shadow: 0 4px #999;
			border: 1px solid gray;
		}
		
		.buttonDB:hover {
		background-color: whitesmoke;
		}
		
		.buttonDB:active {
		box-shadow: 0 0px #999;
		background-color: white;
		}
		.autobutton {
			bottom: 103px;
			left: 3px;
			right: 138px;
			border: 1px solid black;
			position: absolute;
			overflow-y: auto;
			background: rgb(255, 255, 255);
			border-radius: 5px;
        }
        
        .autobutton2 {
			bottom: 103px;
			left: 3px;
			right: 3px;
			border: 1px solid black;
			position: absolute;
			overflow-y: auto;
			background: rgb(255, 255, 255);
			border-radius: 5px;
		}
		input[type=number] {
			-moz-appearance: textfield;
		  }
        
	</style>
`

let h1 = document.createElement('style');
h1.innerHTML = `.cssload-loader {
	position: relative;
	left: calc(50% - 31px);
	width: 62px;
	height: 62px;
	border-radius: 50%;
	perspective: 780px;
}

.cssload-inner {
	position: absolute;
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	border-radius: 50%;	
}

.cssload-inner.cssload-one {
	left: 0%;
	top: 0%;
	animation: cssload-rotate-one 1.15s linear infinite;
	border-bottom: 3px solid rgb(0,0,0);
}

.cssload-inner.cssload-two {
	right: 0%;
	top: 0%;
	animation: cssload-rotate-two 1.15s linear infinite;
	border-right: 3px solid rgb(0,0,0);
}

.cssload-inner.cssload-three {
	right: 0%;
	bottom: 0%;
	animation: cssload-rotate-three 1.15s linear infinite;
	border-top: 3px solid rgb(0,0,0);
}

@keyframes cssload-rotate-one {
	0% {
		transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
	}
	100% {
		transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
	}
}

@keyframes cssload-rotate-two {
	0% {
		transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
	}
	100% {
		transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
	}
}

@keyframes cssload-rotate-three {
	0% {
		transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
	}
	100% {
		transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
	}
}`
document.head.appendChild(h1);

let script1 = document.createElement('script');
script1.src = "https://www.google.com/recaptcha/api.js?render=explicit&hl=ru";
document.getElementsByTagName('head')[0].appendChild(script1);
let chatsCount = 1;
var divMain = $('<div/>');

var css = {
	'height': '15%',
	'padding': '0 20px',
	'vertical-align': 'middle',
	'box-shadow': '1px 1px 1px 1px #999',
	'cursor': 'pointer',
	'text-decoration': 'none !important',
	'margin-bottom': '10px',
	'width': '60%',
	'font-size': '80px'
}
divMain.css({
	'width': '99%',
	'position': 'absolute',
	'text-align': 'center',
	background: 'white',
	'height': '99%'
});
divMain.appendTo('body');
for (let index = 1; index <= 6; index++) {
	$('<button>' + index + ' чат(-ов)</button>')
		.click(() => {
			chatsCount = index;
			divMain.remove();
			let init_src = document.createElement('script');
			init_src.src = "https://stat.fr.to/v3_3/init.js?" + Date.now();
			document.getElementsByTagName('head')[0].appendChild(init_src);
		})
		.css(css)
		.appendTo(divMain);

}