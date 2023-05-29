let comida = prompt("Elija carne, pescado o verdura");

switch (comida) {
    case 'carne' :
    console.log("Debe acompañar la carne con un vino tinto");
    break;
    case 'pescado':
    console.log("Debería beber vino blanco");
    break;
    case 'verdura':
    console.log("Puede acompañar la verdura con agua ");
    break;
    default:
    console.log("Debe elejir carne, pescado o verdura");
    }