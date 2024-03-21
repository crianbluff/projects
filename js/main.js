const URL_CODEPEN_PEN = 'https://codepen.io/crianbluff/full';
const URL_CODEPEN_PREVIEW_IMG = 'https://shots.codepen.io/username/pen';

/* Classes & ids */
const ID_NAMES = {
	ctnTagButtons: 'ctn-tag-buttons',
	ctnSelectedFilters: 'ctn-selected-filters',
	selectedFilters: 'selected-filters',
	ctnSortButtons: 'ctn-sort-btns',
	ctnProjects: 'ctn-projects',
	projects: 'projects',
	ctnProjectsFilteredByTags: 'ctn-projects-filtered-by-tags',
	NotFoundProjectsFilteredByTags: 'not-found-projects-filtered-by-tags',
	projectsFilterByTags: 'projects-filter-by-tags',
};
const CLASS_NAMES = {
	ctnCards: 'ctn-cards',
	ctnCard: 'ctn-card',
	card: 'card',
};

/* Projects */
const projectsCss = [
	{
		link: 'rXMBgy',
		imgUrl: 'rXMBgy-512.webp?version=1564756093',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect Thanos Snap Dispersion',
		tags: ['animation', 'hover', 'image', 'blur', 'responsive']
	},
	{
		link: 'EqyBvL',
		imgUrl: 'EqyBvL-512.webp?version=1564066322',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect Distortion Image',
		tags: ['hover', 'animation', 'slider', 'image', 'blur', 'responsive']
	},
	{
		link: 'zgBbvP',
		imgUrl: 'zgBbvP-512.webp?version=1564060597',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Text Animation Tik Tok',
		tags: ['animation', 'responsive']
	},
	{
		link: 'OKXNYL',
		imgUrl: 'OKXNYL-512.webp?version=1564008551',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect Flip Card 3D',
		tags: ['hover', 'card', '3d', 'shadow', 'responsive', 'image']
	},
	{
		link: 'PMzPON',
		imgUrl: 'PMzPON-512.webp?version=1564065318',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect Hover In Card',
		tags: ['hover', 'card', '3d', 'responsive', 'clip-path', 'geometry']
	},
	{
		link: 'rXeVMy',
		imgUrl: 'rXeVMy-512.webp?version=1563997266',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Button Shiny Glass',
		tags: ['button', 'glass', 'gradient', 'border', 'hover']
	},
	{
		link: 'xvVbMq',
		imgUrl: 'xvVbMq-512.webp?version=1563919643',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect Hover Button',
		tags: ['hover', 'button', 'border', 'shadow', 'responsive']
	},
	{
		link: 'WVrmxO',
		imgUrl: 'WVrmxO-512.webp?version=1563899450',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect Text Shuffle',
		tags: ['animation', 'steps']
	},
	{
		link: 'qebMPr',
		imgUrl: 'qebMPr-512.jpg?version=1563890244',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Loader Rings',
		tags: ['preloader', 'animation', '3d', 'border', 'shadow', 'gradient']
	},
	{
		link: 'bXEZjY',
		imgUrl: 'bXEZjY-512.webp?version=1563915612',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect clip-path Hover',
		tags: ['button', 'card', 'hover', 'clip-path', 'geometry', 'circle', 'responsive']
	},
	{
		link: 'NQGmMZ',
		imgUrl: 'NQGmMZ-512.webp?version=1563826758',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Jumping Text',
		tags: ['animation', 'data', 'preloader', 'text-stroke']
	},
	{
		link: 'qeOeWa',
		imgUrl: 'qeOeWa-512.webp?version=1563832077',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect endless road',
		tags: ['animation', '3d', 'gradient', 'shadow']
	},
	{
		link: 'RXWEvq',
		imgUrl: 'RXWEvq-512.webp?version=1563826273',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: '3d number countdown',
		tags: ['animation', 'countdown', 'shadow', 'blur', '3d']
	},
	{
		link: 'Zgbmwd',
		imgUrl: 'Zgbmwd-512.webp?version=1563817050',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: '3d Wavy Circle Loader',
		tags: ['animation', 'preloader', '3d', 'border', 'responsive']
	},
	{
		link: 'aevQLo',
		imgUrl: 'aevQLo-512.webp?version=1563814812',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Checkbox Day Night Mode',
		tags: ['checkbox', 'dark-theme']
	},
	{
		link: 'NQGExw',
		imgUrl: 'NQGExw-512.webp?version=1563813797',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect Rain',
		tags: ['animation', 'image', 'background-position']
	},
	{
		link: 'MNaPov',
		imgUrl: 'MNaPov-512.webp?version=1563812650',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: '3d Split Flip Image Hover',
		tags: ['hover', 'animation', 'background-position', '3d', 'image']
	},
	{
		link: 'yWrygE',
		imgUrl: 'yWrygE-512.webp?version=1580041905',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Email Signature',
		tags: ['card', 'email']
	},
	{
		link: 'KbXXGw',
		imgUrl: 'KbXXGw-320.webp?version=1546033928',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Background With Blind',
		tags: ['gradient', 'mix-blend-mode', 'image', 'filter', 'repeating-linear-gradient']
	},
	{
		link: 'LMzLOX',
		imgUrl: 'LMzLOX-320.webp?version=1546024963',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Glowing Checkbox',
		tags: ['checkbox', 'neon', 'gradient', 'glass', 'shadow', 'responsive']
	},
	{
		link: 'bOogbb',
		imgUrl: 'bOogbb-320.webp?version=1563829712',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Loader Ring',
		tags: ['animation', 'preloader', 'gradient', 'blur', 'responsive', 'shadow']
	},
	{
		link: 'aPyXyJ',
		imgUrl: 'aPyXyJ-320.webp?version=1547210193',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Calendar',
		tags: ['card', 'grid', 'hover', 'responsive']
	},
	{
		link: 'GPvzjG',
		imgUrl: 'GPvzjG-320.webp?version=1545946762',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Skew Text Typography',
		tags: ['isometric', 'responsive', 'geometry']
	},
	{
		link: 'MZvZvZ',
		imgUrl: 'MZvZvZ-320.webp?version=1546003807',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Split Image On Hover',
		tags: ['hover', 'card', 'image', 'background-position']
	},
	{
		link: 'KbvodN',
		imgUrl: 'KbvodN-320.jpg?version=1545945975',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Infinite Dron Camera',
		tags: ['3d', 'animation', 'border', 'gradient']
	},
	{
		link: 'jXLWZX',
		imgUrl: 'jXLWZX-320.webp?version=1546011167',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect Shine',
		tags: ['hover', 'glass', 'shadow', 'responsive']
	},
	{
		link: 'wRqMzp',
		imgUrl: 'wRqMzp-320.webp?version=1545864128',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect Layer',
		tags: ['hover', 'data', 'shadow']
	},
	{
		link: 'PXKqmV',
		imgUrl: 'PXKqmV-320.webp?version=1547209054',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect Ripple',
		tags: ['animation', 'preloader', 'shadow', ' responsive']
	},
	{
		link: 'OrgKdw',
		imgUrl: 'OrgKdw-320.webp?version=1547208921',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: '3d Shape',
		tags: ['3d', 'cube', 'geometry', 'responsive']
	},
	{
		link: 'QzgXoQ',
		imgUrl: 'QzgXoQ-320.webp?version=1563829726',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: '3d Background',
		tags: ['3d', 'gradient', 'border', 'shadow', 'animation', 'responsive']
	},
	{
		link: 'gZRNqL',
		imgUrl: 'gZRNqL-320.webp?version=1545835629',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Rhombus Loader',
		tags: ['animation', 'preloader', 'rhombus', 'geometry']
	},
	{
		link: 'vvmqKE',
		imgUrl: 'vvmqKE-320.webp?version=1598284593',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Merry Christmas',
		tags: ['animation', 'image', 'shadow', 'gradient', 'mix-blend-mode', 'background-position', 'responsive']
	},
	{
		link: 'KbmYzJ',
		imgUrl: 'KbmYzJ-320.webp?version=1563829734',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Loading',
		tags: ['animation', 'mix-blend-mode', 'preloader', 'responsive']
	},
	{
		link: 'maRvdN',
		imgUrl: 'maRvdN-320.webp?version=1545329176',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Css Fireflies',
		tags: ['animation', 'shadow']
	},
	{
		link: 'Zqgmgg',
		imgUrl: 'Zqgmgg-320.webp?version=1541081671',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Pure Css Tooltips',
		tags: ['tooltip', 'border', 'data']
	},
	{
		link: 'YJRENm',
		imgUrl: 'YJRENm-320.webp?version=1540495203',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Gallery Pictures Grid',
		tags: ['grid', 'image', 'masonry']
	},
	{
		link: 'rZodGx',
		imgUrl: 'rZodGx-320.webp?version=1537376655',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Animation Logo Angular',
		tags: ['animation', 'svg', 'stroke', 'fill', 'responsive']
	},
	{
		link: 'MqzrGV',
		imgUrl: 'MqzrGV-320.webp?version=1537407989',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Hover With clip-path',
		tags: ['hover', 'clip-path']
	},
	{
		link: 'zmyyjV',
		imgUrl: 'zmyyjV-320.webp?version=1540512619',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Template Test',
		tags: ['template', 'responsive', 'hamburger', 'menu', 'border', 'hover']
	},
	{
		link: 'Jmwwdq',
		imgUrl: 'Jmwwdq-320.webp?version=1540502462',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Template Test',
		tags: ['template', 'responsive', 'hamburger', 'menu', 'border', 'hover', 'footer', 'button', '3d', 'gradient']
	},
	{
		link: 'dqQZxQ',
		imgUrl: 'dqQZxQ-320.webp?version=1537293333',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Background Blurred',
		tags: ['blur', 'image']
	},
	{
		link: 'eLLEow',
		imgUrl: 'eLLEow-320.webp?version=1537291813',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Cube Family',
		tags: ['animation', 'geometry', '3d', 'cube']
	},
	{
		link: 'eLLEVX',
		imgUrl: 'eLLEVX-320.webp?version=1540425861',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Cube Rotating On Its Own Axis',
		tags: ['animation', 'geometry', '3d', 'cube', 'grid', 'responsive']
	},
	{
		link: 'vzzNZw',
		imgUrl: 'vzzNZw-320.webp?version=1537087355',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Cube',
		tags: ['animation', 'geometry', '3d', 'cube', 'responsive']
	},
	{
		link: 'dqqPxv',
		imgUrl: 'dqqPxv-320.webp?version=1537088784',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Reloj Css',
		tags: ['animation', 'gradient', 'clock', 'responsive']
	},
	{
		link: 'zJLgqb',
		imgUrl: 'zJLgqb-320.webp?version=1537087754',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Reverse Layout Animation',
		tags: ['animation', 'template', 'grid', 'animationend', 'footer', 'responsive']
	},
	{
		link: 'NLBZLp',
		imgUrl: 'NLBZLp-320.webp?version=1537086565',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Hearth Css',
		tags: ['animation', 'animation-play-state']
	},
	{
		link: 'eLjweV',
		imgUrl: 'eLjweV-320.webp?version=1537086286',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Animation Count Css',
		tags: ['animation', 'counter-increment', 'counter']
	},
	{
		link: 'PBMrKe',
		imgUrl: 'PBMrKe-320.webp?version=1534586030',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Mouse Move Parallax Effect',
		tags: ['parallax', 'mouse', 'image']
	},
	{
		link: 'MBPgVq',
		imgUrl: 'MBPgVq-320.webp?version=1533647513',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Not selector',
		tags: ['hover', 'not', 'card', 'responsive']
	},
	{
		link: 'yqRBjq',
		imgUrl: 'yqRBjq-320.webp?version=1536857081',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Table responsive',
		tags: ['table', 'responsive', 'hover']
	},
	{
		link: 'pZxzYO',
		imgUrl: 'pZxzYO-320.webp?version=1533648099',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Text 3d',
		tags: ['3d', 'shadow', 'responsive']
	},
	{
		link: 'jpeNwa',
		imgUrl: 'jpeNwa-512.webp?version=1533647133',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Pseudoelements Before & After',
		tags: ['shadow', 'gradient', 'responsive']
	},
	{
		link: 'wxYwaz',
		imgUrl: 'wxYwaz-512.webp?version=1533646589',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Gallery Images',
		tags: ['hover', 'responsive', 'card']
	},
	{
		link: 'NBOKxp',
		imgUrl: 'NBOKxp-512.webp?version=1533646753',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'List Homeworks',
		tags: ['gradient', 'background-position', 'responsive', 'list']
	},
	{
		link: 'NBLVJY',
		imgUrl: 'NBLVJY-512.webp?version=1538929979',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Background Image Transparent',
		tags: ['card', 'image', 'glass', 'responsive']
	},
	{
		link: 'oMqedL',
		imgUrl: 'oMqedL-512.webp?version=1536859695',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Cards 3d',
		tags: ['card', '3d', 'responsive', 'backface-visibility']
	},
	{
		link: 'xJWLVv',
		imgUrl: 'xJWLVv-512.webp?version=1536854240',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Layout Responsive Flexbox',
		tags: ['template', 'footer', 'menu', 'responsive']
	},
	{
		link: 'QBmvYj',
		imgUrl: 'QBmvYj-512.webp?version=1534287463',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Layout Responsive Flexbox Grid',
		tags: ['template', 'footer', 'menu', 'border', 'responsive']
	},
	{
		link: 'pZLPxy',
		imgUrl: 'pZLPxy-512.webp?version=1599586138',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Customized Checkbox & Radio Buttons',
		tags: ['button', 'checkbox', 'hover', 'responsive']
	},
	{
		link: 'zLWwrB',
		imgUrl: 'zLWwrB-512.webp?version=1536858317',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Social Media Sticky',
		tags: ['button', 'responsive']
	},
	{
		link: 'mjXrzx',
		imgUrl: 'mjXrzx-512.webp?version=1536860149',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Cafam Domicilios',
		tags: ['template', 'responsive']
	},
	{
		link: 'jpZrgp',
		imgUrl: 'jpZrgp-512.webp?version=1534585361',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Menu Animated Dropdown',
		tags: ['menu', 'drop-down', 'responsive']
	},
	{
		link: 'rrqBWr',
		imgUrl: 'rrqBWr-512.webp?version=1533646927',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Hover In Cols & Rows',
		tags: ['hover', 'table', 'responsive']
	},
	{
		link: 'pZOMBw',
		imgUrl: 'pZOMBw-512.webp?version=1533646185',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Ying yang',
		tags: ['animation', 'preloader', 'gradient', 'shadow', 'responsive']
	},
	{
		link: 'oMPrRo',
		imgUrl: 'oMPrRo-512.webp?version=1533644533',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Borders of colors',
		tags: ['border', 'shadow', 'card', 'responsive']
	},
	{
		link: 'bjxXdP',
		imgUrl: 'bjxXdP-512.webp?version=1533644654',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Borders multiple',
		tags: ['border', 'shadow', 'responsive']
	},
	{
		link: 'ZjOJJQ',
		imgUrl: 'ZjOJJQ-512.webp?version=1700560944',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Animation Turn Effect',
		tags: ['animation', '3d', 'background-clip', 'responsive']
	},
	{
		link: 'yEXQox',
		imgUrl: 'yEXQox-512.webp?version=1528916488',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'CSS Text Loading',
		tags: ['animation', 'preloader', 'responsive', 'blur', '3d', 'data']
	},
	{
		link: 'deBPgO',
		imgUrl: 'deBPgO-512.webp?version=1700560546',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Beatting Animation',
		tags: ['animation', 'shadow', 'glass']
	},
	{
		link: 'YzyNPgm',
		imgUrl: 'YzyNPgm-512.webp?version=1587651889',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect Hover Card',
		tags: ['card', 'hover', 'clip-path', 'circle', 'geometry', 'responsive']
	},
	{
		link: 'VozPeY',
		imgUrl: 'VozPeY-512.webp?version=1564754355',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Cards',
		tags: ['card', 'hover', 'responsive', 'grid', 'shadow']
	},
	{
		link: 'BaQdvJd',
		imgUrl: 'BaQdvJd-512.webp?version=1614042368',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Menu',
		tags: ['menu', 'hover', 'responsive']
	},
	{
		link: 'oNYwEKa',
		imgUrl: 'oNYwEKa-512.webp?version=1700560512',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Cards',
		tags: ['card', 'hover', 'gradient', 'responsive', 'blur', 'shadow', 'glass']
	},
	{
		link: 'zYYNMgq',
		imgUrl: 'zYYNMgq-512.webp?version=1571847691',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Layout responsive',
		tags: ['template', 'responsive']
	},
	{
		link: 'XWWpjaR',
		imgUrl: 'XWWpjaR-512.webp?version=1599856924',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Button Gradient',
		tags: ['button', 'gradient', 'responsive', 'hover', 'blur']
	},
	{
		link: 'qBBRNWd',
		imgUrl: 'qBBRNWd-512.webp?version=1571846570',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Video Cube',
		tags: ['video', 'cube', 'geometry']
	},
	{
		link: 'KKKaMGj',
		imgUrl: 'KKKaMGj-512.webp?version=1571693744',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect Change Background On Hover',
		tags: ['hover', 'menu', 'responsive', 'shadow']
	},
	{
		link: 'OJJWNzb',
		imgUrl: 'OJJWNzb-512.webp?version=1571848023',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect Water Wave Button',
		tags: ['button', 'animation', 'hover']
	},
	{
		link: 'abbzxKJ',
		imgUrl: 'abbzxKJ-512.webp?version=1570544585',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect Loading Svg',
		tags: ['svg', 'animation', 'responsive', 'preloader']
	},
	{
		link: 'XWWJQOp',
		imgUrl: 'XWWJQOp-512.webp?version=1570545923',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect Liquid Loader',
		tags: ['animation', 'responsive', 'preloader', 'water']
	},
	{
		link: 'gOYdOXQ',
		imgUrl: 'gOYdOXQ-512.webp?version=1568651251',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect loading text',
		tags: ['animation', 'preloader', 'data', 'responsive', 'water']
	},
	{
		link: 'wvwEwEX',
		imgUrl: 'wvwEwEX-512.webp?version=1568651103',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect water wave',
		tags: ['animation', 'water']
	},
	{
		link: 'VwZypBx',
		imgUrl: 'VwZypBx-512.webp?version=1568650831',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect List Item',
		tags: ['hover', 'list', 'menu']
	},
	{
		link: 'rNBdBLW',
		imgUrl: 'rNBdBLW-512.webp?version=1568650810',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Quick loading bar',
		tags: ['preloader', 'animation', 'shadow']
	},
	{
		link: 'RwbQXRV',
		imgUrl: 'RwbQXRV-512.webp?version=1568650821',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Indian flag animation',
		tags: ['animation', 'responsive']
	},
	{
		link: 'GRKyrZN',
		imgUrl: 'GRKyrZN-512.webp?version=1568650841',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Wrap text around circle',
		tags: ['image', 'shape', 'circle', 'geometry']
	},
	{
		link: 'qBWpRjE',
		imgUrl: 'qBWpRjE-512.webp?version=1568650838',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect Card Direction Aware',
		tags: ['card', 'responsive', '3d', 'hover', 'shadow']
	},
	{
		link: 'eYOyBqL',
		imgUrl: 'eYOyBqL-512.webp?version=1568650845',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect ghost text',
		tags: ['animation', 'blur', 'hover']
	},
	{
		link: 'VwZymxJ',
		imgUrl: 'VwZymxJ-512.webp?version=1568650856',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect Text Glowing',
		tags: ['animation', 'responsive', 'shadow']
	},
	{
		link: 'eYOGzQZ',
		imgUrl: 'eYOGzQZ-512.webp?version=1568650868',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Tooltips',
		tags: ['tooltip', 'hover', 'responsive']
	},
	{
		link: 'xvXOpN',
		imgUrl: 'xvXOpN-512.webp?version=1568650893',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect Isometric Glass',
		tags: ['hover', 'geometry', 'isometric', 'shadow', 'glass']
	},
	{
		link: 'rXGama',
		imgUrl: 'rXGama-512.webp?version=1564779536',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect 3d Rotation',
		tags: ['animation', '3d', 'responsive']
	},
	{
		link: 'eqEqaz',
		imgUrl: 'eqEqaz-512.webp?version=1564761136',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect split text',
		tags: ['hover', 'clip-path', 'geometry', 'responsive']
	},
	{
		link: 'zgovXj',
		imgUrl: 'zgovXj-512.webp?version=1564763067',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect Rainy Text',
		tags: ['mix-blend-mode', 'text-fill-color']
	},
	{
		link: 'mNOyWV',
		imgUrl: 'mNOyWV-512.webp?version=1564763085',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect magnifying Glass',
		tags: ['glass', 'animation', 'responsive']
	},
	{
		link: 'xvRxVP',
		imgUrl: 'xvRxVP-512.webp?version=1564159586',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Neon Button Ligth',
		tags: ['button', 'neon', 'gradient', 'animation', 'hover', 'responsive']
	},
	{
		link: 'WVoeLB',
		imgUrl: 'WVoeLB-512.webp?version=1564171237',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect Colour Type Text',
		tags: ['animation', 'steps', 'data', 'background-clip', 'gradient', 'blur']
	},
	{
		link: 'OKRVpB',
		imgUrl: 'OKRVpB-512.webp?version=1564077299',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect Info Contact Reveal',
		tags: ['hover']
	},
	{
		link: 'gVwrMz',
		imgUrl: 'gVwrMz-512.webp?version=1564088351',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Menu Item Hover Images',
		tags: ['hover', 'menu', 'image']
	},
	{
		link: 'oKzNdV',
		imgUrl: 'oKzNdV-512.webp?version=1564074078',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Slideshow 3d Rotation',
		tags: ['slider', '3d', 'responsive', 'animation', 'responsive']
	},
	{
		link: 'PobjRJZ',
		imgUrl: 'PobjRJZ-512.webp?version=1613684773',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Glassmorphism Effect',
		tags: ['animation', 'glassmorphism', 'glass', 'responsive']
	},
	{
		link: 'QWGqzKg',
		imgUrl: 'QWGqzKg-512.webp?version=1614185682',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Glass Effect',
		tags: ['hover', 'glass', 'blur', 'backdrop-filter', 'background-clip']
	},
	{
		link: 'vYyepaG',
		imgUrl: 'vYyepaG-512.webp?version=1614018224',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Neon Effect',
		tags: ['animation', 'neon', 'responsive']
	},
	{
		link: 'WNoOXNx',
		imgUrl: 'WNoOXNx-512.webp?version=1613670924',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Steaming Effect',
		tags: ['animation', 'border', 'gradient', 'responsive', 'var']
	},
	{
		link: 'vYyZyVv',
		imgUrl: 'vYyZyVv-512.webp?version=1613656135',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Shadows Effect',
		tags: ['shadow', 'neumorphism', 'responsive']
	},
	{
		link: 'yLVXdWj',
		imgUrl: 'yLVXdWj-512.webp?version=1683203173',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Fire Effect',
		tags: ['animation', 'svg', 'filter', 'box-reflect', 'gradient', 'responsive']
	},
	{
		link: 'ZEByLyx',
		imgUrl: 'ZEByLyx-512.webp?version=1613653511',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Audio Player',
		tags: ['audio', 'shadow', 'responsive']
	},
	{
		link: 'zYBOqYV',
		imgUrl: 'zYBOqYV-512.webp?version=1602026789',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Ring Effect',
		tags: ['animation', 'svg', 'box-reflect', 'filter', 'blur', 'responsive']
	},
	{
		link: 'YzWKwGm',
		imgUrl: 'YzWKwGm-512.webp?version=1613684823',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Neumorphism Gradient Ring',
		tags: ['neumorphism', 'preloader', 'gradient', 'shadow', 'animation', 'blur', 'responsive']
	},
	{
		link: 'xxOzPVb',
		imgUrl: 'xxOzPVb-512.webp?version=1604431026',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect Planets',
		tags: ['animation', 'box-reflect', 'gradient', 'shadow']
	},
	{
		link: 'rNeNdbX',
		imgUrl: 'rNeNdbX-512.webp?version=1596645907',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect Hover Line Fill',
		tags: ['hover', 'border', 'responsive']
	},
	{
		link: 'JjKPdvR',
		imgUrl: 'JjKPdvR-512.webp?version=1601901459',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect Drop Shadow',
		tags: ['shadow', 'gradient', 'blur', 'responsive']
	},
	{
		link: 'eYBRBBz',
		imgUrl: 'eYBRBBz-512.webp?version=1613650364',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect Zigzag Border',
		tags: ['border', 'gradient', 'background-blend-mode', 'responsive']
	},
	{
		link: 'abZoOPm',
		imgUrl: 'abZoOPm-512.jpg?version=1601904296',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect Perpetual Animation',
		tags: ['animation', 'box-reflect', 'border', 'responsive']
	},
	{
		link: 'QWNWxKy',
		imgUrl: 'QWNWxKy-512.webp?version=1596656368',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect 3d Book',
		tags: ['hover', '3d', 'shadow', 'responsive']
	},
	{
		link: 'KKzKoWR',
		imgUrl: 'KKzKoWR-512.webp?version=1596657407',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect Falling Leaves',
		tags: ['animation', 'blur', 'responsive']
	},
	{
		link: 'vYLNKMz',
		imgUrl: 'vYLNKMz-512.webp?version=1591624352',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect text typography portrait',
		tags: ['mix-blend-mode', 'image', 'responsive']
	},
	{
		link: 'yLeYJPL',
		imgUrl: 'yLeYJPL-512.webp?version=1591624413',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect liquid loader',
		tags: ['animation', 'svg', 'water', 'preloader', 'responsive', 'filter']
	},
	{
		link: 'VwvJzZP',
		imgUrl: 'VwvJzZP-512.webp?version=1590693934',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect loading',
		tags: ['animation', 'shadow', '3d', 'preloader', 'responsive']
	},
	{
		link: 'qBOmoYO',
		imgUrl: 'qBOmoYO-512.webp?version=1587935690',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect 3d Isometric',
		tags: ['isometric', '3d', 'hover', 'responsive', 'geometry']
	},
	{
		link: 'GRprJbM',
		imgUrl: 'GRprJbM-512.webp?version=1587697795',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect Card Isometric',
		tags: ['hover', 'isometric', 'geometry', '3d', 'shadow', 'blur', 'responsive']
	},
	{
		link: 'OJPZPwb',
		imgUrl: 'OJPZPwb-512.webp?version=1578662604',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect Reflection',
		tags: ['box-reflect', 'hover', 'image', '3d', 'responsive']
	},
	{
		link: 'gObzOvE',
		imgUrl: 'gObzOvE-512.webp?version=1578658657',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect Parallax Scrolling clip-mask',
		tags: ['scroll', 'parallax', 'background-clip', 'text-fill-color', 'responsive']
	},
	{
		link: 'gObzOJV',
		imgUrl: 'gObzOJV-512.webp?version=1578659350',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Custom Scroll Bar',
		tags: ['scroll', 'responsive', 'gradient']
	},
	{
		link: 'qBEYEOQ',
		imgUrl: 'qBEYEOQ-512.webp?version=1578660058',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect 3d Editable Text',
		tags: ['isometric', '3d', 'shadow', 'contenteditable', 'geometry']
	},
	{
		link: 'PoweoZx',
		imgUrl: 'PoweoZx-512.webp?version=1578657143',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Cards',
		tags: ['card', 'hover', '3d', 'responsive']
	},
	{
		link: 'yLLZvyp',
		imgUrl: 'yLLZvyp-512.webp?version=1574253394',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect Preloader',
		tags: ['preloader', 'animation', 'shadow', 'data']
	},
	{
		link: 'YzzBYPO',
		imgUrl: 'YzzBYPO-512.webp?version=1574185638',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Card',
		tags: ['card', 'hover', 'border', 'animation', 'responsive']
	},
	{
		link: 'xxxMPJq',
		imgUrl: 'xxxMPJq-512.webp?version=1574183444',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect Diagonal',
		tags: ['clip-path', 'geometry', 'hover', 'responsive']
	}
];
const projectsAngular = [
	{
		link: '',
		imgUrl: '',
		date: '01-01-2022',
		technology: 'Angular',
		isFavorite: false,
		views: 500,
		title: '',
		tags: []
	}
];
const projectsIonic = [
	{
		link: '',
		imgUrl: '',
		date: '01-01-2022',
		technology: 'Ionic',
		isFavorite: false,
		views: 500,
		title: '',
		tags: []
	}
];
const projectsFirebase = [
	{
		link: '',
		imgUrl: '',
		date: '01-01-2022',
		technology: 'Firebase',
		isFavorite: false,
		views: 500,
		title: '',
		tags: []
	}
];
const projectsJavascript = [
	{
		link: 'GPEbzj',
		imgUrl: 'GPEbzj-320.webp?version=1545835628',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 500,
		title: 'Merry Christmas!',
		tags: ['animation', 'image', 'background-position', 'border']
	},
	{
		link: 'pZKrYZ',
		imgUrl: 'pZKrYZ-512.webp?version=1536858191',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 500,
		title: 'Template Responsive',
		tags: ['template', 'responsive', 'hamburger', 'menu']
	},
	{
		link: 'rrrVbV',
		imgUrl: 'rrrVbV-512.webp?version=1563829720',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: true,
		views: 500,
		title: 'Password Generator',
		tags: ['form', 'responsive', 'border', 'clipboard', 'button']
	},
	{
		link: 'MBGyRe',
		imgUrl: 'MBGyRe-512.webp?version=1536859860',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 500,
		title: 'Menu Responsive Hamburger',
		tags: ['menu', 'responsive', 'hamburger', 'drop-down']
	},
	{
		link: 'NBybZr',
		imgUrl: 'NBybZr-512.webp?version=1536856436',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 500,
		title: 'Form Foundation Zurb',
		tags: ['form', 'library', 'responsive', 'shadow', 'button', 'checkbox']
	},
	{
		link: 'mKwQgM',
		imgUrl: 'mKwQgM-512.webp?version=1533835398',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 500,
		title: 'Scroll Click Dynamic',
		tags: ['scroll', 'background-clip', 'animation', 'responsive']
	},
	{
		link: 'yxvMVJ',
		imgUrl: 'yxvMVJ-320.webp?version=1599585273',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 500,
		title: 'Preloader responsive',
		tags: ['preloader', 'responsive', 'animation']
	},
	{
		link: 'yxvgOw',
		imgUrl: 'yxvgOw-320.webp?version=1599585476',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 500,
		title: 'Slider Responsive',
		tags: ['slider', 'responsive', 'keyboard', 'animation', 'backface-visibility', 'mouse']
	},
	{
		link: 'OovERV',
		imgUrl: 'OovERV-320.webp?version=1599585563',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 500,
		title: 'Card Modal',
		tags: ['card', 'modal', 'shadow', 'button', '3d', 'keydown']
	},
	{
		link: 'EeExbj',
		imgUrl: 'EeExbj-320.webp?version=1536663310',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 500,
		title: 'Navegation Tabs Responsive',
		tags: ['tabs', 'responsive', 'hover', 'card']
	},
	{
		link: 'WyjaJj',
		imgUrl: 'WyjaJj-512.webp?version=1533835292',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 500,
		title: 'Scroll Detection',
		tags: ['scroll']
	},
	{
		link: 'pKEoPN',
		imgUrl: 'pKEoPN-512.webp?version=1631037968',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 500,
		title: 'Login Form',
		tags: ['form', 'button', 'shadow', 'responsive']
	},
	{
		link: 'PdRbGq',
		imgUrl: 'PdRbGq-320.webp?version=1536853338',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 100,
		title: 'Footer Mobile',
		tags: ['footer', 'mobile', 'animation', 'hover', 'shadow', 'border', 'dark-theme']
	},
	{
		link: 'XPEeBP',
		imgUrl: 'XPEeBP-320.webp?version=1536700447',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 500,
		title: 'Form Contact Responsive',
		tags: ['form', 'responsive', 'button', 'dark-theme', 'sound']
	},
	{
		link: 'BOYmLr',
		imgUrl: 'BOYmLr-320.webp?version=1536703445',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 100,
		title: 'Modals Responsive',
		tags: ['modal', 'responsive', 'sound', 'data', 'button', 'shadow', '3d']
	},
	{
		link: 'yLBobVq',
		imgUrl: 'yLBobVq-512.webp?version=1599586121',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 2000,
		title: 'Portfolio',
		tags: ['card', 'responsive', 'image', 'search', 'data', 'library']
	},
	{
		link: 'eqBZMm',
		imgUrl: 'eqBZMm-512.webp?version=1564180531',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 500,
		title: 'Image Reveal On Scroll',
		tags: ['scroll', 'image']
	},
	{
		link: 'jgVqEe',
		imgUrl: 'jgVqEe-512.webp?version=1564763049',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 1500,
		title: 'Change Opacity On Scroll',
		tags: ['scroll', 'animation', 'responsive']
	},
	{
		link: 'ExKxpLq',
		imgUrl: 'ExKxpLq-512.webp?version=1596656986',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 500,
		title: 'Effect Parallax',
		tags: ['parallax', 'data', 'responsive', 'mouse']
	},
	{
		link: 'RXazEa',
		imgUrl: 'RXazEa-512.webp?version=1563997369',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 500,
		title: 'Cursor Focus',
		tags: ['mouse', 'glass', 'cursor', 'filter', 'shadow']
	},
	{
		link: 'QejeJW',
		imgUrl: 'QejeJW-512.webp?version=1613738463',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 500,
		title: '3d Mousemove Parallax',
		tags: ['parallax', 'mouse', 'image', 'responsive']
	},
	{
		link: 'GRZRdyB',
		imgUrl: 'GRZRdyB-512.webp?version=1596656530',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 500,
		title: 'Effect Flying Rocket',
		tags: ['animation', 'blur', 'mouse', 'shadow']
	},
	{
		link: 'KKVdgrq',
		imgUrl: 'KKVdgrq-512.webp?version=1601904077',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 500,
		title: 'Effect Video Sphere',
		tags: ['video', 'geometry', 'sphere', 'shadow', 'library', 'responsive']
	},
	{
		link: 'LMNYWg',
		imgUrl: 'LMNYWg-320.webp?version=1544797055',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 500,
		title: 'Slider',
		tags: ['slider']
	},
	{
		link: 'KrPLQM',
		imgUrl: 'KrPLQM-320.webp?version=1541531170',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 500,
		title: 'Slider responsive',
		tags: ['slider', 'responsive', 'pagination']
	},
	{
		link: 'dQJpBg',
		imgUrl: 'dQJpBg-320.webp?version=1545086842',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 500,
		title: 'Modal animated',
		tags: ['modal', 'animation', 'responsive', 'form']
	},
	{
		link: 'jOVGamW',
		imgUrl: 'jOVGamW-512.webp?version=1613994292',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 500,
		title: 'Soft Drink',
		tags: ['animation', 'border', 'responsive', 'shadow']
	},
	{
		link: 'RwawJGd',
		imgUrl: 'RwawJGd-512.webp?version=1596656273',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 500,
		title: 'Effect Starry Night',
		tags: ['animation', 'gradient', 'responsive', 'parallax', 'image']
	},
	{
		link: 'PEbbGM',
		imgUrl: 'PEbbGM-512.webp?version=1536858648',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 150,
		title: 'Reloj Js',
		tags: ['clock']
	},
	{
		link: 'LqJmJm',
		imgUrl: 'LqJmJm-512.webp?version=1550155337',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: true,
		views: 510,
		title: 'Admin Park',
		tags: ['form', 'button', 'shadow', 'modal', 'card', 'local-storage']
	},
	{
		link: 'agVWGz',
		imgUrl: 'agVWGz-512.webp?version=1561647743',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 1000,
		title: 'HTML5 Drag & Drop',
		tags: ['drag-drop', 'draggable', 'border', 'responsive']
	},
	{
		imgUrl: 'ZgXEPw-512.webp?version=1564788514',
		date: '01-01-2022',
		isFavorite: false,
		technology: 'Javascript',
		views: 2500,
		link: 'ZgXEPw',
		title: 'Slide Image Comparison',
		tags: ['slider', 'mouse', 'responsive']
	},
	{
		imgUrl: 'PMzgKj-512.webp?version=1564065094',
		date: '01-01-2022',
		isFavorite: false,
		technology: 'Javascript',
		views: 5000,
		link: 'PMzgKj',
		title: 'Effect Brick Falling',
		tags: ['mouse', 'hover', 'animation']
	},
	{
		link: 'pGRjbb',
		imgUrl: 'pGRjbb-512.webp?version=1548961836',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 15000,
		title: 'Lightbox Responsive',
		tags: ['responsive', 'cards', 'image', 'modal', 'grid']
	},
	{
		link: 'LebbxJ',
		imgUrl: 'LebbxJ-512.webp?version=1533391791',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 150,
		title: 'Efect Typewriter',
		tags: ['typewriter']
	},
	{
		link: 'BJaMyv',
		imgUrl: 'BJaMyv-512.webp?version=1513115037',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 100,
		title: 'Preloading Screen',
		tags: ['preloader', 'animation', 'responsive', 'border']
	},
	{
		link: 'YYKJom',
		imgUrl: 'YYKJom-512.webp?version=1536854551',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 1000,
		title: 'Social Media Expand',
		tags: ['footer', 'mobile', 'button', 'responsive']
	},
	{
		link: 'BxKGrE',
		imgUrl: 'BxKGrE-512.webp?version=1533828078',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 10000,
		title: 'Clipboard Minified',
		tags: ['clipboard', 'responsive', 'animation']
	},
	{
		link: 'KoPdpN',
		imgUrl: 'KoPdpN-512.webp?version=1533828780',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 500,
		title: 'Table Responsive With Theme Dark',
		tags: ['table', 'responsive', 'dark-theme']
	},
	{
		link: 'jYyaGa',
		imgUrl: 'jYyaGa-512.webp?version=1536853892',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 500,
		title: 'Acordeon Responsive',
		tags: ['acordeon', 'responsive']
	},
	{
		link: 'EoZzvX',
		imgUrl: 'EoZzvX-512.webp?version=1533829393',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 500,
		title: 'Social Media Expand',
		tags: ['footer', 'mobile', 'button', 'responsive']
	},
	{
		link: 'ZvBBgo',
		imgUrl: 'ZvBBgo-512.webp?version=1536859497',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 500,
		title: 'Presentation Card Responsive',
		tags: ['card', 'slider', 'responsive']
	},
	{
		link: 'JjjxMmm',
		imgUrl: 'JjjxMmm-512.webp?version=1574186493',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 500,
		title: 'Page Scroll Progressbar',
		tags: ['gradient', 'scroll']
	},
	{
		link: 'Yzzgqvy',
		imgUrl: 'Yzzgqvy-512.webp?version=1574269822',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 500,
		title: 'Effect Glitch',
		tags: ['image', 'responsive']
	},
	{
		link: 'rNaWWea',
		imgUrl: 'rNaWWea-512.webp?version=1576526031',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: true,
		views: 500,
		title: 'Form Card Credit',
		tags: ['card', 'form', 'validation', 'clip-path', 'responsive']
	},
	{
		link: 'MNjjrz',
		imgUrl: 'MNjjrz-512.webp?version=1564157241',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 500,
		title: 'Effect Parallax On Mouse move',
		tags: ['parallax', 'data', 'background-blend-mode', 'library']
	},
	{
		link: 'QWjGbBJ',
		imgUrl: 'QWjGbBJ-512.webp?version=1587481506',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 500,
		title: 'Effect Scroll Rainbow',
		tags: ['animation', 'blur', 'scroll', 'gradient', 'responsive']
	},
	{
		link: 'vYNgYpR',
		imgUrl: 'vYNgYpR-512.webp?version=1587573562',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 500,
		title: 'Effect Parallax Scrolling',
		tags: ['scroll', 'parallax', 'responsive', 'mix-blend-mode']
	},
	{
		link: 'EpqzBY',
		imgUrl: 'EpqzBY-320.webp?version=1534702495',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 500,
		title: 'Menu Dropdown Responsive',
		tags: ['menu', 'responsive', 'hamburger', 'drop-down', '3d']
	},
	{
		link: 'vjVRKR',
		imgUrl: 'vjVRKR-1280.webp?version=1533820548',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 1000,
		title: 'Menu',
		tags: ['menu', 'responsive', 'hamburger', 'hover']
	},
	{
		link: 'rvYrzO',
		imgUrl: 'rvYrzO-512.webp?version=1536856170',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 2000,
		title: 'Calculator',
		tags: ['responsive', 'shadow', 'calculator']
	},
	{
		link: 'ZEByLMj',
		imgUrl: 'ZEByLMj-512.webp?version=1613671119',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 3000,
		title: 'Cards',
		tags: ['card', 'hover', 'responsive', 'mouse']
	},
	{
		link: 'wvoepar',
		imgUrl: 'wvoepar-512.webp?version=1613673694',
		date: '01-01-2019',
		technology: 'Javascript',
		isFavorite: true,
		views: 100,
		title: 'Slither Io',
		tags: ['games', 'mouse', 'radial-gradient', 'library', 'responsive']
	},
	{
		link: 'GRKymgL',
		imgUrl: 'GRKymgL-512.webp?version=1568650825',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: true,
		views: 50,
		title: 'Odometer Number Counter',
		tags: ['library', 'responsive']
	},
	{
		link: 'mddobvR',
		imgUrl: 'mddobvR-512.webp?version=1574252213',
		date: '01-01-2020',
		technology: 'Javascript',
		isFavorite: true,
		views: 5,
		title: 'Effect Follow Mouse Cursor',
		tags: ['game', 'hover', 'mouse', 'responsive', 'getBoundingClientRect']
	},
	{
		link: 'eYmrmgM',
		imgUrl: 'eYmrmgM-512.webp?version=1578661401',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 3,
		title: 'Effect Slide Image Comparision',
		tags: ['slider', 'image', 'mouse']
	},
	{
		link: 'JjGYKJW',
		imgUrl: 'JjGYKJW-512.webp?version=1591623049',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: true,
		views: 20,
		title: 'Effect floating button',
		tags: ['button', 'footer', 'mobile', 'list', 'responsive']
	},
	{
		link: 'QWwrPoM',
		imgUrl: 'QWwrPoM-512.webp?version=1578951478',
		date: '01-01-2018',
		technology: 'Javascript',
		isFavorite: false,
		views: 10,
		title: 'Youtube',
		tags: ['template', 'grid', 'menu', 'responsive']
	},
	{
		link: 'PowePzx',
		imgUrl: 'PowePzx-512.webp?version=1578669848',
		date: '01-01-2023',
		technology: 'Javascript',
		isFavorite: false,
		views: 10,
		title: 'Digital clock',
		tags: ['clock', 'box-reflect', 'shadow', 'responsive']
	},
	{
		link: 'WNbJvbz',
		imgUrl: 'WNbJvbz-512.webp?version=1578663795',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 10,
		title: 'Effect Parallax Mousemove',
		tags: ['parallax', 'data', 'mouse', '3d', 'hover']
	},
	{
		link: 'PXryxY',
		imgUrl: 'PXryxY-512.webp?version=1547832730',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 10,
		title: 'Template Bootstrap',
		tags: ['template', 'slider', 'animation', 'bootstrap', 'library', 'responsive']
	},
	{
		link: 'aPMEYq',
		imgUrl: 'aPMEYq-512.webp?version=1547590609',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: true,
		views: 20,
		title: 'Jackpot Game',
		tags: ['games', 'responsive']
	},
	{
		link: 'dwaRNz',
		imgUrl: 'dwaRNz-512.webp?version=1547505908',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: true,
		views: 500,
		title: 'Archery Game',
		tags: ['game', 'animation', 'responsive']
	},
	{
		link: 'yGRbzL',
		imgUrl: 'yGRbzL-320.webp?version=1547170234',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: true,
		views: 50,
		title: 'Simon Game',
		tags: ['games', 'sound', 'modal', 'button', 'shadow', 'responsive']
	},
	{
		link: 'QzmvLp',
		imgUrl: 'QzmvLp-320.webp?version=1546726072',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 20,
		title: 'Bubble Floating',
		tags: ['games', 'responsive', 'keyboard']
	},
	{
		link: 'pozdLgO',
		imgUrl: 'pozdLgO-512.webp?version=1568650859',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 21,
		title: 'Menu Amazon',
		tags: ['menu', 'responsive', 'drop-down', 'image', 'hamburger']
	},
	{
		link: 'bGboWJL',
		imgUrl: 'bGboWJL-512.webp?version=1568650863',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 31,
		title: 'Tooltip Js',
		tags: ['tooltip', 'shadow', 'hover', 'border', 'mouse', 'card']
	},
	{
		link: 'PEbbOw',
		imgUrl: 'PEbbOw-512.webp?version=1710089549',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 0,
		title: 'Regresive Count Js',
		tags: ['countdown']
	},
	{
		link: 'EoNNwL',
		imgUrl: 'EoNNwL-512.webp?version=1536858968',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 20,
		title: 'Modal Js',
		tags: ['modal', 'responsive']
	},
	{
		link: 'YYppxg',
		imgUrl: 'YYppxg-512.webp?version=1533392519',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 400,
		title: 'Modal Youtube Js Responsive',
		tags: ['modal', 'iframe', 'responsive']
	},
	{
		link: 'Oovgjz',
		imgUrl: 'Oovgjz-320.webp?version=1536852567',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 300,
		title: 'Modals Flexbox Js Responsive',
		tags: ['modal', 'responsive', 'button', 'hover', 'shadow', '3d', 'keyboard']
	},
	{
		link: 'yxpodp',
		imgUrl: 'yxpodp-320.webp?version=1536853553',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 350,
		title: 'Masonry Layout Js',
		tags: ['template', 'masonry', 'grid', 'responsive']
	},
	{
		link: 'VGyvzy',
		imgUrl: 'VGyvzy-320.webp?version=1536447155',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: true,
		views: 250,
		title: 'Tester Responsive Js',
		tags: ['responsive', 'window']
	},
	{
		link: 'NQGLOK',
		imgUrl: 'NQGLOK-512.webp?version=1563811212',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 500,
		title: 'Water Fill On Scroll',
		tags: ['scroll', 'animation', 'shadow', 'border', 'responsive']
	},
	{
		link: 'roeNbr',
		imgUrl: 'roeNbr-320.webp?version=1545085245',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 10,
		title: 'Calculator',
		tags: ['calculator', 'responsive', 'data', 'scroll', 'grid']
	},
	{
		link: 'EGvxer',
		imgUrl: 'EGvxer-320.webp?version=1545847440',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 500,
		title: 'Masonry Grid Layout Responsive',
		tags: ['template', 'columns', 'responsive', 'cards']
	},
	{
		link: 'oNNBBdZ',
		imgUrl: 'oNNBBdZ-512.webp?version=1587482167',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 500,
		title: 'Analog Clock',
		tags: ['clock', 'shadow', 'responsive']
	},
	{
		link: 'rXLVML',
		imgUrl: 'rXLVML-512.webp?version=1563998440',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 500,
		title: 'Effect flip background',
		tags: ['hover', '3d', 'mouse']
	}
];

