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
        slug
      }
    }
  }
`

export const ZONE = `
    query Zone($slug: String, $draft: Boolean) {
        Zones(where: { slug: { equals: $slug }}, limit: 1, draft: $draft) {
            docs {
                id
                title
                slug
                updatedAt
                createdAt
                weight
            }
        }
    }
`
