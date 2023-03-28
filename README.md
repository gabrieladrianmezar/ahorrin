# ahorrin

Una simple app para dosificar tus ingresos y conocer si vives por encima o debajo de tus medios. 

Puedes o bien usar el proyecto hosteado por mí (si sigue online) o crear tu propia instancia de ahorrín.

# Clona el proyecto
Necesitarás [`nodejs`](https://nodejs.org/es), para tener npm y [`git`](https://git-scm.com/downloads).
Recomiendo utilizar [`pnpm`](https://pnpm.io/) sobre npm y [`degit`](https://github.com/Rich-Harris/degit) para descargar este repo.
Los puedes instalar con el siguiente comando, si es que ya tienes npm:
```
npm i -g pnpm degit
```

Descarga y configura el repo con:
```
degit gabrieladrianmezar/ahorrin
cd ahorrin
pnpm i
```

A partir de ahí deberías configurar la base de datos, recomiendo hacerlo con railway o planetscale. 
Copia y pega los comandos de creación de tablas encontrados en el archivo ahorrin.sql dentro de tu gestor de base de datos.

Ya con el repositorio configurado y la base de datos funcionando, deberías poder comenzar un servidor de desarrollo:
```
pnpm run dev -- --open
```


