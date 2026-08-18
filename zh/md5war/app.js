"use strict";

const FPS = 12;
const FACE_FILES = {
  start1: "kr54.gif",
  start2: "kr26.gif",
  start3: "kr18.gif",
  hit1: "kr43.gif",
  hit2: "kr35.gif",
  hit3: "kr11.gif",
  hit3d: "kr11.gif",
  hit4: "kr07.gif",
  hit5: "kr03.gif",
  atk1: "kr34.gif",
  crazy: "kr40.gif",
  anger: "kr39.gif",
  up: "kr32.gif",
  win2: "kr09.gif",
  win1: "kr24.gif",
  joke: "kr30.gif",
  win3: "kr53.gif",
  guard: "kr49.gif",
  speed: "kr01.gif",
  poison: "kr17.gif",
  sleep: "kr52.gif",
  recover: "kr31.gif",
  bite: "kr46.gif",
  out: "kr36.gif",
};

function safeAdd(x, y) {
  const low = (x & 0xffff) + (y & 0xffff);
  const high = (x >> 16) + (y >> 16) + (low >> 16);
  return (high << 16) | (low & 0xffff);
}

function rotateLeft(value, count) {
  return (value << count) | (value >>> (32 - count));
}

function md5Common(q, a, b, x, shift, constant) {
  return safeAdd(rotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, constant)), shift), b);
}

function md5F(a, b, c, d, x, shift, constant) {
  return md5Common((b & c) | (~b & d), a, b, x, shift, constant);
}

function md5G(a, b, c, d, x, shift, constant) {
  return md5Common((b & d) | (c & ~d), a, b, x, shift, constant);
}

function md5H(a, b, c, d, x, shift, constant) {
  return md5Common(b ^ c ^ d, a, b, x, shift, constant);
}

function md5I(a, b, c, d, x, shift, constant) {
  return md5Common(c ^ (b | ~d), a, b, x, shift, constant);
}

