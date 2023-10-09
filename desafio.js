let heroi = "Lionel Messi"
let pontosXp = 10101

switch (true) {
  case  pontosXp <= 1000:
  console.log(" O herói " + heroi  + " tem " + pontosXp  + " xp e está no nível Ferro! "); 
  break;
  case  pontosXp > 1001 && pontosXp <= 2000:
  console.log(" O herói " + heroi  + " tem " + pontosXp  + " xp e está no nível Bronze! "); 
  break;
  case  pontosXp > 2001 && pontosXp <= 5000:
  console.log(" O herói " + heroi  + " tem " + pontosXp  + " xp e está no nível Prata! "); 
  break;
  case  pontosXp <= 6001 && pontosXp <= 7000:
  console.log(" O herói " + heroi  + " tem " + pontosXp  + " xp e está no nível Ouro! "); 
  break;
  case  pontosXp > 7001 && pontosXp <= 8000:
  console.log(" O herói " + heroi  + " tem " + pontosXp  + " xp e está no nível Platina! "); 
  break;
  case  pontosXp > 8001 && pontosXp <= 9000:
  console.log(" O herói " + heroi  + " tem " + pontosXp  + " xp e está no nível Ascendente! "); 
  break;
  case  pontosXp > 9001 && pontosXp <= 10000:
  console.log(" O herói " + heroi  + " tem " + pontosXp  + " xp e está no nível Imortal! "); 
  break;
  case pontosXp > 10000:
  console.log(" O herói " + heroi  + " tem " + pontosXp  + " xp e está no nível Radiante! ");
  break
  default:
  console.log(" O herói não tem classificação! ");
}















