export type Language = 'en' | 'yo';

export type TranslationKey = keyof typeof translations.en;

export const translations = {
  en: {
    'site.name': 'Ile-Ife Platform',
    'site.tagline': 'The Source of Yoruba Civilization',
    'site.description':
      'The official digital home of Ile-Ife — the ancestral cradle of the Yoruba people. Explore the palace of the Ooni, community news, cultural heritage, development projects, and the marketplace.',

    'nav.home': 'Home',
    'nav.palace': 'The Palace',
    'nav.community': 'Community',
    'nav.chiefs': 'Chiefs',
    'nav.heritage': 'Heritage',
    'nav.contact': 'Contact',

    'lang.toggle': 'Switch language',
    'lang.en': 'English',
    'lang.yo': 'Yorùbá',

    'cta.join': 'Join the Community',
    'cta.support': 'Support a Project',
    'cta.audience': 'Request an Audience',
    'cta.explore': 'Explore the Platform',
    'cta.learnMore': 'Learn More',
    'cta.viewAll': 'View All',
    'cta.readMore': 'Read More',
    'cta.browse': 'Browse Archive',
    'cta.visit': 'Visit Marketplace',
    'cta.contribute': 'Contribute',
    'cta.book': 'Book a Tour',

    'home.hero.title': 'Where the World Began',
    'home.hero.subtitle':
      'Ile-Ife — the sacred origin of the Yoruba people, home of the Ooni, and a living centre of culture, tradition, and community.',
    'home.hero.badge': 'Official Platform of the Ooni\'s Palace',

    'home.quicklinks.palace': 'The Palace',
    'home.quicklinks.palace.desc': 'The Ooni, the royal lineage, and palace announcements.',
    'home.quicklinks.community': 'Community',
    'home.quicklinks.community.desc': 'News, events, and notices from Ile-Ife.',
    'home.quicklinks.heritage': 'Heritage Archive',
    'home.quicklinks.heritage.desc': 'Oriki, proverbs, stories, and festival records.',
    'home.quicklinks.development': 'Development Union',
    'home.quicklinks.development.desc': 'Dues, donations, projects, and transparency.',
    'home.quicklinks.marketplace': 'Marketplace',
    'home.quicklinks.marketplace.desc': 'Adire, beadwork, tours, and local businesses.',

    'home.about.title': 'A Sacred City, A Living Tradition',
    'home.about.body':
      'Ile-Ife is revered as the place where the world began. According to Yoruba tradition, Olodumare sent Oduduwa down from the heavens to create land at Ife. From here, the Yoruba civilisation spread across West Africa and, through the diaspora, across the world. Today, Ile-Ife remains a spiritual and cultural capital, home to the Ooni — the spiritual head of the Yoruba nation.',
    'home.about.stat1.label': 'Years of History',
    'home.about.stat1.value': '1,000+',
    'home.about.stat2.label': 'Quarters (Akoda)',
    'home.about.stat2.value': '13',
    'home.about.stat3.label': 'Festivals Each Year',
    'home.about.stat3.value': '20+',
    'home.about.stat4.label': 'Diaspora Worldwide',
    'home.about.stat4.value': 'Millions',

    'home.news.title': 'Latest News & Announcements',
    'home.news.subtitle': 'Official updates from the palace and the community.',
    'home.events.title': 'Upcoming Events',
    'home.events.subtitle': 'Festivals, meetings, and ceremonies in Ile-Ife.',

    'home.oni.title': 'The Ooni of Ife',
    'home.oni.body':
      'The Ooni of Ife is the traditional ruler and spiritual leader of the Yoruba people. The throne of Oduduwa has been held in unbroken succession for over a thousand years, making it one of the oldest living monarchies in the world.',
    'home.oni.current': 'Current Reign',
    'home.oni.lineage': '51st in the line of Ooni',

    'home.heritage.title': 'Cultural Heritage Archive',
    'home.heritage.subtitle':
      'Preserving the oral knowledge, proverbs, oriki, and traditions of Ile-Ife for future generations.',
    'home.heritage.featured': 'Featured Items',

    'home.cta.title': 'Be Part of the Legacy',
    'home.cta.body':
      'Join the Ile-Ife community. Connect with indigenes at home and in the diaspora, support development projects, and help preserve our heritage.',
    'home.cta.note':
      'Membership is open to all indigenes and residents. Applications are reviewed by the development union.',

    'palace.title': 'The Palace of the Ooni',
    'palace.subtitle':
      'The spiritual seat of the Yoruba nation, where tradition has been kept for over a thousand years.',
    'palace.oni.title': 'The Ooni of Ife',
    'palace.oni.role': 'Spiritual Head of the Yoruba People',
    'palace.oni.bio':
      'The Ooni is the custodian of the sacred traditions of Ile-Ife and the spiritual father of all Yoruba people, at home and in the diaspora. The throne traces its origin to Oduduwa, the progenitor of the Yoruba nation, making the Ooni one of the most revered traditional rulers in Africa.',
    'palace.lineage.title': 'The Royal Lineage',
    'palace.lineage.subtitle':
      'A list of notable Ooni of Ife across the centuries, in the order of their reign.',
    'palace.lineage.note':
      'This is a representative selection. The full list contains 51 reigns in unbroken succession.',
    'palace.history.title': 'The History of Ile-Ife',
    'palace.history.body1':
      'Ile-Ife is regarded as the cradle of Yoruba civilisation and, in Yoruba cosmology, the very place where the world was created. According to tradition, the supreme being Olodumare sent Oduduwa from the heavens with a cockerel, a handful of dirt, and a palm nut. Oduduwa scattered the dirt at Ife, the cockerel scratched it into land, and the palm nut grew into the first tree — and so the world was made.',
    'palace.history.body2':
      'From this sacred beginning, Ile-Ife grew into a great city and the centre of a civilization that spread across what is now Nigeria, Benin, and Togo. Its artists produced some of the finest bronze and terracotta sculpture the world has known — the Ife heads, discovered in 1910, stunned the world with their naturalism and remain among Africa\'s greatest artistic treasures.',
    'palace.history.body3':
      'Ile-Ife is organised into quarters, each with its own chief, traditions, and responsibilities. The city\'s major festivals — Olojo, Edi, Oro, and others — draw people from across the Yoruba world and the global diaspora. Today, Ile-Ife is both a living spiritual capital and a modern community, balancing the weight of its ancient traditions with the needs of its people.',
    'palace.quarters.title': 'The Quarters of Ile-Ife',
    'palace.gallery.title': 'Gallery',

    'community.title': 'Community Portal',
    'community.subtitle':
      'News, events, and notices from the palace and the people of Ile-Ife.',
    'community.news.title': 'News & Announcements',
    'community.news.search': 'Search news...',
    'community.news.all': 'All Categories',
    'community.news.category.announcement': 'Announcements',
    'community.news.category.event': 'Events',
    'community.news.category.festival': 'Festivals',
    'community.news.category.community': 'Community',
    'community.news.category.development': 'Development',
    'community.news.noResults': 'No news found matching your search.',
    'community.calendar.title': 'Event Calendar',
    'community.calendar.subtitle': 'Upcoming festivals, meetings, and ceremonies.',
    'community.notices.title': 'Urgent Notices',
    'community.notices.subtitle': 'Important announcements that require your attention.',

    'chiefs.title': 'Chiefs Directory',
    'chiefs.subtitle':
      'The traditional council of Ile-Ife, in the order of precedence.',
    'chiefs.profile.title': 'About',
    'chiefs.profile.responsibilities': 'Responsibilities',
    'chiefs.profile.quarter': 'Quarter',
    'chiefs.profile.order': 'Order of Precedence',

    'heritage.title': 'Cultural Heritage Archive',
    'heritage.subtitle':
      'A living archive of the oral knowledge, proverbs, stories, oriki, and festival traditions of Ile-Ife.',
    'heritage.search': 'Search heritage items...',
    'heritage.filter.all': 'All Types',
    'heritage.filter.allLang': 'All Languages',
    'heritage.noResults': 'No items found matching your search.',
    'heritage.membersOnly': 'Members Only',
    'heritage.restricted': 'Restricted',
    'heritage.loginPrompt': 'Please log in to view this item.',

    'contact.title': 'Contact the Palace',
    'contact.subtitle':
      'Reach the Ooni\'s palace, send an audience request, or find us in Ile-Ife.',
    'contact.info.title': 'Palace Contact',
    'contact.info.address': 'Ooni\'s Palace, Enuwa, Ile-Ife, Osun State, Nigeria',
    'contact.info.phone': 'Phone',
    'contact.info.email': 'Email',
    'contact.info.whatsapp': 'WhatsApp',
    'contact.info.hours': 'Office Hours',
    'contact.info.hoursValue': 'Mon–Fri, 9:00 AM – 4:00 PM WAT',
    'contact.audience.title': 'Request an Audience',
    'contact.audience.subtitle':
      'Submit a request for a meeting with the palace. The palace secretary will review your request and respond.',
    'contact.audience.name': 'Full Name',
    'contact.audience.contact': 'Email or Phone',
    'contact.audience.purpose': 'Purpose of Meeting',
    'contact.audience.date': 'Preferred Date',
    'contact.audience.message': 'Additional Details',
    'contact.audience.submit': 'Submit Request',
    'contact.audience.success.title': 'Request Received',
    'contact.audience.success.body':
      'Your request has been received. The palace secretary will contact you. Your reference number is:',
    'contact.audience.success.another': 'Submit Another Request',
    'contact.audience.error.required': 'Please fill in all required fields.',
    'contact.audience.error.name': 'Please enter your full name.',
    'contact.audience.error.contact': 'Please enter your email or phone number.',
    'contact.audience.error.purpose': 'Please describe the purpose of your meeting.',

    'footer.about': 'The official digital platform of Ile-Ife, the ancestral home of the Yoruba people.',
    'footer.links.palace': 'The Palace',
    'footer.links.community': 'Community',
    'footer.links.chiefs': 'Chiefs',
    'footer.links.heritage': 'Heritage',
    'footer.links.contact': 'Contact',
    'footer.modules.title': 'Platform Modules',
    'footer.modules.palace': 'Palace & Public Site',
    'footer.modules.community': 'Community Portal',
    'footer.modules.heritage': 'Heritage Archive',
    'footer.modules.development': 'Development Union',
    'footer.modules.marketplace': 'Marketplace & Tourism',
    'footer.newsletter.title': 'Stay Connected',
    'footer.newsletter.body': 'Receive palace announcements and community news.',
    'footer.newsletter.placeholder': 'Your email',
    'footer.newsletter.button': 'Subscribe',
    'footer.rights': 'All rights reserved.',
    'footer.disclaimer':
      'A platform for the Ooni\'s palace and the people of Ile-Ife.',

    'common.by': 'By',
    'common.on': 'on',
    'common.attending': 'attending',
    'common.free': 'Free',
    'common.contributor': 'Contributor',
    'common.language': 'Language',
    'common.back': 'Back',
  },
  yo: {
    'site.name': 'Ilẹ̀ Ifẹ̀',
    'site.tagline': 'Orísun Àwọn Yorùbá',
    'site.description':
      'Ilé ìkẹ́kọ̀ àti ìpínlẹ̀ òde-óní ti Ilẹ̀ Ifẹ̀ — orísun àwọn Yorùbá. Ṣàwárí ohùn ọba Ooni, ìròyìn àgbègbè, àṣà, àti ọjà.',

    'nav.home': 'Ilé',
    'nav.palace': 'Ooni',
    'nav.community': 'Àgbègbè',
    'nav.chiefs': 'Ìjòyè',
    'nav.heritage': 'Àṣà',
    'nav.contact': 'Ìkànnà',

    'lang.toggle': 'Yí padà èdè',
    'lang.en': 'English',
    'lang.yo': 'Yorùbá',

    'cta.join': 'Darapọ̀ Mọ́ Àgbègbè',
    'cta.support': 'Ṣàtìlẹ́yìn Iṣẹ́ Àjègbè',
    'cta.audience': 'Béèrè Ìpàdé',
    'cta.explore': 'Ṣàwárí',
    'cta.learnMore': 'Kọ́ Diẹ̀ Sii',
    'cta.viewAll': 'Wo Gbogbo Rẹ̀',
    'cta.readMore': 'Ka Diẹ̀ Sii',
    'cta.browse': 'Wo Àkójọ́pọ̀',
    'cta.visit': 'Lọ Sí Ọjà',
    'cta.contribute': 'Dàpọ̀',
    'cta.book': 'Ṣàtẹ́jú Ìrìn-àjò',

    'home.hero.title': 'Níbití Ayé Bẹ̀rẹ̀',
    'home.hero.subtitle':
      'Ilẹ̀ Ifẹ̀ — orísun àwọn Yorùbá, ilé Ooni, àti ibi àṣà, àṣà, àti àgbègbè.',
    'home.hero.badge': 'Ilé Ìkẹ́kọ̀ ti Ooni',

    'home.quicklinks.palace': 'Ooni',
    'home.quicklinks.palace.desc': 'Ooni, ìran ọba, àti ìkéde ohùn.',
    'home.quicklinks.community': 'Àgbègbè',
    'home.quicklinks.community.desc': 'Ìròyìn, àlejò, àti ìkéde ti Ilẹ̀ Ifẹ̀.',
    'home.quicklinks.heritage': 'Àkójọ́ Àṣà',
    'home.quicklinks.heritage.desc': 'Oríkì, òwe, ìtàn, àti ìgbékalẹ̀ àjọyọ.',
    'home.quicklinks.development': 'Egbe Àgbàlàgbe',
    'home.quicklinks.development.desc': 'Owó ọdún, ìfẹ́yìn, iṣẹ́, àti òótọ́.',
    'home.quicklinks.marketplace': 'Ọjà',
    'home.quicklinks.marketplace.desc': 'Adire, ìlẹ̀kẹ̀, ìrìn-àjò, àti iṣẹ́ agbègbè.',

    'home.about.title': 'Ìlú Mímọ́, Àṣà Àtí Pẹ̀',
    'home.about.body':
      'Ilẹ̀ Ifẹ̀ ni a ń lò pé ni ibi tí ayé bẹ̀rẹ̀. Gẹ́gẹ́ bí ìtàn Yorùbá, Olódùmarè rán Odùduwà wá láti ọ̀run láti dá ilẹ̀ ní Ifẹ̀. Láti ibẹ̀, àṣà Yorùbá tàn káàkiri ilẹ̀ Yorùbá àti gbogbo ayé. Lónìí, Ilẹ̀ Ifẹ̀ jẹ́ orísun ẹ̀mí àti àṣà, ilé Ooni — olórí ẹ̀mí àwọn Yorùbá.',
    'home.about.stat1.label': 'Ọdún Ìtàn',
    'home.about.stat1.value': '1,000+',
    'home.about.stat2.label': 'Àdúgbò',
    'home.about.stat2.value': '13',
    'home.about.stat3.label': 'Àjọyọ̀ Ọdún',
    'home.about.stat3.value': '20+',
    'home.about.stat4.label': 'Àjọ Yorùbá Lókè Èré',
    'home.about.stat4.value': 'Mílíọ̀nù',

    'home.news.title': 'Ìròyìn Àtijọ́ àti Ìkéde',
    'home.news.subtitle': 'Ìmúyẹ̀ láti ọ̀dọ̀ ọba àti àgbègbè.',
    'home.events.title': 'Àlejò Tó ń Bọ̀',
    'home.events.subtitle': 'Àjọyọ̀, ìpàdé, àti ayẹyẹ ní Ilẹ̀ Ifẹ̀.',

    'home.oni.title': 'Ooni Ilẹ̀ Ifẹ̀',
    'home.oni.body':
      'Ooni Ilẹ̀ Ifẹ̀ ni olórí àtijọ́ àti olórí ẹ̀mí àwọn Yorùbá. Ìgboyà Odùduwà ti wà fún ọgọ́rùn-ọdún lọ́wọ́, ó sì jẹ́ ọ̀kan nínú àwọn ọba tí ó pẹ́ jùlọ ní ayé.',
    'home.oni.current': 'Ìjọba Lọ́wọ́lọ́wọ́',
    'home.oni.lineage': 'Ẹ̀kẹtàlélọ́gọ́ta nínú ìran Ooni',

    'home.heritage.title': 'Àkójọ́ Àṣà',
    'home.heritage.subtitle':
      'Ìdàpọ̀ ìmọ̀ ẹnu, òwe, oríkì, àti àṣà Ilẹ̀ Ifẹ̀ fún àwọn ọmọ-eyín.',
    'home.heritage.featured': 'Àwọn Ohun Pàtàkì',

    'home.cta.title': 'Jẹ́ Ara Àṣà Wa',
    'home.cta.body':
      'Darapọ̀ mọ́ àgbègbè Ilẹ̀ Ifẹ̀. Ṣèbá àwọn ọmọ bíbí nílé àti lókè-èré, ṣàtìlẹ́yìn iṣẹ́, kọ́ sì dàpọ̀ mọ́ àṣà wa.',
    'home.cta.note':
      'Ẹgbẹ́ ṣí sí gbogbo àwọn ọmọ bíbí àti àwọn tí ń gbé. Àwọn ìfágbẹ̀yìn ń ṣàyẹ̀wò.',

    'palace.title': 'Ilé Ooni',
    'palace.subtitle':
      'Ilé ẹ̀mí àwọn Yorùbá, níbití àṣà ti wà fún ọgọ́rùn-ọdún.',
    'palace.oni.title': 'Ooni Ilẹ̀ Ifẹ̀',
    'palace.oni.role': 'Olórí Ẹ̀mí Àwọn Yorùbá',
    'palace.oni.bio':
      'Ooni ni olùṣọ́ àṣà mímọ́ Ilẹ̀ Ifẹ̀ àti bábá ẹ̀mí gbogbo Yorùbá, nílé àti lókè-èré. Ìgboyà tèlé Odùduwà, baba Yorùbá, ó sì jẹ́ ọ̀kan nínú àwọn ọba tí a ń bọ̀ jùlò ní Áfríkà.',
    'palace.lineage.title': 'Ìran Ọba',
    'palace.lineage.subtitle':
      'Àtòjọ àwọn Ooni Ilẹ̀ Ifẹ̀ nípa ọdún ìjọba wọn.',
    'palace.lineage.note':
      'Yìí ni àyẹ́. Àtòjọ kíkún ní ẹ̀kẹtàlélọ́gọ́ta ìjọba.',
    'palace.history.title': 'Ìtàn Ilẹ̀ Ifẹ̀',
    'palace.history.body1':
      'Ilẹ̀ Ifẹ̀ ni a ń sọ pé ni orísun Yorùbá, àti nínú ìtàn Yorùbá, ibi tí ayé ti dá. Olódùmarè rán Odùduwà láti ọ̀run pẹ̀lú àkùkọ, epo ilẹ̀, àti ọ̀pẹ̀. Odùduwà sò epo ilẹ̀ náà ní Ifẹ̀, àkùkọ kọ́ ọ́ di ilẹ̀, ọ̀pẹ̀ sì dàgbà — ayé sì wà.',
    'palace.history.body2':
      'Láti ìbẹ̀rẹ̀ yìí, Ilẹ̀ Ifẹ̀ dàgbà sí ìlú ńlá àti ìpínlẹ̀ ọlọ́gbọ́n tí ó tàn káàkiri. Àwọn oníṣẹ́-ọnà rẹ̀ ṣe àwọn àwòrán idẹ àti amọ tí ó rẹ́wà — orí Ifẹ̀, tí a rí ní 1910, yà àgbáyé lẹ́rù pẹ̀lú òde-ọ́nà wọn.',
    'palace.history.body3':
      'Ilẹ̀ Ifẹ̀ pín sí àdúgbò, ọkọọkan ní olórí àti àṣà rẹ̀. Àwọn àjọyọ̀ ńlá — Olojo, Edi, Oro — ń kó àwọn Yorùbá láti gbogbo ayé. Lónìí, Ilẹ̀ Ifẹ̀ jẹ́ orísun ẹ̀mí àti àgbègbè òde-ọnà.',
    'palace.quarters.title': 'Àwọn Àdúgbò Ilẹ̀ Ifẹ̀',
    'palace.gallery.title': 'Àwọn Àwòrán',

    'community.title': 'Àgbègbè',
    'community.subtitle': 'Ìròyìn, àlejò, àti ìkéde láti ọba àti àgbègbè.',
    'community.news.title': 'Ìròyìn àti Ìkéde',
    'community.news.search': 'Ìròyìn wá...',
    'community.news.all': 'Gbogbo Ẹ̀ka',
    'community.news.category.announcement': 'Ìkéde',
    'community.news.category.event': 'Àlejò',
    'community.news.category.festival': 'Àjọyọ̀',
    'community.news.category.community': 'Àgbègbè',
    'community.news.category.development': 'Ìdàgbà',
    'community.news.noResults': 'Kò sí ìròyìn bí ìbéèrè rẹ.',
    'community.calendar.title': 'Ìkànnà Àlejò',
    'community.calendar.subtitle': 'Àjọyọ̀, ìpàdé, àti ayẹyẹ tó ń bọ̀.',
    'community.notices.title': 'Ìkéde Pàtàkì',
    'community.notices.subtitle': 'Ìkéde pàtàkì tí ó nílò àkíyèsí rẹ.',

    'chiefs.title': 'Àtòjọ Ìjòyè',
    'chiefs.subtitle': 'Ìgbìmọ̀ àtijọ́ Ilẹ̀ Ifẹ̀, nípa ìpìnrọ̀.',
    'chiefs.profile.title': 'Nípa',
    'chiefs.profile.responsibilities': 'Ìṣẹ́',
    'chiefs.profile.quarter': 'Àdúgbò',
    'chiefs.profile.order': 'Ìpìnrọ̀',

    'heritage.title': 'Àkójọ́ Àṣà',
    'heritage.subtitle':
      'Àkójọ́ ìmọ̀ ẹnu, òwe, ìtàn, oríkì, àti àṣà Ilẹ̀ Ifẹ̀.',
    'heritage.search': 'Ìròyìn wá...',
    'heritage.filter.all': 'Gbogbo Iru',
    'heritage.filter.allLang': 'Gbogbo Èdè',
    'heritage.noResults': 'Kò sí ohun bí ìbéèrè rẹ.',
    'heritage.membersOnly': 'Ẹgbẹ́ Nìkan',
    'heritage.restricted': 'Àdénẹ́nu',
    'heritage.loginPrompt': 'Jọwọ̀ wọ́ láti wò èyí.',

    'contact.title': 'Ìkànnà Ọba',
    'contact.subtitle':
      'Fọwọ́sí Ooni, fi ìbéèrè ìpàdé ránṣẹ́, tàbí wá a wa ní Ilẹ̀ Ifẹ̀.',
    'contact.info.title': 'Ìkànnà Ọba',
    'contact.info.address': 'Ilé Ooni, Enuwa, Ilẹ̀ Ifẹ̀, Ìpínlẹ̀ Ọ̀ṣun, Nàìjíríà',
    'contact.info.phone': 'Fọ́ǹu',
    'contact.info.email': 'Ìméèlì',
    'contact.info.whatsapp': 'WhatsApp',
    'contact.info.hours': 'Wákàti Iṣẹ́',
    'contact.info.hoursValue': 'Mon–Fri, 9:00 AM – 4:00 PM WAT',
    'contact.audience.title': 'Béèrè Ìpàdé',
    'contact.audience.subtitle':
      'Fi ìbéèrè ìpàdé ránṣẹ́. Akọ̀wé ọba yóò ṣàyẹ̀wò ìbéèrè rẹ.',
    'contact.audience.name': 'Orúkọ Kíkún',
    'contact.audience.contact': 'Ìméèlì tàbí Fọ́ǹu',
    'contact.audience.purpose': 'Ìdí Ìpàdé',
    'contact.audience.date': 'Ọjọ́ Tó Fẹ̀rẹ̀',
    'contact.audience.message': 'Àlàyé Diẹ̀ Sii',
    'contact.audience.submit': 'Fi Ìbéèrè Ránṣẹ́',
    'contact.audience.success.title': 'A Gba Ìbéèrè Rẹ̀',
    'contact.audience.success.body':
      'A ti gba ìbéèrè rẹ̀. Akọ̀wé ọba yóò kàn rẹ. Nọ́mbà ìkànnà rẹ̀:',
    'contact.audience.success.another': 'Fi Ìbéèrè Mìíràn Ránṣẹ́',
    'contact.audience.error.required': 'Jọwọ̀ kó gbogbo àyè pàtàkì.',
    'contact.audience.error.name': 'Jọwọ̀ tè orúkọ rẹ̀.',
    'contact.audience.error.contact': 'Jọwọ̀ tè ìméèlì tàbí fọ́ǹu rẹ̀.',
    'contact.audience.error.purpose': 'Jọwọ̀ sàlàyé ìdí ìpàdé rẹ.',

    'footer.about': 'Ilé ìkẹ́kọ̀ òde-ọnà ti Ilẹ̀ Ifẹ̀, orísun àwọn Yorùbá.',
    'footer.links.palace': 'Ooni',
    'footer.links.community': 'Àgbègbè',
    'footer.links.chiefs': 'Ìjòyè',
    'footer.links.heritage': 'Àṣà',
    'footer.links.contact': 'Ìkànnà',
    'footer.modules.title': 'Àwọn Ìpìlẹ̀',
    'footer.modules.palace': 'Ilé Ọba',
    'footer.modules.community': 'Àgbègbè',
    'footer.modules.heritage': 'Àṣà',
    'footer.modules.development': 'Egbe Àgbàlàgbe',
    'footer.modules.marketplace': 'Ọjà àti Ìrìn-àjò',
    'footer.newsletter.title': 'Dákàràkọ̀',
    'footer.newsletter.body': 'Gba ìkéde ọba àti ìròyìn àgbègbè.',
    'footer.newsletter.placeholder': 'Ìméèlì rẹ̀',
    'footer.newsletter.button': 'Dápadà',
    'footer.rights': 'Gbogbo ẹ̀tọ̀.',
    'footer.disclaimer': 'Ilé ìkẹ́kọ̀ fún Ooni àti àwọn ènìyàn Ilẹ̀ Ifẹ̀.',

    'common.by': 'Ní',
    'common.on': 'ní',
    'common.attending': 'ń lọ',
    'common.free': 'Láìsí owó',
    'common.contributor': 'Aláfarawà',
    'common.language': 'Èdè',
    'common.back': 'Pada',
  },
} as const;
