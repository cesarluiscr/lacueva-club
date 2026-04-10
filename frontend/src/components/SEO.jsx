import { useEffect } from 'react'

export default function SEO() {
  useEffect(() => {
    // JSON-LD Structured Data for LocalBusiness
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'SportsClub',
      'name': 'Club Campestre La Cueva',
      'description': '55 años de excelencia en instalaciones deportivas y de esparcimiento en Alajuela, Costa Rica',
      'url': 'https://cesarluiscr.github.io/lacueva-club/',
      'telephone': '+50624337171',
      'email': 'info@lacuevasa.com',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Alajuela',
        'addressLocality': 'Alajuela',
        'addressRegion': 'Alajuela',
        'postalCode': '4050',
        'addressCountry': 'CR'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': '10.01622',
        'longitude': '-84.21447'
      },
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          'opens': '06:00',
          'closes': '21:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': 'Saturday',
          'opens': '08:00',
          'closes': '18:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': 'Sunday',
          'opens': '08:00',
          'closes': '17:00'
        }
      ],
      'image': [
        'https://cesarluiscr.github.io/lacueva-club/images/logo-lacueva.jpg',
        'https://cesarluiscr.github.io/lacueva-club/images/piscina-olimpica.jpg'
      ],
      'priceRange': '₡60 - ₡200',
      'amenityFeature': [
        {
          '@type': 'LocationFeatureSpecification',
          'name': 'Piscina Olímpica',
          'value': true
        },
        {
          '@type': 'LocationFeatureSpecification',
          'name': 'Canchas de Fútbol',
          'value': true
        },
        {
          '@type': 'LocationFeatureSpecification',
          'name': 'Canchas de Tenis',
          'value': true
        },
        {
          '@type': 'LocationFeatureSpecification',
          'name': 'Gimnasio',
          'value': true
        },
        {
          '@type': 'LocationFeatureSpecification',
          'name': 'Restaurante',
          'value': true
        },
        {
          '@type': 'LocationFeatureSpecification',
          'name': 'Salones para Eventos',
          'value': true
        }
      ],
      'sameAs': [
        'https://github.com/cesarluiscr/lacueva-club'
      ]
    }

    // Create script tag for JSON-LD
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(structuredData)
    document.head.appendChild(script)

    return () => {
      // Cleanup: remove script when component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return null
}
