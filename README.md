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

### Test resultaten Petra
- Petra vond het erg lastig om te begrijpen waar op de webpagina ze zich bevond. Dit kwam omdat ik wel alle area labels had toegevoegd, maar met best wel technische termen zoals clothingSelectionSection.
- Ook vond Petra dat de app nog iets te ingewikkeld was. Ze vertelde mij dat hoe minder zij hoefte te doen om er voor te zorgen dat de app werkte, hoe beter.
- Ze verdwaalde ook op de pagina. Dit kwam omdat ik twee formulieren had met radio buttons en ze vroegen bijna hetzelfde. De ene vroeg welk kledingstuk je hebt waar je iets mee wilt matchen en de andere vroeg wat je daarmee wilt matchen. Het klinkt heel logisch voor mij, maar Petra had de titel een keer niet gehoord, wat ervoor zorgde dat ze niet wist bij welke van de twee ze nou was.


### Resultaten:
- Petra ervoer problemen met het onderscheiden tussen de kledingstukken in Stap 1 (het kiezen van een item om te matchen) en Stap 2 (het kiezen van een item dat matcht met de eerste keuze).
- Feedback van Petra leidde tot het besluit om meer onderscheidende audio cues en duidelijkere aria-labels te implementeren voor betere navigatie.

<!-- Maak een proces verslag voor het vak Human centered design. Het vak gaat over het maken van een web app voor een blind persoon (Petra). zij wilt omdat ze niet kan zien haar kleding kunnen matchen dit doet de web app. Het belangerlijke is dat de area labels kloppen omdat ze natuurlijk niet kan zien wat er op het scherm gebeurd. Daarom is er ook geen tot heel weinig aandacht besteed aan de css. Ik wil dat je noteert dat ik met npm werk met liquid en expres. Het is belangrijk om het procesverslag te schrijven tot vorige week (Doe het ook per week) vorige week was week 2 en daar kwam ik er achter dat ze moeite had met het verschil zien van kleding waarmee ze iets wilt matchen (Stap 1) en wat ze daarbij wilt matchen (Stap 2)

Even een uitleg hoe mijn webapp werkt: Allereerst selecteer je een kledingstuk wat je wit matchen (bijvoorbeeld een jas of een broek, etc) daarna als je bijvoorbeeld jas selecteert krijg je een lijst met alle jassen die je hebt met een heel feitelijke beschrijving als je hebt geselecteerd wat je in dit geval voor jas wilt dan gaat de app verder naar wat je voor kledingstuk hebt geselecteerd bij stap 2 in dit voorbeeld nemen wij daar een broek voor. zelfde verhaal als je broek hebt geselecteerd dan kijkt de app welke broek past bij de jas die geselecteerd is.

Let op dat de text op havo 4 niveau geschreven word en maak mooi week 1: bedenken idee ..... week 2: uitwerken idee + test en dan te test resultaten die ik opnoemde -->

<!-- # Procesverslag voor het vak Human Centered Design

### Inleiding
Dit procesverslag beschrijft de ontwikkeling van een webapplicatie ontworpen voor een blinde gebruiker, Petra. Het doel van de webapp is om Petra te helpen haar kleding te matchen door middel van gedetailleerde beschrijvingen en audio-ondersteuning, aangezien zij de visuele elementen van de app niet kan waarnemen. Het ontwerp is vooral gericht op functionaliteit en toegankelijkheid, waarbij minder belang wordt gehecht aan visuele stijlelementen (CSS).

### Technische Details
Voor de ontwikkeling van deze applicatie gebruik ik de JavaScript-runtime 'Node.js', met pakketten beheerd door npm. De webapplicatie is gebouwd met het 'Express' framework voor de backend, en 'Liquid' als template engine voor de frontend, die helpt bij het dynamisch genereren van HTML gebaseerd op de serverdata.

### Week 1: Ideeontwikkeling
#### Activiteiten:
- Brainstormsessie om de behoeften van blinden bij het matchen van kleding te begrijpen.
- Definiëren van de basisfunctionaliteiten: selecteren van een kledingstuk en het vinden van een matchend item.
- Onderzoek naar toegankelijke webtechnologieën en best practices voor screenreader-vriendelijke websites.

#### Resultaten:
- Besloten om een webapp te ontwikkelen die stapsgewijs kledingkeuzes presenteert met uitgebreide beschrijvingen.
- Voorlopige beslissing om geen aandacht aan CSS te besteden en te focussen op toegankelijkheid.

### Week 2: Uitwerken idee + Test
#### Activiteiten:
- Implementatie van de basisflow van de webapp: gebruiker selecteert eerst een kledingstuk en krijgt daarna een lijst met beschrijvingen van bijvoorbeeld jassen.
- Na selectie van een jas, kan de gebruiker een tweede kledingstuk kiezen, zoals een broek, waarna de app suggesties doet voor passende combinaties.
- Eerste tests met Petra om de bruikbaarheid te beoordelen.

#### Resultaten:
- Petra ervoer problemen met het onderscheiden tussen de kledingstukken in Stap 1 (het kiezen van een item om te matchen) en Stap 2 (het kiezen van een item dat matcht met de eerste keuze). 
- Feedback van Petra leidde tot het besluit om meer onderscheidende audio cues en duidelijkere aria-labels te implementeren voor betere navigatie.

### Conclusie
De eerste twee weken van het project hebben essentiële inzichten opgeleverd in de behoeften van onze doelgebruiker, en belangrijke aanpassingen in de app's interface en functionaliteit geïnitieerd. Het voortdurende testen met Petra is cruciaal voor het succesvol afstemmen van de app op haar behoeften. De volgende stappen zullen zich richten op het verfijnen van de interactieprocessen en het verzekeren van een naadloze gebruikservaring voor Petra. -->