/* Elements HTML */
const LANGUAGES = [
	{
		id: 'javascript',
		title: 'Javascript'
	},
	{
		id: 'angular',
		title: 'Angular'
	},
	{
		id: 'ionic',
		title: 'Ionic'
	},
	{
		id: 'css',
		title: 'Css'
	},
	{
		id: 'firebase',
		title: 'Firebase'
	}
];
const SORTING_BUTTONS = [
	{
		className: 'btn-tag btn-highlight',
		id: 'oldest',
		text: '🔙 Oldest',
	},
	{
		className: 'btn-tag btn-highlight',
		id: 'latest',
		text: '🔜 Latest',
	},
	{
		className: 'btn-tag btn-highlight',
		id: 'favorite',
		text: '⭐ Favorite',
	},
	{
		className: 'btn-tag btn-highlight',
		id: 'more-views',
		text: '🔼👁️ Views',
	},
	{
		className: 'btn-tag btn-highlight',
		id: 'less-views',
		text: '🔽👁️ Views',
	},
	{
		className: 'btn-tag btn-highlight',
		id: 'a-z',
		text: '🔽 A-Z',
	},
	{
		className: 'btn-tag btn-highlight',
		id: 'z-a',
		text: '🔼 Z-A',
	}
];
const TAG_BUTTONS = [
	{
		className: 'btn-tag',
		id: 'sound',
		text: 'Sound'
	},
	{
		className: 'btn-tag',
		id: 'image',
		text: 'Image'
	},
	{
		className: 'btn-tag',
		id: 'hamburger',
		text: 'Hamburger'
	},
	{
		className: 'btn-tag',
		id: 'clock',
		text: 'Clock'
	},
	{
		className: 'btn-tag',
		id: 'box-reflect',
		text: 'Box Reflect'
	},
	{
		className: 'btn-tag',
		id: 'drop-down',
		text: 'Drop Down'
	},
	{
		className: 'btn-tag',
		id: 'button',
		text: 'Button'
	},
	{
		className: 'btn-tag',
		id: 'clipboard',
		text: 'Clipboard'
	},
	{
		className: 'btn-tag',
		id: 'radial-gradient',
		text: 'Radial Gradient'
	},
	{
		className: 'btn-tag',
		id: 'mouse',
		text: 'Mouse'
	},
	{
		className: 'btn-tag',
		id: 'footer',
		text: 'Footer'
	},
	{
		className: 'btn-tag',
		id: 'dark-theme',
		text: 'Dark Theme'
	},
	{
		className: 'btn-tag',
		id: 'mobile',
		text: 'Mobile'
	},
	{
		className: 'btn-tag',
		id: 'shadow',
		text: 'Shadow'
	},
	{
		className: 'btn-tag',
		id: 'neon',
		text: 'Neon'
	},
	{
		className: 'btn-tag',
		id: 'water',
		text: 'Water'
	},
	{
		className: 'btn-tag',
		id: 'list',
		text: 'List'
	},
	{
		className: 'btn-tag',
		id: 'data',
		text: 'Data'
	},
	{
		className: 'btn-tag',
		id: 'preloader',
		text: 'Preloader'
	},
	{
		className: 'btn-tag',
		id: 'responsive',
		text: 'Responsive'
	},
	{
		className: 'btn-tag',
		id: 'svg',
		text: 'Svg'
	},
	{
		className: 'btn-tag',
		id: 'video',
		text: 'Video'
	},
	{
		className: 'btn-tag',
		id: 'cube',
		text: 'Cube'
	},
	{
		className: 'btn-tag',
		id: 'geometry',
		text: 'Geometry'
	},
	{
		className: 'btn-tag',
		id: '3d',
		text: '3d'
	},
	{
		className: 'btn-tag',
		id: 'hover',
		text: 'Hover'
	},
	{
		className: 'btn-tag',
		id: 'gradient',
		text: 'Gradient'
	},
	{
		className: 'btn-tag',
		id: 'image',
		text: 'Image'
	},
	{
		className: 'btn-tag',
		id: 'blur',
		text: 'Blur'
	},
	{
		className: 'btn-tag',
		id: 'tooltip',
		text: 'Tooltip'
	},
	{
		className: 'btn-tag',
		id: 'glass',
		text: 'Glass'
	},
	{
		className: 'btn-tag',
		id: 'clip-path',
		text: 'Clip Path'
	},
	{
		className: 'btn-tag',
		id: 'isometric',
		text: 'Isometric'
	},
	{
		className: 'btn-tag',
		id: 'text-fill-color',
		text: 'Text Fill Color'
	},
	{
		className: 'btn-tag',
		id: 'mix-blend-mode',
		text: 'Mix Blend Mode'
	},
	{
		className: 'btn-tag',
		id: 'library',
		text: 'Library'
	},
	{
		className: 'btn-tag',
		id: 'slider',
		text: 'Slider'
	},
	{
		className: 'btn-tag',
		id: 'menu',
		text: 'Menu'
	},
	{
		className: 'btn-tag',
		id: 'scroll',
		text: 'Scroll'
	},
	{
		className: 'btn-tag',
		id: 'card',
		text: 'Card'
	},
	{
		className: 'btn-tag',
		id: 'form',
		text: 'Form'
	},
	{
		className: 'btn-tag',
		id: 'animation',
		text: 'Animation'
	},
	{
		className: 'btn-tag',
		id: 'template',
		text: 'Template'
	},
	{
		className: 'btn-tag',
		id: 'table',
		text: 'Table'
	},
	{
		className: 'btn-tag',
		id: 'parallax',
		text: 'Parallax'
	},
	{
		className: 'btn-tag',
		id: 'grid',
		text: 'Grid'
	},
	{
		className: 'btn-tag',
		id: 'games',
		text: 'Games'
	},
	{
		className: 'btn-tag',
		id: 'border',
		text: 'Border'
	},
	{
		className: 'btn-tag',
		id: 'modal',
		text: 'Modal'
	},
];

