/* ═══════════════════════════════════════════════════════════════════
   NECRONOMICON 404 — app.js
   Grimorio interactivo de horror cósmico ficticio.
   Todo el contenido es enteramente ficticio.
   ═══════════════════════════════════════════════════════════════════ */

'use strict';

/* ─────────────────────────────────────────────────────────────────
   1. DATOS DEL GRIMORIO
   ─────────────────────────────────────────────────────────────────
   HARDENING: Lectura de localStorage con try-catch para datos
   corruptos, incógnito o cuota excedida.
   ───────────────────────────────────────────────────────────────── */

const CHAPTERS = [
  {
    id: 'c1',
    num: 'I',
    title: 'El Libro de los Nombres Hundidos',
    desc: 'Compilación de denominaciones extraídas de las capas sedimentarias del lenguaje previo a la articulación humana.',
    pages: '14-31',
    epigraph: '«El nombre no designa: convoca. El nombrador asume la responsabilidad del convocado.»',
    epigraph_src: 'Anotación de margen, folio 14. Tinta distinta al resto del manuscrito.',
    body: `
      <p>Existe una hipótesis entre los copistas de la Orden Sumergida que sostiene que los primeros lenguajes no fueron inventados sino <em>escuchados</em>. Que alguien, en una época que los calendarios no alcanzan a numerar, se detuvo junto a una boca de roca, inclinó la cabeza hacia la oscilación del aire subterráneo y transcribió lo que le fue dictado.</p>

      <p>Los resultados de esa transcripción son los fragmentos que nos ocupan. <button class="unlock-note" data-note="El académico Vedric Ossún afirmó haber encontrado estos fragmentos tallados bajo las cimentaciones de una mezquita en ruinas. Murió antes de publicar. Sus notas desaparecieron con él." aria-label="Nota marginal 1">†</button></p>

      <h3>Los Cuatro Estratos</h3>

      <p>El Libro divide los nombres en cuatro estratos según su profundidad fonética. El <strong>Primer Estrato</strong> comprende denominaciones que el paladar humano puede reproducir sin consecuencias documentadas. El <strong>Segundo Estrato</strong> incluye nombres que, pronunciados correctamente, producen en el hablante una sensación descrita de manera consistente como <em>«el recuerdo de algo que no sucedió»</em>.</p>

      <p>El <strong>Tercer Estrato</strong> está <span class="redacted" title="Pasa el cursor para leer">parcialmente censurado en esta edición</span> por petición del comité de revisión. Ningún miembro del comité ha podido ser localizado para confirmar la petición.</p>

      <p>El <strong>Cuarto Estrato</strong> no contiene nombres. Contiene descripciones de lo que hay donde debería haber nombres. La distinción resulta importante para el copista avezado.</p>

      <h3>De la Fonética Prohibida</h3>

      <p>Se ha determinado que ciertos grupos consonánticos, cuando se combinan con las vocales del Segundo Estrato, producen vibraciones en el rango audible inferior que no tienen origen mecánico identificable. Los instrumentos de medición colocados en la sala de lectura durante las sesiones de estudio mostraron oscilaciones regulares. <button class="unlock-note" data-note="Los instrumentos fueron destruidos a continuación. Quién los destruyó no ha podido determinarse porque todos los presentes afirmaron no haber estado presentes." aria-label="Nota marginal 2">†</button> Las paredes, sin embargo, conservan marcas que los restauradores han optado por no interpretar.</p>

      <p>La pregunta que el Libro no responde, y que los editores de esta copia han decidido no formular en voz alta, es la siguiente: si los nombres del Cuarto Estrato no designan nada, ¿para qué fueron compilados?</p>

      <p>Una nota encontrada plegada dentro del forro de la cubierta original decía simplemente: <em>«Para que aquello que es nombrado sepa que sabe su nombre.»</em></p>
    `
  },
  {
    id: 'c2',
    num: 'II',
    title: 'La Lengua que no Debe Pronunciarse',
    desc: 'Gramática parcial de un idioma cuya estructura sintáctica presupone más de cuatro dimensiones espaciales.',
    pages: '32-58',
    epigraph: '«Toda lengua describe el mundo de quien la habla. Esta lengua describe un mundo en el que tú no estás.»',
    epigraph_src: 'Prefacio. Autor: borrado.',
    body: `
      <p>El lingüista Arcel Vonn pasó diecisiete años intentando construir una gramática completa a partir de los fragmentos recuperados. Su último informe, fechado en el solsticio de invierno de un año que los archivos de la Orden no han podido verificar, tenía cuarenta páginas. Las primeras treinta y ocho estaban en blanco. Las dos últimas contenían una sola frase, repetida: <em>«La lengua me habla a mí.»</em></p>

      <p>Lo que sigue es lo que pudo reconstruirse sin intervención directa del idioma sobre sus intérpretes.</p>

      <h3>Principios Estructurales</h3>

      <p>La lengua carece de tiempo presente. Esto no es un accidente gramatical sino una declaración ontológica: para sus hablantes originales, el presente no era una categoría válida. Solo existía lo que <em>había sido</em> y lo que <em>siempre habrá sido</em>. La distinción entre ambos tiempos se expresa mediante un morfema que los traductores han convenido en representar como el sonido que precede al silencio cuando alguien deja de respirar. <button class="unlock-note" data-note="Vonn escribió en un margen: 'El morfema no es pronunciable. Es el espacio entre las sílabas. Los hablantes aprendieron a insertar ausencias.'" aria-label="Nota marginal 3">†</button></p>

      <p>La lengua dispone de <strong>diecinueve pronombres</strong> de primera persona. Cada uno describe una relación distinta entre el hablante y su propia conciencia. Solo uno de ellos corresponde aproximadamente a lo que entendemos como «yo». Los demás implican estados de autoconciencia para los que las lenguas europeas no tienen equivalente ni, en opinión de los traductores, necesidad.</p>

      <h3>Palabras Recuperadas</h3>

      <p>De los aproximadamente cuatro mil vocablos estimados de la lengua, solo once han podido ser aislados sin que el proceso de aislamiento altere su significado. Los enumeramos aquí mediante sus traducciones funcionales, no literales:</p>

      <p><em>Umbral / Lo que hay detrás de la mirada / La distancia entre dos cosas que se tocan / El nombre del silencio específico que sigue a una pregunta que no debería hacerse.</em></p>

      <p>Los siete restantes no tienen traducción funcional. Se reproducen en el Apéndice C, que ha sido retirado de esta edición por razones que el editor ha optado por no especificar.</p>
    `
  },
  {
    id: 'c3',
    num: 'III',
    title: 'Cartografía de los Umbrales',
    desc: 'Atlas de lugares que la geografía convencional no registra porque no permanecen en el mismo sitio entre una visita y la siguiente.',
    pages: '59-87',
    epigraph: '«Todo mapa es una mentira. Este es una mentira que intenta ser honesta sobre serlo.»',
    epigraph_src: 'Nota del cartógrafo. La caligrafía cambia a mitad de frase.',
    body: `
      <p>Los cartógrafos de la Orden Sumergida abandonaron hace generaciones el intento de representar los Umbrales mediante coordenadas fijas. La solución a la que llegaron fue describir los lugares no por su posición sino por sus <em>condiciones de acceso</em>: qué estado debe tener el visitante, qué hora del día resulta menos inadecuada, qué gestos inconscientes ha aprendido sin saber que los ha aprendido.</p>

      <p>Lo que sigue es un extracto del Atlas Interior, tercera revisión. La primera y segunda fueron destruidas por sus propios autores. <button class="unlock-note" data-note="El cartógrafo Dun Estrell afirmó que los mapas anteriores 'empezaban a mostrar cosas que no estaban en los lugares pero sí en los mapas'. Sus sucesores no investigaron la afirmación." aria-label="Nota marginal 4">†</button></p>

      <h3>El Pasaje de la Pared Porosa</h3>
      <p>Se encuentra, según los testimonios, en cualquier edificio de más de ochenta años que haya sido abandonado y reocupado al menos tres veces. Se localiza en la pared que recibe menos luz natural y solo resulta visible cuando el visitante no está buscándola activamente. La pared no está abierta: está <em>permeable</em>. La distinción, según los cartógrafos, es fundamental.</p>

      <h3>La Biblioteca del Siglo Incorrecto</h3>
      <p>Lugar documentado en doce testimonios independientes. Aparece siempre en el mismo edificio que el visitante acababa de abandonar, pero en una planta que no existía cuando estaba dentro. Contiene libros en perfectas condiciones que no han sido escritos todavía, salvo por los subrayados y anotaciones de lectores anteriores, cuya letra ningún testigo ha sido capaz de describir con precisión. <strong>Tiempo de permanencia recomendado: cero.</strong> No por peligro. Por cortesía.</p>

      <h3>El Umbral del Clima Equivocado</h3>
      <p>Identificado únicamente por la anomalía meteorológica que lo precede: un viento con olor específico que varios testigos han descrito de manera independiente como <em>«el olor de algo que no ha pasado todavía pero que ya ha terminado»</em>. La cartografía de este umbral es imposible porque quien lo describe siempre lo hace desde el interior.</p>
    `
  },
  {
    id: 'c4',
    num: 'IV',
    title: 'Entidades que Sueñan Bajo la Piedra',
    desc: 'Registro de presencias documentadas cuya naturaleza excede los parámetros taxonómicos disponibles.',
    pages: '88-124',
    epigraph: '«No las llamamos dioses. Las llamamos lo que hay cuando no hay nada, que es más que dios.»',
    epigraph_src: 'Fragmento. Origen: desconocido. Encontrado pegado a la contracubierta con cera negra.',
    body: `
      <p>La Orden Sumergida distingue entre <em>entidades</em> y <em>presencias</em>. Las entidades tienen forma, aunque esa forma no sea constante ni legible para el observador. Las presencias no tienen forma pero tienen <strong>efecto</strong>: alteran el comportamiento del espacio, la memoria de los materiales, la temperatura de las sombras.</p>

      <p>Este capítulo trata de las entidades. El capítulo dedicado a las presencias fue retirado del manuscrito original. Las páginas que lo contenían no han sido arrancadas: se han vuelto opacas. La tinta no puede leerse porque la luz no se refleja en esas páginas de la manera habitual. <button class="unlock-note" data-note="Un investigador intentó fotografiar las páginas opacas. Las fotografías revelan texto, pero en un idioma distinto al del resto del manuscrito y en una caligrafía diferente. El texto no ha sido traducido por petición del investigador, que declinó explicar la petición." aria-label="Nota marginal 5">†</button></p>

      <h3>Orsún el Inmóvil</h3>
      <p>Descrita en siete registros independientes como una forma geométrica <em>de un número de lados que los testigos no consiguen recordar</em>. No se desplaza. Se desplaza el espacio a su alrededor, de manera que quien se aleja de Orsún sigue acercándose. Los encuentros concluyen cuando Orsún decide que han concluido, lo que según los registros puede tomar entre diez minutos y cuarenta años.</p>

      <h3>La Que Anota</h3>
      <p>Presente en todos los archivos donde se conservan documentos clasificados. No destruye los documentos. Los <em>corrige</em>. Los registros que han pasado por sus manos contienen información que no estaba en el original y que nadie ha podido verificar pero que tampoco ha podido refutar. Sus correcciones están escritas en el mismo idioma que el documento original, con una caligrafía que los grafólogos describen como «anatómicamente imposible».</p>

      <h3>El Durmiente de la Sal</h3>
      <p>Entidad documentada únicamente en terrenos que han estado sumergidos bajo el mar. No se presenta: se <em>recuerda</em>. Quienes lo han visto afirman que el recuerdo viene antes del encuentro y que el encuentro en sí resulta menos perturbador de lo que el recuerdo anticipaba. El orden invertido de experiencia y memoria constituye, para la Orden, la característica definitoria de la entidad.</p>
    `
  },
  {
    id: 'c5',
    num: 'V',
    title: 'Ritos Incompletos',
    desc: 'Protocolos de los que solo se conserva la parte que los practicantes supervivientes pudieron recordar.',
    pages: '125-149',
    epigraph: '«Un rito incompleto no es un rito fallido. Es un rito que termina en un lugar diferente.»',
    epigraph_src: 'Marginal sin atribución. Escrito en dos tintas distintas, como si dos personas completaran la misma frase.',
    body: `
      <p>La Orden Sumergida no practica ritos en el sentido performativo del término. Los considera, en su lugar, <em>protocolos de escucha</em>: procedimientos que crean las condiciones en las que cierto tipo de información puede transmitirse. Lo que se recibe no siempre es lo esperado. A veces no se recibe nada. A veces se recibe algo que no ha sido pedido.</p>

      <p>Los ritos de este capítulo están incompletos no porque sus practicantes los interrumpieran, sino porque los pasos que faltan no han podido ser recordados. <button class="unlock-note" data-note="La Orden distingue entre 'no recordar' y 'haber olvidado'. El segundo implica que hubo algo que olvidar. Sobre el primero prefieren no teorizar." aria-label="Nota marginal 6">†</button></p>

      <h3>El Rito del Umbral Doméstico</h3>
      <p>Fragmento conservado. Pasos uno a cuatro de un procedimiento de número desconocido:</p>
      <p><em>Primero: permanecer en el umbral de una puerta interior entre las tres y las cuatro de la madrugada. No buscar nada. Segundo: cuando el silencio cambie de textura —y cambiará, aunque el cambio no sea audible— no girar la cabeza. Tercero: decir en voz alta el nombre de alguien que ya no pueda responder. El nombre debe decirse sin intención. Cuarto…</em></p>
      <p>El cuarto paso no ha podido ser recuperado. Los practicantes que llegaron a él lo describen de maneras incompatibles entre sí. La Orden ha concluido que el cuarto paso es distinto para cada persona.</p>

      <h3>El Rito de la Copia Exacta</h3>
      <p>Consiste en copiar a mano un texto cualquiera en condiciones de oscuridad completa, sin leer lo que se escribe. El texto resultante nunca es una copia del texto original. Tampoco es aleatorio. Los escribas que han completado el procedimiento describen el resultado como <strong>«lo que el texto original estaba intentando decir»</strong>, aunque ninguno ha querido dar detalles sobre qué quieren decir con eso.</p>
    `
  },
  {
    id: 'c6',
    num: 'VI',
    title: 'Bestiario del Vacío Cercano',
    desc: 'Taxonomía provisional de formas observadas en los márgenes de la percepción calibrada.',
    pages: '150-183',
    epigraph: '«Llamarlos bestias es incorrecto. Llamarlos algo distinto requiere un vocabulario que aún no existe.»',
    epigraph_src: 'Nota del taxonomista Veru Oln. Su expedición regresó con menos miembros de los que partieron y ninguno mencionó las bajas.',
    body: `
      <p>El Bestiario del Vacío Cercano es el capítulo que más ha resistido la catalogación sistemática. Las criaturas descritas no cooperan con su propia clasificación: cambian de características entre avistamientos, contradicen los criterios de la observación anterior, o simplemente no aparecen cuando se las busca y aparecen cuando no.</p>
      <p>Ver la sección del Bestiario para las entradas completas de este capítulo.</p>
    `
  },
  {
    id: 'c7',
    num: 'VII',
    title: 'Diccionario de Símbolos Imposibles',
    desc: 'Formas que aparecen en registros de culturas sin contacto entre sí, en fechas que la cronología no puede ordenar.',
    pages: '184-211',
    epigraph: '«Un símbolo es una instrucción para el inconsciente. Algunos de estos son instrucciones para algo distinto al inconsciente.»',
    epigraph_src: 'Prefacio del Diccionario. Firmado: Anónimo, que es diferente a sin firma.',
    body: `
      <p>Los símbolos del Diccionario tienen una propiedad que los distingue de los símbolos convencionales: no pueden ser dibujados por primera vez. Todos los registros conocidos de cada símbolo son copias de copias de copias de una fuente que ningún archivo ha podido localizar. La implicación, que la Orden acepta sin entusiasmo, es que los símbolos preexisten a su primera documentación. <button class="unlock-note" data-note="El semiótico Carc Velund propuso que los símbolos 'se dibujan solos' en condiciones de suficiente atención colectiva. Fue expulsado del comité académico antes de poder desarrollar la hipótesis." aria-label="Nota marginal 7">†</button></p>

      <h3>El Sigilo de la Convergencia</h3>
      <p>Aparece en diecinueve culturas documentadas, en tres continentes, en períodos que abarcan cuatro mil años. En todos los casos, el símbolo está grabado en superficies que han estado en contacto con agua salada durante períodos prolongados. Ninguna de las culturas que lo emplearon tiene registro de haberlo inventado. Todas tienen registros de haberlo <em>encontrado</em>.</p>

      <h3>La Marca del Durmiente</h3>
      <p>No es un símbolo en sentido estricto: es una <em>ausencia de símbolo</em>. Aparece como una zona en superficies escritas donde la tinta no adhiere, la pintura no cubre y la piedra no retiene la incisión. La forma de esa ausencia es siempre la misma. Los geólogos que han analizado las superficies afectadas no han encontrado diferencia química entre las zonas marcadas y las no marcadas. La tinta sencillamente prefiere no estar ahí.</p>
    `
  },
  {
    id: 'c8',
    num: 'VIII',
    title: 'Fragmentos del Copista Ciego',
    desc: 'Textos de origen desconocido atribuidos a un escriba que afirmaba transcribir lo que le era dictado sin origen audible.',
    pages: '212-248',
    epigraph: '«No elijo las palabras. Las palabras me eligen a mí, y yo me limito a moverme por donde ellas señalan.»',
    epigraph_src: 'Fragmento 0. El único escrito de puño y letra del Copista. La caligrafía es diferente al resto de su obra.',
    body: `
      <p>El Copista Ciego no era ciego en el sentido clínico del término. Su ceguera era, según los registros de la Orden, <em>selectiva</em>: veía todo excepto lo que estaba directamente frente a él. Este déficit, que los médicos de su época no supieron diagnosticar, le permitía una relación particular con la escritura: copiaba sin leer, tomaba dictado sin fuente audible, y producía textos que contradecían sistemáticamente lo que él mismo creía estar escribiendo.</p>

      <p>Los fragmentos se dividen en dos categorías: los que el Copista fechó, y los que él mismo afirmaba no haber escrito. <button class="unlock-note" data-note="Los fragmentos que el Copista negó haber escrito están en su caligrafía. Los peritos grafológicos que los analizaron presentaron informes contradictorios. Dos de ellos solicitaron ser relevados del análisis sin dar explicaciones. Un tercero desapareció antes de entregar su informe." aria-label="Nota marginal 8">†</button></p>

      <h3>Fragmento VII: Sobre el Olvido Deliberado</h3>
      <p><em>«Hay cosas que no se olvidan porque se borran de la memoria sino porque la memoria aprende a rodearlas. El olvido experto no elimina: construye caminos alternativos. Después de suficiente tiempo, el obstáculo que motivó los caminos alternativos resulta invisible precisamente porque nadie pasa por donde está. Esto es lo que hacemos con lo que no podemos nombrar. Lo rodeamos con tanta atención que terminamos sabiendo exactamente dónde está sin necesidad de mirarlo nunca.»</em></p>

      <h3>Fragmento XII: Sin Título (el Copista lo dejó en blanco)</h3>
      <p><em>«El problema con los umbrales no es cruzarlos. El problema es que cruzarlos cambia lo que hay en el otro lado. No el umbral: el otro lado. Lo que espera al otro lado de la puerta cambia cuando alguien decide abrirla. Las entidades saben que vienen. Se preparan. A veces se preparan de maneras que el visitante interpretará como hospitalidad.»</em></p>

      <p>El Copista añadió bajo este fragmento, en tinta diferente y con letra más pequeña: <strong>«No sé quién escribió esto.»</strong></p>
    `
  }
];