function coreMd5(words, bitLength) {
  const x = words.slice();
  x[bitLength >> 5] = (x[bitLength >> 5] || 0) | (128 << (bitLength % 32));
  x[(((bitLength + 64) >>> 9) << 4) + 14] = bitLength;

  let a = 1732584193;
  let b = -271733879;
  let c = -1732584194;
  let d = 271733878;

  for (let i = 0; i < x.length; i += 16) {
    const oldA = a;
    const oldB = b;
    const oldC = c;
    const oldD = d;
    const w = (n) => x[i + n] || 0;

    a = md5F(a, b, c, d, w(0), 7, -680876936);
    d = md5F(d, a, b, c, w(1), 12, -389564586);
    c = md5F(c, d, a, b, w(2), 17, 606105819);
    b = md5F(b, c, d, a, w(3), 22, -1044525330);
    a = md5F(a, b, c, d, w(4), 7, -176418897);
    d = md5F(d, a, b, c, w(5), 12, 1200080426);
    c = md5F(c, d, a, b, w(6), 17, -1473231341);
    b = md5F(b, c, d, a, w(7), 22, -45705983);
    a = md5F(a, b, c, d, w(8), 7, 1770035416);
    d = md5F(d, a, b, c, w(9), 12, -1958414417);
    c = md5F(c, d, a, b, w(10), 17, -42063);
    b = md5F(b, c, d, a, w(11), 22, -1990404162);
    a = md5F(a, b, c, d, w(12), 7, 1804603682);
    d = md5F(d, a, b, c, w(13), 12, -40341101);
    c = md5F(c, d, a, b, w(14), 17, -1502002290);
    b = md5F(b, c, d, a, w(15), 22, 1236535329);

    a = md5G(a, b, c, d, w(1), 5, -165796510);
    d = md5G(d, a, b, c, w(6), 9, -1069501632);
    c = md5G(c, d, a, b, w(11), 14, 643717713);
    b = md5G(b, c, d, a, w(0), 20, -373897302);
    a = md5G(a, b, c, d, w(5), 5, -701558691);
    d = md5G(d, a, b, c, w(10), 9, 38016083);
    c = md5G(c, d, a, b, w(15), 14, -660478335);
    b = md5G(b, c, d, a, w(4), 20, -405537848);
    a = md5G(a, b, c, d, w(9), 5, 568446438);
    d = md5G(d, a, b, c, w(14), 9, -1019803690);
    c = md5G(c, d, a, b, w(3), 14, -187363961);
    b = md5G(b, c, d, a, w(8), 20, 1163531501);
    a = md5G(a, b, c, d, w(13), 5, -1444681467);
    d = md5G(d, a, b, c, w(2), 9, -51403784);
    c = md5G(c, d, a, b, w(7), 14, 1735328473);
    b = md5G(b, c, d, a, w(12), 20, -1926607734);

    a = md5H(a, b, c, d, w(5), 4, -378558);
    d = md5H(d, a, b, c, w(8), 11, -2022574463);
    c = md5H(c, d, a, b, w(11), 16, 1839030562);
    b = md5H(b, c, d, a, w(14), 23, -35309556);
    a = md5H(a, b, c, d, w(1), 4, -1530992060);
    d = md5H(d, a, b, c, w(4), 11, 1272893353);
    c = md5H(c, d, a, b, w(7), 16, -155497632);
    b = md5H(b, c, d, a, w(10), 23, -1094730640);
    a = md5H(a, b, c, d, w(13), 4, 681279174);
    d = md5H(d, a, b, c, w(0), 11, -358537222);
    c = md5H(c, d, a, b, w(3), 16, -722521979);
    b = md5H(b, c, d, a, w(6), 23, 76029189);
    a = md5H(a, b, c, d, w(9), 4, -640364487);
    d = md5H(d, a, b, c, w(12), 11, -421815835);
    c = md5H(c, d, a, b, w(15), 16, 530742520);
    b = md5H(b, c, d, a, w(2), 23, -995338651);

    a = md5I(a, b, c, d, w(0), 6, -198630844);
    d = md5I(d, a, b, c, w(7), 10, 1126891415);
    c = md5I(c, d, a, b, w(14), 15, -1416354905);
    b = md5I(b, c, d, a, w(5), 21, -57434055);
    a = md5I(a, b, c, d, w(12), 6, 1700485571);
    d = md5I(d, a, b, c, w(3), 10, -1894986606);
    c = md5I(c, d, a, b, w(10), 15, -1051523);
    b = md5I(b, c, d, a, w(1), 21, -2054922799);
    a = md5I(a, b, c, d, w(8), 6, 1873313359);
    d = md5I(d, a, b, c, w(15), 10, -30611744);
    c = md5I(c, d, a, b, w(6), 15, -1560198380);
    b = md5I(b, c, d, a, w(13), 21, 1309151649);
    a = md5I(a, b, c, d, w(4), 6, -145523070);
    d = md5I(d, a, b, c, w(11), 10, -1120210379);
    c = md5I(c, d, a, b, w(2), 15, 718787259);
    b = md5I(b, c, d, a, w(9), 21, -343485551);

    a = safeAdd(a, oldA);
    b = safeAdd(b, oldB);
    c = safeAdd(c, oldC);
    d = safeAdd(d, oldD);
  }

  return [a, b, c, d];
}

// The original AS2 class stores Chinese code units as two little-endian bytes,
// while still passing string.length * 8 as the MD5 bit length. This quirk is
// required for the original Chinese-name results.
function stringToWords(value) {
  const words = [];
  let bytePosition = 0;
  let word = 0;

  for (let i = 0; i < value.length; i += 1) {
    const code = value.charCodeAt(i);
    const byteCount = code < 256 ? 1 : 2;
    if (byteCount + bytePosition < 5) {
      word |= code << (bytePosition * 8);
      bytePosition += byteCount;
      if (bytePosition === 4) {
        words.push(word);
        bytePosition = 0;
        word = 0;
      }
    } else {
      word |= (code & 0xff) << (bytePosition * 8);
      words.push(word);
      word = code >> 8;
      bytePosition = 1;
    }
  }

  if (bytePosition !== 0) words.push(word);
  return words;
}

