*** readme ***

Elegi el proyecto del clon de slack ya que me llamaba mas la atencion que el de whatsapp, ademas, queria empezar desde 0.

No use otras librerias mas que 'react-router-dom' y 'react'.

Tuve varias complicaciones:

# al usar localStorage para acceder a la informacion, era un tema bastante olvidado y tuve que repasar bastante y buscar informacion para entender como usarlo.

# al usar el hook useParams tuve complicaciones porque en la consola me aparecian warnings, y para resolverlos termine haciendole caso a la consola sin entender que es "/*", si bien investigue, sigo sin entender bien lo que es.

# al usar el hook useEffect ya que durante las clases me saltee los ejercicios de practica y es fue primera experiencia usando este hook, me tuve que ver la clase donde se explico y buscar informacion extra para usarlo.

# al hacer responsive la screen Home, hacer el menu desplegable para mostrar el nav del header me resulto muy complicado ya que nunca habia usado operadores ternarios para cambiar las clases de los elementos.

# al hacer que se puedan mandar mensajes y que estos se guarden el el localStorage, me costo porque estaba comparando numbers con strings, los condicionales me devolvian false, y basicamente no se guardaban los mensajes, me costo bastante encontrar ese error.