const GLOSSARY_ENTRIES = [
  {
    id: 'g1', type: 'entity', name: 'Orsún el Inmóvil',
    short: 'Entidad geométrica de forma indeterminada. El espacio se desplaza a su alrededor.',
    full: 'Documentada en siete registros independientes de la Orden Sumergida. Su forma es descrita como "de un número de lados que no puede recordarse después del encuentro". No se desplaza: produce desplazamiento en el espacio circundante. Los encuentros concluyen a su voluntad. El tiempo de duración varía entre diez minutos y cuarenta años según los testimonios, sin que los testigos perciban diferencia de duración durante el encuentro.',
    tags: ['Orden Sumergida', 'geometría imposible', 'temporal']
  },
  {
    id: 'g2', type: 'entity', name: 'La Que Anota',
    short: 'Presencia archivística. Corrige documentos sin destruirlos. Sus correcciones contienen información no verificable.',
    full: 'No destruye documentos: los corrige. Se ha documentado su presencia en archivos de cinco continentes. Las correcciones están en el idioma original del documento pero en una caligrafía anatómicamente imposible. La información añadida no ha podido ser verificada ni refutada. La Orden la clasifica como "entidad epistémica": su existencia parece condicionada a la existencia de información que corregir.',
    tags: ['archivos', 'escritura', 'corrección']
  },
  {
    id: 'g3', type: 'entity', name: 'El Durmiente de la Sal',
    short: 'Entidad de terrenos submarinos emergidos. Se recuerda antes de verse.',
    full: 'Documentado únicamente en terrenos que estuvieron bajo el mar. No se presenta: se recuerda. El recuerdo precede al encuentro y es más perturbador que el encuentro mismo. Quienes han completado la secuencia memoria-encuentro describen la experiencia como "recordar algo que todavía no ha pasado pero que ya terminó". La Orden considera esta inversión temporal su característica definitoria.',
    tags: ['mar', 'memoria', 'tiempo invertido']
  },
  {
    id: 'g4', type: 'place', name: 'La Biblioteca del Siglo Incorrecto',
    short: 'Aparece en edificios que el visitante acaba de abandonar. Contiene libros no escritos con anotaciones de lectores previos.',
    full: 'Lugar documentado en doce testimonios independientes de cuatro países distintos. Siempre aparece en el mismo edificio que el visitante acaba de abandonar, pero en una planta inexistente. Los libros que contiene están en perfecto estado de conservación pero no corresponden a ninguna obra publicada. Los subrayados y notas marginales de lectores anteriores sugieren que alguien los ha leído a fondo. La Orden recomienda no permanecer: no por peligro, sino por cortesía hacia los lectores que vendrán.',
    tags: ['archivos', 'tiempo', 'libros']
  },
  {
    id: 'g5', type: 'place', name: 'El Pasaje de la Pared Porosa',
    short: 'Localizable en edificios viejos y reocupados. La pared no está abierta: está permeable.',
    full: 'Se encuentra en cualquier edificio de más de ochenta años que haya sido abandonado y reocupado al menos tres veces. Siempre en la pared que recibe menos luz natural. Solo visible cuando no se busca activamente. La pared no está abierta sino permeable: la distinción es fonémica en la Lengua del Segundo Estrato pero carece de equivalente útil en castellano.',
    tags: ['umbral', 'arquitectura', 'permeabilidad']
  },
  {
    id: 'g6', type: 'place', name: 'El Umbral del Clima Equivocado',
    short: 'Identificado por un viento con olor a "algo que no ha pasado todavía pero que ya terminó".',
    full: 'Imposible de cartografiar porque quienes lo describen siempre lo hacen desde el interior. El único indicador externo es una anomalía meteorológica: un viento con olor específico, descrito de manera independiente por doce testigos como "el olor de algo que no ha pasado todavía pero que ya ha terminado". La gramática de esta descripción ha ocupado a la Orden durante tres generaciones.',
    tags: ['umbral', 'clima', 'olfato']
  },
  {
    id: 'g7', type: 'symbol', name: 'El Sigilo de la Convergencia',
    short: 'Aparece en diecinueve culturas sin contacto entre sí. Siempre en superficies que han estado en agua salada.',
    full: 'Documentado en diecinueve culturas de tres continentes, en períodos que abarcan cuatro mil años. Ninguna cultura que lo empleó tiene registro de haberlo inventado. Todas tienen registros de haberlo encontrado. Aparece exclusivamente en superficies que han estado en contacto prolongado con agua salada. Los análisis químicos no muestran diferencia entre las superficies marcadas y las no marcadas. La marca parece anterior al soporte.',
    tags: ['símbolo', 'universal', 'agua']
  },
  {
    id: 'g8', type: 'symbol', name: 'La Marca del Durmiente',
    short: 'Ausencia de símbolo. La tinta no adhiere, la pintura no cubre, la piedra no retiene la incisión.',
    full: 'No es un símbolo: es una ausencia de símbolo de forma consistente. Aparece como zona en superficies escritas donde ningún medio de escritura permanece. Los análisis de superficie no muestran diferencias químicas entre las zonas marcadas y las adyacentes. La tinta sencillamente prefiere no estar ahí. La forma de la ausencia es siempre idéntica independientemente del soporte o la cultura.',
    tags: ['símbolo', 'ausencia', 'tinta']
  },
  {
    id: 'g9', type: 'rite', name: 'El Rito del Umbral Doméstico',
    short: 'Protocolo de escucha de cuatro pasos. El cuarto paso es diferente para cada practicante.',
    full: 'Fragmento conservado de un protocolo de número total desconocido. Los cuatro pasos documentados: permanecer en un umbral interior entre las tres y las cuatro de la madrugada sin buscar nada; cuando el silencio cambie de textura, no girar la cabeza; pronunciar en voz alta el nombre de alguien que no pueda responder; el cuarto paso varía entre practicantes y ninguno lo describe de manera compatible con otro. La Orden ha concluido que el cuarto paso es personal.',
    tags: ['rito', 'umbral', 'escucha']
  },
  {
    id: 'g10', type: 'rite', name: 'El Rito de la Copia Exacta',
    short: 'Copiar un texto en oscuridad total sin leerlo. El resultado no es el texto original sino lo que intentaba decir.',
    full: 'Protocolo que consiste en copiar a mano cualquier texto en condiciones de oscuridad completa. El escriba no lee lo que escribe. El texto resultante nunca reproduce el original pero tampoco es aleatorio. Los practicantes describen el resultado como "lo que el texto original estaba intentando decir". Ninguno ha querido especificar qué significa esa descripción. La Orden ha optado por no insistir.',
    tags: ['rito', 'escritura', 'oscuridad']
  },
  {
    id: 'g11', type: 'entity', name: 'El Copista Ciego',
    short: 'Escriba de ceguera selectiva. Tomaba dictado sin fuente audible. Negó la autoría de parte de su propia obra.',
    full: 'No padecía ceguera clínica sino selectiva: veía todo excepto lo directamente frente a él. Esto le permitía copiar sin leer y tomar dictado sin fuente audible. Su obra se divide en fragmentos que él fechó y fragmentos que negó haber escrito, aunque todos están en su caligrafía. Los análisis grafológicos sobre los fragmentos negados produjeron informes contradictorios. Dos peritos solicitaron ser relevados sin explicación. Un tercero desapareció.',
    tags: ['Copista', 'escritura', 'autoría']
  },
  {
    id: 'g12', type: 'place', name: 'La Orden Sumergida',
    short: 'Institución archivística de origen indeterminado. Custodios del Necronomicon 404.',
    full: 'Institución de origen y número de miembros desconocidos. Su propósito declarado es el archivo y preservación de documentos que otras instituciones consideran inarchivables. No tienen sede fija: los investigadores que han intentado localizarlos describen el proceso como "encontrar a alguien que ya sabía que los estabas buscando". Su relación con el Necronomicon 404 no es de autoría: se describen a sí mismos como custodios de un texto que se escribió solo.',
    tags: ['institución', 'archivo', 'custodia']
  }
];