function md5Words(value) {
  return coreMd5(stringToWords(value), value.length * 8);
}

function md5Hex(value) {
  const hex = "0123456789abcdef";
  let output = "";
  for (const word of md5Words(value)) {
    for (let byte = 0; byte < 4; byte += 1) {
      output += hex.charAt((word >> (byte * 8 + 4)) & 15);
      output += hex.charAt((word >> (byte * 8)) & 15);
    }
  }
  return output;
}

function md5Bits(value) {
  const bits = [];
  for (const word of md5Words(value)) {
    for (let bit = 0; bit < 32; bit += 1) bits.push((word >> bit) & 1);
  }
  return bits;
}

const ui = {
  names: [document.querySelector("#name-left"), document.querySelector("#name-right")],
  faces: [document.querySelector("#face-left"), document.querySelector("#face-right")],
  bars: [document.querySelector("#bar-left"), document.querySelector("#bar-right")],
  hp: [document.querySelector("#hp-left"), document.querySelector("#hp-right")],
  maxHp: [document.querySelector("#max-hp-left"), document.querySelector("#max-hp-right")],
  stats: [
    ["atk", "def", "spd", "acr", "luk"].map((stat) => document.querySelector(`#${stat}-left`)),
    ["atk", "def", "spd", "acr", "luk"].map((stat) => document.querySelector(`#${stat}-right`)),
  ],
  output: document.querySelector("#battle-output"),
  fight: document.querySelector("#fight"),
};

let users = [];
let battleBits = [];
let outputTimer = 0;
let displayStats = [[], []];

function extendBattleBits() {
  const [left, right] = users;
  if (left.hash < right.hash) {
    battleBits = battleBits.concat(
      md5Bits(left.name + right.name),
      md5Bits(right.name + left.name),
      md5Bits(left.name + right.hash),
      md5Bits(right.hash + left.name),
    );
  } else {
    battleBits = battleBits.concat(
      md5Bits(right.name + left.name),
      md5Bits(left.name + right.name),
      md5Bits(right.name + left.hash),
      md5Bits(left.hash + right.name),
    );
  }
}

function takeBits(source, count) {
  let bits = source;
  if (bits.length < count) {
    extendBattleBits();
    bits = battleBits;
  }
  let value = 0;
  let multiplier = 1;
  for (let i = 0; i < count; i += 1) {
    value += bits.shift() * multiplier;
    multiplier *= 2;
  }
  return value;
}

function bitRatio(count) {
  return takeBits(battleBits, count) / (2 ** count - 1);
}

