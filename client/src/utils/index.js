export const readyToCreate= (estado) =>{
    let faltantes=[]
    estado.name?.length < 2 && faltantes.push("El título debe tener más de 2 caracteres");
    estado.description?.length < 2 && faltantes.push("La descripción debe tener más de 2 caracteres");
    !estado.questions?.length && faltantes.push("La encuesta debe tener al menos una pregunta");
    estado.questions?.length && estado.questions?.some(question=>question.text.length < 2) && faltantes.push("Cada pregunta debe tener más de 2 caracteres");
    estado.questions?.length && !estado.questions?.filter(question=>question.question_type !== "text").every(question=>question.options?.every(option=> option.length > 0)) && faltantes.push("Cada opción debe tener al menos un caracter");
    
    return(
        faltantes
    )
}

