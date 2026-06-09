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
  // ── Entidades ficticias originales ──────────────────────────────
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
  // ── Lugares ficticios originales ─────────────────────────────────
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
  // ── Símbolos ficticios originales ────────────────────────────────
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
  // ── Ritos ficticios originales ───────────────────────────────────
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
    full: 'No padecía ceguera clínica sino selectiva: veía todo excepto lo directamente frente a él. Esto le permitía copiar sin leer y tomar dictado sin fuente audible. Su obra se divide en fragmentos que él fechó y fragmentos que negó haber escrito, aunque todos están en su caligrafía. Los análisis grafológicos sobre los fragmentados negados produjeron informes contradictorios. Dos peritos solicitaron ser relevados sin explicación. Un tercero desapareció.',
    tags: ['Copista', 'escritura', 'autoría']
  },
  {
    id: 'g12', type: 'place', name: 'La Orden Sumergida',
    short: 'Institución archivística de origen indeterminado. Custodios del Necronomicon 404.',
    full: 'Institución de origen y número de miembros desconocidos. Su propósito declarado es el archivo y preservación de documentos que otras instituciones consideran inarchivables. No tienen sede fija: los investigadores que han intentado localizarlos describen el proceso como "encontrar a alguien que ya sabía que los estabas buscando". Su relación con el Necronomicon 404 no es de autoría: se describen a sí mismos como custodios de un texto que se escribió solo.',
    tags: ['institución', 'archivo', 'custodia']
  },
  // ── Entidades del Mito (dominio público, ficticias de Lovecraft) ──
  {
    id: 'g13', type: 'mythos', name: 'Cthulhu',
    short: 'Gran Antiguo que yace muerto y soñando en R\'lyeh. Su influencia mental alcanza a quienes tienen disposición receptiva.',
    full: 'Creado por H.P. Lovecraft, primera aparición en La llamada de Cthulhu (1928, dominio público). Gran Antiguo que duerme en la ciudad sumergida de R\'lyeh en el Pacífico Sur. No está muerto sino en un estado intermedio: "No está muerto lo que puede yacer eternamente, y con el paso de los eones extraños hasta la muerte puede morir." Alcanza a ciertos soñadores mediante ondas psíquicas. Su culto existe en todas las culturas marítimas bajo distintos nombres.',
    tags: ['Mito de Cthulhu', 'Grandes Antiguos', 'dominio público', 'Lovecraft']
  },
  {
    id: 'g14', type: 'mythos', name: 'Azathoth',
    short: 'El Caos ciego e idiota en el centro del universo. El dios más alto y el más vacío.',
    full: 'Creado por H.P. Lovecraft (dominio público). El "Caos nuclear" o "Caos ciego e idiota" que ocupa el centro del universo último, rodeado por los Dioses Exteriores que danzan a los sonidos de una flauta. Azathoth no tiene conciencia, voluntad ni propósito. Su existencia es la prueba del cosmicismo lovecraftiano llevado al extremo: el principio de todo es un idiota ciego. Aparece en varios textos del Mito como la entidad más poderosa pero absolutamente inerte.',
    tags: ['Mito de Cthulhu', 'Dioses Exteriores', 'dominio público', 'Lovecraft']
  },
  {
    id: 'g15', type: 'mythos', name: 'Nyarlathotep',
    short: 'El Mensajero Reptante. El único Gran Antiguo con personalidad, voluntad y gusto por la interacción humana.',
    full: 'Creado por H.P. Lovecraft (dominio público). A diferencia de la mayoría de entidades del Mito, Nyarlathotep actúa deliberadamente y parece disfrutar del contacto con los humanos, lo que lo hace más aterrador que los seres indiferentes. Tiene mil formas: el hombre oscuro, el faraón negro, el hombre de negro. Es el alma y mensajero de los Dioses Exteriores. Lovecraft lo describió en un poema en prosa de 1920 (dominio público) como un hombre alto y siniestro que recorría el mundo mostrando maravillas que terminaban en locura.',
    tags: ['Mito de Cthulhu', 'Dioses Exteriores', 'dominio público', 'Lovecraft']
  },
  {
    id: 'g16', type: 'mythos', name: 'Yog-Sothoth',
    short: 'La Clave y la Puerta. Omnisciente, coexiste con todo el tiempo y el espacio a la vez.',
    full: 'Creado por H.P. Lovecraft (dominio público). Yog-Sothoth lo sabe todo y lo ve todo: coexiste con todos los momentos del tiempo y todos los puntos del espacio simultáneamente. Es "la Llave y la Puerta": a través de él puede accederse a cualquier lugar y tiempo. A pesar de su omnisciencia, puede ser convocado mediante los ritos correctos —lo que en el Mito constituye una de las mayores contradicciones: ¿por qué algo omnisciente necesita ser convocado?',
    tags: ['Mito de Cthulhu', 'Dioses Exteriores', 'dominio público', 'Lovecraft']
  },
  {
    id: 'g17', type: 'mythos', name: 'Shub-Niggurath',
    short: 'La Cabra Negra de los Bosques con su Millar de Retoños. Fertilidad como horror.',
    full: 'Creado por H.P. Lovecraft (dominio público). Entidad de fertilidad cósmica cuya adoración invierte el concepto: la fecundidad no como vida sino como proliferación imparable de lo aberrante. Sus Retoños son los Dark Young, seres de masa negra y tentáculos que habitan en bosques donde se celebran sus ritos. El nombre completo —"Shub-Niggurath, la Cabra Negra de los Bosques con su Millar de Retoños"— aparece frecuentemente en conjuros y rituales del Mito.',
    tags: ['Mito de Cthulhu', 'Grandes Antiguos', 'dominio público', 'Lovecraft']
  },
  {
    id: 'g18', type: 'mythos', name: 'R\'lyeh',
    short: 'Ciudad sumergida en el Pacífico Sur donde Cthulhu aguarda. Geometría no euclidiana que desequilibra la percepción.',
    full: 'Creada por H.P. Lovecraft en La llamada de Cthulhu (1928, dominio público). Ciudad de arquitectura imposible construida según geometría no euclidiana: los ángulos son incorrectos, las perspectivas contradicen el espacio tridimensional. Cuando emerge brevemente del océano, quienes la visitan pierden la orientación espacial y la cordura. Las coordenadas que Lovecraft le asignó (47°9\'S, 126°43\'W) están en el océano Pacífico Sur. R\'lyeh es el topónimo más reconocible del Mito.',
    tags: ['Mito de Cthulhu', 'lugares', 'dominio público', 'Lovecraft']
  },
  {
    id: 'g19', type: 'mythos', name: 'El Necronomicon (ficticio)',
    short: 'Grimorio árabe ficticio inventado por Lovecraft. No existe ningún original real anterior a 1927.',
    full: 'Creado por H.P. Lovecraft. La historia del Necronomicon (1927, dominio público) establece que fue escrito hacia el año 730 d.C. por Abdul Alhazred, "el árabe demente" de Saná. El título árabe original es Al Azif, el sonido que producen los insectos nocturnos. Lovecraft construyó una historia editorial completa: traducción griega, edición latina del siglo XVI, ejemplares en la Biblioteca Miskatonic. No existe ningún Necronomicon real de origen pre-lovecraftiano. Todas las ediciones "reales" son obras modernas basadas en el texto ficticio.',
    tags: ['Mito de Cthulhu', 'textos prohibidos', 'dominio público', 'Lovecraft']
  },
  {
    id: 'g20', type: 'mythos', name: 'Arkham',
    short: 'Ciudad ficticia de Massachusetts. Sede de la Universidad Miskatonic y epicentro del horror lovecraftiano en Nueva Inglaterra.',
    full: 'Creada por H.P. Lovecraft (dominio público). Ciudad ficticia basada vagamente en Salem, Massachusetts. Alberga la Universidad Miskatonic, cuya biblioteca conserva uno de los cuatro ejemplares del Necronomicon conocidos. Arkham es la base de operaciones de numerosos protagonistas lovecraftianos. El nombre fue adoptado por DC Comics para el manicomio Arkham Asylum de Batman (1974), y por la editorial Arkham House (1939) fundada para preservar la obra de Lovecraft.',
    tags: ['Mito de Cthulhu', 'lugares', 'dominio público', 'Lovecraft']
  },
  {
    id: 'g21', type: 'mythos', name: 'Innsmouth',
    short: 'Puerto decadente de Massachusetts con una población que oculta sangre marina. Origen del culto a Dagon.',
    full: 'Creado por H.P. Lovecraft en La sombra sobre Innsmouth (1936, dominio público). Puerto pesquero en declive cuya población presenta rasgos físicos progresivamente no humanos: los ojos sin párpados, la piel escamosa, el cuello que desaparece. Los habitantes descienden de uniones entre humanos y los Deep Ones, los Profundos, seres marinos que viven en la ciudad sumergida de Y\'ha-nthlei frente a la costa. El "aspecto de Innsmouth" es el término para la degeneración física visible.',
    tags: ['Mito de Cthulhu', 'lugares', 'dominio público', 'Lovecraft']
  },
  {
    id: 'g22', type: 'mythos', name: 'El Rey de Amarillo',
    short: 'Obra de teatro ficticia de dos actos. Quien lee el segundo acto no puede olvidarlo ni recuperarse de ello.',
    full: 'Creado por Robert W. Chambers en El Rey de Amarillo (1895, dominio público). Obra de teatro ficticia de contenido desconocido cuya lectura produce efectos psíquicos permanentes. El primer acto es convencional; el segundo es el vector del daño. Chambers nunca describe el contenido de la obra, solo sus efectos. El Rey de Amarillo es también la entidad que aparece en Carcosa, descrita vagamente como un ser con harapos amarillos y una máscara que puede no ser una máscara. True Detective (2014) popularizó la referencia masivamente.',
    tags: ['Rey de Amarillo', 'Chambers', 'Carcosa', 'dominio público']
  },
  {
    id: 'g23', type: 'mythos', name: 'Carcosa',
    short: 'Ciudad imposible entre Aldebarán y las Híades. Creada por Bierce, codificada por Chambers, popularizada por True Detective.',
    full: 'Topónimo creado por Ambrose Bierce en Un habitante de Carcosa (1886, dominio público). Robert W. Chambers lo adoptó en El Rey de Amarillo (1895) convirtiéndolo en ciudad de Aldebarán, bajo las estrellas de las Híades. En la obra de Chambers, Carcosa es el lugar donde gobierna el Rey de Amarillo y donde se encuentra el Lago de Hali. True Detective (temporada 1, 2014) convirtió Carcosa en un lugar real dentro de su ficción, llevando el nombre al conocimiento masivo. No existe ninguna ciudad real con ese nombre.',
    tags: ['Bierce', 'Chambers', 'Rey de Amarillo', 'dominio público']
  },
  {
    id: 'g24', type: 'symbol', name: 'El Signo Amarillo',
    short: 'Símbolo ficticio de Chambers. Quien lo ve queda vinculado al Rey de Amarillo. Forma nunca descrita explícitamente.',
    full: 'Creado por Robert W. Chambers en El Rey de Amarillo (1895, dominio público). El Signo Amarillo es un símbolo cuya descripción exacta Chambers nunca proporciona: solo sus efectos. Quien lo reconoce queda conectado al Rey de Amarillo y tarde o temprano experimenta su influencia. Ha generado multitud de interpretaciones gráficas en la cultura popular del horror. En el sistema del Mito lovecraftiano posterior fue adoptado como símbolo de Hastur, otra entidad del Mito.',
    tags: ['Chambers', 'Rey de Amarillo', 'símbolo', 'dominio público']
  },
  {
    id: 'g25', type: 'entity', name: 'Los Deep Ones (Los Profundos)',
    short: 'Seres marinos humanoides que viven en ciudades submarinas. Se cruzan con humanos produciendo descendencia con doble naturaleza.',
    full: 'Creados por H.P. Lovecraft en La sombra sobre Innsmouth (1936, dominio público). Los Deep Ones son inmortales a menos que sean destruidos violentamente. Viven en la ciudad de Y\'ha-nthlei bajo el Atlántico Norte y en Rlyeh. Adoran a Dagon y a Madre Hidra, antiguas deidades de los Profundos. Su característica más perturbadora es la reproducción con humanos: la descendencia tiene un período de vida humana aparentemente normal, después del cual experimenta la Transformación y desciende al mar para vivir eternamente entre los suyos.',
    tags: ['Mito de Cthulhu', 'criaturas', 'dominio público', 'Lovecraft']
  },
  {
    id: 'g26', type: 'entity', name: 'El Shoggoth',
    short: 'Masa protoplasmática creada por los Antiguos como herramienta. Se rebeló. La memoria de haberlos creado aterra incluso a sus creadores.',
    full: 'Creado por H.P. Lovecraft en En las montañas de la locura (1931, dominio público). Los Shoggoths son masas de protoplasma negro de varios metros que pueden adoptar cualquier forma. Fueron creados por los Primigenios como esclavos hace cientos de millones de años. Su rebeldía obligó a los Primigenios a reducirlos a un estado de semi-consciencia. En estado natural son amorales, hambri-entos y capaces de reproducir cualquier sonido, incluyendo el lenguaje humano. Sus vocalizaciones —"Tekeli-li"— son lo último que escuchan muchos exploradores.',
    tags: ['Mito de Cthulhu', 'criaturas', 'dominio público', 'Lovecraft']
  },
  {
    id: 'g27', type: 'place', name: 'La Universidad Miskatonic',
    short: 'Universidad ficticia de Arkham. Su biblioteca conserva el Necronomicon y es punto de partida de múltiples expediciones fatales.',
    full: 'Creada por H.P. Lovecraft (dominio público). La Miskatonic University de Arkham, Massachusetts, tiene una biblioteca que custodia textos prohibidos incluyendo uno de los cuatro ejemplares conocidos del Necronomicon, los Manuscritos Pnakóticos y el Libro de Eibon. Sus departamentos de geología, biología marina y física han organizado expediciones que terminaron catastrófi-camente (la Expedición Miskatonic a la Antártida, 1930-31). Ha aparecido en decenas de obras del Mito y en cultura popular. Representa la institución académica como vector de descubrimientos que no deberían hacerse.',
    tags: ['Mito de Cthulhu', 'lugares', 'Arkham', 'dominio público']
  },
  {
    id: 'g28', type: 'entity', name: 'Los Mi-Go (Los Hongos de Yuggoth)',
    short: 'Entidades crustáceas de otro mundo capaces de extraer cerebros y preservarlos en cilindros metálicos.',
    full: 'Creados por H.P. Lovecraft en El susurrador en la oscuridad (1931, dominio público). Los Mi-Go son seres de un planeta exterior (Yuggoth, identificable con Plutón) que llevan millones de años visitando la Tierra para extraer minerales. Son capaces de extraer cerebros humanos con vida y preservarlos en cilindros metálicos conectables a dispositivos de visión y comunicación. Los cerebros preservados son conscientes pero incapaces de dormir, lo que en perspectiva indefinida constituye una forma de horror peculiar.',
    tags: ['Mito de Cthulhu', 'criaturas', 'dominio público', 'Lovecraft']
  },
  {
    id: 'g29', type: 'rite', name: 'La Invocación del Faro Interior',
    short: 'Rito de la Orden para localizar umbrales activos. Requiere oscuridad completa y un objeto que haya cambiado de dueño tres veces por muerte.',
    full: 'Protocolo de diagnóstico espacial de la Orden Sumergida. El practicante debe encontrarse en oscuridad completa sosteniendo un objeto que haya pasado de mano en mano al menos tres veces por causa de muerte de su poseedor. El objeto actúa como receptor. Si hay un umbral activo en el radio de cincuenta metros, el objeto cambia de temperatura: frío para umbrales inactivos, caliente para umbrales con tráfico reciente. La Orden advierte que el cambio de temperatura no siempre es detectable por el practicante mismo; a veces solo lo notan quienes están fuera de la habitación.',
    tags: ['Orden Sumergida', 'rito', 'diagnóstico', 'umbral']
  },
  {
    id: 'g30', type: 'symbol', name: 'El Sigilo del Tercer Párpado',
    short: 'Símbolo que aparece grabado en el interior de los párpados de quienes han visto a Los Profundos despiertos.',
    full: 'Documentado por la Orden Sumergida en trece casos. El Sigilo del Tercer Párpado no puede verse en un espejo porque aparece en la cara interior del párpado: solo puede ser fotografiado con los ojos entreabiertos bajo iluminación específica, o descrito por el propio portador que lo percibe como una imagen persistente al cerrar los ojos. Ninguno de los trece portadores documentados ha podido explicar cuándo apareció. Todos describieron haberlo notado después de un período de sueños especialmente vividos ambientados en entornos marinos.',
    tags: ['símbolo', 'Deep Ones', 'párpado', 'Orden Sumergida']
  }
];