function makeUser(name, id) {
  const hash = md5Hex(name);
  const hashBits = md5Bits(name);
  let speedOffset = 0;
  let weight = 0.1;
  for (const bit of hashBits) {
    speedOffset += weight * bit;
    weight *= 0.9;
  }

  takeBits(hashBits, 55);
  const gearTypes = [takeBits(hashBits, 3), takeBits(hashBits, 3)];
  const gearPower = Array(8).fill(0);
  gearPower[gearTypes[0]] = takeBits(hashBits, 4) + 1;
  const secondPower = takeBits(hashBits, 4) + 1;
  gearPower[gearTypes[1]] = Math.max(gearPower[gearTypes[1]], secondPower);

  const user = {
    id,
    name,
    tag: `<FONT COLOR='#000099'>[${name}]</FONT>`,
    hash,
    gearTypes,
    gearPower,
    item: "",
    maxHp: 145 + takeBits(hashBits, 8),
    atk: 0,
    def: 0,
    spd: 0,
    acr: 0,
    luk: 0,
    cdef: 0,
    cbit: 0,
    cpos: 0,
    cup: 0,
    ccrs: 0,
    ccnt: 0,
    cang: 0,
    cslp: 0,
    magic: "",
    magicAttack: 0,
    speedUp: 0,
    speedOffset,
  };

  takeBits(hashBits, 1);
  user.atk = 37 + takeBits(hashBits, 6);
  user.def = 37 + takeBits(hashBits, 6);
  user.spd = 37 + takeBits(hashBits, 6);
  user.acr = 37 + takeBits(hashBits, 6);
  user.luk = 37 + takeBits(hashBits, 6);
  if (takeBits(hashBits, 2) === 0) user.cdef = 1;
  if (takeBits(hashBits, 2) === 1) user.cbit = 1;
  if (takeBits(hashBits, 2) === 0) user.cpos = 1;
  if (takeBits(hashBits, 2) === 3) user.cup = 1;
  if (takeBits(hashBits, 2) === 0) user.ccrs = 1;
  if (takeBits(hashBits, 2) === 2) user.ccnt = 1;
  if (takeBits(hashBits, 2) === 1) user.cang = 1;
  if (takeBits(hashBits, 2) === 1) user.cslp = 1;

  const skillSum = user.cdef + user.cbit + user.cpos + user.cup + user.ccrs + user.ccnt + user.cang + user.cslp;
  user.sum = (user.maxHp / 4 + user.atk + user.def + user.spd + user.acr + user.luk) / 20 + skillSum;
  user.startFace = user.sum < 19 ? "start1" : user.sum > 25 ? "start3" : "start2";
  user.description = `${name}  HP:${Math.ceil(user.maxHp)} 攻:${Math.ceil(user.atk)} 防:${Math.ceil(user.def)} 速:${Math.ceil(user.spd)} 技:${Math.ceil(user.acr)} 运:${Math.ceil(user.luk)}`;

  user.japanese = name.includes("日本") ? 1 : 0;
  if (user.japanese) user.maxHp = Math.floor(user.maxHp * 0.8);
  user.maxHp = Math.ceil(user.maxHp);
  user.hp = user.maxHp;
  user.spd += speedOffset;
  user.acr /= 100;
  user.luk /= 100;
  return user;
}

function initializeUsers(leftName, rightName) {
  users = [makeUser(leftName, 0), makeUser(rightName, 1)];
  if (users[0].spd === users[1].spd) {
    users[users[0].name > users[1].name ? 0 : 1].spd += 0.001;
  }
}

