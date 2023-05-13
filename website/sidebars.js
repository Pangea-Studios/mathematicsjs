module.exports = {
    docs: [
        {
            type: 'doc',
            id: 'guide/home/getting-started',
            label: 'Guide',
        },
        {
            type: 'doc',
            id: 'reference/home',
            label: 'Reference',
		},
		
    ],
    guide: [
        {
            type: 'doc',
            id: 'intro',
            label: 'Docs',
		},
		{
			type: 'category',
			label: 'Home',
			link: {
				type: 'generated-index',
				title: 'Home',
				description:
					"The setup and first lines of code",
				keywords: ['guides'],
			},
			items: [
				{
					type: 'autogenerated',
					dirName: 'guide/home',
				}
			]
		},
    ],
    reference: [
        {
            type: 'doc',
            id: 'intro',
            label: 'Docs',
        },
        {
            type: 'autogenerated',
            dirName: 'reference/docs',
        },
        {
      	    type: 'doc',
      	    id: 'reference/home',
            label: 'Home',
        }
    ],
};
