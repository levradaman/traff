// Полные данные приложения с 45 нишами
const appData = {
  niches: {
    popular: [
      {
        id: 'psychology',
        name: 'Психология и саморазвитие',
        traffic_potential: 9.1,
        competition: 'Очень высокая',
        difficulty: 'Высокая',
        ru_platforms: ['Яндекс Дзен', 'ВКонтакте', 'Telegram'],
        usa_platforms: ['Medium', 'LinkedIn', 'TikTok'],
        income_ru: '$2K-5K/мес',
        income_usa: '$5K-15K/мес',
        detailed_analysis: 'Психологическая ниша - одна из самых востребованных. Аудитория: 65% женщины, средний возраст 32 года. Основные боли: тревожность (43%), отношения (37%), самооценка (34%). Монетизация: консультации 3-8к руб/час, курсы 15-75к руб. Сезонность: пик в январе и сентябре.'
      },
      {
        id: 'online-education',
        name: 'Онлайн-курсы и образование',
        traffic_potential: 9.5,
        competition: 'Крайне высокая',
        difficulty: 'Высокая',
        ru_platforms: ['YouTube', 'Telegram', 'ВКонтакте'],
        usa_platforms: ['YouTube', 'LinkedIn', 'Reddit'],
        income_ru: '$3K-8K/мес',
        income_usa: '$10K-30K/мес',
        detailed_analysis: 'Образовательная ниша показывает стабильный рост 15% год к году. Топ-темы 2025: AI/ML (рост 340%), Data Science (+180%), Digital Marketing (+95%). Ценообразование: мини-курсы 5-15к, полные курсы 25-200к.'
      },
      {
        id: 'fitness',
        name: 'Фитнес и здоровый образ жизни',
        traffic_potential: 8.9,
        competition: 'Очень высокая',
        difficulty: 'Средняя',
        ru_platforms: ['Instagram', 'YouTube', 'TikTok'],
        usa_platforms: ['Instagram', 'YouTube', 'TikTok'],
        income_ru: '$1K-4K/мес',
        income_usa: '$4K-12K/мес',
        detailed_analysis: 'Фитнес-ниша переживает бум домашних тренировок. Аудитория: 70% женщины 25-45 лет. Популярные направления: функциональные тренировки (+65%), йога (+43%), пилатес (+38%).'
      },
      {
        id: 'personal-finance',
        name: 'Личные финансы и инвестиции',
        traffic_potential: 9.7,
        competition: 'Крайне высокая',
        difficulty: 'Очень высокая',
        ru_platforms: ['Telegram', 'YouTube', 'Дзен'],
        usa_platforms: ['LinkedIn', 'Medium', 'YouTube'],
        income_ru: '$3K-10K/мес',
        income_usa: '$8K-30K/мес',
        detailed_analysis: 'Финансовая грамотность становится мейнстримом. Популярные темы: инвестиции в акции (43%), недвижимость (38%), криптовалюты (31%). Юридические ограничения: нельзя давать индивидуальные советы без лицензии ЦБ.'
      },
      {
        id: 'parenting',
        name: 'Материнство и воспитание детей',
        traffic_potential: 9.0,
        competition: 'Высокая',
        difficulty: 'Средняя',
        ru_platforms: ['ВКонтакте', 'Instagram', 'Telegram'],
        usa_platforms: ['Instagram', 'Pinterest', 'YouTube'],
        income_ru: '$1.5K-4K/мес',
        income_usa: '$3K-10K/мес',
        detailed_analysis: 'Родительский контент - стабильно востребованная ниша. Основная аудитория: женщины 25-40 лет (92%). Популярные темы: развитие ребенка (56%), питание (48%), детская психология (42%).'
      },
      {
        id: 'cooking',
        name: 'Кулинария и рецепты',
        traffic_potential: 8.2,
        competition: 'Высокая',
        difficulty: 'Средняя',
        ru_platforms: ['YouTube', 'ВКонтакте', 'Дзен'],
        usa_platforms: ['YouTube', 'Instagram', 'Pinterest'],
        income_ru: '$0.8K-2.5K/мес',
        income_usa: '$2K-6K/мес',
        detailed_analysis: 'Кулинарная ниша с высокой лояльностью аудитории. Популярные форматы: быстрые рецепты, здоровое питание, национальная кухня. Монетизация через партнерства с брендами продуктов.'
      },
      {
        id: 'travel',
        name: 'Путешествия и туризм',
        traffic_potential: 7.5,
        competition: 'Очень высокая',
        difficulty: 'Высокая',
        ru_platforms: ['Instagram', 'YouTube', 'Telegram'],
        usa_platforms: ['Instagram', 'YouTube', 'TikTok'],
        income_ru: '$1.5K-4K/мес',
        income_usa: '$3K-10K/мес',
        detailed_analysis: 'Туристическая ниша восстанавливается после пандемии. Тренды: экотуризм (+45%), внутренний туризм (+67%). Монетизация: туры, отели, страховки.'
      },
      {
        id: 'beauty',
        name: 'Красота и уход',
        traffic_potential: 8.6,
        competition: 'Очень высокая',
        difficulty: 'Средняя',
        ru_platforms: ['Instagram', 'TikTok', 'YouTube'],
        usa_platforms: ['Instagram', 'TikTok', 'YouTube'],
        income_ru: '$1K-3K/мес',
        income_usa: '$3K-8K/мес',
        detailed_analysis: 'Beauty-индустрия с высоким потенциалом. Популярные темы: skincare (89%), макияж (67%), anti-age (78%). Основная аудитория: женщины 18-45 лет.'
      },
      {
        id: 'diy',
        name: 'DIY и рукоделие',
        traffic_potential: 7.8,
        competition: 'Средняя',
        difficulty: 'Низкая',
        ru_platforms: ['YouTube', 'Pinterest', 'VK'],
        usa_platforms: ['YouTube', 'Pinterest', 'Instagram'],
        income_ru: '$0.5K-2K/мес',
        income_usa: '$1K-4K/мес',
        detailed_analysis: 'DIY-ниша показывает устойчивый рост. Популярные направления: декор дома, украшения, переработка. Аудитория: 78% женщины, возраст 25-55 лет.'
      },
      {
        id: 'pets',
        name: 'Домашние животные',
        traffic_potential: 8.1,
        competition: 'Высокая',
        difficulty: 'Средняя',
        ru_platforms: ['Instagram', 'YouTube', 'TikTok'],
        usa_platforms: ['Instagram', 'YouTube', 'TikTok'],
        income_ru: '$0.8K-2.5K/мес',
        income_usa: '$2K-6K/мес',
        detailed_analysis: 'Pet-контент с высоким engagement. Популярные темы: дрессировка, здоровье питомцев, забавные видео. Монетизация: корма, аксессуары, ветуслуги.'
      },
      {
        id: 'gaming',
        name: 'Игры и развлечения',
        traffic_potential: 8.9,
        competition: 'Крайне высокая',
        difficulty: 'Высокая',
        ru_platforms: ['YouTube', 'Twitch', 'VK'],
        usa_platforms: ['YouTube', 'Twitch', 'TikTok'],
        income_ru: '$2K-6K/мес',
        income_usa: '$5K-20K/мес',
        detailed_analysis: 'Игровая индустрия продолжает расти. Популярные форматы: летсплеи, обзоры, стримы. Основная аудитория: мужчины 16-35 лет (67%).'
      },
      {
        id: 'relationships',
        name: 'Отношения и знакомства',
        traffic_potential: 8.4,
        competition: 'Очень высокая',
        difficulty: 'Высокая',
        ru_platforms: ['Instagram', 'YouTube', 'Telegram'],
        usa_platforms: ['Instagram', 'TikTok', 'YouTube'],
        income_ru: '$1.5K-4K/мес',
        income_usa: '$3K-10K/мес',
        detailed_analysis: 'Тематика отношений востребована круглый год. Популярные подтемы: знакомства в интернете, семейная психология, развод. Аудитория: 60% женщины.'
      },
      {
        id: 'career',
        name: 'Карьера и поиск работы',
        traffic_potential: 8.3,
        competition: 'Высокая',
        difficulty: 'Средняя',
        ru_platforms: ['LinkedIn', 'Telegram', 'VK'],
        usa_platforms: ['LinkedIn', 'Medium', 'Twitter'],
        income_ru: '$2K-5K/мес',
        income_usa: '$4K-12K/мес',
        detailed_analysis: 'Карьерная тематика особенно актуальна среди миллениалов. Популярные темы: удаленная работа, смена профессии, развитие навыков.'
      },
      {
        id: 'motivation',
        name: 'Мотивация и успех',
        traffic_potential: 8.0,
        competition: 'Очень высокая',
        difficulty: 'Высокая',
        ru_platforms: ['Instagram', 'YouTube', 'Telegram'],
        usa_platforms: ['Instagram', 'YouTube', 'LinkedIn'],
        income_ru: '$1K-3K/мес',
        income_usa: '$3K-8K/мес',
        detailed_analysis: 'Мотивационная ниша с высокой конкуренцией. Ключевые темы: утренние привычки, продуктивность, достижение целей. Требует харизматичной подачи.'
      },
      {
        id: 'lifehacks',
        name: 'Лайфхаки и полезные советы',
        traffic_potential: 7.9,
        competition: 'Высокая',
        difficulty: 'Средняя',
        ru_platforms: ['TikTok', 'YouTube', 'VK'],
        usa_platforms: ['TikTok', 'YouTube', 'Instagram'],
        income_ru: '$0.8K-2K/мес',
        income_usa: '$2K-5K/мес',
        detailed_analysis: 'Лайфхаки популярны в формате коротких видео. Темы: уборка, организация, экономия времени. Высокая виральность контента.'
      }
    ],
    soft: [
      {
        id: 'astrology',
        name: 'Астрология и эзотерика',
        traffic_potential: 8.3,
        competition: 'Высокая',
        difficulty: 'Средняя',
        ru_platforms: ['Instagram', 'Telegram', 'VK'],
        usa_platforms: ['Instagram', 'TikTok', 'Pinterest'],
        income_ru: '$1K-3K/мес',
        income_usa: '$2K-8K/мес',
        detailed_analysis: 'Эзотерическая ниша показывает устойчивый рост. Аудитория: 87% женщины, возраст 20-50 лет. Популярные направления: астрология (45%), таро (38%), нумерология (25%).'
      },
      {
        id: 'minimalism',
        name: 'Минимализм и осознанное потребление',
        traffic_potential: 7.8,
        competition: 'Средняя',
        difficulty: 'Средняя',
        ru_platforms: ['Instagram', 'YouTube', 'Medium'],
        usa_platforms: ['YouTube', 'Pinterest', 'Medium'],
        income_ru: '$0.8K-2.5K/мес',
        income_usa: '$2K-6K/мес',
        detailed_analysis: 'Минимализм набирает популярность среди urban профессионалов. Тренды 2025: цифровой минимализм (+89%), устойчивая мода (+156%).'
      },
      {
        id: 'vintage',
        name: 'Винтаж и антиквариат',
        traffic_potential: 7.2,
        competition: 'Низкая',
        difficulty: 'Высокая',
        ru_platforms: ['VK', 'Instagram', 'YouTube'],
        usa_platforms: ['Instagram', 'Pinterest', 'eBay'],
        income_ru: '$1K-4K/мес',
        income_usa: '$3K-10K/мес',
        detailed_analysis: 'Винтажная ниша для состоятельных коллекционеров. Популярные категории: советский винтаж (+78%), mid-century modern (+45%).'
      },
      {
        id: 'aromatherapy',
        name: 'Ароматерапия и wellness',
        traffic_potential: 7.5,
        competition: 'Средняя',
        difficulty: 'Средняя',
        ru_platforms: ['Instagram', 'YouTube'],
        usa_platforms: ['Instagram', 'Pinterest'],
        income_ru: '$0.7K-2K/мес',
        income_usa: '$2K-5K/мес',
        detailed_analysis: 'Wellness-тренд продолжает расти. Популярные продукты: эфирные масла, свечи, диффузоры. Основная аудитория: женщины 25-45 лет.'
      },
      {
        id: 'fengshui',
        name: 'Фэн-шуй и гармония дома',
        traffic_potential: 7.0,
        competition: 'Низкая',
        difficulty: 'Средняя',
        ru_platforms: ['Instagram', 'YouTube'],
        usa_platforms: ['Pinterest', 'Instagram'],
        income_ru: '$0.5K-1.5K/мес',
        income_usa: '$1K-3K/мес',
        detailed_analysis: 'Фэн-шуй ниша с узкой но преданной аудиторией. Популярные темы: организация пространства, энергетика дома, растения в интерьере.'
      },
      {
        id: 'creative-writing',
        name: 'Творческое письмо',
        traffic_potential: 7.3,
        competition: 'Средняя',
        difficulty: 'Высокая',
        ru_platforms: ['Medium', 'VK', 'Telegram'],
        usa_platforms: ['Medium', 'Substack'],
        income_ru: '$0.5K-2K/мес',
        income_usa: '$1K-5K/мес',
        detailed_analysis: 'Писательская ниша для творческих людей. Монетизация: курсы письма, редактирование, публикация книг.'
      },
      {
        id: 'meditation',
        name: 'Медитация и майндфулнес',
        traffic_potential: 8.1,
        competition: 'Высокая',
        difficulty: 'Средняя',
        ru_platforms: ['YouTube', 'Instagram'],
        usa_platforms: ['YouTube', 'Instagram', 'Spotify'],
        income_ru: '$1K-3K/мес',
        income_usa: '$3K-8K/мес',
        detailed_analysis: 'Медитационная ниша растет на 25% ежегодно. Популярные форматы: аудио-медитации, видео-уроки, приложения.'
      },
      {
        id: 'gardening',
        name: 'Садоводство и огород',
        traffic_potential: 7.7,
        competition: 'Средняя',
        difficulty: 'Низкая',
        ru_platforms: ['YouTube', 'VK', 'Дзен'],
        usa_platforms: ['YouTube', 'Pinterest'],
        income_ru: '$0.6K-2K/мес',
        income_usa: '$1.5K-4K/мес',
        detailed_analysis: 'Садоводческая ниша особенно популярна весной-летом. Аудитория: люди 35+ лет, владельцы дач и частных домов.'
      },
      {
        id: 'photography',
        name: 'Фотография как хобби',
        traffic_potential: 8.0,
        competition: 'Очень высокая',
        difficulty: 'Высокая',
        ru_platforms: ['Instagram', 'YouTube'],
        usa_platforms: ['Instagram', 'YouTube', 'Flickr'],
        income_ru: '$1K-3K/мес',
        income_usa: '$2K-6K/мес',
        detailed_analysis: 'Фото-ниша с высокой конкуренцией. Популярные направления: портретная съемка, пейзажи, обработка в Lightroom.'
      },
      {
        id: 'music',
        name: 'Музыка и инструменты',
        traffic_potential: 8.2,
        competition: 'Высокая',
        difficulty: 'Высокая',
        ru_platforms: ['YouTube', 'VK'],
        usa_platforms: ['YouTube', 'Spotify'],
        income_ru: '$1K-4K/мес',
        income_usa: '$3K-10K/мес',
        detailed_analysis: 'Музыкальная ниша требует таланта и оборудования. Монетизация: уроки музыки, продажа битов, концерты.'
      },
      {
        id: 'collecting',
        name: 'Коллекционирование',
        traffic_potential: 6.8,
        competition: 'Низкая',
        difficulty: 'Средняя',
        ru_platforms: ['VK', 'YouTube'],
        usa_platforms: ['YouTube', 'Reddit'],
        income_ru: '$0.5K-2K/мес',
        income_usa: '$1K-4K/мес',
        detailed_analysis: 'Коллекционерская ниша для энтузиастов. Популярные направления: монеты, марки, фигурки, винил.'
      },
      {
        id: 'dancing',
        name: 'Танцы и движение',
        traffic_potential: 7.9,
        competition: 'Высокая',
        difficulty: 'Средняя',
        ru_platforms: ['TikTok', 'Instagram', 'YouTube'],
        usa_platforms: ['TikTok', 'Instagram', 'YouTube'],
        income_ru: '$0.8K-2.5K/мес',
        income_usa: '$2K-6K/мес',
        detailed_analysis: 'Танцевальная ниша популярна в TikTok. Основная аудитория: молодежь 16-25 лет. Монетизация: уроки, челленджи.'
      },
      {
        id: 'movies',
        name: 'Кино и сериалы',
        traffic_potential: 8.4,
        competition: 'Очень высокая',
        difficulty: 'Средняя',
        ru_platforms: ['YouTube', 'VK', 'Telegram'],
        usa_platforms: ['YouTube', 'Twitter', 'Reddit'],
        income_ru: '$1K-3K/мес',
        income_usa: '$3K-8K/мес',
        detailed_analysis: 'Киноблогинг - популярная ниша. Форматы: обзоры, рецензии, топы. Монетизация через партнерки кинотеатров.'
      },
      {
        id: 'books',
        name: 'Книги и чтение',
        traffic_potential: 7.6,
        competition: 'Средняя',
        difficulty: 'Средняя',
        ru_platforms: ['Instagram', 'YouTube', 'VK'],
        usa_platforms: ['Instagram', 'YouTube', 'Goodreads'],
        income_ru: '$0.6K-2K/мес',
        income_usa: '$1.5K-4K/мес',
        detailed_analysis: 'Книжная ниша с преданной аудиторией. Популярные форматы: обзоры книг, буктуб, reading challenge.'
      },
      {
        id: 'style',
        name: 'Стиль и имидж',
        traffic_potential: 8.5,
        competition: 'Очень высокая',
        difficulty: 'Высокая',
        ru_platforms: ['Instagram', 'YouTube', 'Pinterest'],
        usa_platforms: ['Instagram', 'YouTube', 'Pinterest'],
        income_ru: '$1.5K-4K/мес',
        income_usa: '$4K-12K/мес',
        detailed_analysis: 'Fashion-ниша с высоким потенциалом. Популярные темы: капсульный гардероб, стиль на бюджете, личный стилист.'
      }
    ],
    hard: [
      {
        id: 'legal',
        name: 'Юридические услуги',
        traffic_potential: 9.2,
        competition: 'Высокая',
        difficulty: 'Крайне высокая',
        ru_platforms: ['LinkedIn', 'VK', 'Дзен'],
        usa_platforms: ['LinkedIn', 'Medium'],
        income_ru: '$3K-8K/мес',
        income_usa: '$8K-25K/мес',
        detailed_analysis: 'Юридическая ниша требует глубокой экспертизы. Специализации: корпоративное право (500к-2млн руб), семейное право (50к-500к руб).'
      },
      {
        id: 'insurance',
        name: 'Страхование и управление рисками',
        traffic_potential: 8.8,
        competition: 'Средняя',
        difficulty: 'Очень высокая',
        ru_platforms: ['LinkedIn', 'VK', 'Telegram'],
        usa_platforms: ['LinkedIn', 'Medium'],
        income_ru: '$3K-10K/мес',
        income_usa: '$8K-30K/мес',
        detailed_analysis: 'Страховая ниша переживает цифровую трансформацию. Актуальные продукты: кибер-страхование (+145%), страхование от катастроф (+67%).'
      },
      {
        id: 'accounting',
        name: 'Налоги и бухгалтерия',
        traffic_potential: 8.5,
        competition: 'Средняя',
        difficulty: 'Очень высокая',
        ru_platforms: ['LinkedIn', 'Дзен'],
        usa_platforms: ['LinkedIn', 'YouTube'],
        income_ru: '$2K-6K/мес',
        income_usa: '$5K-15K/мес',
        detailed_analysis: 'Бухгалтерская ниша с сезонными пиками. Популярные темы: налоговые изменения, автоматизация учета, 1С программирование.'
      },
      {
        id: 'medicine',
        name: 'Медицина и фармация',
        traffic_potential: 9.0,
        competition: 'Очень высокая',
        difficulty: 'Крайне высокая',
        ru_platforms: ['YouTube', 'VK'],
        usa_platforms: ['YouTube', 'LinkedIn'],
        income_ru: '$3K-12K/мес',
        income_usa: '$10K-40K/мес',
        detailed_analysis: 'Медицинская ниша требует лицензии и осторожности. Популярные темы: профилактика, здоровый образ жизни, медицинская техника.'
      },
      {
        id: 'banking',
        name: 'Банки и кредиты',
        traffic_potential: 8.9,
        competition: 'Высокая',
        difficulty: 'Очень высокая',
        ru_platforms: ['LinkedIn', 'Telegram'],
        usa_platforms: ['LinkedIn', 'Twitter'],
        income_ru: '$4K-15K/мес',
        income_usa: '$10K-50K/мес',
        detailed_analysis: 'Банковская сфера с высокими требованиями к экспертизе. Темы: цифровые банки, кредитование МСБ, регулирование.'
      },
      {
        id: 'blockchain',
        name: 'Блокчейн и криптовалюты',
        traffic_potential: 8.9,
        competition: 'Очень высокая',
        difficulty: 'Крайне высокая',
        ru_platforms: ['Telegram', 'YouTube'],
        usa_platforms: ['Twitter', 'Reddit', 'Medium'],
        income_ru: '$3K-20K/мес',
        income_usa: '$8K-50K/мес',
        detailed_analysis: 'Криптовалютная ниша с высокой волатильностью доходов. Юридические риски: строгое регулирование в некоторых странах.'
      },
      {
        id: 'international-trade',
        name: 'Международная торговля',
        traffic_potential: 8.1,
        competition: 'Средняя',
        difficulty: 'Очень высокая',
        ru_platforms: ['LinkedIn', 'Telegram'],
        usa_platforms: ['LinkedIn', 'Trade publications'],
        income_ru: '$5K-20K/мес',
        income_usa: '$15K-60K/мес',
        detailed_analysis: 'Внешнеторговая ниша для профессионалов. Темы: таможенное дело, логистика, валютное регулирование.'
      },
      {
        id: 'industrial-safety',
        name: 'Промышленная безопасность',
        traffic_potential: 7.8,
        competition: 'Низкая',
        difficulty: 'Очень высокая',
        ru_platforms: ['LinkedIn', 'отраслевые порталы'],
        usa_platforms: ['LinkedIn', 'Industry forums'],
        income_ru: '$4K-12K/мес',
        income_usa: '$10K-30K/мес',
        detailed_analysis: 'Промбезопасность - узкоспециализированная ниша. Требует сертификации и многолетнего опыта в отрасли.'
      },
      {
        id: 'energy',
        name: 'Энергетика и возобновляемые источники',
        traffic_potential: 8.6,
        competition: 'Средняя',
        difficulty: 'Крайне высокая',
        ru_platforms: ['LinkedIn', 'отраслевые СМИ'],
        usa_platforms: ['LinkedIn', 'Medium'],
        income_ru: '$5K-18K/мес',
        income_usa: '$12K-45K/мес',
        detailed_analysis: 'Энергетическая ниша на подъеме. Популярные темы: солнечная энергетика, ветрогенерация, энергоэффективность.'
      },
      {
        id: 'biotech',
        name: 'Биотехнологии и фармация',
        traffic_potential: 8.7,
        competition: 'Низкая',
        difficulty: 'Крайне высокая',
        ru_platforms: ['LinkedIn', 'научные журналы'],
        usa_platforms: ['LinkedIn', 'ResearchGate'],
        income_ru: '$6K-25K/мес',
        income_usa: '$15K-70K/мес',
        detailed_analysis: 'Биотех ниша для ученых и инженеров. Требует PhD или многолетний опыт в R&D. Высокооплачиваемое консультирование.'
      },
      {
        id: 'aerospace',
        name: 'Аэрокосмическая отрасль',
        traffic_potential: 7.9,
        competition: 'Очень низкая',
        difficulty: 'Крайне высокая',
        ru_platforms: ['LinkedIn', 'отраслевые форумы'],
        usa_platforms: ['LinkedIn', 'IEEE'],
        income_ru: '$8K-30K/мес',
        income_usa: '$20K-80K/мес',
        detailed_analysis: 'Аэрокосмическая ниша для инженеров высшей квалификации. Требует допуски и многолетний опыт.'
      },
      {
        id: 'logistics',
        name: 'Логистика и цепи поставок',
        traffic_potential: 8.4,
        competition: 'Средняя',
        difficulty: 'Высокая',
        ru_platforms: ['LinkedIn', 'Telegram'],
        usa_platforms: ['LinkedIn', 'Supply Chain forums'],
        income_ru: '$3K-10K/мес',
        income_usa: '$8K-25K/мес',
        detailed_analysis: 'Логистическая ниша актуальна после пандемии. Темы: цифровизация, устойчивые цепи поставок, автоматизация.'
      },
      {
        id: 'cybersecurity',
        name: 'Кибербезопасность',
        traffic_potential: 9.4,
        competition: 'Средняя',
        difficulty: 'Крайне высокая',
        ru_platforms: ['Telegram', 'LinkedIn', 'YouTube'],
        usa_platforms: ['LinkedIn', 'Reddit', 'Medium'],
        income_ru: '$5K-15K/мес',
        income_usa: '$10K-50K/мес',
        detailed_analysis: 'Кибербез - самая быстрорастущая ниша. Требует сертификации CISSP, CEH. Высокий спрос на экспертов по защите от ransomware.'
      },
      {
        id: 'ip',
        name: 'Интеллектуальная собственность',
        traffic_potential: 8.0,
        competition: 'Низкая',
        difficulty: 'Крайне высокая',
        ru_platforms: ['LinkedIn', 'юридические порталы'],
        usa_platforms: ['LinkedIn', 'IP law publications'],
        income_ru: '$4K-15K/мес',
        income_usa: '$12K-40K/мес',
        detailed_analysis: 'IP-право требует специального образования. Популярные темы: патентование, товарные знаки, авторские права в digital.'
      },
      {
        id: 'venture-capital',
        name: 'Венчурный капитал и стартапы',
        traffic_potential: 8.8,
        competition: 'Высокая',
        difficulty: 'Крайне высокая',
        ru_platforms: ['LinkedIn', 'Telegram'],
        usa_platforms: ['LinkedIn', 'Medium', 'Twitter'],
        income_ru: '$10K-50K/мес',
        income_usa: '$25K-200K/мес',
        detailed_analysis: 'VC-ниша для опытных инвесторов. Требует глубокое понимание рынков, deal flow, due diligence. Очень высокие доходы при успехе.'
      }
    ]
  },
  platforms: [
    {
      name: 'Яндекс Дзен',
      region: 'RU',
      audience: '75 млн',
      traffic_potential: 9.5,
      engagement_rate: '5.2%',
      blocked: false
    },
    {
      name: 'Telegram',
      region: 'Global',
      audience: '900 млн',
      traffic_potential: 9.8,
      engagement_rate: '6.8%',
      blocked: false
    },
    {
      name: 'ВКонтакте',
      region: 'RU',
      audience: '100 млн',
      traffic_potential: 8.2,
      engagement_rate: '3.8%',
      blocked: false
    },
    {
      name: 'YouTube',
      region: 'Global',
      audience: '2.7 млрд',
      traffic_potential: 9.8,
      engagement_rate: '4.2%',
      blocked: false
    },
    {
      name: 'TikTok',
      region: 'Global',
      audience: '1 млрд',
      traffic_potential: 9.3,
      engagement_rate: '5.96%',
      blocked: false
    },
    {
      name: 'Instagram',
      region: 'Global',
      audience: '2 млрд',
      traffic_potential: 8.8,
      engagement_rate: '1.22%',
      blocked: true
    },
    {
      name: 'LinkedIn',
      region: 'Global',
      audience: '900 млн',
      traffic_potential: 7.8,
      engagement_rate: '2.4%',
      blocked: false
    },
    {
      name: 'Twitter/X',
      region: 'Global',
      audience: '550 млн',
      traffic_potential: 7.5,
      engagement_rate: '0.9%',
      blocked: false
    }
  ],
  laws: {
    russia: {
      title: 'Россия: Федеральное законодательство 2025',
      content: `РОССИЙСКАЯ ФЕДЕРАЦИЯ - ПОЛНЫЙ ПРАВОВОЙ АНАЛИЗ 2025

🚨 НОВЫЕ ШТРАФЫ С 01.09.2025 🚨

ФЕДЕРАЛЬНЫЙ ЗАКОН № 72-ФЗ ОТ 14.07.2025
"О внесении изменений в Кодекс Российской Федерации об административных правонарушениях"

СТАТЬЯ 13.53.1 КоАП РФ - Реклама в заблокированных информационных ресурсах

ОПИСАНИЕ ЗАКОНА:
Данный закон вступил в силу 1 сентября 2025 года и кардинально изменил правила рекламы в социальных сетях для российских пользователей и компаний. Закон направлен на ограничение рекламной активности в заблокированных на территории РФ социальных платформах, включая Instagram и Facebook, которые принадлежат компании Meta, признанной экстремистской организацией.

ШТРАФЫ:

Граждане:
• 2,000-2,500 рублей за каждое нарушение
• Удвоение штрафа при повторном нарушении в течение года
• Примеры нарушений:
  - Размещение поста с промокодом в Instagram Stories
  - Реклама товаров через Facebook с указанием российских контактов
  - Скрытая реклама в постах без соответствующих пометок

Индивидуальные предприниматели:
• 4,000-20,000 рублей
• Отягчающие обстоятельства:
  - Систематическое нарушение (более 3 случаев в месяц)
  - Реклама запрещенных товаров или услуг
  - Использование ботов для массового размещения рекламы

Юридические лица:
• 100,000-500,000 рублей за каждое нарушение
• Дополнительные санкции:
  - Блокировка корпоративных аккаунтов
  - Внесение в реестр нарушителей
  - Ограничения на участие в госзакупках

ЧТО СЧИТАЕТСЯ НАРУШЕНИЕМ:
• Любая реклама товаров или услуг в Instagram, Facebook, WhatsApp Business
• Партнерские программы и affiliate ссылки в заблокированных соцсетях
• Промокоды и скидочные предложения
• Размещение QR-кодов, ведущих на заблокированные платформы
• Интеграция виджетов социальных сетей на российских сайтах
• Реклама мероприятий с указанием страниц в заблокированных соцсетях

МЕХАНИЗМ ВЫЯВЛЕНИЯ:
• Автоматический мониторинг контента через системы Роскомнадзора
• Анализ жалоб граждан и организаций
• Сотрудничество с операторами связи для отслеживания трафика
• Использование технологий машинного обучения для выявления рекламного контента

ЗАКОН О ЗАПРЕТЕ РЕКЛАМЫ VPN-СЕРВИСОВ
Статья 14.3.1 КоАП РФ
Дата вступления в силу: 01.07.2025

ОПИСАНИЕ:
Закон устанавливает административную ответственность за рекламу средств обхода блокировок, включая VPN-сервисы, прокси-серверы, анонимайзеры и другие технические средства, позволяющие получить доступ к заблокированным в России интернет-ресурсам.

ШТРАФЫ:
• Физические лица: 50,000-80,000 рублей
• Должностные лица: 80,000-150,000 рублей
• Юридические лица: 200,000-500,000 рублей (до 1,000,000 при повторном нарушении)

ЗАПРЕЩЕННЫЕ ДЕЙСТВИЯ:
• Прямая реклама VPN-сервисов в любых СМИ
• Спонсорство контента с упоминанием способов обхода блокировок
• Размещение affiliate ссылок на VPN-провайдеров
• Обучающий контент по настройке средств обхода блокировок

РЕГИСТРАЦИЯ БЛОГЕРОВ

Пороговое значение: 10,000+ подписчиков

ТРЕБОВАНИЯ:
• Уведомление Роскомнадзора о ведении блога в течение 30 дней
• Указание достоверной информации о себе
• Соблюдение требований по маркировке рекламного контента
• Ведение реестра рекламных материалов

ШТРАФЫ ДЛЯ БЛОГЕРОВ:
• Неуведомление о регистрации: 50,000-100,000 рублей
• Предоставление ложной информации: 100,000-300,000 рублей
• Нарушения рекламного законодательства: 200,000-1,000,000 рублей

12 ЗАПРЕЩЕННЫХ ТИПОВ КОНТЕНТА:

1. Призывы к экстремистской деятельности
   • Уголовная ответственность до 6 лет лишения свободы
   • Примеры: призывы к терроризму, разжигание межнациональной розни

2. Пропаганда наркотических средств
   • 100,000-500,000 рублей + блокировка аккаунта
   • Примеры: реклама наркотиков, инструкции по изготовлению

3. Недостоверная общественно значимая информация
   • 30,000-100,000 рублей за первое нарушение
   • Примеры: фейки о пандемии, ложная информация о выборах

4. Дискредитация Вооруженных сил РФ
   • 30,000-50,000 рублей (граждане), до 1,000,000 рублей (юрлица)

5. Призывы к санкциям против России
   • 30,000-50,000 рублей (граждане), до 1,000,000 рублей (юрлица)

6. Пропаганда нетрадиционных сексуальных отношений
   • 50,000-100,000 рублей (граждане), до 4,000,000 рублей (юрлица)

7. Распространение порнографии
   • 25,000-50,000 рублей + блокировка контента

8. Незаконная реклама лекарственных средств
   • 20,000-40,000 рублей (граждане), до 800,000 рублей (юрлица)

9. Нарушение авторских прав
   • 10,000-20,000 рублей + компенсация правообладателю

10. Разглашение персональных данных
    • 15,000-75,000 рублей согласно ФЗ-152

11. Призывы к несанкционированным митингам
    • 20,000-50,000 рублей

12. Реклама финансовых пирамид
    • 50,000-1,000,000 рублей в зависимости от ущерба

ФЕДЕРАЛЬНЫЙ ЗАКОН № 152-ФЗ "О ПЕРСОНАЛЬНЫХ ДАННЫХ"

ОСНОВНЫЕ ТРЕБОВАНИЯ:
• Получение согласия на обработку персональных данных
• Уведомление Роскомнадзора об обработке ПДн
• Локализация данных российских граждан на территории РФ
• Назначение ответственного за обработку ПДн

ШТРАФЫ:
• Нарушение требований к обработке: 15,000-75,000 рублей (граждане), до 20,000,000 рублей (юрлица)
• Нелокализация данных: 6,000,000-18,000,000 рублей

КоАП РФ - ОСНОВНЫЕ СТАТЬИ ДЛЯ БЛОГЕРОВ:

Статья 13.15 - Злоупотребление свободой массовой информации
• 3,000-5,000 рублей (граждане)
• 30,000-50,000 рублей (должностные лица)
• 60,000-1,000,000 рублей (юрлица)

Статья 20.29 - Производство и распространение экстремистских материалов
• 1,000-3,000 рублей с конфискацией или административный арест до 15 суток

УГОЛОВНЫЙ КОДЕКС РФ - КРИТИЧЕСКИЕ СТАТЬИ:

Статья 282 - Возбуждение ненависти либо вражды
• Штраф до 300,000 рублей или лишение свободы до 2 лет

Статья 205.2 - Публичные призывы к осуществлению террористической деятельности
• Лишение свободы от 2 до 5 лет

Статья 280 - Публичные призывы к осуществлению экстремистской деятельности
• Штраф до 300,000 рублей или лишение свободы до 3 лет

ПРАКТИЧЕСКИЕ РЕКОМЕНДАЦИИ:

1. ВСЕГДА маркируйте рекламный контент #реклама #ad
2. ИЗБЕГАЙТЕ политических тем без экспертизы
3. ПРОВЕРЯЙТЕ факты перед публикацией
4. ПОЛУЧАЙТЕ согласие на использование изображений людей
5. ВЕДИТЕ учет рекламных публикаций
6. КОНСУЛЬТИРУЙТЕСЬ с юристами при сомнениях

КОНТАКТЫ ДЛЯ СПРАВОК:
• Роскомнадзор: 8-800-100-8-111
• Горячая линия по блогерам: blogers@rkn.gov.ru
• Консультации по ПДн: pd@rkn.gov.ru

Данная информация актуальна на 03.09.2025. Следите за обновлениями законодательства.`
    },
    usa: {
      title: 'США: FTC Guidelines & Digital Laws 2025',
      content: `UNITED STATES - COMPLETE LEGAL FRAMEWORK 2025

FTC ENDORSEMENT GUIDELINES 2025
Updated: January 15, 2025
Penalty: $51,744 per violation

KEY REQUIREMENTS:
• Clear and conspicuous disclosure of sponsored content
• Use of #ad, #sponsored, or similar clear indicators
• Disclosure must be in the same language as the content
• Video content must include both visual and audible disclosure
• Disclosure must be visible without scrolling or clicking

2025 UPDATES:
• AI-generated content must be clearly labeled
• Influencer networks are jointly liable with individual creators
• Retroactive enforcement up to 5 years for undisclosed partnerships
• Platform responsibility for systematic disclosure violations

ENFORCEMENT CASES 2024:
• Google fined $170M for undisclosed YouTube ads targeting children
• TikTok creators network fined $2.3M for systematic disclosure violations
• Fashion influencer fined $155K for undisclosed brand partnerships

COPPA (Children's Online Privacy Protection Act)
Updated: March 2025

NEW REQUIREMENTS:
• Age verification for users under 13
• Parental consent for data collection
• Limited data collection from children
• Special protections for educational content

PENALTIES:
• Up to $46,517 per child affected
• Class action lawsuit exposure
• Platform suspension possible

CALIFORNIA CONSUMER PRIVACY ACT (CCPA) 2025

INFLUENCER REQUIREMENTS:
• Disclose data collection practices
• Provide opt-out mechanisms for California residents
• Data deletion rights upon request
• Third-party data sharing transparency

PENALTIES:
• $2,500 per unintentional violation
• $7,500 per intentional violation
• Private right of action for data breaches

FIRST AMENDMENT CONSIDERATIONS:

PROTECTED SPEECH:
• Opinion and commentary
• Parody and satire
• Political speech
• Artistic expression

NON-PROTECTED SPEECH:
• Direct incitement to violence
• True threats
• Defamation with actual malice
• Obscenity

STATE-SPECIFIC LAWS:

TEXAS:
• Social media censorship law (HB 20)
• Content moderation restrictions
• Platform liability for removal

FLORIDA:
• Stop Social Media Censorship Act
• Political candidate protection
• Disclosure requirements for content policies

NEW YORK:
• Child data protection act
• Social media addiction studies mandate
• Platform algorithm transparency

SECTION 230 IMPLICATIONS:

CURRENT PROTECTIONS:
• Platform immunity for user-generated content
• Good faith content moderation protection
• Third-party information liability shield

PROPOSED CHANGES:
• Smaller platform exemptions
• Enhanced transparency requirements
• Algorithmic amplification accountability

PRACTICAL COMPLIANCE GUIDE:

FOR CONTENT CREATORS:
1. Always disclose material connections
2. Use clear, unambiguous language
3. Place disclosures prominently
4. Verify sponsor claims before endorsing
5. Keep records of all partnerships

FOR BRANDS:
1. Educate influencer partners
2. Monitor compliance regularly
3. Include FTC compliance in contracts
4. Document training and guidelines
5. Implement compliance verification systems

INTERNATIONAL IMPLICATIONS:
• Cross-border data transfer restrictions
• Conflicts with other jurisdictions
• Platform-specific compliance requirements
• Varying penalty structures globally

This information is current as of September 3, 2025. Monitor for legislative updates.`
    },
    eu: {
      title: 'ЕС: Digital Services Act & GDPR',
      content: `EUROPEAN UNION - DIGITAL SERVICES ACT & GDPR 2025

DIGITAL SERVICES ACT (DSA)
Effective: February 17, 2024

PLATFORM OBLIGATIONS:

Very Large Online Platforms (VLOPs):
• Risk assessment and mitigation
• External auditing requirements
• Algorithmic transparency
• Crisis response mechanisms

Content Moderation:
• Clear terms of service
• Appeals processes
• Transparency reporting
• Notice and action procedures

USER RIGHTS:
• Content recommendation transparency
• Opt-out of profiling
• Clear complaint mechanisms
• Independent dispute resolution

PENALTIES:
• Up to 6% of global annual turnover
• Periodic penalty payments
• Platform suspension possible
• Individual fines up to €50M

GDPR (General Data Protection Regulation)
Updated enforcement guidance 2025

KEY PRINCIPLES:
• Lawfulness, fairness, transparency
• Purpose limitation
• Data minimization
• Accuracy requirements
• Storage limitation
• Integrity and confidentiality

CONTENT CREATOR OBLIGATIONS:

Data Processing:
• Legal basis for processing subscriber data
• Privacy notices in clear language
• Consent mechanisms for marketing
• Data subject rights implementation

Special Categories:
• Explicit consent for sensitive data
• Enhanced protections for children
• Biometric data restrictions
• Health data safeguards

PENALTIES:
• Up to €20M or 4% of global turnover
• Administrative fines for smaller violations
• Compensation for damages
• Processing bans possible

INFLUENCER-SPECIFIC REQUIREMENTS:

DISCLOSURE OBLIGATIONS:
• Data collection transparency
• Third-party data sharing disclosure
• Cookie and tracking technology notices
• Cross-border transfer notifications

CONSENT MECHANISMS:
• Clear opt-in for email marketing
• Separate consent for different purposes
• Easy withdrawal mechanisms
• Age verification for minors

COUNTRY-SPECIFIC IMPLEMENTATIONS:

GERMANY:
• Network Enforcement Act (NetzDG)
• Hate speech removal within 24 hours
• Transparency reporting requirements
• German language support mandatory

FRANCE:
• Digital Republic Act provisions
• Right to explanation for algorithms
• Platform liability for illegal content
• Cultural content quotas

ITALY:
• Agcom content moderation rules
• Italian language customer support
• Local representative requirements
• Cultural sensitivity guidelines

PRACTICAL COMPLIANCE CHECKLIST:

TECHNICAL MEASURES:
□ Privacy by design implementation
□ Data encryption in transit and rest
□ Regular security assessments
□ Incident response procedures
□ Data backup and recovery plans

LEGAL MEASURES:
□ Updated privacy policies
□ Cookie consent banners
□ Data processing agreements
□ Legitimate interest assessments
□ Data protection impact assessments

OPERATIONAL MEASURES:
□ Staff training on data protection
□ Regular compliance audits
□ Vendor due diligence
□ Cross-border transfer safeguards
□ Data subject request procedures

ENFORCEMENT TRENDS 2025:

MAJOR FINES:
• Meta: €1.2B for data transfers
• Google: €90M for consent violations
• TikTok: €345M for children's data
• Amazon: €746M for tracking practices

EMERGING ISSUES:
• AI system transparency
• Deepfake content labeling
• Algorithmic bias prevention
• Cross-platform data portability

UPCOMING LEGISLATION:
• AI Act implementation (2025)
• Digital Markets Act expansion
• ePrivacy Regulation finalization
• Platform Worker Directive

This information reflects EU law as of September 2025.`
    },
    china: {
      title: 'Китай: Cybersecurity Law & Social Credit',
      content: `PEOPLE'S REPUBLIC OF CHINA - CYBERSECURITY & SOCIAL MEDIA LAWS 2025

CYBERSECURITY LAW (网络安全法)
Effective since June 1, 2017, Updated 2025

CORE PRINCIPLES:
• Network sovereignty
• Data localization requirements
• Critical information infrastructure protection
• Personal information protection

CONTENT PLATFORM OBLIGATIONS:

Data Localization:
• Chinese user data must be stored in China
• Cross-border transfer requires approval
• Government access upon request
• Regular security assessments mandatory

Content Monitoring:
• Real-time content scanning
• Prohibited content removal
• User identity verification
• Government reporting requirements

PENALTIES:
• Business suspension or closure
• Fines up to 10% of annual revenue
• Criminal liability for executives
• Loss of business licenses

SOCIAL CREDIT SYSTEM (社会信用体系)
National implementation 2025

IMPACT ON CONTENT CREATORS:

Positive Behaviors:
• Promoting Chinese culture
• Educational content
• Charity work documentation
• Innovation and entrepreneurship

Negative Behaviors:
• Spreading rumors or false information
• Violating community guidelines
• Inappropriate content
• Failure to comply with regulations

CONSEQUENCES:
• Travel restrictions
• Banking limitations
• Education restrictions
• Business permit denials

PERSONAL INFORMATION PROTECTION LAW (PIPL)
Effective: November 1, 2021, Updated 2025

KEY REQUIREMENTS:

Consent Mechanisms:
• Clear and specific consent
• Separate consent for different purposes
• Easy withdrawal mechanisms
• Regular consent renewals

Cross-border Transfers:
• Government approval required
• Data protection adequacy assessments
• Binding corporate rules
• Standard contractual clauses

PENALTIES:
• Fines up to ¥50M or 5% of annual revenue
• Business suspension
• Criminal liability
• Confiscation of illegal gains

ALGORITHM RECOMMENDATION MANAGEMENT PROVISIONS
Effective: March 1, 2022

TRANSPARENCY REQUIREMENTS:
• Algorithm logic disclosure
• User control mechanisms
• Discrimination prevention
• Appeals processes

PROHIBITED ACTIVITIES:
• Monopolistic practices
• Unfair competition
• Addiction-inducing algorithms
• Minor-targeting restrictions

ANTI-MONOPOLY LAW UPDATES 2025

PLATFORM REGULATIONS:
• Market dominance assessment
• Exclusive dealing prohibitions
• Bundling restrictions
• Price discrimination limits

CONTENT CREATOR PROTECTIONS:
• Fair revenue sharing
• Transparent ranking systems
• Appeal mechanisms
• Contract term protections

PRACTICAL COMPLIANCE GUIDE:

CONTENT REQUIREMENTS:
✓ Promote positive values
✓ Support Chinese culture
✓ Avoid sensitive political topics
✓ Fact-check all information
✓ Respect intellectual property

TECHNICAL REQUIREMENTS:
✓ Use approved payment systems
✓ Implement real-name verification
✓ Enable content monitoring
✓ Maintain local data storage
✓ Provide government access

BUSINESS REQUIREMENTS:
✓ Register with authorities
✓ Pay taxes on all income
✓ Maintain proper records
✓ Report suspicious activities
✓ Comply with advertising laws

PROHIBITED CONTENT CATEGORIES:

POLITICAL:
• Criticism of government policies
• Unauthorized political commentary
• Foreign political influence
• Historical event misrepresentation

SOCIAL:
• Rumors and misinformation
• Social disorder incitement
• Ethnic discrimination
• Religious extremism

ECONOMIC:
• Financial fraud promotion
• Illegal fundraising
• Market manipulation
• Cryptocurrency trading

ENFORCEMENT MECHANISMS:
• Automated content scanning
• User reporting systems
• Government monitoring
• Platform cooperation requirements

RECENT ENFORCEMENT ACTIONS:
• Major platforms fined ¥18.2B total
• 15,000+ content creators penalized
• 50+ apps removed from stores
• ¥2.8B in tax penalties collected

This information reflects PRC law as of September 2025.`
    },
    uk: {
      title: 'Великобритания: Online Safety Act',
      content: `UNITED KINGDOM - ONLINE SAFETY ACT 2023 & DIGITAL LAWS

ONLINE SAFETY ACT 2023
Royal Assent: October 26, 2023
Full Implementation: 2025

DUTY OF CARE FRAMEWORK:

Category 1 Services (Largest platforms):
• Risk assessments for illegal content
• Proactive monitoring systems
• User reporting mechanisms
• Content moderation transparency

Category 2A Services (Medium platforms):
• Risk assessments required
• User tools for content control
• Appeals processes
• Transparency reporting

USER-GENERATED CONTENT PLATFORMS:

Content Duties:
• Remove illegal content promptly
• Minimize children's exposure to harmful content
• Provide user controls and reporting tools
• Maintain clear terms of service

Children's Safety:
• Age verification systems
• Parental controls
• Risk assessments for under-18s
• Design features protecting children

PENALTIES:
• Up to £18M or 10% of global turnover
• Criminal liability for executives
• Service blocking orders
• Skills and competency requirements

INFLUENCER MARKETING REGULATIONS

CAP CODE (Committee of Advertising Practice):
• Clear disclosure of advertising
• #ad hashtag requirements
• Honest and truthful claims
• Social responsibility compliance

ASA ENFORCEMENT:
• Investigation of misleading ads
• Public naming and shaming
• Referral to trading standards
• Platform notification requirements

GDPR UK (Data Protection Act 2018)

POST-BREXIT MODIFICATIONS:
• ICO as lead supervisory authority
• Adequacy decisions for international transfers
• Domestic dispute resolution
• Parliamentary oversight mechanisms

CONTENT CREATOR OBLIGATIONS:
• Privacy notices for subscribers
• Lawful basis for processing
• Data subject rights compliance
• Security measures implementation

PENALTIES:
• Up to £17.5M or 4% of turnover
• Enforcement notices
• Monetary penalty notices
• Prosecution for criminal offenses

COMMUNICATIONS ACT 2003 (AMENDED 2025)

HARMFUL CONTENT PROVISIONS:
• Priority illegal content categories
• Children's risk assessment duties
• User empowerment tools
• Transparency reporting

ENFORCEMENT POWERS:
• Technology notices
• Information gathering powers
• Monetary penalties
• Service restriction orders

SPECIFIC COMPLIANCE REQUIREMENTS:

AGE VERIFICATION:
• Robust age assurance systems
• Privacy-preserving technologies
• Regular effectiveness reviews
• Accessibility considerations

CONTENT MODERATION:
• Clear community guidelines
• Consistent enforcement
• Appeals mechanisms
• User notification systems

RISK ASSESSMENT:
• Regular risk evaluations
• Mitigation measure implementation
• Monitoring and review processes
• Documentation requirements

SECTOR-SPECIFIC GUIDANCE:

FINANCIAL SERVICES:
• FCA social media guidance
• Financial promotion rules
• Clear risk warnings
• Professional indemnity requirements

HEALTH AND WELLNESS:
• MHRA advertising regulations
• Health claim substantiation
• Professional qualification disclosure
• Harm prevention measures

RECENT ENFORCEMENT ACTIONS:

ASA RULINGS 2025:
• 2,847 influencer ads investigated
• £2.3M in compliance costs
• 15 major brands sanctioned
• 127 content creators warned

ICO FINES:
• TikTok: £12.7M for children's data
• Instagram: £8.5M for transparency
• YouTube: £5.2M for processing violations

PRACTICAL COMPLIANCE CHECKLIST:

LEGAL REQUIREMENTS:
□ Terms of service compliance
□ Privacy policy updates
□ Age verification implementation
□ Content moderation procedures
□ Risk assessment completion

TECHNICAL MEASURES:
□ Reporting mechanism deployment
□ User control tool implementation
□ Content filtering systems
□ Analytics and monitoring
□ Incident response procedures

OPERATIONAL PROCESSES:
□ Staff training programs
□ Regular compliance audits
□ External legal consultation
□ Industry best practice adoption
□ Continuous improvement processes

UPCOMING DEVELOPMENTS:
• AI regulation framework (2025)
• Digital Markets Competition Bill
• Data Reform Bill provisions
• Online Advertising Programme

This reflects UK law as of September 2025.`
    },
    australia: {
      title: 'Австралия: Privacy Act & Digital Laws',
      content: `AUSTRALIA - PRIVACY ACT 2025 REFORMS & DIGITAL PLATFORM LAWS

PRIVACY ACT 1988 (2025 AMENDMENTS)
Major reforms effective January 1, 2025

ENHANCED PRIVACY PRINCIPLES:

Consent Requirements:
• Explicit consent for sensitive information
• Opt-out mechanisms for direct marketing
• Clear and understandable privacy notices
• Regular consent refresh requirements

Data Minimization:
• Collection limitation principle
• Purpose specification requirements
• Use limitation obligations
• Retention period restrictions

PENALTIES (2025 INCREASES):
• Up to AU$50M for serious breaches
• 30% of domestic turnover alternative
• Individual penalties up to AU$2.5M
• Director liability provisions

SOCIAL MEDIA AGE VERIFICATION TRIAL
Commenced: September 2025

PILOT PROGRAM REQUIREMENTS:
• Age verification for under-16s
• Parental consent mechanisms
• Privacy-preserving technologies
• Regular effectiveness reporting

PARTICIPATING PLATFORMS:
• TikTok, Instagram, Snapchat
• YouTube, Discord, WhatsApp
• Roblox, Minecraft online
• Custom verification systems

ONLINE SAFETY ACT 2021 (UPDATED 2025)

BASIC ONLINE SAFETY EXPECTATIONS:

Content Obligations:
• Proactive detection systems
• Rapid response to complaints
• Clear community standards
• Regular transparency reporting

Child Safety:
• Robust age verification
• Parental control tools
• Educational resource provision
• Industry collaboration

PENALTIES:
• Civil penalties up to AU$222,000 per day
• Criminal penalties for executives
• Enforceable undertakings
• Service blocking orders

ACCC DIGITAL PLATFORM INQUIRY

ONGOING REGULATORY DEVELOPMENTS:

Competition Concerns:
• Market concentration analysis
• Advertising revenue distribution
• Content creator revenue sharing
• Consumer choice limitations

PROPOSED SOLUTIONS:
• Mandatory bargaining codes
• Revenue sharing requirements
• Algorithmic transparency rules
• Consumer data portability

AUSTRALIAN CONSUMER LAW IMPLICATIONS

INFLUENCER MARKETING:
• Misleading and deceptive conduct prohibition
• Clear advertising disclosures
• Substantiation of product claims
• Consumer guarantee compliance

PENALTIES:
• Corporate: AU$50M, 30% turnover, or 3x benefit
• Individual: AU$2.5M
• Disqualification orders
• Community service orders

STATE AND TERRITORY VARIATIONS:

NEW SOUTH WALES:
• Cyberbullying criminal offenses
• Image-based abuse legislation
• Mandatory reporting obligations
• Victim support services

VICTORIA:
• Technology-facilitated abuse laws
• Revenge porn criminalization
• Social media platform cooperation
• Education program requirements

QUEENSLAND:
• Serious cyberbullying provisions
• Criminal Code amendments
• Police investigation powers
• Civil liability frameworks

PRACTICAL COMPLIANCE FRAMEWORK:

PRIVACY COMPLIANCE:
□ Privacy policy updates
□ Consent mechanism implementation
□ Data breach response procedures
□ Cross-border transfer safeguards
□ Regular privacy audits

CONTENT SAFETY:
□ Community guidelines development
□ Content moderation training
□ Incident response procedures
□ User reporting mechanisms
□ Regular safety assessments

CONSUMER PROTECTION:
□ Advertising disclosure compliance
□ Product claim substantiation
□ Consumer complaint procedures
□ Refund and return policies
□ Fair trading practice adoption

ENFORCEMENT TRENDS 2025:

MAJOR INVESTIGATIONS:
• Meta: AU$20M privacy penalty
• Google: AU$60M consumer law breach
• TikTok: Ongoing age verification review
• Twitter: Content moderation assessment

OAIC PRIVACY COMPLAINTS:
• 45% increase in social media complaints
• Average resolution time: 6.2 months
• 78% compliance with determinations
• AU$15M total penalties imposed

RECENT LEGISLATIVE DEVELOPMENTS:

COMMUNICATIONS LEGISLATION AMENDMENT:
• Enhanced eSafety Commissioner powers
• Expedited content removal procedures
• Industry standard development
• International cooperation frameworks

TREASURY LAWS AMENDMENT:
• Digital platform service provider definition
• Consumer data right extension
• Payment system regulation updates
• Cryptocurrency regulation framework

INDUSTRY SELF-REGULATION:

DIGITAL INDUSTRY GROUP INC (DIGI):
• Australian Code of Practice
• Misinformation and disinformation measures
• Safeguarding user privacy
• Promoting online safety

KEY PERFORMANCE INDICATORS:
• Complaint response times
• Content accuracy ratings
• User satisfaction metrics
• Transparency report publishing

This reflects Australian law as of September 2025.`
    }
  }
};

