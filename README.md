## Evaluación en Contacto con el Docente

First, run the development server:

### Ejecutar Next

```bash
npm install
npm run dev
```

### Ejecutar Django

```bash
cd Backend
pip install -r requirements.txt
python manage.py migrate
```

## Tecnologias

- Nextjs (Typescripy)
- Tailwend
- Django (Pyhton)
- SQL (SQLite)

## Diagrama ORM

Diagrama ORM para un modelo Django basado en cada una de las páginas del proyecto.

```mermaid
classDiagram
    %% Modelo para Empresa
    class Empresa {
        +CharField mision
        +CharField vision
        +ArrayField valores
    }

    class Directivo {
        +CharField cargo
        +CharField nombre
        +URLField foto
        +ForeignKey empresa
    }

    %% Modelo para Productos
    class Producto {
        +IntegerField id
        +CharField name
        +DecimalField price
        +TextField description
        +URLField image
        +BooleanField offer
    }

    %% Modelo para Localización
    class Ubicacion {
        +CharField title
        +TextField address
        +FloatField latitude
        +FloatField longitude
    }

    %% Modelo para Noticias
    class Noticia {
        +IntegerField id
        +URLField imageSrc
        +DateField date
        +CharField title
        +TextField content
    }

    %% Modelo para Contacto
    class Formulario_Contacto {
        +CharField nombre
        +EmailField email
        +TextField mensaje
        +DateTimeField fecha_creacion
    }

    %% Relaciones
    Empresa "1" -- "many" Directivo : tiene
```
