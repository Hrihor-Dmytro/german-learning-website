export interface GrammarTopic {
  id: string;
  title: string;
  description: string;
  level: "A1" | "A2" | "B1" | "B2" | "C1";
  examples?: string[];
  exercises?: string[];
}

export const grammarTopics: GrammarTopic[] = [
  // ===== A1 =====
  {
    id: "A1-1",
    title: "Артикли (der, die, das, ein, eine)",
    description: "Определённые и неопределённые артикли, род существительных.",
    level: "A1",
    examples: ["Der Mann ist groß.", "Das ist eine Frau."],
  },
  {
    id: "A1-2",
    title: "Глаголы в настоящем времени (Präsens)",
    description: "Спряжение правильных и неправильных глаголов.",
    level: "A1",
    examples: ["Ich gehe.", "Du sprichst.", "Wir lernen."],
  },
  {
    id: "A1-3",
    title: "Отрицание (nicht, kein)",
    description: "Отрицание с nicht и kein.",
    level: "A1",
    examples: ["Ich bin nicht müde.", "Ich habe kein Auto."],
  },
  {
    id: "A1-4",
    title: "Вопросительные предложения",
    description: "Вопросы с вопросительными словами и без.",
    level: "A1",
    examples: ["Wie heißt du?", "Bist du Student?"],
  },
  {
    id: "A1-5",
    title: "Личные местоимения",
    description: "Личные местоимения в именительном падеже.",
    level: "A1",
    examples: ["Ich, du, er, sie, es, wir, ihr, sie, Sie"],
  },
  {
    id: "A1-6",
    title: "Притяжательные местоимения",
    description: "Мой, твой, наш и т.д.",
    level: "A1",
    examples: ["Mein Buch.", "Dein Auto.", "Unser Haus."],
  },
  {
    id: "A1-7",
    title: "Модальные глаголы (хотеть, мочь, должен)",
    description: "Модальные глаголы wollen, können, müssen.",
    level: "A1",
    examples: ["Ich will lernen.", "Du kannst schwimmen.", "Er muss arbeiten."],
  },
  {
    id: "A1-8",
    title: "Предлоги места (in, auf, unter, neben)",
    description: "Предлоги места с дательным падежом.",
    level: "A1",
    examples: ["Das Buch ist auf dem Tisch.", "Die Katze ist unter dem Stuhl."],
  },

  // ===== A2 =====
  {
    id: "A2-1",
    title: "Прошедшее время (Perfekt)",
    description: "Образование и использование Perfekt.",
    level: "A2",
    examples: ["Ich habe gelernt.", "Sie ist gegangen."],
  },
  {
    id: "A2-2",
    title: "Возвратные глаголы",
    description: "Возвратные местоимения и глаголы.",
    level: "A2",
    examples: ["Ich wasche mich.", "Du interessierst dich für Musik."],
  },
  {
    id: "A2-3",
    title: "Сравнительная и превосходная степень",
    description: "Сравнение прилагательных.",
    level: "A2",
    examples: ["größer, am größten", "schöner, am schönsten"],
  },
  {
    id: "A2-4",
    title: "Предлоги времени (um, am, im, seit)",
    description: "Предлоги времени с дательным и винительным падежами.",
    level: "A2",
    examples: ["Um 8 Uhr.", "Am Montag.", "Im Sommer.", "Seit einem Jahr."],
  },
  {
    id: "A2-5",
    title: "Указательные местоимения (dieser, jener)",
    description: "Указательные местоимения в разных падежах.",
    level: "A2",
    examples: ["Dieser Mann.", "Jenes Buch."],
  },
  {
    id: "A2-6",
    title: "Порядковые числительные",
    description: "Образование и использование порядковых числительных.",
    level: "A2",
    examples: ["der erste Tag", "die zweite Woche"],
  },
  {
    id: "A2-7",
    title: "Повелительное наклонение (Imperativ)",
    description: "Образование повелительного наклонения.",
    level: "A2",
    examples: ["Geh!", "Lest!", "Sprechen Sie!"],
  },

  {
    id: "B1-1",
    title: "Пассив (Passiv)",
    description:
      "Образование и использование пассивного залога в настоящем, прошедшем и перфекте.",
    level: "B1",
    examples: [
      "Das Buch wird gelesen.",
      "Die Tür wurde geöffnet.",
      "Das Haus ist gebaut worden.",
    ],
  },
  {
    id: "B1-2",
    title: "Сослагательное наклонение (Konjunktiv II)",
    description: "Выражение желаний, ирреальных условий, вежливых просьб.",
    level: "B1",
    examples: [
      "Ich würde gehen, wenn ich Zeit hätte.",
      "Ich hätte gern eine Pizza.",
    ],
  },
  {
    id: "B1-3",
    title: "Инфинитивные обороты (Infinitiv mit zu)",
    description:
      "Употребление инфинитива с zu после глаголов, прилагательных, существительных.",
    level: "B1",
    examples: ["Ich habe vor, zu reisen.", "Es ist schwer, das zu verstehen."],
  },
  {
    id: "B1-4",
    title: "Придаточные предложения с союзами",
    description:
      "Порядок слов и использование союзов weil, obwohl, damit, um ... zu, ohne ... zu, anstatt ... zu, falls, wenn, nachdem, bevor, während.",
    level: "B1",
    examples: [
      "Weil es regnet, bleibe ich zu Hause.",
      "Ich lerne, damit ich die Prüfung bestehe.",
      "Nachdem ich gegessen habe, gehe ich spazieren.",
    ],
  },
  {
    id: "B1-5",
    title: "Относительные предложения (Relativsätze)",
    description:
      "Relativpronomen im Nominativ, Akkusativ, Dativ; Relativsätze mit Präpositionen.",
    level: "B1",
    examples: [
      "Das ist der Mann, der mich gestern angerufen hat.",
      "Das ist das Buch, das ich lese.",
    ],
  },
  {
    id: "B1-6",
    title: "Модальные глаголы в прошедшем времени",
    description: "Модальные глаголы в Perfekt и Plusquamperfekt.",
    level: "B1",
    examples: ["Ich habe nicht kommen können.", "Er hatte das machen müssen."],
  },
  {
    id: "B1-7",
    title: "Наречия места и направления",
    description:
      "Использование наречий irgendwohin, irgendwo, nirgendwo, überall, überallhin.",
    level: "B1",
    examples: ["Ich gehe irgendwohin.", "Ich suche überall."],
  },
  {
    id: "B1-8",
    title: "Отрицание с niemand, nirgendwo, nichts",
    description: "Другие способы отрицания, кроме nicht и kein.",
    level: "B1",
    examples: ["Niemand ist da.", "Ich habe nichts gesehen."],
  },
  {
    id: "B1-9",
    title: "Двойные союзы",
    description:
      "sowohl ... als auch, nicht nur ... sondern auch, entweder ... oder, weder ... noch, zwar ... aber.",
    level: "B1",
    examples: ["Sowohl ich als auch du.", "Entweder heute oder morgen."],
  },
  {
    id: "B1-10",
    title: "Местоимения и указательные слова",
    description:
      "irgendein-, irgendwelch-, jede-, alle, einige-, manche-, viele-, wenige-, jemand, niemand.",
    level: "B1",
    examples: ["Irgendein Buch.", "Jemand hat angerufen."],
  },
  {
    id: "B1-11",
    title: "Порядок слов в сложных предложениях",
    description:
      "Порядок слов после союзов darum, deswegen, daher, deshalb, trotzdem, sonst.",
    level: "B1",
    examples: ["Ich habe Hunger, deshalb esse ich etwas."],
  },
  {
    id: "B1-12",
    title: "Глаголы с дополнением в Dativ",
    description: "Глаголы, требующие дательного падежа.",
    level: "B1",
    examples: ["Ich helfe dir.", "Das gefällt mir."],
  },
  {
    id: "B1-13",
    title: "Наречия времени",
    description: "Систематизация наречий со значением времени.",
    level: "B1",
    examples: ["morgen, gestern, heute, immer, niemals"],
  },
  {
    id: "B1-14",
    title: "Модальные частицы",
    description: "aber, denn, eigentlich, doch, mal, ja, wohl.",
    level: "B1",
    examples: ["Komm doch!", "Das ist ja interessant."],
  },
  {
    id: "B1-15",
    title: "Числительные и дроби",
    description: "Образование количественных и порядковых числительных, дроби.",
    level: "B1",
    examples: ["zwei, zweite, ein Drittel"],
  },
  {
    id: "B1-16",
    title: "Усилительные и уменьшительные частицы",
    description:
      "sehr, besonders, total, wirklich, echt, ziemlich, nicht so, nicht besonders, gar nicht, überhaupt nicht.",
    level: "B1",
    examples: ["Das ist sehr gut.", "Das ist gar nicht schwer."],
  },
  // B2
  {
    id: "B2-1",
    title: "Порядок слов в сложных предложениях",
    description:
      "Союзы и порядок слов в сложносочинённых и сложноподчинённых предложениях.",
    level: "B2",
    examples: [
      "Weil es regnet, bleibe ich zu Hause.",
      "Er sagt, dass er kommt.",
    ],
  },
  {
    id: "B2-2",
    title: "Пассив во всех временах",
    description: "Vorgangspassiv, Zustandspassiv, альтернативные формы.",
    level: "B2",
    examples: ["Das Haus wird gebaut.", "Das Haus ist gebaut."],
  },
  {
    id: "B2-3",
    title: "Konjunktiv II (иреальные условия, желания)",
    description: "Образование и использование Konjunktiv II.",
    level: "B2",
    examples: [
      "Wenn ich Zeit hätte, würde ich reisen.",
      "Ich wünschte, ich könnte fliegen.",
    ],
  },
  {
    id: "B2-4",
    title: "Konjunktiv I (косвенная речь)",
    description: "Использование Konjunktiv I для косвенной речи.",
    level: "B2",
    examples: ["Er sagt, er gehe nach Hause."],
  },
  {
    id: "B2-5",
    title: "Инфинитивные обороты (um...zu, ohne...zu, statt...zu)",
    description: "Образование и использование инфинитивных оборотов.",
    level: "B2",
    examples: [
      "Ich gehe ins Geschäft, um Brot zu kaufen.",
      "Ohne zu fragen, ging er weg.",
    ],
  },
  {
    id: "B2-6",
    title: "Предлоги с Genitiv (trotz, wegen, während)",
    description: "Предлоги, требующие родительного падежа.",
    level: "B2",
    examples: [
      "Trotz des Regens.",
      "Wegen des Sturms.",
      "Während des Unterrichts.",
    ],
  },
  {
    id: "B2-7",
    title: "Глагольно-именные словосочетания",
    description: "Устойчивые глагольно-именные словосочетания.",
    level: "B2",
    examples: ["in Frage kommen", "zur Verfügung stehen"],
  },
  // C1
  {
    id: "C1-1",
    title: "Сложные инфинитивные конструкции",
    description:
      "Инфинитивные обороты с модальными глаголами и другими конструкциями.",
    level: "C1",
    examples: [
      "Es ist schwer, das Problem zu lösen.",
      "Es wird unmöglich sein, das zu beweisen.",
    ],
  },
  {
    id: "C1-2",
    title: "Сложноподчинённые предложения (расширенно)",
    description: "Союзы и порядок слов в сложных предложениях.",
    level: "C1",
    examples: [
      "Nachdem ich gegessen hatte, ging ich spazieren.",
      "Damit du es weißt, sage ich es dir.",
    ],
  },
  {
    id: "C1-3",
    title: "Konjunktiv I и II (углублённо)",
    description: "Косвенная речь, вежливые просьбы, ирреальные условия.",
    level: "C1",
    examples: [
      "Er sagte, er gehe nach Hause.",
      "Ich würde gehen, wenn ich Zeit hätte.",
    ],
  },
  {
    id: "C1-4",
    title: "Стилистические средства (Partizipien, Nominalisierung)",
    description: "Использование причастий и отглагольных существительных.",
    level: "C1",
    examples: ["Der lesende Schüler.", "Das Lesen macht Spaß."],
  },
  {
    id: "C1-5",
    title: "Выражение предположения и сомнения",
    description:
      "Конструкции для выражения предположения, сомнения, вероятности.",
    level: "C1",
    examples: ["Es könnte sein, dass...", "Es scheint, als ob..."],
  },
];
