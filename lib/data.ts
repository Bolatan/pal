export const siteConfig = {
  name: 'Ile-Ife Platform',
  url: 'https://ileife.ng',
  email: 'palace@ileife.ng',
  phone: '+234 800 000 0000',
  whatsapp: '+234 800 000 0000',
};

export type Bilingual = { en: string; yo: string };

export type NavLink = { href: string; key: string };

export const navLinks: NavLink[] = [
  { href: '/', key: 'nav.home' },
  { href: '/palace', key: 'nav.palace' },
  { href: '/community', key: 'nav.community' },
  { href: '/chiefs', key: 'nav.chiefs' },
  { href: '/heritage', key: 'nav.heritage' },
  { href: '/contact', key: 'nav.contact' },
];

export const quickLinks = [
  { href: '/palace', icon: 'Crown', titleKey: 'home.quicklinks.palace', descKey: 'home.quicklinks.palace.desc' },
  { href: '/community', icon: 'Newspaper', titleKey: 'home.quicklinks.community', descKey: 'home.quicklinks.community.desc' },
  { href: '/heritage', icon: 'BookOpen', titleKey: 'home.quicklinks.heritage', descKey: 'home.quicklinks.heritage.desc' },
  { href: '/development', icon: 'HandHeart', titleKey: 'home.quicklinks.development', descKey: 'home.quicklinks.development.desc' },
  { href: '/marketplace', icon: 'ShoppingBag', titleKey: 'home.quicklinks.marketplace', descKey: 'home.quicklinks.marketplace.desc' },
] as const;

export type NewsItem = {
  id: string;
  category: 'announcement' | 'event' | 'festival' | 'community' | 'development';
  title: Bilingual;
  excerpt: Bilingual;
  body: Bilingual;
  author: string;
  date: string;
  image: string;
  urgent?: boolean;
};

