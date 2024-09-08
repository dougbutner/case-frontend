# CA$E: Ganamos Juntos 💪

## CA$E es el motor de capital que financia acciones legales en todo el mundo ⚖️

CA$E es una plataforma innovadora de financiación colectiva para ayudar a financiar los honorarios legales de personas y organizaciones que están involucradas en procesos judiciales. La plataforma permite a los usuarios subir casos legales que necesitan apoyo, atraer pruebas de la comunidad, y recibir fondos de inversores interesados en obtener ganancias de los daños obtenidos al ganar o resolver el caso.

A través de un sistema basado en tokens CASE, la plataforma recompensa a los miembros de la comunidad que proporcionan pruebas aprobadas y distribuye los daños resultantes entre la parte afectada, los inversores, los abogados y la organización CA$E.

Descripción del Proyecto
Funcionalidades Principales:
Subida de casos: Los individuos y la organización CA$E pueden subir casos legales.
Pruebas: Los miembros de la comunidad pueden contribuir subiendo pruebas adicionales a los casos.
Inversión: Los inversores financian los honorarios legales de los abogados a cambio de una parte de las ganancias si el caso se resuelve o gana.
Recompensas: Los abogados, la comunidad y los inversores reciben recompensas basadas en su participación en el caso y el resultado final.
Distribución de Daños: El 50% de los daños obtenidos se entrega a la parte afectada, y el otro 50% se distribuye entre los inversores, la organización CA$E y los abogados.
Tablas Principales de la Base de Datos:
Casos: Información relacionada con el caso, los daños reclamados y el estado del caso.
Abogados: Datos de los abogados asignados a los casos.
Inversores: Información de los inversores que contribuyen a los casos.
Pruebas: Detalles de las pruebas subidas para los casos.
Distribución de Daños: Cómo se distribuyen los daños obtenidos al resolver el caso.
Diagrama de Flujo
A continuación se presenta el diagrama de flujo que describe cómo interactúan los usuarios con la plataforma CA$E, desde la subida de un caso hasta la distribución de los daños.

mermaid
Copy code
flowchart TD
  %% Punto de Inicio
  A(Inicio) --> B{¿Quién está presentando el caso?}

  %% Presentación del caso por un individuo
  B --> |Individuo| C1(Subir Pruebas de Daños)
  C1 --> D1(Enviar Caso para Revisión)
  
  %% Presentación del caso por la organización
  B --> |Organización CA$E| F1(El Estado del Caso Cambia a Abierto)
  
  %% Proceso de revisión del caso
  D1 --> E{¿Está Aprobado el Caso?}
  
  %% Caso aprobado
  E --> |Sí| F1(El Estado del Caso Cambia a Abierto)
  E --> |No| Z(Fin)

  %% Subida de pruebas por la comunidad
  F1 --> G1(Los Miembros de la Comunidad Pueden Subir Pruebas)
  G1 --> H1(El Abogado Revisa las Pruebas)
  H1 --> I1{¿Se Aprueban las Pruebas?}
  I1 --> |Sí| J1(Recompensar con Tokens CASE)
  I1 --> |No| K1(Sin Recompensa)
  
  %% Honorarios del abogado y financiación
  F1 --> L1(Los Inversores Contribuyen a los Honorarios del Abogado)
  L1 --> M{¿Es el Abogado un Abogado del Caso?}
  
  %% Opciones del abogado
  M --> |Sí| N1(Los Inversores Pagan Honorarios Fijos al Abogado)
  M --> |No| N2(El Abogado Solicita un Porcentaje del Acuerdo)
  
  %% Proceso de financiación
  N1 & N2 --> O1{¿Se Financiaron Completamente los Honorarios del Abogado?}
  O1 --> |Sí| P1(El Abogado es Pagado y el Estado del Caso Cambia a En Proceso)
  O1 --> |No| P2(El Dinero se Devuelve a los Inversores)
  
  %% Resultado del caso
  P1 --> Q{¿El Caso se Resolvió o Ganó?}
  Q --> |Sí| R1(Distribuir Daños)
  R1 --> S1(50% al Afectado)
  S1 --> S2(50% se Divide entre Inversores, CA$E y Abogado)
  Q --> |No| T1(Sin Distribución de Daños)

  %% Fin
  T1 & S2 --> U(Fin)

## Cómo Funciona CA$E
Subida del Caso: Los casos pueden ser presentados por individuos que necesitan apoyo legal o por la organización CA$E. Si un individuo presenta el caso, deberá subir pruebas de los daños sufridos.

Aprobación del Caso: Los casos presentados por individuos son revisados por la organización CA$E. Si el caso es aprobado, se abre a la comunidad para recibir evidencias adicionales y fondos.

Contribuciones de la Comunidad: Una vez que el caso esté abierto, los miembros de la comunidad pueden subir pruebas adicionales. Si estas pruebas son aprobadas por un abogado, los miembros recibirán recompensas en tokens CASE.

Financiación del Caso: Los inversores pueden financiar los honorarios de los abogados. Si el abogado es un abogado del caso, recibirá una tarifa fija. Si no hay abogado asignado, el abogado puede solicitar un porcentaje de los daños.

Distribución de Daños: Cuando el caso se resuelve o gana, los daños se distribuyen de la siguiente manera:

50% para la parte afectada
50% para los inversores, el abogado y la organización CA$E
Contribuir al Proyecto
Si deseas contribuir al desarrollo de la plataforma CA$E, por favor sigue estos pasos:

Haz un fork del repositorio.
Crea una nueva rama para tu funcionalidad (git checkout -b nueva-funcionalidad).
Realiza tus cambios y haz un commit (git commit -m 'Agregar nueva funcionalidad').
Haz un push a la rama (git push origin nueva-funcionalidad).
Abre un Pull Request para revisar tus cambios.