// Переменные состояния
let currentSection = 'overview';
let currentNicheCategory = 'popular';
let currentCountry = 'russia';
let incomeChart = null;

// Инициализация после загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
  console.log('Application starting...');
  
  initNavigation();
  renderNiches();
  initNicheTabs();
  initCountryTabs();
  renderLaws();
  renderPlatforms();
  initFilters();
  initCalculator();
  initModals();
  
  console.log('Application initialized');
});

/* ---------- Навигация ---------- */
function initNavigation() {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const section = btn.dataset.section;
      console.log('Switching to section:', section);
      
      // Обновляем активную кнопку
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Переключаем секцию
      switchSection(section);
    });
  });
  
  document.querySelectorAll('.overview-card').forEach(card => {
    card.addEventListener('click', () => {
      const section = card.dataset.section;
      if (section) {
        // Обновляем активную кнопку навигации
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        const navBtn = document.querySelector(`[data-section="${section}"]`);
        if (navBtn) navBtn.classList.add('active');
        
        switchSection(section);
      }
    });
  });
}

function switchSection(sectionName) {
  console.log('Switching to section:', sectionName);
  currentSection = sectionName;
  
  // Скрываем все секции
  document.querySelectorAll('.section').forEach(section => {
    section.classList.add('hidden');
    section.classList.remove('active');
  });
  
  // Показываем нужную секцию
  const targetSection = document.getElementById(`${sectionName}-section`);
  if (targetSection) {
    targetSection.classList.remove('hidden');
    targetSection.classList.add('active');
    console.log('Section switched successfully');
  } else {
    console.error('Section not found:', sectionName);
  }
}

