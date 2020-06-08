var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ab, ac, ad, ae, af, ag, ah, ai, aj; 
var blocks;
var group;
var database;
var rf, gf, bf;
var rc, gc, bc;
var sliders;
function setup() {
  createCanvas(displayWidth, 611);
  database = firebase.database();
  sliderR = createSlider(0, 255, 0);
  sliderG = createSlider(0, 255, 0);
  sliderB = createSlider(0, 255, 0);
  sliderR.position(625, 200)
  sliderG.position(625, 300)
  sliderB.position(625, 400)
  a = createSprite(50, 50, 100, 100);
  b = createSprite(150, 50, 100, 100);
  c = createSprite(250, 50, 100, 100);
  d = createSprite(350, 50, 100, 100);
  e = createSprite(450, 50, 100, 100);
  f = createSprite(550, 50, 100, 100);
  g = createSprite(50, 150, 100, 100);
  h = createSprite(150, 150, 100, 100);
  i = createSprite(250, 150, 100, 100);
  j = createSprite(350, 150, 100, 100);
  k = createSprite(450, 150, 100, 100);
  l = createSprite(550, 150, 100, 100);
  m = createSprite(50, 250, 100, 100);
  n = createSprite(150, 250, 100, 100);
  o = createSprite(250, 250, 100, 100);
  p = createSprite(350, 250, 100, 100);
  q = createSprite(450, 250, 100, 100);
  r = createSprite(550, 250, 100, 100);
  s = createSprite(50, 350, 100, 100);
  t = createSprite(150, 350, 100, 100);
  u = createSprite(250, 350, 100, 100);
  v = createSprite(350, 350, 100, 100);
  w = createSprite(450, 350, 100, 100);
  x = createSprite(550, 350, 100, 100);
  y = createSprite(50, 450, 100, 100);
  z = createSprite(150, 450, 100, 100);
  aa = createSprite(250, 450, 100, 100);
  ab = createSprite(350, 450, 100, 100);
  ac = createSprite(450, 450, 100, 100);
  ad = createSprite(550, 450, 100, 100);
  ae = createSprite(50, 550, 100, 100);
  af = createSprite(150, 550, 100, 100);
  ag = createSprite(250, 550, 100, 100);
  ah = createSprite(350, 550, 100, 100);
  ai = createSprite(450, 550, 100, 100);
  aj = createSprite(550, 550, 100, 100);

  a.shapeColor = rgb(255, 255, 255);
  b.shapeColor = rgb(255, 255, 255);
  c.shapeColor = rgb(255, 255, 255);
  d.shapeColor = rgb(255, 255, 255);
  e.shapeColor = rgb(255, 255, 255);
  f.shapeColor = rgb(255, 255, 255);
  g.shapeColor = rgb(255, 255, 255);
  h.shapeColor = rgb(255, 255, 255);
  i.shapeColor = rgb(255, 255, 255);
  j.shapeColor = rgb(255, 255, 255);
  k.shapeColor = rgb(255, 255, 255);
  l.shapeColor = rgb(255, 255, 255);
  m.shapeColor = rgb(255, 255, 255);
  n.shapeColor = rgb(255, 255, 255);
  o.shapeColor = rgb(255, 255, 255);
  p.shapeColor = rgb(255, 255, 255);
  q.shapeColor = rgb(255, 255, 255);
  r.shapeColor = rgb(255, 255, 255);
  s.shapeColor = rgb(255, 255, 255);
  t.shapeColor = rgb(255, 255, 255);
  u.shapeColor = rgb(255, 255, 255);
  v.shapeColor = rgb(255, 255, 255);
  w.shapeColor = rgb(255, 255, 255);
  x.shapeColor = rgb(255, 255, 255);
  y.shapeColor = rgb(255, 255, 255);
  z.shapeColor = rgb(255, 255, 255);
  aa.shapeColor = rgb(255, 255, 255);
  ab.shapeColor = rgb(255, 255, 255);
  ac.shapeColor = rgb(255, 255, 255);
  ad.shapeColor = rgb(255, 255, 255);
  ae.shapeColor = rgb(255, 255, 255);
  af.shapeColor = rgb(255, 255, 255);
  ag.shapeColor = rgb(255, 255, 255);
  ah.shapeColor = rgb(255, 255, 255);
  ai.shapeColor = rgb(255, 255, 255);
  aj.shapeColor = rgb(255, 255, 255);


  //pixels = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ab, ac, ad, ae, af, ag, ah, ai, aj];
  
  
}