const BESTIARY = [
  {
    id: 'b1',
    class: 'Clase I — Umbral',
    name: 'El Visitante de las Fechas Incorrectas',
    aka: 'También: El Anacronismo, La Visita',
    desc: 'Se presenta en entornos domésticos durante fechas que el calendario señala como incorrectas: el día que no existe en años no bisiestos, el último día de un mes que tiene un día menos de lo habitual. Su aspecto es el de una persona completamente normal excepto por el detalle que cada testigo recuerda de manera diferente: la ropa del color equivocado, los zapatos en los pies equivocados, la sombra proyectada en la dirección incorrecta para la fuente de luz. No habla. Espera. Cuando se le pregunta qué espera, los testigos que le han preguntado no han podido recordar la respuesta.',
    stats: { 'Avistamientos': '34', 'Interacciones': '9', 'Resolución': 'Espontánea', 'Amenaza': 'No determinada' },
    svgPath: 'M100,20 L180,80 L160,170 H40 L20,80 Z'
  },
  {
    id: 'b2',
    class: 'Clase II — Archivístico',
    name: 'Los Coleccionistas de Instantes',
    aka: 'También: Las Manos Vacías, Los que Guardan',
    desc: 'Se desplazan en grupos de número impar, siempre en espacios donde se ha producido recientemente una pérdida de información: archivos incendiados, discos duros borrados, conversaciones no grabadas. No son destructivos: son, según la Orden, conservacionistas de lo que no puede conservarse. Toman algo de cada lugar que visitan. Los testigos no saben qué han perdido hasta días o semanas después, cuando intentan recordar algo específico del período del encuentro y descubren que el recuerdo no está.',
    stats: { 'Avistamientos': '67', 'Tamaño de grupo': 'Impar siempre', 'Sustracción': 'Memorias', 'Amenaza': 'Archivística' },
    svgPath: 'M100,10 L130,90 L200,90 L145,145 L165,190 L100,155 L35,190 L55,145 L0,90 L70,90 Z'
  },
  {
    id: 'b3',
    class: 'Clase III — Geométrico',
    name: 'El Ángulo que No Debería Estar',
    aka: 'También: La Esquina Extra, El Noventa y Uno',
    desc: 'No es una criatura en sentido biológico sino una anomalía geométrica con comportamiento aparentemente volitivo. Se manifiesta como un ángulo de noventa y un grados en una esquina donde el ángulo debería ser de noventa. La diferencia de un grado no es perceptible a simple vista pero produce en los observadores sensibles una sensación descrita como "la arquitectura recordando algo que la física prohíbe". La anomalía se desplaza por las esquinas de los edificios afectados siguiendo patrones que no corresponden a ninguna progresión matemática conocida.',
    stats: { 'Ángulo': '91°', 'Mobilidad': 'Sí', 'Percepción': 'Sensibles únicamente', 'Amenaza': 'Arquitectónica' },
    svgPath: 'M10,10 L190,10 L190,190 L10,190 Z M50,50 L150,50 L150,150 L50,150 Z'
  },
  {
    id: 'b4',
    class: 'Clase IV — Fonético',
    name: 'El Eco Previo',
    aka: 'También: La Respuesta Adelantada, El Antisilencio',
    desc: 'Fenómeno auditivo con características que sugieren agencia. Se presenta como el eco de una palabra que el hablante aún no ha pronunciado. El eco es audible para otros en el espacio pero no para el hablante mismo. El tiempo de anticipación varía entre uno y cuatro segundos. Las palabras que anticipa nunca son las más esperables en el contexto de la conversación. Los lingüistas de la Orden han documentado que las palabras anticipadas, ordenadas cronológicamente, forman frases coherentes en la Lengua del Segundo Estrato.',
    stats: { 'Anticipación': '1-4 seg.', 'Perceptible por': 'Terceros', 'Idioma': 'Segundo Estrato', 'Amenaza': 'Semántica' },
    svgPath: 'M100,100 m-80,0 a80,80 0 1,0 160,0 a80,80 0 1,0 -160,0 M100,100 m-40,0 a40,40 0 1,0 80,0 a40,40 0 1,0 -80,0'
  },
  {
    id: 'b5',
    class: 'Clase V — Epistémico',
    name: 'La Pregunta sin Formulador',
    aka: 'También: La Duda Autónoma, Lo que Quiere Saber',
    desc: 'Clasificada como criatura epistémica: entidad cuya existencia se manifiesta exclusivamente como impulso cognitivo en los observadores. Quienes la han "visto" describen la experiencia como "la sensación de que algo quiere saber algo de mí, específicamente, y que la pregunta que quiere hacerme es una para la que no tengo respuesta pero que reconozco". El reconocimiento de la pregunta sin poder formularla es la experiencia completa del encuentro. Algunos testigos pasan el resto de su vida intentando recordar cuál era la pregunta.',
    stats: { 'Forma': 'No aplica', 'Encuentros': '23 documentados', 'Secuela típica': 'Búsqueda crónica', 'Amenaza': 'Epistemológica' },
    svgPath: 'M100,30 Q140,30 150,60 Q160,90 130,100 Q110,110 110,130 L90,130 Q90,105 110,92 Q135,78 125,62 Q115,46 100,50 Z M90,145 L110,145 L110,165 L90,165 Z'
  }
];

const MARGINAL_NOTES = {
  1: 'El académico Vedric Ossún afirmó haber encontrado estos fragmentos tallados bajo las cimentaciones de una mezquita en ruinas. Murió antes de publicar. Sus notas desaparecieron con él.',
  2: 'Los instrumentos fueron destruidos a continuación. Quién los destruyó no ha podido determinarse porque todos los presentes afirmaron no haber estado presentes.',
  3: 'Vonn escribió en un margen: «El morfema no es pronunciable. Es el espacio entre las sílabas. Los hablantes aprendieron a insertar ausencias.»',
  4: 'El cartógrafo Dun Estrell afirmó que los mapas anteriores "empezaban a mostrar cosas que no estaban en los lugares pero sí en los mapas". Sus sucesores no investigaron la afirmación.',
  5: 'Un investigador intentó fotografiar las páginas opacas. Las fotografías revelan texto en un idioma distinto al del manuscrito. El texto no ha sido traducido por petición del propio investigador.',
  6: 'La Orden distingue entre "no recordar" y "haber olvidado". El segundo implica que hubo algo que olvidar. Sobre el primero prefieren no teorizar.',
  7: 'El semiótico Carc Velund propuso que los símbolos "se dibujan solos" en condiciones de suficiente atención colectiva. Fue expulsado del comité antes de poder desarrollar la hipótesis.',
  8: 'Los fragmentos que el Copista negó haber escrito están en su caligrafía. Dos peritos solicitaron ser relevados sin explicación. Un tercero desapareció antes de entregar su informe.'
};

const ARCHIVE_DOCS = [
  {
    name: 'HERMES_NULL_INDEX.dat',
    meta: '1.2 MB · Corrompido · 1994-??-??',
    desc: 'Índice principal del sistema de catalogación. Las entradas anteriores a 1991 muestran nombres de autores que no coinciden con ningún registro civil.',
    corrupted: true
  },
  {
    name: 'INFORME_OSSUN_FINAL.pdf',
    meta: '340 KB · Parcialmente legible · Fecha: redactada',
    desc: 'Último informe del académico Vedric Ossún. Las páginas 3-17 están en blanco en todas las copias conocidas. La página 18 contiene solo una dirección postal que no existe en ningún callejero.',
    corrupted: false
  },
  {
    name: 'TAXONOMIA_VOL3_DRAFT.txt',
    meta: '88 KB · Legible · Circa 1978',
    desc: 'Borrador del tercer volumen de taxonomía del Copista Ciego. Contiene especies no incluidas en la versión publicada. Las notas a pie de página están escritas en primera persona plural.',
    corrupted: false
  },
  {
    name: 'AUDIO_SALA_LECTURA_03.wav',
    meta: '0 bytes · Error de lectura · Sin fecha',
    desc: 'Grabación de la sala de lectura durante una sesión de estudio. Tamaño del archivo: cero bytes. El reproductor señala 47 minutos de duración.',
    corrupted: true
  },
  {
    name: 'CARTOGRAFIA_UMBRAL_7.svg',
    meta: '2.1 MB · Corrompido · Sin fecha',
    desc: 'Mapa del séptimo umbral documentado. Los vectores del archivo no convergen. El punto central del mapa no tiene coordenadas definidas pero el trazado lo rodea como si existiera.',
    corrupted: true
  },
  {
    name: 'NOTA_COSISTA_0.txt',
    meta: '1 KB · Legible · Sin fecha',
    desc: 'Fragmento cero del Copista Ciego. El único texto en su caligrafía habitual. «No elijo las palabras. Las palabras me eligen a mí.»',
    corrupted: false
  }
];

// Generador de nombres
const NAME_PARTS = {
  prefixes: ['Ors', 'Vel', 'Kath', 'Nun', 'Dru', 'Ael', 'Vor', 'Meth', 'Urn', 'Cael', 'Thu', 'Yar', 'Esh', 'Nul', 'Zar', 'Omn', 'Vedh', 'Tal', 'Res', 'Bhal'],
  middles: ['un', 'eth', 'ar', 'os', 'ith', 'ul', 'en', 'ak', 'or', 'ael', 'oom', 'iss', 'ath', 'ur', 'yl'],
  suffixes: ['on', 'is', 'oth', 'ar', 'um', 'el', 'ael', 'ur', 'en', 'ix', 'oth', 'vel', 'kath', 'os', 'in', 'un'],
  epithets: [
    'el Innombrable', 'de la Marea Seca', 'que Espera', 'del Umbral Tercero',
    'sin Sombra', 'de las Aguas Estancadas', 'el Silencioso', 'que Anota',
    'del Vacío Cercano', 'sin Cara', 'que Recuerda', 'el Geométrico',
    'de los Estratos', 'sin Nombre Propio', 'que Precede'
  ]
};

const FRAGMENT_TEMPLATES = [
  'En el {tiempo} en que {lugar_sujeto}, el copista {accion_copista}. Lo que encontró {resultado}. Los miembros de la {institucion} que revisaron el hallazgo {reaccion_orden}. El documento {estado_doc}.',
  '{Entidad} ha sido documentada en {numero} registros independientes. Todos coinciden en {coincidencia}. Ninguno coincide en {discrepancia}. La Orden ha concluido que {conclusion}.',
  'El umbral de {lugar} no puede cartografiarse porque {razon_cartografia}. Quienes han intentado {intento} regresaron con {regreso}. Quienes no regresaron {razon_no_regreso}.',
  'La fonética del Segundo Estrato produce, cuando se combina con {combinacion}, {efecto}. Los instrumentos de medición {estado_instrumentos}. Las paredes {estado_paredes}.',
  'Existe un {objeto} en los archivos de {institucion} que {caracteristica_objeto}. Nadie recuerda haberlo catalogado. El número de registro {estado_registro}. Cada vez que se consulta, {consecuencia}.'
];

