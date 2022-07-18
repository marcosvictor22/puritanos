function Verificar(){
var fnome =  document.getElementById('txtnome')

if (fnome.value.length == 0){
    window.alert('Erro, nome nao encontrado')

}else {
    var nome = String(fnome.value)
    var img = document.createElement ('img')
    img.setAttribute('id','foto' )
    var texto =  document.createElement('p')

if (nome == "John Owen" ) {
  img.setAttribute('src', 'johnowen.jpg')
  texto.innerHTML = "De origem Galesa, Owen nasceu em Stadhampton em Oxfordshire e foi educado no Queen's College, Oxford. Puritano por criação, Owen deixa Oxford em 1637 por conta dos novos estatutos opressivos de William Laud, e se torna capelão e tutor da família de Sir Robert Dormer e, posteriormente, de Lord Lovelace. Com o advento da Guerra Civil Inglesa, Owen apoiou o parlamento e, por consequência, perdeu suas chances de herdar a herança de seu tio, um Realista Galês. Viveu por um tempo em Charterhouse Yard, atormentado por questões religiosas. Suas dúvidas foram sanadas por um sermão pregado por um desconhecido na igreja de St Mary Aldermanbury, onde ele estava com a intenção de ouvir Edmund Calamy pregar. Sua primeira publicação foi The Display of Arminianism (1642), uma acusação ao Arminianismo e defesa apaixonada do Calvinismo (Monergismo), que lhe rendeu a posição de pastor em uma congregação em Fordham, Essex, da qual um ministro escandaloso havia sido expulso. Em Fordham ele se manteve dedicado ao trabalho paroquial, tendo escrito apenas The Duty of Pastors and People Distinguished (O dever distinto dos Pastores e das pessoas, em tradução livre) até 1646"

  
} else if  (nome == "John Bunyan" ) {
  console.log(img)
img.setAttribute('src', 'johnbunyan.jpg')
texto.innerHTML = " John Bunyan (1628-1688) foi um pregador puritano batista, nascido na Inglaterra. Após sua dramática conversão, Bunyan dedicou-se à tarefa de pregar o Evangelho. Por não ser um ministro ordenado pela Igreja da Inglaterra, ele foi sucessivamente encarcerado por causa de sua atividade de pregação, tendo passado um total de 12 anos na prisão, quando escreveu a maioria de seus livros. Após sua dramática conversão, Bunyan dedicou-se à tarefa de pregar o Evangelho. Por não ser um ministro ordenado pela Igreja da Inglaterra, ele foi sucessivamente encarcerado por causa de sua atividade de pregação, tendo passado um total de 12 anos na prisão, quando escreveu a maioria de seus livros.Apesar do pouco estudo, Bunyan era um grande pregador e um exímio conhecedor das Escrituras – John Owen, um dos maiores teólogos da época, ao ser indagado pelo Rei Carlos II sobre o fato de um latoeiro inculto pregar, respondeu: “Pudesse eu possuir as habilidades do latoeiro para pregar, e, se apraz a sua majestade, alegremente renunciaria a todo meu estudo”. Dotado de uma imaginação vívida e poderosa, Bunyan era um escritor nato e incansável, tendo escrito cerca de 60 livros, entre eles: Abundante Graça para o chefe dos pecadores, A Guerra Santa, A vida e morte do senhor Badman, além de sua obra-prima, O peregrino – em duas partes, a primeira em 1678 e a segunda, A peregrina, em 1684 –, que se tornou o livro mais publicado do mundo, com exceção da Bíblia."

} else if (nome == "Richard Baxter") {
img.setAttribute ('src', 'richard.jpg')
texto.innerHTML = "Richard Baxter (Rowton - Chester, 12 de Novembro de 1615 — Shropshire, 8 de Dezembro de 1691) foi um líder puritano inglês, sacerdote, escritor, a quem Dean Stanley chamou o chefe dos protestantes intelectuais da Inglaterra. Em A ética protestante e o espírito do Capitalismo, Max Weber chama ao texto Christian Directory de Baxter um compêndio de teologia moral puritana. O seu escrito mais famoso é O Descanso Eterno dos Santos (The Saints' Everlasting Rest) de 1650."

} else if (nome == "Thomas Watson") {
img.setAttribute ('src', 'thomas.jpg')
texto.innerHTML = "O doce Puritano Thomas Watson nasceu 1620, estudou em Cambridge (Inglaterra). Em 1646, iniciou um pastorado de dezesseis anos em Londres. Em 1651, foi aprisionado com alguns outros ministros evangélicos, tendo sido liberto em 30 de junho de 1652 e reintegrado formalmente ao púlpito de sua igreja. Watson continuou a exercer seu ministério particularmente, quando encontrava oportunidade. Quando sua saúde decaiu, retirou-se para Barnston, em Essex, onde morreu repentinamente, enquanto orava em secreto. Foi sepultado em 28 de julho de 1686. Suas ilustrações práticas, doçura no ensino e fidelidade bíblica são cativantes. O seu Body of Pratical Divinity (Compêndio de Teologia Prática), foi publicado postumamente em 1692, composto de 176 sermões."

} else if (nome == "Thomas Brooks") {
img.setAttribute ('src', 'brooks.jpg')
texto.innerHTML = "Pouco se sabe sobre Thomas Brooks como homem, além do que pode ser verificado em seus muitos escritos. Nascido, provavelmente de pais abastados, em 1608, Brooks ingressou no Emmanuel College, Cambridge, em 1625. Ele foi licenciado como pregador do evangelho em 1640, o mais tardar. Antes dessa data, parece ter passado alguns anos no mar, provavelmente como capelão da frota. Após a Guerra Civil, Brooks tornou-se ministro no Thomas Apostle's, em Londres, e era suficientemente conhecido para ser escolhido como pregador perante a Câmara dos Comuns em 26 de dezembro de 1648. Três ou quatro anos depois, mudou-se para St Margaret's, Fish-street Hill, Londres, mas encontrou considerável oposição ao recusar o batismo e a Ceia do Senhor àqueles claramente 'indignos' de tais privilégios. Os anos seguintes foram repletos de ministério escrito e falado. Em 1662 foi vítima do notório Ato de Uniformidade, mas parece ter permanecido em sua paróquia e ter pregado a Palavra conforme a oportunidade oferecida. Tratados continuaram a fluir de sua caneta ágil. Em 1677 ou 1678 casou-se pela segunda vez, ela primavera-jovem, ele inverno-velho. Dois anos depois, ele foi para casa com seu Senhor."

} else window.alert('Erro, nome nao encontrado')



res.innerHTML = ``
res.appendChild(img)
res.appendChild(texto)

}












}