function createBattleEvents() {
  battleBits = [];
  takeBits(battleBits, 1);

  for (let i = 0; i < 2; i += 1) {
    if (users[i].japanese) {
      users[i].atk -= 10;
      if (users[1 - i].sum < 19) {
        users[1 - i].def += 30;
        users[i].luk = 0.25;
      }
    }
  }

  let attacker = users[0].spd > users[1].spd ? users[0] : users[1];
  let defender = attacker === users[0] ? users[1] : users[0];
  const events = [];
  const addEvent = (wait, id, face, text) => {
    events.push({ wait, id, face, hp: [users[0].hp, users[1].hp], text });
  };
  const swap = () => {
    [attacker, defender] = [defender, attacker];
  };

  let turns = 0;
  while (users[0].hp > 0 && users[1].hp > 0 && turns < 10000) {
    turns += 1;
    let attackState;
    let defenseState = -1;
    let damage = -1;

    if (attacker.cbit !== 0 && takeBits(battleBits, 3) === 0 && (attacker.cbit > 0 || takeBits(battleBits, 6) - 15 > defender.gearPower[5] * 3)) {
      attackState = 6;
      addEvent(2, attacker.id, "crazy", `<BR>${attacker.tag}发狂了 `);
      addEvent(10, defender.id, "bite", `上前<FONT COLOR='#FF0000'>咬</FONT>了${defender.tag}一口，`);
    } else if (attacker.cang !== 0 && attacker.hp < attacker.maxHp && takeBits(battleBits, 3) === 0) {
      attackState = 5;
      addEvent(10, attacker.id, "anger", `<BR>${attacker.tag}发怒了，把${defender.tag}按在地上一顿<FONT COLOR='#FF0000'>暴打</FONT>，`);
    } else if (attacker.ccrs !== 0 && takeBits(battleBits, 3) === 0 && (attacker.ccrs > 0 || takeBits(battleBits, 6) - 15 > defender.gearPower[5] * 3)) {
      attackState = 4;
      addEvent(10, attacker.id, "poison", `<BR>${attacker.tag}<FONT COLOR='#ee00ee'>诅咒</FONT>${defender.tag}，`);
    } else if (attacker.cpos !== 0 && takeBits(battleBits, 3) === 0 && (attacker.cpos > 0 || takeBits(battleBits, 6) - 15 > defender.gearPower[5] * 3)) {
      attackState = 3;
      addEvent(10, attacker.id, "poison", `<BR>${attacker.tag}向${defender.tag}<FONT COLOR='#ee00ee'>投毒</FONT>，`);
    } else if (attacker.magic !== "" && takeBits(battleBits, 2) === 0) {
      attackState = 100;
      addEvent(10, attacker.id, "start3", `<BR>${attacker.tag}向${defender.tag}施放<FONT COLOR='#ff6600'>${attacker.magic}</FONT>，`);
    } else {
      attackState = 0;
      addEvent(10, attacker.id, "atk1", `<BR>${attacker.tag}向${defender.tag}发起攻击，`);
    }

    if (attacker.acr + 0.65 - bitRatio(7) * defender.luk < bitRatio(7)) {
      addEvent(20, defender.id, "speed", `但是被${defender.tag}<FONT COLOR='#0099CC'>闪开</FONT>了`);
      swap();
      continue;
    }

    if ((attackState === 0 || attackState === 6) && defender.ccnt !== 0 && takeBits(battleBits, 3) === 0 && (defender.ccnt > 0 || takeBits(battleBits, 6) - 15 > attacker.gearPower[5] * 3)) {
      addEvent(10, defender.id, "joke", `但是却被${defender.tag}<FONT COLOR='#ee00ee'>绊倒</FONT>了，`);
      damage = Math.ceil(defender.luk * takeBits(battleBits, 7) * 0.8);
      attacker.hp -= damage;
      addEvent(20, attacker.id, "hit2", `${attacker.tag}受到<FONT COLOR='#FF0000'>${damage}</FONT>点伤害`);
      swap();
      if (defender.hp < 1) {
        let face = attacker.hp === attacker.maxHp ? "win1" : attacker.hp < 50 ? "win3" : "win2";
        addEvent(10, attacker.id, face, `<BR>${defender.tag}被击败了`);
      }
      continue;
    }

    if ((attackState === 0 || attackState === 5 || attackState === 6) && defender.cdef !== 0 && takeBits(battleBits, 2) === 0) {
      defenseState = 2;
      addEvent(10, defender.id, "guard", `${defender.tag}<FONT COLOR='#cc8800'>防御</FONT>，`);
    } else {
      defenseState = 0;
    }

    if (attackState === 3) {
      if (defender.hp < attacker.gearPower[5] * 8 && Math.abs(attacker.cpos) === 2) {
        defender.hp -= damage;
        addEvent(20, defender.id, "hit2", `${defender.tag}受到<FONT COLOR='#FF0000'>${damage}</FONT>点伤害`);
      } else {
        defender.hp = Math.ceil(defender.hp / 2);
        addEvent(20, defender.id, "hit3", `${defender.tag}体力减半`);
      }
    } else if (attackState === 4) {
      defender.atk *= 0.8;
      defender.def *= 0.8;
      defender.spd *= 0.8;
      defender.acr *= 0.8;
      defender.luk *= 0.8;
      addEvent(20, defender.id, "hit3d", `${defender.tag}所有数值下降`);
    } else if (attackState === 6) {
      damage = attacker.atk * (attacker.atk + 8) / defender.def + attacker.luk * takeBits(battleBits, 7) * 0.8 - defender.luk * takeBits(battleBits, 6) * 0.8;
      if (defenseState === 2) damage = damage / 2 - 10;
      damage = damage < 1 ? (defenseState === 2 ? 0 : 1) : Math.round(damage);
      defender.hp -= damage;
      addEvent(20, defender.id, damage < 6 ? "hit1" : damage > 150 ? "hit5" : "hit2", `${defender.tag}受到<FONT COLOR='#FF0000'>${damage}</FONT>点伤害`);
    } else if (attackState === 0) {
      damage = attacker.atk * attacker.atk / defender.def - attacker.atk * Math.sqrt(defender.def) / 20 + attacker.luk * takeBits(battleBits, 7) - defender.luk * takeBits(battleBits, 6);
      if (defenseState === 2) damage = damage / 2 - 10;
      damage = damage < 1 ? (defenseState === 2 ? 0 : 1) : Math.round(damage);
      defender.hp -= damage;
      addEvent(20, defender.id, damage < 6 ? "hit1" : damage > 150 ? "hit5" : "hit2", `${defender.tag}受到<FONT COLOR='#FF0000'>${damage}</FONT>点伤害`);
    } else if (attackState === 5) {
      for (let hit = 0; hit < 7; hit += 1) {
        damage = attacker.atk * attacker.atk / defender.def - attacker.atk * Math.sqrt(defender.def) / 30;
        damage = damage / 3 + attacker.luk * takeBits(battleBits, 6) - defender.luk * takeBits(battleBits, 6) * 0.8;
        if (defenseState === 2) damage /= 2;
        damage = damage < 1 ? (defenseState === 2 ? 0 : 1) : Math.round(damage);
        defender.hp -= damage;
        const faces = ["hit2", "hit5", "hit4", "hit2", "hit5", "hit4", "hit2"];
        addEvent(5, defender.id, damage < 6 ? "hit1" : faces[hit], `<BR>${defender.tag}受到<FONT COLOR='#FF0000'>${damage}</FONT>点伤害`);
        if (defender.hp < 1) {
          addEvent(15, undefined, undefined, "");
          break;
        }
        const escapeBase = attacker.acr * (0.5 + hit / 10) + (5 - hit) / 10;
        if (hit === 6 || (escapeBase + defender.luk * 0.4) * bitRatio(7) > escapeBase) {
          addEvent(20, defender.id, "out", `<BR>${defender.tag}<FONT COLOR='#0099CC'>挣脱</FONT>了`);
          break;
        }
      }
    } else if (attackState === 100) {
      damage = attacker.magicAttack;
      defender.hp -= damage;
      addEvent(20, defender.id, damage < 6 ? "hit1" : damage > 150 ? "hit5" : "hit2", `${defender.tag}受到<FONT COLOR='#FF0000'>${damage}</FONT>点伤害`);
    }

    if (defender.hp > 0) {
      if (attacker.cslp !== 0 && damage > 10 && takeBits(battleBits, 3) === 0 && (attacker.cslp > 0 || takeBits(battleBits, 6) - 15 > defender.gearPower[5] * 3)) {
        addEvent(2, defender.id, "sleep", `<BR>${defender.tag}被<FONT COLOR='#ee00ee'>打晕了</FONT>,`);
        const recovered = Math.ceil(attacker.luk * takeBits(battleBits, 7) * 0.8);
        attacker.hp += recovered;
        addEvent(20, attacker.id, "recover", `${attacker.tag}趁机恢复了体力<FONT COLOR='#008800'>${recovered}</FONT>点`);
      }
      if (defender.cup !== 0 && defender.hp * 5 < defender.maxHp && takeBits(battleBits, 1) === 0 && (defender.cup > 0 || takeBits(battleBits, 6) - 15 > attacker.gearPower[5] * 3)) {
        defender.cup = 0;
        defender.atk = Math.round(defender.atk * 1.4);
        defender.def = Math.round(defender.def * 1.4);
        defender.spd = Math.round(defender.spd * 1.4);
        defender.acr = Math.round(defender.acr * 1.4);
        defender.luk = Math.round(defender.luk * 1.4);
        addEvent(20, defender.id, "up", `<BR>${defender.tag}作出<FONT COLOR='#0066FF'>垂死抗争</FONT>，所有数值上升`);
      }
      if (attacker.spd - defender.spd > 30 && takeBits(battleBits, 2) === 0) {
        addEvent(10, attacker.id, "speed", `<BR>${attacker.tag}发动<FONT COLOR='#0099CC'>连击</FONT>`);
      } else if (attacker.spd - defender.spd > 15 && takeBits(battleBits, 2) === 0) {
        addEvent(10, attacker.id, "speed", `<BR>${attacker.tag}发动<FONT COLOR='#0099CC'>连击</FONT>`);
      } else if (attacker.speedUp > 0 && takeBits(battleBits, 6) < attacker.speedUp) {
        addEvent(10, attacker.id, "speed", `<BR>${attacker.tag}发动<FONT COLOR='#0099CC'>连击</FONT>`);
      } else {
        swap();
      }
    } else {
      const face = attacker.hp === attacker.maxHp ? "win1" : attacker.hp < 50 ? "win3" : "win2";
      addEvent(10, attacker.id, face, `<BR>${defender.tag}被击败了`);
    }
  }

  return events;
}