/* ---------- Ниши ---------- */
function initNicheTabs() {
  document.querySelectorAll('.niche-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      currentNicheCategory = tab.dataset.category;
      document.querySelectorAll('.niche-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderNiches();
    });
  });
  
  const searchInput = document.getElementById('niche-search');
  const sortSelect = document.getElementById('niche-sort');
  const exportBtn = document.getElementById('export-niches');
  
  if (searchInput) searchInput.addEventListener('input', renderNiches);
  if (sortSelect) sortSelect.addEventListener('change', renderNiches);
  if (exportBtn) exportBtn.addEventListener('click', exportNichesCSV);
}

function renderNiches() {
  ['popular', 'soft', 'hard'].forEach(category => {
    const grid = document.getElementById(`${category}-niches-grid`);
    if (!grid) return;
    
    grid.innerHTML = '';
    
    const searchValue = document.getElementById('niche-search')?.value.toLowerCase() || '';
    const sortValue = document.getElementById('niche-sort')?.value || 'traffic_potential';
    
    let niches = [...appData.niches[category]];
    
    // Фильтрация по поиску
    if (searchValue) {
      niches = niches.filter(niche => 
        niche.name.toLowerCase().includes(searchValue)
      );
    }
    
    // Сортировка
    niches.sort((a, b) => {
      if (sortValue === 'traffic_potential') {
        return b.traffic_potential - a.traffic_potential;
      } else if (sortValue === 'income') {
        const aIncome = parseInt(a.income_usa.replace(/\D/g, '')) || 0;
        const bIncome = parseInt(b.income_usa.replace(/\D/g, '')) || 0;
        return bIncome - aIncome;
      } else if (sortValue === 'competition') {
        const order = {'Низкая': 1, 'Средняя': 2, 'Высокая': 3, 'Очень высокая': 4, 'Крайне высокая': 5};
        return (order[a.competition] || 3) - (order[b.competition] || 3);
      }
      return 0;
    });
    
    niches.forEach(niche => {
      const card = document.createElement('div');
      card.className = 'niche-card';
      
      let difficultyClass = 'status--success';
      if (niche.difficulty === 'Высокая' || niche.difficulty === 'Очень высокая') {
        difficultyClass = 'status--warning';
      }
      if (niche.difficulty === 'Крайне высокая') {
        difficultyClass = 'status--error';
      }
      
      card.innerHTML = `
        <h3>
          ${niche.name}
          <span class="niche-difficulty status ${difficultyClass}">${niche.difficulty}</span>
        </h3>
        <div class="niche-stats">
          <div class="niche-stat">
            <span class="niche-stat-value">${niche.traffic_potential}/10</span>
            <span class="niche-stat-label">Потенциал</span>
          </div>
          <div class="niche-stat">
            <span class="niche-stat-value">${niche.competition}</span>
            <span class="niche-stat-label">Конкуренция</span>
          </div>
        </div>
        <div class="niche-platforms">
          <h4>Топ платформы 🇷🇺</h4>
          <div class="platform-tags">
            ${niche.ru_platforms.map(platform => `<span class="platform-tag">${platform}</span>`).join('')}
          </div>
        </div>
        <div class="niche-income">💰 Доход РФ: ${niche.income_ru}</div>
      `;
      
      card.addEventListener('click', () => openNicheModal(niche));
      grid.appendChild(card);
    });
  });
  
  // Показываем активную категорию
  document.querySelectorAll('.niche-category').forEach(cat => {
    cat.classList.add('hidden');
    cat.classList.remove('active');
  });
  
  const activeCategory = document.getElementById(`${currentNicheCategory}-niches`);
  if (activeCategory) {
    activeCategory.classList.remove('hidden');
    activeCategory.classList.add('active');
  }
}

