export default {
  path: '/cinema',
  component: ()=> import('@/views/Cinema'),
  children:[
    {
      path:'citySwitch',
      component: ()=>import('@/components/CitySwitch')
    },
    {
      path:'brandSwitch',
      component: ()=>import('@/components/BrandSwitch')
    },
    {
      path:'featureSwitch',
      component: ()=>import('@/components/FeatureSwitch')
    }
  ]
}
