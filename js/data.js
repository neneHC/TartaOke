// TartaOke - Banco de Músicas Padrão
// Este arquivo funciona offline e diretamente via protocolo file:// ou GitHub Pages
var DEFAULT_SONGS = [
  {
    "code": "4815",
    "title": "Evidências",
    "artist": "Chitãozinho & Xororó",
    "lyrics": "Quando eu digo que deixei de te amar, é porque eu te amo...",
    "category": "nacional"
  },
  {
    "code": "1001",
    "title": "Fio de Cabelo",
    "artist": "Chitãozinho & Xororó",
    "lyrics": "Quando a gente ama qualquer coisa serve para relembrar...",
    "category": "nacional"
  },
  {
    "code": "1002",
    "title": "Sinônimos",
    "artist": "Chitãozinho & Xororó part. Zé Ramalho",
    "lyrics": "Quanto mais o tempo passa mais aumenta a graça em te ver...",
    "category": "nacional"
  },
  {
    "code": "1003",
    "title": "Nuvem de Lágrimas",
    "artist": "Chitãozinho & Xororó",
    "lyrics": "Há uma nuvem de lágrimas sobre meus olhos...",
    "category": "nacional"
  },
  {
    "code": "1004",
    "title": "Alô",
    "artist": "Chitãozinho & Xororó",
    "lyrics": "Alô, tô ligando pra saber como você está...",
    "category": "nacional"
  },
  {
    "code": "1005",
    "title": "É o Amor",
    "artist": "Zezé Di Camargo & Luciano",
    "lyrics": "Eu não vou negar que sou louco por você...",
    "category": "nacional"
  },
  {
    "code": "1006",
    "title": "Você Vai Ver",
    "artist": "Zezé Di Camargo & Luciano",
    "lyrics": "Você pode encontrar mil outros amores...",
    "category": "nacional"
  },
  {
    "code": "1007",
    "title": "No Dia em Que Eu Saí de Casa",
    "artist": "Zezé Di Camargo & Luciano",
    "lyrics": "No dia em que eu saí de casa, minha mãe me disse...",
    "category": "nacional"
  },
  {
    "code": "1008",
    "title": "Pense em Mim",
    "artist": "Leandro & Leonardo",
    "lyrics": "Em vez de você ficar pensando nele, pense em mim...",
    "category": "nacional"
  },
  {
    "code": "1009",
    "title": "Não Aprendi Dizer Adeus",
    "artist": "Leandro & Leonardo",
    "lyrics": "Não aprendi dizer adeus, não sei se vou me acostumar...",
    "category": "nacional"
  },
  {
    "code": "1010",
    "title": "Temporal de Amor",
    "artist": "Leandro & Leonardo",
    "lyrics": "Chuva no telhado, vento no portão...",
    "category": "nacional"
  },
  {
    "code": "1011",
    "title": "Dormi na Praça",
    "artist": "Bruno & Marrone",
    "lyrics": "Seu guarda, eu não sou vagabundo, eu não sou delinquente...",
    "category": "nacional"
  },
  {
    "code": "1012",
    "title": "Choram as Rosas",
    "artist": "Bruno & Marrone",
    "lyrics": "Choram as rosas, seu perfume agora se transforma em lágrimas...",
    "category": "nacional"
  },
  {
    "code": "1013",
    "title": "Boate Azul",
    "artist": "Joaquim & Manuel / Bruno & Marrone",
    "lyrics": "Doente de amor procurei remédio na vida noturna...",
    "category": "nacional"
  },
  {
    "code": "1014",
    "title": "Ainda Ontem Chorei de Saudade",
    "artist": "João Mineiro & Marciano",
    "lyrics": "Você me pediu na carta que eu nunca mais te procurasse...",
    "category": "nacional"
  },
  {
    "code": "1015",
    "title": "Telefone Mudo",
    "artist": "Trio Parada Dura",
    "lyrics": "Eu quero que risque o meu nome da sua agenda...",
    "category": "nacional"
  },
  {
    "code": "1016",
    "title": "As Andorinhas",
    "artist": "Trio Parada Dura",
    "lyrics": "As andorinhas voltaram e eu também voltei...",
    "category": "nacional"
  },
  {
    "code": "1017",
    "title": "Saudade da Minha Terra",
    "artist": "Sérgio Reis / Belmonte e Amaraí",
    "lyrics": "De que me adianta viver na cidade, se a felicidade não me acompanhar...",
    "category": "nacional"
  },
  {
    "code": "1018",
    "title": "Menino da Porteira",
    "artist": "Sérgio Reis",
    "lyrics": "Toda vez que eu viajava pela Estrada de Ouro Fino...",
    "category": "nacional"
  },
  {
    "code": "1019",
    "title": "Panela Velha",
    "artist": "Sérgio Reis",
    "lyrics": "Não me interessa se ela é coroa, panela velha é que faz comida boa...",
    "category": "nacional"
  },
  {
    "code": "1020",
    "title": "Infiel",
    "artist": "Marília Mendonça",
    "lyrics": "Isso não é uma mulher, isso é uma bandida...",
    "category": "nacional"
  },
  {
    "code": "1021",
    "title": "De Quem É a Culpa?",
    "artist": "Marília Mendonça",
    "lyrics": "Não sei de onde vem essa força que me empurra pra você...",
    "category": "nacional"
  },
  {
    "code": "1022",
    "title": "Eu Sei de Cor",
    "artist": "Marília Mendonça",
    "lyrics": "Deixa, deixa mesmo de ser importante, vai deixando a gente pra outra hora...",
    "category": "nacional"
  },
  {
    "code": "1023",
    "title": "Supera",
    "artist": "Marília Mendonça",
    "lyrics": "Para de insistir, chega de se iludir, o que você tá passando eu já passei...",
    "category": "nacional"
  },
  {
    "code": "1024",
    "title": "Ciumeira",
    "artist": "Marília Mendonça",
    "lyrics": "Eu não tô com ciúme, não tô com ciúme de você...",
    "category": "nacional"
  },
  {
    "code": "1025",
    "title": "10%",
    "artist": "Maiara & Maraisa",
    "lyrics": "Garçom, troca o DVD, que essa moda me faz sofrer...",
    "category": "nacional"
  },
  {
    "code": "1026",
    "title": "Medo Bobo",
    "artist": "Maiara & Maraisa",
    "lyrics": "Ah, e esse abraço meio solto me deu medo...",
    "category": "nacional"
  },
  {
    "code": "1027",
    "title": "Aí Já Era",
    "artist": "Jorge & Mateus",
    "lyrics": "Quando olho nos seus olhos encontro a paz que sempre procurei...",
    "category": "nacional"
  },
  {
    "code": "1028",
    "title": "Pode Chorar",
    "artist": "Jorge & Mateus",
    "lyrics": "Quase que acabo com a minha vida, você não sabe o que é amor...",
    "category": "nacional"
  },
  {
    "code": "1029",
    "title": "Voa Beija-Flor",
    "artist": "Jorge & Mateus",
    "lyrics": "Voa beija-flor, vai dizer pro meu amor...",
    "category": "nacional"
  },
  {
    "code": "1030",
    "title": "Sosseguei",
    "artist": "Jorge & Mateus",
    "lyrics": "Tô vendendo a minha moto, com você eu sosseguei...",
    "category": "nacional"
  },
  {
    "code": "1031",
    "title": "Propaganda",
    "artist": "Jorge & Mateus",
    "lyrics": "Tá pra nascer alguém que me faça esquecer dela...",
    "category": "nacional"
  },
  {
    "code": "1032",
    "title": "Cuida Bem Dela",
    "artist": "Henrique & Juliano",
    "lyrics": "Sabe aquele amor que se multiplica? Nunca imaginei que ele acabaria...",
    "category": "nacional"
  },
  {
    "code": "1033",
    "title": "Até Você Voltar",
    "artist": "Henrique & Juliano",
    "lyrics": "Aqui de longe fico imaginando como você deve estar...",
    "category": "nacional"
  },
  {
    "code": "1034",
    "title": "Liberdade Provisória",
    "artist": "Henrique & Juliano",
    "lyrics": "No início era só uma aventura de bar...",
    "category": "nacional"
  },
  {
    "code": "1035",
    "title": "Vidinha de Balada",
    "artist": "Henrique & Juliano",
    "lyrics": "Eu vou tirar você da zoeira, vai namorar comigo, sim!...",
    "category": "nacional"
  },
  {
    "code": "1036",
    "title": "Meteoro",
    "artist": "Luan Santana",
    "lyrics": "Te dei o sol, te dei o mar pra ganhar seu coração...",
    "category": "nacional"
  },
  {
    "code": "1037",
    "title": "Te Esperando",
    "artist": "Luan Santana",
    "lyrics": "Mesmo que você não caia na minha conversa...",
    "category": "nacional"
  },
  {
    "code": "1038",
    "title": "Morena",
    "artist": "Luan Santana",
    "lyrics": "Me beija a flor da pele, me beija o corpo todo...",
    "category": "nacional"
  },
  {
    "code": "1039",
    "title": "Balada (Tchê Tcherere)",
    "artist": "Gusttavo Lima",
    "lyrics": "Gatinha assanhada, você tá querendo o que?...",
    "category": "nacional"
  },
  {
    "code": "1040",
    "title": "Apelido Carinhoso",
    "artist": "Gusttavo Lima",
    "lyrics": "Ainda não me acostumei com a sua ausência...",
    "category": "nacional"
  },
  {
    "code": "2001",
    "title": "Tempo Perdido",
    "artist": "Legião Urbana",
    "lyrics": "Todos os dias quando acordo não tenho mais o tempo que passou...",
    "category": "nacional"
  },
  {
    "code": "2002",
    "title": "Pais e Filhos",
    "artist": "Legião Urbana",
    "lyrics": "Estátuas e cofres e paredes pintadas, ninguém sabe o que aconteceu...",
    "category": "nacional"
  },
  {
    "code": "2003",
    "title": "Faroeste Caboclo",
    "artist": "Legião Urbana",
    "lyrics": "Não tinha medo o tal João de Santo Cristo...",
    "category": "nacional"
  },
  {
    "code": "2004",
    "title": "Será",
    "artist": "Legião Urbana",
    "lyrics": "Tire suas mãos de mim, eu não pertenço a você...",
    "category": "nacional"
  },
  {
    "code": "2005",
    "title": "Eduardo e Mônica",
    "artist": "Legião Urbana",
    "lyrics": "Quem um dia irá dizer que existe razão nas coisas feitas pelo coração?...",
    "category": "nacional"
  },
  {
    "code": "2006",
    "title": "Índios",
    "artist": "Legião Urbana",
    "lyrics": "Quem me dera ao menos uma vez ter de volta todo o ouro tirado de nós...",
    "category": "nacional"
  },
  {
    "code": "2007",
    "title": "Primeiros Erros",
    "artist": "Capital Inicial",
    "lyrics": "Meu caminho é cada manhã, não procure saber onde estou...",
    "category": "nacional"
  },
  {
    "code": "2008",
    "title": "À Sua Maneira",
    "artist": "Capital Inicial",
    "lyrics": "Ela dormiu no calor dos meus braços...",
    "category": "nacional"
  },
  {
    "code": "2009",
    "title": "Fogo",
    "artist": "Capital Inicial",
    "lyrics": "Você é meu sol, um pedaço de céu em meio à escuridão...",
    "category": "nacional"
  },
  {
    "code": "2010",
    "title": "Natasha",
    "artist": "Capital Inicial",
    "lyrics": "Dezessete anos, o corpo tá cheirando a fruta fresca...",
    "category": "nacional"
  },
  {
    "code": "2011",
    "title": "Vou Deixar",
    "artist": "Skank",
    "lyrics": "Vou deixar a vida me levar, pra onde ela quiser...",
    "category": "nacional"
  },
  {
    "code": "2012",
    "title": "Garota Nacional",
    "artist": "Skank",
    "lyrics": "Vem cá meu bem, que é bom sonhar...",
    "category": "nacional"
  },
  {
    "code": "2013",
    "title": "Te Ver",
    "artist": "Skank",
    "lyrics": "Te ver e não te querer é improvável, é impossível...",
    "category": "nacional"
  },
  {
    "code": "2014",
    "title": "Sutilmente",
    "artist": "Skank",
    "lyrics": "E quando eu estiver triste, simplesmente me abrace...",
    "category": "nacional"
  },
  {
    "code": "2015",
    "title": "Resposta",
    "artist": "Skank",
    "lyrics": "Bem mais que o tempo que nós perdemos, ficou pra trás também o que nos juntou...",
    "category": "nacional"
  },
  {
    "code": "2016",
    "title": "Epitáfio",
    "artist": "Titãs",
    "lyrics": "Devia ter amado mais, ter chorado mais, ter visto o sol nascer...",
    "category": "nacional"
  },
  {
    "code": "2017",
    "title": "Sonífera Ilha",
    "artist": "Titãs",
    "lyrics": "Não posso mais viver assim ao seu lado...",
    "category": "nacional"
  },
  {
    "code": "2018",
    "title": "Enquanto Houver Sol",
    "artist": "Titãs",
    "lyrics": "Quando não houver saída, quando não houver mais solução...",
    "category": "nacional"
  },
  {
    "code": "2019",
    "title": "Lanterna dos Afogados",
    "artist": "Os Paralamas do Sucesso",
    "lyrics": "Quando tá escuro e ninguém te ouve...",
    "category": "nacional"
  },
  {
    "code": "2020",
    "title": "Meu Erro",
    "artist": "Os Paralamas do Sucesso",
    "lyrics": "Eu quis dizer você não quis escutar agora não peça não me faça promessas...",
    "category": "nacional"
  },
  {
    "code": "2021",
    "title": "Aonde Quer Que Eu Vá",
    "artist": "Os Paralamas do Sucesso",
    "lyrics": "Olhos vermelhos, reflexos no espelho...",
    "category": "nacional"
  },
  {
    "code": "2022",
    "title": "Exagerado",
    "artist": "Cazuza",
    "lyrics": "Amor da minha vida, daqui até a eternidade...",
    "category": "nacional"
  },
  {
    "code": "2023",
    "title": "Codinome Beija-Flor",
    "artist": "Cazuza",
    "lyrics": "Pra que mentir, fingir que não doeu...",
    "category": "nacional"
  },
  {
    "code": "2024",
    "title": "Ideologia",
    "artist": "Cazuza",
    "lyrics": "Meu partido é um coração partido...",
    "category": "nacional"
  },
  {
    "code": "2025",
    "title": "O Tempo Não Pára",
    "artist": "Cazuza",
    "lyrics": "Disparam contra o sol, sou mais um sobrevivente...",
    "category": "nacional"
  },
  {
    "code": "2026",
    "title": "Bete Balanço",
    "artist": "Barão Vermelho",
    "lyrics": "Pode seguir a tua estrela, o teu brinquedo de star...",
    "category": "nacional"
  },
  {
    "code": "2027",
    "title": "Pro Dia Nascer Feliz",
    "artist": "Barão Vermelho",
    "lyrics": "Todo dia a insônia me sussurra: Você não vai dormir...",
    "category": "nacional"
  },
  {
    "code": "2028",
    "title": "Puro Êxtase",
    "artist": "Barão Vermelho",
    "lyrics": "Toda vez que você me vê, eu fico noites sem dormir...",
    "category": "nacional"
  },
  {
    "code": "2029",
    "title": "Admirável Chip Novo",
    "artist": "Pitty",
    "lyrics": "Pense, fale, compre, beba, leia, vote, não se esqueça...",
    "category": "nacional"
  },
  {
    "code": "2030",
    "title": "Equalize",
    "artist": "Pitty",
    "lyrics": "Às vezes faz um bem danado a gente se perder...",
    "category": "nacional"
  },
  {
    "code": "2031",
    "title": "Máscara",
    "artist": "Pitty",
    "lyrics": "Diga quem você é, me diga me fale a verdade...",
    "category": "nacional"
  },
  {
    "code": "2032",
    "title": "Me Adora",
    "artist": "Pitty",
    "lyrics": "Tantas decepções eu já vivi, aquela foi de longe a mais amarga...",
    "category": "nacional"
  },
  {
    "code": "2033",
    "title": "Dias Atrás",
    "artist": "CPM 22",
    "lyrics": "Dias atrás vi você passar, nem me deu atenção...",
    "category": "nacional"
  },
  {
    "code": "2034",
    "title": "Um Minuto Para o Fim do Mundo",
    "artist": "CPM 22",
    "lyrics": "Se você pudesse me dizer o que te fez mudar tão repentinamente...",
    "category": "nacional"
  },
  {
    "code": "2035",
    "title": "Regina Let's Go",
    "artist": "CPM 22",
    "lyrics": "Eu já não sei mais o que fazer, não dá pra disfarçar...",
    "category": "nacional"
  },
  {
    "code": "2036",
    "title": "Proibida Pra Mim",
    "artist": "Charlie Brown Jr.",
    "lyrics": "Ela achou meu cabelo engraçado, proibida pra mim no way...",
    "category": "nacional"
  },
  {
    "code": "2037",
    "title": "Céu Azul",
    "artist": "Charlie Brown Jr.",
    "lyrics": "Tão natural quanto a luz do dia, mas que preguiça boa...",
    "category": "nacional"
  },
  {
    "code": "2038",
    "title": "Dias de Luta, Dias de Glória",
    "artist": "Charlie Brown Jr.",
    "lyrics": "Canto minha vida com orgulho, na humildade...",
    "category": "nacional"
  },
  {
    "code": "2039",
    "title": "Zóio de Lula",
    "artist": "Charlie Brown Jr.",
    "lyrics": "Meu escritório é na praia, eu tô sempre na área...",
    "category": "nacional"
  },
  {
    "code": "2040",
    "title": "Pelados em Santos",
    "artist": "Mamonas Assassinas",
    "lyrics": "Mina, seus cabelo é da hora, seu corpão violão...",
    "category": "nacional"
  },
  {
    "code": "2041",
    "title": "Robocop Gay",
    "artist": "Mamonas Assassinas",
    "lyrics": "Um puta viado bem sofisticado, boneca de ferro...",
    "category": "nacional"
  },
  {
    "code": "2042",
    "title": "Vira-Vira",
    "artist": "Mamonas Assassinas",
    "lyrics": "Fui convidado pra uma tal de suruba...",
    "category": "nacional"
  },
  {
    "code": "2043",
    "title": "Anna Júlia",
    "artist": "Los Hermanos",
    "lyrics": "Quem te vê passar assim por mim não sabe o que é sofrer...",
    "category": "nacional"
  },
  {
    "code": "2044",
    "title": "O Vencedor",
    "artist": "Los Hermanos",
    "lyrics": "Olha lá, quem vem do lado oposto e vem sem pressa...",
    "category": "nacional"
  },
  {
    "code": "2045",
    "title": "Como Eu Quero",
    "artist": "Kid Abelha",
    "lyrics": "Diz pra eu ficar muda faz cara de mistério...",
    "category": "nacional"
  },
  {
    "code": "2046",
    "title": "Pintura Íntima",
    "artist": "Kid Abelha",
    "lyrics": "Fazer amor de madrugada, amor com jeito de paixão...",
    "category": "nacional"
  },
  {
    "code": "2047",
    "title": "Lágrimas e Chuva",
    "artist": "Kid Abelha",
    "lyrics": "Eu pergunto a você, onde está o seu amor...",
    "category": "nacional"
  },
  {
    "code": "2048",
    "title": "Toda Forma de Amor",
    "artist": "Lulu Santos",
    "lyrics": "Eu considero justa toda forma de amor...",
    "category": "nacional"
  },
  {
    "code": "2049",
    "title": "Tempos Modernos",
    "artist": "Lulu Santos",
    "lyrics": "Eu vejo a vida melhor no futuro...",
    "category": "nacional"
  },
  {
    "code": "2050",
    "title": "Apenas Mais Uma de Amor",
    "artist": "Lulu Santos",
    "lyrics": "Eu gosto tanto de você que até prefiro esconder...",
    "category": "nacional"
  },
  {
    "code": "2051",
    "title": "Como Uma Onda",
    "artist": "Lulu Santos",
    "lyrics": "Nada do que foi será de novo do jeito que já foi um dia...",
    "category": "nacional"
  },
  {
    "code": "2052",
    "title": "Ovelha Negra",
    "artist": "Rita Lee",
    "lyrics": "Levava uma vida sossegada, gostava de sombra e água fresca...",
    "category": "nacional"
  },
  {
    "code": "2053",
    "title": "Mania de Você",
    "artist": "Rita Lee",
    "lyrics": "Meu bem, você me dá água na boca...",
    "category": "nacional"
  },
  {
    "code": "2054",
    "title": "Lança Perfume",
    "artist": "Rita Lee",
    "lyrics": "Lança menina, lança todo esse perfume...",
    "category": "nacional"
  },
  {
    "code": "2055",
    "title": "Metamorfose Ambulante",
    "artist": "Raul Seixas",
    "lyrics": "Eu prefiro ser essa metamorfose ambulante...",
    "category": "nacional"
  },
  {
    "code": "2056",
    "title": "Maluco Beleza",
    "artist": "Raul Seixas",
    "lyrics": "Enquanto você se esforça pra ser um sujeito normal...",
    "category": "nacional"
  },
  {
    "code": "2057",
    "title": "Gita",
    "artist": "Raul Seixas",
    "lyrics": "Às vezes você me pergunta por que é que eu sou tão calado...",
    "category": "nacional"
  },
  {
    "code": "2058",
    "title": "Tente Outra Vez",
    "artist": "Raul Seixas",
    "lyrics": "Veja, não diga que a canção está perdida...",
    "category": "nacional"
  },
  {
    "code": "2059",
    "title": "En Publier",
    "artist": "Ira!",
    "lyrics": "Flores plásticas não morrem...",
    "category": "nacional"
  },
  {
    "code": "2060",
    "title": "Envelheço na Cidade",
    "artist": "Ira!",
    "lyrics": "Outro ano se passou e eu continuo a mesma coisa...",
    "category": "nacional"
  },
  {
    "code": "2061",
    "title": "Vento Ventania",
    "artist": "Biquini Cavadão",
    "lyrics": "Vento ventania me leve pra qualquer lugar...",
    "category": "nacional"
  },
  {
    "code": "2062",
    "title": "Tédio",
    "artist": "Biquini Cavadão",
    "lyrics": "Sábado de sol, aluguei um caminhão...",
    "category": "nacional"
  },
  {
    "code": "2063",
    "title": "Mulher de Fases",
    "artist": "Raimundos",
    "lyrics": "Que mulher ruim, jogou minhas coisas fora...",
    "category": "nacional"
  },
  {
    "code": "2064",
    "title": "A Mais Pedida",
    "artist": "Raimundos",
    "lyrics": "Tô com saudade de você, debaixo do meu cobertor...",
    "category": "nacional"
  },
  {
    "code": "2065",
    "title": "Whisky a Go-Go",
    "artist": "Roupa Nova",
    "lyrics": "Foi numa festa, gelo e cuba-libre e na vitrola whisky a go-go...",
    "category": "nacional"
  },
  {
    "code": "2066",
    "title": "Dona",
    "artist": "Roupa Nova",
    "lyrics": "Dona desses olhos tão azuis que me encantam...",
    "category": "nacional"
  },
  {
    "code": "2067",
    "title": "A Viagem",
    "artist": "Roupa Nova",
    "lyrics": "Há tanta vida lá fora, aqui dentro sempre faz calor...",
    "category": "nacional"
  },
  {
    "code": "2068",
    "title": "Volta Pra Mim",
    "artist": "Roupa Nova",
    "lyrics": "Amanheceu, olho em volta e você não está...",
    "category": "nacional"
  },
  {
    "code": "2069",
    "title": "Linda Demais",
    "artist": "Roupa Nova",
    "lyrics": "Linda, só você me fascina...",
    "category": "nacional"
  },
  {
    "code": "2070",
    "title": "Razões e Emoções",
    "artist": "NX Zero",
    "lyrics": "Entre razões e emoções a saída é fazer valer a pena...",
    "category": "nacional"
  },
  {
    "code": "2071",
    "title": "Cedo ou Tarde",
    "artist": "NX Zero",
    "lyrics": "E mesmo sem te ver, acho até que é melhor assim...",
    "category": "nacional"
  },
  {
    "code": "2072",
    "title": "Infinita Highway",
    "artist": "Engenheiros do Hawaii",
    "lyrics": "Você me faz correr demais os riscos desta highway...",
    "category": "nacional"
  },
  {
    "code": "2073",
    "title": "Terra de Gigantes",
    "artist": "Engenheiros do Hawaii",
    "lyrics": "Hey mãe, já não esquento a cabeça...",
    "category": "nacional"
  },
  {
    "code": "2074",
    "title": "Pra Ser Sincero",
    "artist": "Engenheiros do Hawaii",
    "lyrics": "Pra ser sincero, não espero que você entenda...",
    "category": "nacional"
  },
  {
    "code": "3001",
    "title": "Cheia de Manias",
    "artist": "Raça Negra",
    "lyrics": "Cheia de manias, toda dengosa, menina bonita sabe que é gostosa...",
    "category": "nacional"
  },
  {
    "code": "3002",
    "title": "É Tarde Demais",
    "artist": "Raça Negra",
    "lyrics": "Olha só você, depois de me perder veio me procurar...",
    "category": "nacional"
  },
  {
    "code": "3003",
    "title": "Ciúme de Você",
    "artist": "Raça Negra",
    "lyrics": "Se você me der mais uma chance de te amar...",
    "category": "nacional"
  },
  {
    "code": "3004",
    "title": "Deus Me Livre",
    "artist": "Raça Negra",
    "lyrics": "Deus me livre ficar sem você, meu amor...",
    "category": "nacional"
  },
  {
    "code": "3005",
    "title": "Quando Te Encontrei",
    "artist": "Raça Negra",
    "lyrics": "Quando te encontrei, toda linda no salão...",
    "category": "nacional"
  },
  {
    "code": "3006",
    "title": "Me Apaixonei Pela Pessoa Errada",
    "artist": "Exaltasamba",
    "lyrics": "Me apaixonei pela pessoa errada, ninguém sabe o quanto estou sofrendo...",
    "category": "nacional"
  },
  {
    "code": "3007",
    "title": "Telegrama",
    "artist": "Exaltasamba",
    "lyrics": "Ia te mandar um telegrama mas resolvi ligar...",
    "category": "nacional"
  },
  {
    "code": "3008",
    "title": "Tá Vendo Aquela Lua",
    "artist": "Exaltasamba",
    "lyrics": "Tá vendo aquela lua que brilha lá no céu?...",
    "category": "nacional"
  },
  {
    "code": "3009",
    "title": "Livre Pra Voar",
    "artist": "Exaltasamba",
    "lyrics": "Quando a gente se encontrar, tudo vai ser diferente...",
    "category": "nacional"
  },
  {
    "code": "3010",
    "title": "Depois do Prazer",
    "artist": "Só Pra Contrariar",
    "lyrics": "Tô fazendo amor com outra pessoa mas meu coração vai ser pra sempre seu...",
    "category": "nacional"
  },
  {
    "code": "3011",
    "title": "Mineirinho",
    "artist": "Só Pra Contrariar",
    "lyrics": "Eu não tenho culpa de comer quietinho...",
    "category": "nacional"
  },
  {
    "code": "3012",
    "title": "Essa Tal Liberdade",
    "artist": "Só Pra Contrariar",
    "lyrics": "O que é que eu vou fazer com essa tal liberdade?...",
    "category": "nacional"
  },
  {
    "code": "3013",
    "title": "Sai da Minha Aba",
    "artist": "Só Pra Contrariar",
    "lyrics": "Sai da minha aba, sai pra lá...",
    "category": "nacional"
  },
  {
    "code": "3014",
    "title": "Cilada",
    "artist": "Molejo",
    "lyrics": "Não era amor, ôh ôh, era cilada...",
    "category": "nacional"
  },
  {
    "code": "3015",
    "title": "Brincadeira de Criança",
    "artist": "Molejo",
    "lyrics": "Brincadeira de criança, como é bom, como é bom...",
    "category": "nacional"
  },
  {
    "code": "3016",
    "title": "Dança da Vassoura",
    "artist": "Molejo",
    "lyrics": "Varre, varre, varre vassourinha...",
    "category": "nacional"
  },
  {
    "code": "3017",
    "title": "Derê",
    "artist": "Soweto / Belo",
    "lyrics": "Derê derêrere derê derêrere...",
    "category": "nacional"
  },
  {
    "code": "3018",
    "title": "Farol das Estrelas",
    "artist": "Soweto / Belo",
    "lyrics": "Toda vez que a noite vem, olho pro céu e vejo você...",
    "category": "nacional"
  },
  {
    "code": "3019",
    "title": "Perfume",
    "artist": "Belo",
    "lyrics": "O seu perfume tá no meu travesseiro...",
    "category": "nacional"
  },
  {
    "code": "3020",
    "title": "Reinventar",
    "artist": "Belo",
    "lyrics": "Diz que é mentira, que não acabou...",
    "category": "nacional"
  },
  {
    "code": "3021",
    "title": "Deixa Acontecer",
    "artist": "Grupo Revelação",
    "lyrics": "Deixa acontecer naturalmente, eu não quero ver você chorar...",
    "category": "nacional"
  },
  {
    "code": "3022",
    "title": "Coração Radiante",
    "artist": "Grupo Revelação",
    "lyrics": "Meu coração tá radiante com a sua presença...",
    "category": "nacional"
  },
  {
    "code": "3023",
    "title": "Velocidade da Luz",
    "artist": "Grupo Revelação",
    "lyrics": "O tempo passa rápido, na velocidade da luz...",
    "category": "nacional"
  },
  {
    "code": "3024",
    "title": "Não Deixe o Samba Morrer",
    "artist": "Alcione",
    "lyrics": "Não deixe o samba morrer, não deixe o samba acabar...",
    "category": "nacional"
  },
  {
    "code": "3025",
    "title": "Você Me Vira a Cabeça",
    "artist": "Alcione",
    "lyrics": "Você me vira a cabeça, me tira do sério...",
    "category": "nacional"
  },
  {
    "code": "3026",
    "title": "Meu Ébano",
    "artist": "Alcione",
    "lyrics": "Ele é o meu chocolate, meu confeito...",
    "category": "nacional"
  },
  {
    "code": "3027",
    "title": "Deixa a Vida Me Levar",
    "artist": "Zeca Pagodinho",
    "lyrics": "Deixa a vida me levar, vida leva eu...",
    "category": "nacional"
  },
  {
    "code": "3028",
    "title": "Coração em Desalinho",
    "artist": "Zeca Pagodinho",
    "lyrics": "Numa folha qualquer eu desenho um sol amarelo...",
    "category": "nacional"
  },
  {
    "code": "3029",
    "title": "Verdade",
    "artist": "Zeca Pagodinho",
    "lyrics": "Descobri que te amo demais, descobri em você minha paz...",
    "category": "nacional"
  },
  {
    "code": "3030",
    "title": "Vou Festejar",
    "artist": "Beth Carvalho",
    "lyrics": "Chora, não vou ligar, você pagou com traição...",
    "category": "nacional"
  },
  {
    "code": "3031",
    "title": "Coisinha do Pai",
    "artist": "Beth Carvalho",
    "lyrics": "Ô coisinha tão bonitinha do pai...",
    "category": "nacional"
  },
  {
    "code": "3032",
    "title": "Eva",
    "artist": "Banda Eva / Ivete Sangalo",
    "lyrics": "Minha pequena Eva, Eva, o nosso amor na última astronave...",
    "category": "nacional"
  },
  {
    "code": "3033",
    "title": "Beleza Rara",
    "artist": "Banda Eva",
    "lyrics": "Não sei por que você se foi, quantas saudades eu senti...",
    "category": "nacional"
  },
  {
    "code": "3034",
    "title": "Festa",
    "artist": "Ivete Sangalo",
    "lyrics": "Festa no gueto, pode vir, pode chegar...",
    "category": "nacional"
  },
  {
    "code": "3035",
    "title": "Sorte Grande (Poeira)",
    "artist": "Ivete Sangalo",
    "lyrics": "A minha sorte grande foi você cair do céu, poeira, poeira...",
    "category": "nacional"
  },
  {
    "code": "3036",
    "title": "Quando a Chuva Passar",
    "artist": "Ivete Sangalo",
    "lyrics": "Pra que falar se você não quer me ouvir?...",
    "category": "nacional"
  },
  {
    "code": "3037",
    "title": "Se Eu Não Te Amasse Tanto Assim",
    "artist": "Ivete Sangalo",
    "lyrics": "Meu coração sem direção voando só por voar...",
    "category": "nacional"
  },
  {
    "code": "3038",
    "title": "O Canto da Cidade",
    "artist": "Daniela Mercury",
    "lyrics": "A cor dessa cidade sou eu, o canto dessa cidade é meu...",
    "category": "nacional"
  },
  {
    "code": "3039",
    "title": "Rapunzel",
    "artist": "Daniela Mercury",
    "lyrics": "Meu amor de trancinhas, o meu amor me dá água na boca...",
    "category": "nacional"
  },
  {
    "code": "3040",
    "title": "Segura o Tchan",
    "artist": "É o Tchan",
    "lyrics": "Pau que nasce torto nunca se endireita...",
    "category": "nacional"
  },
  {
    "code": "3041",
    "title": "Dança da Cordinha",
    "artist": "É o Tchan",
    "lyrics": "Passa, passa, passa a cordinha...",
    "category": "nacional"
  },
  {
    "code": "3042",
    "title": "100% Você",
    "artist": "Chiclete com Banana",
    "lyrics": "Eu quero você pra mim, amor sem fim...",
    "category": "nacional"
  },
  {
    "code": "3043",
    "title": "Diga Que Valeu",
    "artist": "Chiclete com Banana",
    "lyrics": "Diga que valeu, o nosso amor foi lindo...",
    "category": "nacional"
  },
  {
    "code": "3044",
    "title": "Dança do Vampiro",
    "artist": "Asa de Águia",
    "lyrics": "Vem dançar a dança do vampiro...",
    "category": "nacional"
  },
  {
    "code": "4001",
    "title": "Não Quero Dinheiro (Só Quero Amar)",
    "artist": "Tim Maia",
    "lyrics": "Vou pedir ao sol pra clarear o seu caminho...",
    "category": "nacional"
  },
  {
    "code": "4002",
    "title": "Descobridor dos Sete Mares",
    "artist": "Tim Maia",
    "lyrics": "Uma lua nova e a noite inteira pra gente amar...",
    "category": "nacional"
  },
  {
    "code": "4003",
    "title": "Gostava Tanto de Você",
    "artist": "Tim Maia",
    "lyrics": "Não sei por que você se foi, quantas saudades eu senti...",
    "category": "nacional"
  },
  {
    "code": "4004",
    "title": "Azul da Cor do Mar",
    "artist": "Tim Maia",
    "lyrics": "Ah, se o mundo inteiro me pudesse ouvir...",
    "category": "nacional"
  },
  {
    "code": "4005",
    "title": "Primavera",
    "artist": "Tim Maia",
    "lyrics": "Quando o inverno chegar, eu quero estar junto a ti...",
    "category": "nacional"
  },
  {
    "code": "4006",
    "title": "Me Dê Motivo",
    "artist": "Tim Maia",
    "lyrics": "Me dê motivo pra ir embora, estou vendo a hora de te perder...",
    "category": "nacional"
  },
  {
    "code": "4007",
    "title": "Olhos Coloridos",
    "artist": "Sandra de Sá",
    "lyrics": "Os meus olhos coloridos me fazem refletir...",
    "category": "nacional"
  },
  {
    "code": "4008",
    "title": "Sozinha",
    "artist": "Sandra de Sá / Caetano Veloso",
    "lyrics": "Às vezes no silêncio da noite eu fico imaginando nós dois...",
    "category": "nacional"
  },
  {
    "code": "4009",
    "title": "Taj Mahal",
    "artist": "Jorge Ben Jor",
    "lyrics": "Foi a mais linda história de amor que o mundo conheceu...",
    "category": "nacional"
  },
  {
    "code": "4010",
    "title": "País Tropical",
    "artist": "Jorge Ben Jor",
    "lyrics": "Moro num país tropical, abençoado por Deus e bonito por natureza...",
    "category": "nacional"
  },
  {
    "code": "4011",
    "title": "Mas Que Nada",
    "artist": "Jorge Ben Jor",
    "lyrics": "O ariá raió, obá obá obá...",
    "category": "nacional"
  },
  {
    "code": "4012",
    "title": "Chove Chuva",
    "artist": "Jorge Ben Jor",
    "lyrics": "Chove chuva, chove sem parar...",
    "category": "nacional"
  },
  {
    "code": "4013",
    "title": "W/Brasil",
    "artist": "Jorge Ben Jor",
    "lyrics": "Alô, alô W/Brasil, Jacarezinho, avião...",
    "category": "nacional"
  },
  {
    "code": "4014",
    "title": "Sina",
    "artist": "Djavan",
    "lyrics": "Pai e mãe, ouro de mina, coração, desejo e sina...",
    "category": "nacional"
  },
  {
    "code": "4015",
    "title": "Se...",
    "artist": "Djavan",
    "lyrics": "Você disse que não sabe se não, mas também não disse que sim...",
    "category": "nacional"
  },
  {
    "code": "4016",
    "title": "Oceano",
    "artist": "Djavan",
    "lyrics": "Assim que o dia amanheceu, lá no mar alto da paixão...",
    "category": "nacional"
  },
  {
    "code": "4017",
    "title": "Samurai",
    "artist": "Djavan",
    "lyrics": "Ai quanto querer cabe em meu coração...",
    "category": "nacional"
  },
  {
    "code": "4018",
    "title": "Burguesinha",
    "artist": "Seu Jorge",
    "lyrics": "Vai na cabelereira, faz massagem, sauna, piscina...",
    "category": "nacional"
  },
  {
    "code": "4019",
    "title": "Amiga da Minha Mulher",
    "artist": "Seu Jorge",
    "lyrics": "Ela é amiga da minha mulher, pois é, pois é...",
    "category": "nacional"
  },
  {
    "code": "4020",
    "title": "Mina do Condomínio",
    "artist": "Seu Jorge",
    "lyrics": "Ela mora no meu condomínio, tem um jeito de menina moça...",
    "category": "nacional"
  },
  {
    "code": "4021",
    "title": "Carolina",
    "artist": "Seu Jorge",
    "lyrics": "Carolina é uma menina bem difícil de esquecer...",
    "category": "nacional"
  },
  {
    "code": "4022",
    "title": "Como Nossos Pais",
    "artist": "Elis Regina",
    "lyrics": "Não pense que você perdeu a batalha antes mesmo de começar...",
    "category": "nacional"
  },
  {
    "code": "4023",
    "title": "O Bêbado e a Equilibrista",
    "artist": "Elis Regina",
    "lyrics": "Caía a tarde feito um viaduto e um bêbado trajando luto...",
    "category": "nacional"
  },
  {
    "code": "4024",
    "title": "Águas de Março",
    "artist": "Elis Regina & Tom Jobim",
    "lyrics": "É pau, é pedra, é o fim do caminho...",
    "category": "nacional"
  },
  {
    "code": "4025",
    "title": "Garota de Ipanema",
    "artist": "Tom Jobim & Vinicius de Moraes",
    "lyrics": "Olha que coisa mais linda, mais cheia de graça...",
    "category": "nacional"
  },
  {
    "code": "4026",
    "title": "Chega de Saudade",
    "artist": "João Gilberto / Tom Jobim",
    "lyrics": "Vai, minha tristeza, e diz a ela que sem ela não pode ser...",
    "category": "nacional"
  },
  {
    "code": "4027",
    "title": "Detalhes",
    "artist": "Roberto Carlos",
    "lyrics": "Não adianta nem tentar me esquecer, durante muito tempo em sua vida...",
    "category": "nacional"
  },
  {
    "code": "4028",
    "title": "Como É Grande o Meu Amor Por Você",
    "artist": "Roberto Carlos",
    "lyrics": "Eu tenho tanto pra te falar, mas com palavras não sei dizer...",
    "category": "nacional"
  },
  {
    "code": "4029",
    "title": "Jesus Cristo",
    "artist": "Roberto Carlos",
    "lyrics": "Jesus Cristo, Jesus Cristo, eu estou aqui...",
    "category": "nacional"
  },
  {
    "code": "4030",
    "title": "Emoções",
    "artist": "Roberto Carlos",
    "lyrics": "Quando eu estou aqui, eu vejo a vida renascer...",
    "category": "nacional"
  },
  {
    "code": "4031",
    "title": "Show das Poderosas",
    "artist": "Anitta",
    "lyrics": "Prepara, que agora é a hora do show das poderosas...",
    "category": "nacional"
  },
  {
    "code": "4032",
    "title": "Bang",
    "artist": "Anitta",
    "lyrics": "Vem na maldade, com vontade, curva o corpo e vai no chão...",
    "category": "nacional"
  },
  {
    "code": "4033",
    "title": "Envolver",
    "artist": "Anitta",
    "lyrics": "Dime cómo hacemos, tú me dices cuándo...",
    "category": "nacional"
  },
  {
    "code": "4034",
    "title": "Pesadão",
    "artist": "Iza part. Marcelo Falcão",
    "lyrics": "Em terra de leão ninguém sabe quem é o rei...",
    "category": "nacional"
  },
  {
    "code": "4035",
    "title": "Dona de Mim",
    "artist": "Iza",
    "lyrics": "Já me perdi tentando me encontrar, já fiz de tudo pra não me entregar...",
    "category": "nacional"
  },
  {
    "code": "4036",
    "title": "K.O.",
    "artist": "Pabllo Vittar",
    "lyrics": "Seu amor me pegou, cê bateu tão forte com o teu amor...",
    "category": "nacional"
  },
  {
    "code": "4037",
    "title": "Corpo Sensual",
    "artist": "Pabllo Vittar",
    "lyrics": "Mandando ver na pista, vem que hoje tá que tá...",
    "category": "nacional"
  },
  {
    "code": "4038",
    "title": "Xote da Alegria",
    "artist": "Falamansa",
    "lyrics": "Se um dia eu te encontrar de novo, vou te dar aquele abraço...",
    "category": "nacional"
  },
  {
    "code": "4039",
    "title": "Rindo à Toa",
    "artist": "Falamansa",
    "lyrics": "Tô rindo à toa, não quero saber de tristeza...",
    "category": "nacional"
  },
  {
    "code": "4040",
    "title": "Esperando na Janela",
    "artist": "Gilberto Gil",
    "lyrics": "Ainda me lembro do seu caminhar, do seu sorriso no espelho...",
    "category": "nacional"
  },
  {
    "code": "5001",
    "title": "Bohemian Rhapsody",
    "artist": "Queen",
    "lyrics": "Is this the real life? Is this just fantasy? Caught in a landslide...",
    "category": "internacional"
  },
  {
    "code": "5002",
    "title": "Don't Stop Me Now",
    "artist": "Queen",
    "lyrics": "Tonight I'm gonna have myself a real good time...",
    "category": "internacional"
  },
  {
    "code": "5003",
    "title": "I Want to Break Free",
    "artist": "Queen",
    "lyrics": "I want to break free, I want to break free from your lies...",
    "category": "internacional"
  },
  {
    "code": "5004",
    "title": "We Will Rock You",
    "artist": "Queen",
    "lyrics": "Buddy, you're a boy, make a big noise playing in the street...",
    "category": "internacional"
  },
  {
    "code": "5005",
    "title": "We Are the Champions",
    "artist": "Queen",
    "lyrics": "I've paid my dues, time after time, I've done my sentence...",
    "category": "internacional"
  },
  {
    "code": "5006",
    "title": "Love of My Life",
    "artist": "Queen",
    "lyrics": "Love of my life, you've hurt me, you've broken my heart...",
    "category": "internacional"
  },
  {
    "code": "5007",
    "title": "Radio Ga Ga",
    "artist": "Queen",
    "lyrics": "I'd sit alone and watch your light, my only friend through teenage nights...",
    "category": "internacional"
  },
  {
    "code": "5008",
    "title": "Livin' on a Prayer",
    "artist": "Bon Jovi",
    "lyrics": "Tommy used to work on the docks, union's been on strike...",
    "category": "internacional"
  },
  {
    "code": "5009",
    "title": "It's My Life",
    "artist": "Bon Jovi",
    "lyrics": "This ain't a song for the broken-hearted, no silent prayer for the faith-departed...",
    "category": "internacional"
  },
  {
    "code": "5010",
    "title": "Always",
    "artist": "Bon Jovi",
    "lyrics": "This Romeo is bleeding, but you can't see his blood...",
    "category": "internacional"
  },
  {
    "code": "5011",
    "title": "You Give Love a Bad Name",
    "artist": "Bon Jovi",
    "lyrics": "Shot through the heart and you're to blame, darling you give love a bad name...",
    "category": "internacional"
  },
  {
    "code": "5012",
    "title": "Hey Jude",
    "artist": "The Beatles",
    "lyrics": "Hey Jude, don't make it bad, take a sad song and make it better...",
    "category": "internacional"
  },
  {
    "code": "5013",
    "title": "Let It Be",
    "artist": "The Beatles",
    "lyrics": "When I find myself in times of trouble, Mother Mary comes to me...",
    "category": "internacional"
  },
  {
    "code": "5014",
    "title": "Yesterday",
    "artist": "The Beatles",
    "lyrics": "Yesterday all my troubles seemed so far away...",
    "category": "internacional"
  },
  {
    "code": "5015",
    "title": "Twist and Shout",
    "artist": "The Beatles",
    "lyrics": "Well, shake it up, baby, now, twist and shout...",
    "category": "internacional"
  },
  {
    "code": "5016",
    "title": "Come Together",
    "artist": "The Beatles",
    "lyrics": "Here come old flat top, he come groovin' up slowly...",
    "category": "internacional"
  },
  {
    "code": "5017",
    "title": "Sweet Child O' Mine",
    "artist": "Guns N' Roses",
    "lyrics": "She's got a smile that it seems to me reminds me of childhood memories...",
    "category": "internacional"
  },
  {
    "code": "5018",
    "title": "November Rain",
    "artist": "Guns N' Roses",
    "lyrics": "When I look into your eyes, I can see a love restrained...",
    "category": "internacional"
  },
  {
    "code": "5019",
    "title": "Don't Cry",
    "artist": "Guns N' Roses",
    "lyrics": "Talk to me softly, there's something in your eyes...",
    "category": "internacional"
  },
  {
    "code": "5020",
    "title": "Patience",
    "artist": "Guns N' Roses",
    "lyrics": "One, two, one, two, three, four... Shed a tear 'cause I'm missin' you...",
    "category": "internacional"
  },
  {
    "code": "5021",
    "title": "Billie Jean",
    "artist": "Michael Jackson",
    "lyrics": "She was more like a beauty queen from a movie scene...",
    "category": "internacional"
  },
  {
    "code": "5022",
    "title": "Beat It",
    "artist": "Michael Jackson",
    "lyrics": "They told him, don't you ever come around here...",
    "category": "internacional"
  },
  {
    "code": "5023",
    "title": "Thriller",
    "artist": "Michael Jackson",
    "lyrics": "It's close to midnight and something evil's lurking in the dark...",
    "category": "internacional"
  },
  {
    "code": "5024",
    "title": "Black or White",
    "artist": "Michael Jackson",
    "lyrics": "I took my baby on a Saturday bang, boy is that girl with you?...",
    "category": "internacional"
  },
  {
    "code": "5025",
    "title": "Man in the Mirror",
    "artist": "Michael Jackson",
    "lyrics": "I'm gonna make a change, for once in my life...",
    "category": "internacional"
  },
  {
    "code": "5026",
    "title": "Like a Virgin",
    "artist": "Madonna",
    "lyrics": "I made it through the wilderness, somehow I made it through...",
    "category": "internacional"
  },
  {
    "code": "5027",
    "title": "Material Girl",
    "artist": "Madonna",
    "lyrics": "Some boys kiss me, some boys hug me, I think they're okay...",
    "category": "internacional"
  },
  {
    "code": "5028",
    "title": "Like a Prayer",
    "artist": "Madonna",
    "lyrics": "Life is a mystery, everyone must stand alone...",
    "category": "internacional"
  },
  {
    "code": "5029",
    "title": "Hung Up",
    "artist": "Madonna",
    "lyrics": "Time goes by so slowly for those who wait...",
    "category": "internacional"
  },
  {
    "code": "5030",
    "title": "I Will Always Love You",
    "artist": "Whitney Houston",
    "lyrics": "If I should stay, I would only be in your way...",
    "category": "internacional"
  },
  {
    "code": "5031",
    "title": "I Wanna Dance with Somebody",
    "artist": "Whitney Houston",
    "lyrics": "Clock strikes upon the hour and the sun begins to fade...",
    "category": "internacional"
  },
  {
    "code": "5032",
    "title": "My Heart Will Go On",
    "artist": "Celine Dion",
    "lyrics": "Every night in my dreams I see you, I feel you...",
    "category": "internacional"
  },
  {
    "code": "5033",
    "title": "Because You Loved Me",
    "artist": "Celine Dion",
    "lyrics": "For all those times you stood by me, for all the truth that you made me see...",
    "category": "internacional"
  },
  {
    "code": "5034",
    "title": "Dancing Queen",
    "artist": "ABBA",
    "lyrics": "You can dance, you can jive, having the time of your life...",
    "category": "internacional"
  },
  {
    "code": "5035",
    "title": "Mamma Mia",
    "artist": "ABBA",
    "lyrics": "I've been cheated by you since I don't know when...",
    "category": "internacional"
  },
  {
    "code": "5036",
    "title": "Gimme! Gimme! Gimme!",
    "artist": "ABBA",
    "lyrics": "Half past twelve and I'm watching the late show in my flat all alone...",
    "category": "internacional"
  },
  {
    "code": "5037",
    "title": "Stayin' Alive",
    "artist": "Bee Gees",
    "lyrics": "Well, you can tell by the way I use my walk I'm a woman's man, no time to talk...",
    "category": "internacional"
  },
  {
    "code": "5038",
    "title": "How Deep Is Your Love",
    "artist": "Bee Gees",
    "lyrics": "I know your eyes in the morning sun, I feel you touch me in the pouring rain...",
    "category": "internacional"
  },
  {
    "code": "5039",
    "title": "Girls Just Want to Have Fun",
    "artist": "Cyndi Lauper",
    "lyrics": "I come home in the morning light, my mother says: When you gonna live your life right?...",
    "category": "internacional"
  },
  {
    "code": "5040",
    "title": "Time After Time",
    "artist": "Cyndi Lauper",
    "lyrics": "Lying in my bed I hear the clock tick and think of you...",
    "category": "internacional"
  },
  {
    "code": "5041",
    "title": "Take On Me",
    "artist": "A-ha",
    "lyrics": "Talking away, I don't know what I'm to say...",
    "category": "internacional"
  },
  {
    "code": "5042",
    "title": "Hunting High and Low",
    "artist": "A-ha",
    "lyrics": "Here I am, and who can say if I've been crying?...",
    "category": "internacional"
  },
  {
    "code": "5043",
    "title": "Careless Whisper",
    "artist": "George Michael",
    "lyrics": "I feel so unsure as I take your hand and lead you to the dance floor...",
    "category": "internacional"
  },
  {
    "code": "5044",
    "title": "Faith",
    "artist": "George Michael",
    "lyrics": "Well I guess it would be nice if I could touch your body...",
    "category": "internacional"
  },
  {
    "code": "5045",
    "title": "Smells Like Teen Spirit",
    "artist": "Nirvana",
    "lyrics": "Load up on guns, bring your friends, it's fun to lose and to pretend...",
    "category": "internacional"
  },
  {
    "code": "5046",
    "title": "Come As You Are",
    "artist": "Nirvana",
    "lyrics": "Come as you are, as you were, as I want you to be...",
    "category": "internacional"
  },
  {
    "code": "5047",
    "title": "Wonderwall",
    "artist": "Oasis",
    "lyrics": "Today is gonna be the day that they're gonna throw it back to you...",
    "category": "internacional"
  },
  {
    "code": "5048",
    "title": "Don't Look Back in Anger",
    "artist": "Oasis",
    "lyrics": "Slip inside the eye of your mind, don't you know you might find...",
    "category": "internacional"
  },
  {
    "code": "5049",
    "title": "Yellow",
    "artist": "Coldplay",
    "lyrics": "Look at the stars, look how they shine for you...",
    "category": "internacional"
  },
  {
    "code": "5050",
    "title": "The Scientist",
    "artist": "Coldplay",
    "lyrics": "Come up to meet you, tell you I'm sorry, you don't know how lovely you are...",
    "category": "internacional"
  },
  {
    "code": "5051",
    "title": "Fix You",
    "artist": "Coldplay",
    "lyrics": "When you try your best but you don't succeed...",
    "category": "internacional"
  },
  {
    "code": "5052",
    "title": "Viva La Vida",
    "artist": "Coldplay",
    "lyrics": "I used to rule the world, seas would rise when I gave the word...",
    "category": "internacional"
  },
  {
    "code": "5053",
    "title": "With or Without You",
    "artist": "U2",
    "lyrics": "See the stone set in your eyes, see the thorn twist in your side...",
    "category": "internacional"
  },
  {
    "code": "5054",
    "title": "One",
    "artist": "U2",
    "lyrics": "Is it getting better, or do you feel the same?...",
    "category": "internacional"
  },
  {
    "code": "5055",
    "title": "Sunday Bloody Sunday",
    "artist": "U2",
    "lyrics": "I can't believe the news today, oh I can't close my eyes and make it go away...",
    "category": "internacional"
  },
  {
    "code": "5056",
    "title": "Californication",
    "artist": "Red Hot Chili Peppers",
    "lyrics": "Psychic spies from China try to steal your mind's elation...",
    "category": "internacional"
  },
  {
    "code": "5057",
    "title": "Otherside",
    "artist": "Red Hot Chili Peppers",
    "lyrics": "How long, how long will I slide? Separate my side...",
    "category": "internacional"
  },
  {
    "code": "5058",
    "title": "Under the Bridge",
    "artist": "Red Hot Chili Peppers",
    "lyrics": "Sometimes I feel like I don't have a partner, sometimes I feel like my only friend...",
    "category": "internacional"
  },
  {
    "code": "5059",
    "title": "In the End",
    "artist": "Linkin Park",
    "lyrics": "It starts with one thing, I don't know why, it doesn't even matter how hard you try...",
    "category": "internacional"
  },
  {
    "code": "5060",
    "title": "Numb",
    "artist": "Linkin Park",
    "lyrics": "I'm tired of being what you want me to be, feeling so faithless lost under the surface...",
    "category": "internacional"
  },
  {
    "code": "5061",
    "title": "Crawling",
    "artist": "Linkin Park",
    "lyrics": "Crawling in my skin, these wounds they will not heal...",
    "category": "internacional"
  },
  {
    "code": "5062",
    "title": "Bring Me to Life",
    "artist": "Evanescence",
    "lyrics": "How can you see into my eyes like open doors?...",
    "category": "internacional"
  },
  {
    "code": "5063",
    "title": "My Immortal",
    "artist": "Evanescence",
    "lyrics": "I'm so tired of being here, suppressed by all my childish fears...",
    "category": "internacional"
  },
  {
    "code": "5064",
    "title": "Basket Case",
    "artist": "Green Day",
    "lyrics": "Do you have the time to listen to me whine about nothing and everything all at once?...",
    "category": "internacional"
  },
  {
    "code": "5065",
    "title": "Boulevard of Broken Dreams",
    "artist": "Green Day",
    "lyrics": "I walk a lonely road, the only one that I have ever known...",
    "category": "internacional"
  },
  {
    "code": "5066",
    "title": "Wake Me Up When September Ends",
    "artist": "Green Day",
    "lyrics": "Summer has come and passed, the innocent can never last...",
    "category": "internacional"
  },
  {
    "code": "5067",
    "title": "Mr. Brightside",
    "artist": "The Killers",
    "lyrics": "Coming out of my cage and I've been doing just fine...",
    "category": "internacional"
  },
  {
    "code": "5068",
    "title": "Somebody Told Me",
    "artist": "The Killers",
    "lyrics": "Breaking my back just to know your name...",
    "category": "internacional"
  },
  {
    "code": "5069",
    "title": "All the Small Things",
    "artist": "Blink-182",
    "lyrics": "All the small things, true care, truth brings...",
    "category": "internacional"
  },
  {
    "code": "5070",
    "title": "I Want It That Way",
    "artist": "Backstreet Boys",
    "lyrics": "You are my fire, the one desire, believe when I say: I want it that way...",
    "category": "internacional"
  },
  {
    "code": "5071",
    "title": "Everybody (Backstreet's Back)",
    "artist": "Backstreet Boys",
    "lyrics": "Everybody, yeah, rock your body, yeah...",
    "category": "internacional"
  },
  {
    "code": "5072",
    "title": "...Baby One More Time",
    "artist": "Britney Spears",
    "lyrics": "Oh baby, baby, how was I supposed to know that something wasn't right here?...",
    "category": "internacional"
  },
  {
    "code": "5073",
    "title": "Oops!... I Did It Again",
    "artist": "Britney Spears",
    "lyrics": "Oops, I did it again, I played with your heart, got lost in the game...",
    "category": "internacional"
  },
  {
    "code": "5074",
    "title": "Toxic",
    "artist": "Britney Spears",
    "lyrics": "Baby, can't you see I'm calling? A guy like you should wear a warning...",
    "category": "internacional"
  },
  {
    "code": "5075",
    "title": "Hips Don't Lie",
    "artist": "Shakira part. Wyclef Jean",
    "lyrics": "Ladies up in here tonight, no fighting, no fighting...",
    "category": "internacional"
  },
  {
    "code": "5076",
    "title": "Whenever, Wherever",
    "artist": "Shakira",
    "lyrics": "Lucky you were born that far away, so we could both make fun of distance...",
    "category": "internacional"
  },
  {
    "code": "5077",
    "title": "Crazy in Love",
    "artist": "Beyoncé part. Jay-Z",
    "lyrics": "I look and stare so deep in your eyes, I touch on you more and more every time...",
    "category": "internacional"
  },
  {
    "code": "5078",
    "title": "Halo",
    "artist": "Beyoncé",
    "lyrics": "Remember those walls I built? Well, baby, they're tumbling down...",
    "category": "internacional"
  },
  {
    "code": "5079",
    "title": "Single Ladies",
    "artist": "Beyoncé",
    "lyrics": "All the single ladies, now put your hands up!...",
    "category": "internacional"
  },
  {
    "code": "5080",
    "title": "Uptown Funk",
    "artist": "Mark Ronson ft. Bruno Mars",
    "lyrics": "This hit, that ice cold, Michelle Pfeiffer, that white gold...",
    "category": "internacional"
  },
  {
    "code": "5081",
    "title": "Just the Way You Are",
    "artist": "Bruno Mars",
    "lyrics": "Oh, her eyes, her eyes make the stars look like they're not shinin'...",
    "category": "internacional"
  },
  {
    "code": "5082",
    "title": "When I Was Your Man",
    "artist": "Bruno Mars",
    "lyrics": "Same bed but it feels just a little bit bigger now...",
    "category": "internacional"
  },
  {
    "code": "5083",
    "title": "Rolling in the Deep",
    "artist": "Adele",
    "lyrics": "There's a fire starting in my heart, reaching a fever pitch and it's bringing me out the dark...",
    "category": "internacional"
  },
  {
    "code": "5084",
    "title": "Someone Like You",
    "artist": "Adele",
    "lyrics": "I heard that you're settled down, that you found a girl and you're married now...",
    "category": "internacional"
  },
  {
    "code": "5085",
    "title": "Hello",
    "artist": "Adele",
    "lyrics": "Hello, it's me. I was wondering if after all these years you'd like to meet...",
    "category": "internacional"
  },
  {
    "code": "5086",
    "title": "Bad Romance",
    "artist": "Lady Gaga",
    "lyrics": "Oh-oh-oh-oh-oh, oh-oh-oh-oh, oh-oh-oh, caught in a bad romance...",
    "category": "internacional"
  },
  {
    "code": "5087",
    "title": "Poker Face",
    "artist": "Lady Gaga",
    "lyrics": "Mum-mum-mum-mah, mum-mum-mum-mah...",
    "category": "internacional"
  },
  {
    "code": "5088",
    "title": "Shallow",
    "artist": "Lady Gaga & Bradley Cooper",
    "lyrics": "Tell me somethin', girl, are you happy in this modern world?...",
    "category": "internacional"
  },
  {
    "code": "5089",
    "title": "Don't Start Now",
    "artist": "Dua Lipa",
    "lyrics": "If you don't wanna see me dancing with somebody...",
    "category": "internacional"
  },
  {
    "code": "5090",
    "title": "Levitating",
    "artist": "Dua Lipa",
    "lyrics": "If you wanna run away with me, I know a galaxy...",
    "category": "internacional"
  },
  {
    "code": "5091",
    "title": "Shape of You",
    "artist": "Ed Sheeran",
    "lyrics": "The club isn't the best place to find a lover so the bar is where I go...",
    "category": "internacional"
  },
  {
    "code": "5092",
    "title": "Perfect",
    "artist": "Ed Sheeran",
    "lyrics": "I found a love for me, darling, just dive right in and follow my lead...",
    "category": "internacional"
  },
  {
    "code": "5093",
    "title": "Thinking Out Loud",
    "artist": "Ed Sheeran",
    "lyrics": "When your legs don't work like they used to before...",
    "category": "internacional"
  },
  {
    "code": "5094",
    "title": "Shake It Off",
    "artist": "Taylor Swift",
    "lyrics": "I stay out too late, got nothing in my brain...",
    "category": "internacional"
  },
  {
    "code": "5095",
    "title": "Blank Space",
    "artist": "Taylor Swift",
    "lyrics": "Nice to meet you, where you been? I could show you incredible things...",
    "category": "internacional"
  },
  {
    "code": "5096",
    "title": "Love Story",
    "artist": "Taylor Swift",
    "lyrics": "We were both young when I first saw you, I close my eyes and the flashback starts...",
    "category": "internacional"
  },
  {
    "code": "5097",
    "title": "Bad Guy",
    "artist": "Billie Eilish",
    "lyrics": "White shirt now red, my bloody nose, sleepin', you're on your tippy toes...",
    "category": "internacional"
  },
  {
    "code": "5098",
    "title": "My Way",
    "artist": "Frank Sinatra",
    "lyrics": "And now, the end is near, and so I face the final curtain...",
    "category": "internacional"
  },
  {
    "code": "5099",
    "title": "Fly Me to the Moon",
    "artist": "Frank Sinatra",
    "lyrics": "Fly me to the moon, let me play among the stars...",
    "category": "internacional"
  },
  {
    "code": "5100",
    "title": "Can't Help Falling in Love",
    "artist": "Elvis Presley",
    "lyrics": "Wise men say only fools rush in, but I can't help falling in love with you...",
    "category": "internacional"
  },
  {
    "code": "5101",
    "title": "Don't Stop Believin'",
    "artist": "Journey",
    "lyrics": "Just a small-town girl, livin' in a lonely world...",
    "category": "internacional"
  },
  {
    "code": "5102",
    "title": "Total Eclipse of the Heart",
    "artist": "Bonnie Tyler",
    "lyrics": "Turn around, every now and then I get a little bit lonely...",
    "category": "internacional"
  },
  {
    "code": "5103",
    "title": "Eye of the Tiger",
    "artist": "Survivor",
    "lyrics": "Risin' up, back on the street, did my time, took my chances...",
    "category": "internacional"
  },
  {
    "code": "5104",
    "title": "Africa",
    "artist": "Toto",
    "lyrics": "I hear the drums echoing tonight, but she hears only whispers of some quiet conversation...",
    "category": "internacional"
  },
  {
    "code": "5105",
    "title": "Sweet Caroline",
    "artist": "Neil Diamond",
    "lyrics": "Where it began, I can't begin to knowin', but then I know it's growin' strong...",
    "category": "internacional"
  },
  {
    "code": "5106",
    "title": "Zombie",
    "artist": "The Cranberries",
    "lyrics": "Another head hangs lowly, child is slowly taken...",
    "category": "internacional"
  },
  {
    "code": "5107",
    "title": "Linger",
    "artist": "The Cranberries",
    "lyrics": "If you, if you could return, don't let it burn...",
    "category": "internacional"
  },
  {
    "code": "5108",
    "title": "Creep",
    "artist": "Radiohead",
    "lyrics": "When you were here before, couldn't look you in the eye...",
    "category": "internacional"
  },
  {
    "code": "5109",
    "title": "Piano Man",
    "artist": "Billy Joel",
    "lyrics": "It's nine o'clock on a Saturday, the regular crowd shuffles in...",
    "category": "internacional"
  },
  {
    "code": "5110",
    "title": "Your Song",
    "artist": "Elton John",
    "lyrics": "It's a little bit funny this feeling inside, I'm not one of those who can easily hide...",
    "category": "internacional"
  },
  {
    "code": "5111",
    "title": "Rocket Man",
    "artist": "Elton John",
    "lyrics": "She packed my bags last night pre-flight, zero hour nine a.m....",
    "category": "internacional"
  },
  {
    "code": "5112",
    "title": "Hotel California",
    "artist": "Eagles",
    "lyrics": "On a dark desert highway, cool wind in my hair, warm smell of colitas...",
    "category": "internacional"
  },
  {
    "code": "5113",
    "title": "Despacito",
    "artist": "Luis Fonsi ft. Daddy Yankee",
    "lyrics": "Sí, sabes que ya llevo un rato mirándote, tengo que bailar contigo hoy...",
    "category": "internacional"
  },
  {
    "code": "5114",
    "title": "La Bamba",
    "artist": "Los Lobos / Ritchie Valens",
    "lyrics": "Para bailar la bamba se necesita una poca de gracia...",
    "category": "internacional"
  },
  {
    "code": "5115",
    "title": "Besame Mucho",
    "artist": "Consuelo Velázquez",
    "lyrics": "Bésame, bésame mucho, como si fuera esta noite a última vez...",
    "category": "internacional"
  }
];
if (typeof window !== 'undefined') { window.DEFAULT_SONGS = DEFAULT_SONGS; }
if (typeof module !== 'undefined' && module.exports) { module.exports = DEFAULT_SONGS; }