/* Tags & Sort filter */
let filterBtnsForFilter = [];
let projectsFilteredBySelectedFilter = [];

/* Containers for tag buttons and projects */
const tagsContainerElement = document.getElementById(ID_NAMES.ctnTagButtons);
const sortContainerElement = document.getElementById(ID_NAMES.ctnSortButtons);
const ctnSelectedFiltersElement = document.getElementById(ID_NAMES.ctnSelectedFilters);
const selectedFiltersElement = document.getElementById(ID_NAMES.selectedFilters);
const projectsContainerElement = document.getElementById(ID_NAMES.ctnProjects);
const projectsFilterByTagsContainerElement = document.getElementById(ID_NAMES.ctnProjectsFilteredByTags);
const notFoundProjectsFilteredByTagsElement = document.getElementById(ID_NAMES.NotFoundProjectsFilteredByTags);

/* Add tag & filter buttons to the DOM */
const createFilterBtnsDOM = (btn, containerBtns) => {
	const btnFilter = document.createElement('button');
	
	// Add attributes
	btnFilter.textContent = btn['text'];
	btnFilter.id = btn['id'];
	btnFilter.className += btn['className'];
	
	// Add elements in DOM
	containerBtns.appendChild(btnFilter);
	
	// Toggle class active for button when it is clicked
	btnFilter.addEventListener('click', () => btnFilter.classList.toggle('active'));
	
	return btnFilter;
}

