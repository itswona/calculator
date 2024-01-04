const container = document.querySelector(".container");
const item = document.createElement("div");
item.setAttribute("class", "item");
container.appendChild(item);
const display = document.createElement("div");
display.setAttribute("class", "display");
const text = document.createElement("p");
text.textContent = "";
display.appendChild(text);
item.appendChild(display);
const keys = document.createElement("div");
keys.setAttribute("class", "keys");
item.appendChild(keys);
const key0 = document.createElement("button");
const key1 = document.createElement("button");
const key2 = document.createElement("button");
const key3 = document.createElement("button");
const key4 = document.createElement("button");
const key5 = document.createElement("button");
const key6 = document.createElement("button");
const key7 = document.createElement("button");
const key8 = document.createElement("button");
const key9 = document.createElement("button");
const keyAdd = document.createElement("button");
const keySubtract = document.createElement("button");
const keyMultiply = document.createElement("button");
const keyDivide =  document.createElement("button");
const keyTotal =  document.createElement("button");
const keyClear =  document.createElement("button");
key0.setAttribute("id", "key0");
key1.setAttribute("id", "key1");
key2.setAttribute("id", "key2");
key3.setAttribute("id", "key3");
key4.setAttribute("id", "key4");
key5.setAttribute("id", "key5");
key6.setAttribute("id", "key6");
key7.setAttribute("id", "key7");
key8.setAttribute("id", "key8");
key9.setAttribute("id", "key9");
keyAdd.setAttribute("id", "keyAdd");
keySubtract.setAttribute("id", "keySubtract");
keyMultiply.setAttribute("id", "keyMultiply");
keyDivide.setAttribute("id", "keyDivide");
keyTotal.setAttribute("id", "keyTotal");
keyClear.setAttribute("id", "keyClear");
key0.textContent = 0;
key1.textContent = 1;
key2.textContent = 2;
key3.textContent = 3;
key4.textContent = 4;
key5.textContent = 5;
key6.textContent = 6;
key7.textContent = 7;
key8.textContent = 8;
key9.textContent = 9;
keyAdd.textContent = "+";
keySubtract.textContent = "-";
keyMultiply.textContent = "*";
keyDivide.textContent = "/";
keyTotal.textContent = "=";
keyClear.textContent = "AC";
keys.append(key0, key1, key2, key3, key4, key5, key6, key7, key8, key9,
    keyAdd, keySubtract, keyMultiply, keyDivide, keyTotal, keyClear);