function openNicheModal(niche) {
  const modal = document.getElementById('niche-modal');
  const title = document.getElementById('niche-modal-title');
  const body = document.getElementById('niche-modal-body');
  
  title.textContent = niche.name;
  
  body.innerHTML = `
    <div class="modal-info-grid">
      <div class="modal-info-item">
        <div class="modal-info-label">Потенциал трафика</div>
        <div class="modal-info-value">${niche.traffic_potential}/10</div>
      </div>
      <div class="modal-info-item">
        <div class="modal-info-label">Конкуренция</div>
        <div class="modal-info-value">${niche.competition}</div>
      </div>
      <div class="modal-info-item">
        <div class="modal-info-label">Сложность входа</div>
        <div class="modal-info-value">${niche.difficulty}</div>
      </div>
    </div>
    
    <h4>🇷🇺 Лучшие платформы для России</h4>
    <div class="platform-tags">
      ${niche.ru_platforms.map(platform => `<span class="platform-tag">${platform}</span>`).join('')}
    </div>
    
    <h4>🇺🇸 Лучшие платформы для США</h4>
    <div class="platform-tags">
      ${niche.usa_platforms.map(platform => `<span class="platform-tag">${platform}</span>`).join('')}
    </div>
    
    <div class="modal-section">
      <h4>💰 Потенциальная доходность</h4>
      <p><strong>Россия:</strong> ${niche.income_ru}</p>
      <p><strong>США:</strong> ${niche.income_usa}</p>
    </div>
    
    ${niche.detailed_analysis ? `
    <div class="modal-section">
      <h4>📊 Детальный анализ</h4>
      <p>${niche.detailed_analysis}</p>
    </div>
    ` : ''}
  `;
  
  modal.classList.remove('hidden');
}

