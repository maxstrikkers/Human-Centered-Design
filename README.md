# Procesverslag

## Inleiding
Dit procesverslag beschrijft de ontwikkeling van een webapplicatie ontworpen voor een blinde gebruiker, Petra. Het doel van de webapp is om Petra te helpen haar kleding te matchen door middel van gedetailleerde beschrijvingen en audio-ondersteuning, aangezien zij de visuele elementen van de app niet kan waarnemen. Het ontwerp is vooral gericht op functionaliteit en toegankelijkheid, waarbij minder belang wordt gehecht de CSS.

Deze opdracht zorgt er voor dat ik als developer heel anders moet gaan kijken naar hoe een web app er uit ziet en werkt.

## Technische Details
Voor de ontwikkeling van deze applicatie gebruik ik de JavaScript-runtime 'Node.js', met pakketten beheerd door npm. De webapplicatie is gebouwd met het 'Express' framework voor de backend, en 'Liquid' als template engine voor de frontend, die helpt bij het dynamisch genereren van HTML gebaseerd op de serverdata.

## Week 1: Bedenken van het concept
### Activiteiten: 
- Brainstormsessie om de behoeften van Petra bij het matchen van kleding te begrijpen en veel vragen stellen over hoe zij op dit moment gebruik maakt van webistes.
- Definiëren van de basisfunctionaliteiten: selecteren van een kledingstuk en het vinden van een matchend item.
- Onderzoek naar toegankelijke webtechnologieën zoals Area labels en het bedenken hoe een screenreader werkt op mobiel maar ook op desktop.
  - Op mobiel bleek het tabben anders te werken dan op de desktop. Het leek voor mij in de eerste instatie alsof Petra door de webpagina aan het tabben was, maar het zijn de pijltjes op je toetsenbord.     

### Resultaten: 
- Besloten om een webapp te ontwikkelen die stapsgewijs kledingkeuzes presenteert met uitgebreide beschrijvingen.
- Test app gemaakt om te kijken of deze bedienbaar was met de mobiel. Ik heb gebruik gemaakt van de simulator app op Mac die een iPhone simuleert, compleet met toegankelijkheids functies zoals de voice over (Screen reader).
- Voorlopige beslissing om geen aandacht aan CSS te besteden en te focussen op toegankelijkheid.

## Week 2: Uitwerken idee + Test
### Activiteiten:
- Implementatie van de basisflow van de webapp: gebruiker selecteert eerst een kledingstuk en krijgt daarna een lijst met beschrijvingen van bijvoorbeeld jassen.
- Na selectie van een jas, kan de gebruiker een tweede kledingstuk kiezen, zoals een broek, waarna de app suggesties doet voor passende combinaties.
- Eerste tests met Petra om de bruikbaarheid te beoordelen.

### Test resultaten Petra:
- Petra vond het erg lastig om te begrijpen waar op de webpagina ze zich bevond. Dit kwam omdat ik wel alle area labels had toegevoegd, maar met best wel technische termen zoals clothingSelectionSection.
- Ook vond Petra dat de app nog iets te ingewikkeld was. Ze vertelde mij dat hoe minder zij hoefte te doen om er voor te zorgen dat de app werkte, hoe beter.
- Ze verdwaalde ook op de pagina. Dit kwam omdat ik twee formulieren had met radio buttons en ze vroegen bijna hetzelfde. De ene vroeg welk kledingstuk je hebt waar je iets mee wilt matchen en de andere vroeg wat je daarmee wilt matchen. Het klinkt heel logisch voor mij, maar Petra had de titel een keer niet gehoord, wat ervoor zorgde dat ze niet wist bij welke van de twee ze nou was.


### Resultaten:
- Petra ervoer problemen met het onderscheiden tussen de kledingstukken in Stap 1 (het kiezen van een item om te matchen) en Stap 2 (het kiezen van een item dat matcht met de eerste keuze).
- Feedback van Petra leidde tot het besluit om meer onderscheidende audio cues en duidelijkere aria-labels te implementeren voor betere navigatie.

## Week 3 Feedback verwerken + Test
### Activiteiten:
- Ik wilde er voor zorgen dat Petra niet meer in de verwarring zou raken als ze een kledingstuk moest selecteren. En dat ze ook begreep waar op de pagina ze was. Ik heb dit gedaan door alle technische termen weg te halen en het te benoemen op een manier dat ik het uit zou leggen aan iemand die niet heel veel verstand heeft van technische dingen, dit omdat ik liever heb dat het wat te simpel beschreven staat en dat het sneller begrepen word dan dat er heel veel ingewikkelde dingen in zitten.
- Om de verwarring die ze had bij het selecteren van kledingstukken weg te nemen heb ik bij alle radio buttons van de eerste stap duidelijk vermeld dat het stap 1 was en bij de 2e stap duidelijk vermeld dat het stap 2 was.
- Ook wilde ik iets doen aan het feit dat Petra door alle radio buttons heen moest gaan om naar het volgende onderdeel te komen, maar dat bleek lastiger dan ik dacht. Ik had het werkend op de computer, maar uit de test bleek dat het heel anders werkt op mobiel. Dit omdat als je met de screenreader naar links, rechts, boven of beneden beweegt hij dit ziet als een pijltje en niet als een tabje.


### Test resultaten Petra: 