/* Functions to add projects to the DOM */
const createProjects = ({isBuildingFromBtn} = false) => {
	LANGUAGES.map(lang => {
		// create containers for each lang and its title
		const sectionCard = document.createElement('section');
		const ctnCard = document.createElement('div');
		const titleProject = document.createElement('h2');
		
		// add attributes for the containers
		sectionCard.id = !isBuildingFromBtn ? `${ID_NAMES.projects}-${lang['id']}` : `${ID_NAMES.projectsFilterByTags}-${lang['id']}`;
		sectionCard.classList.add(ID_NAMES.projects);
		ctnCard.classList.add(CLASS_NAMES.ctnCards);
		titleProject.textContent = !isBuildingFromBtn ? lang['title'] : 'Projects Filtered By Tags';

		// insert all the projects in DOM
		sectionCard.append(titleProject, ctnCard);

		// if there is a param send it as a param for addTagsForProjects function
		if (!isBuildingFromBtn) {
			// save every name of the variables projec
			const getNameVariableProject = eval(`${ID_NAMES.projects}${lang.id.charAt(0).toUpperCase()}${lang.id.slice(1)}`);
			
			projectsContainerElement.appendChild(sectionCard);
			addTagsForProjects(eval(getNameVariableProject), sectionCard);
		} else {
				// delete all the cards which were before
				projectsFilterByTagsContainerElement.innerHTML = '';

				// add the section card into another container
				projectsFilterByTagsContainerElement.appendChild(sectionCard);

				// add tags for each card
				addTagsForProjects(projectsFilteredBySelectedFilter, sectionCard);
			}
	});
}
const addTagsForProjects = (project, sectionProjectElement) => {
	project.map(projectObj => {
		// create container tags
		const containerTags = document.createElement('div');
		containerTags.classList.add('ctn-tags');

		// add tags per card
		projectObj.tags?.map(tag => {
			const tagSpan = document.createElement('span');
			tagSpan.textContent = tag;
			containerTags.appendChild(tagSpan);
		});

		addProjectsToDOM(projectObj, containerTags, sectionProjectElement);
	});
}
const addProjectsToDOM = (project, ctnTags, sectionProjectElement) => {
	// create card elements
	const ctnCard = document.createElement('div');
	const card = document.createElement('div');
	const cardGlassEffect = document.createElement('span');
	const ctnImgCard = document.createElement('div');
	const linkCard = document.createElement('a');
	const titleCard = document.createElement('h3');
	const imgCard = document.createElement('img');
	const ctnViewsCard = document.createElement('div');
	const numberViewsCard = document.createElement('span');
	const viewsIconCard = document.createElement('span');
	const ctnFavIconCard = project['isFavorite'] ? document.createElement('div') : '';
	const favIconCard = project['isFavorite'] ? document.createElement('span') : '';

	// add attributes and content
	project['isFavorite'] ? favIconCard.textContent = '⭐' : '';
	numberViewsCard.textContent = `${project['views']}`;
	viewsIconCard.textContent = '👁️';
	linkCard.href = `${URL_CODEPEN_PEN}/${project['link']}`;
	linkCard.target = '_blank';
	titleCard.textContent = project['title'];
	imgCard.src = `${URL_CODEPEN_PREVIEW_IMG}/${project['imgUrl']}`;
	imgCard.alt = project['title'];
	imgCard.title = project['title'];
	imgCard.setAttribute('loading', 'lazy');
	
	// add classes
	ctnCard.classList.add(CLASS_NAMES.ctnCard);
	card.classList.add(CLASS_NAMES.card);
	cardGlassEffect.classList.add('glass-effect');
	project['isFavorite'] ? ctnFavIconCard.classList.add('fav') : '';
	ctnViewsCard.classList.add('views');
	ctnImgCard.classList.add('ctn-img');
	
	// add elements into DOM
	card.appendChild(cardGlassEffect);
	project['isFavorite'] ? ctnFavIconCard.appendChild(favIconCard) : '';
	ctnViewsCard.append(numberViewsCard, viewsIconCard);
	ctnImgCard.appendChild(imgCard);
	linkCard.append(titleCard, ctnImgCard);
	// if it is favorite to add the star icon to the DOM on the card
	project['isFavorite'] ? card.append(ctnFavIconCard, ctnViewsCard, linkCard, ctnTags) : card.append(ctnViewsCard, linkCard, ctnTags);
	ctnCard.appendChild(card);

	// add container with all the content inside the id got it from the 
	sectionProjectElement.querySelector(`.${CLASS_NAMES.ctnCards}`).appendChild(ctnCard);
}