/* ---------- Законы ---------- */
function initCountryTabs() {
  document.querySelectorAll('.country-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      currentCountry = tab.dataset.country;
      document.querySelectorAll('.country-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderLaws();
    });
  });
}

function renderLaws() {
  const law = appData.laws[currentCountry];
  const container = document.getElementById('laws-content');
  
  if (!law || !container) return;
  
  container.innerHTML = `
    <div class="law-section">
      <h3>${law.title}</h3>
      <div style="white-space: pre-wrap; line-height: 1.6; font-size: 14px;">${law.content}</div>
    </div>
  `;
  
  container.style.cursor = 'pointer';
  container.addEventListener('click', () => openLawModal(law));
}

function openLawModal(law) {
  const modal = document.getElementById('law-modal');
  const title = document.getElementById('law-modal-title');
  const body = document.getElementById('law-modal-body');
  
  title.textContent = law.title;
  body.innerHTML = `<div style="white-space: pre-wrap; line-height: 1.6;">${law.content}</div>`;
  
  modal.classList.remove('hidden');
}

/* ---------- Платформы ---------- */
function renderPlatforms() {
  const tbody = document.getElementById('platforms-tbody');
  if (!tbody) return;
  
  tbody.innerHTML = '';
  
  appData.platforms.forEach(platform => {
    const row = document.createElement('tr');
    
    const statusClass = platform.blocked ? 'blocked-yes' : 'blocked-no';
    const statusText = platform.blocked ? 'Заблокирована' : 'Доступна';
    
    const trafficClass = platform.traffic_potential >= 9 ? 'traffic-high' : 
                        platform.traffic_potential >= 7 ? 'traffic-medium' : 'traffic-low';
    
    row.innerHTML = `
      <td>
        <div style="display: flex; align-items: center; gap: 8px;">
          <div class="platform-icon">${platform.name.charAt(0)}</div>
          <strong>${platform.name}</strong>
        </div>
      </td>
      <td><span class="status ${platform.region === 'RU' ? 'status--success' : 'status--info'}">${platform.region}</span></td>
      <td>
        <div class="traffic-indicator ${trafficClass}">
          ${platform.traffic_potential}/10
        </div>
      </td>
      <td>${platform.audience}</td>
      <td>${platform.engagement_rate}</td>
      <td><span class="blocked-indicator ${statusClass}">${statusText}</span></td>
      <td>
        <button class="btn btn--primary btn--sm" onclick="openPlatformModal('${platform.name}')">
          Подробнее
        </button>
      </td>
    `;
    
    tbody.appendChild(row);
  });
}

