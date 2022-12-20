const SelectPageComposition = () => import('pages/SelectPageComposition.vue');
const SelectPageOptions = () => import('pages/SelectPageOptions.vue');

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/select_composition', component: SelectPageComposition },
      { path: '/select_options', component: SelectPageOptions },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