function draw() {
  background(0, 0, 0);
  rc = sliderR.value();
  gc = sliderG.value();
  bc = sliderB.value();
    
  push();
  fill(rc, gc, bc);
  rect(625, 500, 100, 100);
  pop();

  if (mousePressedOver(a)){
    sendToFirebase(1, rc, gc, bc);
    a.shapeColor = rgb(rc, gc, bc);
  } else if (mousePressedOver(b)){
    sendToFirebase(2, rc, gc, bc);
    b.shapeColor = rgb(rc, gc, bc);
  } else if (mousePressedOver(c)){
    sendToFirebase(3, rc, gc, bc);
    c.shapeColor = rgb(rc, gc, bc);
  } else if (mousePressedOver(d)){
    sendToFirebase(4, rc, gc, bc);
    d.shapeColor = rgb(rc, gc, bc);
  } else if (mousePressedOver(e)){
    sendToFirebase(5, rc, gc, bc);
    e.shapeColor = rgb(rc, gc, bc);
  } else if (mousePressedOver(f)){
    sendToFirebase(6, rc, gc, bc);
    f.shapeColor = rgb(rc, gc, bc);
  } else if (mousePressedOver(g)){
    sendToFirebase(7, rc, gc, bc);
    g.shapeColor = rgb(rc, gc, bc);
  } else if (mousePressedOver(h)){
    sendToFirebase(8, rc, gc, bc);
    h.shapeColor = rgb(rc, gc, bc);
  } else if (mousePressedOver(i)){
    sendToFirebase(9, rc, gc, bc);
    i.shapeColor = rgb(rc, gc, bc);
  } else if (mousePressedOver(j)){
    sendToFirebase(10, rc, gc, bc);
    j.shapeColor = rgb(rc, gc, bc);
  } else if (mousePressedOver(k)){
    sendToFirebase(11, rc, gc, bc);
    k.shapeColor = rgb(rc, gc, bc);
  } else if (mousePressedOver(l)){
    sendToFirebase(12, rc, gc, bc);
    l.shapeColor = rgb(rc, gc, bc);
  } else if (mousePressedOver(m)){
    sendToFirebase(13, rc, gc, bc);
    m.shapeColor = rgb(rc, gc, bc);
  } else if (mousePressedOver(n)){
    sendToFirebase(14, rc, gc, bc);
    n.shapeColor = rgb(rc, gc, bc);
  } else if (mousePressedOver(o)){
    sendToFirebase(15, rc, gc, bc);
    o.shapeColor = rgb(rc, gc, bc);
  } else if (mousePressedOver(p)){
    sendToFirebase(16, rc, gc, bc);
    p.shapeColor = rgb(rc, gc, bc);
  } else if (mousePressedOver(q)){
    sendToFirebase(17, rc, gc, bc);
    q.shapeColor = rgb(rc, gc, bc);
  } else if (mousePressedOver(r)){
    sendToFirebase(18, rc, gc, bc);
    r.shapeColor = rgb(rc, gc, bc);
  } else if (mousePressedOver(s)){
    sendToFirebase(19, rc, gc, bc);
    s.shapeColor = rgb(rc, gc, bc);
  } else if (mousePressedOver(t)){
    sendToFirebase(20, rc, gc, bc);
    t.shapeColor = rgb(rc, gc, bc);
  } else if (mousePressedOver(u)){
    sendToFirebase(21, rc, gc, bc);
    u.shapeColor = rgb(rc, gc, bc);
  } else if (mousePressedOver(v)){
    sendToFirebase(22, rc, gc, bc);
    v.shapeColor = rgb(rc, gc, bc);
  } else if (mousePressedOver(w)){
    sendToFirebase(23, rc, gc, bc);
    w.shapeColor = rgb(rc, gc, bc);
  } else if (mousePressedOver(x)){
    sendToFirebase(24, rc, gc, bc);
    x.shapeColor = rgb(rc, gc, bc);
  } else if (mousePressedOver(y)){
    sendToFirebase(25, rc, gc, bc);
    y.shapeColor = rgb(rc, gc, bc);
  } else if (mousePressedOver(z)){
    sendToFirebase(26, rc, gc, bc);
    z.shapeColor = rgb(rc, gc, bc);
  } else if (mousePressedOver(aa)){
    sendToFirebase(27, rc, gc, bc);
    aa.shapeColor = rgb(rc, gc, bc);
  } else if (mousePressedOver(ab)){
    sendToFirebase(28, rc, gc, bc);
    ab.shapeColor = rgb(rc, gc, bc);
  } else if (mousePressedOver(ac)){
    sendToFirebase(29, rc, gc, bc);
    ac.shapeColor = rgb(rc, gc, bc);
  } else if (mousePressedOver(ad)){
    sendToFirebase(30, rc, gc, bc);
    ad.shapeColor = rgb(rc, gc, bc);
  } else if (mousePressedOver(ae)){
    sendToFirebase(31, rc, gc, bc);
    ae.shapeColor = rgb(rc, gc, bc);
  } else if (mousePressedOver(af)){
    sendToFirebase(32, rc, gc, bc);
    af.shapeColor = rgb(rc, gc, bc);
  } else if (mousePressedOver(ag)){
    sendToFirebase(33, rc, gc, bc);
    ag.shapeColor = rgb(rc, gc, bc);
  } else if (mousePressedOver(ah)){
    sendToFirebase(34, rc, gc, bc);
    ah.shapeColor = rgb(rc, gc, bc);
  } else if (mousePressedOver(ai)){
    sendToFirebase(35, rc, gc, bc);
    ai.shapeColor = rgb(rc, gc, bc);
  } else if (mousePressedOver(aj)){
    sendToFirebase(36, rc, gc, bc);
    aj.shapeColor = rgb(rc, gc, bc);
  }
  getFromFirebase();
  drawSprites();
}