const FRAGMENT_PARTS = {
  tiempo: ['tiempo anterior al tiempo', 'período que los calendarios no alcanzan', 'época sin nombre registrado', 'ciclo indeterminado'],
  lugar_sujeto: ['las cimentaciones cedieron', 'el agua salada retrocedió', 'el archivo se selló desde dentro', 'la última copia fue copiada'],
  accion_copista: ['transcribió sin leer', 'encontró el folio en blanco pero cubierto', 'documentó la ausencia', 'registró lo que no debía registrarse'],
  resultado: ['no tenía precedente en los archivos', 'coincidía con tres registros previos que no debían coincidir', 'no pudo ser verificado por el copista mismo', 'fue inmediatamente clasificado'],
  institucion: ['Orden Sumergida', 'Comité de Revisión', 'Archivo Restringido', 'Rama Epistémica'],
  reaccion_orden: ['solicitaron no ser recordados como revisores', 'presentaron informes contradictorios', 'sellaron el acceso durante cuarenta años', 'no presentaron informe'],
  estado_doc: ['permanece en consulta restringida', 'no puede ser localizado pero sigue siendo referenciado', 'existe en copia única cuya ubicación es classified', 'ha sido consultado pero no leído'],
  Entidad: ['El Visitante', 'La Que Anota', 'El Eco Previo', 'Los Coleccionistas', 'La Pregunta sin Formulador', 'Orsún'],
  numero: ['siete', 'doce', 'veintitrés', 'tres', 'diecisiete'],
  coincidencia: ['la imposibilidad de recordar la forma exacta', 'la sensación de que el encuentro ya había terminado antes de comenzar', 'el olor a agua estancada que no tiene fuente', 'el silencio previo que cambia de textura'],
  discrepancia: ['la duración', 'el número de presencias', 'el idioma en que se comunicaron', 'si hubo comunicación'],
  conclusion: ['la discrepancia es parte del fenómeno', 'los registros describen encuentros distintos con la misma entidad', 'la entidad percibe a cada observador de manera diferente', 'el encuentro modifica la memoria del encuentro'],
  lugar: ['la Pared Porosa', 'el Siglo Incorrecto', 'la Sala de Lectura Sellada', 'las Coordenadas Nulas', 'el Archivo Interior'],
  razon_cartografia: ['cambia de posición entre visitas', 'el acto de cartografiarla la desplaza', 'ningún instrumento de medición funciona dentro', 'la cartografía ya existe pero no puede ser leída'],
  intento: ['fijar sus coordenadas', 'fotografiarlo', 'describirlo desde el interior', 'calcular su superficie'],
  regreso: ['instrumentos inutilizables', 'descripciones incompatibles entre sí', 'la sensación de que faltaba menos tiempo del transcurrido', 'más preguntas que antes'],
  razon_no_regreso: ['no han podido ser localizados', 'siguen dentro según sus propios informes enviados posteriormente', 'regresaron pero no lo reconocen', 'no es aplicable'],
  combinacion: ['las vocales del Primer Estrato', 'silencio deliberado', 'las consonantes del Cuarto Estrato', 'la respiración contenida'],
  efecto: ['vibraciones sin origen mecánico', 'cambios de temperatura localizados', 'anomalías en los instrumentos de medición', 'el reconocimiento involuntario de algo no aprendido'],
  estado_instrumentos: ['fueron retirados antes de que pudieran producir datos', 'mostraron valores fuera de escala', 'funcionaron correctamente durante el proceso y dejaron de funcionar después', 'no estuvieron presentes aunque figuran en el acta'],
  estado_paredes: ['retienen marcas que los restauradores no han interpretado', 'muestran patrones de humedad con forma reconocible', 'fueron repintadas tres veces en el mismo mes', 'no han sido examinadas por petición del propietario'],
  objeto: ['documento sin título', 'folio numerado con un número que no existe en el sistema', 'objeto de naturaleza no determinada', 'registro audiovisual de origen desconocido'],
  caracteristica_objeto: ['cambia de peso según quién lo sostiene', 'tiene fecha de catalogación posterior a la fecha de creación en cincuenta años', 'no aparece en el inventario pero ocupa un espacio físico verificable', 'ha sido retirado y devuelto seis veces por el mismo investigador'],
  estado_registro: ['corresponde a una entrada eliminada', 'precede al sistema de catalogación en uso', 'es correcto pero no existe en la base de datos', 'es diferente cada vez que se consulta'],
  consecuencia: ['el catalogador solicita ser trasladado a otro departamento', 'aparece una copia adicional en la sala de lectura', 'el archivo cierra por el resto del día', 'nadie recuerda haberlo consultado']
};

/* ─────────────────────────────────────────────────────────────────
   1b. DATOS ADICIONALES — REFERENCIAS HISTÓRICAS (dominio público),
       BIBLIOTECA, CRONOLOGÍA, AUTORES, INSPIRACIÓN REAL
   ───────────────────────────────────────────────────────────────── */

// AUTORES DEL GÉNERO — datos biográficos y obras de dominio público / libre uso
const COSMIC_AUTHORS = [
  {
    id: 'a1',
    name: 'H.P. Lovecraft',
    dates: '1890 – 1937',
    nationality: 'Estadounidense',
    bio: 'Howard Phillips Lovecraft es el arquitecto fundacional del horror cósmico moderno. Desarrolló la idea de que el universo es indiferente a la humanidad y que el conocimiento verdadero conduce a la locura. Sus obras más influyentes están en dominio público en la mayor parte del mundo.',
    publicDomain: true,
    keyWorks: [
      { title: 'El horror de Dunwich', year: 1929, notes: 'Dominio público. Un ser de naturaleza imposible acecha los colinas de Nueva Inglaterra.' },
      { title: 'La llamada de Cthulhu', year: 1928, notes: 'Dominio público. El texto fundacional del Mito.' },
      { title: 'En las montañas de la locura', year: 1936, notes: 'Dominio público. Expedición antártica que descubre una civilización prehumana.' },
      { title: 'La sombra sobre Innsmouth', year: 1936, notes: 'Dominio público. Una ciudad costera con un secreto de sangre.' },
      { title: 'El color del espacio exterior', year: 1927, notes: 'Dominio público. Considerado por el propio autor su mejor relato.' },
      { title: 'La música de Erich Zann', year: 1922, notes: 'Dominio público. Un músico toca frente a una ventana que no mira a ningún lugar conocido.' },
      { title: 'El modelo de Pickman', year: 1927, notes: 'Dominio público. Un pintor cuyos modelos no son imaginarios.' },
      { title: 'Más allá del muro del sueño', year: 1919, notes: 'Dominio público.' }
    ],
    themes: ['indiferencia cósmica', 'conocimiento prohibido', 'linajes degenerados', 'seres pre-humanos', 'locura reveladora'],
    influence: 'Prácticamente todo el horror cósmico posterior bebe de Lovecraft. Creó el Mito de Cthulhu, un universo compartido adoptado por decenas de autores.',
    quote: '«La emoción más antigua y más intensa de la humanidad es el miedo, y el miedo más antiguo y más intenso es el miedo a lo desconocido.» — Lovecraft, Supernatural Horror in Literature (1927, dominio público)'
  },
  {
    id: 'a2',
    name: 'Arthur Machen',
    dates: '1863 – 1947',
    nationality: 'Galés',
    bio: 'Precursor de Lovecraft y maestro del horror místico. Exploró la idea de que lo sobrenatural no es externo al mundo sino que subyace bajo él, oculto bajo la superficie de lo ordinario. Gran influencia en Lovecraft, que lo citó extensamente.',
    publicDomain: true,
    keyWorks: [
      { title: 'El gran dios Pan', year: 1894, notes: 'Dominio público. Un experimento neurológico abre una puerta a algo que no debería existir.' },
      { title: 'El pueblo blanco', year: 1904, notes: 'Dominio público. Lovecraft lo consideró uno de los mejores relatos de horror jamás escritos.' },
      { title: 'La pirámide de fuego', year: 1895, notes: 'Dominio público.' },
      { title: 'Los tres impostores', year: 1895, notes: 'Dominio público. Novela de historias entrelazadas de terror ocultista.' }
    ],
    themes: ['naturaleza oculta de la realidad', 'lo feérico como horror genuino', 'misticismo pagano', 'degeneración secreta'],
    influence: 'Su idea de que los dioses antiguos no han desaparecido sino que se han ocultado es central en el horror cósmico posterior.',
    quote: '«Hay un mundo debajo del mundo, y los que lo han visto no suelen poder explicarlo.» — paráfrasis de su obra'
  },
  {
    id: 'a3',
    name: 'Algernon Blackwood',
    dates: '1869 – 1951',
    nationality: 'Británico',
    bio: 'Lovecraft lo consideró el maestro absoluto del horror atmosférico. Blackwood escribió sobre la naturaleza como entidad consciente e indiferente, capaz de absorber a quienes se adentran demasiado en ella.',
    publicDomain: true,
    keyWorks: [
      { title: 'El sauce', year: 1907, notes: 'Dominio público. Lovecraft lo consideró la mejor historia de horror jamás escrita.' },
      { title: 'El wendigo', year: 1910, notes: 'Dominio público. El bosque canadiense y algo que acecha en él.' },
      { title: 'El hombre de la tierra', year: 1917, notes: 'Dominio público.' },
      { title: 'El escuadrón psíquico', year: 1908, notes: 'Dominio público. Investigadores de lo sobrenatural.' }
    ],
    themes: ['naturaleza cósmica', 'lo que acecha en los espacios abiertos', 'conciencia no humana', 'absorción por la naturaleza'],
    influence: 'Su tratamiento de la naturaleza como presencia hostil e indiferente influyó directamente en Lovecraft y en autores modernos como Jeff VanderMeer.',
    quote: '«Hay lugares en el mundo donde la tierra está viva de una manera que los mapas no pueden registrar.» — paráfrasis'
  },
  {
    id: 'a4',
    name: 'William Hope Hodgson',
    dates: '1877 – 1918',
    nationality: 'Británico',
    bio: 'Marinero y luchador antes que escritor, Hodgson trasladó el horror a los océanos y al fin de los tiempos. Murió en la Primera Guerra Mundial. Su obra maestra, La casa en el límite del mundo, anticipa el horror cósmico en una década.',
    publicDomain: true,
    keyWorks: [
      { title: 'La casa en el límite del mundo', year: 1908, notes: 'Dominio público. Un hombre contempla la muerte del universo desde su propia casa.' },
      { title: 'El nocturno del fantasma pirático', year: 1907, notes: 'Dominio público.' },
      { title: 'Los barcos de Carnacki', year: 1913, notes: 'Dominio público. Historias de Carnacki, el investigador de lo sobrenatural.' },
      { title: 'El fin del mundo en flama', year: 1912, notes: 'Dominio público.' }
    ],
    themes: ['fin del universo', 'horror oceánico', 'tiempo cósmico', 'entidades de más allá del espacio'],
    influence: 'Su visión del universo como algo que termina y que contiene horrores que sobreviven al fin influyó en Lovecraft y en el weird fiction del siglo XX.',
    quote: '«El mar es el límite de lo conocido. Lo que hay más allá del mar no tiene nombre.» — paráfrasis'
  },
  {
    id: 'a5',
    name: 'M.R. James',
    dates: '1862 – 1936',
    nationality: 'Británico',
    bio: 'Medievalista y académico de Cambridge, James escribió cuentos de fantasmas con una precisión casi arqueológica. Su estilo aparentemente tranquilo hace que las irrupciones de lo sobrenatural sean especialmente perturbadoras.',
    publicDomain: true,
    keyWorks: [
      { title: 'El álbum del Canónigo Alberic', year: 1904, notes: 'Dominio público.' },
      { title: 'Oh, silba y vendré a ti, mi muchacho', year: 1904, notes: 'Dominio público. Una flauta de bronce convoca algo desde una tumba.' },
      { title: 'Cuenta y responderás', year: 1911, notes: 'Dominio público.' },
      { title: 'El árbol de Castings', year: 1925, notes: 'Dominio público.' }
    ],
    themes: ['archivos y manuscritos malditos', 'lo que se convoca sin saber', 'objetos que contienen horror', 'erudición peligrosa'],
    influence: 'Su modelo de horror académico —el estudioso que despierta algo que dormía— es uno de los arquetipos más reproducidos del género.',
    quote: '«Lo más peligroso de estudiar el pasado es que a veces el pasado te devuelve la mirada.» — paráfrasis'
  },
  {
    id: 'a6',
    name: 'Ambrose Bierce',
    dates: '1842 – c.1914',
    nationality: 'Estadounidense',
    bio: 'Veterano de la Guerra Civil americana, periodista mordaz y cuentista de horror seco y brutal. Desapareció misteriosamente en México hacia 1914. Autor del Diccionario del Diablo y de relatos que prefiguran el horror cósmico.',
    publicDomain: true,
    keyWorks: [
      { title: 'Un habitante de Carcosa', year: 1886, notes: 'Dominio público. El origen del mítico Carcosa.' },
      { title: 'El morador de Carcosa', year: 1886, notes: 'Dominio público.' },
      { title: 'El diccionario del diablo', year: 1906, notes: 'Dominio público. Definiciones sardónicas que rozan el horror.' },
      { title: 'Ocurrencia en el puente del Búho', year: 1890, notes: 'Dominio público.' }
    ],
    themes: ['muerte y percepción', 'la mente en su límite', 'ironía cósmica', 'Carcosa y el Rey de Amarillo'],
    influence: 'Creó Carcosa, el topónimo que Robert W. Chambers adoptó y que a su vez influyó en Lovecraft y en True Detective.',
    quote: '«La muerte es un sueño del que los vivos no se despiertan porque nunca lo tuvieron.» — paráfrasis del Diccionario del Diablo'
  },
  {
    id: 'a7',
    name: 'Robert W. Chambers',
    dates: '1865 – 1933',
    nationality: 'Estadounidense',
    bio: 'Pintor y escritor que creó El Rey de Amarillo, una colección de relatos vinculados por una obra de teatro ficticia de tal poder perturbador que enloquece a quienes la leen. Lovecraft y toda la tradición del weird fiction posterior le deben una deuda enorme.',
    publicDomain: true,
    keyWorks: [
      { title: 'El Rey de Amarillo', year: 1895, notes: 'Dominio público. La colección fundacional del weird fiction moderno.' },
      { title: 'El reparador de reputaciones', year: 1895, notes: 'Dominio público. Un relato perturbador de un futuro distópico.' },
      { title: 'La máscara', year: 1895, notes: 'Dominio público.' },
      { title: 'En el Bosque de los Reyes', year: 1897, notes: 'Dominio público.' }
    ],
    themes: ['el Rey de Amarillo', 'Carcosa', 'el Signo Amarillo', 'arte como vector de locura', 'ciudades imposibles'],
    influence: 'El Rey de Amarillo influyó en Lovecraft, en True Detective (2014), en la cultura popular del horror cósmico y en el concepto de textos que dañan al lector.',
    quote: '«No debería haber leído el segundo acto. Nadie que haya leído el segundo acto ha podido olvidarlo.» — El reparador de reputaciones'
  },
  {
    id: 'a8',
    name: 'Lord Dunsany',
    dates: '1878 – 1957',
    nationality: 'Irlandés',
    bio: 'Aristócrata y dramaturgo que creó mitologías completas de dioses y tierras imposibles. Lovecraft lo admiraba profundamente y su influencia se nota en los Sueños en la casa de la bruja y en todo el ciclo onírico lovecraftiano.',
    publicDomain: true,
    keyWorks: [
      { title: 'Los dioses de Pegāna', year: 1905, notes: 'Dominio público. Una mitología completa inventada de principio a fin.' },
      { title: 'El tiempo y los dioses', year: 1906, notes: 'Dominio público.' },
      { title: 'El libro de las maravillas', year: 1912, notes: 'Dominio público.' },
      { title: 'La historia de Mana-Yood-Sushai', year: 1905, notes: 'Dominio público.' }
    ],
    themes: ['cosmogonías inventadas', 'dioses indiferentes', 'el sueño como portal', 'mitología del fin'],
    influence: 'Su método de crear mitologías coherentes desde cero fue adoptado por Tolkien, Lovecraft y por todo el weird fiction que construye universos propios.',
    quote: '«Los dioses de Pegāna crearon el mundo para tener algo en lo que no pensar.» — paráfrasis'
  }
];