function showFace(id, face) {
  const file = FACE_FILES[face];
  if (!file || id === undefined) return;
  ui.faces[id].src = `assets/faces/${file}`;
}

function updateHealth(id, value) {
  const shown = Math.max(0, value);
  const ratio = shown / users[id].maxHp;
  const clamped = Math.min(1, ratio);
  let red;
  let green;
  if (clamped < 0.5) {
    red = 255;
    green = Math.round(400 * clamped);
  } else {
    green = 200;
    red = Math.round(510 * (1 - clamped));
  }
  if (ratio > 1) {
    red = 0;
    green = 220;
  }
  ui.hp[id].textContent = shown;
  ui.hp[id].style.color = `rgb(${red}, ${green}, 0)`;
  ui.bars[id].style.backgroundColor = `rgb(${red}, ${green}, 0)`;
  ui.bars[id].style.display = "block";
  ui.bars[id].style.transform = `scaleY(${clamped})`;
}

function updateDisplayedStats(id, multiplier, color) {
  displayStats[id] = displayStats[id].map((value, index) => {
    const next = Math.ceil(value * multiplier);
    ui.stats[id][index].textContent = next;
    ui.stats[id][index].style.color = color;
    return next;
  });
}

function renderPanels() {
  for (const user of users) {
    const id = user.id;
    displayStats[id] = [user.atk, user.def, user.spd - user.speedOffset, user.acr * 100, user.luk * 100].map(Math.ceil);
    ui.maxHp[id].textContent = user.maxHp;
    ui.hp[id].textContent = user.hp;
    ui.stats[id].forEach((element, index) => {
      element.textContent = displayStats[id][index];
      element.style.color = "#000000";
    });
    showFace(id, user.startFace);
    updateHealth(id, user.hp);
  }
}

