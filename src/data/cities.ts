import { z } from 'astro:content';

export interface City {
  name: string;
  province: string;
  population: number;
  postalCode: string;
  subMunicipalities?: string[];
  description?: string;
}

function generateDescription(city: Partial<City>): string {
  return `Vakkundige timmerdiensten in ${city.name}. Wij zijn uw specialist voor maatwerk, renovatie en restauratie in ${city.province}${city.subMunicipalities && city.subMunicipalities.length > 0 ? ` en alle deelgemeenten` : ''}.`;
}

// Complete list of all Flemish cities and municipalities
export const cities: City[] = [
  {
    name: "Aalst",
    province: "Oost-Vlaanderen",
    population: 90931,
    postalCode: "9300",
    subMunicipalities: [
      "Aalst", "Gijzegem", "Hofstade", "Baardegem", "Herdersem",
      "Meldert", "Moorsel", "Erembodegem", "Nieuwerkerken"
    ]
  },
  {
    name: "Aalter",
    province: "Oost-Vlaanderen",
    population: 29731,
    postalCode: "9880",
    subMunicipalities: [
      "Aalter", "Bellem", "Knesselare", "Lotenhulle", "Poeke", "Ursel"
    ]
  },
  {
    name: "Aarschot",
    province: "Vlaams-Brabant",
    population: 31128,
    postalCode: "3200",
    subMunicipalities: [
      "Aarschot", "Gelrode", "Langdorp", "Rillaar"
    ]
  },
  {
    name: "Aartselaar",
    province: "Antwerpen",
    population: 14885,
    postalCode: "2630",
    subMunicipalities: ["Aartselaar"]
  },
  {
    name: "Antwerpen",
    province: "Antwerpen",
    population: 542417,
    postalCode: "2000",
    subMunicipalities: [
      "Antwerpen", "Berendrecht-Zandvliet-Lillo", "Deurne", "Borgerhout",
      "Merksem", "Ekeren", "Berchem", "Hoboken", "Wilrijk"
    ]
  },
  {
    name: "Brugge",
    province: "West-Vlaanderen",
    population: 119748,
    postalCode: "8000",
    subMunicipalities: [
      "Brugge", "Koolkerke", "Sint-Andries", "Sint-Michiels",
      "Assebroek", "Sint-Kruis", "Dudzele", "Lissewege"
    ]
  },
  {
    name: "Gent",
    province: "Oost-Vlaanderen",
    population: 269191,
    postalCode: "9000",
    subMunicipalities: [
      "Gent", "Mariakerke", "Drongen", "Wondelgem", "Sint-Amandsberg",
      "Oostakker", "Desteldonk", "Mendonk", "Sint-Kruis-Winkel",
      "Gentbrugge", "Ledeberg", "Afsnee", "Sint-Denijs-Westrem", "Zwijnaarde"
    ]
  },
  {
    name: "Hasselt",
    province: "Limburg",
    population: 80786,
    postalCode: "3500",
    subMunicipalities: [
      "Hasselt", "Sint-Lambrechts-Herk", "Wimmertingen", "Kermt",
      "Spalbeek", "Kuringen", "Stokrooie", "Stevoort"
    ]
  },
  {
    name: "Kortrijk",
    province: "West-Vlaanderen",
    population: 79980,
    postalCode: "8500",
    subMunicipalities: [
      "Kortrijk", "Bissegem", "Heule", "Bellegem", "Kooigem",
      "Marke", "Rollegem", "Aalbeke"
    ]
  },
  {
    name: "Leuven",
    province: "Vlaams-Brabant",
    population: 103868,
    postalCode: "3000",
    subMunicipalities: [
      "Leuven", "Heverlee", "Kessel-Lo", "Wilsele", "Wijgmaal"
    ]
  },
  {
    name: "Mechelen",
    province: "Antwerpen",
    population: 89262,
    postalCode: "2800",
    subMunicipalities: [
      "Mechelen", "Walem", "Heffen", "Hombeek", "Leest", "Muizen"
    ]
  },
  {
    name: "Oostende",
    province: "West-Vlaanderen",
    population: 72504,
    postalCode: "8400",
    subMunicipalities: [
      "Oostende", "Stene", "Zandvoorde"
    ]
  },
  {
    name: "Roeselare",
    province: "West-Vlaanderen",
    population: 66214,
    postalCode: "8800",
    subMunicipalities: [
      "Roeselare", "Beveren", "Oekene", "Rumbeke"
    ]
  },
  {
    name: "Sint-Niklaas",
    province: "Oost-Vlaanderen",
    population: 81803,
    postalCode: "9100",
    subMunicipalities: [
      "Sint-Niklaas", "Nieuwkerken-Waas", "Belsele", "Sinaai"
    ]
  },
  {
    name: "Turnhout",
    province: "Antwerpen",
    population: 47222,
    postalCode: "2300",
    subMunicipalities: ["Turnhout"]
  }
  // ... Add more cities here
];

// Add descriptions to all cities
cities.forEach(city => {
  if (!city.description) {
    city.description = generateDescription(city);
  }
});

export function getCityBySlug(slug: string): City | undefined {
  return cities.find(city => 
    city.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug
  );
}

export function getAllCities(): City[] {
  return cities.sort((a, b) => a.name.localeCompare(b.name));
}

export function getCitiesByProvince(province: string): City[] {
  return cities
    .filter(city => city.province === province)
    .sort((a, b) => a.name.localeCompare(b.name));
}