// CRONOLOGÍA DEL HORROR CÓSMICO — obras fundacionales con contexto
const COSMIC_TIMELINE = [
  { year: 1764, event: 'Horace Walpole publica El castillo de Otranto, primera novela gótica. Establece el modelo de horror arquitectónico y sobrenatural.' },
  { year: 1818, event: 'Mary Shelley publica Frankenstein. El primer gran texto de horror científico: la creación como blasfemia.' },
  { year: 1845, event: 'Edgar Allan Poe publica El cuervo y la colección de relatos que definen el horror psicológico anglosajón.' },
  { year: 1886, event: 'Ambrose Bierce crea Carcosa en Un habitante de Carcosa. La ciudad imposible entra en el horror.' },
  { year: 1890, event: 'Arthur Machen comienza su obra. El horror ya no viene del castillo sino de lo que hay debajo del campo.' },
  { year: 1894, event: 'Machen publica El gran dios Pan. Lo sobrenatural como entidad pre-racional, no como fantasma.' },
  { year: 1895, event: 'Robert W. Chambers publica El Rey de Amarillo. Carcosa y el Signo Amarillo entran en la mitología del género.' },
  { year: 1905, event: 'Lord Dunsany publica Los dioses de Pegāna. La primera cosmogonía inventada coherente de la literatura moderna.' },
  { year: 1907, event: 'Algernon Blackwood publica El sauce. Para Lovecraft, el mejor relato de horror jamás escrito.' },
  { year: 1908, event: 'W.H. Hodgson publica La casa en el límite del mundo. El universo como algo que termina, y que tiene testigos.' },
  { year: 1917, event: 'Lovecraft empieza a publicar. El horror cósmico como género tiene ya su articulación definitiva.' },
  { year: 1922, event: 'Lovecraft escribe La música de Erich Zann y Herbert West-Reanimador. El Mito empieza a tomar forma.' },
  { year: 1926, event: 'Lovecraft escribe La llamada de Cthulhu. El Mito queda codificado: Grandes Antiguos, R\'lyeh, el culto.' },
  { year: 1927, event: 'Lovecraft publica El Horror Sobrenatural en Literatura (dominio público). El manifiesto teórico del horror cósmico.' },
  { year: 1929, event: 'Lovecraft escribe El horror de Dunwich y El color del espacio exterior en el mismo año. Cima de su producción.' },
  { year: 1931, event: 'Lovecraft escribe En las montañas de la locura. La mayor obra de horror cósmico en extensión.' },
  { year: 1936, event: 'Clark Ashton Smith, Robert E. Howard y Lovecraft publican activamente en Weird Tales. El círculo está completo.' },
  { year: 1937, event: 'Lovecraft muere. August Derleth y Donald Wandrei fundan Arkham House para preservar su obra.' },
  { year: 1939, event: 'Arkham House publica La sombra sobre Innsmouth. Primer libro de Arkham House, dedicado a preservar el Mito.' },
  { year: 1969, event: 'Ramsey Campbell publica Los moradores de las profundidades. El horror cósmico se extiende al Reino Unido.' },
  { year: 1975, event: 'Stephen King publica El misterio de Salem\'s Lot con deudas evidentes con Lovecraft y el horror gótico.' },
  { year: 1981, event: 'Thomas Ligotti empieza a publicar. La voz más oscura del horror cósmico contemporáneo.' },
  { year: 1994, event: 'Jeff VanderMeer empieza a publicar weird fiction. El horror cósmico se cruza con la nueva rara.' },
  { year: 2014, event: 'True Detective (temporada 1) lleva el King in Yellow y el horror cósmico a la televisión masiva.' },
  { year: 2019, event: 'Jeff VanderMeer publica Annihilation. El horror cósmico en la literatura mainstream del siglo XXI.' }
];

// CONCEPTOS FUNDAMENTALES DEL HORROR CÓSMICO
const COSMIC_CONCEPTS = [
  {
    id: 'cc1',
    term: 'Horror Cósmico',
    also: 'Weird Fiction, Cosmicism',
    definition: 'Subgénero del horror en el que la fuente del terror no es un monstruo vencible sino la indiferencia absoluta del universo hacia la humanidad. El conocimiento no libera: destruye. Los seres que se descubren no son malignos en sentido moral: simplemente no perciben a los humanos como relevantes.',
    origin: 'Articulado teóricamente por Lovecraft en Supernatural Horror in Literature (1927, dominio público), aunque sus raíces están en Machen, Blackwood y Hodgson.',
    keyTexts: 'Supernatural Horror in Literature (Lovecraft, 1927) · El sauce (Blackwood, 1907) · La casa en el límite del mundo (Hodgson, 1908)'
  },
  {
    id: 'cc2',
    term: 'El Mito de Cthulhu',
    also: 'Cthulhu Mythos, Yog-Sothothery',
    definition: 'Universo ficticio compartido iniciado por Lovecraft y ampliado por sus contemporáneos y sucesores. Comprende entidades cósmicas (Grandes Antiguos, Dioses Exteriores), textos prohibidos (el Necronomicon, el Libro de Eibon, los Manuscritos Pnakóticos) y geografías imposibles (R\'lyeh, Yuggoth, Carcosa).',
    origin: 'Emerges gradually in Lovecraft\'s work from 1921. August Derleth codified it posthumously, though his version (with good/evil duality) is considered a distortion of Lovecraft\'s original amoral vision.',
    keyTexts: 'La llamada de Cthulhu (1928) · El horror de Dunwich (1929) · En las montañas de la locura (1931)'
  },
  {
    id: 'cc3',
    term: 'Cosmicismo',
    also: 'Indiferentismo cósmico',
    definition: 'Posición filosófica de Lovecraft: el universo es inconmensurablemente vasto, indiferente a la existencia humana, y cualquier dios o entidad que pueda existir no tiene la menor consideración moral por nosotros. No hay maldad cósmica: solo indiferencia, que es peor.',
    origin: 'Deriva del materialismo científico del siglo XIX y del pesimismo filosófico. Lovecraft lo articuló explícitamente en correspondencia y en Supernatural Horror in Literature.',
    keyTexts: 'Supernatural Horror in Literature · Correspondencia de Lovecraft (parcialmente en dominio público)'
  },
  {
    id: 'cc4',
    term: 'El Necronomicon (ficticio)',
    also: 'Al Azif, El Libro de los Muertos',
    definition: 'Grimorio ficticio inventado por Lovecraft. Supuestamente escrito por el árabe demente Abdul Alhazred en Damasco hacia el año 730 d.C. El título griego significa aproximadamente "Libro de las leyes de los muertos" o "Imagen de la ley de los muertos". No existe ningún texto real con este nombre anterior a Lovecraft.',
    origin: 'Lovecraft lo menciona por primera vez en La historia del Necronomicon (1927, dominio público). Generó una industria de falsificaciones a lo largo del siglo XX.',
    keyTexts: 'La historia del Necronomicon (Lovecraft, 1927, dominio público) · La llamada de Cthulhu · El horror de Dunwich'
  },
  {
    id: 'cc5',
    term: 'El Signo Amarillo',
    also: 'Yellow Sign, El Rey de Amarillo',
    definition: 'Símbolo ficticio creado por Robert W. Chambers en El Rey de Amarillo (1895). Quien lo ve queda conectado al Rey de Amarillo, entidad que gobierna Carcosa. Posteriormente adoptado por la tradición del Mito. True Detective (2014) lo popularizó masivamente.',
    origin: 'Robert W. Chambers, El Rey de Amarillo (1895, dominio público). Chambers tomó el nombre Carcosa de Ambrose Bierce (1886).',
    keyTexts: 'El Rey de Amarillo (Chambers, 1895) · El reparador de reputaciones (1895)'
  },
  {
    id: 'cc6',
    term: 'Weird Fiction',
    also: 'Lo Raro, Nueva Rareza',
    definition: 'Término más amplio que horror cósmico: literatura que produce extrañamiento genuino frente a lo que no puede clasificarse ni como sobrenatural ni como racional. Jeff VanderMeer y China Miéville lo rehabilitaron como categoría crítica en los 2000.',
    origin: 'El término lo usaba Lovecraft para su propia obra. La revista Weird Tales (1923-2007) fue su hogar editorial principal.',
    keyTexts: 'Annihilation (VanderMeer, 2014) · The Weird: A Compendium (VanderMeer, ed., 2012)'
  },
  {
    id: 'cc7',
    term: 'El Ciclo Onírico',
    also: 'Dream Cycle, Randolph Carter',
    definition: 'Serie de relatos de Lovecraft ambientados en las Tierras del Sueño, un continente onírico con su propia geografía, dioses y habitantes. Tono más fantasioso que el Mito principal. Incluye los cuentos con Randolph Carter como protagonista.',
    origin: 'Lovecraft, influido por Lord Dunsany. Comienza con Polaris (1920) y culmina en La búsqueda en sueños de la ignota Kadath (escrito 1927, publicado 1943).',
    keyTexts: 'La búsqueda en sueños de la ignota Kadath · Celephaïs · El otro dios'
  },
  {
    id: 'cc8',
    term: 'Arkham, Innsmouth, Dunwich',
    also: 'Geografía ficticia de Massachusetts',
    definition: 'Ciudades inventadas de Nueva Inglaterra que Lovecraft usó como escenario. Arkham (basada en Salem) alberga la Universidad Miskatonic. Innsmouth es el puerto de pescadores con el terrible secreto. Dunwich es el pueblo rural de El horror de Dunwich.',
    origin: 'Creadas por Lovecraft entre 1921 y 1936. Arkham se usó como nombre de la editorial Arkham House y posteriormente en Arkham Asylum de Batman.',
    keyTexts: 'La sombra sobre Innsmouth · El horror de Dunwich · El caso de Charles Dexter Ward'
  }
];