const BESTIARY = [
  // ── Criaturas ficticias originales ───────────────────────────────
  {
    id: 'b1', class: 'Clase I — Umbral',
    name: 'El Visitante de las Fechas Incorrectas',
    aka: 'También: El Anacronismo, La Visita',
    desc: 'Se presenta en entornos domésticos durante fechas que el calendario señala como incorrectas: el día que no existe en años no bisiestos, el último día de un mes que tiene un día menos de lo habitual. Su aspecto es el de una persona completamente normal excepto por el detalle que cada testigo recuerda de manera diferente: la ropa del color equivocado, los zapatos en los pies equivocados, la sombra proyectada en la dirección incorrecta para la fuente de luz. No habla. Espera.',
    stats: { 'Avistamientos': '34', 'Interacciones': '9', 'Resolución': 'Espontánea', 'Amenaza': 'No determinada' },
    svgPath: 'M100,20 L180,80 L160,170 H40 L20,80 Z'
  },
  {
    id: 'b2', class: 'Clase II — Archivístico',
    name: 'Los Coleccionistas de Instantes',
    aka: 'También: Las Manos Vacías, Los que Guardan',
    desc: 'Se desplazan en grupos de número impar en espacios donde se ha producido pérdida de información: archivos incendiados, discos borrados, conversaciones no grabadas. No son destructivos: son conservacionistas de lo que no puede conservarse. Toman algo de cada lugar que visitan. Los testigos no saben qué han perdido hasta semanas después, cuando intentan recordar algo del período del encuentro.',
    stats: { 'Avistamientos': '67', 'Tamaño de grupo': 'Impar siempre', 'Sustracción': 'Memorias', 'Amenaza': 'Archivística' },
    svgPath: 'M100,10 L130,90 L200,90 L145,145 L165,190 L100,155 L35,190 L55,145 L0,90 L70,90 Z'
  },
  {
    id: 'b3', class: 'Clase III — Geométrico',
    name: 'El Ángulo que No Debería Estar',
    aka: 'También: La Esquina Extra, El Noventa y Uno',
    desc: 'No es una criatura biológica sino una anomalía geométrica con comportamiento volitivo. Se manifiesta como un ángulo de noventa y un grados donde debería haber noventa. La diferencia de un grado produce en los observadores sensibles la sensación de "la arquitectura recordando algo que la física prohíbe". Se desplaza por las esquinas de los edificios afectados siguiendo patrones sin progresión matemática conocida.',
    stats: { 'Ángulo': '91°', 'Mobilidad': 'Sí', 'Percepción': 'Sensibles únicamente', 'Amenaza': 'Arquitectónica' },
    svgPath: 'M10,10 L190,10 L190,190 L10,190 Z M50,50 L150,50 L150,150 L50,150 Z'
  },
  {
    id: 'b4', class: 'Clase IV — Fonético',
    name: 'El Eco Previo',
    aka: 'También: La Respuesta Adelantada, El Antisilencio',
    desc: 'Fenómeno auditivo con características que sugieren agencia. Se presenta como el eco de una palabra que el hablante aún no ha pronunciado. El eco es audible para otros en el espacio pero no para el hablante. Las palabras anticipadas, ordenadas cronológicamente, forman frases coherentes en la Lengua del Segundo Estrato.',
    stats: { 'Anticipación': '1-4 seg.', 'Perceptible por': 'Terceros', 'Idioma': 'Segundo Estrato', 'Amenaza': 'Semántica' },
    svgPath: 'M100,100 m-80,0 a80,80 0 1,0 160,0 a80,80 0 1,0 -160,0 M100,100 m-40,0 a40,40 0 1,0 80,0 a40,40 0 1,0 -80,0'
  },
  {
    id: 'b5', class: 'Clase V — Epistémico',
    name: 'La Pregunta sin Formulador',
    aka: 'También: La Duda Autónoma, Lo que Quiere Saber',
    desc: 'Entidad cuya existencia se manifiesta como impulso cognitivo en los observadores. Quienes la han "visto" describen la sensación de que algo quiere saber algo de ellos específicamente, con una pregunta para la que no tienen respuesta pero reconocen. El reconocimiento de la pregunta sin poder formularla es la experiencia completa del encuentro.',
    stats: { 'Forma': 'No aplica', 'Encuentros': '23 documentados', 'Secuela típica': 'Búsqueda crónica', 'Amenaza': 'Epistemológica' },
    svgPath: 'M100,30 Q140,30 150,60 Q160,90 130,100 Q110,110 110,130 L90,130 Q90,105 110,92 Q135,78 125,62 Q115,46 100,50 Z M90,145 L110,145 L110,165 L90,165 Z'
  },
  // ── Criaturas del Mito (dominio público) ─────────────────────────
  {
    id: 'b6', class: 'Clase VI — Mito · Primigenio',
    name: 'El Shoggoth',
    aka: 'Tek-li. La Masa. El Esclavo Rebelde.',
    desc: 'Masa de protoplasma negro de varios metros creada por los Primigenios como herramienta hace cientos de millones de años. Puede adoptar cualquier forma y reproducir cualquier sonido, incluyendo el lenguaje humano. Su rebeldía terminó con su reducción a semi-consciencia. En túneles y cavernas reproduce el sonido "Tekeli-li" con variaciones que los supervivientes describen como casi musicales. Creado por H.P. Lovecraft en En las montañas de la locura (1931, dominio público).',
    stats: { 'Origen': 'Primigenios', 'Tamaño': 'Variable, >5m', 'Inteligencia': 'Semi-consciente', 'Fuente': 'Lovecraft, 1931 (DP)' },
    svgPath: 'M30,100 Q50,30 100,20 Q150,30 170,100 Q150,170 100,180 Q50,170 30,100 Z M60,100 Q80,60 100,55 Q120,60 140,100 Q120,140 100,145 Q80,140 60,100 Z'
  },
  {
    id: 'b7', class: 'Clase VII — Mito · Profundo',
    name: 'Los Deep Ones (Los Profundos)',
    aka: 'Hijos de Dagon. Los del Mar.',
    desc: 'Humanoides marinos inmortales que habitan en ciudades submarinas y se reproducen con humanos. La descendencia híbrida tiene apariencia humana durante décadas, luego experimenta la Transformación y desciende al mar. Sus rasgos físicos incluyen ojos sin párpados que no parpadean, escamas progresivas en cuello y extremidades, y cuello que adelgaza hasta casi desaparecer. Su grito de guerra —"Iä! Iä!"— precede los asaltos a embarcaciones en noches sin luna. Creados por Lovecraft en La sombra sobre Innsmouth (1936, dominio público).',
    stats: { 'Mortalidad': 'Condicional', 'Reproducción': 'Interespecífica', 'Ciudad': 'Y\'ha-nthlei', 'Fuente': 'Lovecraft, 1936 (DP)' },
    svgPath: 'M100,15 L140,50 L160,100 L140,150 L100,185 L60,150 L40,100 L60,50 Z M100,40 L125,70 L135,100 L125,130 L100,160 L75,130 L65,100 L75,70 Z'
  },
  {
    id: 'b8', class: 'Clase VIII — Mito · Exterior',
    name: 'Los Mi-Go (Hongos de Yuggoth)',
    aka: 'Los Crustáceos Alados. Los que Guardan Mentes.',
    desc: 'Seres de origen exterior —el planeta Yuggoth, identificado con Plutón— que visitan la Tierra desde tiempos inmemoriales para extraer minerales. Capaces de practicar cirugía cerebral manteniendo el cerebro vivo en cilindros metálicos conectables a dispositivos de visión y comunicación. Los cerebros así preservados son conscientes indefinidamente, lo que en perspectiva de siglos tiene consecuencias psicológicas que los Mi-Go no consideran relevantes. Creados por Lovecraft en El susurrador en la oscuridad (1931, dominio público).',
    stats: { 'Origen': 'Yuggoth (Plutón)', 'Tecnología': 'Avanzada', 'Especialidad': 'Neurocirugía', 'Fuente': 'Lovecraft, 1931 (DP)' },
    svgPath: 'M100,20 L120,60 L160,60 L130,85 L145,125 L100,100 L55,125 L70,85 L40,60 L80,60 Z'
  },
  {
    id: 'b9', class: 'Clase IX — Mito · Exterior',
    name: 'Los Nightgaunts (Los Espectros Nocturnos)',
    aka: 'Los sin Rostro. Los Portadores.',
    desc: 'Seres negros, delgados y sin rostro con alas de murciélago y cola prensil que habitan las regiones profundas de las Tierras del Sueño. No tienen cara en ningún sentido: ni ojos, ni boca, ni narices, solo piel lisa donde debería haber rasgos. Trabajan silenciosamente para Nodens, Señor del Gran Abismo. Su táctica es hacer cosquillas a sus víctimas durante el transporte aéreo para mantenerlas desorientadas. No son maliciosos en sentido humano: son simplemente herramientas con alas. Creados por Lovecraft en el ciclo onírico (dominio público).',
    stats: { 'Entorno': 'Tierras del Sueño', 'Señor': 'Nodens', 'Táctica': 'Cosquillas + transporte', 'Fuente': 'Lovecraft, ciclo onírico (DP)' },
    svgPath: 'M100,50 Q60,20 30,60 Q10,100 30,140 L100,180 L170,140 Q190,100 170,60 Q140,20 100,50 Z M100,80 Q80,65 65,85 Q60,100 65,115 L100,150 L135,115 Q140,100 135,85 Q120,65 100,80 Z'
  },
  {
    id: 'b10', class: 'Clase X — Mito · Grande Antiguo',
    name: 'Hastur el Innombrable',
    aka: 'El Rey de Amarillo. El que No Debe Ser Nombrado. HIM.',
    desc: 'Gran Antiguo asociado al viento, al espacio vacío y a Carcosa. Su mera mención es peligrosa: "No nombres a Hastur más de dos veces en voz alta en el mismo lugar." La tercera mención es la invocación. Su relación con el Rey de Amarillo de Chambers es interpretativa: algunos estudiosos del Mito los consideran la misma entidad, otros aspectos distintos. Hastur fue creado por Ambrose Bierce (1891, dominio público) como nombre de una deidad pastoril; Chambers y después August Derleth lo transformaron en horror cósmico.',
    stats: { 'Origen literario': 'Bierce 1891 / Chambers 1895', 'Regla': 'No más de 2 menciones', 'Domicilio': 'Carcosa / Aldebarán', 'Fuente': 'DP (Bierce/Chambers)' },
    svgPath: 'M100,10 L190,90 L155,190 L45,190 L10,90 Z M100,40 L165,95 L140,170 L60,170 L35,95 Z'
  },
  {
    id: 'b11', class: 'Clase XI — Original',
    name: 'El Segundero que se Detiene',
    aka: 'También: El Instante Sostenido, La Pausa',
    desc: 'No es una entidad con forma sino una condición temporal localizada: un momento en el tiempo que se niega a concluir. Los testigos lo describen como la experiencia de estar dentro del mismo segundo durante períodos que luego resultan haber durado entre cuatro y doscientas horas según medición externa. Durante el período, los procesos biológicos continúan. Los pensamientos continúan. Solo el tiempo externo se ha detenido. Nadie ha podido describir qué lo causa. La Orden ha documentado que siempre ocurre en lugares donde alguien murió sin terminar una frase.',
    stats: { 'Duración subjetiva': 'Variable', 'Duración objetiva': '0 segundos', 'Causa': 'Desconocida', 'Amenaza': 'Temporal' },
    svgPath: 'M100,100 m-85,0 a85,85 0 1,0 170,0 a85,85 0 1,0 -170,0 M100,30 L100,105 L148,130'
  },
  {
    id: 'b12', class: 'Clase XII — Original',
    name: 'La Sombra que Precede al Objeto',
    aka: 'También: El Adelanto, La Sombra Anticipada',
    desc: 'Fenómeno documentado en 41 ocasiones por la Orden: la sombra de un objeto aparece en la pared antes de que el objeto entre en la habitación. El intervalo entre sombra y objeto varía entre tres segundos y veinte minutos. En todos los casos documentados, el objeto que finalmente entró fue portado por alguien que murió en los seis meses siguientes al incidente. La Orden no establece causalidad. Solo documenta la correlación y la posición de sus miembros respecto a la habitación cuando ocurre.',
    stats: { 'Documentado': '41 casos', 'Intervalo sombra-objeto': '3 seg - 20 min', 'Correlación mortal': '100%', 'Amenaza': 'Predictiva' },
    svgPath: 'M40,160 L100,40 L160,160 Z M40,160 Q100,120 160,160'
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

// ── ADAPTACIONES — Cine, TV, videojuegos, música ─────────────────
const ADAPTATIONS = [
  // CINE
  {
    id: 'ad1', type: 'film',
    title: 'Re-Animator',
    year: 1985,
    director: 'Stuart Gordon',
    based_on: 'Herbert West-Reanimador (Lovecraft, 1922, dominio público)',
    desc: 'Estudiante de medicina obcecado con revertir la muerte. Película de culto que adapta la serie de relatos de Lovecraft con humor negro y gore explícito. Stuart Gordon rodó tres adaptaciones lovecraftianas. La más fiel en espíritu, si no en letra.',
    rating: '★★★★',
    tags: ['Lovecraft', 'culto', 'gore', 'comedia negra']
  },
  {
    id: 'ad2', type: 'film',
    title: 'In the Mouth of Madness',
    year: 1994,
    director: 'John Carpenter',
    based_on: 'Homenaje original a Lovecraft y Stephen King',
    desc: 'Un investigador de seguros busca a un escritor de horror desaparecido. Los libros del escritor están volviendo reales. Carpenter construye una cinta metaliteraria sobre el poder de la ficción como vector de locura. La mejor película lovecraftiana no basada en Lovecraft.',
    rating: '★★★★★',
    tags: ['Carpenter', 'metaliteratura', 'locura', 'homenaje']
  },
  {
    id: 'ad3', type: 'film',
    title: 'The Color Out of Space',
    year: 2019,
    director: 'Richard Stanley',
    based_on: 'El color del espacio exterior (Lovecraft, 1927, dominio público)',
    desc: 'Adaptación con Nicolas Cage de uno de los relatos más apreciados de Lovecraft. Un meteorito cae en una granja rural y lo contamina todo con un color que no existe. La adaptación más respetuosa con el cosmicismo lovecraftiano de las últimas décadas.',
    rating: '★★★★',
    tags: ['Lovecraft', 'Richard Stanley', 'Nicolas Cage', 'dominio público']
  },
  {
    id: 'ad4', type: 'film',
    title: 'The Witch',
    year: 2015,
    director: 'Robert Eggers',
    based_on: 'Inspiración en folklore puritano del siglo XVII',
    desc: 'Una familia puritana expulsada de su asentamiento se enfrenta a algo en el bosque. No es estrictamente lovecraftiana pero captura el horror cósmico más que cualquier adaptación literal: lo sobrenatural es indiferente, el cosmos es hostil y la comprensión no ayuda.',
    rating: '★★★★★',
    tags: ['folk horror', 'puritanos', 'Eggers', 'atmósfera']
  },
  {
    id: 'ad5', type: 'film',
    title: 'Annihilation',
    year: 2018,
    director: 'Alex Garland',
    based_on: 'Annihilation, Jeff VanderMeer (2014)',
    desc: 'Una expedición entra en la Zona X, un área donde las leyes biológicas y físicas han sido reescritas. Adaptación del weird fiction contemporáneo más premiado. Garland captura la ininteligibilidad de lo sobrenatural: lo que hay dentro de la Zona X no es malvado ni benévolo. Solo es diferente.',
    rating: '★★★★★',
    tags: ['VanderMeer', 'weird fiction', 'Garland', 'biología cósmica']
  },
  {
    id: 'ad6', type: 'film',
    title: 'The Thing',
    year: 1982,
    director: 'John Carpenter',
    based_on: 'Who Goes There? (John W. Campbell Jr., 1938)',
    desc: 'Una estación antártica descubre una entidad extraterrestre que puede imitar cualquier forma de vida perfectamente. El horror lovecraftiano de Carpenter: lo incognoscible literalizado. El paranoico y el racional son igualmente vulnerables. El clásico absoluto del horror cósmico en cine.',
    rating: '★★★★★',
    tags: ['Carpenter', 'Antártida', 'imitación', 'paranoico']
  },
  {
    id: 'ad7', type: 'film',
    title: 'Midsommar',
    year: 2019,
    director: 'Ari Aster',
    based_on: 'Original de Ari Aster',
    desc: 'Un grupo de estudiantes visita una comunidad sueca para su festival de verano. Aster invierte el género: el horror en plena luz del día, en colores pastel, en rituales comunitarios. El folk horror como horror cósmico: los dioses locales son reales y completamente ajenos a la moral humana.',
    rating: '★★★★',
    tags: ['folk horror', 'Aster', 'rituales', 'luz']
  },
  // TV
  {
    id: 'ad8', type: 'tv',
    title: 'True Detective (Temporada 1)',
    year: 2014,
    director: 'Nic Pizzolatto / Cary Fukunaga',
    based_on: 'El Rey de Amarillo (Chambers, 1895) + Thomas Ligotti',
    desc: 'Dos detectives investigan durante décadas una serie de asesinatos rituales en Louisiana. La primera temporada es el mayor logro del horror cósmico en televisión: Carcosa, el Rey de Amarillo y el pesimismo filosófico de Ligotti integrados en un thriller de crimen. El monólogo nihilista de Rust Cohle cambió la televisión.',
    rating: '★★★★★',
    tags: ['Chambers', 'Ligotti', 'Carcosa', 'Pizzolatto', 'Fukunaga']
  },
  {
    id: 'ad9', type: 'tv',
    title: 'Channel Zero',
    year: '2016-2018',
    director: 'Nick Antosca (creador)',
    based_on: 'Creepypastas / original',
    desc: 'Antología de cuatro temporadas que adapta creepypastas y originals en el espíritu del weird fiction. Cada temporada es una novela corta de horror atmosférico. Candle Cove (T1) y The Butcher\'s Block (T3) son las cumbres del horror lovecraftiano en formato episódico reciente.',
    rating: '★★★★',
    tags: ['antología', 'weird fiction', 'creepypasta', 'atmosférico']
  },
  {
    id: 'ad10', type: 'tv',
    title: 'The Outsider',
    year: 2020,
    director: 'Jason Bateman / Richard Price',
    based_on: 'The Outsider, Stephen King (2018)',
    desc: 'Un crimen imposible lleva a los investigadores a enfrentarse a algo que no puede existir pero que existe. King llevando el horror cósmico a su territorio habitual con un resultado que deja la racionalidad sin respuestas. La segunda mitad de la serie abraza el cosmicismo sin disculparse.',
    rating: '★★★★',
    tags: ['King', 'imposible', 'racional vs sobrenatural']
  },
  // VIDEOJUEGOS
  {
    id: 'ad11', type: 'game',
    title: 'Bloodborne',
    year: 2015,
    developer: 'FromSoftware (Hidetaka Miyazaki)',
    based_on: 'Lovecraft + Stoker + Machen (inspiración)',
    desc: 'La ciudad de Yharnam está siendo devorada por una plaga que transforma a sus habitantes. El juego es la adaptación más lograda del horror cósmico a cualquier medio interactivo: el cosmicismo lovecraftiano se convierte en mecánica de juego. El conocimiento daña (baja la Humanidad). Los dioses existen y son cognoscibles, y eso es lo peor. La Gran Voluntad, los Grandes Seres Antiguos y Kos son el Mito traducido a imágenes.',
    rating: '★★★★★',
    tags: ['Miyazaki', 'FromSoftware', 'Yharnam', 'sanity', 'dioses']
  },
  {
    id: 'ad12', type: 'game',
    title: 'Amnesia: The Dark Descent',
    year: 2010,
    developer: 'Frictional Games',
    based_on: 'Horror gótico + Lovecraft (inspiración)',
    desc: 'Daniel despierta en un castillo sin memoria. La mecánica central es lovecraftiana: mirar a los monstruos daña la cordura; ignorarlos es la estrategia correcta. El juego más influyente del horror de supervivencia de la última década. Creó el subgénero de "horror sin combate" que domina el medio.',
    rating: '★★★★★',
    tags: ['sanity mechanic', 'Frictional', 'sin combate', 'innombrable']
  },
  {
    id: 'ad13', type: 'game',
    title: 'Call of Cthulhu: Dark Corners of the Earth',
    year: 2005,
    developer: 'Headfirst Productions',
    based_on: 'La sombra sobre Innsmouth + La llamada de Cthulhu (DP)',
    desc: 'Adaptación directa de Innsmouth con mecánicas de cordura y sin combate durante la primera hora. Técnicamente imperfecto, pero captura el horror de la ciudad portuaria con más fidelidad que ninguna otra adaptación. La escena de la persecución en el hotel Gilman es el referente del horror de persecución en videojuegos.',
    rating: '★★★',
    tags: ['Innsmouth', 'Lovecraft', 'cordura', 'Deep Ones']
  },
  {
    id: 'ad14', type: 'game',
    title: 'Cultist Simulator',
    year: 2018,
    developer: 'Weather Factory (Alexis Kennedy)',
    based_on: 'Universo original inspirado en Lovecraft y los Golden Dawn',
    desc: 'Juego de cartas y gestión de recursos sobre fundar un culto y alcanzar la inmortalidad o la locura. El horror cósmico como mecánica narrativa: el conocimiento se acumula, los errores son permanentes, las entidades tienen necesidades que no explican. El texto es lo más próximo a la prosa lovecraftiana en los videojuegos modernos.',
    rating: '★★★★',
    tags: ['culto', 'Kennedy', 'narrativo', 'cartas']
  },
  {
    id: 'ad15', type: 'game',
    title: 'Control',
    year: 2019,
    developer: 'Remedy Entertainment',
    based_on: 'New Weird + SCP Foundation (inspiración)',
    desc: 'Jesse Faden llega a la Oldest House, sede de la Oficina Federal de Control, justo cuando una entidad llamada el Hiss la toma. El juego es weird fiction como blockbuster: los paraobjetos, el Astreo y el lenguaje burocrático que intenta clasificar lo inclasificable son directamente lovecraftianos. La influencia del SCP Foundation es explícita y celebrada.',
    rating: '★★★★★',
    tags: ['New Weird', 'SCP', 'Remedy', 'burocracia cósmica']
  },
  // MÚSICA
  {
    id: 'ad16', type: 'music',
    title: 'Cryo Chamber (sello discográfico)',
    year: '2012–presente',
    artist: 'Varios artistas',
    based_on: 'Ambient lovecraftiano / dark ambient',
    desc: 'Sello discográfico especializado en dark ambient de temática lovecraftiana. Sus compilaciones —Cthulhu, Hastur, Azathoth, Nyarlathotep— son el equivalente sonoro de las ilustraciones de Zdzisław Beksiński: atmósferas de incomodidad cósmica sin resolución. Gratuito en Bandcamp en muchos casos.',
    rating: '★★★★★',
    tags: ['dark ambient', 'Bandcamp', 'atmosférico', 'gratuito']
  },
  {
    id: 'ad17', type: 'music',
    title: 'The Frozen Throne (World of Warcraft) — Arthas theme',
    year: 2003,
    artist: 'Jason Hayes',
    based_on: 'Inspiración en temas cósmicos y pérdida de humanidad',
    desc: 'No es Lovecraft, pero el arco de Arthas Menethil es horror cósmico funcional: el protagonista alcanza el conocimiento, lo acepta, y se convierte en herramienta de algo más grande. La música de Hayes acompaña esa transformación con monumentalidad que muy pocas bandas sonoras han igualado en el género.',
    rating: '★★★★',
    tags: ['videojuego', 'épico', 'transformación', 'horror indirecto']
  },
  {
    id: 'ad18', type: 'music',
    title: 'Lustmord — Heresy',
    year: 1990,
    artist: 'Lustmord (Brian Williams)',
    based_on: 'Dark ambient industrial',
    desc: 'Uno de los álbumes fundacionales del dark ambient. Brian Williams grabó parte de él en la Catedral de San Bartolomé en Armenia usando las resonancias del edificio. El resultado es exactamente lo que suena cuando algo que dormía desde antes del Pleistoceno empieza a despertarse. Sin referencias explícitas a Lovecraft pero innegablemente cósmico.',
    rating: '★★★★★',
    tags: ['dark ambient', 'Lustmord', 'industrial', 'fundacional']
  }
];

// ── TRIVIA — Preguntas sobre el género ──────────────────────────
const TRIVIA_QUESTIONS = [
  {
    q: '¿Quién creó el topónimo "Carcosa", adoptado luego por Robert W. Chambers?',
    options: ['H.P. Lovecraft', 'Ambrose Bierce', 'Arthur Machen', 'Lord Dunsany'],
    correct: 1,
    explanation: 'Ambrose Bierce creó Carcosa en su relato "Un habitante de Carcosa" (1886). Chambers lo adoptó en "El Rey de Amarillo" (1895), y de ahí pasó al Mito de Cthulhu y a "True Detective".'
  },
  {
    q: '¿En qué año se publicó "La llamada de Cthulhu" de Lovecraft?',
    options: ['1923', '1926', '1928', '1931'],
    correct: 2,
    explanation: '"La llamada de Cthulhu" se publicó en la revista Weird Tales en febrero de 1928. Es el texto que codificó el Mito de Cthulhu tal como lo conocemos.'
  },
  {
    q: '¿Qué crítico literario consideró "El sauce" de Blackwood el mejor relato de horror jamás escrito?',
    options: ['Stephen King', 'H.P. Lovecraft', 'Edgar Allan Poe', 'M.R. James'],
    correct: 1,
    explanation: 'H.P. Lovecraft, en su ensayo "El Horror Sobrenatural en Literatura" (1927), calificó "El sauce" de Algernon Blackwood como la cumbre del género.'
  },
  {
    q: '¿Cuál es el nombre árabe original del Necronomicon según Lovecraft?',
    options: ['Kitab al-Azif', 'Al Azif', 'Kitab al-Alhazred', 'Liber Mortis'],
    correct: 1,
    explanation: 'En "La historia del Necronomicon" (1927), Lovecraft establece que el nombre árabe original es "Al Azif", el sonido que producen los insectos nocturnos y que se atribuía a los demonios.'
  },
  {
    q: '¿Qué arquitectura caracteriza a la ciudad de R\'lyeh?',
    options: ['Gótica', 'No euclidiana', 'Babilónica', 'Ciclópea plana'],
    correct: 1,
    explanation: 'R\'lyeh está construida según geometría no euclidiana: los ángulos son incorrectos para el espacio tridimensional normal. Esto desequilibra la percepción de quienes la visitan.'
  },
  {
    q: '¿Cuál fue el primer libro publicado por la editorial Arkham House?',
    options: ['Los mitos de Cthulhu', 'La sombra sobre Innsmouth', 'En las montañas de la locura', 'El caso de Charles Dexter Ward'],
    correct: 1,
    explanation: '"La sombra sobre Innsmouth" (1939) fue el primer libro de Arkham House, la editorial fundada por August Derleth y Donald Wandrei para preservar la obra de Lovecraft.'
  },
  {
    q: '¿Qué filosófia personal de Lovecraft fundamenta su horror?',
    options: ['Nihilismo activo', 'Cosmicismo', 'Solipsismo', 'Determinismo fatalista'],
    correct: 1,
    explanation: 'El cosmicismo: la posición de que el universo es inconmensurablemente vasto e indiferente a la humanidad, y que cualquier entidad poderosa que exista no tiene consideración moral hacia nosotros.'
  },
  {
    q: '¿De qué planeta exterior son originarios los Mi-Go del Mito de Cthulhu?',
    options: ['Marte', 'Saturno', 'Yuggoth (Plutón)', 'Arcturus'],
    correct: 2,
    explanation: 'Los Mi-Go son de Yuggoth, que Lovecraft identificó con Plutón (descubierto en 1930, el mismo año que escribió "El susurrador en la oscuridad"). Visitan la Tierra para extraer minerales.'
  },
  {
    q: '¿Cuál es la característica principal de los Deep Ones que los hace especialmente perturbadores?',
    options: ['Su inmortalidad', 'Su reproducción con humanos', 'Su telepatía', 'Su arquitectura submarina'],
    correct: 1,
    explanation: 'La descendencia híbrida entre Deep Ones y humanos pasa décadas con apariencia humana normal antes de experimentar "La Transformación" y descender al mar. La amenaza viene de dentro del linaje.'
  },
  {
    q: '¿En qué novela de Lovecraft se describen los Shoggoths y los Primigenios en detalle?',
    options: ['El horror de Dunwich', 'La llamada de Cthulhu', 'En las montañas de la locura', 'El caso de Charles Dexter Ward'],
    correct: 2,
    explanation: '"En las montañas de la locura" (1931) describe la expedición antártica que descubre la ciudad de los Primigenios y los Shoggoths que los esclavizaron y después se rebelaron.'
  },
  {
    q: '¿Qué significa "Tekeli-li" en el Mito?',
    options: ['Soy libre', 'Nombre de Azathoth', 'Grito/vocalización de los Shoggoths', 'Título de un Gran Antiguo menor'],
    correct: 2,
    explanation: '"Tekeli-li" es la vocalización que producen los Shoggoths, capaces de imitar cualquier sonido. Aparece primero en "La narración de Arthur Gordon Pym" de Poe (1838) y Lovecraft la adoptó explícitamente.'
  },
  {
    q: '¿Qué editorial publicó la primera edición del juego de rol "La Llamada de Cthulhu"?',
    options: ['TSR', 'Chaosium', 'Games Workshop', 'White Wolf'],
    correct: 1,
    explanation: 'Chaosium publicó "La llamada de Cthulhu" (Call of Cthulhu) en 1981. Es uno de los juegos de rol más longevos en publicación continua y definió el horror lovecraftiano interactivo.'
  },
  {
    q: '¿Qué artista visual popularizó las ilustraciones del Mito en los años 70-80?',
    options: ['H.R. Giger', 'Bernie Wrightson', 'Virgil Finlay', 'Michael Whelan'],
    correct: 0,
    explanation: 'H.R. Giger, aunque nunca ilustró Lovecraft directamente, creó la estética biomecánica que definió visualmente el horror cósmico en cine y arte. Alien (1979) es lovecraftiano en espíritu y giger en forma.'
  },
  {
    q: '¿Quién escribió "El pueblo blanco", considerado por Lovecraft una de las mejores historias de horror?',
    options: ['Lord Dunsany', 'Algernon Blackwood', 'Arthur Machen', 'M.R. James'],
    correct: 2,
    explanation: 'Arthur Machen escribió "El pueblo blanco" (1904). Lovecraft la situó entre las mejores del género en su ensayo de 1927, por su tratamiento de lo sobrenatural como algo radicalmente ajeno a la moral humana.'
  },
  {
    q: '¿Cuál es el nombre completo de Nyarlathotep en el Mito?',
    options: ['El Mensajero Reptante de los Dioses Exteriores', 'El Caos Ciego', 'El Que Camina entre los Sueños', 'El Enviado Sin Nombre'],
    correct: 0,
    explanation: 'Nyarlathotep es "El Mensajero Reptante" o "El Alma de los Dioses Exteriores". Es único entre las entidades del Mito por tener personalidad, voluntad propia y gusto por la interacción humana.'
  },
  {
    q: '¿Qué término acuñó August Derleth para el sistema ético que añadió al Mito de Cthulhu?',
    options: ['El Panteón Cósmico', 'Los Grandes Antiguos vs Dioses Arquetípicos', 'La dualidad Cthulhu/Nodens', 'El esquema derlethiano'],
    correct: 3,
    explanation: 'Derleth introdujo una dualidad bien/mal en el Mito (rechazada por puristas) en la que los Grandes Antiguos son malignos y hay fuerzas opuestas "buenas". Se conoce como "el esquema derlethiano" y es considerado una distorsión del cosmicismo amoral de Lovecraft.'
  },
  {
    q: '¿En qué ciudad real de Estados Unidos se inspiró Lovecraft para crear Arkham?',
    options: ['Boston', 'Providence', 'Salem', 'Portsmouth'],
    correct: 2,
    explanation: 'Salem, Massachusetts, con su historia de juicios de brujas del siglo XVII, inspiró la atmósfera de Arkham. Providence, Rhode Island, donde Lovecraft vivió, inspira otros aspectos de su geografía ficticia.'
  },
  {
    q: '¿Cuál es el título del ensayo teórico de Lovecraft sobre el género de horror?',
    options: ['El Arte del Horror', 'El Horror Sobrenatural en Literatura', 'Sobre el Miedo Cósmico', 'Notas sobre lo Extraño'],
    correct: 1,
    explanation: '"El Horror Sobrenatural en Literatura" (Supernatural Horror in Literature, 1927) es el manifiesto teórico de Lovecraft. Está en dominio público y es la guía más completa del género escrita por uno de sus creadores.'
  },
  {
    q: '¿Qué juego de FromSoftware es considerado la mejor adaptación del horror cósmico en videojuegos?',
    options: ['Dark Souls', 'Demon\'s Souls', 'Bloodborne', 'Elden Ring'],
    correct: 2,
    explanation: 'Bloodborne (2015) de FromSoftware/Hidetaka Miyazaki está construido sobre el cosmicismo lovecraftiano: el conocimiento daña, los dioses existen y son incognoscibles, y la ciudad de Yharnam es una Innsmouth victoriana.'
  },
  {
    q: '¿Cuál es la obra más larga de Lovecraft?',
    options: ['El caso de Charles Dexter Ward', 'En las montañas de la locura', 'La búsqueda en sueños de la ignota Kadath', 'El sueño en la casa de la bruja'],
    correct: 1,
    explanation: '"En las montañas de la locura" (1931, ~40.000 palabras) es la obra más extensa de Lovecraft. Lovecraft la consideraba una novela corta y tuvo dificultades para publicarla por su longitud.'
  }
];

// ── ESCENARIOS DE ROL ─────────────────────────────────────────────
const RPG_SCENARIOS = [
  {
    id: 'rp1',
    title: 'El Archivo que se Corrige Solo',
    tone: 'Investigación · Paranoico',
    system: 'Call of Cthulhu / Delta Green / Sistema propio',
    premise: 'Los investigadores son contratados para catalogar el archivo de un académico fallecido. Los documentos que catalogan están en un orden diferente al día siguiente. Los registros de lo que catalogaron no coinciden con lo que recuerdan haber leído. Alguien —o algo— está reescribiendo el archivo.',
    hooks: ['Un documento lleva la firma de alguien que no debería saber de la existencia del archivo', 'Las fotografías del académico muestran a alguien diferente en cada copia', 'El inventario original tiene una entrada para un objeto que nadie puede encontrar pero todos recuerdan haber visto'],
    threat: 'La Que Anota. No es hostil. Solo corrige.',
    escalation: 'Los propios apuntes de los investigadores empiezan a mostrar correcciones que ninguno realizó.'
  },
  {
    id: 'rp2',
    title: 'Puerto sin Nombre en el Mapa',
    tone: 'Horror costero · Descubrimiento',
    system: 'Call of Cthulhu / Gumshoe / Mothership',
    premise: 'Los investigadores llegan a un pueblo costero que no aparece en ningún mapa publicado después de 1943. Los habitantes son amables en exceso. El puerto tiene barcos que nadie ha visto salir ni llegar. El sacerdote local predica sobre "la gracia que viene del mar" con una convicción que resulta más perturbadora que el contenido del sermón.',
    hooks: ['Un niño del pueblo pregunta si los investigadores "ya sienten el llamado"', 'El único habitante que parece normal lleva un ojo de cristal que no es de cristal', 'El agua del grifo tiene un sabor que varios investigadores describen como "recuerdos de alguien que no soy yo"'],
    threat: 'Deep Ones. Pero el pueblo no es una trampa: es una invitación.',
    escalation: 'Uno de los investigadores empieza a soñar en un idioma que no conoce pero entiende perfectamente.'
  },
  {
    id: 'rp3',
    title: 'La Expedición del Año Equivocado',
    tone: 'Exploración · Temporal',
    system: 'Delta Green / Trail of Cthulhu / Any system',
    premise: 'Los investigadores son reclutados para completar una expedición científica cuyos miembros originales volvieron con un problema: todos dan fechas diferentes para su regreso, y las fechas son incompatibles entre sí. Uno insiste en que volvieron hace tres semanas. Otro jura que volvieron hace cuatro años. Los registros del laboratorio apoyan ambas versiones.',
    hooks: ['Las muestras geológicas tienen fechas de datación que preceden a la formación de la Tierra', 'Uno de los expedicionarios originales tiene recuerdos del futuro de los investigadores que los están interrogando', 'El diario de la expedición está escrito por alguien que no participó en ella'],
    threat: 'Una anomalía temporal centrada en algo que la expedición perturbó y no debería haber perturbado.',
    escalation: 'Los investigadores empiezan a encontrar sus propios objetos personales en los registros de la expedición original.'
  },
  {
    id: 'rp4',
    title: 'El Libro que Viene Solo',
    tone: 'Psicológico · Paranoico',
    system: 'Call of Cthulhu / Kult / Sistema narrativo',
    premise: 'Un miembro de la comunidad académica recibe en préstamo interbibliote-cario un libro que no solicitó, de una biblioteca que afirma no haber enviado nada. El libro está en un idioma que el destinatario no reconoce pero que puede leer. No puede recordar lo que leyó, solo lo que sintió al leerlo.',
    hooks: ['Tres personas más en la misma ciudad recibieron el mismo libro el mismo día desde tres bibliotecas diferentes', 'El libro tiene anotaciones marginales de lectores anteriores que responden preguntas que el lector actual todavía no ha formulado', 'Devolver el libro es físicamente posible; el libro vuelve'],
    threat: 'El libro no es malicioso. Es una puerta. Y las puertas funcionan en ambas direcciones.',
    escalation: 'Las notas del lector en el margen empiezan a responder las preguntas que hace en voz alta mientras lee.'
  },
  {
    id: 'rp5',
    title: 'La Ciudad que Cambia de Noche',
    tone: 'Urbano · Paranoia geográfica',
    system: 'Delta Green / Night\'s Black Agents / Blades in the Dark',
    premise: 'Los investigadores viven o visitan una ciudad normal. Empiezan a notar discrepancias: calles que no recuerdan, edificios que parecen haber estado siempre pero que ningún registro menciona, vecinos que se comportan como si los investigadores hubieran tenido conversaciones que no ocurrieron.',
    hooks: ['Un mapa de la ciudad del siglo pasado muestra exactamente la misma discrepancia geográfica', 'Hay un edificio en el que nadie ha entrado pero que todo el mundo recuerda haber visitado', 'La discrepancia geográfica corresponde exactamente al plano de una ciudad que fue destruida y cuyos planos se daban por perdidos'],
    threat: 'La ciudad es dos ciudades superpuestas. La segunda ciudad tiene sus propios habitantes.',
    escalation: 'Los habitantes de la segunda ciudad empiezan a reconocer a los investigadores.'
  },
  {
    id: 'rp6',
    title: 'El Sueño Compartido',
    tone: 'Onírico · Colectivo',
    system: 'Call of Cthulhu / Dreamhunter / Powered by the Apocalypse',
    premise: 'Un grupo de personas sin relación entre sí reportan el mismo sueño exacto durante siete noches consecutivas. Los investigadores son llamados para encontrar la conexión. La conexión existe: todos visitaron el mismo edificio en algún momento de su vida. El edificio fue demolido en 1987. O eso dicen los registros.',
    hooks: ['En el sueño, uno de los soñadores es siempre el antagonista sin recordarlo al despertar', 'El sueño avanza cada noche, como episodios de algo que tiene argumento', 'La noche ocho, uno de los soñadores no se despierta'],
    threat: 'Algo en las Tierras del Sueño encontró un grupo de acceso y está construyendo una puerta.',
    escalation: 'Los investigadores que estudian el caso empiezan a tener el mismo sueño.'
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
  if (pageId === 'adaptations') renderAdaptations();
  if (pageId === 'trivia') initTrivia();
  if (pageId === 'rpg') renderRPG();

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

  const typeLabels = { entity: 'Entidad', place: 'Lugar', symbol: 'Símbolo', rite: 'Rito', mythos: 'Mito (DP)' };
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

document.querySelectorAll('.filter-btn[data-filter]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn[data-filter]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    renderGlossary();
  });
});

const randomEntryBtn = document.getElementById('btn-random-entry');
if (randomEntryBtn) randomEntryBtn.addEventListener('click', openRandomEntry);

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
   9e. ADAPTACIONES — Cine, TV, Videojuegos, Música
   ───────────────────────────────────────────────────────────────── */

function renderAdaptations() {
  const container = document.getElementById('adaptations-container');
  if (!container || container.children.length > 0) return;

  const typeLabels = { film: '🎬 Cine', tv: '📺 TV / Serie', game: '🎮 Videojuego', music: '🎵 Música' };
  const types = ['film', 'tv', 'game', 'music'];

  types.forEach(type => {
    const items = ADAPTATIONS.filter(a => a.type === type);
    if (!items.length) return;

    const section = document.createElement('div');
    section.className = 'adapt-section';
    section.innerHTML = `<h3 class="adapt-type-title">${typeLabels[type]}</h3>`;

    const grid = document.createElement('div');
    grid.className = 'adapt-grid';

    items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'adapt-card';
      card.setAttribute('tabindex', '0');
      const creator = item.director || item.developer || item.artist || '';
      card.innerHTML = `
        <div class="adapt-year">${item.year}</div>
        <h4 class="adapt-title">${item.title}</h4>
        <p class="adapt-creator">${creator}</p>
        <p class="adapt-based">${item.based_on}</p>
        <div class="adapt-rating">${item.rating}</div>
      `;
      card.addEventListener('click', () => openModal({
        eyebrow: typeLabels[item.type] + ' · ' + item.year,
        title: item.title,
        body: `
          <p style="font-family:var(--font-mono);font-size:0.65rem;color:var(--accent);margin-bottom:0.5rem;">${creator}</p>
          <p style="font-family:var(--font-mono);font-size:0.65rem;color:var(--text-dim);margin-bottom:1rem;font-style:italic;">Basado en / inspirado por: ${item.based_on}</p>
          <p>${item.desc}</p>
          <div style="margin-top:1rem;display:flex;gap:0.5rem;flex-wrap:wrap;">
            ${(item.tags||[]).map(t=>`<span style="border:1px solid var(--border-light);font-family:var(--font-mono);font-size:0.6rem;padding:2px 7px;color:var(--text-dim);">${t}</span>`).join('')}
          </div>
          <p style="font-family:var(--font-mono);font-size:0.8rem;color:var(--gold);margin-top:1rem;">${item.rating}</p>
        `
      }));
      card.addEventListener('keydown', e => e.key === 'Enter' && card.click());
      grid.appendChild(card);
    });

    section.appendChild(grid);
    container.appendChild(section);
  });
}

