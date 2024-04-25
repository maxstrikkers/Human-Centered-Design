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
- Tot slot er voor zorgen dat er een manier is om kleding te matchen met elkaar.

### Test resultaten Petra: 
- Toen Petra ging testen bleek al meteen dat ik het probleem dat ze door elke radio button heen moest gaan niet op had gelost, hoewel het op mijn computer welk werkte kwam ik er achter dat het op de telefoon een heel stuk anders werkt. Dit heb ik hiervoor ook al beschreven. Petra hoorde zo veel verschillende categorieën dat ze bijna niet meer wist wat ze nou had geselecteerd. Dit is natuurlijk niet ideaal.
- Ook snapte ze niet heel goed wat er dan moest gebeuren als je kledingstukken had geselecteerd. Ze dacht dat het een kwestie was van op het type kleding klikken en dat ze dan automatisch naar de volgende pagina zou gaan, terwijl er eerst nog op de submit knop gedrukt moest worden. Dit was lastig voor haar omdat ze dat niet gewend was.
- Toen ze eenmaal met best wat hulp van mij het process had doorlopen en op de pagina uitkwam die haar liet zien wat de kledingstukken waren die goed paste bij wat ze had geselecteerd kwam ze eigelijk met de vraag "en nu?" Ik had hier nog niet heel erg bij nagedacht maar ze wilde ook nog de optie om iets nieuws te kunnen matchen en eventueel de eerder gematchte kleding op te slaan zodat ze haar hele outfit samen kon stellen.
- Het was me duidelijk dat ik toch even terug moest gaan naar de tekentafel om mijn concept een heel stuk gebruiksvriendelijker te maken.

### Resultaten:
- Ik ben vooral tot hele waardevolle inzichten gekomen dankzij de test met Petra. En heb een plan gemaakt om mijn app zo simpel mogelijk te maken.
- Ook heb ik de kleding matcher zelf werkend dus het matchen van kleding werkt.

## Week 4 Feedback verwerken + Laatste test
### Activieteiten:
- Ik ben bezig geweest met het opnieuw bedenken van de manier waarop Petra door de app navigeert. Waar ze aan het begin het kledingtype moest selecteren, zoals een jas, broek of iets anders, gevolgd door het type kledingstuk dat ze daarbij wilde matchen voordat ze het specifieke kledingstuk kon selecteren, heb ik het nu een stuk simpeler gemaakt. Op de beginpagina heb ik alle radio buttons vervangen door links. Dus als zij iets ziet wat ze wil, hoeft ze er maar één keer op te klikken. Dit lost ook het probleem op dat zij had met het door elk item moeten tabben voordat ze verder kon gaan.
- Ook heb ik de resultaten aangepast; het is bijvoorbeeld niet meer nodig om een kledingtype te selecteren dat je wilt matchen. Ze klikt nu op een specifiek kledingstuk, bijvoorbeeld een blauwe spijkerbroek, en dan zal het systeem automatisch alle kledingstukken laten zien die daarbij passen.
- Ik wilde in de eerste instantie helemaal niets doen met de styling, maar na een feedbackronde met docenten werd duidelijk dat als er toevallig iemand mee zat te kijken die Petra aan het helpen was, diegene ook bijna niet zou kunnen snappen wat er gebeurt op de pagina. Daarom ga ik de styling aanpassen zodat het ook voor mensen die kunnen zien duidelijk is waar ze zijn op de website.
- Ik wil ook proberen om een functie in te bouwen die ervoor zorgt dat Petra meerdere sets kleding kan selecteren, dus als ze een kledingstuk heeft geselecteerd, dat ze dan opnieuw een set kan maken. Deze sets moeten allemaal opgeslagen blijven zodat ze aan het eind een totale lijst kan vinden met kleding die goed bij elkaar past.

  
## Test Resultaten Petra:
- Petra vond het heel fijn dat ze niet meer door elke radio button heen hoefde te gaan. Dit zorgde er ook voor dat ze de weg op de pagina een stuk beter kon vinden dan voorheen. Het was voor haar duidelijk wat er wanneer moest gebeuren, maar ze miste een beetje de feitelijke beschrijving van de kledingstukken. Ze vertelde namelijk dat het voor haar heel lastig is om te kunnen bepalen of een jurk bijvoorbeeld vrolijk is; wat is vrolijk? Het werkt voor haar veel beter als ze niet het woord 'vrolijk' hoort, maar bijvoorbeeld een jurk met een felgele kleur en een zonnebloempatroon. Dan kan ze zelf bepalen of zij dit een vrolijke jurk vindt of niet.
- Petra miste weer aan het einde een knop om een nieuwe set te selecteren dit was de vorige keer ook al het geval.
- Ze vond het ook jammer dat als er bijvoorbeeld niks bij het kledingstuk dat zij had geselecteerd paste dat ze nieuwe kledingstukken toe kon voegen. Ze miste een manier om nieuwe dingen toe te voegen en om eventueel oude dingen aan te passen of te verwijderen.