export const newsItems: NewsItem[] = [
  {
    id: 'n1',
    category: 'announcement',
    title: {
      en: 'Ooni Announces Date for 2026 Olojo Festival',
      yo: 'Ooni Ṣàkíyèsí Ọjọ́ Àjọyọ̀ Olojo 2026',
    },
    excerpt: {
      en: 'His Imperial Majesty has officially announced that this year\'s Olojo festival will commence on the 14th of October, celebrating the dawn of a new dawn.',
      yo: 'Ọba Ooni ti ṣàkíyèsí pé àjọyọ̀ Olojo Ọdún yìí yóò bẹ̀rẹ̀ ní ọjọ́ kẹrìnlélógún Oṣùẹwà, láti ṣayẹyè òmíníwájú tuntun.',
    },
    body: {
      en: 'The Olojo festival, one of the most sacred festivals in Yoruba land, commemorates the dawn of creation and the descent of the Aare crown. His Imperial Majesty, the Ooni of Ife, has announced that the 2026 edition will begin on October 14th. The festival will include the traditional seclusion of the Ooni, the appearance with the sacred Aare crown, and a week of cultural celebrations open to all.',
      yo: 'Àjọyọ̀ Olojo, ọ̀kan nínú àwọn àjọyọ̀ mímọ́ jùlọ ní ilẹ̀ Yorùbá, ṣayẹyè ìbẹ̀rẹ̀ ayé àti ìsọ́jú adé Aare. Ọba Ooni ti ṣàkíyèsí pé àdà 2026 yóò bẹ̀rẹ̀ ní ọjọ́ kẹrìnlélógún Oṣùẹwà. Àjọyọ̀ náà yóò pẹ̀lú ìpamọ́ Ooni, ìfarahàn pẹ̀lú adé Aare, àti ọ̀sẹ̀ àjọyọ̀.',
    },
    author: 'Palace Media Office',
    date: '2026-10-20',
    image: 'https://images.pexels.com/photos/39638667/pexels-photo-39638667.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    urgent: false,
  },
  {
    id: 'n2',
    category: 'festival',
    title: {
      en: 'Ile-Ife Prepares for Annual Edi Festival',
      yo: 'Ilẹ̀ Ifẹ̀ ń Ṣetàn fún Àjọyọ̀ Edi Ọdún',
    },
    excerpt: {
      en: 'The community is preparing for the Edi festival, a celebration of cleansing and renewal that has been observed for centuries.',
      yo: 'Àgbègbè ń ṣetàn fún àjọyọ̀ Edi, ayẹyẹ ìyọ́jẹ́ àti ìṣẹ̀dá tí a ti ń ṣe fún ọ̀pọ̀lọpọ̀ ọdún.',
    },
    body: {
      en: 'The Edi festival is one of Ile-Ife\'s most ancient celebrations, marking a period of spiritual cleansing and renewal. The festival involves traditional rites performed by the Ooni and the chiefs, followed by community gatherings. All members are invited to participate.',
      yo: 'Àjọyọ̀ Edi jẹ́ ọ̀kan nínú àwọn ayẹyè tí ó pẹ́ jùlọ ní Ilẹ̀ Ifẹ̀, ó ń ṣàmúlò ìyọ́jẹ́ ẹ̀mí àti ìṣẹ̀dá. Àjọyọ̀ náà pẹ̀lú ìṣẹ̀ àtijọ́ tí Ooni àti àwọn ìjòyè ń ṣe, lẹ́yìn náà ni ìpàdé àgbègbè.',
    },
    author: 'Community Office',
    date: '2026-10-18',
    image: 'https://images.pexels.com/photos/31777375/pexels-photo-31777375.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    urgent: false,
  },
  {
    id: 'n3',
    category: 'development',
    title: {
      en: 'Diaspora Development Fund Reaches ₦50 Million Milestone',
      yo: 'Dídún Àjọ Yorùbá Lókè Èré Dé Mílíọ̀nù Naira Marún',
    },
    excerpt: {
      en: 'The development union has announced that contributions from diaspora members have surpassed fifty million naira, funding projects across education and healthcare.',
      yo: 'Egbe àgbàlàgbe ti sọ pé owó láti ọ̀dọ̀ àwọn Yorùbá lókè èré ti ju mílíọ̀nù naira marún lọ, láti ṣe ìránṣẹ́ ìmọ̀ àti ìlera.',
    },
    body: {
      en: 'The Ile-Ife Development Union has announced a major milestone in its diaspora fundraising campaign. Contributions have now surpassed fifty million naira, with funds directed toward school renovations, a community health centre, and a borehole project serving three quarters. The union has published a full transparency report showing budget versus spend for each project.',
      yo: 'Egbe Àgbàlàgbe Ilẹ̀ Ifẹ̀ ti sọ ìlọ́po pàtàkì nínú ìpolongo owó ti àwọn lókè èré. Owó ti ju mílíọ̀nù naira marún lọ, pẹ̀lú owó sí ìyípadà ilé-ìwé, ilé-ìlera, àti iṣẹ́ omi.',
    },
    author: 'Development Union',
    date: '2026-10-15',
    image: 'https://images.pexels.com/photos/34752663/pexels-photo-34752663.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    urgent: false,
  },
  {
    id: 'n4',
    category: 'community',
    title: {
      en: 'Community Health Outreach Programme Launches Next Month',
      yo: 'Ètò Ìlera Àgbègbè Bẹ̀rẹ̀ Oṣù Tó ń Bọ̀',
    },
    excerpt: {
      en: 'A free health screening programme will be available across all quarters of Ile-Ife, supported by the development union and local volunteers.',
      yo: 'Ètò ìyẹ̀wú ìlera làìsanwo yóò wà káàkiri gbogbo àdúgbò Ilẹ̀ Ifẹ̀, pẹ̀lú ìtìlẹ́yìn egbe àgbàlàgbe àti àwọn alábápamọ́.',
    },
    body: {
      en: 'The Ile-Ife Development Union, in partnership with the Ife Central Health Centre, is launching a free community health screening programme next month. The programme will provide blood pressure checks, diabetes screening, and basic consultations across all thirteen quarters. Volunteers are welcome to register at the union office.',
      yo: 'Egbe Àgbàlàgbe Ilẹ̀ Ifẹ̀, pẹ̀lú ìbáṣepọ̀ Ilé-ìlera Àárín Ifẹ̀, ń bẹ̀rẹ̀ ètò ìyẹ̀wú ìlera láìsanwo oṣù tó ń bọ̀. Ètò náà yóò pèsè yíyẹ̀wò ẹ̀jẹ̀ àti àjẹ̀sára káàkiri àdúgbò mẹ́tàlá.',
    },
    author: 'Community Office',
    date: '2026-10-12',
    image: 'https://images.pexels.com/photos/37118594/pexels-photo-37118594.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    urgent: false,
  },
  {
    id: 'n5',
    category: 'announcement',
    title: {
      en: 'URGENT: Water Supply Disruption in Moore Quarter',
      yo: 'PÀTÀKÌ: Ìdákúróko Omí ní Àdúgbò Moore',
    },
    excerpt: {
      en: 'Due to ongoing repairs to the main borehole, water supply to Moore and adjoining quarters will be disrupted for 48 hours.',
      yo: 'Nípàtàkì iṣẹ́ ìyípadà lórí omi, omí ní àdúgbò Moore yóò dákú fún wákàti méjìlélọ́gọ́rin.',
    },
    body: {
      en: 'The development union has informed us that the main borehole serving Moore quarter and adjoining areas will be temporarily shut down for repairs. Water supply is expected to resume within 48 hours. Water tankers will be stationed at three points in the affected area. We apologise for the inconvenience.',
      yo: 'Egbe àgbàlàgbe ti sọ pé omi ńlá náà tí ń ṣe àdúgbò Moore yóò dákú fún ìyípadà. Omí yóò padà ní wákàti méjìlélọ́gọ́rin. Awọ́ omi yóò wà ní àyè mẹ́ta.',
    },
    author: 'Development Union',
    date: '2026-10-22',
    image: 'https://images.pexels.com/photos/30253011/pexels-photo-30253011.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    urgent: true,
  },
  {
    id: 'n6',
    category: 'community',
    title: {
      en: 'New Youth Skill Acquisition Centre Opens in Iremo',
      yo: 'Sẹ́ńtà Ọgbọ́n Ọdọ́ Tuntun Sí ní Iremo',
    },
    excerpt: {
      en: 'A new skills training centre offering courses in tailoring, beadwork, and digital skills has opened its doors to young people.',
      yo: 'Sẹ́ńtà ẹ̀kọ́ ọgbọ́n tuntun tí ń pèsè ìmọ̀ ìṣẹ́ àti àwọn ìmọ̀ díjí ti sí ìlẹ̀kùn fún àwọn ọdọ́.',
    },
    body: {
      en: 'The palace, in collaboration with the development union, has opened a new youth skill acquisition centre in the Iremo quarter. The centre offers free training in tailoring, beadwork, adire making, and basic digital skills. Registration is open to all young residents aged 16 to 30. The first cohort begins next month.',
      yo: 'Ọba, pẹ̀lú ìbáṣepọ̀ egbe àgbàlàgbe, ti sí sẹ́ńtà ẹ̀kọ́ ọgbọ́n tuntun ní àdúgbò Iremo. Sẹ́ńtà náà ń pèsè ẹ̀kọ́ láìsanwo ní ìṣẹ́ aṣọ, ìlẹ̀kẹ̀, adire, àti ìmọ̀ díjí.',
    },
    author: 'Palace Media Office',
    date: '2026-10-08',
    image: 'https://images.pexels.com/photos/32405947/pexels-photo-32405947.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    urgent: false,
  },
];