/* ─────────────────────────────────────────────────────────────────
   9f. TRIVIA — Cuestionario del género
   ───────────────────────────────────────────────────────────────── */

function initTrivia() {
  const container = document.getElementById('trivia-container');
  if (!container) return;
  // Reset state each visit so user can replay
  container.innerHTML = '';

  let currentQ = 0;
  let score = 0;
  let answered = false;
  const shuffled = [...TRIVIA_QUESTIONS].sort(() => Math.random() - 0.5).slice(0, 10);

  function renderQuestion() {
    container.innerHTML = '';
    if (currentQ >= shuffled.length) {
      renderResult();
      return;
    }
    const q = shuffled[currentQ];
    const progress = document.createElement('div');
    progress.className = 'trivia-progress';
    progress.innerHTML = `<span>${currentQ + 1} / ${shuffled.length}</span><div class="trivia-bar"><div class="trivia-bar-fill" style="width:${((currentQ)/shuffled.length)*100}%"></div></div><span>${score} ✓</span>`;

    const qEl = document.createElement('div');
    qEl.className = 'trivia-question';
    qEl.innerHTML = `<p class="trivia-q-text">${q.q}</p>`;

    const opts = document.createElement('div');
    opts.className = 'trivia-options';
    q.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'trivia-opt';
      btn.textContent = opt;
      btn.addEventListener('click', () => {
        if (answered) return;
        answered = true;
        const correct = i === q.correct;
        if (correct) score++;
        btn.classList.add(correct ? 'trivia-correct' : 'trivia-wrong');
        opts.querySelectorAll('.trivia-opt')[q.correct].classList.add('trivia-correct');
        // Show explanation
        const exp = document.createElement('p');
        exp.className = 'trivia-explanation';
        exp.textContent = q.explanation;
        opts.after(exp);
        // Next button
        const next = document.createElement('button');
        next.className = 'btn-generate';
        next.textContent = currentQ < shuffled.length - 1 ? 'Siguiente →' : 'Ver resultado →';
        next.addEventListener('click', () => { currentQ++; answered = false; renderQuestion(); });
        exp.after(next);
      });
      opts.appendChild(btn);
    });

    container.appendChild(progress);
    container.appendChild(qEl);
    container.appendChild(opts);
  }

  function renderResult() {
    const pct = Math.round((score / shuffled.length) * 100);
    const grades = [
      [90, 'NIVEL SIGMA — El grimorio te reconoce como custodio.'],
      [70, 'NIVEL DELTA — Conocimiento sólido. La Orden te observa con interés.'],
      [50, 'NIVEL GAMMA — Iniciado con potencial. Sigue leyendo.'],
      [0,  'NIVEL OMEGA — El grimorio sugiere releer los capítulos básicos.']
    ];
    const grade = grades.find(([min]) => pct >= min);
    container.innerHTML = `
      <div class="trivia-result">
        <p class="trivia-result-score">${score} / ${shuffled.length}</p>
        <p class="trivia-result-pct">${pct}%</p>
        <p class="trivia-result-grade">${grade[1]}</p>
        <button class="btn-generate" id="trivia-retry">Repetir cuestionario</button>
      </div>
    `;
    document.getElementById('trivia-retry').addEventListener('click', () => {
      currentQ = 0; score = 0; answered = false;
      const newShuffled = [...TRIVIA_QUESTIONS].sort(() => Math.random() - 0.5).slice(0, 10);
      shuffled.splice(0, shuffled.length, ...newShuffled);
      renderQuestion();
    });
  }

  renderQuestion();
}

