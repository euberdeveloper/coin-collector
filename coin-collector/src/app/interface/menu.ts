import { Interface } from './interface.interface';

export const menu: Interface = {
    toolbar: true,
    color: 'primary',
    title: 'MY COIN COLLECTOR',
    menu: {
        iconsColor: 'accent',
        items: [
            {
              name: "Parametri",
              icon: "settings",
              link: "/parametri/conservazioni",
              menu: {
                  indentation: 8,
                  iconsScale: 0.9,
                  divider: true,
                  items: [
                    {
                      name: "Conservazione",
                      icon: "edit",
                      link: "/parametri/conservazioni"
                    },
                    {
                      name: "Contorno",
                      icon: "edit",
                      link: "/parametri/contorni"
                    },
                    {
                      name: "Denominazione",
                      icon: "edit",
                      link: "/parametri/denominazioni"
                    },
                    {
                      name: "Materiale",
                      icon: "edit",
                      link: "/parametri/materiali"
                    },
                    {
                      name: "Rarità",
                      icon: "edit",
                      link: "/parametri/rarita"
                    },
                    {
                      name: "Segno zecca",
                      icon: "edit",
                      link: "/parametri/segniZecche"
                    },
                    {
                      name: "Sovranità",
                      icon: "edit",
                      link: "/parametri/sovranita"
                    },
                    {
                      name: "Sovrano",
                      icon: "edit",
                      link: "/parametri/sovrani"
                    },
                    {
                      name: "Stato",
                      icon: "edit",
                      link: "/parametri/stati"
                    },
                    {
                      name: "Valore",
                      icon: "edit",
                      link: "/parametri/nominali"
                    },
                    {
                      name: "Zecca",
                      icon: "edit",
                      link: "/parametri/zecche"
                    }
                  ]
              } 
            },
            { 
              name: 'Unità',
              icon: 'straighten',
              link: '/units/pesi',
              menu: {
                indentation: 8,
                iconsScale: 0.9,
                divider: true,
                items: [
                  {
                    name: "Pesi",
                    icon: "brush",
                    link: "/units/pesi"
                  },
                  {
                    name: "Lunghezze",
                    icon: "brush",
                    link: "/units/lunghezze"
                  }
                ]
              }
            },
            {
              name: 'Risorse',
              icon: 'save',
              link: '/resources/images',
              menu: {
                indentation: 8,
                iconsScale: 0.9,
                divider: true,
                items: [
                  {
                    name: 'Immagini',
                    icon: 'photo',
                    link: '/resources/images'
                  },
                  {
                    name: 'Fatture',
                    icon: 'insert_drive_file',
                    link: '/resources/invoices'
                  },
                ]
              }
            }
          ]
    }
  
}