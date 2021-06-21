<template lang="pug">
	.socials
		.socials__header
			span Или войти через
		ul.socials__list
			li.socials__item
				a(href="#").socials__link
					img(src="@/assets/img/icons/socials/fb.svg")
			li.socials__item
				a(href="#").socials__link
					img(src="@/assets/img/icons/socials/vk.svg")
			li.socials__item
				a(href="#").socials__link
					img(src="@/assets/img/icons/socials/g.svg")
			li.socials__item
				a(href="#").socials__link
					img(src="@/assets/img/icons/socials/in.svg")

</template>

<style lang="scss">

		.socials{
			margin-top: 30px;
			margin-bottom: 20px;
		}
		.socials__header{
			position: relative;
			text-align: center;
			margin-bottom: 20px;
			span{
				position: relative;
				padding: 0 10px;
				font-size: 15px;
				line-height: 20px;
				text-align: center;
				color: #999999;
				z-index: 2;
				background-color: #fff;
			}
			&:before{
				content: '';
				position: absolute;
				left: 0;
				top: 50%;
				transform: translateY(50%);
				width: 100%;
				height: 1px;
				background: #E0E0E0;
			}

		}
		.socials__list{
			display: flex;
			justify-content: center;
		}
		.socials__item{
			margin: 0 10px;
			list-style-type: none;
		}
		.socials__link{
			display: block;	
			width: 60px;
			height: 60px;
			border-radius: 100%;
			box-shadow: 0px 5px 20px rgba(59, 89, 152, 0.3);
			text-decoration: none;

		}
					img{
						max-width: 100%;
					}

</style>