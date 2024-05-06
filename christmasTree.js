function christmasTree(size) {
  let count = 1;
  let space = size;
  console.log(''.padStart(space, ' ') + '*');
  for (let index = 0; index < size; index++) {
    process.stdout.write(''.padStart(space, ' '));
    for (let index = 0; index < count; index++) {
      process.stdout.write('0');
    }
    console.log();
    count += 2;
    space--;
  }
}

christmasTree(10);
