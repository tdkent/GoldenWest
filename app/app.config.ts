export default defineAppConfig({
	ui: {
		primary: 'blue',
		accordion: {
			container:
				'border border-blue-100 bg-blue-50 my-4 rounded-none text-blue-900 dark:bg-blue-900 dark:text-blue-100 dark:border-blue-600 min-w-0',
			item: {
				color: 'text-blue-900 dark:text-blue-100 lg:text-base',
				padding: 'py-8',
			},
			default: {
				class: 'p-2 text-xs md:p-4 md:text-lg',
				openIcon: 'i-heroicons-chevron-left-20-solid',
				closeIcon: 'i-heroicons-chevron-down-20-solid',
			},
		},
		button: {
			color: {
				white: {
					ghost:
						'hover:bg-transparent dark:hover:bg-transparent focus-visible:ring-blue-500',
				},
				black: {
					link: 'hover:no-underline focus-visible:ring-blue-500',
				},
				gray: {
					ghost:
						'text-gray-900 hover:text-gray-700 hover:bg-gray-100 focus-visible:ring-blue-500',
				},
			},
		},
		table: {
			th: {
				base: 'text-left bg-blue-50 dark:bg-blue-900',
				color: 'text-blue-900 dark:text-blue-100',
				font: 'uppercase text-xs md:text-sm',
			},
			td: {
				base: 'whitespace-normal text-left',
				color: 'text-gray-800 dark:text-gray-100',
				font: 'text-xs md:text-sm',
			},
		},
		divider: {
			wrapper: {
				base: 'py-8 flex items-center align-center text-center md:py-12',
			},
			container: {
				base: 'font-header',
			},
			border: {
				base: 'flex border-blue-100 dark:border-blue-900',
			},
			label: 'text-xl lg:text-2xl text-blue-900 dark:text-blue-100',
		},
		formGroup: {
			default: {
				size: 'xl',
			},
			error: 'absolute ml-0.5 mt-1 h-4 text-xs lg:text-sm',
		},
		input: {
			default: {
				color: 'white',
				size: 'xl',
			},
			color: {
				white: {
					outline: 'focus:ring-blue-500',
				},
			},
		},
		radioGroup: {
			default: {
				color: 'blue',
			},
			legend: 'text-base',
		},
		radio: {
			label: 'text-base',
			wrapper: 'py-0.5',
		},
		modal: {
			overlay: {
				background: 'bg-black/50',
			},
		},
		card: {
			header: {
				background: 'bg-gray-50 dark:bg-gray-900 rounded-t-lg',
			},
			footer: {
				background: 'bg-gray-50 dark:bg-gray-900 rounded-b-lg',
			},
		},
		slideover: {
			background: 'bg-gray-50',
		},
	},
});
