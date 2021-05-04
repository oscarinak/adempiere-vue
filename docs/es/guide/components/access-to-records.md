# Acceso a Registros

Permite configurar el acceso que tendra cada rol a un registro o una vista en específico a partir de los siguientes parámetros:

  - **Roles Disponibles**: Se encuentran todos los roles creados en ADempiere,que no tienen alguna configuración del registro el cual se encuentra posicionado
  - **Roles Configurados**: Se encuentran los roles los cuales van a tener una configuración de acceso o bloqueo a un registro en específico, estos acceos o
  bloqueos depende de las siguientes opciones:
    - Bloquear: Al tildar esta opción se bloquea al rol el acceso y la visualización del registro, al tener activo esta opción se hablita la siguiente opción:
      - Entidades Dependientes:
    - Desbloquear: Al tildar esta pción se habilita o activa la visualización del registros, al tener activo esta opción se hablitan las siguientes opcines:
      - Solo Lectura: Puede visualizar en modo lectura (No puede editar o crear) los registros que esten asociados al rol 
      - Editable: Puede visualiar en modo lectura y escritura (puede editar o crear)

## Versión ADempiere-ZK

<img :src="$withBase('/images/components/accesstorecords/ZK_access-to-records.png')" alt="Acceso a Registro Versión de Escritorio ZK" width="800px">

## Versión ADempiere-Vue

<img :src="$withBase('/images/components/preference/preference-desktop-mobile.png')" alt="Preferencia en Versión Móvil y de Escritorio" width="800px">