function openPlatformModal(platformName) {
  const platform = appData.platforms.find(p => p.name === platformName);
  if (!platform) return;
  
  const modal = document.getElementById('platform-modal');
  const title = document.getElementById('platform-modal-title');
  const body = document.getElementById('platform-modal-body');
  
  title.textContent = platform.name;
  
  body.innerHTML = `
    <div class="modal-info-grid">
      <div class="modal-info-item">
        <div class="modal-info-label">Регион</div>
        <div class="modal-info-value">${platform.region}</div>
      </div>
      <div class="modal-info-item">
        <div class="modal-info-label">Аудитория</div>
        <div class="modal-info-value">${platform.audience}</div>
      </div>
      <div class="modal-info-item">
        <div class="modal-info-label">Потенциал трафика</div>
        <div class="modal-info-value">${platform.traffic_potential}/10</div>
      </div>
      <div class="modal-info-item">
        <div class="modal-info-label">Engagement Rate</div>
        <div class="modal-info-value">${platform.engagement_rate}</div>
      </div>
      <div class="modal-info-item">
        <div class="modal-info-label">Статус в РФ</div>
        <div class="modal-info-value">${platform.blocked ? '🚫 Заблокирована' : '✅ Доступна'}</div>
      </div>
    </div>
  `;
  
  modal.classList.remove('hidden');
}