// TEXTOS REALES EN DOMINIO PÚBLICO (fragmentos cortos para referencia)
const PUBLIC_DOMAIN_PASSAGES = [
  {
    id: 'pd1',
    title: 'Sobre el horror cósmico',
    source: 'H.P. Lovecraft — El Horror Sobrenatural en Literatura (1927)',
    status: 'Dominio público',
    text: 'La emoción más antigua y más intensa de la humanidad es el miedo, y el tipo de miedo más antiguo y más intenso es el miedo a lo desconocido. Pocos psicólogos disputarán este hecho, y la verdad reconocida que implica apunta claramente a un campo fecundo para el artista que quiera evocar emociones inusuales y apasionadas.',
    note: 'Párrafo de apertura del ensayo teórico fundacional del horror cósmico. Dominio público en la mayoría de jurisdicciones.'
  },
  {
    id: 'pd2',
    title: 'La definición de lo sobrenatural verdadero',
    source: 'H.P. Lovecraft — El Horror Sobrenatural en Literatura (1927)',
    status: 'Dominio público',
    text: 'La verdadera historia sobrenatural de horror tiene cierta atmósfera de expectativa sin aliento y de miedo a lo desconocido. Debe haber una sensación de presencia externa horrible; de fuerzas que desafían el orden conocido; y de algo que alcanza el umbral o atraviesa la frontera del mundo de los hombres.',
    note: 'Lovecraft definiendo su propio género. La teoría, no solo la ficción.'
  },
  {
    id: 'pd3',
    title: 'Apertura de El sauce',
    source: 'Algernon Blackwood — El sauce (1907)',
    status: 'Dominio público',
    text: 'Entre todos los lugares de poder que he visto en mis viajes, los sauces del Danubio superior ocupan un lugar especial: no porque sean más peligrosos, sino porque son más antiguos. La tierra misma parece consciente allí, y el río, indolente y silencioso entre sus orillas, lleva consigo algo que no procede de las montañas.',
    note: 'Paráfrasis de la atmósfera inicial de El sauce, considerado por Lovecraft el mejor relato de horror jamás escrito.'
  },
  {
    id: 'pd4',
    title: 'Sobre Carcosa',
    source: 'Ambrose Bierce — Un habitante de Carcosa (1886)',
    status: 'Dominio público',
    text: 'Buscando en mi memoria el nombre del país y el año en que vivía, encontré solo un gran silencio. Allí donde debería haber recuerdos, había un vacío sin fondo. Me puse en pie y caminé. El suelo bajo mis pies era extraño, de una piedra negra y brillante que no producía ningún sonido al pisarla.',
    note: 'Paráfrasis del arranque de Un habitante de Carcosa, el texto que creó la ciudad que Chambers convirtió en mito.'
  },
  {
    id: 'pd5',
    title: 'El Rey de Amarillo — advertencia',
    source: 'Robert W. Chambers — El reparador de reputaciones (1895)',
    status: 'Dominio público',
    text: 'No debería haber leído el libro; eso lo sé ahora. Pero la advertencia en la cubierta parecía diseñada para incitar en lugar de disuadir. "Esta obra contiene El Rey de Amarillo, Acto II." ¿Qué clase de advertencia es esa para alguien que ya tiene el libro en las manos?',
    note: 'Paráfrasis del efecto del texto prohibido en El reparador de reputaciones.'
  },
  {
    id: 'pd6',
    title: 'Historia del Necronomicon',
    source: 'H.P. Lovecraft — La historia del Necronomicon (1927)',
    status: 'Dominio público',
    text: 'El original en árabe fue escrito hacia el 730 d.C. por Abdul Alhazred, un poeta demente de Saná, en Yemen, que en sus años tardíos vivió en Damasco... el libro recibió el nombre de Al Azif, siendo azif el término empleado por los árabes para designar el sonido nocturno que producen los insectos, que se considera el aullar de los demonios.',
    note: 'Texto completo en dominio público. Lovecraft codificando la falsa historia de su grimorio más famoso.'
  }
];

/* ─────────────────────────────────────────────────────────────────
   2. ESTADO DE LA APLICACIÓN
   FIX CRITICAL-2: localStorage con try-catch completo.
   FIX LOW-13: State.save() protegido contra QuotaExceededError.
   ───────────────────────────────────────────────────────────────── */

function safeParse(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (raw === null) return fallback;
    return JSON.parse(raw);
  } catch {
    // JSON inválido o localStorage no disponible (modo incógnito en algunos navegadores)
    return fallback;
  }
}

const State = {
  currentPage: 'cover',
  currentChapter: 0,
  favorites: safeParse('necro_favs', []),
  unlockedNotes: safeParse('necro_notes', []),
  mode: safeParse('necro_mode', 'dark') === 'parchment' ? 'parchment' : 'dark',
  eggCount: Math.max(0, parseInt(safeParse('necro_eggs', '0'), 10) || 0),

  save() {
    try {
      localStorage.setItem('necro_favs', JSON.stringify(this.favorites));
      localStorage.setItem('necro_notes', JSON.stringify(this.unlockedNotes));
      localStorage.setItem('necro_mode', this.mode);
      localStorage.setItem('necro_eggs', String(this.eggCount));
    } catch {
      // QuotaExceededError o localStorage bloqueado — continuar sin persistencia
    }
  }
};

/* ─────────────────────────────────────────────────────────────────
   3. NAVEGACIÓN
   ─────────────────────────────────────────────────────────────────
   FIX: navigate() resets marginal note state on page change.
   FIX: chapter-toolbar nav buttons get disabled state at bounds.
   ───────────────────────────────────────────────────────────────── */

function navigate(pageId, chapterIdx) {
  // Ocultar todas las páginas
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active', 'page-fade');
    p.hidden = true;
  });

  const targetId = `page-${pageId}`;
  const target = document.getElementById(targetId);
  if (!target) return;

  target.removeAttribute('hidden');
  target.classList.add('active', 'page-fade');
  State.currentPage = pageId;

  // Mostrar nav (excepto en portada)
  const nav = document.getElementById('main-nav');
  nav.hidden = pageId === 'cover';

  // Marcar botón activo en nav
  document.querySelectorAll('.nav-btn[data-goto]').forEach(b => {
    b.classList.toggle('active', b.dataset.goto === pageId);
  });

  // Cerrar nota marginal si estaba abierta
  const marginalNote = document.getElementById('marginal-note');
  if (marginalNote) {
    marginalNote.hidden = true;
    marginalNote.classList.remove('is-visible');
  }

  // Scroll al inicio
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Lógica específica por página
  if (pageId === 'chapter') {
    loadChapter(chapterIdx !== undefined ? chapterIdx : State.currentChapter);
  }
  if (pageId === 'bestiary') renderBestiary();
  if (pageId === 'archive') renderArchiveDocs();
  if (pageId === 'library') renderLibrary();
  if (pageId === 'authors') renderAuthors();
  if (pageId === 'timeline') renderTimeline();

  // Ocultar menú móvil
  closeMobileMenu();
}

// Delegar navegación por data-goto
document.addEventListener('click', e => {
  const btn = e.target.closest('[data-goto]');
  if (btn) {
    const target = btn.dataset.goto;
    navigate(target);
  }
});

// Botón abrir grimorio
document.getElementById('btn-open-grimoire').addEventListener('click', () => {
  navigate('index-page');
});

/* ─────────────────────────────────────────────────────────────────
   4. MENÚ MÓVIL
   ───────────────────────────────────────────────────────────────── */

const hamburger = document.getElementById('nav-hamburger');
const navMobile = document.getElementById('nav-mobile');

hamburger.addEventListener('click', () => {
  const expanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', String(!expanded));
  navMobile.hidden = expanded;
});

function closeMobileMenu() {
  hamburger.setAttribute('aria-expanded', 'false');
  navMobile.hidden = true;
}

/* ─────────────────────────────────────────────────────────────────
   5. MODO VISUAL (oscuro / pergamino)
   FIX: mode-label ahora se actualiza desde ambos toggles.
   ───────────────────────────────────────────────────────────────── */

function applyMode() {
  document.body.classList.toggle('mode-parchment', State.mode === 'parchment');
  document.body.classList.toggle('mode-dark', State.mode === 'dark');
  const label = document.getElementById('mode-label');
  if (label) label.textContent = State.mode === 'dark' ? 'Pergamino' : 'Oscuro';
}

function toggleMode() {
  State.mode = State.mode === 'dark' ? 'parchment' : 'dark';
  applyMode();
  State.save();
  showToast(State.mode === 'parchment' ? 'Modo pergamino activado' : 'Modo oscuro activado');
}

document.getElementById('mode-toggle').addEventListener('click', toggleMode);
document.getElementById('mode-toggle-mobile').addEventListener('click', toggleMode);

applyMode();

/* ─────────────────────────────────────────────────────────────────
   6. ÍNDICE DE CAPÍTULOS
   ───────────────────────────────────────────────────────────────── */

function renderIndex() {
  const grid = document.querySelector('.chapter-grid');
  grid.innerHTML = '';
  CHAPTERS.forEach((ch, idx) => {
    const card = document.createElement('div');
    card.className = 'chapter-card';
    card.setAttribute('role', 'listitem');
    card.setAttribute('tabindex', '0');
    card.innerHTML = `
      <p class="chapter-card-num">Capítulo ${ch.num}</p>
      <h3 class="chapter-card-title">${ch.title}</h3>
      <p class="chapter-card-desc">${ch.desc}</p>
      <div class="chapter-card-footer">
        <span class="chapter-card-pages">Pp. ${ch.pages}</span>
        <span class="chapter-card-arrow">→</span>
      </div>
    `;
    card.addEventListener('click', () => navigate('chapter', idx));
    card.addEventListener('keydown', e => e.key === 'Enter' && navigate('chapter', idx));
    grid.appendChild(card);
  });
}

renderIndex();

/* ─────────────────────────────────────────────────────────────────
   7. LECTOR DE CAPÍTULO
   FIX: Eliminado noteId (código muerto).
   FIX: Botones prev/next actualizan estado disabled en bordes.
   ───────────────────────────────────────────────────────────────── */

function loadChapter(idx) {
  idx = Math.max(0, Math.min(idx, CHAPTERS.length - 1));
  State.currentChapter = idx;
  const ch = CHAPTERS[idx];

  // Sidebar de capítulos
  const navList = document.getElementById('chapter-nav-list');
  navList.innerHTML = '';
  CHAPTERS.forEach((c, i) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.textContent = `${c.num}. ${c.title}`;
    btn.className = i === idx ? 'active' : '';
    btn.addEventListener('click', () => loadChapter(i));
    li.appendChild(btn);
    navList.appendChild(li);
  });

  // Contenido principal
  const content = document.getElementById('chapter-content');
  content.innerHTML = `
    <div class="chapter-header">
      <p class="chapter-num">Capítulo ${ch.num} · Pp. ${ch.pages}</p>
      <h2>${ch.title}</h2>
      <p class="chapter-epigraph">${ch.epigraph}<br><small>${ch.epigraph_src}</small></p>
    </div>
    <div class="chapter-body">${ch.body}</div>
  `;

  // Adjuntar manejadores de notas marginales
  content.querySelectorAll('.unlock-note').forEach(btn => {
    btn.addEventListener('click', () => {
      showMarginalNote(btn.dataset.note);
    });
  });

  // Actualizar botón de favorito y estado de navegación
  updateFavBtn();
  updateNavBtns();
  renderFavsList();
}

function updateNavBtns() {
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  if (btnPrev) btnPrev.disabled = State.currentChapter === 0;
  if (btnNext) btnNext.disabled = State.currentChapter === CHAPTERS.length - 1;
}

function updateFavBtn() {
  const btn = document.getElementById('btn-fav');
  if (!btn) return;
  const ch = CHAPTERS[State.currentChapter];
  const isFav = State.favorites.includes(ch.id);
  btn.textContent = isFav ? '★' : '☆';
  btn.title = isFav ? 'Quitar de favoritos' : 'Añadir a favoritos';
  btn.setAttribute('aria-label', isFav ? 'Quitar de favoritos' : 'Añadir a favoritos');
  btn.classList.toggle('favd', isFav);
}

function renderFavsList() {
  const list = document.getElementById('favs-list');
  const empty = document.getElementById('favs-empty');
  if (!list || !empty) return;

  // Limpiar entradas no vacías
  Array.from(list.children).forEach(li => {
    if (li !== empty) li.remove();
  });

  if (State.favorites.length === 0) {
    empty.hidden = false;
  } else {
    empty.hidden = true;
    State.favorites.forEach(favId => {
      const ch = CHAPTERS.find(c => c.id === favId);
      if (!ch) return;
      const li = document.createElement('li');
      li.textContent = `${ch.num}. ${ch.title}`;
      li.title = ch.title;
      const favIdx = CHAPTERS.indexOf(ch);
      li.addEventListener('click', () => loadChapter(favIdx));
      list.appendChild(li);
    });
  }
}

// Toolbar del capítulo
document.getElementById('btn-fav').addEventListener('click', () => {
  const ch = CHAPTERS[State.currentChapter];
  const idx = State.favorites.indexOf(ch.id);
  if (idx >= 0) {
    State.favorites.splice(idx, 1);
    showToast('Eliminado de favoritos');
  } else {
    State.favorites.push(ch.id);
    showToast('Añadido a favoritos');
  }
  State.save();
  updateFavBtn();
  renderFavsList();
});

document.getElementById('btn-copy').addEventListener('click', () => {
  const ch = CHAPTERS[State.currentChapter];
  const text = extractPlainText(ch.body);
  copyToClipboard(`${ch.title}\n\n${text}`);
});

document.getElementById('btn-export').addEventListener('click', () => {
  const ch = CHAPTERS[State.currentChapter];
  const text = extractPlainText(ch.body);
  exportTxt(`${ch.title}\n${'─'.repeat(50)}\n\n${text}\n\n— NECRONOMICON 404 · Contenido ficticio —`, `necro_${ch.id}.txt`);
});

document.getElementById('btn-prev').addEventListener('click', () => {
  if (State.currentChapter > 0) loadChapter(State.currentChapter - 1);
});
document.getElementById('btn-next').addEventListener('click', () => {
  if (State.currentChapter < CHAPTERS.length - 1) loadChapter(State.currentChapter + 1);
});

// Notas marginales
// FIX: class toggle para replay de animación
function showMarginalNote(text) {
  const note = document.getElementById('marginal-note');
  const noteText = document.getElementById('marginal-text');
  noteText.textContent = text;
  // Forzar re-trigger de animación
  note.classList.remove('is-visible');
  note.hidden = false;
  // Forzar reflow para que la animación se reproduzca
  void note.offsetWidth;
  note.classList.add('is-visible');
}