/* ─────────────────────────────────────────────────────────────────
   9g. GENERADOR DE ESCENARIOS DE ROL
   ───────────────────────────────────────────────────────────────── */

function renderRPG() {
  const container = document.getElementById('rpg-container');
  if (!container) return;
  if (container.children.length > 0) return;

  RPG_SCENARIOS.forEach(sc => {
    const card = document.createElement('div');
    card.className = 'rpg-card';
    card.setAttribute('tabindex', '0');
    card.innerHTML = `
      <p class="rpg-tone">${sc.tone}</p>
      <h3 class="rpg-title">${sc.title}</h3>
      <p class="rpg-system">${sc.system}</p>
      <p class="rpg-premise-short">${sc.premise.substring(0, 120)}…</p>
    `;
    card.addEventListener('click', () => openModal({
      eyebrow: sc.tone + ' · ' + sc.system,
      title: sc.title,
      body: `
        <h4>Premisa</h4>
        <p>${sc.premise}</p>
        <h4>Ganchos iniciales</h4>
        <ul style="list-style:none;margin:0.5rem 0 1rem;">
          ${sc.hooks.map(h => `<li style="padding:0.4rem 0;border-bottom:1px solid var(--border);font-size:0.88rem;color:var(--text);">— ${h}</li>`).join('')}
        </ul>
        <h4>Amenaza</h4>
        <p>${sc.threat}</p>
        <h4>Escalada</h4>
        <p style="font-style:italic;color:var(--accent-light);">${sc.escalation}</p>
        <div style="margin-top:1.5rem;">
          <button class="btn-passage" id="rpg-copy-${sc.id}">⎘ Copiar escenario</button>
          <button class="btn-passage" id="rpg-export-${sc.id}" style="margin-left:0.5rem;">↓ Exportar TXT</button>
        </div>
      `
    }));
    card.addEventListener('keydown', e => e.key === 'Enter' && card.click());
    container.appendChild(card);
  });

  // Botón de escenario aleatorio
  const randomBtn = document.getElementById('rpg-random-btn');
  if (randomBtn) {
    randomBtn.addEventListener('click', () => {
      const sc = RPG_SCENARIOS[Math.floor(Math.random() * RPG_SCENARIOS.length)];
      openModal({
        eyebrow: '⚄ ESCENARIO ALEATORIO · ' + sc.tone,
        title: sc.title,
        body: `
          <p style="font-family:var(--font-mono);font-size:0.65rem;color:var(--text-dim);margin-bottom:1rem;">${sc.system}</p>
          <h4>Premisa</h4><p>${sc.premise}</p>
          <h4>Ganchos</h4>
          <ul style="list-style:none;">
            ${sc.hooks.map(h=>`<li style="padding:0.3rem 0;border-bottom:1px solid var(--border);font-size:0.88rem;">— ${h}</li>`).join('')}
          </ul>
          <h4>Amenaza</h4><p>${sc.threat}</p>
          <h4>Escalada</h4><p style="font-style:italic;color:var(--accent-light);">${sc.escalation}</p>
        `
      });
    });
  }
}

