n = 0;

function generate() {
  arr = [
    { x: window.innerWidth / 2 - 200, y: window.innerHeight / 2 + 200 },
    { x: window.innerWidth / 2 + 200, y: window.innerHeight / 2 + 200 },
  ];
  dir = 0;
  for (let iteration = 0; iteration < n; iteration++) {
    newArr = [];
    dist = -Math.sqrt(
      Math.pow(arr[0].x - arr[1].x, 2) + Math.pow(arr[0].y - arr[1].y, 2)
    );
    for (let i = 0; i < arr.length - 1; i++) {
      newArr.push(arr[i]);
      a = Math.atan2(arr[i].y - arr[i + 1].y, arr[i].x - arr[i + 1].x);
      if (dir === 0) {
        newArr.push({
          x:
            arr[i].x +
            Math.cos(a) * (dist / 2) +
            Math.cos(a + dir - (Math.PI / 3) * 2) * (dist / 2),
          y:
            arr[i].y +
            Math.sin(a) * (dist / 2) +
            Math.sin(a + dir - (Math.PI / 3) * 2) * (dist / 2),
        });
        newArr.push({
          x:
            arr[i].x +
            Math.cos(a) * (dist / 2) +
            Math.cos(a + dir - Math.PI / 3) * (dist / 2),
          y:
            arr[i].y +
            Math.sin(a) * (dist / 2) +
            Math.sin(a + dir - Math.PI / 3) * (dist / 2),
        });
      } else {
        newArr.push({
          x:
            arr[i].x +
            Math.cos(a) * (dist / 2) +
            Math.cos(a + dir - Math.PI / 3) * (dist / 2),
          y:
            arr[i].y +
            Math.sin(a) * (dist / 2) +
            Math.sin(a + dir - Math.PI / 3) * (dist / 2),
        });
        newArr.push({
          x:
            arr[i].x +
            Math.cos(a) * (dist / 2) +
            Math.cos(a + dir - (Math.PI / 3) * 2) * (dist / 2),
          y:
            arr[i].y +
            Math.sin(a) * (dist / 2) +
            Math.sin(a + dir - (Math.PI / 3) * 2) * (dist / 2),
        });
      }

      dir === 0 ? (dir = Math.PI) : (dir = 0);
    }
    last = arr[arr.length - 1];
    arr = [];
    newArr.forEach((point) => {
      arr.push(point);
    });
    arr.push(last);
  }
}

generate();

function draw() {
  for (let i = 0; i < arr.length - 1; i++) {
    drawLine(arr[i].x, arr[i].y, arr[i + 1].x, arr[i + 1].y);
  }
}

function update() {
  if (isKeyPressed[87]) {
    //w
    n += 0.03;
    console.log(n);
    generate();
  }
  if (isKeyPressed[83]) {
    //s
    n -= 0.03;
    console.log(n);
    generate();
  }
  if (isKeyPressed[38]) {
    //up
    n += 0.03;
    console.log(n);
    generate();
  }
  if (isKeyPressed[40]) {
    //down
    n -= 0.03;
    console.log(n);
    generate();
  }
  //   for (let i = 0; i < 100; i++) {
  //     if (isKeyPressed[i]) {
  //       console.log(i);
  //     }
  //   }
}