document.querySelector('.marginal-close').addEventListener('click', () => {
  const note = document.getElementById('marginal-note');
  note.hidden = true;
  note.classList.remove('is-visible');
});

/* ─────────────────────────────────────────────────────────────────
   8. GLOSARIO
   ───────────────────────────────────────────────────────────────── */

let currentFilter = 'all';
let currentSearch = '';

function renderGlossary() {
  const grid = document.getElementById('glossary-grid');
  const filtered = GLOSSARY_ENTRIES.filter(entry => {
    const matchType = currentFilter === 'all' || entry.type === currentFilter;
    const term = currentSearch.toLowerCase();
    const matchSearch = !term ||
      entry.name.toLowerCase().includes(term) ||
      entry.short.toLowerCase().includes(term) ||
      (entry.tags || []).some(t => t.toLowerCase().includes(term));
    return matchType && matchSearch;
  });

  grid.innerHTML = '';
  if (filtered.length === 0) {
    grid.innerHTML = '<p style="color:var(--text-dim);font-style:italic;grid-column:1/-1;">Ninguna entrada encontrada.</p>';
    return;
  }

  const typeLabels = { entity: 'Entidad', place: 'Lugar', symbol: 'Símbolo', rite: 'Rito' };
  filtered.forEach(entry => {
    const card = document.createElement('div');
    card.className = 'glossary-card';
    card.setAttribute('role', 'listitem');
    card.setAttribute('tabindex', '0');
    card.innerHTML = `
      <p class="glossary-card-type">${typeLabels[entry.type] || entry.type}</p>
      <h3 class="glossary-card-name">${entry.name}</h3>
      <p class="glossary-card-short">${entry.short}</p>
    `;
    card.addEventListener('click', () => openModal({
      eyebrow: typeLabels[entry.type],
      title: entry.name,
      body: `
        <p>${entry.full}</p>
        ${entry.tags ? `<p style="margin-top:1rem;font-family:var(--font-mono);font-size:0.7rem;color:var(--text-dim);">${entry.tags.map(t => `[${t}]`).join(' ')}</p>` : ''}
      `
    }));
    card.addEventListener('keydown', e => e.key === 'Enter' && card.click());
    grid.appendChild(card);
  });
}

renderGlossary();

// Búsqueda y filtros
document.getElementById('glossary-search').addEventListener('input', e => {
  currentSearch = e.target.value;
  renderGlossary();
});

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    renderGlossary();
  });
});

/* ─────────────────────────────────────────────────────────────────
   9. GENERADORES
   ───────────────────────────────────────────────────────────────── */

function generateName() {
  const p = NAME_PARTS;
  const prefix = p.prefixes[Math.floor(Math.random() * p.prefixes.length)];
  const mid = Math.random() > 0.4 ? p.middles[Math.floor(Math.random() * p.middles.length)] : '';
  const suffix = p.suffixes[Math.floor(Math.random() * p.suffixes.length)];
  const hasEpithet = Math.random() > 0.4;
  const epithet = hasEpithet ? ' ' + p.epithets[Math.floor(Math.random() * p.epithets.length)] : '';
  return `${prefix}${mid}${suffix}${epithet}`;
}

function generateFragment() {
  const template = FRAGMENT_TEMPLATES[Math.floor(Math.random() * FRAGMENT_TEMPLATES.length)];
  const parts = FRAGMENT_PARTS;
  return template.replace(/\{(\w+)\}/g, (_, key) => {
    const arr = parts[key];
    if (!arr) return `[${key}]`;
    return arr[Math.floor(Math.random() * arr.length)];
  });
}

document.querySelector('[data-gen="name"]').addEventListener('click', () => {
  const out = document.getElementById('name-output');
  const name = generateName();
  out.textContent = name;
  // FIX: re-trigger animation by removing and re-adding class
  out.classList.remove('fresh');
  void out.offsetWidth;
  out.classList.add('fresh');
  setTimeout(() => out.classList.remove('fresh'), 600);
});

document.querySelector('[data-gen="fragment"]').addEventListener('click', () => {
  const out = document.getElementById('fragment-output');
  const fragment = generateFragment();
  const result = fragment.charAt(0).toUpperCase() + fragment.slice(1);
  out.textContent = result;
});

document.querySelectorAll('.btn-copy-gen').forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.dataset.target;
    const el = document.getElementById(targetId);
    // FIX: Check if element has real content (not placeholder span)
    const hasContent = el && el.textContent.trim() && !el.querySelector('.output-placeholder');
    if (hasContent) {
      copyToClipboard(el.textContent.trim());
    } else {
      showToast('Genera algo primero');
    }
  });
});

document.querySelectorAll('.btn-export-gen').forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.dataset.target;
    const el = document.getElementById(targetId);
    const hasContent = el && el.textContent.trim() && !el.querySelector('.output-placeholder');
    if (hasContent) {
      exportTxt(el.textContent.trim() + '\n\n— NECRONOMICON 404 · Fragmento generado · Contenido ficticio —', 'necro_fragmento.txt');
    } else {
      showToast('Genera algo primero');
    }
  });
});

/* ─────────────────────────────────────────────────────────────────
   9b. BIBLIOTECA — Conceptos y textos en dominio público
   ───────────────────────────────────────────────────────────────── */

function renderLibrary() {
  const conceptPanel = document.getElementById('lib-concepts');
  const passagePanel = document.getElementById('lib-passages');
  if (conceptPanel.children.length > 0) return;

  // Renderizar conceptos
  COSMIC_CONCEPTS.forEach(c => {
    const card = document.createElement('div');
    card.className = 'concept-card';
    card.setAttribute('tabindex', '0');
    card.innerHTML = `
      <p class="concept-also">${c.also}</p>
      <h3 class="concept-term">${c.term}</h3>
      <p class="concept-def">${c.definition}</p>
    `;
    card.addEventListener('click', () => openModal({
      eyebrow: c.also,
      title: c.term,
      body: `
        <p>${c.definition}</p>
        <h4>Origen</h4>
        <p>${c.origin}</p>
        <h4>Textos clave</h4>
        <p style="font-family:var(--font-mono);font-size:0.75rem;color:var(--text-dim);">${c.keyTexts}</p>
      `
    }));
    card.addEventListener('keydown', e => e.key === 'Enter' && card.click());
    conceptPanel.appendChild(card);
  });

  // Renderizar pasajes reales
  PUBLIC_DOMAIN_PASSAGES.forEach(p => {
    const card = document.createElement('div');
    card.className = 'passage-card';
    card.innerHTML = `
      <p class="passage-source">${p.source}</p>
      <h3 class="passage-title">${p.title}</h3>
      <span class="passage-status">${p.status}</span>
      <p class="passage-text">${p.text}</p>
      <p class="passage-note">${p.note}</p>
      <div class="passage-actions">
        <button class="btn-passage" data-copy="${p.id}">⎘ Copiar</button>
        <button class="btn-passage" data-export="${p.id}">↓ Exportar TXT</button>
      </div>
    `;
    passagePanel.appendChild(card);
  });

  // Eventos de copia y exportación de pasajes
  passagePanel.querySelectorAll('[data-copy]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const id = btn.dataset.copy;
      const passage = PUBLIC_DOMAIN_PASSAGES.find(p => p.id === id);
      if (passage) copyToClipboard(`${passage.title}\n${passage.source}\n\n${passage.text}\n\n[${passage.note}]`);
    });
  });
  passagePanel.querySelectorAll('[data-export]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const id = btn.dataset.export;
      const passage = PUBLIC_DOMAIN_PASSAGES.find(p => p.id === id);
      if (passage) exportTxt(
        `${passage.title}\n${passage.source}\n${passage.status}\n${'─'.repeat(50)}\n\n${passage.text}\n\n${passage.note}\n\n— NECRONOMICON 404 · Referencia histórica real`,
        `necro_ref_${id}.txt`
      );
    });
  });

  // Tabs de la biblioteca
  document.querySelectorAll('.lib-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.lib-tab').forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      const target = tab.dataset.tab;
      conceptPanel.hidden = target !== 'concepts';
      passagePanel.hidden = target !== 'passages';
    });
  });
}

/* ─────────────────────────────────────────────────────────────────
   9c. AUTORES — Maestros del horror cósmico
   ───────────────────────────────────────────────────────────────── */

function renderAuthors() {
  const grid = document.getElementById('authors-grid');
  if (grid.children.length > 0) return;

  COSMIC_AUTHORS.forEach(author => {
    const card = document.createElement('div');
    card.className = 'author-card';
    card.setAttribute('role', 'listitem');
    card.setAttribute('tabindex', '0');
    card.innerHTML = `
      <div>
        <h3 class="author-name">${author.name}</h3>
        <p class="author-dates">${author.dates}</p>
        <p class="author-nationality">${author.nationality}</p>
        <p class="author-bio-short">${author.bio}</p>
        <p class="author-works-count">${author.keyWorks.length} obras clave documentadas</p>
      </div>
      ${author.publicDomain ? '<span class="author-pd-badge">DOMINIO PÚBLICO</span>' : ''}
    `;
    card.addEventListener('click', () => openModal({
      eyebrow: `${author.nationality} · ${author.dates}`,
      title: author.name,
      body: `
        ${author.publicDomain ? '<p style="font-family:var(--font-mono);font-size:0.65rem;border:1px solid var(--gold-dim);color:var(--gold);padding:4px 10px;display:inline-block;margin-bottom:1rem;">✓ OBRA EN DOMINIO PÚBLICO</p>' : ''}
        <p>${author.bio}</p>
        <h4>Obras clave</h4>
        <ul class="author-work-list">
          ${author.keyWorks.map(w => `
            <li>
              <span class="work-year">${w.year}</span>
              <span class="work-title">${w.title}</span>
              <span class="work-note">${w.notes}</span>
            </li>
          `).join('')}
        </ul>
        <h4>Temas recurrentes</h4>
        <div class="author-themes">
          ${author.themes.map(t => `<span class="theme-tag">${t}</span>`).join('')}
        </div>
        <h4>Influencia</h4>
        <p>${author.influence}</p>
        <blockquote class="author-quote">${author.quote}</blockquote>
      `
    }));
    card.addEventListener('keydown', e => e.key === 'Enter' && card.click());
    grid.appendChild(card);
  });
}

/* ─────────────────────────────────────────────────────────────────
   9d. CRONOLOGÍA
   ───────────────────────────────────────────────────────────────── */

function renderTimeline() {
  const container = document.getElementById('timeline-container');
  if (container.children.length > 0) return;

  COSMIC_TIMELINE.forEach(item => {
    const el = document.createElement('div');
    el.className = 'timeline-item';
    el.setAttribute('role', 'listitem');
    el.innerHTML = `
      <span class="timeline-year">${item.year}</span>
      <p class="timeline-text">${item.event}</p>
    `;
    container.appendChild(el);
  });
}

/* ─────────────────────────────────────────────────────────────────
   10. BESTIARIO
   ───────────────────────────────────────────────────────────────── */

function renderBestiary() {
  const grid = document.getElementById('bestiary-grid');
  if (grid.children.length > 0) return;

  BESTIARY.forEach(creature => {
    const entry = document.createElement('div');
    entry.className = 'bestiary-entry';
    entry.setAttribute('role', 'listitem');
    entry.setAttribute('tabindex', '0');

    const statsHtml = Object.entries(creature.stats).map(([k, v]) => `
      <div class="bestiary-stat"><span>${k}</span><strong>${v}</strong></div>
    `).join('');

    entry.innerHTML = `
      <div class="bestiary-sigil" aria-hidden="true">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path d="${creature.svgPath}" fill="none" stroke="currentColor" stroke-width="2"/>
          <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.3"/>
        </svg>
      </div>
      <div class="bestiary-info">
        <p class="bestiary-class">${creature.class}</p>
        <h3 class="bestiary-name">${creature.name}</h3>
        <p class="bestiary-aka">${creature.aka}</p>
        <p class="bestiary-desc">${creature.desc}</p>
        <div class="bestiary-stats">${statsHtml}</div>
      </div>
    `;
    entry.addEventListener('click', () => openModal({
      eyebrow: creature.class,
      title: creature.name,
      body: `
        <p style="font-style:italic;color:var(--text-dim);margin-bottom:1rem;">${creature.aka}</p>
        <p>${creature.desc}</p>
        <h4>Datos de registro</h4>
        ${Object.entries(creature.stats).map(([k, v]) => `
          <div class="modal-stat-row">
            <span class="modal-stat-label">${k}</span>
            <span class="modal-stat-value">${v}</span>
          </div>
        `).join('')}
      `
    }));
    entry.addEventListener('keydown', e => e.key === 'Enter' && entry.click());
    grid.appendChild(entry);
  });
}

/* ─────────────────────────────────────────────────────────────────
   11. ARCHIVO
   ───────────────────────────────────────────────────────────────── */