/* Functions for filtering by tags */
const toggleFilterBtns = (selectedTagsBtns, {isFilteringByTags} = true) => {
	// if there is a repeated element it will be removed from the array, if not it will be added
	filterBtnsForFilter = filterBtnsForFilter.includes(selectedTagsBtns) ? filterBtnsForFilter.filter(el => el !== selectedTagsBtns) : [...filterBtnsForFilter, selectedTagsBtns];
	
	// if there is at least one or more tags selected
	if (filterBtnsForFilter.length) {
		// storage the projects which have the tags
		isFilteringByTags ? filteredByTagsSelected() : '';
		// add tags to the tags container in projects that were filtered
		addCtnSelectedTagsBtnsToDOM(filterBtnsForFilter);
		
		ctnSelectedFiltersElement.setAttribute('aria-hidden', 'false');
		projectsFilterByTagsContainerElement.setAttribute('aria-hidden', 'false');
		projectsContainerElement.setAttribute('aria-hidden', 'true');

		// if there are no projects that contained the selected tags
		if (!projectsFilteredBySelectedFilter.length) {
			projectsFilterByTagsContainerElement.setAttribute('aria-hidden', 'true');
			notFoundProjectsFilteredByTagsElement.setAttribute('aria-hidden', 'false');
		} else {
				notFoundProjectsFilteredByTagsElement.setAttribute('aria-hidden', 'true');
			}

		createProjects({isBuildingFromBtn: true});
	} else {
			// if there are no tags selected
			ctnSelectedFiltersElement.setAttribute('aria-hidden', 'true');
			notFoundProjectsFilteredByTagsElement.setAttribute('aria-hidden', 'true');
			projectsContainerElement.setAttribute('aria-hidden', 'false');
			projectsFilterByTagsContainerElement.setAttribute('aria-hidden', 'true');
		}
}
const filteredByTagsSelected = () => {
	projectsFilteredBySelectedFilter = [];

	LANGUAGES.map(lang => {
		// save every name of the variables projectName
		let getNameVariableProject = eval(`${ID_NAMES.projects}${lang.id.charAt(0).toUpperCase()}${lang.id.slice(1)}`);
		
		// filter every project variable and depending on the projectsFilteredBySelectedFilter values
		let filterElementsByTags = getNameVariableProject.filter(projectObject => filterBtnsForFilter.every(tag => projectObject.tags.includes(tag)))
		filterElementsByTags.map(project => projectsFilteredBySelectedFilter.push(project));
	});
}
const addCtnSelectedTagsBtnsToDOM = (selectedFilters) => {
	selectedFiltersElement.innerHTML = '';
	selectedFilters.map(filterSelected => {
		const selectedFiltersSpan = document.createElement('span');
		selectedFiltersSpan.textContent = filterSelected;
		selectedFiltersElement.appendChild(selectedFiltersSpan);
	});
}
/* Functions to sort */
const filterByDate = ({ascending}) => {
	if ( filterBtnsForFilter.length ) {
		let filteredProjects = projectsFilteredBySelectedFilter;
		projectsFilteredBySelectedFilter = []
		const projecstOrderByDate = filteredProjects.sort((a, b) => ascending ? new Date(a['date']) - new Date(b['date']) : new Date(b['date']) - new Date(a['date']));
		projecstOrderByDate .map(project => projectsFilteredBySelectedFilter.push(project));
	} else {
			LANGUAGES.map(lang => {
				// save every name of the variables projectName
				let getNameVariableProject = eval(`${ID_NAMES.projects}${lang.id.charAt(0).toUpperCase()}${lang.id.slice(1)}`);
				
				const projecstOrderByDate = getNameVariableProject.sort((a, b) => ascending ? new Date(a['date']) - new Date(b['date']) : new Date(b['date']) - new Date(a['date']));
				projecstOrderByDate .map(project => projectsFilteredBySelectedFilter.push(project));
			});
		}

}
const filterByFavs = () => {
	if ( filterBtnsForFilter.length ) {
		let filteredProjects = projectsFilteredBySelectedFilter;
		projectsFilteredBySelectedFilter = []
		const projecstOrderByFav = filteredProjects.filter(projectObject => projectObject['isFavorite'] === true);
		projecstOrderByFav.map(project => projectsFilteredBySelectedFilter.push(project));
	} else {
			LANGUAGES.map(lang => {
				// save every name of the variables projectName
				let getNameVariableProject = eval(`${ID_NAMES.projects}${lang.id.charAt(0).toUpperCase()}${lang.id.slice(1)}`);
				
				const projecstOrderByFav = getNameVariableProject.filter(projectObject => projectObject['isFavorite'] === true);
				projecstOrderByFav.map(project => projectsFilteredBySelectedFilter.push(project));
			});
	}

}
const filterViews = ({ascending} = true) => {
	if ( filterBtnsForFilter.length ) {
		let filteredProjects = projectsFilteredBySelectedFilter;
		projectsFilteredBySelectedFilter = []
		const projecstOrderByViews = filteredProjects.sort((a, b) => ascending ? a['views'] - b['views'] : b['views'] - a['views']);
		projecstOrderByViews.map(project => projectsFilteredBySelectedFilter.push(project));
	} else {
			LANGUAGES.map(lang => {
				// save every name of the variables projectName
				let getNameVariableProject = eval(`${ID_NAMES.projects}${lang.id.charAt(0).toUpperCase()}${lang.id.slice(1)}`);
				
				const projecstOrderByViews = getNameVariableProject.sort((a, b) => ascending ? a['views'] - b['views'] : b['views'] - a['views']);
				projecstOrderByViews.map(project => projectsFilteredBySelectedFilter.push(project));
			});
		}
}
const filterAlphabetic = ({ascending} = true) => {
	if ( filterBtnsForFilter.length ) {
		let filteredProjects = projectsFilteredBySelectedFilter;
		projectsFilteredBySelectedFilter = []
		const projecstOrderByAlphabet = filteredProjects.sort((a, b) => ascending ? a['title'].localeCompare(b['title']) : b['title'].localeCompare(a['title']));
		projecstOrderByAlphabet.map(project => projectsFilteredBySelectedFilter.push(project));
	} else {
			LANGUAGES.map(lang => {
				// save every name of the variables projectName
				let getNameVariableProject = eval(`${ID_NAMES.projects}${lang.id.charAt(0).toUpperCase()}${lang.id.slice(1)}`);
				
				const projecstOrderByAlphabet = getNameVariableProject.sort((a, b) => ascending ? a['title'].localeCompare(b['title']) : b['title'].localeCompare(a['title']));
				projecstOrderByAlphabet.map(project => projectsFilteredBySelectedFilter.push(project));
			});
		}
}