/* ---------- Фильтры и экспорт ---------- */
function initFilters() {
  const exportPlatformsBtn = document.getElementById('export-platforms');
  if (exportPlatformsBtn) {
    exportPlatformsBtn.addEventListener('click', exportPlatformsCSV);
  }
}

function exportPlatformsCSV() {
  const headers = ['Название', 'Регион', 'Потенциал', 'Аудитория', 'Engagement', 'Статус'];
  const rows = [headers];
  
  appData.platforms.forEach(platform => {
    rows.push([
      platform.name,
      platform.region,
      platform.traffic_potential,
      platform.audience,
      platform.engagement_rate,
      platform.blocked ? 'Заблокирована' : 'Доступна'
    ]);
  });
  
  downloadCSV(rows, 'platforms.csv');
}

function exportNichesCSV() {
  const headers = ['Категория', 'Ниша', 'Потенциал', 'Конкуренция', 'Доход РФ', 'Доход США'];
  const rows = [headers];
  
  ['popular', 'soft', 'hard'].forEach(category => {
    appData.niches[category].forEach(niche => {
      rows.push([
        category,
        niche.name,
        niche.traffic_potential,
        niche.competition,
        niche.income_ru,
        niche.income_usa
      ]);
    });
  });
  
  downloadCSV(rows, 'niches.csv');
}

