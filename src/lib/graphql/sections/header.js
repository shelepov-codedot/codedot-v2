export const headerQuery = `... on Header {
    position
    component
    sys {
      id
    }
    logo {
      url
    }
    socialsCollection (limit:7){
      items{
        link
        socialIcon{
          url
        }
      }
    }
    mobileMenuLinksCollection(limit:5){
      items{
        title
        link
      }
    }
    navigationCollection(limit: 7) {
      items {
        title
        socialIcon{
          title
        }
        link
        noFollow
        subItemsCollection(limit: 9) {
          items {
            title
            link
            noFollow
          }
        }
      }
    }
  }
  `
  