# Lección 1: Fundamentos de Git

En esta lección cubriremos:

* Descripción de control de versiones y Git.
* Comandos básicos de terminal.
* Forking y cloning de repos existentes en Github.com
* Comandos básicos de Git (status, add, commit, push).
* Enviar una Pull Request.

### Pre-requisitos
* Crear una cuenta en [Github.com](https://www.github.com/).
* Si usas una computadora con Windows, puedes instalar la terminal de comandos _git-bash_ haciendo click [acá](https://git-for-windows.github.io/).
* Si usas Mac, `git` viene pre-instalado y puedes acceder desde la terminal pulsando ⌘+Espacio y escribiendo "terminal". Puedes asegurarte de que git está instalado escribiendo `which git` en la terminal y pulsando Enter, si aparece la ruta de un archivo está todo correcto. En algunas ocasiones, podrías ser redireccionado a la descarga de la línea de comandos de Xcode, sigue las instrucciones.
* Si usas Linux, tal vez necesites instalar git accediendo a tu terminal e ingresado `apt-get install git`
* Si tienes problemas instalando Git, este recurso puede servir de ayuda: [https://git-scm.com/book/en/v2/Getting-Started-Installing-Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)


## Descripción de control de versiones y Git
El control de versiones es un concepto de ingeniería de software que aplica al manejo del código fuente. Hay muchos sistemas para aplicar prácticas de versión de controles al código fuente. Nos enfocaremos en uno de los más populares, "Git".

### Git

Git fue creado en 2005 por Linus Torvalds. Git permite a un equipo a trabajar concurrentemente en un mismo proyecto, o "repositorio", manteniendo todo actualizado. Esto se hace a través de branching, cada miembro o "feature" (característica) puede tener una rama partiendo de la rama master. Esa rama puede ser editada como se requiera sin interferir con el "master". Llegado el momento de "mergear" (unir) las ramas juntas de nuevo, git evaluará dónde se realizaron los cambios y correjirá (actualizará) el master para reflejar esos cambios sin interferir con otros cambios. Git también actúa como una especie de máquina del tiempo, permitiendo al equipo revertir cualquier cambio hecho en el código fuente a través del historial del código.

### Github.com

[Github.com](https://github.com) es una red para almacenar tus repositorios, esencialmente es un repositorio de repositorios. Es uno de los tantos disponibles en internet, y el más popular. Git != Github, aunque funcionen muy bien juntos. Github es un lugar donde puedes compartir tu código o encontrar otros proyectos. También actúa como portfolio para cualquier código en el que hayas trabajado. Si planeas ser un desarrollador deberías tener cuenta en Github. Usaremos Github extensivamente durante tu tiempo en Henry.

## Comandos básicos de terminal

> Usaremos la "terminal" o "línea de comandos" durante tu tiempo en Henry. Si estás en una computadora con Mac o Linux, deberías tener la terminal y git ya instalados. Si estás en una máquina con Linux, the recomendamos instalar ["git-bash"](https://git-for-windows.github.io/).

Dentro de nuestra terminal podemos: revisar nuestra estructura de archivos, añadir, eliminar y modificar archivos, y muchas cosas más. La terminal es una herramienta muy poderosa para los desarrolladores y vas a usarla mucho en tu carrera profesional. Al principio puede parecer aterrador, pero con el tiempo terminarás disfrutando su uso, así que es mejor acostumbrarse ahora. Para comenzar, aprenderemos los comandos "básicos":

"List": Nos permite ver el contenido de la carpeta donde nos encontramos.
```bash
  $ ls
```


"Change Directory": Nos permite movernos a una nueva carpeta o "directorio"
```bash
  $ cd [carpeta]
```

"Make Directory": Crea una nueva carpeta en el directorio donde nos encontramos actualmente.
```bash
  $ mkdir [nombre de la carpeta]
```

"Touch" creará un nuevo archivo.
```bash
  $ touch [nombre del archivo]
```

"Remove": Elimina permanentemente un archivo. ¡CUIDADO! Esto traspasa cualquier "papelera de reciclaje" que exista en el sistema y elimina los archivos PERMANENTEMENTE. Como nota, esto no eliminará carpetas, necesitamos un comando especial para eso que aprenderemos más adelante.

```bash
  $ rm [nombre del archivo]
```

## Ejercicio

En este ejercicio creamos una carpeta llamada: "Henry"

Para ir a la carpeta de nivel superior, escribe:

```bash
  cd ~
```

y presiona Enter. Una vez estés en el nivel superior, escribe:

```bash
  mkdir Henry
```

y presiona Enter. ¡Felicitaciones, has creado un directorio!

## Github

Como mencionamos antes, Github es un lugar central para almacenar, ver y descargar repositorios, no es un sinónimo de "git". Necesitas tener una cuenta en Github para completar los siguientes ejercicios.

### Forking ("bifurcar")

Github.com permite a los usuarios a crear sus propias copias de un repositorio (siempre que sea público) y trabajar o modificar ese repositorio como quieras bajo tu propia cuenta. Esto se llama "Forking". Esencialmente, esto creará una nueva rama del repositorio, y en el futuro te permitirá reincorporar ("pull") los cambios que hayas hecho en esa rama en la rama master de la cual "forkeaste".

Para "forkear" un repo, puedes visitar el repositorio que quieras (para este ejercicio usaremos [este](https://github.com/atralice/caronte/) repo). En cualquier lugar dentro del repo, verás el botón "Fork" en la esquina superior derecha, haz click. Github copiará toda la información del repositorio a tu cueta y ya estará disponible para que trabajes en ella.

### Clonar

Para poder trabajar en un proyecto debes clonarlo (descargarlo) a tu máquina local. Para ello, accede a la carpeta de nivel superior del repositorio que forkeaste en tu cuenta, y haz click en el botón verde de la esquina superior derecha que dice "Clonar o descargar". Un dropdown aparecerá y podemos clickear en el icono del clipboard para copiar la dirección del repo. (Nota: Puedes descargar el repositorio completo, pero no se recomienda tanto como clonarlo dado que este último realizará unos pasos extra que harán tu vida mucho más fácil).

Una vez tengas la dirección copiada, vuelve a tu terminal y escribe lo siguiente:


```bash
  $ cd Henry

  $ git clone [dirección copiada]
```

Esto descargará el repositorio y tendrás disponible una copia local guardada en tu máquina.

## Comandos de git:

Durante estas lecciones interactuaremos con git a través de la terminal. En el futuro, podrías estar interesado en usar una interfaz visual/gráfica, pero durante estas lecciones necesitaremos usar la terminal para acceder a todas las funciones de git.

En este ejercicio, añadiremos un archivo a nuestro proyecto y crearemos un commit para cambiar la "memoria" de git.

En tu terminal, cd (_change directory_) hacia la carpeta Henry/Precourse

A continuación, escribe lo siguiete en tu terminal:

```bash
  $ touch Leccion01-Git/nuevoArchivo.js
```

Esto añadirá un nuevo archivo llamado "nuevoArchivo.js" a tu proyecto.

En este momento, podemos usar el comando de git "status", esto nos mostrará los cambios hechos en el repositorio local. Usa "status" si no estás seguro de que algo haya funcionado y necesitas saber qué pasó.

```bash
  $ git status
```

Deberías ver algo parecido a estas líneas:

```bash
  Changes not staged for commit:
    (use "git add <file>..." to update what will be committed)
    (use "git checkout -- <file>..." to discard changes in working directory)

    modified:   Leccion01-Git/README.md

  Untracked files:
    (use "git add <file>..." to include in what will be committed)

    Leccion01-Git/nuevoArchivo.js

  no changes added to commit (use "git add" and/or "git commit -a")
```

Esto nos dice que tenemos un archivo que ha cambiado, pero todavía no ha sido guardado en el historial de git.

Para hacer esto, usaremos el comando "add":


```bash
  git add Leccion01-Git/nuevoArchivo.js
```

Esto agregó nuestros cambios al historial. Ahora, para guardar el historial, usaremos el comando "commit". Commit agarrará todos nuestros cambios y los guardará en el historial de git. Para futuras referencias, podrás añadir un mensaje acerca de los cambios hechos, esto facilitará ir atrás en el historial y encontrar los cambios que vos (o cualquiera) busque en el futuro en caso de necesitarlo. Siempre es una buena idea hacer una descripción clara y concisa de los cambios. Un _shorthand_ para añadir un mensaje, es usar la bandera (flag) "-m" y escribir el mensaje a continuación usando comillas.

```bash
  git commit -m 'Agregado nuevo archivo, nuevoArchivo.js'
```

Ahora que guardamos nuestros cambios localmente, vamos a querer compartir esos cambios en Github. Para ello, usaremos "push":

```bash
  git push
```

La terminal te preguntará tu usuario y contraseña. Escribimos estos datos y a continuación veremos un mensaje si todo fue "pusheado" correctamente:

```bash
  Counting objects: 5, done.
  Delta compression using up to 8 threads.
  Compressing objects: 100% (4/4), done.
  Writing objects: 100% (5/5), 2.97 KiB | 0 bytes/s, done.
  Total 5 (delta 1), reused 0 (delta 0)
  remote: Resolving deltas: 100% (1/1), completed with 1 local object.
  To git@github.com:[your username]/Precourse.git
    cccc682..283b9dd  master -> master
```

¡Felicitaciones, acabas de subir tu primer git commit!

## Pull Requests

Una vez hayas completado los cambios que deseabas realizar, es hora de "mergear" esos cambios con la rama master. Si no estás haciendo cambios en tu propio repositorio, vas a necesitar enviar una "Pull Request" o "PR", como nos referiremos a esta acción. Esto permite al dueño (o administrador, supervisor, líder de área o desarrollador senior) del repositorio original a ver y comprobar los cambios hechos y decidir si desea incluirlos en su master.

En este ejercicio, enviaremos un PR a través de github.com

**_TODO_:** Completar esta sección.

## Lectura recomendada y tutoriales:

* [Git: sitio oficial](https://git-scm.com/)
* [Github: tutorial oficial](https://try.github.io/levels/1/challenges/1)
* [Codecademy: Learn Git](https://www.codecademy.com/learn/learn-git)
* [Git: tutorial oficial](https://git-scm.com/docs/gittutorial)
* [Terminal turorial](https://www.davidbaumgold.com/tutorials/command-line/)