export type EventItem = {
  id: string;
  title: Bilingual;
  date: string;
  time: Bilingual;
  location: Bilingual;
  category: Bilingual;
  image: string;
  attending: number;
  capacity?: number;
  free: boolean;
};

export const eventItems: EventItem[] = [
  {
    id: 'e1',
    title: { en: 'Olojo Festival 2026', yo: 'Àjọyọ̀ Olojo 2026' },
    date: '2026-10-26',
    time: { en: '10:00 AM', yo: '10:00 AM' },
    location: { en: 'Ooni\'s Palace, Enuwa', yo: 'Ilé Ooni, Enuwa' },
    category: { en: 'Festival', yo: 'Àjọyọ̀' },
    image: 'https://images.pexels.com/photos/39638667/pexels-photo-39638667.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    attending: 2400,
    capacity: 10000,
    free: true,
  },
  {
    id: 'e2',
    title: { en: 'Quarter Chiefs Monthly Meeting', yo: 'Ìpàdé Osú Àwọn Ìjòyè Àdúgbò' },
    date: '2026-10-30',
    time: { en: '2:00 PM', yo: '2:00 PM' },
    location: { en: 'Palace Council Hall', yo: 'Ilé Ìpàdé Ọba' },
    category: { en: 'Meeting', yo: 'Ìpàdé' },
    image: 'https://images.pexels.com/photos/30253020/pexels-photo-30253020.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    attending: 13,
    capacity: 13,
    free: true,
  },
  {
    id: 'e3',
    title: { en: 'Community Town Hall', yo: 'Ìpàdé Àgbègbè' },
    date: '2026-11-05',
    time: { en: '4:00 PM', yo: '4:00 PM' },
    location: { en: 'Iremo Square', yo: 'Àgọ́nlẹ̀ Iremo' },
    category: { en: 'Community', yo: 'Àgbègbè' },
    image: 'https://images.pexels.com/photos/31890403/pexels-photo-31890403.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    attending: 120,
    free: true,
  },
  {
    id: 'e4',
    title: { en: 'Edi Festival', yo: 'Àjọyọ̀ Edi' },
    date: '2026-11-15',
    time: { en: '6:00 AM', yo: '6:00 AM' },
    location: { en: 'Ooni\'s Palace', yo: 'Ilé Ooni' },
    category: { en: 'Festival', yo: 'Àjọyọ̀' },
    image: 'https://images.pexels.com/photos/31777375/pexels-photo-31777375.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    attending: 1800,
    capacity: 8000,
    free: true,
  },
  {
    id: 'e5',
    title: { en: 'Heritage Preservation Workshop', yo: 'Àpéjọ̀ Ìdàpọ̀ Àṣà' },
    date: '2026-11-22',
    time: { en: '11:00 AM', yo: '11:00 AM' },
    location: { en: 'Cultural Centre, Ile-Ife', yo: 'Sẹ́ńtà Àṣà, Ilẹ̀ Ifẹ̀' },
    category: { en: 'Workshop', yo: 'Àpéjọ̀' },
    image: 'https://images.pexels.com/photos/38223531/pexels-photo-38223531.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    attending: 45,
    capacity: 60,
    free: true,
  },
];

