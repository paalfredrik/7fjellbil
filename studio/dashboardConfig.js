export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5edcc419eb4b84ef477c709b',
                  title: 'Sanity Studio',
                  name: '7fjellbil-studio',
                  apiId: '53589091-d06c-450c-966e-2fa7e49c8c91'
                },
                {
                  buildHookId: '5edcc4191311f81d44d10bbe',
                  title: 'Blog Website',
                  name: '7fjellbil',
                  apiId: '41e0a357-68ae-4d3f-9788-cf923c8e4002'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/paalfredrik/7fjellbil',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://7fjellbil.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
