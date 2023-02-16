/**
 * @param damage
 * @param armor
 */
const minimumHealth = (damage: number[], armor: number): number =>{
  // variable to track the sum of all the damage
  let sum = 0;
  // loop the damage and sum it all up.
  for (let i = 0; i < damage.length; i++) {
    sum += damage[i];
  }

  // which is the largest amount of damage?
  let check = Math.max(...damage);

  // return the sum of the damaage minus either
  // the armour or the largest damage amount,
  // chiechever is smaller
  // and add one.
  return sum - Math.min(armor, check) + 1;
}

export default minimumHealth;