function sendToFirebase(num, r, g, b){
  database.ref('/positions/'+num).update({
    r: r,
    g: g,
    b: b
  })
}
function getFromFirebase(){
  for (var jj = 0; jj < 36; jj++){
  var Refr = database.ref('positions/'+(jj+1)+'/r');
  Refr.on("value", (data)=>{
    rf = Number(data.val());
  })
  var Refg = database.ref('positions/'+(jj+1)+'/g');
  Refg.on("value", (data)=>{
    gf = Number(data.val());
  })
  var Refb = database.ref('positions/'+(jj+1)+'/b');
  Refb.on("value", (data)=>{
    bf = Number(data.val());
  });
  switch(jj+1){
    case (1):
      a.shapeColor = rgb(rf, gf, bf);
      break;
    case (2):
      b.shapeColor = rgb(rf, gf, bf);
      break;
    case (3):
      c.shapeColor = rgb(rf, gf, bf);
      break;
    case (4):
      d.shapeColor = rgb(rf, gf, bf);
      break; 
    case (5):
      e.shapeColor = rgb(rf, gf, bf);
      break;
    case (6):
      f.shapeColor = rgb(rf, gf, bf);
      break;
    case (7):
      g.shapeColor = rgb(rf, gf, bf);
      break;
    case (8):
      h.shapeColor = rgb(rf, gf, bf);
      break;
    case (9):
      i.shapeColor = rgb(rf, gf, bf);
      break;
    case (10):
      j.shapeColor = rgb(rf, gf, bf);
      break;
    case (11):
      k.shapeColor = rgb(rf, gf, bf);
      break;
    case (12):
      l.shapeColor = rgb(rf, gf, bf);
      break;
    case (13):
      m.shapeColor = rgb(rf, gf, bf);
      break;
    case (14):
      n.shapeColor = rgb(rf, gf, bf);
      break;
    case (15):
      o.shapeColor = rgb(rf, gf, bf);
      break; 
    case (16):
      p.shapeColor = rgb(rf, gf, bf);
      break;
    case (17):
      q.shapeColor = rgb(rf, gf, bf);
      break;
    case (18):
      r.shapeColor = rgb(rf, gf, bf);
      break;
    case (19):
      s.shapeColor = rgb(rf, gf, bf);
      break; 
    case (20):
    t.shapeColor = rgb(rf, gf, bf);
    break;
    case (21):
    u.shapeColor = rgb(rf, gf, bf);
    break;
    case (22):
    v.shapeColor = rgb(rf, gf, bf);
    break;
    case (23):
    w.shapeColor = rgb(rf, gf, bf);
    break;
    case (24):
    x.shapeColor = rgb(rf, gf, bf);
    break;
    case (25):
    y.shapeColor = rgb(rf, gf, bf);
    break;
    case (26):
    z.shapeColor = rgb(rf, gf, bf);
    break;
    case (27):
    aa.shapeColor = rgb(rf, gf, bf);
    break;
    case (28):
    ab.shapeColor = rgb(rf, gf, bf);
    break;
    case (29):
    ac.shapeColor = rgb(rf, gf, bf);
    break;
    case (30):
    ad.shapeColor = rgb(rf, gf, bf);
    break; 
    case (31):
    ae.shapeColor = rgb(rf, gf, bf);
    break;
    case (32):
    af.shapeColor = rgb(rf, gf, bf);
    break;
    case (33):
    ag.shapeColor = rgb(rf, gf, bf);
    break;
    case (34):
    ah.shapeColor = rgb(rf, gf, bf);
    break;
    case (35):
    ai.shapeColor = rgb(rf, gf, bf);
    break;
    case (36):
    aj.shapeColor = rgb(rf, gf, bf);
    break; 
    }
}
}