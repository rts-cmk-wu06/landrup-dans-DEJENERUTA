# landrup-dans-DEJENERUTA

landrup-dans-DEJENERUTA created by GitHub Classroom

# Tech Stach
### React: 
Jeg har valgt React Bibliotek til at bygge min applikation, fordi React har genbrugelige komponenter. Det giver udviklerer mulighed for at bruge en komponent flere gange i stedet for at oprette flere komponenter. React er også let at forstå sammenlignet med andre Frameworks. Jeg kan godt lide at arbejde med reacts udviklingsværktøjer, fordi disse værktøjer er behjælpelige, så jeg nemt kan opdage mine barn- og forældrekomponente.
React har også et stærkt fællesskab. React-eksperter uploader jævnligt[Regularly] gratis react tutorials på youtube og skriver dybdegående artikler om react tutorial og blogs på internettet. React har en god QA side som stackoverflow, som er meget hjælpsom når man skal finde løsninger til programmering - Her finder man næsten altid svar på de spørgsmål man skulle have. React har et meget UI-fokuseret Bibliotek. 
Ved hjælp af React-skabelonerne sparer jeg meget tid, i arbejdet med mine programmeringer.

# Core Frameworks:
### TailwindCss:
Tailwind CSS gør det hurtigere at skrive og vedligeholde koden til min applikation. Ved at bruge denne utility-first framework behøver jeg ikke skrive tilpasset CSS for at style applikationen. I stedet kan jeg bruge hjælpeklasser til at kontrollere udfyldning, margen, farve, skrifttype, skygge og mere af min applikation. Den mest vellidte utility-first CSS-Framework til hurtig UI-oprettelse er Tailwind CSS. Den er nem at tilpasse og tilpasser sig til ethver design, og byggestørrelsen er mindre end almindelig CSS. Tailwind gør mit liv nemmere, når jeg koder - Det er stadig en del af CSS og du bruger flex, grid osv. Men med TailwindCSS går det hurtigere at skrive og den er nemmere at vedligeholde.
TailwindCSS er for mig langt den bedste og mest effektive måde at skrive CSS på.
Men det kan helt sikkert føles som meget at lære, når man lige skal i gang.
Den officielle dokumentation er ret god. Dog synes jeg at hvis man har behov for et hurtigt overblik over alle de forskellige muligheder, kan det virke lidt uoverskueligt.

# Core Packet
### React-hook-form:
React Hook Form er et bibliotek, der hjælper mig med at validere formularer i React. Det er et minimalt bibliotek uden andre afhængigheder. Det er effektivt og ligetil at bruge, hvilket giver udviklere mulighed for, at skrive færre linjer koder end andre formbiblioteker.

### Yup:
Yup er en JavaScript-skemabygger til værdiparsing og validering. Den definer et skema eller valider formen på en eksisterende værdi, men i fleste tilfælde begge dele. Yup skemaer er ekstremt udtryksfulde og tillader modellering af komplekse, indbyrdes afhængige valideringer.

### React-router-dom:
React Router Dom bruges til at bygge enkeltsides applikationer, dvs. applikationer, der har mange sider eller komponenter. Hjemmesiden bliver aldrig opdateret, i stedet for, hentes indholdet dynamisk baseret på URL'en. Denne proces kaldes Routing, og den er muliggjort ved hjælp af React Router Dom.

# Versionsstyring:
Jeg har brugt github som mit projektstyringsværktøj. Jeg har lavet et issue og brugt Github kanban board, til at styre mit projekt. GitHub er en kode-hosting-platform til versionskontrol og samarbejde. Det lader dig og andre arbejde sammen om projekter fra hvor som helst.

# process
Proccesen i dette projekt foregår som følgende; Først har jeg oprettet et github issues på Github og derefter oprettet et projekt på Github kanban board. Efterfølgende oprettede jeg forskellige branchs og begyndte at arbejde med mit projekt - Jeg har lavet commit, push og merge hver gang jeg har lavet en ny implimentations.

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
Dette projekt kan bygges alternativt med Vue,js eller Next.js. Jeg har som bekendt valgt React.js på grund af forskellige årsager.
1. Jeg er mere komfortabel med reactjs end de ovennævnte 2 Frameworks. 
2. Jeg har også mere erfaring med React.js end de andre 2 Frameworks - Jeg kender det simpelthen bedre og har arbejdet mere i React.
3. React er i øjeblikket mere populært og har et større fællesskab ift. de andre 2 Frameworks.
Derfor har det det rigtige valg, i dette projekt, været at bruge React.js. Et valg som på mange måder bare har givet mere mening for mit arbejde.



