# landrup-dans-DEJENERUTA

landrup-dans-DEJENERUTA created by GitHub Classroom

# Tech Stach
### React: 
Jeg har valgt React Bibliotek til at bygge min applikation, fordi React har en genbrugelige komponenter. React har komponenter genanvendelighed, det giver udviklere mulighed for at bruge en komponent flere gange i stedet for at oprette flere komponenter. React er også let at forstå sammenlignet med andre Framework. Jeg kan virkelig godt lide react-udviklerværktøjer, fordi React-værktøjer hjælper mig med nemt at opdage mine barn- og forældrekomponente.
React har også et stærkt fællesskab, react-eksperter uploader jævnligt[regularly] gratis react tutorials på youtube og skriver dybdegående artikler om react tutorial og blogs på internettet. React har en god QA sites som stackoverflow, så hvis jeg sidder fast, mens jeg bruger react, kan jeg næsten altid få en løsning. React er en meget UI-fokuseret Bibliotek. 
På grund af React-skabelonen føler jeg, at jeg også sparer en masse tid under produktiviteten

# Core Frameworks:
### TailwindCss:
Tailwind CSS gør det hurtigere at skrive og vedligeholde koden til din applikation. Ved at bruge denne utility-first framework behøver du ikke skrive tilpasset CSS for at style din applikation. I stedet kan du bruge hjælpeklasser til at kontrollere udfyldning, margen, farve, skrifttype, skygge og mere af din applikation. den mest vellidte utility-first CSS-Framework til hurtig UI-oprettelse er Tailwind CSS. Det er nemt at tilpasse, tilpasser sig til enhver design, og byggestørrelsen er lille." Tailwind gør bare mit liv nemmere. Det er stadig CSS og du bruger flex grid osv. men bare hurtigere at skrive og vedligeholde.
TailwindCSS er for mig langt den bedste og mest effektive måde at skrive CSS på.
Men det kan helt sikkert føles som meget at lære, når man lige skal i gang.
Den officielle dokumentation er ret god, men nogle gange har du bare brug for et hurtigt overblik over alle de forskellige muligheder.

# Core Packet
### React-hook-form:
React Hook Form er et bibliotek, der hjælper mig med at validere formularer i React. Det er et minimalt bibliotek uden andre afhængigheder, mens det er effektivt og ligetil at bruge, hvilket kræver, at udviklere skriver færre linjer kode end andre formbiblioteker.

### Yup:
Yup er en JavaScript-skemabygger til værdiparsing og validering. Definer et skema, valider formen på en eksisterende værdi eller begge dele. Yup skemaer er ekstremt udtryksfulde og tillader modellering af komplekse, indbyrdes afhængige valideringer.

### React-router-dom:
React Router Dom bruges til at bygge enkeltsides applikationer, dvs. applikationer, der har mange sider eller komponenter, men siden bliver aldrig opdateret i stedet for, at indholdet hentes dynamisk baseret på URL'en. Denne proces kaldes Routing, og den er muliggjort ved hjælp af React Router Dom.

# Versionsstyring:
Jeg brugte github som mit projektstyringsværktøj, jeg lavede et issue og Github kanban board og styrede mit projekt. GitHub er en kode-hosting-platform til versionskontrol og samarbejde. Det lader dig og andre arbejde sammen om projekter fra hvor som helst.

# process
projektarbejdsproces foregår som følgende, jeg opretter et github issues på Github og opretter projekt på Github kanban board. derefter begynder jeg at oprette forskellige brunchs og begynder at arbejde, jeg laver commit, push og merge hver gang jeg lavede en ny implimentations

### Github issues
<img width="1412" alt="landrup-github-issue" src="https://user-images.githubusercontent.com/45858936/193700768-f01cb7df-a70f-4246-84f2-e91409780a89.png">

### Github Kanban Board
<img width="1413" alt="landrup-dans-github-kanban" src="https://user-images.githubusercontent.com/45858936/193700791-3c00dbca-5a56-4c8b-bf19-f88696289ff2.png">

<img width="1397" alt="merge" src="https://user-images.githubusercontent.com/45858936/194411900-fee22a0d-2f51-4eb0-aa77-2140ece9fbfb.png">



### code example [ Search page ]
``` jsx
const Search = () => {
  const [activities, setActivities] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/api/v1/activities")
      .then((response) => response.json())
      .then((data) => setActivities(data));
  }, []);

  const filteredActivities = activities.filter((activity) => {
    return activity.name.toLowerCase().includes(searchQuery.toLowerCase());
  });
  
   {filteredActivities.map((activity) => (
          <Activity activity={activity} />
        ))}
  
   {filteredActivities.length === 0 && (
        <p className="text-2xl">
          Der blev ikke fundet noget activiteter. prøve at søge efter noget
          andet.
        </p>
      )}
  ```
# Deployment
Vercel er en platform til at implementere de hurtigste React-webstites. Du kan implementere dit websted med nul konfiguration til den bedste frontend-infrastruktur.

# Tech-Stack perspektivering:
Dette projekt kan bygges alternativt med Vue,js eller Next.js, men jeg valgte React.js på grund af forskellige årsager
1. Jeg er meget komfortabel med reactjs end de ovennævnte 2 Frameworks.
2. Jeg har også mere erfaring med React.js end de andre 2 Frameworks.
3. React er i øjeblikket populært end de andre 2 Frameworks, så efter min forståelse er React.js det rigtige valg til dette projekt.