function renderInitialState() {
  renderPanels();
  ui.output.innerHTML = `<FONT COLOR='#006600'><B>MD5大作战网页版，v1.20</B></FONT><BR><BR>${users[0].description}<BR>${users[1].description}<BR><BR>`;
  ui.output.scrollTop = ui.output.scrollHeight;
}

function playEvents(events) {
  let elapsedFrames = 0;
  let waitFrames = 20;
  window.clearInterval(outputTimer);
  outputTimer = window.setInterval(() => {
    elapsedFrames += 1;
    if (elapsedFrames <= waitFrames) return;
    const event = events.shift();
    if (!event) {
      window.clearInterval(outputTimer);
      ui.fight.disabled = false;
      return;
    }

    ui.output.insertAdjacentHTML("beforeend", event.text);
    updateHealth(0, event.hp[0]);
    updateHealth(1, event.hp[1]);
    showFace(event.id, event.face);
    if (event.face === "up") updateDisplayedStats(event.id, 1.4, "#0000ff");
    if (event.face === "hit3d") updateDisplayedStats(event.id, 0.8, "#ff00ff");
    ui.output.scrollTop = ui.output.scrollHeight;
    waitFrames = event.wait;
    elapsedFrames = 0;
  }, 1000 / FPS);
}

function gainPopulation(value) {
  if (Math.floor(value % 2) === 0) value = (value + 100) / 2;
  if (value < 50) value += 50;
  return value;
}