export type Chief = {
  id: string;
  name: Bilingual;
  title: Bilingual;
  quarter: Bilingual;
  order: number;
  image: string;
  bio: Bilingual;
  responsibilities: Bilingual;
};

export const chiefs: Chief[] = [
  {
    id: 'c1',
    name: { en: 'Chief Olayinka Adewoyin', yo: 'Ìjòyè Olayinka Adewoyin' },
    title: { en: 'Lowa of Ife', yo: 'Lowa Ilẹ̀ Ifẹ̀' },
    quarter: { en: 'Iremo', yo: 'Iremo' },
    order: 1,
    image: 'https://images.pexels.com/photos/31876668/pexels-photo-31876668.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    bio: {
      en: 'The Lowa of Ife is one of the most senior chiefs in the palace hierarchy, responsible for advising the Ooni on matters of governance and tradition. Chief Adewoyin has served in this role for over two decades.',
      yo: 'Lowa jẹ́ ọ̀kan nínú àwọn ìjòyè pàtàkì jùlọ, ó ń ṣàmúlò ìmọ̀ràn fún Ooni lórí ìjọba àti àṣà.',
    },
    responsibilities: {
      en: 'Senior palace adviser; oversees protocol and ceremonial arrangements.',
      yo: 'Alámọ̀ràn ọba; nọ́mọ̀ ìpìlẹ̀ àti àṣà.',
    },
  },
  {
    id: 'c2',
    name: { en: 'Chief Modupe Olanrewaju', yo: 'Ìjòyè Modupe Olanrewaju' },
    title: { en: 'Jagun of Ife', yo: 'Jagun Ilẹ̀ Ifẹ̀' },
    quarter: { en: 'Moore', yo: 'Moore' },
    order: 2,
    image: 'https://images.pexels.com/photos/31779717/pexels-photo-31779717.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    bio: {
      en: 'The Jagun of Ife is the traditional war chief, a title of great historical significance. Today, the role focuses on security coordination and community safety.',
      yo: 'Jagun ni olórí ogun àtijọ́, oyè pàtàkì nínú ìtàn. Lónìí, ipò náà dálé lórí ààbò àgbègbè.',
    },
    responsibilities: {
      en: 'Community security; festival safety coordination.',
      yo: 'Ààbò àgbègbè; ààbò àjọyọ̀.',
    },
  },
  {
    id: 'c3',
    name: { en: 'Chief Saheed Fagbenle', yo: 'Ìjòyè Saheed Fagbenle' },
    title: { en: 'Obalufe of Ile-Ife', yo: 'Obalufe Ilẹ̀ Ifẹ̀' },
    quarter: { en: 'Iremo', yo: 'Iremo' },
    order: 3,
    image: 'https://images.pexels.com/photos/38635880/pexels-photo-38635880.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    bio: {
      en: 'The Obalufe is a key figure in the palace administration, responsible for the spiritual and cultural rites associated with the Ooni\'s household and the palace grounds.',
      yo: 'Obalufe ni ẹni pàtàkì nínú ìṣàkóso ọba, ó ń ṣàmúlò ìṣẹ̀ ẹ̀mí àti àṣà ohùn ọba.',
    },
    responsibilities: {
      en: 'Palace rites; spiritual custodian of palace traditions.',
      yo: 'Ìṣẹ̀ ọba; alùṣọ́ àṣà ọba.',
    },
  },
  {
    id: 'c4',
    name: { en: 'Chief Abiodun Oyediran', yo: 'Ìjòyè Abiodun Oyediran' },
    title: { en: 'Ladin Ooni', yo: 'Ladin Ooni' },
    quarter: { en: 'Okerewe', yo: 'Okerewe' },
    order: 4,
    image: 'https://images.pexels.com/photos/31876668/pexels-photo-31876668.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    bio: {
      en: 'The Ladin Ooni serves as a close aide to the Ooni, managing daily palace affairs and coordinating communications between the palace and the community.',
      yo: 'Ladin Ooni jẹ́ alábàáṣepọ̀ Ooni, ó ń ṣàkóso ohùn ọba àti ìbáṣepọ̀ àgbègbè.',
    },
    responsibilities: {
      en: 'Palace administration; community liaison.',
      yo: 'Ìṣàkóso ọba; alájàṣepọ̀ àgbègbè.',
    },
  },
  {
    id: 'c5',
    name: { en: 'Chief Folake Adesina', yo: 'Ìjòyè Folake Adesina' },
    title: { en: 'Erelu Ooni', yo: 'Erelu Ooni' },
    quarter: { en: 'Ilode', yo: 'Ilode' },
    order: 5,
    image: 'https://images.pexels.com/photos/30879257/pexels-photo-30879257.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    bio: {
      en: 'The Erelu Ooni is the most senior female chief, responsible for women\'s affairs, cultural education, and the preservation of women\'s traditions within the palace and the community.',
      yo: 'Erelu Ooni ni obìnrin ìjòyè pàtàkì jùlọ, ó ń ṣàmúlò ohùn obìnrin àti àṣà.',
    },
    responsibilities: {
      en: 'Women\'s affairs; cultural education; heritage preservation.',
      yo: 'Ohùn obìnrin; ẹ̀kọ́ àṣà; ìdàpọ̀ àṣà.',
    },
  },
  {
    id: 'c6',
    name: { en: 'Chief Tunde Olubunmi', yo: 'Ìjòyè Tunde Olubunmi' },
    title: { en: 'Sanmori of Ife', yo: 'Sanmori Ilẹ̀ Ifẹ̀' },
    quarter: { en: 'Egbedi', yo: 'Egbedi' },
    order: 6,
    image: 'https://images.pexels.com/photos/31779717/pexels-photo-31779717.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    bio: {
      en: 'The Sanmori of Ife plays an important role in land matters and community dispute resolution, serving as a bridge between the palace and the families of Ile-Ife.',
      yo: 'Sanmori ń ṣe iṣẹ́ pàtàkì lórí ilẹ̀ àti ìyọ́ ìjà, ó ń ṣe àjọṣepọ̀ láàrin ọba àti àwọn ìdílé.',
    },
    responsibilities: {
      en: 'Land matters; dispute resolution; family liaison.',
      yo: 'Ilẹ̀; ìyọ́ ìjà; alájàṣepọ̀ ìdílé.',
    },
  },
  {
    id: 'c7',
    name: { en: 'Chief Rasaq Ogunleye', yo: 'Ìjòyè Rasaq Ogunleye' },
    title: { en: 'Asa of Ife', yo: 'Asa Ilẹ̀ Ifẹ̀' },
    quarter: { en: 'Modakeke', yo: 'Modakeke' },
    order: 7,
    image: 'https://images.pexels.com/photos/31876668/pexels-photo-31876668.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    bio: {
      en: 'The Asa of Ife is responsible for cultural preservation, overseeing festivals, and ensuring the continuity of the oral and performing arts traditions of Ile-Ife.',
      yo: 'Asa ń ṣe ìdàpọ̀ àṣà, nọ́mọ̀ àjọyọ̀ àti àṣà ọnà.',
    },
    responsibilities: {
      en: 'Cultural preservation; festival oversight; arts coordination.',
      yo: 'Ìdàpọ̀ àṣà; nọ́mọ̀ àjọyọ̀; ọnà.',
    },
  },
  {
    id: 'c8',
    name: { en: 'Chief Olamide Bakare', yo: 'Ìjòyè Olamide Bakare' },
    title: { en: 'Jigan of Ife', yo: 'Jigan Ilẹ̀ Ifẹ̀' },
    quarter: { en: 'Igbodigo', yo: 'Igbodigo' },
    order: 8,
    image: 'https://images.pexels.com/photos/30879257/pexels-photo-30879257.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    bio: {
      en: 'The Jigan of Ife is a respected elder chief who assists in the administration of the quarters and the coordination of community development projects.',
      yo: 'Jigan jẹ́ ìjòyè àgbà, ó ń ṣàràwádì ìṣàkóso àdúgbò àti iṣẹ́ ìdàgbà.',
    },
    responsibilities: {
      en: 'Quarter administration; development projects.',
      yo: 'Ìṣàkóso àdúgbò; iṣẹ́ ìdàgbà.',
    },
  },
];

