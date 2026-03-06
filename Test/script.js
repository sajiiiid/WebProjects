const notes = [];
const NB_NOTES = 5;

while (notes.length < NB_NOTES) {
    const saisie = prompt(`Entrez la note ${notes.length + 1}/${NB_NOTES} :`);
    const note = parseFloat(saisie);

    if (isNaN(note) || note < 0 || note > 20) {
        alert("⚠️ Note invalide ! La note doit être comprise entre 0 et 20.");
    } else {
        notes.push(note);
    }
}

const somme = notes.reduce((acc, note) => acc + note, 0);
const moyenne = somme / notes.length;

alert(`La moyenne des notes est : ${moyenne.toFixed(2)}`);