## Wat zou ik doen als ik meer tijd had?
- Ik zou allereerst een functie maken die er voor zorgt dat Petra zelf nieuwe kledingstukken toe kan voegen, bewerken of verwijderen.
- Ook zou ik een random outfit selector toe willen voegen. Petra vertelde aan het begin dat ze soms helemaal geen inspiratie heeft en dat een optie om random een outfit te genereren een goede oplossing zou zijn voor dit probleen.
- Ik zou ook een menu willen waar de opties "Kledingkast bewerken", "Nieuwe outfit samenstellen" en "Random outfit samenstellen" in zitten. Iets wat het wat meer een geheel maakt.
- Ik zou tot slot nog een pagina willen maken waar al haar eerder gemaakte combinaties in staan, compleet met een verwijder paar of verwijder alles knop.


# Conclusie
Dit procesverslag laat goed zien hoe ik me door het project heen gewerkt heb, waarbij ik een webapplicatie ontwikkelde die helemaal afgestemd was op de behoeften van Petra, een blinde gebruiker. Dit was een heel ander soort project dan ik gewend ben, omdat ik echt vanaf nul moest beginnen met nadenken over design en gebruiksgemak vanuit het perspectief van iemand die de app niet kan zien. 

In het begin maakte ik nogal wat aannames over wat ik dacht dat handig zou zijn, maar veel van die aannames bleken niet te kloppen. Petra's wekelijkse testsessies waren echt heel waardevol. Elke keer dat zij kwam testen, leerde ik weer iets nieuws over hoe zij met de app omging, en elke feedbackronde hielp mij om betere keuzes te maken in het design. Dit heeft me laten realiseren hoe belangrijk het is om continu te testen en te leren van je gebruikers, vooral als je iets maakt voor mensen met specifieke behoeften.

Door de tests met Petra en steeds haar input te gebruiken om de app te verbeteren, heb ik veel beter leren begrijpen hoe ik toegankelijke applicaties kan ontwerpen. Het was soms echt een uitdaging om de juiste balans te vinden tussen wat technisch mogelijk is en wat het beste werkt voor Petra, maar het is gelukt om een app te maken die zij nu echt kan gebruiken. Dit project heeft me veel geleerd over het belang van toegankelijkheid in webdesign en hoe je als ontwikkelaar altijd moet blijven luisteren naar de mensen voor wie je iets maakt.

Al met al, dit project heeft mij niet alleen geholpen om mijn vaardigheden te verbeteren, maar het heeft mij ook waardevolle inzichten gegeven in hoe ik als ontwikkelaar het beste kan voldoen aan de eisen van gebruikers met speciale behoeften. Ik kijk ernaar uit om deze lessen toe te passen in mijn toekomstige projecten, waarbij gebruikerservaring en toegankelijkheid een grotere rol zullen spelen voor mij dan dat ze eerst deden.











