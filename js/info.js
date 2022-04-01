const banksName = {
    BANDEC:'BANDEC',
    BPA:'BPA',
    BM:'BM'
  }
  
  const operation = [
    {
      //autenticarse BPA
      title:"AUTENTICARSE BPA",
      description:"Autenticarse en Banco Popular de Ahorro",
      link:"tel:/*444*40*01#",
      icon:"",
      banks:[banksName.BPA]
    },
    {
      //autenticarse BANDEC
      title:"AUTENTICARSE BANDEC",
      description:"Autenticarse en Banco de Crédito y Comercio",
      link:"tel:/*444*40*02#",
      icon:"",
      banks:[banksName.BANDEC]
    },
    {
      //CERRAR SESION BPA
      title:"Cerrar sesión",
      description:"Cierra la sesión actual",
      link:"tel:/*444*70#",
      icon:"",
      banks:[banksName.BANDEC,banksName.BPA]
    },

    {
      //transferencia
      title:"Transferencia",
      description:"Transferir saldo a otra cuenta o tarjeta",
      link:"tel:/*444*45#",
      icon:"",
      banks:[banksName.BANDEC,banksName.BPA]
    },
    {
      //Electricidad
      title:"Electricidad",
      description:"Pago de la electriciad",
      link:"tel:/*444*41#",
      icon:"",
      banks:[banksName.BANDEC,banksName.BPA]
    },
    {
      //Telefono
      title:"Teléfono",
      description:"Pago de factura telefónica",
      link:"tel:/*444*42#",
      icon:"",
      banks:[banksName.BANDEC,banksName.BPA]
    },
    {
      //Onat
      title:"ONAT",
      description:"Pago de la ONAT",
      link:"tel:/*444*43#",
      icon:"",
      banks:[banksName.BANDEC,banksName.BPA]
    },
    {
      //AGUA
      title:"Agua",
      description:"Pago a Aguas de La Habana",
      link:"tel:/*444*40*51#",
      icon:"",
      banks:[banksName.BANDEC,banksName.BPA]
    },
    {
      //Recargar movil
      title:"Recarga móvil",
      description:"Recarga de saldo fijo línea Cubacel",
      link:"tel:/*444*54#",
      icon:"",
      banks:[banksName.BANDEC,banksName.BPA]
    },
    {
      //Giro Postal
      title:"Giro postal",
      description:"Envío o consulta de giro postal",
      link:"tel:/*444*64#",
      icon:"",
      banks:[banksName.BANDEC,banksName.BPA]
    },
    {
      //Gas
      title:"Gas",
      description:"Pago de factura de gas",
      link:"tel:/*444*67#",
      icon:"",
      banks:[banksName.BANDEC,banksName.BPA]
    },
    {
      //Cuenta Joven Club
      title:"Cuenta Joven Club",
      description:"Recarga Cuenta Joven Club",
      link:"tel:/*444*93#",
      icon:"",
      banks:[banksName.BANDEC,banksName.BPA]
    },
    {
      //Cuota nauta hogar
      title:"Cuota Nauta Hogar",
      description:"Paga cuota Nauta Hogar",
      link:"tel:/*444*84#",
      icon:"",
      banks:[banksName.BANDEC,banksName.BPA]
    },
    {
      //Deuda nauta hogar
      title:"Deuda Nauta Hogar",
      description:"Paga deuda Nauta Hogar",
      link:"tel:/*444*86#",
      icon:"",
      banks:[banksName.BANDEC,banksName.BPA]
    },
    {
      //Recarga Tarjeta Propia
      title:"Tarjeta Propiar",
      description:"Recarga Tarjeta Propia",
      link:"tel:/*444*77#",
      icon:"",
      banks:[banksName.BANDEC,banksName.BPA]
    },
    {
      //Deposito a plazo fijo
      title:"Depósito a plazo fijo",
      description:"Apertura de depósito a plazo fijo",
      link:"tel:/*444*81#",
      icon:"",
      banks:[banksName.BPA]
    },
    {
      //Cerrar deposito a plazo fijo
      title:"Cerrar depósito a plazo fijo",
      description:"Cierre de depósito a plazo fijo",
      link:"tel:/*444*82#",
      icon:"",
      banks:[banksName.BPA]
    },
    {
      //Pagar Multa
      title:"Multa",
      description:"Pagar Multa",
      link:"tel:/*444*44#",
      icon:"",
      banks:[banksName.BANDEC,banksName.BPA]
    },

    {
      //Consulta saldo
      title:"Consultar saldo",
      description:"Consultar saldo de la tarjeta",
      link:"tel:/*444*46#",
      icon:"",
      banks:[banksName.BANDEC,banksName.BPA]
    },
    {
      //Consultar servios
      title:"Consultar servios",
      description:"Consultar factura del servicio",
      link:"tel:/*444*47#",
      icon:"",
      banks:[banksName.BANDEC,banksName.BPA]
    },
    {
      //Últimas operaciones
      title:"Últimas operaciones",
      description:"Consultar últimas 10 operaciones",
      link:"tel:/*444*48#",
      icon:"",
      banks:[banksName.BANDEC,banksName.BPA]
    },
    {
      //Consultar Límite tarjeta
      title:"Consultar Límite tarjeta",
      description:"Consultar operaciones y extracción de saldo posible en un día",
      link:"tel:/*444*62#",
      icon:"",
      banks:[banksName.BANDEC,banksName.BPA]
    },
    {
      //Consultar todas las cuentas
      title:"Consultar todas las cuentas",
      description:"Consultar todas las cuentas a la vez",
      link:"tel:/*444*58#",
      icon:"",
      banks:[banksName.BANDEC,banksName.BPA]
    },
    {
      //Consultar giro postal
      title:"Consultar giro postal",
      description:"Consultar todas las cuentas a la vez",
      link:"tel:/*444*65#",
      icon:"",
      banks:[banksName.BANDEC,banksName.BPA]
    },
    {
      //Consultar Créditos
      title:"Consultar Créditos",
      description:"Consultar créditos bancarios",
      link:"tel:/*444*72#",
      icon:"",
      banks:[banksName.BPA]
    },
    {
      //Tipo de Cambio
      title:"Tipo de Cambio",
      description:"Tipo de Cambio",
      link:"tel:/*444*85#",
      icon:"",
      banks:[banksName.BANDEC,banksName.BPA]
    },
    {
      //Cambio Ĺimite Tarjeta
      title:"Cambio Ĺimite Tarjeta",
      description:"Cambio Ĺimite de saldo a extraer en un día",
      link:"tel:/*444*61#",
      icon:"",
      banks:[banksName.BPA]
    },
    {//TODO:
      //registrar tarjeta
      title:"no funciona Registrar Tarjeta",
      description:"No Funciona Registrar Tarjeta BPA",
      link:"tel:/*444*49*01*1234567890123456#",
      icon:"",
      banks:[banksName.BPA]
    },
    {
      //Eliminar registro
      title:"Eliminar Registro",
      description:"Eliminar Registro",
      link:"tel:/*444*68*01#",
      icon:"",
      banks:[banksName.BPA]
    },
    {
      //Servicios Contratados
      title:"Servicios Contratados",
      description:"Lista los Servicios Contratados",
      link:"tel:/*444*52#",
      icon:"",
      banks:[banksName.BPA]
    },
    {
      //Amortizar Creditos
      title:"Amortizar Créditos",
      description:"Amortizar Créditos",
      link:"tel:/*444*55#",
      icon:"",
      banks:[banksName.BPA]
    },
    {
      //reimpresión de tarjeta
      title:"Reimpresión de Tarjeta",
      description:"Reimpresión de Tarjeta Magnética",
      link:"tel:/*444*74#",
      icon:"",
      banks:[banksName.BPA]
    },
    {
      //Pérdida del PIN
      title:"Pérdida del PIN",
      description:"Pérdida del PIN de Tarjeta Magnética",
      link:"tel:/*444*83",
      icon:"",
      banks:[banksName.BPA]
    },
    {
      //Cambiar clave
      title:"Cambiar clave",
      description:"Cambiar clave de acceso",
      link:"tel:/*444*69",
      icon:"",
      banks:[banksName.BPA]
    },
    {
      //Asosciar cuentas
      title:"Asosciar cuentas",
      description:"Vincular otra cuenta bancaria",
      link:"tel:/*444*60",
      icon:"",
      banks:[banksName.BPA]
    },
    {
      //Ayuda
      title:"Ayda",
      description:"Lista de operaciones permitidas",
      link:"tel:/*444*71",
      icon:"",
      banks:[banksName.BPA]
    },
    
    
 
    

    


  ];