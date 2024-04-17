# Procesverslag

## Inleiding
Dit procesverslag beschrijft de ontwikkeling van een webapplicatie ontworpen voor een blinde gebruiker, Petra. Het doel van de webapp is om Petra te helpen haar kleding te matchen door middel van gedetailleerde beschrijvingen en audio-ondersteuning, aangezien zij de visuele elementen van de app niet kan waarnemen. Het ontwerp is vooral gericht op functionaliteit en toegankelijkheid, waarbij minder belang wordt gehecht de CSS.

## Technische Details
Voor de ontwikkeling van deze applicatie gebruik ik de JavaScript-runtime 'Node.js', met pakketten beheerd door npm. De webapplicatie is gebouwd met het 'Express' framework voor de backend, en 'Liquid' als template engine voor de frontend, die helpt bij het dynamisch genereren van HTML gebaseerd op de serverdata.

## Week 1: Bedenken van het concept
### Activiteiten: 
- Brainstormsessie om de behoeften van blinden bij het matchen van kleding te begrijpen.
- Definiëren van de basisfunctionaliteiten: selecteren van een kledingstuk en het vinden van een matchend item.
- Onderzoek naar toegankelijke webtechnologieën en best practices voor screenreader-vriendelijke websites.

### Resultaten: 
- Besloten om een webapp te ontwikkelen die stapsgewijs kledingkeuzes presenteert met uitgebreide beschrijvingen.
- Voorlopige beslissing om geen aandacht aan CSS te besteden en te focussen op toegankelijkheid.

## Week 2: Uitwerken idee + Test
### Activiteiten:
- Implementatie van de basisflow van de webapp: gebruiker selecteert eerst een kledingstuk en krijgt daarna een lijst met beschrijvingen van bijvoorbeeld jassen.
- Na selectie van een jas, kan de gebruiker een tweede kledingstuk kiezen, zoals een broek, waarna de app suggesties doet voor passende combinaties.
- Eerste tests met Petra om de bruikbaarheid te beoordelen.

### Resultaten:
- Petra ervoer problemen met het onderscheiden tussen de kledingstukken in Stap 1 (het kiezen van een item om te matchen) en Stap 2 (het kiezen van een item dat matcht met de eerste keuze).
- Feedback van Petra leidde tot het besluit om meer onderscheidende audio cues en duidelijkere aria-labels te implementeren voor betere navigatie.











