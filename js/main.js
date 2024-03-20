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
		link: 'YzyNPgm',
		imgUrl: 'YzyNPgm-512.webp?version=1587651889',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect Hover Card',
		tags: ['card', 'hover']
	},
	{
		link: 'VozPeY',
		imgUrl: 'VozPeY-512.webp?version=1564754355',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Cards',
		tags: ['card']
	},
	{
		link: 'BaQdvJd',
		imgUrl: 'BaQdvJd-512.webp?version=1614042368',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Menu',
		tags: ['menu']
	},
	{
		link: 'oNYwEKa',
		imgUrl: 'oNYwEKa-512.webp?version=1700560512',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Cards',
		tags: ['card']
	},
	{
		link: 'zYYNMgq',
		imgUrl: 'zYYNMgq-512.webp?version=1571847691',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Layout responsive',
		tags: ['template']
	},
	{
		link: 'XWWpjaR',
		imgUrl: 'XWWpjaR-512.webp?version=1599856924',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Button Gradient',
		tags: ['button']
	},
	{
		link: 'qBBRNWd',
		imgUrl: 'qBBRNWd-512.webp?version=1571846570',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Video Cube',
		tags: []
	},
	{
		link: 'KKKaMGj',
		imgUrl: 'KKKaMGj-512.webp?version=1571693744',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect Change Background On Hover',
		tags: ['animation', 'hover']
	},
	{
		link: 'OJJWNzb',
		imgUrl: 'OJJWNzb-512.webp?version=1571848023',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect Water Wave Button',
		tags: ['button', 'animation']
	},
	{
		link: 'abbzxKJ',
		imgUrl: 'abbzxKJ-512.webp?version=1570544585',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect Loading Svg',
		tags: ['animation']
	},
	{
		link: 'XWWJQOp',
		imgUrl: 'XWWJQOp-512.webp?version=1570545923',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect Liquid Loader',
		tags: ['animation']
	},
	{
		link: 'gOYdOXQ',
		imgUrl: 'gOYdOXQ-512.webp?version=1568651251',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect loading text',
		tags: ['animation']
	},
	{
		link: 'wvwEwEX',
		imgUrl: 'wvwEwEX-512.webp?version=1568651103',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect water wave',
		tags: ['animation']
	},
	{
		link: 'VwZypBx',
		imgUrl: 'VwZypBx-512.webp?version=1568650831',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect List Item',
		tags: ['animation']
	},
	{
		link: 'rNBdBLW',
		imgUrl: 'rNBdBLW-512.webp?version=1568650810',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Quick loading bar',
		tags: []
	},
	{
		link: 'RwbQXRV',
		imgUrl: 'RwbQXRV-512.webp?version=1568650821',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Indian flag animation',
		tags: ['animation']
	},
	{
		link: 'GRKyrZN',
		imgUrl: 'GRKyrZN-512.webp?version=1568650841',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Wrap text around circle',
		tags: []
	},
	{
		link: 'qBWpRjE',
		imgUrl: 'qBWpRjE-512.webp?version=1568650838',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect Card Direction Aware',
		tags: ['card', 'animation']
	},
	{
		link: 'eYOyBqL',
		imgUrl: 'eYOyBqL-512.webp?version=1568650845',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect ghost text',
		tags: ['animation']
	},
	{
		link: 'VwZymxJ',
		imgUrl: 'VwZymxJ-512.webp?version=1568650856',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect Text Glowing',
		tags: ['animation']
	},
	{
		link: 'eYOGzQZ',
		imgUrl: 'eYOGzQZ-512.webp?version=1568650868',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Tooltips',
		tags: []
	},
	{
		link: 'xvXOpN',
		imgUrl: 'xvXOpN-512.webp?version=1568650893',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect Isometric Glass',
		tags: ['animation']
	},
	{
		link: 'rXGama',
		imgUrl: 'rXGama-512.webp?version=1564779536',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect 3d Rotation',
		tags: ['animation']
	},
	{
		link: 'eqEqaz',
		imgUrl: 'eqEqaz-512.webp?version=1564761136',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect split text',
		tags: ['animation']
	},
	{
		link: 'zgovXj',
		imgUrl: 'zgovXj-512.webp?version=1564763067',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect Rainy Text',
		tags: ['animation']
	},
	{
		link: 'mNOyWV',
		imgUrl: 'mNOyWV-512.webp?version=1564763085',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect magnifying Glass',
		tags: ['animation']
	},
	{
		link: 'xvRxVP',
		imgUrl: 'xvRxVP-512.webp?version=1564159586',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Neon Button Ligth',
		tags: ['button']
	},
	{
		link: 'WVoeLB',
		imgUrl: 'WVoeLB-512.webp?version=1564171237',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect Colour Type Text',
		tags: ['animation']
	},
	{
		link: 'MNjjrz',
		imgUrl: 'MNjjrz-512.webp?version=1564157241',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect Parallax On Mouse move',
		tags: ['parallax', 'animation']
	},
	{
		link: 'OKRVpB',
		imgUrl: 'OKRVpB-512.webp?version=1564077299',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Effect Info Contact Reveal',
		tags: ['animation']
	},
	{
		link: 'gVwrMz',
		imgUrl: 'gVwrMz-512.webp?version=1564088351',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Menu Item Hover Images',
		tags: ['hover', 'menu']
	},
	{
		link: 'oKzNdV',
		imgUrl: 'oKzNdV-512.webp?version=1564074078',
		date: '01-01-2022',
		technology: 'Css',
		isFavorite: false,
		views: 500,
		title: 'Slideshow 3d Rotation',
		tags: ['slider']
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
		link: 'EpqzBY',
		imgUrl: 'EpqzBY-320.webp?version=1534702495',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 500,
		title: 'Menu Dropdown Responsive',
		tags: ['menu']
	},
	{
		link: 'vjVRKR',
		imgUrl: 'vjVRKR-1280.webp?version=1533820548',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 1000,
		title: 'Menu',
		tags: ['menu']
	},
	{
		link: 'rvYrzO',
		imgUrl: 'rvYrzO-512.webp?version=1536856170',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 2000,
		title: 'Calculator',
		tags: []
	},
	{
		link: 'ZEByLMj',
		imgUrl: 'ZEByLMj-512.webp?version=1613671119',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 3000,
		title: 'Cards',
		tags: ['card']
	},
	{
		link: 'wvoepar',
		imgUrl: 'wvoepar-512.webp?version=1613673694',
		date: '01-01-2019',
		technology: 'Javascript',
		isFavorite: true,
		views: 100,
		title: 'Slither Io',
		tags: []
	},
	{
		link: 'GRKymgL',
		imgUrl: 'GRKymgL-512.webp?version=1568650825',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 50,
		title: 'Odometer Number Counter',
		tags: []
	},
	{
		link: 'mddobvR',
		imgUrl: 'mddobvR-512.webp?version=1574252213',
		date: '01-01-2020',
		technology: 'Javascript',
		isFavorite: true,
		views: 5,
		title: 'Effect Follow Mouse Cursor',
		tags: []
	},
	{
		link: 'eYmrmgM',
		imgUrl: 'eYmrmgM-512.webp?version=1578661401',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 3,
		title: 'Effect Slide Image Comparision',
		tags: ['slider']
	},
	{
		link: 'JjGYKJW',
		imgUrl: 'JjGYKJW-512.webp?version=1591623049',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: true,
		views: 20,
		title: 'Effect floating button',
		tags: ['button']
	},
	{
		link: 'QWwrPoM',
		imgUrl: 'QWwrPoM-512.webp?version=1578951478',
		date: '01-01-2018',
		technology: 'Javascript',
		isFavorite: false,
		views: 10,
		title: 'Youtube',
		tags: ['template']
	},
	{
		link: 'PowePzx',
		imgUrl: 'PowePzx-512.webp?version=1578669848',
		date: '01-01-2023',
		technology: 'Javascript',
		isFavorite: false,
		views: 10,
		title: 'Digital clock',
		tags: []
	},
	{
		link: 'WNbJvbz',
		imgUrl: 'WNbJvbz-512.webp?version=1578663795',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 10,
		title: 'Effect Parallax Mousemove',
		tags: ['parallax']
	},
	{
		link: 'PXryxY',
		imgUrl: 'PXryxY-512.webp?version=1547832730',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 10,
		title: 'Template Bootstrap',
		tags: ['template']
	},
	{
		link: 'aPMEYq',
		imgUrl: 'aPMEYq-512.webp?version=1547590609',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: true,
		views: 20,
		title: 'Jackpot Game',
		tags: ['games']
	},
	{
		link: 'dwaRNz',
		imgUrl: 'dwaRNz-512.webp?version=1547505908',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: true,
		views: 500,
		title: 'Archery Game',
		tags: []
	},
	{
		link: 'yGRbzL',
		imgUrl: 'yGRbzL-320.webp?version=1547170234',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: true,
		views: 50,
		title: 'Simon Game',
		tags: ['games']
	},
	{
		link: 'QzmvLp',
		imgUrl: 'QzmvLp-320.webp?version=1546726072',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 20,
		title: 'Bubble Floating',
		tags: ['games']
	},
	{
		link: 'pozdLgO',
		imgUrl: 'pozdLgO-512.webp?version=1568650859',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 21,
		title: 'Menu Amazon',
		tags: ['menu']
	},
	{
		link: 'bGboWJL',
		imgUrl: 'bGboWJL-512.webp?version=1568650863',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 31,
		title: 'Tooltip Js',
		tags: []
	},
	{
		link: 'PEbbOw',
		imgUrl: 'PEbbOw-512.webp?version=1710089549',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 0,
		title: 'Regresive Count Js',
		tags: []
	},
	{
		link: 'EoNNwL',
		imgUrl: 'EoNNwL-512.webp?version=1536858968',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 20,
		title: 'Modal Js',
		tags: ['modal']
	},
	{
		link: 'EoNNwL',
		imgUrl: 'EoNNwL-512.webp?version=1536858968',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 400,
		title: 'Modal Youtube Js Responsive',
		tags: ['modal']
	},
	{
		link: 'Oovgjz',
		imgUrl: 'Oovgjz-320.webp?version=1536852567',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 300,
		title: 'Modals Flexbox Js Responsive',
		tags: ['modal']
	},
	{
		link: 'yxpodp',
		imgUrl: 'yxpodp-320.webp?version=1536853553',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 350,
		title: 'Masonry Layout Js',
		tags: ['template']
	},
	{
		link: 'VGyvzy',
		imgUrl: 'VGyvzy-320.webp?version=1536447155',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 250,
		title: 'Tester Responsive Js',
		tags: []
	},
	{
		link: 'NQGLOK',
		imgUrl: 'NQGLOK-512.webp?version=1563811212',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 500,
		title: 'Water Fill On Scroll',
		tags: ['scroll']
	},
	{
		link: 'roeNbr',
		imgUrl: 'roeNbr-320.webp?version=1545085245',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 10,
		title: 'Calculator',
		tags: []
	},
	{
		link: 'EGvxer',
		imgUrl: 'EGvxer-320.webp?version=1545847440',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 500,
		title: 'Masonry Grid Layout Responsive',
		tags: ['template', 'grid']
	},
	{
		link: 'oNNBBdZ',
		imgUrl: 'oNNBBdZ-512.webp?version=1587482167',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 500,
		title: 'Analog Clock',
		tags: []
	},
	{
		link: 'rXLVML',
		imgUrl: 'rXLVML-512.webp?version=1563998440',
		date: '01-01-2022',
		technology: 'Javascript',
		isFavorite: false,
		views: 500,
		title: 'Effect flip background',
		tags: []
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
		id: 'hover',
		text: 'Hover'
	},
	{
		className: 'btn-tag',
		id: 'button',
		text: 'Button'
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