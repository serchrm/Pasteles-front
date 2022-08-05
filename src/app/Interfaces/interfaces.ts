export interface Compras{
    articulo:string,
    descripcion:String,
    precio:number,
    cantidad:number,
    fecha:String
}

export interface ComprasResponse{
    ok:Boolean,
    msg:String,
    result:Compras[]
}

export interface Empleado{
    _id:String,
    nombre:string,
    telefono:String,
    puesto:string,
    contrasenia:String
}

export interface EmpleadoResponse{
    ok:Boolean,
    msg:String,
    result:Empleado[]
}

export interface Inventario{
    materia:string,
    cantidad:Number,
    fechaCaducidad:String
}

export interface InventarioResponse{
    ok:Boolean,
    msg:String,
    result:Inventario[]
}

export interface Nomina{
    empleado:String
    sueldo:number,
    isr:number,
    activo:String
}

export interface NominaResponse{
    ok:Boolean,
    msg:String,
    result:Nomina[]
}

export interface Pagos{
    articulo:String
    descripcion:String
    fecha:String
    cantidad:Number
}

export interface PagosResponse{
    ok:Boolean,
    msg:String,
    result:Pagos[]
}

export interface Pedidos{
    cliente:String,
    fechaHora:String,
    telefono:String,
    relleno:String,
    descripcion:String,
    entregado:String
}

export interface PedidosResponse{
    ok:Boolean,
    msg:String,
    result:Pedidos[]
}

export interface Producto{
    descripcion:string,
    precio:number,
    tamanio:string,
    sabor:string,
    activo:string
}

export interface ProductoResponse{
    ok:Boolean,
    msg:String,
    result:Producto[]
}

export interface Proveedor{
    empresa:String,
    telefono:String
}

export interface ProveedorResponse{
    ok:Boolean,
    msg:String,
    result:Proveedor[]
}

export interface login{
    ok:Boolean,
    msg:String,
    jwt:string,
    result:Empleado
}

export interface Info{
    nombre:string,
    puesto:string,
    telefono:String,
    Salida:{
        sueldo:number,
        isr:number,
        activo:String
    }
}

export interface InfoResponse{
    ok:Boolean,
    msg:String,
    result:Info[]
}

export interface Server{
    ok:Boolean,
    msg:String
}