function renderArchiveDocs() {
  const grid = document.getElementById('archive-files-grid');
  if (grid.children.length > 0) return;

  ARCHIVE_DOCS.forEach(doc => {
    const file = document.createElement('div');
    file.className = 'archive-file';
    file.setAttribute('tabindex', '0');
    file.innerHTML = `
      <p class="archive-file-name">${doc.name}</p>
      <p class="archive-file-meta">${doc.meta}</p>
      <p class="archive-file-desc">${doc.desc}</p>
      ${doc.corrupted ? '<p class="archive-corrupted">⚠ Datos corrompidos</p>' : ''}
    `;
    file.addEventListener('click', () => openModal({
      eyebrow: doc.corrupted ? 'ARCHIVO CORROMPIDO' : 'ARCHIVO LEGIBLE',
      title: doc.name,
      body: `<p style="font-family:var(--font-mono);font-size:0.7rem;color:var(--text-dim);margin-bottom:1rem;">${doc.meta}</p><p>${doc.desc}</p>${doc.corrupted ? '<p style="color:var(--accent);font-family:var(--font-mono);font-size:0.75rem;margin-top:1rem;">ERROR DE LECTURA — Los datos no pueden ser recuperados completamente.</p>' : ''}`
    }));
    file.addEventListener('keydown', e => e.key === 'Enter' && file.click());
    grid.appendChild(file);
  });
}

// Búsqueda global
const archiveSearch = document.getElementById('archive-search');
const archiveResults = document.getElementById('archive-results');

archiveSearch.addEventListener('input', e => {
  const term = e.target.value.trim().toLowerCase();
  if (!term || term.length < 2) {
    archiveResults.innerHTML = '<div class="archive-idle"><p>Introduce un término para buscar en todos los registros del grimorio.</p><p class="archive-idle-sub">El sistema escanea en tiempo real. Los resultados pueden ser perturbadores.</p></div>';
    return;
  }
  globalSearch(term);
});

// FIX HIGH-3: XSS – uso de textContent + createElement en vez de innerHTML con datos de usuario
function globalSearch(term) {
  const results = [];

  // Buscar en capítulos
  CHAPTERS.forEach((ch, idx) => {
    const bodyText = stripHtml(ch.body);
    const fields = [ch.title, ch.desc, bodyText, ch.epigraph];
    fields.forEach(field => {
      if (field.toLowerCase().includes(term)) {
        results.push({
          origin: `Cap. ${ch.num} — ${ch.title}`,
          snippet: getSnippet(field, term, 120),
          action: () => navigate('chapter', idx)
        });
      }
    });
  });

  // Buscar en glosario
  GLOSSARY_ENTRIES.forEach(entry => {
    const fields = [entry.name, entry.short, entry.full];
    fields.forEach(field => {
      if (field.toLowerCase().includes(term)) {
        results.push({
          origin: `Glosario — ${entry.name}`,
          snippet: getSnippet(field, term, 120),
          action: () => navigate('glossary')
        });
      }
    });
  });

  // Buscar en bestiario
  BESTIARY.forEach(b => {
    const fields = [b.name, b.desc, b.aka];
    fields.forEach(field => {
      if (field.toLowerCase().includes(term)) {
        results.push({
          origin: `Bestiario — ${b.name}`,
          snippet: getSnippet(field, term, 120),
          action: () => navigate('bestiary')
        });
      }
    });
  });

  // Deduplicar por origen+snippet
  const seen = new Set();
  const unique = results.filter(r => {
    const key = r.origin + r.snippet.substring(0, 40);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  archiveResults.innerHTML = '';

  if (unique.length === 0) {
    archiveResults.innerHTML = '<div class="archive-idle"><p>Sin resultados para ese término.</p><p class="archive-idle-sub">El grimorio no ha registrado esa palabra. O prefiere no hacerlo.</p></div>';
    return;
  }

  const re = new RegExp(`(${escapeRe(term)})`, 'gi');

  unique.slice(0, 20).forEach(result => {
    const el = document.createElement('div');
    el.className = 'search-result';
    el.setAttribute('tabindex', '0');

    // FIX HIGH-3: Construir snippet con highlight de forma segura
    const originP = document.createElement('p');
    originP.className = 'search-result-origin';
    originP.textContent = result.origin;

    const snippetP = document.createElement('p');
    snippetP.className = 'search-result-text';
    // Usar innerHTML sólo sobre snippet que viene de nuestros propios datos constantes,
    // con el término de búsqueda del usuario escapado vía escapeRe antes del RegExp.
    // El snippet es texto plano extraído de nuestros datos. El único riesgo es el término
    // del usuario; lo mitigamos escapando el RegExp correctamente.
    snippetP.innerHTML = `…${result.snippet.replace(re, '<mark>$1</mark>')}…`;

    el.appendChild(originP);
    el.appendChild(snippetP);
    el.addEventListener('click', result.action);
    el.addEventListener('keydown', e => e.key === 'Enter' && result.action());
    archiveResults.appendChild(el);
  });

  if (unique.length > 20) {
    const note = document.createElement('p');
    note.style.cssText = 'color:var(--text-dim);font-size:0.8rem;font-style:italic;margin-top:0.5rem;';
    note.textContent = `Mostrando 20 de ${unique.length} resultados. Refina la búsqueda.`;
    archiveResults.appendChild(note);
  }
}

/* ─────────────────────────────────────────────────────────────────
   12. MODAL
   ───────────────────────────────────────────────────────────────── */

function openModal({ eyebrow, title, body }) {
  document.getElementById('modal-eyebrow').textContent = eyebrow || '';
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-body').innerHTML = body;
  const overlay = document.getElementById('modal-overlay');
  overlay.removeAttribute('hidden');
  document.getElementById('modal-close').focus();
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').hidden = true;
  document.body.style.overflow = '';
}

document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal-overlay').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

/* ─────────────────────────────────────────────────────────────────
   13. TOAST
   ───────────────────────────────────────────────────────────────── */

let toastTimer;
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.removeAttribute('hidden');
  toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('visible');
    setTimeout(() => { toast.hidden = true; }, 300);
  }, 2200);
}

/* ─────────────────────────────────────────────────────────────────
   14. UTILIDADES
   FIX MEDIUM-8: URL.revokeObjectURL diferido para garantizar descarga.
   FIX MEDIUM-9: clipboard fallback mejorado.
   ───────────────────────────────────────────────────────────────── */

function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text)
      .then(() => showToast('Copiado al portapapeles'))
      .catch(() => copyFallback(text));
  } else {
    copyFallback(text);
  }
}

function copyFallback(text) {
  try {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.cssText = 'position:fixed;top:0;left:0;opacity:0;pointer-events:none;';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    const success = document.execCommand('copy');
    document.body.removeChild(ta);
    showToast(success ? 'Copiado al portapapeles' : 'No se pudo copiar');
  } catch {
    showToast('No se pudo copiar en este navegador');
  }
}

function exportTxt(content, filename) {
  try {
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    // FIX MEDIUM-8: Revocar después de tiempo suficiente para que el navegador inicie la descarga
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    showToast('Exportado como TXT');
  } catch {
    showToast('Error al exportar el archivo');
  }
}

function stripHtml(html) {
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.textContent || div.innerText || '';
}

function extractPlainText(html) {
  return stripHtml(html).replace(/\s+/g, ' ').trim();
}

function getSnippet(text, term, maxLen) {
  const lower = text.toLowerCase();
  const idx = lower.indexOf(term.toLowerCase());
  if (idx < 0) return text.substring(0, maxLen);
  const start = Math.max(0, idx - 40);
  const end = Math.min(text.length, start + maxLen);
  return text.substring(start, end);
}

function escapeRe(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/* ─────────────────────────────────────────────────────────────────
   15. CANVAS DE RUIDO ANALÓGICO
   FIX MEDIUM-6: Cancelar RAF anterior al redimensionar para evitar leak.
   ───────────────────────────────────────────────────────────────── */

(function initNoise() {
  const canvas = document.getElementById('noise-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let frameId = null;
  let rafId = null;
  let stopped = false;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  function drawNoise() {
    if (stopped) return;
    const w = canvas.width, h = canvas.height;
    const imageData = ctx.createImageData(w, h);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      const v = Math.random() * 255 | 0;
      data[i] = data[i + 1] = data[i + 2] = v;
      data[i + 3] = 18;
    }
    ctx.putImageData(imageData, 0, 0);
    // FIX: guardar el id para poder cancelar
    rafId = requestAnimationFrame(() => {
      frameId = setTimeout(drawNoise, 80);
    });
  }

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    drawNoise();
  }

  // Limpiar si la página se recarga / oculta (visibilitychange)
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopped = true;
      if (rafId) cancelAnimationFrame(rafId);
      if (frameId) clearTimeout(frameId);
    } else {
      stopped = false;
      drawNoise();
    }
  });
})();

/* ─────────────────────────────────────────────────────────────────
   16. EASTER EGGS
   ───────────────────────────────────────────────────────────────── */

// Konami code
const konamiSeq = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
let konamiIdx = 0;
document.addEventListener('keydown', e => {
  if (e.key === konamiSeq[konamiIdx]) {
    konamiIdx++;
    if (konamiIdx === konamiSeq.length) {
      konamiIdx = 0;
      triggerKonami();
    }
  } else {
    konamiIdx = 0;
  }
});

function triggerKonami() {
  State.eggCount++;
  State.save();
  openModal({
    eyebrow: 'ARCHIVO DESBLOQUEADO — NIVEL SIGMA',
    title: 'Fragmento Cero: Lo que Precede al Libro',
    body: `
      <p><em>Este fragmento no estaba destinado a ser encontrado. El hecho de que lo hayas encontrado indica que el grimorio lo ha permitido, lo que a su vez indica que el grimorio tiene sus propias razones para permitirlo.</em></p>
      <p>Lo que precede al Necronomicon 404 no es un texto anterior. Es una decisión. Alguien, en algún momento, decidió que ciertas cosas debían ser escritas aunque no pudieran ser leídas sin consecuencias. Ese alguien no firmó. Tampoco podría haberlo hecho: su nombre pertenece al Cuarto Estrato.</p>
      <p>Este es el fragmento ${State.eggCount} que has desbloqueado. El grimorio lo ha registrado. El grimorio registra todo.</p>
      <p style="font-family:var(--font-mono);font-size:0.7rem;color:var(--accent);margin-top:1.5rem;">FRAGMENTO 0-SIGMA · ACCESO: ${new Date().toISOString()} · CONSULTA REGISTRADA</p>
    `
  });
}

// Clic en el sigilo de portada (5 veces)
let sigilClicks = 0;
document.querySelector('.cover-sigil').addEventListener('click', () => {
  sigilClicks++;
  if (sigilClicks >= 5) {
    sigilClicks = 0;
    showToast('✦ El sigilo te reconoce ✦');
    setTimeout(() => {
      openModal({
        eyebrow: 'NOTA MARGINAL OCULTA',
        title: 'Observación del Archivista',
        body: `<p>Has tocado el sigilo cinco veces. El número cinco no es arbitrario en el sistema de la Orden: representa el umbral entre lo que puede contarse y lo que solo puede describirse.</p><p>La Orden anota: <em>«El lector que toca el sigilo con persistencia está buscando algo que no sabe que busca. Esto es, paradójicamente, la condición óptima para encontrarlo.»</em></p>`
      });
    }, 500);
  }
});

// Triple clic rápido en el logo de navegación
let logoClicks = 0;
let logoTimer;
document.querySelector('.nav-logo').addEventListener('click', () => {
  logoClicks++;
  clearTimeout(logoTimer);
  logoTimer = setTimeout(() => { logoClicks = 0; }, 600);
  if (logoClicks >= 3) {
    logoClicks = 0;
    showToast('El grimorio sabe que lo miras');
  }
});

/* ─────────────────────────────────────────────────────────────────
   17. SERVICE WORKER
   ───────────────────────────────────────────────────────────────── */

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {
      // Funciona sin SW — offline no disponible
    });
  });
}

/* ─────────────────────────────────────────────────────────────────
   18. MANEJO GLOBAL DE ERRORES (HARDENING)
   FIX LOW-12: Añadir captura global para evitar pantallas blancas.
   ───────────────────────────────────────────────────────────────── */

window.onerror = function(msg, src, line, col, err) {
  // Silenciar errores de extensiones de navegador
  if (src && src.includes('extension')) return false;
  console.error('[NECRO ERROR]', msg, src, line, col);
  return false;
};

window.addEventListener('unhandledrejection', e => {
  console.error('[NECRO PROMISE]', e.reason);
  e.preventDefault();
});

/* ─────────────────────────────────────────────────────────────────
   19. INICIALIZACIÓN
   ───────────────────────────────────────────────────────────────── */

// La portada es la página inicial
document.querySelectorAll('.page').forEach(p => {
  if (p.id !== 'page-cover') {
    p.hidden = true;
    p.classList.remove('active');
  }
});
document.getElementById('page-cover').classList.add('active');
document.getElementById('main-nav').hidden = true;

// Inicializar estado de botones de capítulo
updateNavBtns();

// Restaurar favoritos al cargar
renderFavsList();

console.log('%cNECRONOMICON 404', 'color:#8b1a1a;font-size:1.4rem;font-family:serif;font-weight:bold;');
console.log('%cTodo el contenido es enteramente ficticio.', 'color:#7a6a52;font-size:0.85rem;');
console.log('%cBusca el código Konami si te atreves.', 'color:#c4a96b;font-size:0.75rem;');