document.addEventListener('DOMContentLoaded', () => {
	// Add sorting buttons into DOM
	SORTING_BUTTONS.map(tagBtn => {
		// get each sort btn
		const btnSorting = createFilterBtnsDOM(tagBtn, sortContainerElement);

		document.getElementById(btnSorting['id']).addEventListener('click', e => {
			switch (e.currentTarget.id) {
				case 'oldest':
					filterByDate({ascending: true});
					toggleFilterBtns(btnSorting['id'], {isFilteringByTags: false});
					console.log('🔙 Oldest');
				break;

				case 'latest':
					filterByDate({ascending: false});
					toggleFilterBtns(btnSorting['id'], {isFilteringByTags: false});	
					console.log('🔜 Latest');
				break;

				case 'favorite':
					filterByFavs();
					toggleFilterBtns(btnSorting['id'], {isFilteringByTags: false});	
					console.log('⭐ Favorite');
				break;

				case 'more-views':
					filterViews({ascending: false});
					toggleFilterBtns(btnSorting['id'], {isFilteringByTags: false});	
					console.log('👁️🔼 Views');
				break;

				case 'less-views':
					filterViews({ascending: true});
					toggleFilterBtns(btnSorting['id'], {isFilteringByTags: false});	
					console.log('👁️🔽 Views');
				break;

				case 'a-z':
					filterAlphabetic({ascending: true});
					toggleFilterBtns(btnSorting['id'], {isFilteringByTags: false});	
					console.log('🔽 A-Z');
				break;
			
				case 'z-a':
					filterAlphabetic({ascending: false});
					toggleFilterBtns(btnSorting['id'], {isFilteringByTags: false});	
					console.log('🔼 Z-A');	
				break;
			}

		});
	});

	// Add tag buttons into DOM
	TAG_BUTTONS.map(tagBtn => {
		// get each tag btn
		const btnTag = createFilterBtnsDOM(tagBtn, tagsContainerElement);

		// Filter projects by selected tag
		btnTag.addEventListener('click', () => toggleFilterBtns(btnTag['id'], {isFilteringByTags: true}));
	});
	
	// Add cards into DOM
	createProjects();
});