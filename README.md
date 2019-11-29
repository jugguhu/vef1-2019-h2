# Hópverkefni 2
---
## Aðilar í hóp

### Jón Gunnar Hannesson
 - jgh12@hi.is
 - [jugguhu](https://github.com/jugguhu)

### Sindri Magnússon
 - sim42@hi.is
 - [sindrimagg](https://github.com/sindrimagg)

### Ægir Örn Kristjánsson
 - aok10@hi.is
 - [aok10](https://github.com/aok10)
 ---
## Að keyra verkefnið
Verkefnið er skrifað í SASS og JavaScript, notast er við [node.js](https://nodejs.org/en/). Node-sass er notað til að þýða .scss skrár en rollup ásamt babel til að þýða JavaScript.
Alla pakka notaða í verkefninu má finna í package.json.
Til að keyra forritið þarf að skrifa í rót verkefnis
```bash
npm install
npm run dev
```

Eftir að pökkum hefur verið hlaðið inn á tölvuna er hægt að athuga hvort SASS og JavaScript skrár fylgi viðmiðunarreglum með [stylelint](https://stylelint.io/) og [eslint](https://eslint.org/). Notast er við [viðmiðunarreglur airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) fyrir eslint.
Til að athuga hvort skrár fylgi viðmiðunarreglum þarf að skrifa í rót verkefnis
```bash
npm run test
```
---
## Útskýring
JavaScript og SASS skrár eru geymdar í [src](src) möppu.
Í lib möppu má finna JavaScript skrárnar notaðar. [helpers.js](src/lib/helpers.js) inniheldur hjálparföll líkt og empty sem og getJSON sem sækir JSON og skilar promise og getSlug sem skilar slug síðunnar sem skoðað er. el fallið býr til element (alveg eins og í sýnilausn verkefnis 10). [Storage.js](src/lib/storage.js) inniheldur þau JavaScript föll sem við nýtum til að vista og afvista fyrirlestra sem kláraðir eru. Til að sækja vistaða fyrirlestra nægir að kalla á loadSaved og til að vista fyrirlestra nægir að kalla á save(slug). [List.js](src/lib/list.js) inniheldur fall til að sækja JSON skrár og skilar forsíðunni. [Lectures.js](src/lib/lectures.js) gerir hið sama og birtir fyrirlestra á nýrri síðu þegar ýtt er á þá á forsíðu. Innan fyrirlestra er hægt að haka við hvort fyrirlestur sé kláraður eða ekki, þeir fyrirlestrar sem eru kláraðir eru geymdir í storage og hakað við þá á forsíðu.

[Config.scss](scss/config.scss) inniheldur grunnskilyrði líkt og litapallettu, mixin fyrir grid og leturgerðarfjölskyldur. Sérstakar SASS skrár eru fyrir header, footer og hverja síðu fyrir sig (athuga að SASS skráin fyrir staff.html heitir [flipcards.scss](scss/flipcards.scss)). 

Það er sérstök skrá, [button.scss](scss/button.scss), fyrir takkana sem innihalda cart icon. Aðrir takkar hafa klasann grid__link sem tekinn er frá [forsida.scss](scss/forsida.scss).
Form í course.html og staff.html eru hin sömu. Sérstök skrá, [form.scss](/scss/form.scss) var skrifuð fyrir það.