function evaluateStrength(name) {
  let wins = 1;
  let losses = 1;
  let test = 0;
  ui.output.innerHTML = "<FONT COLOR='#006600'><B>MD5作战flash版，v1.20 实力评估</B></FONT><BR><BR>计算中。。。<BR><BR>";
  window.clearInterval(outputTimer);
  outputTimer = window.setInterval(() => {
    if (test < 100) {
      initializeUsers(name, `测试${test}`);
      renderPanels();
      const opponent = users[1];
      const skills = ["cdef", "cbit", "cpos", "cup", "ccrs", "ccnt", "cang", "cslp"];
      opponent[skills[opponent.maxHp % 8]] = 1;
      opponent.maxHp = (opponent.maxHp + 400) / 2;
      opponent.atk = gainPopulation(opponent.atk);
      opponent.def = gainPopulation(opponent.def);
      opponent.spd = gainPopulation(opponent.spd);
      opponent.acr = gainPopulation(opponent.acr * 100) / 100;
      opponent.luk = gainPopulation(opponent.luk * 100) / 100;
      createBattleEvents();
      const winner = users[0].hp > 0 ? users[0] : users[1];
      if (winner.id === 0) wins += 0.5 + winner.hp / winner.maxHp;
      else losses += 0.5 + winner.hp / winner.maxHp;
      test += 1;
      return;
    }

    window.clearInterval(outputTimer);
    const score = wins * 100 * 152 / (wins + losses) / 151;
    initializeUsers(name, name);
    renderPanels();
    ui.names[1].value = "[实力评估]";
    ui.output.insertAdjacentHTML("beforeend", `${users[0].tag} 实力评分:${score}`);
    ui.output.scrollTop = ui.output.scrollHeight;
    ui.fight.disabled = false;
  }, 1000 / FPS);
}

function fight() {
  if (ui.fight.disabled) return;
  const leftName = ui.names[0].value;
  const rightName = ui.names[1].value;
  if (leftName && rightName === "[实力评估]") {
    ui.fight.disabled = true;
    evaluateStrength(leftName);
    return;
  }
  if (!leftName || !rightName || leftName === rightName) return;
  window.clearInterval(outputTimer);
  ui.fight.disabled = true;
  initializeUsers(leftName, rightName);
  renderInitialState();
  playEvents(createBattleEvents());
}

for (const input of ui.names) {
  let composing = false;
  input.addEventListener("compositionstart", () => { composing = true; });
  input.addEventListener("compositionend", () => { composing = false; });
  input.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" || composing || event.isComposing) return;
    event.preventDefault();
    fight();
  });
}

ui.fight.addEventListener("click", fight);
ui.names[0].focus();
