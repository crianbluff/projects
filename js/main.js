const URL_CODEPEN_PEN = 'https://codepen.io/crianbluff/full';
const URL_CODEPEN_PREVIEW_IMG = 'https://shots.codepen.io/username/pen';
const URL_FIREBASE_PREVIEW_IMG = 'https://firebasestorage.googleapis.com/v0/b/web-dinamica-d78f3.appspot.com/o/photos%2F';
const URL_GITHUB_CRIANBLUFF_DOMAIN = 'https://crianbluff.github.io';
const URL_GITHUB_REPOS = 'https://github.com/crianbluff';

/* Classes & ids */
const ID_NAMES = {
	ctnCategoriesTag: 'ctn-categories-tag',
	btnTagAlphabet: 'btn-tag-alphabet',
	btnTagColor: 'btn-tag-color',
	btnTagFigure: 'btn-tag-figure',
	btnTagMultimedia: 'btn-tag-multimedia',
	btnTagJs: 'btn-tag-js',
	btnTagElement: 'btn-tag-element',
	btnTagSpecial: 'btn-tag-special',
	ctnTagButtons: 'ctn-tag-buttons',
	ctnSelectedFilters: 'ctn-selected-filters',
	selectedFilters: 'selected-filters',
	ctnSortButtons: 'ctn-sort-btns',
	ctnTechButtons: 'ctn-tech-btns',
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
	favoriteCard: 'favorite',
	ctnTech: 'tech',
	iconAngular: 'icon-angular',
	iconCodepen: 'icon-codepen',
	iconFirebase: 'icon-firebase',
	iconIonic: 'icon-ionic',
	ctnFav: 'fav',
	iconFav: 'icon-star-full',
	glassEffect: 'glass-effect',
	ctnIconsCard: 'ctn-icons-card',
	iconsCardLeft: 'icons-card-left',
	ctnDate: 'date',
	iconsCardRight: 'icons-card-right',
	ctnViews: 'ctn-views',
	ctnLikes: 'ctn-likes',
	ctnCommments: 'comments',
	ctnGit: 'git',
	linkGit: 'link-repo',
	iconGit: 'icon-github',
	linkCard: 'link-card',
	ctnImgCard: 'ctn-img',
	ctnTags: 'ctn-tags'
};

