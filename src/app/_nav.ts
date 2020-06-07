import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',

  },
  // {
  //   title: true,
  //   name: 'Theme'
  // },
  {
    name: 'Administrateur',
    url: '/administrateur',
    icon: 'icon-drop',
    children:[
     {
       name:'Utilisateur',
       url: '/administrateur/utilisateur',
       icon: 'icon-puzzle'
     },
     {
       name:'Send Notification',
       url:'/administrateur/Send Notification',
       icon: 'icon-puzzle'
     },
     {
       name:'FB Setting',
       url:'/administrateur/FB Setting',
       icon: 'icon-puzzle'
     }
    ]
  },

  {
    name: 'Visiteur',
    url: '/Visiteur',
    icon: 'icon-puzzle',
    // children: [
    //   {
    //     name: 'Cards',
    //     url: '/base/cards',
    //     icon: 'icon-puzzle'
    //   },
    //   {
    //     name: 'Carousels',
    //     url: '/base/carousels',
    //     icon: 'icon-puzzle'
    //   },

    //   {
    //     name: 'Forms',
    //     url: '/base/forms',
    //     icon: 'icon-puzzle'
    //   },

  
 
    //   {
    //     name: 'Tables',
    //     url: '/base/tables',
    //     icon: 'icon-puzzle'
    //   },


    // ]
  },
  {
    name: 'Commentaire',
    url: '/Commentaire',
    icon: 'icon-cursor',
    // children: [
    //   {
    //     name: 'Buttons',
    //     url: '/buttons/buttons',
    //     icon: 'icon-cursor'
    //   },
    //   {
    //     name: 'Dropdowns',
    //     url: '/buttons/dropdowns',
    //     icon: 'icon-cursor'
    //   },
    //   {
    //     name: 'Brand Buttons',
    //     url: '/buttons/brand-buttons',
    //     icon: 'icon-cursor'
    //   }
    // ]
  },
  {
    name: 'Compte',
    url: '/Compte',
    icon: 'icon-calculator',
    
  },
  {
    name: 'Charts',
    url: '/charts',
    icon: 'icon-pie-chart',
    children:[
      {
        name: 'Pages',
        url : 'charts/pages',
        icon: 'icon-pie-chart'
      },
      {
        name :'Poste',
        url: 'charts/poste',
        icon:'icon-pie-chart'
      }
    ]
  },
  {
    name: 'PostePages',
    url: '/postePages',
    icon: 'icon-star',
    // children: [
    //   {
    //     name: 'Message',
    //     url: '/postePages/message',
    //     icon: 'icon-star',
    //     badge: {
    //       variant: 'success',
    //       text: 'NEW'
    //     }
    //   },
    //   {
    //     name: 'Image',
    //     url: '/postePages/image',
    //     icon: 'icon-star'
    //   },
    //   {
    //     name: 'Vidéos',
    //     url: '/postePages/vidéos',
    //     icon: 'icon-star',

    //   },
    //   {
    //     name: 'Simple Line Icons',
    //     url: '/postePages/simple-line-icons',
    //     icon: 'icon-star'
    //   }
    // ]
  },
  {
    name: 'Notifications',
    url: '/notifications',
    icon: 'icon-bell',
    children: [
      {
        name: 'Alerts',
        url: '/notifications/alerts',
        icon: 'icon-bell'
      },
      {
        name: 'Badges',
        url: '/notifications/badges',
        icon: 'icon-bell'
      },
      {
        name: 'Modals',
        url: '/notifications/modals',
        icon: 'icon-bell'
      }
    ]
  },
  {
    name: 'Widgets',
    url: '/widgets',
    icon: 'icon-calculator',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    divider: true
  },
  {
    name: 'Pages',
    url: '/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'Login',
        url: '/login',
        icon: 'icon-star'
      },
      {
        name: 'Register',
        url: '/register',
        icon: 'icon-star'
      },
      {
        name: 'Error 404',
        url: '/404',
        icon: 'icon-star'
      },
      {
        name: 'Error 500',
        url: '/500',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'BotMessanger',
    url: '/botMessanger',
    icon: 'icon-drop',
    children:[
     {
       name:'',
       url: '/messanger',
       icon:''
     }
    ]
  },
 
 
];
