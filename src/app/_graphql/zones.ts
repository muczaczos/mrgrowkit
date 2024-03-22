export const ZONES = `
  query Zones {
    Zones(limit: 300) {
      docs {
        id
        title
        selectedCountries
        ranges {
            weight
            price
        }
        codes {
            code
        }
        codesRanges {
            from
            to
        }
        slug
      }
    }
}`
