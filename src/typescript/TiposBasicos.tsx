
export const TiposBasicos = () => {
    const nombre: string = 'Omar';
    const edad: number = 35;
    const estaActivo:boolean = true;
    const poderes:string[] = ['Velocidad', 'Volar','Respirar en el agua'];

    //poderes.push(1);
    poderes.push('123');
    //poderes.push(true);
    return (
        <div>
            <h3>Tipos Basicos</h3>
            { nombre }, { edad }, {(estaActivo) ?'activo':'no activo'}
            <br/>
            {poderes.join(', ')}
        </div>
    )
}
