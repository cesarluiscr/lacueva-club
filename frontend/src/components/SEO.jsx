import { useEffect } from 'react'

export default function SEO() {
  useEffect(() => {
    // Meta tags dinámicos
    const metaTags = [
      { name: 'description', content: '55 años de excelencia en instalaciones deportivas. Piscinas, canchas, gimnasio, restaurante. Club Campestre La Cueva en Alajuela, Costa Rica.' },
      { name: 'keywords', content: 'club campestre, piscina, tenis, fútbol, gimnasio, membresía, Alajuela, Costa Rica' },
      { name: 'author', content: 'Club Campestre La Cueva' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { property: 'og:title', content: 'Club Campestre La Cueva - 55 años de excelencia' },
      { property: 'og:description', content: 'Disfruta de piscinas, canchas deportivas, gimnasio y más. Membresías desde ₡60/mes en Alajuela.' },
      { property: 'og:url', content: 'https://cesarluiscr.github.io/lacueva-club/' },
      { property: 'og:image', content: 'https://cesarluiscr.github.io/lacueva-club/images/piscina-olimpica.jpg' },
      { property: 'og:type', content: 'business.business' },
      { property: 'og:locale', content: 'es_CR' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Club Campestre La Cueva' },
      { name: 'twitter:description', content: 'Instalaciones deportivas de clase mundial en Alajuela' },
      { name: 'twitter:image', content: 'https://cesarluiscr.github.io/lacueva-club/images/piscina-olimpica.jpg' },
      { name: 'theme-color', content: '#FF6B35' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }
    ]

    metaTags.forEach(tag => {
      let element = document.querySelector(`meta[${tag.name ? 'name' : 'property'}="${tag.name || tag.property}"]`)
      if (!element) {
        element = document.createElement('meta')
        if (tag.name) element.setAttribute('name', tag.name)
        if (tag.property) element.setAttribute('property', tag.property)
        document.head.appendChild(element)
      }
      element.setAttribute('content', tag.content)
    })

    // JSON-LD Structured Data - LocalBusiness
    const localBusinessSchema = {
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
        { '@type': 'LocationFeatureSpecification', 'name': 'Piscina Olímpica', 'value': true },
        { '@type': 'LocationFeatureSpecification', 'name': 'Canchas de Fútbol', 'value': true },
        { '@type': 'LocationFeatureSpecification', 'name': 'Canchas de Tenis', 'value': true },
        { '@type': 'LocationFeatureSpecification', 'name': 'Gimnasio', 'value': true },
        { '@type': 'LocationFeatureSpecification', 'name': 'Restaurante', 'value': true },
        { '@type': 'LocationFeatureSpecification', 'name': 'Salones para Eventos', 'value': true }
      ],
      'sameAs': [
        'https://github.com/cesarluiscr/lacueva-club'
      ]
    }

    // JSON-LD - Organization
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'Club Campestre La Cueva',
      'url': 'https://cesarluiscr.github.io/lacueva-club/',
      'logo': 'https://cesarluiscr.github.io/lacueva-club/images/logo-lacueva.jpg',
      'sameAs': [
        'https://facebook.com/lacuevaclub',
        'https://instagram.com/lacuevaclub',
        'https://github.com/cesarluiscr/lacueva-club'
      ],
      'contact': {
        '@type': 'ContactPoint',
        'contactType': 'Customer Service',
        'telephone': '+50624337171',
        'email': 'info@lacuevasa.com',
        'areaServed': 'CR',
        'availableLanguage': ['es', 'en']
      }
    }

    // Add scripts to head
    const scripts = [
      { type: 'application/ld+json', content: JSON.stringify(localBusinessSchema) },
      { type: 'application/ld+json', content: JSON.stringify(organizationSchema) }
    ]

    const scriptElements = scripts.map(script => {
      const el = document.createElement('script')
      el.type = script.type
      el.textContent = script.content
      document.head.appendChild(el)
      return el
    })

    return () => {
      scriptElements.forEach(el => {
        if (el.parentNode) el.parentNode.removeChild(el)
      })
    }
  }, [])

  return null
}
