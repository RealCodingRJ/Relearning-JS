const isTrue = false;

const func = () => {
  if (!isTrue) {
    var x = 120;
    console.log(x);
  } else {
    isTrue = true;
    console.log(isTrue);
  }
};

func();