export type HeritageItem = {
  id: string;
  type: Bilingual;
  title: Bilingual;
  description: Bilingual;
  contributor: string;
  language: Bilingual;
  clan: Bilingual;
  date: string;
  image: string;
  access: 'public' | 'members' | 'restricted';
};

export const heritageItems: HeritageItem[] = [
  {
    id: 'h1',
    type: { en: 'Oriki', yo: 'Oríkì' },
    title: { en: 'Oriki of Oduduwa', yo: 'Oríkì Odùduwà' },
    description: {
      en: 'The praise name of Oduduwa, progenitor of the Yoruba people, recited to honour the founder of the nation.',
      yo: 'Oríkì Odùduwà, baba Yorùbá, tí a ń kọ́ láti bọ́wọ̀ fún ìdásílẹ̀ Yorùbá.',
    },
    contributor: 'Baba Onifade Awoyemi',
    language: { en: 'Yoruba', yo: 'Yorùbá' },
    clan: { en: 'Royal Lineage', yo: 'Ìran Ọba' },
    date: '2024-03-15',
    image: 'https://images.pexels.com/photos/38223531/pexels-photo-38223531.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    access: 'public',
  },
  {
    id: 'h2',
    type: { en: 'Proverb', yo: 'Òwe' },
    title: { en: 'Omo ti o ba se ise omo ni', yo: 'Omo tí ó bá ṣe iṣẹ́ ọmọ ni' },
    description: {
      en: 'A child who does good work is truly a child. A Yoruba proverb about the value of responsibility and good character.',
      yo: 'Omo tí ó bá ṣe iṣẹ́ ọmọ ni ọmọ. Òwe Yorùbá lórí iye ìṣẹ́ àti ọmọlúàbí.',
    },
    contributor: 'Iya Aduke Oyeniran',
    language: { en: 'Yoruba', yo: 'Yorùbá' },
    clan: { en: 'Iremo Quarter', yo: 'Àdúgbò Iremo' },
    date: '2024-06-20',
    image: 'https://images.pexels.com/photos/30879264/pexels-photo-30879264.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    access: 'public',
  },
  {
    id: 'h3',
    type: { en: 'Story', yo: 'Ìtàn' },
    title: { en: 'The Creation at Ife', yo: 'Ìdásílẹ̀ Ayé ní Ifẹ̀' },
    description: {
      en: 'The sacred creation story of how Olodumare sent Oduduwa to create the world at Ile-Ife, the cradle of Yoruba civilisation.',
      yo: 'Ìtàn mímọ́ bí Olódùmarè ṣe rán Odùduwà láti dá ayé ní Ilẹ̀ Ifẹ̀.',
    },
    contributor: 'Baba Ifa Aribidesi',
    language: { en: 'Yoruba', yo: 'Yorùbá' },
    clan: { en: 'Royal Lineage', yo: 'Ìran Ọba' },
    date: '2024-01-10',
    image: 'https://images.pexels.com/photos/30253011/pexels-photo-30253011.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    access: 'public',
  },
  {
    id: 'h4',
    type: { en: 'Festival', yo: 'Àjọyọ̀' },
    title: { en: 'Olojo Festival Documentation', yo: 'Ìdásílẹ̀ Àjọyọ̀ Olojo' },
    description: {
      en: 'A comprehensive documentation of the Olojo festival, including the sacred Aare crown ceremony, the Ooni\'s seclusion, and the full order of events.',
      yo: 'Ìdásílẹ̀ kíkún ti àjọyọ̀ Olojo, pẹ̀lú adé Aare àti ìpamọ́ Ooni.',
    },
    contributor: 'Palace Media Office',
    language: { en: 'Yoruba', yo: 'Yorùbá' },
    clan: { en: 'Royal Lineage', yo: 'Ìran Ọba' },
    date: '2024-10-20',
    image: 'https://images.pexels.com/photos/39638667/pexels-photo-39638667.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    access: 'members',
  },
  {
    id: 'h5',
    type: { en: 'Oriki', yo: 'Oríkì' },
    title: { en: 'Oriki of Ooni', yo: 'Oríkì Ooni' },
    description: {
      en: 'The praise name of the Ooni, recited during palace ceremonies and festivals to honour the spiritual head of the Yoruba people.',
      yo: 'Oríkì Ooni, tí a ń kọ́ ní àsìkò àjọyọ̀ láti bọ́wọ̀ fún olórí ẹ̀mí Yorùbá.',
    },
    contributor: 'Chief Modupe Olanrewaju',
    language: { en: 'Yoruba', yo: 'Yorùbá' },
    clan: { en: 'Royal Lineage', yo: 'Ìran Ọba' },
    date: '2024-02-05',
    image: 'https://images.pexels.com/photos/31876668/pexels-photo-31876668.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    access: 'restricted',
  },
  {
    id: 'h6',
    type: { en: 'Proverb', yo: 'Òwe' },
    title: { en: 'Ile la wa, ni ile a nlo si', yo: 'Ilé là ń wá, ní ilé a ń lọ sí' },
    description: {
      en: 'We are from home, and to home we return. A Yoruba proverb about the enduring bond between a person and their roots.',
      yo: 'Ilé là ń wá, ní ilé a ń lọ sí. Òwe lórí ìbáṣepọ̀ ènìyàn àti orísun rẹ̀.',
    },
    contributor: 'Baba Kofoworola Salami',
    language: { en: 'Yoruba', yo: 'Yorùbá' },
    clan: { en: 'Moore Quarter', yo: 'Àdúgbò Moore' },
    date: '2024-07-18',
    image: 'https://images.pexels.com/photos/31890403/pexels-photo-31890403.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    access: 'public',
  },
  {
    id: 'h7',
    type: { en: 'Story', yo: 'Ìtàn' },
    title: { en: 'The Moremi Legend', yo: 'Ìtàn Moremi' },
    description: {
      en: 'The heroic tale of Queen Moremi of Ile-Ife, who sacrificed to liberate her people from raiders, one of the most celebrated stories in Yoruba history.',
      yo: 'Ìtàn Ọba Binrín Moremi Ilẹ̀ Ifẹ̀, tí ó ṣẹ́ láti tú àwọn ènìyàn rẹ̀ sónù.',
    },
    contributor: 'Iya Folake Adesina',
    language: { en: 'Yoruba', yo: 'Yorùbá' },
    clan: { en: 'Royal Lineage', yo: 'Ìran Ọba' },
    date: '2024-05-12',
    image: 'https://images.pexels.com/photos/31777375/pexels-photo-31777375.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    access: 'public',
  },
  {
    id: 'h8',
    type: { en: 'Festival', yo: 'Àjọyọ̀' },
    title: { en: 'Egungun Festival Traditions', yo: 'Àṣà Àjọyọ̀ Egungun' },
    description: {
      en: 'Documentation of the Egungun masquerade festival, its spiritual significance, the order of appearance, and the role of ancestral veneration in Yoruba culture.',
      yo: 'Ìdásílẹ̀ àjọyọ̀ Egungun, òye ẹ̀mí, ìbáṣepọ̀ àti ipò bábá ní àṣà Yorùbá.',
    },
    contributor: 'Baba Ifa Aribidesi',
    language: { en: 'Yoruba', yo: 'Yorùbá' },
    clan: { en: 'Okerewe Quarter', yo: 'Àdúgbò Okerewe' },
    date: '2024-08-30',
    image: 'https://images.pexels.com/photos/38223531/pexels-photo-38223531.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    access: 'members',
  },
  {
    id: 'h9',
    type: { en: 'Oriki', yo: 'Oríkì' },
    title: { en: 'Oriki for the Children of Ife', yo: 'Oríkì fún Àwọn Ọmọ Ifẹ̀' },
    description: {
      en: 'A collection of oriki specific to the families and children of Ile-Ife, preserving the praise traditions unique to the sacred city.',
      yo: 'Àkójọ́ oríkì fún àwọn ìdílé àti ọmọ Ilẹ̀ Ifẹ̀.',
    },
    contributor: 'Iya Aduke Oyeniran',
    language: { en: 'Yoruba', yo: 'Yorùbá' },
    clan: { en: 'Iremo Quarter', yo: 'Àdúgbò Iremo' },
    date: '2024-04-22',
    image: 'https://images.pexels.com/photos/30253020/pexels-photo-30253020.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    access: 'public',
  },
];

