## Run Scrips

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.

## Explanations

- halaman list:
    - halaman pertama akan diarahakan halaman list dimana akan menampilkan semua list movie
      dari https://www.omdbapi.com/
      dengan parameter ```page = 1``` dan default movie **Disney**.
    - input pencarian minimal di isikan 2 kata, jika kurang secara difault yang dicari dengan keyword **Disney**.
    - delay pencarian ketika event ```onChange``` di trigger akan menjalankan kedalam custom hook ```useDebounce```
      yang diwatch dari ```React.useEffects```
    - ketika berhasil mendapatakan response maka hasil tersebut disimpan di store ```Redux``` dengan key ```movies```
    - ketika menekan tombol preview dari poster, yang terjadi button itu akan mengirimkan ```id``` dari omdb tersebut
      dan mencari seluruh detail dari ```Redux store```. jika hasil dari pencarian ditemukan maka disimpan
      di ```store``` redux dengan nama key ```poster``` dan mengubah status modal dari ```false``` menjadi ```true```
- halaman detail:
    - awal halaman ini akan mengambil id dari movie detail dengan parameter ```movieId``` kemudian melakukan
      request ```GET``` ke server.
    - hasil dari response tersebut juga disimpan di dalam store ```Redux``` dengan parent key ```movies``` di child key
      bernama ```detail```
    - terdapat tombol back yang menggunakan ```useHistory``` dari ```react-router``` untuk redirect ke halaman awal
 - unit test:
    - untuk saat ini hanya berada di dir ```src/components```
