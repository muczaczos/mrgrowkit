export const ZONES = `
  query Zones {
    Zones(limit: 300) {
      docs {
        title
        selectedCountries
        ranges {
            weigth
            price
        }
        codes {
            code
        }
        codesRanges {
            from
            to
        }
        updatedAt
        createdAt
      }
    }
  }
`

export const ZONE = `
    query Zone($draft: Boolean) {
        Zones(where: { limit: 1, draft: $draft) {
            docs {
                id
                title
                updatedAt
                createdAt
                weight
            }
        }
    }
`