export type LineageEntry = {
  order: number;
  name: string;
  reign: string;
  note?: string;
};

export const royalLineage: LineageEntry[] = [
  { order: 1, name: 'Oduduwa', reign: 'c. 500 CE', note: 'Progenitor of the Yoruba nation; descended from the heavens to create land at Ife.' },
  { order: 2, name: 'Ooni Obalufon Ogbogbodirin', reign: 'c. 600 CE', note: 'Son of Oduduwa; said to have reigned for an extraordinarily long time.' },
  { order: 3, name: 'Ooni Obalufon Alayemore', reign: 'c. 650 CE', note: 'Associated with the early development of Ife art and craft traditions.' },
  { order: 4, name: 'Ooni Obalufon II', reign: 'c. 700 CE', note: 'Commissioned some of the earliest known bronze castings in Ife.' },
  { order: 5, name: 'Ooni Lajamisan', reign: 'c. 1100 CE', note: 'Connected to the famous Ife terracotta and bronze heads.' },
  { order: 10, name: 'Ooni Sijuwade Adelekan Olubuse I', reign: '1890–1910' },
  { order: 20, name: 'Ooni Adesoji Aderemi', reign: '1930–1980', note: 'One of the longest-reigning Ooni; also served as Governor of Western Nigeria.' },
  { order: 35, name: 'Ooni Okunade Sijuwade Olubuse II', reign: '1980–2015', note: 'Reigned for 35 years; greatly expanded the global profile of the throne.' },
  { order: 38, name: 'Ooni Adeyeye Enitan Ogunwusi', reign: '2015–present', note: 'The 51st Ooni; known for youth empowerment and diaspora engagement.' },
];