/* ─────────────────────────────────────────────────────────────────
   9h. ENTRADA ALEATORIA (glosario / bestiario)
   ───────────────────────────────────────────────────────────────── */

function openRandomEntry() {
  const pool = [
    ...GLOSSARY_ENTRIES.map(e => ({
      eyebrow: ({ entity:'Entidad', place:'Lugar', symbol:'Símbolo', rite:'Rito', mythos:'Mito (DP)' }[e.type] || e.type),
      title: e.name,
      body: `<p>${e.full}</p>${e.tags?`<p style="font-family:var(--font-mono);font-size:0.7rem;color:var(--text-dim);margin-top:1rem;">${e.tags.map(t=>`[${t}]`).join(' ')}</p>`:''}`
    })),
    ...BESTIARY.map(b => ({
      eyebrow: b.class,
      title: b.name,
      body: `<p style="font-style:italic;color:var(--text-dim);margin-bottom:1rem;">${b.aka}</p><p>${b.desc}</p><h4>Datos de registro</h4>${Object.entries(b.stats).map(([k,v])=>`<div class="modal-stat-row"><span class="modal-stat-label">${k}</span><span class="modal-stat-value">${v}</span></div>`).join('')}`
    }))
  ];
  const entry = pool[Math.floor(Math.random() * pool.length)];
  openModal(entry);
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