/* Projects */
const projectsFirebase = [
	{
		link: 'https://ingresos-egresos-app-83b9f.web.app',
		imgUrl: `${URL_FIREBASE_PREVIEW_IMG}ingresos-egresos.png?alt=media&token=30e94cf6-b693-441d-a862-e0fb5ad5f6bb`,
		gitUrl: `${URL_GITHUB_REPOS}/my-finances`,
		createdDate: '2020/01/17',
		technology: 'Firebase',
		hasRepo: true,
		isFavorite: true,
		comments: 0,
		likes: 0,
		views: 0,
		title: 'My Finances',
		tags: ['card', 'menu', 'table', 'template', 'modal', 'button', 'api', 'graphs', 'login', 'form']
	},
	{
		link: `${URL_GITHUB_CRIANBLUFF_DOMAIN}/word-cloud/#/admin-words`,
		imgUrl: `${URL_FIREBASE_PREVIEW_IMG}word-cloud1.png?alt=media&token=9f4fab90-60d2-4619-9918-b4a2020b1a77`,
		gitUrl: `${URL_GITHUB_REPOS}/word-cloud`,
		createdDate: '2019/06/25',
		technology: 'Firebase',
		hasRepo: true,
		isFavorite: true,
		likes: 0,
		views: 0,
		title: 'Word Cloud',
		tags: ['library', 'button', 'template']
	},
	{
		link: `${URL_GITHUB_CRIANBLUFF_DOMAIN}/angular-14-fotos-firebase`,
		imgUrl: `https://img.freepik.com/free-vector/gradient-no-photo-sign-design_23-2149292668.jpg?t=st=1712752389~exp=1712755989~hmac=1ba987270ec279b6aa7cb7e5dda667844bac6a2cb05be55f00b75b1c6cff0b78&w=1380`,
		gitUrl: `${URL_GITHUB_REPOS}/angular-14-fotos-firebase`,
		createdDate: '2019/06/14',
		technology: 'Firebase',
		hasRepo: true,
		isFavorite: true,
		comments: 0,
		likes: 0,
		views: 0,
		title: 'Firebase Photos',
		tags: ['form', 'menu', 'shadow', 'card', 'drag-drop', 'image', 'table', 'api', 'modal', 'responsive']
	},
	{
		link: `${URL_GITHUB_CRIANBLUFF_DOMAIN}/colegio-instituto-bogota`,
		imgUrl: `https://img.freepik.com/free-vector/gradient-no-photo-sign-design_23-2149292668.jpg?t=st=1712752389~exp=1712755989~hmac=1ba987270ec279b6aa7cb7e5dda667844bac6a2cb05be55f00b75b1c6cff0b78&w=1380`,
		gitUrl: `${URL_GITHUB_REPOS}/colegio-instituto-bogota`,
		createdDate: '2019/11/22',
		technology: 'Firebase',
		hasRepo: true,
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 0,
		title: 'Circulares Colegio Instituo Bogotá',
		tags: ['form', 'menu', 'shadow', 'card', 'drag-drop', 'angular-material', 'image', 'table', 'api', 'modal', 'responsive']
	},
	{
		link: `${URL_GITHUB_CRIANBLUFF_DOMAIN}/firebase`,
		imgUrl: `https://img.freepik.com/free-vector/gradient-no-photo-sign-design_23-2149292668.jpg?t=st=1712752389~exp=1712755989~hmac=1ba987270ec279b6aa7cb7e5dda667844bac6a2cb05be55f00b75b1c6cff0b78&w=1380`,
		gitUrl: `${URL_GITHUB_REPOS}/firebase`,
		createdDate: '2019/01/21',
		technology: 'Firebase',
		hasRepo: true,
		isFavorite: false,
		likes: 0,
		views: 0,
		title: 'Firebase Studies',
		tags: ['menu', 'login', 'studies']
	}
];
const projectsAngular = [
	{
		link: `${URL_GITHUB_CRIANBLUFF_DOMAIN}/spotify-api`,
		imgUrl: `${URL_FIREBASE_PREVIEW_IMG}spotify-api.png?alt=media&token=821d3aa0-f9e5-40ce-aaa9-4944acaab856`,
		gitUrl: `${URL_GITHUB_REPOS}/spotify-api`,
		createdDate: '2019/07/29',
		technology: 'Angular',
		hasRepo: true,
		isFavorite: true,
		comments: 0,
		likes: 0,
		views: 0,
		title: 'Spotify Api',
		tags: ['card', 'pagination', 'api', 'search', 'sound']
	},
	{
		link: `${URL_GITHUB_CRIANBLUFF_DOMAIN}/test-ipcom`,
		imgUrl: `https://img.freepik.com/free-vector/gradient-no-photo-sign-design_23-2149292668.jpg?t=st=1712752389~exp=1712755989~hmac=1ba987270ec279b6aa7cb7e5dda667844bac6a2cb05be55f00b75b1c6cff0b78&w=1380`,
		gitUrl: `${URL_GITHUB_REPOS}/test-ipcom`,
		createdDate: '2020/09/12',
		technology: 'Angular',
		hasRepo: true,
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 0,
		title: 'Test Ipcom',
		tags: ['test', 'table', 'angular-material', 'api', 'date', 'pagination']
	},
	{
		link: `${URL_GITHUB_CRIANBLUFF_DOMAIN}/test-zemsania`,
		imgUrl: `https://img.freepik.com/free-vector/gradient-no-photo-sign-design_23-2149292668.jpg?t=st=1712752389~exp=1712755989~hmac=1ba987270ec279b6aa7cb7e5dda667844bac6a2cb05be55f00b75b1c6cff0b78&w=1380`,
		gitUrl: `${URL_GITHUB_REPOS}/test-zemsania`,
		createdDate: '2020/09/25',
		technology: 'Angular',
		hasRepo: true,
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 0,
		title: 'Test Zemsania',
		tags: ['test', 'form', 'table', 'angular-material', 'api', 'modal', 'pagination']
	},
	{
		link: `${URL_GITHUB_CRIANBLUFF_DOMAIN}/angular-12-mapas`,
		imgUrl: `https://img.freepik.com/free-vector/gradient-no-photo-sign-design_23-2149292668.jpg?t=st=1712752389~exp=1712755989~hmac=1ba987270ec279b6aa7cb7e5dda667844bac6a2cb05be55f00b75b1c6cff0b78&w=1380`,
		gitUrl: `${URL_GITHUB_REPOS}/angular-12-mapas`,
		createdDate: '2020/09/25',
		technology: 'Angular',
		hasRepo: true,
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 0,
		title: 'Maps',
		tags: ['form', 'angular-material', 'api', 'modal', 'maps']
	}
];
const projectsIonic = [
	{
		link: '',
		imgUrl: 'https://img.freepik.com/free-vector/gradient-no-photo-sign-design_23-2149292668.jpg?t=st=1712752389~exp=1712755989~hmac=1ba987270ec279b6aa7cb7e5dda667844bac6a2cb05be55f00b75b1c6cff0b78&w=1380',
		createdDate: '2022/01/01',
		technology: 'Ionic',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 0,
		title: '',
		tags: []
	}
];
const projectsJquery = [
	{
		link: `${URL_GITHUB_CRIANBLUFF_DOMAIN}/crianbluff`,
		imgUrl: `${URL_FIREBASE_PREVIEW_IMG}crianbluff.png?alt=media&token=37597d67-5741-4d06-a5d9-16de05878b16`,
		gitUrl: `${URL_GITHUB_REPOS}/crianbluff`,
		createdDate: '2017/11/01',
		technology: 'Jquery',
		hasRepo: true,
		isFavorite: true,
		comments: 0,
		likes: 0,
		views: 0,
		title: 'Crianbluff Page',
		tags: ['form', 'responsive', 'modal', 'shadow', 'button', 'border', 'animation', 'template', 'dark-theme', 'parallax', '3d', 'image', 'sound', 'preloader', 'slider', 'data', 'scroll', 'mouse', 'footer', 'menu', 'hamburger', 'mobile', 'hover', 'card']
	},
	{
		link: `${URL_CODEPEN_PEN}/rvYrzO`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/rvYrzO-512.webp`,
		createdDate: '2018/05/08',
		technology: 'Jquery',
		isFavorite: true,
		comments: 0,
		likes: 2,
		views: 387,
		title: 'Calculator',
		tags: ['responsive', 'shadow', 'calculator']
	},
	{
		link: `${URL_CODEPEN_PEN}/vjVRKR`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/vjVRKR-512.webp`,
		createdDate: '2018/05/17',
		technology: 'Jquery',
		isFavorite: true,
		comments: 2,
		likes: 23,
		views: 3994,
		title: 'Menu',
		tags: ['menu', 'responsive', 'hamburger', 'hover']
	},
	{
		link: `${URL_CODEPEN_PEN}/rXLVML`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/rXLVML-512.webp`,
		createdDate: '2019/07/25',
		technology: 'Jquery',
		isFavorite: false,
		comments: 0,
		likes: 1,
		views: 255,
		title: 'Effect flip background',
		tags: ['hover', '3d', 'mouse']
	},
	{
		link: `${URL_CODEPEN_PEN}/EpqzBY`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/EpqzBY-512.webp`,
		createdDate: '2018/08/18',
		technology: 'Jquery',
		isFavorite: false,
		comments: 0,
		likes: 5,
		views: 362,
		title: 'Menu Dropdown Responsive',
		tags: ['menu', 'responsive', 'hamburger', 'drop-down', '3d']
	},
	{
		link: `${URL_CODEPEN_PEN}/JjjxMmm`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/JjjxMmm-512.webp`,
		createdDate: '2019/11/20',
		technology: 'Jquery',
		isFavorite: false,
		comments: 0,
		likes: 3,
		views: 136,
		title: 'Page Scroll Progressbar',
		tags: ['gradient', 'scroll']
	},
	{
		link: `${URL_CODEPEN_PEN}/BJaMyv`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/BJaMyv-512.webp`,
		createdDate: '2017/12/13',
		technology: 'Jquery',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 5,
		title: 'Preloading Screen',
		tags: ['preloader', 'animation', 'responsive', 'border']
	},
	{
		link: `${URL_CODEPEN_PEN}/YYKJom`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/YYKJom-512.webp`,
		createdDate: '2017/12/12',
		technology: 'Jquery',
		isFavorite: false,
		comments: 0,
		likes: 2,
		views: 464,
		title: 'Social Media Expand',
		tags: ['footer', 'mobile', 'button', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/BxKGrE`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/BxKGrE-512.webp`,
		createdDate: '2018/04/25',
		technology: 'Jquery',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 95,
		title: 'Clipboard Minified',
		tags: ['clipboard', 'responsive', 'animation']
	},
	{
		link: `${URL_CODEPEN_PEN}/KoPdpN`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/KoPdpN-512.webp`,
		createdDate: '2018/03/08',
		technology: 'Jquery',
		isFavorite: false,
		comments: 0,
		likes: 2,
		views: 468,
		title: 'Table Responsive With Theme Dark',
		tags: ['table', 'responsive', 'dark-theme']
	},
	{
		link: `${URL_CODEPEN_PEN}/jYyaGa`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/jYyaGa-512.webp`,
		createdDate: '2017/12/27',
		technology: 'Jquery',
		isFavorite: false,
		comments: 0,
		likes: 4,
		views: 702,
		title: 'Acordeon Responsive',
		tags: ['acordeon', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/EoZzvX`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/EoZzvX-512.webp`,
		createdDate: '2017/12/27',
		technology: 'Jquery',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 301,
		title: 'Social Media Expand',
		tags: ['footer', 'mobile', 'button', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/ZEByLMj`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/ZEByLMj-512.webp`,
		createdDate: '2021/02/18',
		technology: 'Jquery',
		isFavorite: false,
		comments: 0,
		likes: 6,
		views: 243,
		title: 'Cards',
		tags: ['card', 'hover', 'responsive', 'mouse']
	},
	{
		link: `${URL_CODEPEN_PEN}/rreGvq`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/rreGvq-512.webp`,
		createdDate: '2018/07/16',
		technology: 'Jquery',
		isFavorite: false,
		comments: 0,
		likes: 11,
		views: 1641,
		title: 'Preloader responsive',
		tags: ['preloader', 'animation', 'border', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/PMZBVJ`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/PMZBVJ-512.webp`,
		createdDate: '2019/07/23',
		technology: 'Jquery',
		isFavorite: false,
		comments: 0,
		likes: 50,
		views: 10218,
		title: '3d Carousel materialize',
		tags: ['library', 'card', 'slider', '3d']
	},
	{
		link: `${URL_CODEPEN_PEN}/MBGyRe`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/MBGyRe-512.webp`,
		createdDate: '2018/08/02',
		technology: 'Jquery',
		isFavorite: false,
		comments: 0,
		likes: 5,
		views: 241,
		title: 'Menu Responsive Hamburger',
		tags: ['menu', 'responsive', 'hamburger', 'drop-down']
	},
	{
		link: `${URL_CODEPEN_PEN}/NBybZr`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/NBybZr-512.webp`,
		createdDate: '2018/07/31',
		technology: 'Jquery',
		isFavorite: false,
		comments: 0,
		likes: 1,
		views: 248,
		title: 'Form Foundation Zurb',
		tags: ['form', 'login', 'library', 'responsive', 'shadow', 'button', 'checkbox']
	},
	{
		link: `${URL_CODEPEN_PEN}/mKwQgM`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/mKwQgM-512.webp`,
		createdDate: '2018/06/14',
		technology: 'Jquery',
		isFavorite: false,
		comments: 0,
		likes: 3,
		views: 1672,
		title: 'Scroll Click Dynamic',
		tags: ['scroll', 'background-clip', 'animation', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/ZvBBgo`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/ZvBBgo-512.webp`,
		createdDate: '2017/12/24',
		technology: 'Jquery',
		isFavorite: false,
		comments: 0,
		likes: 1,
		views: 195,
		title: 'Presentation Card Responsive',
		tags: ['card', 'slider', 'responsive']
	},
	{
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/PMzgKj-512.webp`,
		createdDate: '2019/07/25',
		isFavorite: false,
		technology: 'Jquery',
		comments: 0,
		likes: 4,
		views: 269,
		link: `${URL_CODEPEN_PEN}/PMzgKj`,
		title: 'Effect Brick Falling',
		tags: ['mouse', 'hover', 'animation']
	},
	{
		link: `${URL_CODEPEN_PEN}/eqBZMm`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/eqBZMm-512.webp`,
		createdDate: '2019/07/27',
		technology: 'Jquery',
		isFavorite: false,
		comments: 0,
		likes: 2,
		views: 201,
		title: 'Image Reveal On Scroll',
		tags: ['scroll', 'image']
	},
	{
		link: `${URL_CODEPEN_PEN}/jgVqEe`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/jgVqEe-512.webp`,
		createdDate: '2019/07/27',
		technology: 'Jquery',
		isFavorite: false,
		comments: 0,
		likes: 4,
		views: 180,
		title: 'Change Opacity On Scroll',
		tags: ['scroll', 'animation', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/LMNYWg`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/LMNYWg-512.webp`,
		createdDate: '2018/12/14',
		technology: 'Jquery',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 16,
		title: 'Slider',
		tags: ['slider']
	},
	{
		link: `${URL_CODEPEN_PEN}/KrPLQM`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/KrPLQM-512.webp`,
		createdDate: '2018/11/03',
		technology: 'Jquery',
		isFavorite: false,
		comments: 0,
		likes: 6,
		views: 1002,
		title: 'Slider responsive',
		tags: ['slider', 'responsive', 'pagination']
	},
	{
		link: `${URL_CODEPEN_PEN}/yxvMVJ`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/yxvMVJ-512.webp`,
		createdDate: '2018/09/11',
		technology: 'Jquery',
		isFavorite: false,
		comments: 0,
		likes: 57,
		views: 14615,
		title: 'Preloader responsive',
		tags: ['preloader', 'responsive', 'animation']
	},
	{
		link: `${URL_CODEPEN_PEN}/yxvgOw`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/yxvgOw-512.webp`,
		createdDate: '2018/09/11',
		technology: 'Jquery',
		isFavorite: false,
		comments: 1,
		likes: 22,
		views: 3548,
		title: 'Slider Responsive',
		tags: ['slider', 'responsive', 'keyboard', 'animation', 'backface-visibility', 'mouse']
	},
	{
		link: `${URL_CODEPEN_PEN}/OovERV`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/OovERV-512.webp`,
		createdDate: '2018/09/12',
		technology: 'Jquery',
		isFavorite: false,
		comments: 0,
		likes: 13,
		views: 1388,
		title: 'Card Modal',
		tags: ['card', 'modal', 'shadow', 'button', '3d', 'keydown']
	},
	{
		link: `${URL_CODEPEN_PEN}/EeExbj`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/EeExbj-512.webp`,
		createdDate: '2018/09/11',
		technology: 'Jquery',
		isFavorite: false,
		comments: 0,
		likes: 3,
		views: 840,
		title: 'Navegation Tabs Responsive',
		tags: ['tabs', 'responsive', 'hover', 'card']
	},
	{
		link: `${URL_CODEPEN_PEN}/WyjaJj`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/WyjaJj-512.webp`,
		createdDate: '2018/06/13',
		technology: 'Jquery',
		isFavorite: false,
		comments: 0,
		likes: 2,
		views: 776,
		title: 'Scroll Detection',
		tags: ['scroll']
	},
	{
		link: `${URL_CODEPEN_PEN}/pKEoPN`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/pKEoPN-512.webp`,
		createdDate: '2018/06/07',
		technology: 'Jquery',
		isFavorite: false,
		comments: 0,
		likes: 4,
		views: 1008,
		title: 'Login Form',
		tags: ['form', 'login', 'button', 'shadow', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/PdRbGq`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/PdRbGq-512.webp`,
		createdDate: '2018/09/11',
		technology: 'Jquery',
		isFavorite: false,
		comments: 0,
		likes: 6,
		views: 693,
		title: 'Footer Mobile',
		tags: ['footer', 'mobile', 'animation', 'hover', 'shadow', 'border', 'dark-theme']
	},
	{
		link: `${URL_CODEPEN_PEN}/XPEeBP`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/XPEeBP-512.webp`,
		createdDate: '2018/09/12',
		technology: 'Jquery',
		isFavorite: false,
		comments: 0,
		likes: 8,
		views: 708,
		title: 'Form Contact Responsive',
		tags: ['form', 'responsive', 'button', 'dark-theme', 'sound']
	},
	{
		link: `${URL_CODEPEN_PEN}/BOYmLr`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/BOYmLr-512.webp`,
		createdDate: '2018/09/11',
		technology: 'Jquery',
		isFavorite: false,
		comments: 0,
		likes: 2,
		views: 965,
		title: 'Modals Responsive',
		tags: ['modal', 'responsive', 'sound', 'data', 'button', 'shadow', '3d']
	},
	{
		link: `${URL_CODEPEN_PEN}/Oovgjz`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/Oovgjz-512.webp`,
		createdDate: '2018/09/12',
		technology: 'Jquery',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 113,
		title: 'Modals Flexbox Js Responsive',
		tags: ['modal', 'responsive', 'button', 'hover', 'shadow', '3d', 'keyboard']
	},
	{
		link: `${URL_CODEPEN_PEN}/NQGLOK`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/NQGLOK-512.webp`,
		createdDate: '2019/07/22',
		technology: 'Jquery',
		isFavorite: false,
		comments: 0,
		likes: 6,
		views: 349,
		title: 'Water Fill On Scroll',
		tags: ['scroll', 'animation', 'shadow', 'border', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/aPMEYq`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/aPMEYq-512.webp`,
		createdDate: '2019/01/16',
		technology: 'Jquery',
		isFavorite: true,
		comments: 0,
		likes: 0,
		views: 121,
		title: 'Jackpot Game',
		tags: ['games', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/yGRbzL`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/yGRbzL-512.webp`,
		createdDate: '2019/01/11',
		technology: 'Jquery',
		isFavorite: true,
		comments: 0,
		likes: 0,
		views: 85,
		title: 'Simon Game',
		tags: ['games', 'sound', 'modal', 'button', 'shadow', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/dwaRNz`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/dwaRNz-512.webp`,
		createdDate: '2019/01/15',
		technology: 'Jquery',
		isFavorite: true,
		comments: 0,
		likes: 1,
		views: 175,
		title: 'Archery Game',
		tags: ['game', 'animation', 'responsive']
	},
];
const projectsJavascript = [
	{
		link: `${URL_CODEPEN_PEN}/rrrVbV`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/rrrVbV-512.webp`,
		createdDate: '2018/08/05',
		technology: 'Javascript',
		isFavorite: true,
		comments: 0,
		likes: 1,
		views: 371,
		title: 'Password Generator',
		tags: ['form', 'responsive', 'border', 'clipboard', 'button']
	},
	{
		link: `${URL_CODEPEN_PEN}/QWwrPoM`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/QWwrPoM-512.webp`,
		createdDate: '2020/01/12',
		technology: 'Javascript',
		isFavorite: true,
		comments: 0,
		likes: 8,
		views: 459,
		title: 'Youtube',
		tags: ['template', 'grid', 'menu', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/wvoepar`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/wvoepar-512.webp`,
		createdDate: '2021/02/19',
		technology: 'Javascript',
		isFavorite: true,
		comments: 0,
		likes: 0,
		views: 114,
		title: 'Slither Io',
		tags: ['games', 'mouse', 'radial-gradient', 'library', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/gVaJNM`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/gVaJNM-512.webp`,
		createdDate: '2019/07/22',
		technology: 'Javascript',
		isFavorite: false,
		comments: 0,
		likes: 84,
		views: 4500,
		title: 'Touch Slider swiper.js',
		tags: ['library', 'card', 'slider']
	},
	{
		link: `${URL_CODEPEN_PEN}/GPEbzj`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/GPEbzj-512.webp`,
		createdDate: '2018/12/26',
		technology: 'Javascript',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 13,
		title: 'Merry Christmas!',
		tags: ['animation', 'image', 'background-position', 'border']
	},
	{
		link: `${URL_CODEPEN_PEN}/yLBobVq`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/yLBobVq-512.webp`,
		createdDate: '2019/08/31',
		technology: 'Javascript',
		isFavorite: false,
		comments: 0,
		likes: 18,
		views: 822,
		title: 'Portfolio',
		tags: ['card', 'responsive', 'image', 'search', 'data', 'library']
	},
	{
		link: `${URL_CODEPEN_PEN}/ExKxpLq`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/ExKxpLq-512.webp`,
		createdDate: '2020/08/06',
		technology: 'Javascript',
		isFavorite: false,
		comments: 0,
		likes: 31,
		views: 2176,
		title: 'Effect Parallax',
		tags: ['parallax', 'data', 'responsive', 'mouse']
	},
	{
		link: `${URL_CODEPEN_PEN}/RXazEa`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/RXazEa-512.webp`,
		createdDate: '2019/07/25',
		technology: 'Javascript',
		isFavorite: false,
		comments: 0,
		likes: 3,
		views: 294,
		title: 'Cursor Focus',
		tags: ['mouse', 'glass', 'cursor', 'filter', 'shadow']
	},
	{ 
		link: `${URL_CODEPEN_PEN}/QejeJW`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/QejeJW-512.webp`,
		createdDate: '2019/07/23',
		technology: 'Javascript',
		isFavorite: false,
		comments: 0,
		likes: 14,
		views: 1401,
		title: '3d Mousemove Parallax',
		tags: ['parallax', 'mouse', 'image', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/jOVGamW`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/jOVGamW-512.webp`,
		createdDate: '2021/02/22',
		technology: 'Javascript',
		isFavorite: false,
		comments: 0,
		likes: 3,
		views: 160,
		title: 'Soft Drink',
		tags: ['animation', 'border', 'responsive', 'shadow']
	},
	{
		link: `${URL_CODEPEN_PEN}/RwawJGd`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/RwawJGd-512.webp`,
		createdDate: '2020/08/06',
		technology: 'Javascript',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 168,
		title: 'Effect Starry Night',
		tags: ['animation', 'gradient', 'responsive', 'parallax', 'image']
	},
	{
		link: `${URL_CODEPEN_PEN}/PEbbGM`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/PEbbGM-512.webp`,
		createdDate: '2017/12/24',
		technology: 'Javascript',
		isFavorite: false,
		comments: 0,
		likes: 1,
		views: 233,
		title: 'Reloj Js',
		tags: ['clock']
	},
	{
		link: `${URL_CODEPEN_PEN}/eYmrmgM`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/eYmrmgM-512.webp`,
		createdDate: '2020/01/10',
		technology: 'Javascript',
		isFavorite: false,
		comments: 0,
		likes: 5,
		views: 237,
		title: 'Effect Slide Image Comparision',
		tags: ['slider', 'image', 'mouse']
	},
	{
		link: `${URL_CODEPEN_PEN}/JjGYKJW`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/JjGYKJW-512.webp`,
		createdDate: '2020/06/08',
		technology: 'Javascript',
		isFavorite: true,
		comments: 0,
		likes: 7,
		views: 184,
		title: 'Effect floating button',
		tags: ['button', 'footer', 'mobile', 'list', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/WNbJvbz`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/WNbJvbz-512.webp`,
		createdDate: '2020/01/10',
		technology: 'Javascript',
		isFavorite: false,
		comments: 0,
		likes: 2,
		views: 341,
		title: 'Effect Parallax Mousemove',
		tags: ['parallax', 'data', 'mouse', '3d', 'hover']
	},
	{
		link: `${URL_CODEPEN_PEN}/mddobvR`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/mddobvR-512.webp`,
		createdDate: '2019/11/20',
		technology: 'Javascript',
		isFavorite: true,
		comments: 0,
		likes: 1,
		views: 87,
		title: 'Effect Follow Mouse Cursor',
		tags: ['game', 'hover', 'mouse', 'responsive', 'getBoundingClientRect']
	},
	{
		link: `${URL_CODEPEN_PEN}/pozdLgO`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/pozdLgO-512.webp`,
		createdDate: '2019/09/05',
		technology: 'Javascript',
		isFavorite: false,
		comments: 0,
		likes: 3,
		views: 256,
		title: 'Menu Amazon',
		tags: ['menu', 'responsive', 'drop-down', 'image', 'hamburger']
	},
	{
		link: `${URL_CODEPEN_PEN}/PowePzx`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/PowePzx-512.webp`,
		createdDate: '2020/01/10',
		technology: 'Javascript',
		isFavorite: true,
		comments: 0,
		likes: 3,
		views: 164,
		title: 'Digital clock',
		tags: ['clock', 'box-reflect', 'shadow', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/bGboWJL`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/bGboWJL-512.webp`,
		createdDate: '2019/09/03',
		technology: 'Javascript',
		isFavorite: false,
		comments: 0,
		likes: 2,
		views: 395,
		title: 'Tooltip Js',
		tags: ['tooltip', 'shadow', 'hover', 'border', 'mouse', 'card']
	},
	{
		link: `${URL_CODEPEN_PEN}/LqJmJm`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/LqJmJm-512.webp`,
		gitUrl: `${URL_GITHUB_REPOS}/park`,
		createdDate: '2019/02/14',
		technology: 'Javascript',
		hasRepo: true,
		isFavorite: true,
		comments: 0,
		likes: 1,
		views: 119,
		title: 'Admin Park',
		tags: ['form', 'button', 'shadow', 'modal', 'card', 'local-storage']
	},
	{
		link: `${URL_CODEPEN_PEN}/PEbbOw`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/PEbbOw-512.webp`,
		createdDate: '2017/12/24',
		technology: 'Javascript',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 42,
		title: 'Regresive Count Js',
		tags: ['countdown']
	},
	{
		link: `${URL_CODEPEN_PEN}/QzmvLp`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/QzmvLp-512.webp`,
		createdDate: '2019/01/05',
		technology: 'Javascript',
		isFavorite: true,
		comments: 0,
		likes: 0,
		views: 138,
		title: 'Bubble Floating',
		tags: ['games', 'responsive', 'keyboard']
	},
	{
		link: `${URL_CODEPEN_PEN}/EoNNwL`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/EoNNwL-512.webp`,
		createdDate: '2017/12/24',
		technology: 'Javascript',
		isFavorite: false,
		comments: 0,
		likes: 1,
		views: 79,
		title: 'Modal Js',
		tags: ['modal', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/yxpodp`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/yxpodp-512.webp`,
		createdDate: '2018/09/09',
		technology: 'Javascript',
		isFavorite: true,
		comments: 0,
		likes: 1,
		views: 412,
		title: 'Masonry Layout Js',
		tags: ['template', 'masonry', 'grid', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/YYppxg`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/YYppxg-512.webp`,
		createdDate: '2017/12/24',
		technology: 'Javascript',
		isFavorite: false,
		comments: 0,
		likes: 1,
		views: 141,
		title: 'Modal Youtube Js Responsive',
		tags: ['modal', 'iframe', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/VGyvzy`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/VGyvzy-512.webp`,
		createdDate: '2018/09/09',
		technology: 'Javascript',
		isFavorite: true,
		comments: 0,
		likes: 0,
		views: 69,
		title: 'Tester Responsive Js',
		tags: ['responsive', 'window']
	},
	{
		link: `${URL_CODEPEN_PEN}/roeNbr`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/roeNbr-512.webp`,
		createdDate: '2018/12/14',
		technology: 'Javascript',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 80,
		title: 'Calculator',
		tags: ['calculator', 'responsive', 'data', 'scroll', 'grid']
	},
	{
		link: `${URL_CODEPEN_PEN}/agVWGz`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/agVWGz-512.webp`,
		createdDate: '2019/06/27',
		technology: 'Javascript',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 16,
		title: 'HTML5 Drag & Drop',
		tags: ['drag-drop', 'draggable', 'border', 'responsive']
	},
	{
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/ZgXEPw-512.webp`,
		createdDate: '2019/08/02',
		isFavorite: false,
		technology: 'Javascript',
		comments: 0,
		likes: 1,
		views: 138,
		link: `${URL_CODEPEN_PEN}/ZgXEPw`,
		title: 'Slide Image Comparison',
		tags: ['slider', 'mouse', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/pGRjbb`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/pGRjbb-512.webp`,
		createdDate: '2019/01/31',
		technology: 'Javascript',
		isFavorite: false,
		comments: 0,
		likes: 1,
		views: 220,
		title: 'Lightbox Responsive',
		tags: ['responsive', 'card', 'image', 'modal', 'grid']
	},
	{
		link: `${URL_CODEPEN_PEN}/LebbxJ`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/LebbxJ-512.webp`,
		createdDate: '2017/12/24',
		technology: 'Javascript',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 241,
		title: 'Efect Typewriter',
		tags: ['typewriter']
	},
	{
		link: `${URL_CODEPEN_PEN}/Yzzgqvy`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/Yzzgqvy-512.webp`,
		createdDate: '2019/11/21',
		technology: 'Javascript',
		isFavorite: false,
		comments: 0,
		likes: 1,
		views: 75,
		title: 'Effect Glitch',
		tags: ['image', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/MNjjrz`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/MNjjrz-512.webp`,
		createdDate: '2019/07/26',
		technology: 'Javascript',
		isFavorite: false,
		comments: 0,
		likes: 2,
		views: 769,
		title: 'Effect Parallax On Mouse move',
		tags: ['parallax', 'data', 'background-blend-mode', 'library']
	},
	{
		link: `${URL_CODEPEN_PEN}/GRZRdyB`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/GRZRdyB-512.webp`,
		createdDate: '2020/08/06',
		technology: 'Javascript',
		isFavorite: false,
		comments: 0,
		likes: 1,
		views: 85,
		title: 'Effect Flying Rocket',
		tags: ['animation', 'blur', 'mouse', 'shadow']
	},
	{
		link: `${URL_CODEPEN_PEN}/KKVdgrq`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/KKVdgrq-512.webp`,
		createdDate: '2020/06/08',
		technology: 'Javascript',
		isFavorite: false,
		comments: 0,
		likes: 1,
		views: 155,
		title: 'Effect Video Sphere',
		tags: ['video', 'geometry', 'sphere', 'shadow', 'library', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/dQJpBg`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/dQJpBg-512.webp`,
		createdDate: '2018/11/21',
		technology: 'Javascript',
		isFavorite: false,
		comments: 0,
		likes: 5,
		views: 462,
		title: 'Modal animated',
		tags: ['modal', 'animation', 'responsive', 'form']
	},
	{
		link: `${URL_CODEPEN_PEN}/QWjGbBJ`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/QWjGbBJ-512.webp`,
		createdDate: '2020/04/21',
		technology: 'Javascript',
		isFavorite: false,
		comments: 0,
		likes: 4,
		views: 246,
		title: 'Effect Scroll Rainbow',
		tags: ['animation', 'blur', 'scroll', 'gradient', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/vYNgYpR`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/vYNgYpR-512.webp`,
		createdDate: '2020/04/22',
		technology: 'Javascript',
		isFavorite: false,
		comments: 0,
		likes: 7,
		views: 913,
		title: 'Effect Parallax Scrolling',
		tags: ['scroll', 'parallax', 'responsive', 'mix-blend-mode']
	},
	{
		link: `${URL_CODEPEN_PEN}/oNNBBdZ`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/oNNBBdZ-512.webp`,
		createdDate: '2019/10/22',
		technology: 'Javascript',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 62,
		title: 'Analog Clock',
		tags: ['clock', 'shadow', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/xxLYvBP`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/xxLYvBP-512.webp`,
		createdDate: '2021/11/05',
		technology: 'Javascript',
		isFavorite: true,
		comments: 0,
		likes: 3,
		views: 107,
		title: 'eyeDropper',
		tags: ['border', 'animation', 'gradient', 'responsive', 'background-clip']
	},
	{
		link: `${URL_CODEPEN_PEN}/rNaWWea`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/rNaWWea-512.webp`,
		createdDate: '2019/12/16',
		technology: 'Javascript',
		isFavorite: true,
		comments: 1,
		likes: 22,
		views: 816,
		title: 'Form Card Credit',
		tags: ['card', 'form', 'validation', 'clip-path', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/GRKymgL`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/GRKymgL-512.webp`,
		createdDate: '2019/09/06',
		technology: 'Javascript',
		isFavorite: true,
		comments: 0,
		likes: 11,
		views: 2683,
		title: 'Odometer Number Counter',
		tags: ['library', 'responsive']
	}
];
const projectsCss = [
	{
		link: `${URL_CODEPEN_PEN}/KbvodN`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/KbvodN-512.jpg`,
		createdDate: '2018/12/27',
		technology: 'Css',
		isFavorite: true,
		comments: 0,
		likes: 1,
		views: 111,
		title: 'Infinite Dron Camera',
		tags: ['3d', 'animation', 'border', 'gradient']
	},
	{
		link: `${URL_CODEPEN_PEN}/BaQdvJd`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/BaQdvJd-512.webp`,
		createdDate: '2021/02/21',
		technology: 'Css',
		isFavorite: true,
		comments: 0,
		likes: 2,
		views: 296,
		title: 'Menu',
		tags: ['menu', 'hover', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/PobjRJZ`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/PobjRJZ-512.webp`,
		createdDate: '2021/02/19',
		technology: 'Css',
		isFavorite: true,
		comments: 0,
		likes: 7,
		views: 239,
		title: 'Glassmorphism Effect',
		tags: ['animation', 'glassmorphism', 'glass', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/EqyBvL`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/EqyBvL-512.webp`,
		createdDate: '2019/07/25',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 9,
		views: 437,
		title: 'Effect Distortion Image',
		tags: ['hover', 'animation', 'slider', 'image', 'blur', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/zgBbvP`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/zgBbvP-512.webp`,
		createdDate: '2019/07/25',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 11,
		views: 385,
		title: 'Text Animation Tik Tok',
		tags: ['animation', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/OKXNYL`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/OKXNYL-512.webp`,
		createdDate: '2019/07/25',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 16,
		views: 772,
		title: 'Effect Flip Card 3D',
		tags: ['hover', 'card', '3d', 'shadow', 'responsive', 'image']
	},
	{
		link: `${URL_CODEPEN_PEN}/PMzPON`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/PMzPON-512.webp`,
		createdDate: '2019/07/25',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 2,
		views: 201,
		title: 'Effect Hover In Card',
		tags: ['hover', 'card', '3d', 'responsive', 'clip-path', 'geometry']
	},
	{
		link: `${URL_CODEPEN_PEN}/rXeVMy`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/rXeVMy-512.webp`,
		createdDate: '2019/07/24',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 1,
		views: 171,
		title: 'Button Shiny Glass',
		tags: ['button', 'glass', 'gradient', 'border', 'hover']
	},
	{
		link: `${URL_CODEPEN_PEN}/xvVbMq`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/xvVbMq-512.webp`,
		createdDate: '2019/07/24',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 2,
		views: 107,
		title: 'Effect Hover Button',
		tags: ['hover', 'button', 'border', 'shadow', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/WVrmxO`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/WVrmxO-512.webp`,
		createdDate: '2019/07/24',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 1,
		views: 301,
		title: 'Effect Text Shuffle',
		tags: ['animation', 'steps']
	},
	{
		link: `${URL_CODEPEN_PEN}/qebMPr`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/qebMPr-512.jpg`,
		createdDate: '2019/07/23',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 2,
		views: 86,
		title: 'Loader Rings',
		tags: ['preloader', 'animation', '3d', 'border', 'shadow', 'gradient']
	},
	{
		link: `${URL_CODEPEN_PEN}/bXEZjY`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/bXEZjY-512.webp`,
		createdDate: '2019/07/24',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 8,
		views: 419,
		title: 'Effect clip-path Hover',
		tags: ['button', 'card', 'hover', 'clip-path', 'geometry', 'circle', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/NQGmMZ`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/NQGmMZ-512.webp`,
		createdDate: '2019/07/23',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 3,
		views: 155,
		title: 'Jumping Text',
		tags: ['animation', 'data', 'preloader', 'text-stroke']
	},
	{
		link: `${URL_CODEPEN_PEN}/QWGqzKg`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/QWGqzKg-512.webp`,
		createdDate: '2021/02/23',
		technology: 'Css',
		isFavorite: true,
		comments: 0,
		likes: 7,
		views: 398,
		title: 'Glass Effect',
		tags: ['hover', 'glass', 'blur', 'backdrop-filter', 'background-clip']
	},
	{
		link: `${URL_CODEPEN_PEN}/qeOeWa`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/qeOeWa-512.webp`,
		createdDate: '2019/07/23',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 4,
		views: 172,
		title: 'Effect endless road',
		tags: ['animation', '3d', 'gradient', 'shadow']
	},
	{
		link: `${URL_CODEPEN_PEN}/RXWEvq`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/RXWEvq-512.webp`,
		createdDate: '2019/07/23',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 80,
		title: '3d number countdown',
		tags: ['animation', 'countdown', 'shadow', 'blur', '3d']
	},
	{
		link: `${URL_CODEPEN_PEN}/Zgbmwd`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/Zgbmwd-512.webp`,
		createdDate: '2019/07/23',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 1,
		views: 76,
		title: '3d Wavy Circle Loader',
		tags: ['animation', 'preloader', '3d', 'border', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/aevQLo`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/aevQLo-512.webp`,
		createdDate: '2019/07/23',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 1,
		views: 160,
		title: 'Checkbox Day Night Mode',
		tags: ['checkbox', 'dark-theme']
	},
	{
		link: `${URL_CODEPEN_PEN}/NQGExw`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/NQGExw-512.webp`,
		createdDate: '2019/07/23',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 1,
		views: 227,
		title: 'Effect Rain',
		tags: ['animation', 'image', 'background-position']
	},
	{
		link: `${URL_CODEPEN_PEN}/MNaPov`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/MNaPov-512.webp`,
		createdDate: '2019/07/23',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 2,
		views: 452,
		title: '3d Split Flip Image Hover',
		tags: ['hover', 'animation', 'background-position', '3d', 'image']
	},
	{
		link: `${URL_CODEPEN_PEN}/yWrygE`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/yWrygE-512.webp`,
		createdDate: '2019/06/05',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 272,
		title: 'Email Signature',
		tags: ['card', 'email']
	},
	{
		link: `${URL_CODEPEN_PEN}/KbXXGw`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/KbXXGw-512.webp`,
		createdDate: '2018/12/29',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 70,
		title: 'Background With Blind',
		tags: ['gradient', 'mix-blend-mode', 'image', 'filter', 'repeating-linear-gradient']
	},
	{
		link: `${URL_CODEPEN_PEN}/LMzLOX`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/LMzLOX-512.webp`,
		createdDate: '2018/12/29',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 2,
		views: 132,
		title: 'Glowing Checkbox',
		tags: ['checkbox', 'neon', 'gradient', 'glass', 'shadow', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/bOogbb`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/bOogbb-512.webp`,
		createdDate: '2018/12/28',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 79,
		title: 'Loader Ring',
		tags: ['animation', 'preloader', 'gradient', 'blur', 'responsive', 'shadow']
	},
	{
		link: `${URL_CODEPEN_PEN}/aPyXyJ`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/aPyXyJ-512.webp`,
		createdDate: '2018/12/28',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 1,
		views: 560,
		title: 'Calendar',
		tags: ['card', 'grid', 'hover', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/deBPgO`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/deBPgO-512.webp`,
		createdDate: '2018/05/25',
		technology: 'Css',
		isFavorite: true,
		comments: 0,
		likes: 0,
		views: 706,
		title: 'Beatting Animation',
		tags: ['animation', 'shadow', 'glass']
	},
	{
		link: `${URL_CODEPEN_PEN}/GPvzjG`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/GPvzjG-512.webp`,
		createdDate: '2018/12/28',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 3,
		views: 138,
		title: 'Skew Text Typography',
		tags: ['isometric', 'responsive', 'geometry']
	},
	{
		link: `${URL_CODEPEN_PEN}/jXLWZX`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/jXLWZX-512.webp`,
		createdDate: '2018/12/27',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 2,
		views: 184,
		title: 'Effect Shine',
		tags: ['hover', 'glass', 'shadow', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/wRqMzp`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/wRqMzp-512.webp`,
		createdDate: '2018/12/26',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 69,
		title: 'Effect Layer',
		tags: ['hover', 'data', 'shadow']
	},
	{
		link: `${URL_CODEPEN_PEN}/PXKqmV`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/PXKqmV-512.webp`,
		createdDate: '2018/12/27',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 1,
		views: 183,
		title: 'Effect Ripple',
		tags: ['animation', 'preloader', 'shadow', ' responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/OrgKdw`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/OrgKdw-512.webp`,
		createdDate: '2018/12/26',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 1,
		views: 83,
		title: '3d Shape',
		tags: ['3d', 'cube', 'geometry', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/QzgXoQ`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/QzgXoQ-512.webp`,
		createdDate: '2018/12/26',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 1,
		views: 189,
		title: '3d Background',
		tags: ['3d', 'gradient', 'border', 'shadow', 'animation', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/gZRNqL`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/gZRNqL-512.webp`,
		createdDate: '2018/12/26',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 8,
		title: 'Rhombus Loader',
		tags: ['animation', 'preloader', 'rhombus', 'geometry']
	},
	{
		link: `${URL_CODEPEN_PEN}/vvmqKE`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/vvmqKE-512.webp`,
		createdDate: '2018/12/24',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 223,
		title: 'Merry Christmas',
		tags: ['animation', 'image', 'shadow', 'gradient', 'mix-blend-mode', 'background-position', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/KbmYzJ`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/KbmYzJ-512.webp`,
		createdDate: '2018/12/24',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 106,
		title: 'Loading',
		tags: ['animation', 'mix-blend-mode', 'preloader', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/maRvdN`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/maRvdN-512.webp`,
		createdDate: '2018/12/21',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 13,
		title: 'Css Fireflies',
		tags: ['animation', 'shadow']
	},
	{
		link: `${URL_CODEPEN_PEN}/Zqgmgg`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/Zqgmgg-512.webp`,
		createdDate: '2018/11/01',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 13,
		title: 'Pure Css Tooltips',
		tags: ['tooltip', 'border', 'data']
	},
	{
		link: `${URL_CODEPEN_PEN}/oNYwEKa`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/oNYwEKa-512.webp`,
		createdDate: '2021/02/19',
		technology: 'Css',
		isFavorite: true,
		comments: 0,
		likes: 3,
		views: 486,
		title: 'Cards',
		tags: ['card', 'hover', 'gradient', 'responsive', 'blur', 'shadow', 'glass']
	},
	{
		link: `${URL_CODEPEN_PEN}/YJRENm`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/YJRENm-512.webp`,
		createdDate: '2018/10/25',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 1,
		views: 541,
		title: 'Gallery Pictures Grid',
		tags: ['grid', 'image', 'masonry']
	},
	{
		link: `${URL_CODEPEN_PEN}/MqzrGV`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/MqzrGV-512.webp`,
		createdDate: '2018/09/19',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 20,
		title: 'Hover With clip-path',
		tags: ['hover', 'clip-path']
	},
	{
		link: `${URL_CODEPEN_PEN}/zmyyjV`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/zmyyjV-512.webp`,
		createdDate: '2018/10/26',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 118,
		title: 'Template Bass',
		tags: ['template', 'responsive', 'hamburger', 'menu', 'border', 'hover']
	},
	{
		link: `${URL_CODEPEN_PEN}/Jmwwdq`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/Jmwwdq-512.webp`,
		createdDate: '2018/10/26',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 2,
		views: 363,
		title: 'Template Test',
		tags: ['template', 'responsive', 'hamburger', 'menu', 'border', 'hover', 'footer', 'button', '3d', 'gradient']
	},
	{
		link: `${URL_CODEPEN_PEN}/dqQZxQ`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/dqQZxQ-512.webp`,
		createdDate: '2018/09/19',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 2,
		views: 67,
		title: 'Background Blurred',
		tags: ['blur', 'image']
	},
	{
		link: `${URL_CODEPEN_PEN}/yqRBjq`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/yqRBjq-512.webp`,
		createdDate: '2018/08/07',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 2,
		views: 1505,
		title: 'Table responsive',
		tags: ['table', 'responsive', 'hover']
	},
	{
		link: `${URL_CODEPEN_PEN}/eLLEow`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/eLLEow-512.webp`,
		createdDate: '2018/09/16',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 39,
		title: 'Cube Family',
		tags: ['animation', 'geometry', '3d', 'cube']
	},
	{
		link: `${URL_CODEPEN_PEN}/vzzNZw`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/vzzNZw-512.webp`,
		createdDate: '2018/09/16',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 52,
		title: 'Cube',
		tags: ['animation', 'geometry', '3d', 'cube', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/dqqPxv`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/dqqPxv-512.webp`,
		createdDate: '2018/09/16',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 1,
		views: 227,
		title: 'Reloj Css',
		tags: ['animation', 'gradient', 'clock', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/zJLgqb`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/zJLgqb-512.webp`,
		createdDate: '2018/09/15',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 47,
		title: 'Reverse Layout Animation',
		tags: ['animation', 'template', 'grid', 'animationend', 'footer', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/NLBZLp`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/NLBZLp-512.webp`,
		createdDate: '2018/09/15',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 105,
		title: 'Hearth Css',
		tags: ['animation', 'animation-play-state']
	},
	{
		link: `${URL_CODEPEN_PEN}/VozPeY`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/VozPeY-512.webp`,
		createdDate: '2019/07/02',
		technology: 'Css',
		isFavorite: true,
		comments: 0,
		likes: 8,
		views: 341,
		title: 'Cards',
		tags: ['card', 'hover', 'responsive', 'grid', 'shadow']
	},
	{
		link: `${URL_CODEPEN_PEN}/eLjweV`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/eLjweV-512.webp`,
		createdDate: '2018/09/15',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 385,
		title: 'Animation Count Css',
		tags: ['animation', 'counter-increment', 'counter']
	},
	{
		link: `${URL_CODEPEN_PEN}/PBMrKe`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/PBMrKe-512.webp`,
		createdDate: '2018/09/18',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 19,
		title: 'Mouse Move Parallax Effect',
		tags: ['parallax', 'mouse', 'image']
	},
	{
		link: `${URL_CODEPEN_PEN}/MBPgVq`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/MBPgVq-512.webp`,
		createdDate: '2018/08/07',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 27,
		title: 'Not selector',
		tags: ['hover', 'not', 'card', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/pZxzYO`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/pZxzYO-512.webp`,
		createdDate: '2018/08/07',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 2,
		views: 233,
		title: 'Text 3d',
		tags: ['3d', 'shadow', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/jpeNwa`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/jpeNwa-512.webp`,
		createdDate: '2018/08/07',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 74,
		title: 'Pseudoelements Before & After',
		tags: ['shadow', 'gradient', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/wxYwaz`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/wxYwaz-512.webp`,
		createdDate: '2018/08/07',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 184,
		title: 'Gallery Images',
		tags: ['hover', 'responsive', 'card']
	},
	{
		link: `${URL_CODEPEN_PEN}/NBOKxp`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/NBOKxp-512.webp`,
		createdDate: '2018/08/07',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 19,
		title: 'List Homeworks',
		tags: ['gradient', 'background-position', 'responsive', 'list']
	},
	{
		link: `${URL_CODEPEN_PEN}/NBLVJY`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/NBLVJY-512.webp`,
		createdDate: '2018/08/07',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 471,
		title: 'Background Image Transparent',
		tags: ['card', 'image', 'glass', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/oMqedL`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/oMqedL-512.webp`,
		createdDate: '2018/08/01',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 214,
		title: 'Cards 3d',
		tags: ['card', '3d', 'responsive', 'backface-visibility']
	},
	{
		link: `${URL_CODEPEN_PEN}/xJWLVv`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/xJWLVv-512.webp`,
		createdDate: '2018/08/01',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 24,
		title: 'Layout Responsive Flexbox',
		tags: ['template', 'footer', 'menu', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/QBmvYj`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/QBmvYj-512.webp`,
		createdDate: '2018/08/01',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 51,
		title: 'Layout Responsive Flexbox Grid',
		tags: ['template', 'footer', 'menu', 'border', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/xvXOpN`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/xvXOpN-512.webp`,
		createdDate: '2019/08/03',
		technology: 'Css',
		isFavorite: true,
		comments: 0,
		likes: 4,
		views: 302,
		title: 'Effect Isometric Glass',
		tags: ['hover', 'geometry', 'isometric', 'shadow', 'glass']
	},
	{
		link: `${URL_CODEPEN_PEN}/pZLPxy`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/pZLPxy-512.webp`,
		createdDate: '2018/08/01',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 3,
		views: 353,
		title: 'Customized Checkbox & Radio Buttons',
		tags: ['button', 'checkbox', 'hover', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/zLWwrB`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/zLWwrB-512.webp`,
		createdDate: '2018/08/01',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 3,
		views: 606,
		title: 'Social Media Sticky',
		tags: ['button', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/mjXrzx`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/mjXrzx-512.webp`,
		createdDate: '2018/07/31',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 76,
		title: 'Cafam Domicilios',
		tags: ['template', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/jpZrgp`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/jpZrgp-512.webp`,
		createdDate: '2018/07/31',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 618,
		title: 'Menu Animated Dropdown',
		tags: ['menu', 'drop-down', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/rrqBWr`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/rrqBWr-512.webp`,
		createdDate: '2018/08/07',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 68,
		title: 'Hover In Cols & Rows',
		tags: ['hover', 'table', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/pZOMBw`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/pZOMBw-512.webp`,
		createdDate: '2018/08/07',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 19,
		title: 'Ying yang',
		tags: ['animation', 'preloader', 'gradient', 'shadow', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/oMPrRo`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/oMPrRo-512.webp`,
		createdDate: '2018/08/07',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 1,
		views: 13,
		title: 'Borders of colors',
		tags: ['border', 'shadow', 'card', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/bjxXdP`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/bjxXdP-512.webp`,
		createdDate: '2018/08/07',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 8,
		title: 'Borders multiple',
		tags: ['border', 'shadow', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/ZjOJJQ`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/ZjOJJQ-512.webp`,
		createdDate: '2018/07/18',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 5,
		views: 321,
		title: 'Animation Turn Effect',
		tags: ['animation', '3d', 'background-clip', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/yEXQox`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/yEXQox-512.webp`,
		createdDate: '2018/06/14',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 20,
		title: 'CSS Text Loading',
		tags: ['animation', 'preloader', 'responsive', 'blur', '3d', 'data']
	},
	{
		link: `${URL_CODEPEN_PEN}/YzyNPgm`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/YzyNPgm-512.webp`,
		createdDate: '2020/04/23',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 19,
		views: 819,
		title: 'Effect Hover Card',
		tags: ['card', 'hover', 'clip-path', 'circle', 'geometry', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/eLLEVX`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/eLLEVX-512.webp`,
		createdDate: '2018/09/16',
		technology: 'Css',
		isFavorite: true,
		comments: 0,
		likes: 0,
		views: 75,
		title: 'Cube Rotating On Its Own Axis',
		tags: ['animation', 'geometry', '3d', 'cube', 'grid', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/zYYNMgq`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/zYYNMgq-512.webp`,
		createdDate: '2019/10/22',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 75,
		title: 'Layout responsive',
		tags: ['template', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/XWWpjaR`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/XWWpjaR-512.webp`,
		createdDate: '2019/10/21',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 3,
		views: 258,
		title: 'Button Gradient',
		tags: ['button', 'gradient', 'responsive', 'hover', 'blur']
	},
	{
		link: `${URL_CODEPEN_PEN}/qBBRNWd`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/qBBRNWd-512.webp`,
		createdDate: '2019/10/21',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 2,
		views: 114,
		title: 'Video Cube',
		tags: ['video', 'cube', 'geometry']
	},
	{
		link: `${URL_CODEPEN_PEN}/KKKaMGj`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/KKKaMGj-512.webp`,
		createdDate: '2019/10/22',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 6,
		views: 425,
		title: 'Effect Change Background On Hover',
		tags: ['hover', 'menu', 'responsive', 'shadow']
	},
	{
		link: `${URL_CODEPEN_PEN}/OJJWNzb`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/OJJWNzb-512.webp`,
		createdDate: '2019/10/21',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 12,
		views: 993,
		title: 'Effect Water Wave Button',
		tags: ['button', 'animation', 'hover']
	},
	{
		link: `${URL_CODEPEN_PEN}/abbzxKJ`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/abbzxKJ-512.webp`,
		createdDate: '2019/10/08',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 45,
		title: 'Effect Loading Svg',
		tags: ['svg', 'animation', 'responsive', 'preloader']
	},
	{
		link: `${URL_CODEPEN_PEN}/XWWJQOp`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/XWWJQOp-512.webp`,
		createdDate: '2019/10/08',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 5,
		views: 311,
		title: 'Effect Liquid Loader',
		tags: ['animation', 'responsive', 'preloader', 'water']
	},
	{
		link: `${URL_CODEPEN_PEN}/gOYdOXQ`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/gOYdOXQ-512.webp`,
		createdDate: '2019/09/17',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 2,
		views: 345,
		title: 'Effect loading text',
		tags: ['animation', 'preloader', 'data', 'responsive', 'water']
	},
	{
		link: `${URL_CODEPEN_PEN}/wvwEwEX`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/wvwEwEX-512.webp`,
		createdDate: '2019/09/16',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 1,
		views: 279,
		title: 'Effect water wave',
		tags: ['animation', 'water']
	},
	{
		link: `${URL_CODEPEN_PEN}/VwZypBx`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/VwZypBx-512.webp`,
		createdDate: '2019/09/06',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 2,
		views: 394,
		title: 'Effect List Item',
		tags: ['hover', 'list', 'menu']
	},
	{
		link: `${URL_CODEPEN_PEN}/rNBdBLW`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/rNBdBLW-512.webp`,
		createdDate: '2019/09/09',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 73,
		title: 'Quick loading bar',
		tags: ['preloader', 'animation', 'shadow']
	},
	{
		link: `${URL_CODEPEN_PEN}/RwbQXRV`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/RwbQXRV-512.webp`,
		createdDate: '2019/09/09',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 3,
		views: 218,
		title: 'Indian flag animation',
		tags: ['animation', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/GRKyrZN`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/GRKyrZN-512.webp`,
		createdDate: '2019/09/06',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 3,
		views: 338,
		title: 'Wrap text around circle',
		tags: ['image', 'shape', 'circle', 'geometry']
	},
	{
		link: `${URL_CODEPEN_PEN}/qBWpRjE`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/qBWpRjE-512.webp`,
		createdDate: '2019/09/06',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 19,
		views: 1008,
		title: 'Effect Card Direction Aware',
		tags: ['card', 'responsive', '3d', 'hover', 'shadow']
	},
	{
		link: `${URL_CODEPEN_PEN}/eYOyBqL`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/eYOyBqL-512.webp`,
		createdDate: '2019/09/06',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 4,
		views: 148,
		title: 'Effect ghost text',
		tags: ['animation', 'blur', 'hover']
	},
	{
		link: `${URL_CODEPEN_PEN}/VwZymxJ`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/VwZymxJ-512.webp`,
		createdDate: '2019/09/06',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 10,
		views: 360,
		title: 'Effect Text Glowing',
		tags: ['animation', 'responsive', 'shadow']
	},
	{
		link: `${URL_CODEPEN_PEN}/eYOGzQZ`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/eYOGzQZ-512.webp`,
		createdDate: '2019/09/02',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 1,
		views: 203,
		title: 'Tooltips',
		tags: ['tooltip', 'hover', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/rXGama`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/rXGama-512.webp`,
		createdDate: '2019/08/03',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 109,
		title: 'Effect 3d Rotation',
		tags: ['animation', '3d', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/eqEqaz`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/eqEqaz-512.webp`,
		createdDate: '2019/08/02',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 3,
		views: 113,
		title: 'Effect split text',
		tags: ['hover', 'clip-path', 'geometry', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/zgovXj`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/zgovXj-512.webp`,
		createdDate: '2019/07/27',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 2,
		views: 273,
		title: 'Effect Rainy Text',
		tags: ['mix-blend-mode', 'text-fill-color']
	},
	{
		link: `${URL_CODEPEN_PEN}/mNOyWV`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/mNOyWV-512.webp`,
		createdDate: '2019/07/27',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 235,
		title: 'Effect magnifying Glass',
		tags: ['glass', 'animation', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/xvRxVP`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/xvRxVP-512.webp`,
		createdDate: '2019/07/27',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 2,
		views: 333,
		title: 'Neon Button Ligth',
		tags: ['button', 'neon', 'gradient', 'animation', 'hover', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/WVoeLB`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/WVoeLB-512.webp`,
		createdDate: '2019/07/27',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 130,
		title: 'Effect Colour Type Text',
		tags: ['animation', 'steps', 'data', 'background-clip', 'gradient', 'blur']
	},
	{
		link: `${URL_CODEPEN_PEN}/OKRVpB`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/OKRVpB-512.webp`,
		createdDate: '2019/07/26',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 2,
		views: 103,
		title: 'Effect Info Contact Reveal',
		tags: ['hover']
	},
	{
		link: `${URL_CODEPEN_PEN}/gVwrMz`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/gVwrMz-512.webp`,
		createdDate: '2019/07/26',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 11,
		views: 2225,
		title: 'Menu Item Hover Images',
		tags: ['hover', 'menu', 'image']
	},
	{
		link: `${URL_CODEPEN_PEN}/oKzNdV`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/oKzNdV-512.webp`,
		createdDate: '2019/07/26',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 208,
		title: 'Slideshow 3d Rotation',
		tags: ['slider', '3d', 'responsive', 'animation', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/vYyepaG`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/vYyepaG-512.webp`,
		createdDate: '2021/02/22',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 19,
		views: 590,
		title: 'Neon Effect',
		tags: ['animation', 'neon', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/WNoOXNx`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/WNoOXNx-512.webp`,
		createdDate: '2021/02/19',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 3,
		views: 103,
		title: 'Steaming Effect',
		tags: ['animation', 'border', 'gradient', 'responsive', 'var']
	},
	{
		link: `${URL_CODEPEN_PEN}/vYyZyVv`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/vYyZyVv-512.webp`,
		createdDate: '2021/02/18',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 3,
		views: 551,
		title: 'Shadows Effect',
		tags: ['shadow', 'neumorphism', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/yLVXdWj`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/yLVXdWj-512.webp`,
		createdDate: '2021/02/19',
		technology: 'Css',
		isFavorite: false,
		comments: 1,
		likes: 6,
		views: 185,
		title: 'Fire Effect',
		tags: ['animation', 'svg', 'filter', 'box-reflect', 'gradient', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/ZEByLyx`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/ZEByLyx-512.webp`,
		createdDate: '2021/02/18',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 5,
		views: 311,
		title: 'Audio Player',
		tags: ['audio', 'shadow', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/zYBOqYV`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/zYBOqYV-512.webp`,
		createdDate: '2020/10/05',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 4,
		views: 129,
		title: 'Ring Effect',
		tags: ['animation', 'svg', 'box-reflect', 'filter', 'blur', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/YzWKwGm`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/YzWKwGm-512.webp`,
		createdDate: '2020/10/05',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 4,
		views: 121,
		title: 'Neumorphism Gradient Ring',
		tags: ['neumorphism', 'preloader', 'gradient', 'shadow', 'animation', 'blur', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/xxOzPVb`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/xxOzPVb-512.webp`,
		createdDate: '2020/11/04',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 3,
		views: 188,
		title: 'Effect Planets',
		tags: ['animation', 'box-reflect', 'gradient', 'shadow']
	},
	{
		link: `${URL_CODEPEN_PEN}/rNeNdbX`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/rNeNdbX-512.webp`,
		createdDate: '2020/08/06',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 1,
		views: 305,
		title: 'Effect Hover Line Fill',
		tags: ['hover', 'border', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/JjKPdvR`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/JjKPdvR-512.webp`,
		createdDate: '2020/10/05',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 4,
		views: 128,
		title: 'Effect Drop Shadow',
		tags: ['shadow', 'gradient', 'blur', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/eYBRBBz`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/eYBRBBz-512.webp`,
		createdDate: '2021/02/18',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 2,
		views: 246,
		title: 'Effect Zigzag Border',
		tags: ['border', 'gradient', 'background-blend-mode', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/abZoOPm`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/abZoOPm-512.jpg`,
		createdDate: '2020/10/05',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 190,
		title: 'Effect Perpetual Animation',
		tags: ['animation', 'box-reflect', 'border', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/QWNWxKy`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/QWNWxKy-512.webp`,
		createdDate: '2020/08/06',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 4,
		views: 251,
		title: 'Effect 3d Book',
		tags: ['hover', '3d', 'shadow', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/KKzKoWR`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/KKzKoWR-512.webp`,
		createdDate: '2020/08/05',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 8,
		views: 691,
		title: 'Effect Falling Leaves',
		tags: ['animation', 'blur', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/vYLNKMz`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/vYLNKMz-512.webp`,
		createdDate: '2020/06/08',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 230,
		title: 'Effect text typography portrait',
		tags: ['mix-blend-mode', 'image', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/yLeYJPL`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/yLeYJPL-512.webp`,
		createdDate: '2020/06/08',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 1,
		views: 135,
		title: 'Effect liquid loader',
		tags: ['animation', 'svg', 'water', 'preloader', 'responsive', 'filter']
	},
	{
		link: `${URL_CODEPEN_PEN}/VwvJzZP`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/VwvJzZP-512.webp`,
		createdDate: '2020/05/29',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 130,
		title: 'Effect loading',
		tags: ['animation', 'shadow', '3d', 'preloader', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/qBOmoYO`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/qBOmoYO-512.webp`,
		createdDate: '2020/04/07',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 7,
		views: 197,
		title: 'Effect 3d Isometric',
		tags: ['isometric', '3d', 'hover', 'responsive', 'geometry']
	},
	{
		link: `${URL_CODEPEN_PEN}/GRprJbM`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/GRprJbM-512.webp`,
		createdDate: '2020/04/23',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 12,
		views: 1020,
		title: 'Effect Card Isometric',
		tags: ['hover', 'isometric', 'geometry', '3d', 'shadow', 'blur', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/OJPZPwb`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/OJPZPwb-512.webp`,
		createdDate: '2020/01/10',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 3,
		views: 157,
		title: 'Effect Reflection',
		tags: ['box-reflect', 'hover', 'image', '3d', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/gObzOvE`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/gObzOvE-512.webp`,
		createdDate: '2020/01/10',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 3,
		views: 166,
		title: 'Effect Parallax Scrolling clip-mask',
		tags: ['scroll', 'parallax', 'background-clip', 'text-fill-color', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/gObzOJV`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/gObzOJV-512.webp`,
		createdDate: '2020/01/10',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 177,
		title: 'Custom Scroll Bar',
		tags: ['scroll', 'responsive', 'gradient']
	},
	{
		link: `${URL_CODEPEN_PEN}/qBEYEOQ`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/qBEYEOQ-512.webp`,
		createdDate: '2020/01/10',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 1,
		views: 209,
		title: 'Effect 3d Editable Text',
		tags: ['isometric', '3d', 'shadow', 'contenteditable', 'geometry']
	},
	{
		link: `${URL_CODEPEN_PEN}/PoweoZx`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/PoweoZx-512.webp`,
		createdDate: '2020/01/10',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 1,
		views: 225,
		title: 'Cards',
		tags: ['card', 'hover', '3d', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/yLLZvyp`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/yLLZvyp-512.webp`,
		createdDate: '2019/11/20',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 3,
		views: 502,
		title: 'Effect Preloader',
		tags: ['preloader', 'animation', 'shadow', 'data']
	},
	{
		link: `${URL_CODEPEN_PEN}/YzzBYPO`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/YzzBYPO-512.webp`,
		createdDate: '2019/11/20',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 2,
		views: 277,
		title: 'Card',
		tags: ['card', 'hover', 'border', 'animation', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/EGvxer`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/EGvxer-512.webp`,
		createdDate: '2018/12/27',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 1,
		views: 164,
		title: 'Masonry Grid Layout Responsive',
		tags: ['template', 'columns', 'responsive', 'card']
	},
	{
		link: `${URL_CODEPEN_PEN}/PXryxY`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/PXryxY-512.webp`,
		createdDate: '2019/01/19',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 2,
		views: 268,
		title: 'Template Bella',
		tags: ['template', 'slider', 'animation', 'bootstrap', 'library', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/xxxMPJq`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/xxxMPJq-512.webp`,
		createdDate: '2019/11/20',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 0,
		views: 116 ,
		title: 'Effect Diagonal',
		tags: ['clip-path', 'geometry', 'hover', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/LwRpEr`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/LwRpEr-512.webp`,
		createdDate: '2019/07/25',
		technology: 'Css',
		isFavorite: false,
		comments: 0,
		likes: 10,
		views: 631,
		title: 'Glowing Gradient Border',
		tags: ['card', 'border', 'gradient']
	},
	{
		link: `${URL_CODEPEN_PEN}/MZvZvZ`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/MZvZvZ-512.webp`,
		createdDate: '2018/12/28',
		technology: 'Css',
		isFavorite: true,
		comments: 0,
		likes: 9,
		views: 505,
		title: 'Split Image On Hover',
		tags: ['hover', 'card', 'image', 'background-position']
	},
	{
		link: `${URL_CODEPEN_PEN}/rXMBgy`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/rXMBgy-512.webp`,
		createdDate: '2019/07/25',
		technology: 'Css',
		isFavorite: true,
		comments: 0,
		likes: 5,
		views: 1364,
		title: 'Effect Thanos Snap Dispersion',
		tags: ['animation', 'hover', 'image', 'blur', 'responsive']
	},
	{
		link: `${URL_CODEPEN_PEN}/rZodGx`,
		imgUrl: `${URL_CODEPEN_PREVIEW_IMG}/rZodGx-512.webp`,
		createdDate: '2018/09/20',
		technology: 'Css',
		isFavorite: true,
		comments: 0,
		likes: 0,
		views: 44,
		title: 'Animation Logo Angular',
		tags: ['animation', 'svg', 'stroke', 'fill', 'responsive']
	}
];

/* Elements HTML */
const TECHNOLOGIES = [
	{
		id: 'firebase',
		text: 'Firebase'
	},
	{
		id: 'angular',
		text: 'Angular'
	},
	{
		id: 'ionic',
		text: 'Ionic'
	},
	{
		id: 'jquery',
		text: 'Jquery'
	},
	{
		id: 'javascript',
		text: 'Javascript'
	},
	{
		id: 'css',
		text: 'Css'
	}
];
const TAG_CATEGORIES_BUTTONS = [
	{
		className: 'category-tag',
		id: 'btn-tag-color',
		text: 'Color'
	},
	{
		className: 'category-tag',
		id: 'btn-tag-figure',
		text: 'Figure'
	},
	{
		className: 'category-tag',
		id: 'btn-tag-multimedia',
		text: 'Multimedia'
	},
	{
		className: 'category-tag',
		id: 'btn-tag-js',
		text: 'js'
	},
	{
		className: 'category-tag',
		id: 'btn-tag-element',
		text: 'Element'
	},
	{
		className: 'category-tag',
		id: 'btn-tag-css',
		text: 'Css'
	},
	{
		className: 'category-tag',
		id: 'btn-tag-special',
		text: 'Special'
	}
];
const TAG_BUTTONS = [
	{
		className: 'btn-tag',
		category: 'btn-tag-color',
		id: 'btn-box-reflect',
		text: 'Box Reflect'
	},
	{
		className: 'btn-tag',
		category: 'btn-tag-color',
		id: 'btn-dark-theme',
		text: 'Dark Theme'
	},
	{
		className: 'btn-tag',
		category: 'btn-tag-color',
		id: 'btn-gradient',
		text: 'Gradient'
	},
	{
		className: 'btn-tag',
		category: 'btn-tag-color',
		id: 'btn-mix-blend-mode',
		text: 'Mix Blend Mode'
	},
	{
		className: 'btn-tag',
		category: 'btn-tag-color',
		id: 'btn-neon',
		text: 'Neon'
	},
	{
		className: 'btn-tag',
		category: 'btn-tag-color',
		id: 'btn-radial-gradient',
		text: 'Radial Gradient'
	},
	{
		className: 'btn-tag',
		category: 'btn-tag-color',
		id: 'btn-shadow',
		text: 'Shadow'
	},
	{
		className: 'btn-tag',
		category: 'btn-tag-color',
		id: 'btn-text-fill-color',
		text: 'Text Fill Color'
	},
	{
		className: 'btn-tag',
		category: 'btn-tag-figure',
		id: 'btn-3d',
		text: '3d'
	},
	{
		className: 'btn-tag',
		category: 'btn-tag-figure',
		id: 'btn-blur',
		text: 'Blur'
	},
	{
		className: 'btn-tag',
		category: 'btn-tag-figure',
		id: 'btn-clip-path',
		text: 'Clip Path'
	},
	{
		className: 'btn-tag',
		category: 'btn-tag-figure',
		id: 'btn-clock',
		text: 'Clock'
	},
	{
		className: 'btn-tag',
		category: 'btn-tag-figure',
		id: 'btn-cube',
		text: 'Cube'
	},
	{
		className: 'btn-tag',
		category: 'btn-tag-figure',
		id: 'btn-geometry',
		text: 'Geometry'
	},
	{
		className: 'btn-tag',
		category: 'btn-tag-figure',
		id: 'btn-glass',
		text: 'Glass'
	},
	{
		className: 'btn-tag',
		category: 'btn-tag-figure',
		id: 'btn-isometric',
		text: 'Isometric'
	},
	{
		className: 'btn-tag',
		category: 'btn-tag-figure',
		id: 'btn-svg',
		text: 'Svg'
	},
	{
		className: 'btn-tag',
		category: 'btn-tag-figure',
		id: 'btn-water',
		text: 'Water'
	},
	{
		className: 'btn-tag',
		category: 'btn-tag-multimedia',
		id: 'btn-image',
		text: 'Image'
	},
	{
		className: 'btn-tag',
		category: 'btn-tag-multimedia',
		id: 'btn-sound',
		text: 'Sound'
	},
	{
		className: 'btn-tag',
		category: 'btn-tag-multimedia',
		id: 'btn-video',
		text: 'Video'
	},
	{
		className: 'btn-tag',
		category: 'btn-tag-js',
		id: 'btn-search',
		text: 'Search'
	},
	{
		className: 'btn-tag',
		category: 'btn-tag-js',
		id: 'btn-pagination',
		text: 'Pagination'
	},
	{
		className: 'btn-tag',
		category: 'btn-tag-js',
		id: 'btn-login',
		text: 'Login'
	},
	{
		className: 'btn-tag',
		category: 'btn-tag-js',
		id: 'btn-parallax',
		text: 'Parallax'
	},
	{
		className: 'btn-tag',
		category: 'btn-tag-js',
		id: 'btn-preloader',
		text: 'Preloader'
	},
	{
		className: 'btn-tag',
		category: 'btn-tag-js',
		id: 'btn-slider',
		text: 'Slider'
	},
	{
		className: 'btn-tag',
		category: 'btn-tag-js',
		id: 'btn-clipboard',
		text: 'Clipboard'
	},
	{
		className: 'btn-tag',
		category: 'btn-tag-js',
		id: 'btn-api',
		text: 'Api'
	},
	{
		className: 'btn-tag',
		category: 'btn-tag-js',
		id: 'btn-data',
		text: 'Data'
	},
	{
		className: 'btn-tag',
		category: 'btn-tag-js',
		id: 'btn-library',
		text: 'Library'
	},
	{
		className: 'btn-tag',
		category: 'btn-tag-js',
		id: 'btn-angular-material',
		text: 'Angular Material'
	},
	{
		className: 'btn-tag',
		category: 'btn-tag-js',
		id: 'btn-mouse',
		text: 'Mouse'
	},
	{
		className: 'btn-tag',
		category: 'btn-tag-js',
		id: 'btn-date',
		text: 'Date'
	},
	{
		className: 'btn-tag',
		category: 'btn-tag-js',
		id: 'btn-scroll',
		text: 'Scroll'
	},
	{
		className: 'btn-tag',
		category: 'btn-tag-element',
		id: 'btn-drop-down',
		text: 'Drop Down'
	},
	{
		className: 'btn-tag',
		category: 'btn-tag-element',
		id: 'btn-footer',
		text: 'Footer'
	},
	{
		className: 'btn-tag',
		category: 'btn-tag-element',
		id: 'btn-form',
		text: 'Form'
	},
	{
		className: 'btn-tag',
		category: 'btn-tag-element',
		id: 'btn-hamburger',
		text: 'Hamburger'
	},
	{
		className: 'btn-tag',
		category: 'btn-tag-element',
		id: 'btn-list',
		text: 'List'
	},
	{
		className: 'btn-tag',
		category: 'btn-tag-element',
		id: 'btn-menu',
		text: 'Menu'
	},
	{
		className: 'btn-tag',
		category: 'btn-tag-element',
		id: 'btn-mobile',
		text: 'Mobile'
	},
	{
		className: 'btn-tag',
		category: 'btn-tag-element',
		id: 'btn-modal',
		text: 'Modal'
	},
	{
		className: 'btn-tag',
		category: 'btn-tag-element',
		id: 'btn-table',
		text: 'Table'
	},
	{
		className: 'btn-tag',
		category: 'btn-tag-element',
		id: 'btn-template',
		text: 'Template'
	},
	{
		className: 'btn-tag',
		category: 'btn-tag-element',
		id: 'btn-tooltip',
		text: 'Tooltip'
	},
	{
		className: 'btn-tag',
		category: 'btn-tag-css',
		id: 'btn-animation',
		text: 'Animation'
	},
	{
		className: 'btn-tag',
		category: 'btn-tag-css',
		id: 'btn-hover',
		text: 'Hover'
	},
	{
		className: 'btn-tag',
		category: 'btn-tag-css',
		id: 'btn-border',
		text: 'Border'
	},
	{
		className: 'btn-tag',
		category: 'btn-tag-css',
		id: 'btn-button',
		text: 'Button'
	},
	{
		className: 'btn-tag',
		category: 'btn-tag-css',
		id: 'btn-grid',
		text: 'Grid'
	},
	{
		className: 'btn-tag',
		category: 'btn-tag-css',
		id: 'btn-responsive',
		text: 'Responsive'
	},
	{
		className: 'btn-tag',
		category: 'btn-tag-special',
		id: 'btn-games',
		text: 'Games'
	},
	{
		className: 'btn-tag',
		category: 'btn-tag-special',
		id: 'btn-graphs',
		text: 'Graphs'
	},
	{
		className: 'btn-tag',
		category: 'btn-tag-special',
		id: 'btn-studies',
		text: 'Studies'
	},
	{
		className: 'btn-tag',
		category: 'btn-tag-special',
		id: 'btn-card',
		text: 'Card'
	},
];
const SORTING_BUTTONS = [
	{
		className: 'btn-tag btn-highlight',
		id: 'btn-sorting-no-fav',
		text: '❌⭐ Favorite',
	},
	{
		className: 'btn-tag btn-highlight',
		id: 'btn-sorting-fav',
		text: '⭐ Favorite',
	},
	{
		className: 'btn-tag btn-highlight',
		id: 'btn-sorting-no-github',
		text: '❌🐱 Github',
	},
	{
		className: 'btn-tag btn-highlight',
		id: 'btn-sorting-github',
		text: '🐱 Github',
	},
	{
		className: 'btn-tag btn-highlight',
		id: 'btn-sorting-a-z',
		text: '🔽 A-Z',
	},
	{
		className: 'btn-tag btn-highlight',
		id: 'btn-sorting-z-a',
		text: '🔼 Z-A',
	},
	{
		className: 'btn-tag btn-highlight',
		id: 'btn-sorting-oldest',
		text: '🔙 Oldest',
	},
	{
		className: 'btn-tag btn-highlight',
		id: 'btn-sorting-latest',
		text: '🔜 Latest',
	},
	{
		className: 'btn-tag btn-highlight',
		id: 'btn-sorting-less-likes',
		text: '➖❤️ Likes',
	},
	{
		className: 'btn-tag btn-highlight',
		id: 'btn-sorting-more-likes',
		text: '➕❤️ Likes',
	},
	{
		className: 'btn-tag btn-highlight',
		id: 'btn-sorting-less-comments',
		text: '➖💬 Comments',
	},
	{
		className: 'btn-tag btn-highlight',
		id: 'btn-sorting-more-comments',
		text: '➕💬 Comments',
	},
	{
		className: 'btn-tag btn-highlight',
		id: 'btn-sorting-less-views',
		text: '➖👁️ Views',
	},
	{
		className: 'btn-tag btn-highlight',
		id: 'btn-sorting-more-views',
		text: '➕👁️ Views',
	}
];
const TECHNOLOGY_BUTTONS = [];

/* Tags & sort filter */
let filterBtns = [];
let filterBtnsTech = [];
let projectsFilteredBySelectedFilter = [];

/* Containers for tag buttons and projects */
const categoriesTagContainerElement = document.getElementById(ID_NAMES.ctnCategoriesTag);
const tagsContainerElement = document.getElementById(ID_NAMES.ctnTagButtons);
const sortContainerElement = document.getElementById(ID_NAMES.ctnSortButtons);
const techContainerElement = document.getElementById(ID_NAMES.ctnTechButtons);
const ctnSelectedFiltersElement = document.getElementById(ID_NAMES.ctnSelectedFilters);
const selectedFiltersElement = document.getElementById(ID_NAMES.selectedFilters);
const projectsContainerElement = document.getElementById(ID_NAMES.ctnProjects);
const projectsFilterByTagsContainerElement = document.getElementById(ID_NAMES.ctnProjectsFilteredByTags);
const notFoundProjectsFilteredByTagsElement = document.getElementById(ID_NAMES.NotFoundProjectsFilteredByTags);

/* Buttons */
const btnTagAlphabet = document.getElementById(ID_NAMES.btnTagAlphabet);

/* Add tag-category, tag, sort & tech buttons to the DOM */
const createFilterBtnsDOM = ({id, className, text}, containerBtns) => {
	const btnFilter = document.createElement('button');
	
	// add attributes
	btnFilter.id = id;
	btnFilter.className += className;
	btnFilter.textContent = text;
	
	// add elements in DOM
	containerBtns.appendChild(btnFilter);
	
	return btnFilter;
}

/* Function to add Buttons to DOM */
const createTagCategoryButtons = () => {
	TAG_CATEGORIES_BUTTONS.forEach(tagCategory => {
		const btnTagCategory = createFilterBtnsDOM(tagCategory, categoriesTagContainerElement);
		btnTagCategory.addEventListener('click', e => {
			[...btnTagCategory.parentElement.children].forEach(sib => sib.classList.remove('active'));
			e.target.classList.toggle('active');
			filterByCategory(e.target.id);
		});
	});
}
const createTagButtons = (tagButtons) => {
	tagButtons.forEach(tagBtn => {
		// get each tag btn
		const btnTag = createFilterBtnsDOM(tagBtn, tagsContainerElement);
		
		// Filter projects by selected tag
		btnTag.addEventListener('click', e => {
			e.target.classList.toggle('active');
			toggleFilterBtns(tagBtn, {isFilteringByTags: true});
		});
	});
}
const createSortButtons = () => {
	SORTING_BUTTONS.forEach(tagBtn => {
		// get each sorting btn
		const btnSorting = createFilterBtnsDOM(tagBtn, sortContainerElement);

		document.getElementById(btnSorting['id']).addEventListener('click', e => {
			e.target.classList.toggle('active');
			
			switch (e.currentTarget.id) {
				case 'btn-sorting-no-fav':
					sortingFilter('boolean', 'isFavorite', {asc: false});
					toggleFilterBtns(tagBtn, {isFilteringByTags: false});
					console.log('❌⭐ Fav');
				break;

				case 'btn-sorting-fav':
					sortingFilter('boolean', 'isFavorite', {asc: true});
					toggleFilterBtns(tagBtn, {isFilteringByTags: false});
					console.log('⭐ Fav');
				break;

				case 'btn-sorting-no-github':
					sortingFilter('boolean', 'hasRepo', {asc: false});
					toggleFilterBtns(tagBtn, {isFilteringByTags: false});
					console.log('❌🐱 Github');
				break;

				case 'btn-sorting-github':
					sortingFilter('boolean', 'hasRepo', {asc: true});
					toggleFilterBtns(tagBtn, {isFilteringByTags: false});
					console.log('🐱 Github');
				break;

				case 'btn-sorting-a-z':
					sortingFilter('string', 'title', {asc: false});
					toggleFilterBtns(tagBtn, {isFilteringByTags: false});
					console.log('🔽 A-Z');
				break;
			
				case 'btn-sorting-z-a':
					sortingFilter('string', 'title', {asc: true});
					toggleFilterBtns(tagBtn, {isFilteringByTags: false});
					console.log('🔼 Z-A');	
				break;

				case 'btn-sorting-oldest':
					sortingFilter('date', 'createdDate', {asc: false});
					toggleFilterBtns(tagBtn, {isFilteringByTags: false});
					console.log('🔙 Oldest');
				break;

				case 'btn-sorting-latest':
					sortingFilter('date', 'createdDate', {asc: true});
					toggleFilterBtns(tagBtn, {isFilteringByTags: false});
					console.log('🔜 Latest');
				break;

				case 'btn-sorting-less-likes':
					sortingFilter('number', 'likes', {asc: false});
					toggleFilterBtns(tagBtn, {isFilteringByTags: false});
					console.log('-❤️ Likes');
				break;

				case 'btn-sorting-more-likes':
					sortingFilter('number', 'likes', {asc: true});
					toggleFilterBtns(tagBtn, {isFilteringByTags: false});
					console.log('+❤️ Likes');
				break;

				case 'btn-sorting-less-comments':
					sortingFilter('number', 'comments', {asc: false});
					toggleFilterBtns(tagBtn, {isFilteringByTags: false});
					console.log('-💬 Comments');
				break;

				case 'btn-sorting-more-comments':
					sortingFilter('number', 'comments', {asc: true});
					toggleFilterBtns(tagBtn, {isFilteringByTags: false});
					console.log('+💬 Comments');
				break;

				case 'btn-sorting-less-views':
					sortingFilter('number', 'views', {asc: false});
					toggleFilterBtns(tagBtn, {isFilteringByTags: false});
					console.log('-👁️ Views');
				break;

				case 'btn-sorting-more-views':
					sortingFilter('number', 'views', {asc: true});
					toggleFilterBtns(tagBtn, {isFilteringByTags: false});
					console.log('+👁️ Views');
				break;
			}
		});
	});
}
const createTechButtons = () => {
	TECHNOLOGIES.forEach(({id, text}) => {
		// create techBtn object
		let objTechBtn = { id: `btn-${id}`, className: 'btn-tag btn-tech', text };
		// add button to the array
		TECHNOLOGY_BUTTONS.push(objTechBtn);
	
		const btnTech = createFilterBtnsDOM(objTechBtn, techContainerElement);

		btnTech.addEventListener('click', () => {
			btnTech.classList.toggle('active');
			filterByTech(objTechBtn);
			toggleFilterBtns(objTechBtn, {isFilteringByTags: false});
		});
	});
}

/* Functions to add projects to the DOM */
const createProjects = ({isBuildingFromBtn} = false) => {
	TECHNOLOGIES.map(({id, text}) => {
		// create containers for each lang and its title
		const sectionCard = document.createElement('section');
		const ctnCard = document.createElement('div');
		const titleProject = document.createElement('h2');
		
		// add attributes for the containers
		sectionCard.id = !isBuildingFromBtn ? `${ID_NAMES.projects}-${id}` : `${ID_NAMES.projectsFilterByTags}-${id}`;
		sectionCard.classList.add(ID_NAMES.projects);
		ctnCard.classList.add(CLASS_NAMES.ctnCards);
		titleProject.textContent = !isBuildingFromBtn ? text : 'Projects Filtered By Tags';

		// insert all the projects in DOM
		sectionCard.append(titleProject, ctnCard);

		// if there is a param send it as a param for addTagsForProjects function
		if (!isBuildingFromBtn) {
			// save every name of the variables projec
			const getNameVariableProject = eval(`${ID_NAMES.projects}${id.charAt(0).toUpperCase()}${id.slice(1)}`);
			
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
	const ctnTechIconCard = document.createElement('div');
	const techIconCard = document.createElement('i');
	const ctnFavIconCard = project['isFavorite'] ? document.createElement('div') : '';
	const favIconCard = project['isFavorite'] ? document.createElement('i') : '';
	const cardGlassEffect = document.createElement('span');
	const ctnImgCard = document.createElement('div');
	const linkCard = document.createElement('a');
	const titleCard = document.createElement('h3');
	const imgCard = document.createElement('img');
	const ctnIconsCard = document.createElement('div');
	const iconsLeftCard = document.createElement('div');
	const iconsRightCard = document.createElement('div');
	const ctnGitCard = project['gitUrl'] ? document.createElement('div') : '';
	const linkGitCard = project['gitUrl'] ? document.createElement('a') : '';
	const gitIconCard = project['gitUrl'] ? document.createElement('i') : '';
	const ctnDateCard = project['createdDate'] ? document.createElement('div') : '';
	const dateIconCard = project['createdDate'] ? document.createElement('span') : '';
	const dateCard = project['createdDate'] ? document.createElement('span') : '';
	const ctnViewsCard = project['views'] ? document.createElement('div') : '';
	const numberViewsCard = project['views'] ? document.createElement('span') : '';
	const viewsIconCard = project['views'] ? document.createElement('span') : '';
	const ctnLikesCard = project['likes'] ? document.createElement('div') : '';
	const numberLikesCard = project['likes'] ? document.createElement('span') : '';
	const likesIconCard = project['likes'] ? document.createElement('span') : '';
	const ctnCommentsCard = project['comments'] ? document.createElement('div') : '';
	const commentsCard = project['comments'] ? document.createElement('span') : '';
	const commentsIconCard = project['comments'] ? document.createElement('span') : '';

	// add attributes and content
	dateIconCard.textContent = '📅';
	dateCard.textContent = `${project['createdDate']}`;
	numberViewsCard.textContent = `${project['views']}`;
	viewsIconCard.textContent = '👁️';
	numberLikesCard.textContent = `${project['likes']}`;
	likesIconCard.textContent = '❤️';
	commentsCard.textContent = `${project['comments']}`;
	commentsIconCard.textContent = '💬';
	linkGitCard.href = project['gitUrl'];
	linkGitCard.target = '_blank';
	linkCard.href = project['link'];
	linkCard.target = '_blank';
	titleCard.textContent = project['title'];
	imgCard.src = project['imgUrl'];
	imgCard.alt = project['title'];
	imgCard.title = project['title'];
	imgCard.setAttribute('loading', 'lazy');

	// add classes
	ctnCard.classList.add(CLASS_NAMES.ctnCard);
	linkCard.classList.add(CLASS_NAMES.linkCard);
	card.classList.add(CLASS_NAMES.card);
	ctnTechIconCard.classList.add(CLASS_NAMES.ctnTech);
	project['isFavorite'] ? ctnFavIconCard.classList.add(CLASS_NAMES.ctnFav) : '';
	project['isFavorite'] ? favIconCard.classList.add(CLASS_NAMES.iconFav) : '';
	project['technology'] !== 'Angular' && project['technology'] !== 'Firebase' && project['technology'] !== 'Ionic' ? techIconCard.classList.add(CLASS_NAMES.iconCodepen) : '';
	project['technology'] === 'Angular' ? techIconCard.classList.add(CLASS_NAMES.iconAngular) : '';
	project['technology'] === 'Firebase' ? techIconCard.classList.add(CLASS_NAMES.iconFirebase) : '';
	project['technology'] === 'Ionic' ? techIconCard.classList.add(CLASS_NAMES.iconIonic) : '';
	project['isFavorite'] ? card.classList.add(CLASS_NAMES.favoriteCard) : '',
	cardGlassEffect.classList.add(CLASS_NAMES.glassEffect);
	ctnIconsCard.classList.add(CLASS_NAMES.ctnIconsCard);
	iconsLeftCard.classList.add(CLASS_NAMES.iconsCardLeft);
	iconsRightCard.classList.add(CLASS_NAMES.iconsCardRight);
	project['createdDate'] ? ctnDateCard.classList.add(CLASS_NAMES.ctnDate) : '';
	project['views'] ? ctnViewsCard.classList.add(CLASS_NAMES.ctnViews) : '';
	project['likes'] ? ctnLikesCard.classList.add(CLASS_NAMES.ctnLikes) : '';
	project['comments'] ? ctnCommentsCard.classList.add(CLASS_NAMES.ctnCommments) : '';
	project['gitUrl'] ? ctnGitCard.classList.add(CLASS_NAMES.ctnGit) : '';
	project['gitUrl'] ? linkGitCard.classList.add(CLASS_NAMES.linkGit) : '';
	project['gitUrl'] ? gitIconCard.classList.add(CLASS_NAMES.iconGit) : '';
	ctnImgCard.classList.add(CLASS_NAMES.ctnImgCard);
	
	// add elements into DOM
	ctnTechIconCard.appendChild(techIconCard);
	project['isFavorite'] ? ctnFavIconCard.appendChild(favIconCard) : '';
	card.append(ctnTechIconCard, ctnFavIconCard, cardGlassEffect);
	project['createdDate'] ? ctnDateCard.append(dateIconCard, dateCard) : '';
	project['views'] ? ctnViewsCard.append(numberViewsCard, viewsIconCard) : '';
	project['likes'] ? ctnLikesCard.append(numberLikesCard, likesIconCard): '';
	project['comments'] ? ctnCommentsCard.append(commentsCard, commentsIconCard) : '';
	project['gitUrl'] ? linkGitCard.appendChild(gitIconCard) : '';
	project['gitUrl'] ? ctnGitCard.appendChild(linkGitCard) : '';
	iconsLeftCard.appendChild(ctnDateCard);
	iconsRightCard.append(ctnViewsCard, ctnLikesCard, ctnCommentsCard, ctnGitCard);
	ctnIconsCard.append(iconsLeftCard, iconsRightCard);
	ctnImgCard.appendChild(imgCard);
	linkCard.append(titleCard, ctnImgCard);
	card.append(ctnIconsCard, linkCard, ctnTags);
	ctnCard.appendChild(card);

	// add container with all the content inside the id got it from the 
	sectionProjectElement.querySelector(`.${CLASS_NAMES.ctnCards}`).appendChild(ctnCard);
}
const addCtnSelectedTagsBtnsToDOM = (selectedFilters) => {
	selectedFiltersElement.innerHTML = '';
	selectedFilters.map(({textFilterBtn}) => {
		const selectedFiltersSpan = document.createElement('span');
		selectedFiltersSpan.textContent = textFilterBtn;
		selectedFiltersElement.appendChild(selectedFiltersSpan);
	});
}

/* Functions to filter by buttons */
const sortTagBtnsByAlphabet = (event) => {
	tagsContainerElement.innerHTML = '';
		
	let isBtnSortTagsClicked = event.target.getAttribute('aria-pressed') === 'true' ? true : false;
	event.target.setAttribute('aria-pressed', !isBtnSortTagsClicked);
	[...event.target.parentElement.children].forEach(sib => sib.classList.remove('active'));
	event.target.classList.toggle('active');
	event.currentTarget.textContent = isBtnSortTagsClicked ? 'A-Z' : 'Z-A';

	const tagButtonsOrderByAlphabet = TAG_BUTTONS.sort((a, b) => isBtnSortTagsClicked ? b['text'].localeCompare(a['text']) : a['text'].localeCompare(b['text']));
	createTagButtons(tagButtonsOrderByAlphabet);
}
const filterByCategory = (category) => {
	TAG_BUTTONS.forEach(tagBtn => {
		tagBtn['category'] !== category ? document.getElementById(tagBtn['id']).classList.remove('enabled')
 		: document.getElementById(tagBtn['id']).classList.add('enabled');
	});
}
const toggleFilterBtns = ({id, text}, {isFilteringByTags} = true) => {
	// if there is a repeated element it will be removed from the array, if not it will be added
	filterBtns = filterBtns.some(btn => btn.idFilterBtn === id)
    ? filterBtns.filter(btn => btn.idFilterBtn !== id)
    : [...filterBtns, { idFilterBtn: id, textFilterBtn: text }];

	// if there is at least one or more tags selected
	if (filterBtns.length) {
		// storage the projects which have the tags
		isFilteringByTags ? filteredByTagsSelected() : '';
		// add tags to the tags container in projects that were filtered
		addCtnSelectedTagsBtnsToDOM(filterBtns);
		
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

/* Functions to sort projects */
const filteredByTagsSelected = () => {
	projectsFilteredBySelectedFilter = [];

	TECHNOLOGIES.map(({id}) => {
		// save every name of the variables projectName
		let getNameVariableProject = eval(`${ID_NAMES.projects}${id.charAt(0).toUpperCase()}${id.slice(1)}`);
		
		// filter every project variable and depending on the projectsFilteredBySelectedFilter values
		let filterElementsByTags = getNameVariableProject.filter(projObj => {
			// substr(4) to remove 4 first letters "btn-" to match with the btn selected filter
			return filterBtns.every( ({idFilterBtn}) => projObj.tags.includes(idFilterBtn.substr(4)) );
		});
		
		filterElementsByTags.map(project => projectsFilteredBySelectedFilter.push(project));
	});
}
const sortingFilter = (type, prop, {asc}) => {
	if ( filterBtns.length ) {
		let filteredProjects = projectsFilteredBySelectedFilter;
		projectsFilteredBySelectedFilter = []
		filterByType(filteredProjects, type, prop, {asc});
	} else {
		TECHNOLOGIES.map(({id}) => {
			// save every name of the variables projectName
			let getNameVariableProject = eval(`${ID_NAMES.projects}${id.charAt(0).toUpperCase()}${id.slice(1)}`);
			filterByType(getNameVariableProject, type, prop, {asc});
		});
	}
}
const filterByType = (arr, type, prop, {asc}) => {
	let sortedProjects;
	switch (type) {
		case 'date':
			sortedProjects = arr.sort((a, b) => asc ?  new Date(b[prop]) - new Date(a[prop]) : new Date(a[prop]) - new Date(b[prop]));
		break;

		case 'boolean':
			sortedProjects = arr.filter(proj => asc ? proj[prop] === true : proj[prop] !== true);
		break;

		case 'number':
			sortedProjects = arr.sort((a, b) => asc ? b[prop] - a[prop] :  a[prop] - b[prop]);
		break;

		case 'string':
			sortedProjects = arr.sort((a, b) => asc ? b[prop].localeCompare(a[prop]) : a[prop].localeCompare(b[prop]));
		break;
	}
	sortedProjects.map(proj => projectsFilteredBySelectedFilter.push(proj));
}
const filterByTech = ({id, text}) => {
	// if there is a repeated element it will be removed from the array, if not it will be added
	filterBtnsTech = filterBtnsTech.some(btn => btn.idFilterBtn === id)
    ? filterBtnsTech.filter(btn => btn.idFilterBtn !== id)
    : [...filterBtnsTech, { idFilterBtn: id, textFilterBtn: text }];

	if (filterBtnsTech.length) {
		projectsFilteredBySelectedFilter = []

		TECHNOLOGIES.map(({id}) => {
			let getNameVariableProject = eval(`${ID_NAMES.projects}${id.charAt(0).toUpperCase()}${id.slice(1)}`);
			let filterElementsByTech = getNameVariableProject.filter(projObj => {
				return filterBtnsTech.some(({textFilterBtn}) => projObj['technology'] === textFilterBtn);
			});
			filterElementsByTech.map(proj => projectsFilteredBySelectedFilter.push(proj));
		});
	}
}

document.addEventListener('DOMContentLoaded', () => {
	// Add categories tag into DOM
	createTagCategoryButtons();

	// Add tag buttons into DOM
	createTagButtons(TAG_BUTTONS);

	// Add sorting buttons into DOM
	createSortButtons();

	// Add tech buttons into DOM
	createTechButtons();
	
	// Add cards into DOM
	createProjects();

	// Sort tag buttons a-z/z-a
	btnTagAlphabet.addEventListener('click', event => sortTagBtnsByAlphabet (event));
});