export type Quarter = {
  name: Bilingual;
  chief: Bilingual;
};

export const quarters: Quarter[] = [
  { name: { en: 'Iremo', yo: 'Iremo' }, chief: { en: 'Lowa of Ife', yo: 'Lowa' } },
  { name: { en: 'Moore', yo: 'Moore' }, chief: { en: 'Jagun of Ife', yo: 'Jagun' } },
  { name: { en: 'Okerewe', yo: 'Okerewe' }, chief: { en: 'Ladin Ooni', yo: 'Ladin' } },
  { name: { en: 'Ilode', yo: 'Ilode' }, chief: { en: 'Erelu Ooni', yo: 'Erelu' } },
  { name: { en: 'Egbedi', yo: 'Egbedi' }, chief: { en: 'Sanmori of Ife', yo: 'Sanmori' } },
  { name: { en: 'Modakeke', yo: 'Modakeke' }, chief: { en: 'Asa of Ife', yo: 'Asa' } },
  { name: { en: 'Igbodigo', yo: 'Igbodigo' }, chief: { en: 'Jigan of Ife', yo: 'Jigan' } },
];

export const galleryImages = [
  { src: 'https://images.pexels.com/photos/38192540/pexels-photo-38192540.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Traditional palace entrance in Nigeria' },
  { src: 'https://images.pexels.com/photos/39638667/pexels-photo-39638667.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Cultural festival celebration' },
  { src: 'https://images.pexels.com/photos/30253011/pexels-photo-30253011.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Vibrant Nigerian traditional architecture' },
  { src: 'https://images.pexels.com/photos/31777375/pexels-photo-39638667.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Yoruba festival in Osogbo' },
  { src: 'https://images.pexels.com/photos/38223531/pexels-photo-38223531.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'African drummers at cultural celebration' },
  { src: 'https://images.pexels.com/photos/30253020/pexels-photo-30253020.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Men in traditional attire' },
  { src: 'https://images.pexels.com/photos/31890403/pexels-photo-31890403.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Nigerians in traditional attire at festival' },
  { src: 'https://images.pexels.com/photos/34752663/pexels-photo-34752663.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Celebration in traditional African attire' },
];