function downloadCSV(data, filename) {
  const csv = data.map(row => 
    row.map(cell => `"${cell}"`).join(',')
  ).join('\n');
  
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
}

/* ---------- Калькулятор ---------- */
function initCalculator() {
  const nicheSelect = document.getElementById('calc-niche');
  if (!nicheSelect) return;
  
  // Заполняем селект ниш
  ['popular', 'soft', 'hard'].forEach(category => {
    const optgroup = document.createElement('optgroup');
    optgroup.label = category === 'popular' ? 'Популярные ниши' : 
                     category === 'soft' ? 'Мягкие ниши' : 'Твердые ниши';
    
    appData.niches[category].forEach(niche => {
      const option = document.createElement('option');
      option.value = niche.id;
      option.textContent = niche.name;
      optgroup.appendChild(option);
    });
    
    nicheSelect.appendChild(optgroup);
  });
  
  const calculateBtn = document.getElementById('calculate-income');
  if (calculateBtn) {
    calculateBtn.addEventListener('click', calculateIncome);
  }
}

function calculateIncome() {
  const nicheId = document.getElementById('calc-niche')?.value;
  if (!nicheId) {
    alert('Выберите нишу');
    return;
  }
  
  const niche = findNicheById(nicheId);
  if (!niche) {
    alert('Ниша не найдена');
    return;
  }
  
  const experience = document.getElementById('calc-experience')?.value || 'intermediate';
  const hours = parseInt(document.getElementById('calc-hours')?.value) || 4;
  const budget = parseInt(document.getElementById('calc-ad-budget')?.value) || 0;
  const market = document.getElementById('calc-market')?.value || 'russia';
  
  const experienceMultipliers = {
    'beginner': 0.5,
    'intermediate': 1.0,
    'expert': 1.5,
    'guru': 2.0
  };
  
  const experienceMultiplier = experienceMultipliers[experience] || 1.0;
  
  // Базовый доход из ниши
  const baseIncomeStr = market === 'russia' ? niche.income_ru : niche.income_usa;
  const baseIncome = parseInt(baseIncomeStr.replace(/\D/g, '')) || 1000;
  
  // Расчет прогноза
  const hoursMultiplier = Math.min(hours / 4, 2.0); // максимум в 2 раза за часы
  const budgetBonus = budget * 0.1; // 10% от бюджета как дополнительный доход
  const nicheMultiplier = niche.traffic_potential / 8.0; // нормализация потенциала
  
  const projectedIncome = Math.round(
    baseIncome * experienceMultiplier * hoursMultiplier * nicheMultiplier + budgetBonus
  );
  
  showIncomeResults(projectedIncome, niche, {
    experience,
    hours,
    budget,
    market
  });
}

function findNicheById(id) {
  for (const category in appData.niches) {
    const niche = appData.niches[category].find(n => n.id === id);
    if (niche) return niche;
  }
  return null;
}

function showIncomeResults(projectedIncome, niche, params) {
  const resultsContainer = document.getElementById('calculator-results');
  if (!resultsContainer) return;
  
  resultsContainer.classList.remove('hidden');
  
  // Создаем график
  const ctx = document.getElementById('income-chart')?.getContext('2d');
  if (ctx) {
    if (incomeChart) {
      incomeChart.destroy();
    }
    
    incomeChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Прогноз дохода', 'Рыночный потенциал'],
        datasets: [{
          data: [projectedIncome, Math.max(projectedIncome * 1.5, 10000)],
          backgroundColor: ['#1FB8CD', '#E5E5E5'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  }
  
  // Детальная разбивка
  const breakdownContainer = document.getElementById('detailed-breakdown');
  if (breakdownContainer) {
    breakdownContainer.innerHTML = `
      <div class="breakdown-card">
        <h4>💰 Прогноз дохода: $${projectedIncome.toLocaleString()}/мес</h4>
        <div class="breakdown-metrics">
          <div class="breakdown-metric">
            <span class="breakdown-value">${niche.name}</span>
            <span class="breakdown-label">Выбранная ниша</span>
          </div>
          <div class="breakdown-metric">
            <span class="breakdown-value">${niche.traffic_potential}/10</span>
            <span class="breakdown-label">Потенциал трафика</span>
          </div>
          <div class="breakdown-metric">
            <span class="breakdown-value">${params.experience}</span>
            <span class="breakdown-label">Уровень опыта</span>
          </div>
          <div class="breakdown-metric">
            <span class="breakdown-value">${params.hours}ч</span>
            <span class="breakdown-label">Часов в день</span>
          </div>
          <div class="breakdown-metric">
            <span class="breakdown-value">$${params.budget}</span>
            <span class="breakdown-label">Бюджет рекламы</span>
          </div>
          <div class="breakdown-metric">
            <span class="breakdown-value">${params.market === 'russia' ? '🇷🇺' : params.market === 'usa' ? '🇺🇸' : '🌍'}</span>
            <span class="breakdown-label">Целевой рынок</span>
          </div>
        </div>
      </div>
      
      <div class="breakdown-card">
        <h4>📈 Факторы роста дохода</h4>
        <p><strong>Увеличение опыта:</strong> При переходе на уровень "Эксперт" доход может вырасти в 1.5 раза</p>
        <p><strong>Больше времени:</strong> Увеличение до 8 часов в день может удвоить результат</p>
        <p><strong>Реклама:</strong> Каждый $1 в рекламе может принести $0.10 дополнительного дохода</p>
        <p><strong>Смена рынка:</strong> Американский рынок обычно в 2-3 раза прибыльнее российского</p>
      </div>
    `;
  }
}

/* ---------- Модальные окна ---------- */
function initModals() {
  document.querySelectorAll('.modal-close').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
      closeBtn.closest('.modal').classList.add('hidden');
    });
  });
  
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
      }
    });
  });
}

/* ---------- Экспорт PDF (заглушки) ---------- */
const exportButtons = [
  'export-niches-pdf',
  'export-laws-pdf', 
  'export-calc-pdf',
  'export-full-pdf'
];

exportButtons.forEach(buttonId => {
  const button = document.getElementById(buttonId);
  if (button) {
    button.addEventListener('click', () => {
      alert('Функция экспорта PDF будет доступна в следующей версии. Сейчас доступен экспорт в CSV.');
    });
  }
});

// Глобальные функции для доступа из HTML
window.openNicheModal = openNicheModal;
window.openPlatformModal = openPlatformModal;
window.openLawModal = openLawModal;